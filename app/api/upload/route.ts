import { type NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { extractTextFromPDF } from "@/lib/pdf"
import { writeFile, mkdir } from "fs/promises"
import { join } from "path"

export async function POST(request: NextRequest) {
  const session = await auth()

  if (session?.user?.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const formData = await request.formData()
  const file = formData.get("file") as File | null

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 })
  }

  if (!file.name.endsWith(".pdf")) {
    return NextResponse.json(
      { error: "Only PDF files are accepted" },
      { status: 400 }
    )
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  // Save file
  const uploadsDir = join(process.cwd(), "public", "uploads")
  await mkdir(uploadsDir, { recursive: true })

  const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`
  const filePath = join(uploadsDir, filename)
  await writeFile(filePath, buffer)

  // Extract text
  let extractedText = ""
  try {
    extractedText = await extractTextFromPDF(buffer)
  } catch {
    extractedText = "[Text extraction failed]"
  }

  // Save to database
  const doc = await db.pDFDocument.create({
    data: {
      filename,
      originalName: file.name,
      fileSize: file.size,
      filePath: `/uploads/${filename}`,
      extractedText,
      processed: true,
      uploadedById: session.user.id,
    },
  })

  return NextResponse.json({
    id: doc.id,
    filename: doc.originalName,
    extractedText,
    filePath: doc.filePath,
  })
}

import { type NextRequest, NextResponse } from "next/server"
import { searchAll } from "@/lib/queries/search"

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")
  const type = request.nextUrl.searchParams.get("type") ?? "all"

  if (!q || !q.trim()) {
    return NextResponse.json({ results: [] })
  }

  const results = await searchAll(q, type)
  return NextResponse.json({ results })
}

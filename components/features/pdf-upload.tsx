"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Upload, FileText, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

export function PdfUpload() {
  const [isUploading, setIsUploading] = useState(false)
  const [extractedText, setExtractedText] = useState("")
  const [fileName, setFileName] = useState("")
  const [error, setError] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  async function handleUpload(file: File) {
    setIsUploading(true)
    setError("")
    setExtractedText("")

    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Upload failed")
        return
      }

      setExtractedText(data.extractedText)
      setFileName(data.filename)
      router.refresh()
    } catch {
      setError("Upload failed. Please try again.")
    } finally {
      setIsUploading(false)
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) handleUpload(file)
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file && file.name.endsWith(".pdf")) {
      handleUpload(file)
    } else {
      setError("Please drop a PDF file")
    }
  }

  function handleCreateArticle() {
    const params = new URLSearchParams({
      content: extractedText,
      title: fileName.replace(".pdf", ""),
      source: "pdf",
    })
    router.push(`/admin/articles/new?${params.toString()}`)
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="py-6">
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors hover:border-primary hover:bg-accent/50"
          >
            {isUploading ? (
              <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">
                  Uploading and extracting text...
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <Upload className="h-8 w-8 text-muted-foreground" />
                <p className="font-medium">
                  Drop a PDF here or click to upload
                </p>
                <p className="text-sm text-muted-foreground">
                  PDF files only, text will be automatically extracted
                </p>
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          {error && (
            <p className="text-sm text-destructive mt-3">{error}</p>
          )}
        </CardContent>
      </Card>

      {extractedText && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Extracted Text: {fileName}
            </CardTitle>
            <Button onClick={handleCreateArticle}>
              Create Article from Text
            </Button>
          </CardHeader>
          <CardContent>
            <Textarea
              value={extractedText}
              readOnly
              rows={15}
              className="font-mono text-xs"
            />
          </CardContent>
        </Card>
      )}
    </div>
  )
}

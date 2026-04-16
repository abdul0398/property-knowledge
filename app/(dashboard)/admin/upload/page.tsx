import { db } from "@/lib/db"
import { PdfUpload } from "@/components/features/pdf-upload"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export const metadata = {
  title: "Upload PDF — PropertyKnowledge",
}

export default async function UploadPage() {
  const documents = await db.pDFDocument.findMany({
    orderBy: { createdAt: "desc" },
    take: 20,
  })

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">
        PDF Knowledge Import
      </h1>
      <p className="text-muted-foreground">
        Upload PDFs to extract text and create knowledge articles.
      </p>

      <PdfUpload />

      {documents.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Uploaded Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>File</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Uploaded</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documents.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell className="font-medium">
                      {doc.originalName}
                    </TableCell>
                    <TableCell>
                      {(doc.fileSize / 1024).toFixed(1)} KB
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={doc.processed ? "default" : "secondary"}
                      >
                        {doc.processed ? "Processed" : "Pending"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {doc.createdAt.toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

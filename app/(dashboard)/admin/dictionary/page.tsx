import { db } from "@/lib/db"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DictionaryForm } from "@/components/features/dictionary-form"
import { AdminDeleteButton } from "@/components/features/admin-delete-button"
import { deleteDictionaryEntry } from "@/app/actions/admin"

export const metadata = {
  title: "Manage Dictionary — PropertyKnowledge",
}

export default async function AdminDictionaryPage() {
  const entries = await db.dictionaryEntry.findMany({
    orderBy: { term: "asc" },
  })

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dictionary Entries</h1>

      <div className="grid gap-6 lg:grid-cols-2">
        <DictionaryForm />

        <Card>
          <CardHeader>
            <CardTitle>Existing Entries ({entries.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Term</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {entries.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell className="font-medium">{entry.term}</TableCell>
                    <TableCell>
                      {entry.category && (
                        <Badge variant="outline">{entry.category}</Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <AdminDeleteButton
                        id={entry.id}
                        action={deleteDictionaryEntry}
                        confirmMessage={`Delete "${entry.term}"?`}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

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
import { CategoryForm } from "@/components/features/category-form"
import { AdminDeleteButton } from "@/components/features/admin-delete-button"
import { deleteCategory } from "@/app/actions/admin"

export const metadata = {
  title: "Manage Categories — PropertyKnowledge",
}

export default async function AdminCategoriesPage() {
  const categories = await db.category.findMany({
    orderBy: { order: "asc" },
    include: {
      _count: { select: { articles: true } },
    },
  })

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Categories</h1>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Add Category</CardTitle>
          </CardHeader>
          <CardContent>
            <CategoryForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Existing Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Articles</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((cat) => (
                  <TableRow key={cat.id}>
                    <TableCell className="font-medium">{cat.name}</TableCell>
                    <TableCell>{cat._count.articles}</TableCell>
                    <TableCell className="text-right">
                      <AdminDeleteButton
                        id={cat.id}
                        action={deleteCategory}
                        label="Delete"
                        confirmMessage={`Delete category "${cat.name}"? This will also delete all articles in this category.`}
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

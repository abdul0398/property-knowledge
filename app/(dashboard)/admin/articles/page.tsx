import { db } from "@/lib/db"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import { Plus } from "lucide-react"
import { AdminArticleActions } from "@/components/features/admin-article-actions"

export const metadata = {
  title: "Manage Articles — PropertyKnowledge",
}

export default async function AdminArticlesPage() {
  const articles = await db.article.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      category: { select: { name: true } },
    },
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Articles</h1>
        <Link href="/admin/articles/new" className={buttonVariants()}>
          <Plus className="h-4 w-4 mr-2" />
          New Article
        </Link>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {articles.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center py-8 text-muted-foreground"
                >
                  No articles yet. Create your first article.
                </TableCell>
              </TableRow>
            ) : (
              articles.map((article) => (
                <TableRow key={article.id}>
                  <TableCell className="font-medium max-w-xs truncate">
                    {article.title}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{article.category.name}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={article.published ? "default" : "secondary"}
                    >
                      {article.published ? "Published" : "Draft"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {article.createdAt.toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <AdminArticleActions
                      id={article.id}
                      published={article.published}
                    />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

import { notFound } from "next/navigation"
import { db } from "@/lib/db"
import { getAllCategories } from "@/lib/queries/categories"
import { ArticleForm } from "@/components/features/article-form"
import { updateArticle } from "@/app/actions/admin"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const article = await db.article.findUnique({
    where: { id },
    select: { title: true },
  })
  return { title: article ? `Edit: ${article.title}` : "Article Not Found" }
}

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const [article, categories] = await Promise.all([
    db.article.findUnique({ where: { id } }),
    getAllCategories(),
  ])

  if (!article) notFound()

  const boundAction = updateArticle.bind(null, id)

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Link
        href="/admin/articles"
        className={buttonVariants({ variant: "outline" })}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Articles
      </Link>

      <ArticleForm
        action={boundAction}
        categories={categories}
        defaultValues={{
          title: article.title,
          content: article.content,
          excerpt: article.excerpt ?? undefined,
          categoryId: article.categoryId,
          tags: article.tags.join(", "),
          published: article.published,
        }}
        submitLabel="Update Article"
      />
    </div>
  )
}

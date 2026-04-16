import { getAllCategories } from "@/lib/queries/categories"
import { ArticleForm } from "@/components/features/article-form"
import { createArticle } from "@/app/actions/admin"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Create Article — PropertyKnowledge",
}

export default async function NewArticlePage() {
  const categories = await getAllCategories()

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
        action={createArticle}
        categories={categories}
        submitLabel="Create Article"
      />
    </div>
  )
}

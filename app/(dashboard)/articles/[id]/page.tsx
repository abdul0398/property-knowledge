import { notFound } from "next/navigation"
import { auth } from "@/lib/auth"
import {
  getArticleById,
  getArticleRating,
  getUserBookmark,
  getUserRating,
} from "@/lib/queries/articles"
import { BookmarkButton } from "@/components/features/bookmark-button"
import { RatingStars } from "@/components/features/rating-stars"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const article = await getArticleById(id)
  if (!article) return { title: "Article Not Found" }
  return { title: `${article.title} — PropertyKnowledge` }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const session = await auth()

  const [article, ratingData] = await Promise.all([
    getArticleById(id),
    getArticleRating(id),
  ])

  if (!article) notFound()

  const [bookmark, userRating] = await Promise.all([
    session?.user?.id
      ? getUserBookmark(session.user.id, article.id)
      : null,
    session?.user?.id
      ? getUserRating(session.user.id, article.id)
      : null,
  ])

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/dashboard" className="hover:text-foreground">
          Dashboard
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link
          href={`/categories/${article.category.slug}`}
          className="hover:text-foreground"
        >
          {article.category.name}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground truncate max-w-48">
          {article.title}
        </span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">{article.title}</h1>

        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="outline">{article.category.name}</Badge>
          {article.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <BookmarkButton
            articleId={article.id}
            isBookmarked={!!bookmark}
          />
          <RatingStars
            articleId={article.id}
            currentRating={userRating?.value ?? 0}
            averageRating={ratingData.average}
            totalRatings={ratingData.count}
          />
        </div>

        <div className="text-sm text-muted-foreground">
          Last updated: {article.updatedAt.toLocaleDateString()}
        </div>
      </div>

      <Separator />

      {/* Content */}
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        {article.content.split("\n").map((line, i) => {
          if (line.startsWith("# ")) {
            return (
              <h1 key={i} className="text-2xl font-bold mt-8 mb-4">
                {line.slice(2)}
              </h1>
            )
          }
          if (line.startsWith("## ")) {
            return (
              <h2 key={i} className="text-xl font-semibold mt-6 mb-3">
                {line.slice(3)}
              </h2>
            )
          }
          if (line.startsWith("### ")) {
            return (
              <h3 key={i} className="text-lg font-semibold mt-4 mb-2">
                {line.slice(4)}
              </h3>
            )
          }
          if (line.startsWith("- ")) {
            return (
              <li key={i} className="ml-4">
                {line.slice(2)}
              </li>
            )
          }
          if (line.startsWith("| ")) {
            return (
              <p key={i} className="font-mono text-sm">
                {line}
              </p>
            )
          }
          if (line.trim() === "") {
            return <br key={i} />
          }
          return (
            <p key={i} className="mb-2">
              {line}
            </p>
          )
        })}
      </article>
    </div>
  )
}

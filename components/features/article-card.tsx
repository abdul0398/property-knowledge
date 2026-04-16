import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bookmark, Star } from "lucide-react"

interface ArticleCardProps {
  id: string
  title: string
  excerpt: string | null
  tags: string[]
  categoryName: string
  categorySlug: string
  createdAt: Date
  bookmarkCount: number
  ratingCount: number
}

export function ArticleCard({
  id,
  title,
  excerpt,
  tags,
  categoryName,
  createdAt,
  bookmarkCount,
  ratingCount,
}: ArticleCardProps) {
  return (
    <Link href={`/articles/${id}`}>
      <Card className="transition-all hover:shadow-md hover:border-primary/50 cursor-pointer h-full flex flex-col">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="outline" className="text-xs">
              {categoryName}
            </Badge>
          </div>
          <CardTitle className="text-base line-clamp-2">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-between">
          {excerpt && (
            <CardDescription className="line-clamp-3 mb-3">
              {excerpt}
            </CardDescription>
          )}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{createdAt.toLocaleDateString()}</span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Bookmark className="h-3 w-3" />
                {bookmarkCount}
              </span>
              <span className="flex items-center gap-1">
                <Star className="h-3 w-3" />
                {ratingCount}
              </span>
            </div>
          </div>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}

"use client"

import { useRouter } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

interface ArticleFiltersProps {
  currentSort: string
  currentTag?: string
  tags: string[]
  basePath: string
}

export function ArticleFilters({
  currentSort,
  currentTag,
  tags,
  basePath,
}: ArticleFiltersProps) {
  const router = useRouter()

  function buildUrl(params: Record<string, string | undefined>) {
    const searchParams = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      if (value) searchParams.set(key, value)
    })
    const qs = searchParams.toString()
    return `${basePath}${qs ? `?${qs}` : ""}`
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Select
        value={currentSort}
        onValueChange={(value) =>
          router.push(buildUrl({ sort: value ?? currentSort, tag: currentTag }))
        }
      >
        <SelectTrigger className="w-36">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Newest First</SelectItem>
          <SelectItem value="oldest">Oldest First</SelectItem>
        </SelectContent>
      </Select>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant={currentTag === tag ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() =>
                router.push(
                  buildUrl({
                    sort: currentSort,
                    tag: currentTag === tag ? undefined : tag,
                  })
                )
              }
            >
              {tag}
              {currentTag === tag && <X className="h-3 w-3 ml-1" />}
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}

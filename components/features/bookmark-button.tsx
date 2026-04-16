"use client"

import { useTransition } from "react"
import { toggleBookmark } from "@/app/actions/articles"
import { Button } from "@/components/ui/button"
import { Bookmark } from "lucide-react"
import { cn } from "@/lib/utils"

interface BookmarkButtonProps {
  articleId: string
  isBookmarked: boolean
}

export function BookmarkButton({
  articleId,
  isBookmarked,
}: BookmarkButtonProps) {
  const [isPending, startTransition] = useTransition()

  return (
    <Button
      variant="outline"
      size="sm"
      disabled={isPending}
      onClick={() => startTransition(() => toggleBookmark(articleId))}
      className={cn(isBookmarked && "text-primary border-primary")}
    >
      <Bookmark
        className={cn("h-4 w-4 mr-1", isBookmarked && "fill-current")}
      />
      {isBookmarked ? "Bookmarked" : "Bookmark"}
    </Button>
  )
}

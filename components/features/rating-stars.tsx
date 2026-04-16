"use client"

import { useTransition, useState } from "react"
import { rateArticle } from "@/app/actions/articles"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface RatingStarsProps {
  articleId: string
  currentRating: number
  averageRating: number
  totalRatings: number
}

export function RatingStars({
  articleId,
  currentRating,
  averageRating,
  totalRatings,
}: RatingStarsProps) {
  const [isPending, startTransition] = useTransition()
  const [hoveredStar, setHoveredStar] = useState(0)
  const [rating, setRating] = useState(currentRating)

  function handleRate(value: number) {
    setRating(value)
    startTransition(() => rateArticle(articleId, value))
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            disabled={isPending}
            onMouseEnter={() => setHoveredStar(star)}
            onMouseLeave={() => setHoveredStar(0)}
            onClick={() => handleRate(star)}
            className="p-0.5 transition-colors disabled:opacity-50"
          >
            <Star
              className={cn(
                "h-5 w-5 transition-colors",
                (hoveredStar ? star <= hoveredStar : star <= rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-muted-foreground"
              )}
            />
          </button>
        ))}
      </div>
      <span className="text-sm text-muted-foreground">
        {averageRating.toFixed(1)} ({totalRatings}{" "}
        {totalRatings === 1 ? "rating" : "ratings"})
      </span>
    </div>
  )
}

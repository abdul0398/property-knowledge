"use client"

import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath: string
  searchParams?: Record<string, string | undefined>
}

export function Pagination({
  currentPage,
  totalPages,
  basePath,
  searchParams = {},
}: PaginationProps) {
  function buildUrl(page: number) {
    const params = new URLSearchParams()
    params.set("page", page.toString())
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })
    return `${basePath}?${params.toString()}`
  }

  return (
    <div className="flex items-center justify-center gap-2">
      {currentPage > 1 ? (
        <Link
          href={buildUrl(currentPage - 1)}
          className={buttonVariants({ variant: "outline", size: "sm" })}
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Link>
      ) : (
        <span
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "pointer-events-none opacity-50"
          )}
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </span>
      )}

      <span className="text-sm text-muted-foreground px-2">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages ? (
        <Link
          href={buildUrl(currentPage + 1)}
          className={buttonVariants({ variant: "outline", size: "sm" })}
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Link>
      ) : (
        <span
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "pointer-events-none opacity-50"
          )}
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </span>
      )}
    </div>
  )
}

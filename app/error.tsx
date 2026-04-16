"use client"

import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-surface to-accent/30">
      <div className="text-center space-y-4 animate-fade-in-up">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-destructive">
          Something went wrong
        </p>
        <h1 className="font-heading text-7xl font-bold text-foreground/15">
          500
        </h1>
        <p className="text-muted-foreground text-sm max-w-xs mx-auto">
          An unexpected error occurred. Please try again.
        </p>
        <Button
          onClick={reset}
          className="warm-gradient text-white border-0 hover:opacity-90 gap-2 mt-2"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </Button>
      </div>
    </div>
  )
}

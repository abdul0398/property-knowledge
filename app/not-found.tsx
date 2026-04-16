import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-surface to-accent/30">
      <div className="text-center space-y-4 animate-fade-in-up">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-warm">
          Page Not Found
        </p>
        <h1 className="font-heading text-7xl font-bold text-foreground/15">
          404
        </h1>
        <p className="text-muted-foreground text-sm max-w-xs mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/dashboard"
          className={buttonVariants({
            variant: "default",
            className:
              "warm-gradient text-white border-0 hover:opacity-90 gap-2 mt-2",
          })}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
      </div>
    </div>
  )
}

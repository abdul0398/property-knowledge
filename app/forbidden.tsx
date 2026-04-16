import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft, ShieldOff } from "lucide-react"

export default function Forbidden() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-surface to-accent/30">
      <div className="text-center space-y-4 animate-fade-in-up">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 mb-2">
          <ShieldOff className="h-6 w-6 text-destructive" />
        </div>
        <h1 className="font-heading text-7xl font-bold text-foreground/15">
          403
        </h1>
        <p className="text-muted-foreground text-sm max-w-xs mx-auto">
          You don&apos;t have permission to access this page.
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

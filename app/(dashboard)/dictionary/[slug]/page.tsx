import { notFound } from "next/navigation"
import { getDictionaryEntryBySlug } from "@/lib/queries/dictionary"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ChevronRight, ArrowLeft, BookOpen, Lightbulb, Quote, Link2 } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const entry = await getDictionaryEntryBySlug(slug)
  if (!entry) return { title: "Term Not Found" }
  return { title: `${entry.term} — Property Dictionary` }
}

export default async function DictionaryEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const entry = await getDictionaryEntryBySlug(slug)

  if (!entry) notFound()

  return (
    <div className="max-w-3xl space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-muted-foreground animate-fade-in-up">
        <Link href="/dictionary" className="hover:text-warm transition-colors">
          Dictionary
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium">{entry.term}</span>
      </nav>

      <div className="animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="font-heading text-3xl font-bold tracking-tight">
            {entry.term}
          </h1>
          {entry.category && (
            <Badge
              variant="secondary"
              className="text-[10px] font-semibold uppercase tracking-wider"
            >
              {entry.category}
            </Badge>
          )}
        </div>
        <p className="text-muted-foreground leading-relaxed">
          {entry.definition}
        </p>
      </div>

      <Separator />

      {entry.explanation && (
        <Card
          className="border-border/50 shadow-sm animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <CardContent className="p-5">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-warm/10">
                <Lightbulb className="h-3.5 w-3.5 text-warm" />
              </div>
              <h3 className="font-heading font-semibold text-sm">Explanation</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed pl-9.5">
              {entry.explanation}
            </p>
          </CardContent>
        </Card>
      )}

      {entry.examples && (
        <Card
          className="border-border/50 shadow-sm animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          <CardContent className="p-5">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/8">
                <Quote className="h-3.5 w-3.5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-sm">Example</h3>
            </div>
            <div className="pl-9.5 border-l-2 border-warm/20 ml-3.5">
              <p className="text-sm text-muted-foreground leading-relaxed italic pl-3">
                {entry.examples}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {entry.relatedTerms.length > 0 && (
        <Card
          className="border-border/50 shadow-sm animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <CardContent className="p-5">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-muted/80">
                <Link2 className="h-3.5 w-3.5 text-muted-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-sm">Related Terms</h3>
            </div>
            <div className="flex flex-wrap gap-2 pl-9.5">
              {entry.relatedTerms.map((term) => (
                <Badge
                  key={term}
                  variant="outline"
                  className="text-xs font-medium border-border/60"
                >
                  {term}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
        <Link
          href="/dictionary"
          className={buttonVariants({
            variant: "outline",
            className: "gap-2 border-border/60 text-sm",
          })}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dictionary
        </Link>
      </div>
    </div>
  )
}

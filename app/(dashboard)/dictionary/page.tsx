import { getDictionaryEntries } from "@/lib/queries/dictionary"
import { DictionarySearch } from "@/components/features/dictionary-search"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const metadata = {
  title: "Property Dictionary — PropertyKnowledge",
}

export default async function DictionaryPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q } = await searchParams
  const entries = await getDictionaryEntries(q)

  const grouped = entries.reduce(
    (acc, entry) => {
      const letter = entry.term[0].toUpperCase()
      if (!acc[letter]) acc[letter] = []
      acc[letter].push(entry)
      return acc
    },
    {} as Record<string, typeof entries>
  )

  const letters = Object.keys(grouped).sort()

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="animate-fade-in-up">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-warm mb-1.5">
          Reference
        </p>
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          Property Dictionary
        </h1>
        <p className="text-muted-foreground mt-1.5 text-sm">
          Search and browse property terms and definitions
        </p>
      </div>

      <div className="animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
        <DictionarySearch initialQuery={q ?? ""} />
      </div>

      {entries.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground animate-fade-in-up">
          <p className="text-sm">
            {q ? `No entries found for "${q}"` : "No dictionary entries yet."}
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {letters.map((letter, li) => (
            <div
              key={letter}
              className="animate-fade-in-up"
              style={{ animationDelay: `${0.1 + li * 0.03}s` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-heading text-2xl font-bold text-warm">
                  {letter}
                </span>
                <div className="h-px flex-1 bg-border/50" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {grouped[letter].map((entry) => (
                  <Link key={entry.id} href={`/dictionary/${entry.slug}`}>
                    <Card className="border-border/50 shadow-sm card-hover hover:border-warm/30 cursor-pointer h-full">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="font-heading text-sm">
                            {entry.term}
                          </CardTitle>
                          {entry.category && (
                            <Badge
                              variant="secondary"
                              className="text-[10px] font-semibold uppercase tracking-wider"
                            >
                              {entry.category}
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                          {entry.definition}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

import { searchAll } from "@/lib/queries/search"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SearchFilters } from "@/components/features/search-filters"
import Link from "next/link"
import { FileText, BookOpen, FolderOpen, Search } from "lucide-react"

export const metadata = {
  title: "Search — PropertyKnowledge",
}

const typeIcons = {
  article: FileText,
  dictionary: BookOpen,
  category: FolderOpen,
}

const typeLabels = {
  article: "Article",
  dictionary: "Dictionary",
  category: "Category",
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; type?: string }>
}) {
  const { q, type } = await searchParams
  const results = q ? await searchAll(q, type) : []

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="animate-fade-in-up">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-warm mb-1.5">
          Search
        </p>
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          Search Results
        </h1>
        {q && (
          <p className="text-muted-foreground mt-1.5 text-sm">
            {results.length} result{results.length !== 1 ? "s" : ""} for &quot;{q}&quot;
          </p>
        )}
      </div>

      <div className="animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
        <SearchFilters currentQuery={q ?? ""} currentType={type ?? "all"} />
      </div>

      {!q ? (
        <div className="text-center py-16 animate-fade-in-up">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted/80 mb-4">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground">
            Enter a search term to find articles, dictionary entries, and categories.
          </p>
        </div>
      ) : results.length === 0 ? (
        <div className="text-center py-16 animate-fade-in-up">
          <p className="text-sm text-muted-foreground">
            No results found for &quot;{q}&quot;. Try a different search term.
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {results.map((result, i) => {
            const Icon = typeIcons[result.type]
            return (
              <Link key={`${result.type}-${result.id}`} href={result.url}>
                <Card
                  className="border-border/50 shadow-sm card-hover hover:border-warm/30 cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + i * 0.03}s` }}
                >
                  <CardContent className="flex items-start gap-4 py-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/60 shrink-0">
                      <Icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <p className="font-heading font-semibold text-sm">
                          {result.title}
                        </p>
                        <Badge
                          variant="outline"
                          className="text-[10px] font-semibold uppercase tracking-wider"
                        >
                          {typeLabels[result.type]}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {result.excerpt}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

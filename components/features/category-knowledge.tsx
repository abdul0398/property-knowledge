"use client"

import { useState, useMemo, useRef, useEffect, useCallback } from "react"
import { ExternalLink, Search, X, CheckCircle, AlertTriangle } from "lucide-react"
import type { QA, WorkflowDef } from "@/content"

// ── Helpers ──

function formatAnswer(text: string): string {
  return text
    .replace(
      /\*\*(.+?)\*\*/g,
      '<strong class="font-semibold text-foreground">$1</strong>'
    )
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(
      /`(.+?)`/g,
      '<code class="bg-muted/80 text-foreground/80 px-1.5 py-0.5 rounded text-[11px] font-mono">$1</code>'
    )
    .replace(/\n/g, "<br />")
}

const FILLERS = new Set([
  "how", "much", "is", "the", "a", "an", "what", "are", "can", "i", "my",
  "client", "do", "does", "will", "would", "should", "if", "to", "for",
  "of", "in", "on", "at", "by", "with", "from", "this", "that", "it",
  "me", "you", "they", "them", "their", "any", "some", "please", "tell",
  "about", "and", "or", "but", "when", "where", "why", "who", "which",
  "be", "been", "has", "have", "had", "was", "were",
])

function normalizeQuery(q: string, synonyms: Record<string, string[]>) {
  if (!q) return { tokens: [] as string[], expanded: [] as string[] }
  const cleaned = q.toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim()
  const words = cleaned.split(" ").filter((w) => w && !FILLERS.has(w))
  const expanded = new Set(words)
  words.forEach((w) => {
    if (synonyms[w]) {
      synonyms[w].forEach((s) => s.split(" ").forEach((sw) => expanded.add(sw)))
    }
  })
  return { tokens: words, expanded: Array.from(expanded) }
}

function scoreCard(
  qa: QA,
  tokens: string[],
  expanded: string[]
): number {
  if (tokens.length === 0) return 0
  const question = qa.question.toLowerCase()
  const answer = (qa.shortAnswer + " " + qa.answer).toLowerCase()
  const tags = (qa.tags || "").toLowerCase()

  let score = 0
  const phrase = tokens.join(" ")
  if (phrase && question.includes(phrase)) score += 100
  if (phrase && tags.includes(phrase)) score += 80

  tokens.forEach((tok) => {
    if (question.includes(tok)) score += 15
    if (tags.includes(tok)) score += 12
    if (answer.includes(tok)) score += 3
  })

  expanded.forEach((tok) => {
    if (tokens.includes(tok)) return
    if (question.includes(tok)) score += 8
    if (tags.includes(tok)) score += 6
    if (answer.includes(tok)) score += 1
  })

  if (qa.isUpdated) score += 1
  return score
}

function matchesPersonaFilter(qa: QA, filter: string): boolean {
  if (filter === "all") return true
  const personas = (qa.personas || "").toLowerCase()
  if (filter === "updated") return qa.isUpdated
  if (filter === "buyer") return personas.includes("buyer")
  if (filter === "seller") return personas.includes("seller")
  if (filter === "upgrader") return personas.includes("upgrader")
  if (filter === "senior") return personas.includes("senior")
  if (filter === "single") return personas.includes("single")
  if (filter === "pr") return personas.includes("pr/foreigner")
  if (filter === "divorce") return personas.includes("divorce")
  if (filter === "landlord") return personas.includes("landlord")
  return true
}

// ── Sub-components ──

function PriorityBadge({ priority }: { priority: string }) {
  const styles: Record<string, string> = {
    high: "bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-400",
    medium: "bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400",
    low: "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
  }
  return (
    <span className={`inline-flex items-center rounded px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider ${styles[priority] ?? styles.low}`}>
      {priority}
    </span>
  )
}

function WorkflowTag({ workflow, workflows }: { workflow: string; workflows: WorkflowDef[] }) {
  const wf = workflows.find((w) => w.id === workflow)
  if (!wf) return null
  return (
    <span
      className="inline-flex items-center rounded px-1.5 py-0.5 text-[9px] font-semibold"
      style={{ color: wf.color, background: `color-mix(in srgb, ${wf.color} 8%, transparent)` }}
    >
      {wf.label}
    </span>
  )
}

function PersonaBadge({ persona }: { persona: string }) {
  return (
    <span className="inline-flex items-center rounded px-1.5 py-0.5 text-[9px] font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 capitalize">
      {persona.replace("_", " ").replace("/", " / ")}
    </span>
  )
}

function UpdatedBadge() {
  return (
    <span className="inline-flex items-center rounded px-1.5 py-0.5 text-[9px] font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
      Updated
    </span>
  )
}

function QACard({
  qa,
  workflows,
  isOpen,
  onToggle,
}: {
  qa: QA
  workflows: WorkflowDef[]
  isOpen: boolean
  onToggle: () => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={cardRef} className="bg-card border border-border/60 rounded-[10px] mb-2 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-2 px-4 py-3 text-[12.5px] font-semibold text-foreground/90 hover:text-[#c2410c] transition-colors text-left select-none"
      >
        <span className="flex-1">{qa.question}</span>
        <span className={`text-muted-foreground text-[11px] shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}>
          &#9660;
        </span>
      </button>

      {isOpen && (
        <div className="px-4 pb-3.5">
          {/* Short Answer */}
          <div className="rounded-[7px] border border-border/30 bg-muted/30 p-3.5 text-[12.5px] leading-[1.7]">
            <div className="font-semibold text-foreground border-b border-dashed border-border/50 pb-1.5 mb-1.5">
              {qa.shortAnswer}
            </div>
            {qa.answer && (
              <div
                className="text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: formatAnswer(qa.answer) }}
              />
            )}
            {/* HDB Ref */}
            {qa.hdbRef && (
              qa.hdbRef.startsWith("✓") ? (
                <div className="mt-2 inline-flex items-center gap-1 rounded bg-emerald-50 dark:bg-emerald-950 px-2 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                  {qa.hdbRef}
                </div>
              ) : (
                <div className="mt-2 text-[11px] italic text-muted-foreground">
                  {qa.hdbRef}
                </div>
              )
            )}
          </div>

          {/* Meta */}
          <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
            {qa.hdbRef && qa.hdbRef.startsWith("✓") && (
              <span className="inline-flex items-center gap-1 rounded bg-emerald-50 dark:bg-emerald-950 px-2 py-1 text-[10px] font-bold text-emerald-700 dark:text-emerald-400">
                <CheckCircle className="h-3 w-3" />
                Verified
              </span>
            )}
            <PriorityBadge priority={qa.priority} />
            {qa.isUpdated && <UpdatedBadge />}
            {qa.personas && qa.personas.split(" ").map((p) => (
              <PersonaBadge key={p} persona={p} />
            ))}
            <WorkflowTag workflow={qa.workflow} workflows={workflows} />
          </div>
        </div>
      )}
    </div>
  )
}

// ── Main Component ──

export function CategoryKnowledge({
  name,
  description,
  questions,
  workflows,
  recentChanges,
  popularSearches,
  personaFilters,
  synonyms,
}: {
  name: string
  description: string
  questions: QA[]
  workflows: WorkflowDef[]
  recentChanges?: { date: string; text: string }[]
  popularSearches?: { label: string; query: string }[]
  personaFilters?: { id: string; label: string }[]
  synonyms?: Record<string, string[]>
}) {
  const [search, setSearch] = useState("")
  const [activePersona, setActivePersona] = useState("all")
  const [openCards, setOpenCards] = useState<Set<number>>(new Set())
  const [showAutocomplete, setShowAutocomplete] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)
  const acRef = useRef<HTMLDivElement>(null)

  const syn = synonyms ?? {}

  const toggleCard = useCallback((id: number) => {
    setOpenCards((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  // Score and filter questions
  const { filteredQuestions, topMatches } = useMemo(() => {
    const { tokens, expanded } = normalizeQuery(search, syn)
    const hasSearch = tokens.length > 0

    const scored = questions.map((q) => ({
      qa: q,
      score: hasSearch ? scoreCard(q, tokens, expanded) : 1,
    }))

    const filtered = scored.filter((item) => {
      if (!matchesPersonaFilter(item.qa, activePersona)) return false
      if (hasSearch && item.score <= 0) return false
      return true
    })

    const top = hasSearch
      ? [...filtered].sort((a, b) => b.score - a.score).slice(0, 5)
      : []

    return {
      filteredQuestions: filtered.map((f) => f.qa),
      topMatches: top.map((t) => t.qa),
    }
  }, [questions, search, activePersona, syn])

  // Autocomplete suggestions
  const autocompleteSuggestions = useMemo(() => {
    if (search.trim().length < 2) return []
    const { tokens, expanded } = normalizeQuery(search, syn)
    if (tokens.length === 0) return []

    return questions
      .map((q) => ({ qa: q, score: scoreCard(q, tokens, expanded) }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map((x) => x.qa)
  }, [questions, search, syn])

  // Group filtered questions by workflow
  const groupedByWorkflow = useMemo(() => {
    const groups: { workflow: WorkflowDef; questions: QA[] }[] = []
    for (const w of workflows) {
      const qs = filteredQuestions.filter((q) => q.workflow === w.id)
      if (qs.length > 0) groups.push({ workflow: w, questions: qs })
    }
    return groups
  }, [filteredQuestions, workflows])

  function quickSearch(query: string) {
    setSearch(query)
    setShowAutocomplete(false)
    searchRef.current?.focus()
  }

  function jumpToCard(qaId: number) {
    setShowAutocomplete(false)
    setOpenCards((prev) => new Set(prev).add(qaId))
    setTimeout(() => {
      const el = document.getElementById(`qa-card-${qaId}`)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" })
        el.style.transition = "box-shadow 0.4s"
        el.style.boxShadow = "0 0 0 3px rgba(194,65,12,0.35)"
        setTimeout(() => { el.style.boxShadow = "" }, 1500)
      }
    }, 50)
  }

  // Close autocomplete on click outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (acRef.current && !acRef.current.contains(e.target as Node)) {
        setShowAutocomplete(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <div className="space-y-4 w-full max-w-[900px]">
      {/* Header */}
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c2410c] mb-1.5">
          Property Knowledge Base
        </p>
        <h1 className="font-heading text-[1.75rem] font-extrabold tracking-tight">
          {name} Advisory Dictionary
        </h1>
        <p className="text-muted-foreground mt-1 text-[0.85rem] max-w-xl">
          {description}
        </p>
        <p className="text-[10px] text-muted-foreground mt-1.5 uppercase tracking-wider">
          Last verified: April 2026
        </p>
      </div>

      {/* Recent Changes */}
      {recentChanges && recentChanges.length > 0 && (
        <div className="rounded-lg border border-red-200 dark:border-red-900 border-l-[3px] border-l-red-600 bg-red-50/80 dark:bg-red-950/30 px-4 py-3.5 text-[12.5px]">
          <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-red-800 dark:text-red-400 mb-1.5 flex items-center gap-1.5">
            <AlertTriangle className="h-3.5 w-3.5" />
            Recent rule changes — don&apos;t get caught out
          </h4>
          <ul className="space-y-0.5">
            {recentChanges.map((rc, i) => (
              <li key={i} className="text-red-900 dark:text-red-300">
                <strong className="text-red-950 dark:text-red-200">{rc.date}:</strong> {rc.text}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Search with autocomplete */}
      <div className="relative" ref={acRef}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
          <input
            ref={searchRef}
            type="text"
            placeholder="Try: 'how much ehg', 'divorce mop', 'upgrade condo absd', 'cpf 55'..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setShowAutocomplete(true)
            }}
            onFocus={() => setShowAutocomplete(true)}
            className="w-full rounded-[10px] border border-border/60 bg-card py-2.5 pl-10 pr-10 text-sm outline-none transition-all focus:border-[#c2410c]/40 focus:shadow-[0_0_0_3px_rgba(194,65,12,0.08)]"
          />
          {search && (
            <button
              onClick={() => { setSearch(""); setShowAutocomplete(false) }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full bg-muted/80 p-1 text-muted-foreground hover:bg-muted"
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </div>

        {/* Autocomplete dropdown */}
        {showAutocomplete && search.trim().length >= 2 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-[10px] shadow-lg z-50 overflow-hidden max-h-[360px] overflow-y-auto">
            {autocompleteSuggestions.length === 0 ? (
              <div className="p-3.5 text-center text-muted-foreground text-xs">
                No matches. Try different keywords.
              </div>
            ) : (
              autocompleteSuggestions.map((qa) => {
                const wf = workflows.find((w) => w.id === qa.workflow)
                return (
                  <button
                    key={qa.id}
                    onMouseDown={() => jumpToCard(qa.id)}
                    className="w-full text-left px-3.5 py-2.5 border-b border-border/30 last:border-b-0 hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-colors"
                  >
                    <div className="text-[13px] font-semibold text-foreground">{qa.question}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">
                      {wf?.label}
                    </div>
                  </button>
                )
              })
            )}
          </div>
        )}
      </div>

      {/* Popular shortcut chips */}
      {popularSearches && popularSearches.length > 0 && (
        <div className="flex gap-1.5 flex-wrap items-center">
          <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mr-0.5">
            Popular:
          </span>
          {popularSearches.map((ps) => (
            <button
              key={ps.label}
              onClick={() => quickSearch(ps.query)}
              className="text-[11px] font-semibold px-2.5 py-1 border border-border rounded-full bg-card text-foreground hover:bg-[#c2410c] hover:text-white hover:border-[#c2410c] transition-all select-none"
            >
              {ps.label}
            </button>
          ))}
        </div>
      )}

      {/* Persona filter chips */}
      {personaFilters && personaFilters.length > 0 && (
        <div className="flex gap-1.5 flex-wrap">
          {personaFilters.map((pf) => (
            <button
              key={pf.id}
              onClick={() => setActivePersona(pf.id)}
              className={`text-[11px] font-semibold px-2.5 py-1 border rounded-full transition-all select-none ${
                activePersona === pf.id
                  ? "bg-[#c2410c] text-white border-[#c2410c]"
                  : "border-border bg-card text-muted-foreground hover:border-[#c2410c] hover:text-[#c2410c]"
              }`}
            >
              {pf.label}
            </button>
          ))}
        </div>
      )}

      {/* Results count */}
      <p className="text-[0.72rem] font-semibold text-muted-foreground">
        {filteredQuestions.length} result{filteredQuestions.length !== 1 ? "s" : ""}
      </p>

      {/* Top Matches */}
      {topMatches.length > 0 && (
        <div className="rounded-[10px] border border-orange-200 dark:border-orange-900 bg-gradient-to-br from-orange-50 to-orange-50/50 dark:from-orange-950/20 dark:to-orange-950/10 p-3.5">
          <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#c2410c] mb-2 flex items-center gap-1.5">
            Best matches for your search
            <span className="bg-[#c2410c] text-white px-1.5 py-px rounded-full text-[9px]">
              {topMatches.length}
            </span>
          </div>
          {topMatches.map((qa) => {
            const wf = workflows.find((w) => w.id === qa.workflow)
            return (
              <button
                key={qa.id}
                onClick={() => jumpToCard(qa.id)}
                className="w-full bg-white dark:bg-card border border-border rounded-lg px-3 py-2.5 mb-1.5 last:mb-0 text-left flex items-center gap-2 text-[12.5px] font-semibold hover:border-[#c2410c] hover:translate-x-0.5 transition-all"
              >
                <span className="flex-1">{qa.question}</span>
                <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider ml-1.5">
                  {wf?.label}
                </span>
                <span className="text-[#c2410c] font-bold">→</span>
              </button>
            )
          })}
        </div>
      )}

      {/* Q&A Sections grouped by workflow */}
      {groupedByWorkflow.length === 0 ? (
        <div className="rounded-[10px] border border-border/50 bg-card py-10 text-center">
          <p className="text-3xl mb-2">&#128269;</p>
          <p className="font-heading font-semibold text-muted-foreground">No results found</p>
          <p className="text-xs text-muted-foreground mt-1">Try different keywords or clear filters</p>
        </div>
      ) : (
        groupedByWorkflow.map(({ workflow: wf, questions: qs }) => (
          <div key={wf.id} className="mb-5">
            <div className="flex items-center gap-2 text-[0.95rem] font-bold mb-2.5 pb-1.5 border-b-2 border-border">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ background: wf.color }}
              />
              {wf.label}
              <span className="ml-auto text-[11px] font-bold bg-muted/80 text-muted-foreground px-1.5 py-px rounded">
                {qs.length}
              </span>
            </div>
            {qs.map((qa) => (
              <div key={qa.id} id={`qa-card-${qa.id}`}>
                <QACard
                  qa={qa}
                  workflows={workflows}
                  isOpen={openCards.has(qa.id)}
                  onToggle={() => toggleCard(qa.id)}
                />
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  )
}

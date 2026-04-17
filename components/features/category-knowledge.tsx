"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { ExternalLink, Search } from "lucide-react"
import type { QA, WorkflowDef } from "@/content"

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

function PriorityBadge({ priority }: { priority: string }) {
  const styles: Record<string, string> = {
    high: "bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-400",
    medium: "bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400",
    low: "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
  }

  return (
    <span
      className={`inline-flex items-center rounded px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider ${styles[priority] ?? styles.low}`}
    >
      {priority}
    </span>
  )
}

function WorkflowTag({ workflow, workflows }: { workflow: string; workflows: WorkflowDef[] }) {
  const wf = workflows.find((w) => w.id === workflow)
  if (!wf) return null

  return (
    <span
      className="inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-semibold"
      style={{
        color: wf.color,
        background: `color-mix(in srgb, ${wf.color} 8%, transparent)`,
      }}
    >
      {wf.label}
    </span>
  )
}

export function CategoryKnowledge({
  name,
  description,
  questions,
  workflows,
}: {
  name: string
  description: string
  questions: QA[]
  workflows: WorkflowDef[]
}) {
  const [activeWorkflow, setActiveWorkflow] = useState<string | null>(null)
  const [search, setSearch] = useState("")

  const filteredQuestions = questions.filter((q) => {
    if (activeWorkflow && q.workflow !== activeWorkflow) return false
    if (search.trim()) {
      const s = search.toLowerCase()
      return (
        q.question.toLowerCase().includes(s) ||
        q.answer.toLowerCase().includes(s)
      )
    }
    return true
  })

  const workflowCounts = workflows.map((w) => ({
    ...w,
    count: questions.filter((q) => q.workflow === w.id).length,
  }))

  return (
    <div className="space-y-5 w-full">
      {/* Header */}
      <div className="animate-fade-in-up">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-warm mb-1.5">
          Knowledge Base
        </p>
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          {name}
        </h1>
        <p className="text-muted-foreground mt-1.5 text-sm max-w-xl">
          {description}
        </p>
      </div>

      {/* Search */}
      <div className="relative animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
        <input
          type="text"
          placeholder="Search questions, policies, scenarios..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-border/60 bg-card py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-warm/40 focus:ring-2 focus:ring-warm/10"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-muted/80 p-0.5 text-xs text-muted-foreground hover:bg-muted"
          >
            &times;
          </button>
        )}
      </div>

      {/* Workflow Tabs */}
      <div
        className="flex gap-2 overflow-x-auto pb-1 scrollbar-none animate-fade-in-up"
        style={{ animationDelay: "0.1s" }}
      >
        {workflowCounts
          .filter((w) => w.count > 0)
          .map((w) => (
            <button
              key={w.id}
              onClick={() =>
                setActiveWorkflow(activeWorkflow === w.id ? null : w.id)
              }
              className="flex shrink-0 items-center gap-1.5 rounded-lg border px-3 py-1.5 text-[12px] font-semibold transition-all"
              style={
                activeWorkflow === w.id
                  ? {
                      borderColor: w.color,
                      color: w.color,
                      background: `color-mix(in srgb, ${w.color} 6%, white)`,
                    }
                  : {
                      borderColor: "var(--border)",
                      color: "var(--muted-foreground)",
                    }
              }
            >
              {w.label}
              <span
                className="rounded px-1.5 py-px text-[10px] font-bold"
                style={
                  activeWorkflow === w.id
                    ? { background: `color-mix(in srgb, ${w.color} 12%, white)` }
                    : { background: "var(--muted)" }
                }
              >
                {w.count}
              </span>
            </button>
          ))}
      </div>

      {/* Results count */}
      <p className="text-xs font-semibold text-muted-foreground">
        {filteredQuestions.length} result{filteredQuestions.length !== 1 ? "s" : ""}
      </p>

      {/* Q&A Cards */}
      {filteredQuestions.length === 0 ? (
        <div className="rounded-xl border border-border/50 bg-card py-12 text-center">
          <p className="text-3xl mb-2">&#128269;</p>
          <p className="font-heading font-semibold text-muted-foreground">
            No results found
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Try different keywords or clear filters
          </p>
        </div>
      ) : (
        <Card className="border-border/50 shadow-sm overflow-hidden">
          <CardContent className="p-0">
            <Accordion>
              {filteredQuestions.map((qa, i) => {
                const isTricky = qa.workflow === "tricky"
                return (
                  <AccordionItem
                    key={qa.id}
                    value={`qa-${qa.id}`}
                    className="px-5 border-border/40"
                  >
                    <AccordionTrigger className="py-4 text-[13px] font-semibold text-foreground/90 hover:text-warm hover:no-underline transition-colors text-left">
                      <span className="flex items-center gap-2">
                        {isTricky && (
                          <span className="inline-flex items-center rounded bg-pink-50 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-pink-600 dark:bg-pink-950 dark:text-pink-400">
                            Tricky
                          </span>
                        )}
                        {qa.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <div
                        className="rounded-lg border border-border/30 bg-muted/30 p-4 text-[13px] leading-[1.8] text-muted-foreground"
                        dangerouslySetInnerHTML={{
                          __html: formatAnswer(qa.answer),
                        }}
                      />
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        {qa.source && (
                          <a
                            href={qa.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-md bg-primary/5 px-2 py-1 text-[11px] font-semibold text-primary hover:bg-primary/10 transition-colors"
                          >
                            <ExternalLink className="h-3 w-3" />
                            Official Source
                          </a>
                        )}
                        <PriorityBadge priority={qa.priority} />
                        <WorkflowTag
                          workflow={qa.workflow}
                          workflows={workflows}
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

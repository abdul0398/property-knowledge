"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { MessageCircleQuestion, BookOpen } from "lucide-react"
import type { Section, FAQ } from "@/content"

function renderMarkdownText(text: string) {
  const lines = text.split("\n")
  const elements: React.ReactNode[] = []
  let currentList: string[] = []
  let listKey = 0

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`list-${listKey++}`} className="space-y-1.5 my-3 ml-1">
          {currentList.map((item, i) => (
            <li
              key={i}
              className="flex gap-2.5 text-[13px] leading-relaxed"
            >
              <span className="mt-2 h-1 w-1 rounded-full bg-warm/60 shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            </li>
          ))}
        </ul>
      )
      currentList = []
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Table detection
    if (
      line.includes("|") &&
      i + 1 < lines.length &&
      lines[i + 1]?.match(/^\|[\s-|]+\|$/)
    ) {
      flushList()
      const tableLines: string[] = [line]
      let j = i + 1
      while (j < lines.length && lines[j].includes("|")) {
        tableLines.push(lines[j])
        j++
      }
      elements.push(renderTable(tableLines, i))
      i = j - 1
      continue
    }

    // List items
    if (line.match(/^[-*]\s+/) || line.match(/^\d+\.\s+/)) {
      const content = line.replace(/^[-*]\s+/, "").replace(/^\d+\.\s+/, "")
      currentList.push(content)
      continue
    }

    flushList()

    if (line.trim() === "") continue

    if (line.startsWith("###")) {
      elements.push(
        <h4
          key={i}
          className="font-heading font-semibold text-[13px] mt-5 mb-1.5 text-foreground/90"
          dangerouslySetInnerHTML={{
            __html: formatInline(line.replace(/^###\s*/, "")),
          }}
        />
      )
    } else if (line.startsWith("##")) {
      elements.push(
        <h3
          key={i}
          className="font-heading font-semibold text-sm mt-5 mb-1.5"
          dangerouslySetInnerHTML={{
            __html: formatInline(line.replace(/^##\s*/, "")),
          }}
        />
      )
    } else {
      elements.push(
        <p
          key={i}
          className="text-[13px] leading-relaxed text-muted-foreground my-1.5"
          dangerouslySetInnerHTML={{ __html: formatInline(line) }}
        />
      )
    }
  }

  flushList()
  return elements
}

function renderTable(lines: string[], key: number) {
  const headerCells = lines[0]
    .split("|")
    .map((c) => c.trim())
    .filter(Boolean)
  const dataRows = lines.slice(2).map((row) =>
    row
      .split("|")
      .map((c) => c.trim())
      .filter(Boolean)
  )

  return (
    <div key={`table-${key}`} className="overflow-x-auto my-4 rounded-lg border border-border/50">
      <table className="w-full text-[13px]">
        <thead>
          <tr className="bg-muted/50 border-b border-border/50">
            {headerCells.map((cell, i) => (
              <th
                key={i}
                className="text-left py-2.5 px-4 font-heading font-semibold text-foreground/80 text-xs"
                dangerouslySetInnerHTML={{ __html: formatInline(cell) }}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {dataRows.map((row, ri) => (
            <tr
              key={ri}
              className="border-b border-border/30 last:border-0 hover:bg-muted/30 transition-colors"
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="py-2 px-4 text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: formatInline(cell) }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function formatInline(text: string): string {
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
}

function SectionCard({
  section,
  index,
}: {
  section: Section
  index: number
}) {
  return (
    <Card
      className="border-border/50 shadow-sm animate-fade-in-up overflow-hidden"
      style={{ animationDelay: `${0.05 * index}s` }}
    >
      <div className="flex items-center gap-3 px-6 pt-5 pb-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-warm/10">
          <BookOpen className="h-3.5 w-3.5 text-warm" />
        </div>
        <h3 className="font-heading font-semibold text-[15px] tracking-tight">
          {section.title}
        </h3>
      </div>
      <CardContent className="px-6 pb-5 pt-0">
        <div className="border-l-2 border-warm/20 pl-4">
          {renderMarkdownText(section.content)}
        </div>
      </CardContent>
    </Card>
  )
}

export function CategoryKnowledge({
  name,
  description,
  sections,
  faqs,
}: {
  name: string
  description: string
  sections: Section[]
  faqs: FAQ[]
}) {
  return (
    <div className="space-y-6 max-w-4xl">
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

      {/* Knowledge Sections */}
      <div className="space-y-4">
        {sections.map((section, i) => (
          <SectionCard key={i} section={section} index={i} />
        ))}
      </div>

      {/* FAQs */}
      {faqs.length > 0 && (
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: `${sections.length * 0.05 + 0.1}s` }}
        >
          <Separator className="mb-6" />
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/8">
              <MessageCircleQuestion className="h-4.5 w-4.5 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-muted-foreground">
                {faqs.length} common questions answered
              </p>
            </div>
          </div>
          <Card className="border-border/50 shadow-sm overflow-hidden">
            <CardContent className="p-0">
              <Accordion>
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="px-5 border-border/40"
                  >
                    <AccordionTrigger className="py-4 text-[13px] font-semibold text-foreground/90 hover:text-warm hover:no-underline transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <div
                        className="text-[13px] text-muted-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: formatInline(faq.answer),
                        }}
                      />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

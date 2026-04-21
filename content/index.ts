import { ALL_QUESTIONS, WORKFLOWS, RECENT_CHANGES, POPULAR_SEARCHES, PERSONA_FILTERS, SYNONYMS } from "./questions"
import type { QA, WorkflowDef, PropertyType, WorkflowId, Priority } from "./questions"

export type { QA, WorkflowDef, PropertyType, WorkflowId, Priority }
export { WORKFLOWS, RECENT_CHANGES, POPULAR_SEARCHES, PERSONA_FILTERS, SYNONYMS }

// Legacy types kept for backward compatibility
export type Section = {
  title: string
  content: string
}

export type FAQ = {
  question: string
  answer: string
}

type CategoryInfo = {
  name: string
  description: string
  icon: string
}

const CATEGORIES: Record<string, CategoryInfo> = {
  hdb: {
    name: "HDB",
    description: "Everything about HDB flats — BTO, resale, regulations, and financial planning.",
    icon: "Building2",
  },
  "condo-resale": {
    name: "Condo / EC",
    description: "Condominium resale, EC purchases, new launches, and private property rules.",
    icon: "Building",
  },
  "new-launches": {
    name: "New Launches",
    description: "New property launches, developer sales, and booking procedures.",
    icon: "Rocket",
  },
  landed: {
    name: "Landed",
    description: "Landed property knowledge — terrace, semi-detached, bungalows, and GCBs.",
    icon: "Home",
  },
  rental: {
    name: "Rental",
    description: "Rental market regulations, tenancy agreements, and landlord-tenant rights.",
    icon: "Key",
  },
}

// Map category slugs to property type filters
const CATEGORY_PROPERTY_MAP: Record<string, PropertyType[]> = {
  hdb: ["hdb"],
  "condo-resale": ["condo"],
  "new-launches": ["condo"],
  landed: ["landed"],
  rental: ["hdb", "condo", "landed", "general"],
}

// For rental category, filter by workflow instead of property type
const CATEGORY_WORKFLOW_MAP: Record<string, WorkflowId | null> = {
  hdb: null,
  "condo-resale": null,
  "new-launches": null,
  landed: null,
  rental: "rental",
}

export function getQuestionsForCategory(slug: string): QA[] {
  const workflowFilter = CATEGORY_WORKFLOW_MAP[slug]
  if (workflowFilter) {
    return ALL_QUESTIONS.filter((q) => q.workflow === workflowFilter)
  }

  const propertyTypes = CATEGORY_PROPERTY_MAP[slug]
  if (!propertyTypes) return []

  return ALL_QUESTIONS.filter(
    (q) => propertyTypes.includes(q.propertyType) || q.propertyType === "general"
  )
}

export function getWorkflowsForCategory(slug: string): WorkflowDef[] {
  const questions = getQuestionsForCategory(slug)
  const workflowIds = new Set(questions.map((q) => q.workflow))
  return WORKFLOWS.filter((w) => workflowIds.has(w.id))
}

export function getAllQuestions(): QA[] {
  return ALL_QUESTIONS
}

export function getCategoryInfo(slug: string): CategoryInfo | null {
  return CATEGORIES[slug] ?? null
}

export function getAllCategories() {
  return Object.entries(CATEGORIES).map(([slug, info]) => ({
    slug,
    ...info,
    questionCount: getQuestionsForCategory(slug).length,
  }))
}

// Legacy compatibility
export type CategoryContent = {
  categoryInfo: CategoryInfo
  sections: Section[]
  faqs: FAQ[]
}

export function getCategoryContent(slug: string): CategoryContent | null {
  const info = CATEGORIES[slug]
  if (!info) return null

  return {
    categoryInfo: info,
    sections: [],
    faqs: [],
  }
}

import * as hdb from "./hdb"
import * as condoResale from "./condo-resale"
import * as newLaunches from "./new-launches"
import * as landed from "./landed"
import * as rental from "./rental"

export type Section = {
  title: string
  content: string
}

export type FAQ = {
  question: string
  answer: string
}

export type CategoryContent = {
  categoryInfo: {
    name: string
    description: string
    icon: string
  }
  sections: Section[]
  faqs: FAQ[]
}

const content: Record<string, CategoryContent> = {
  hdb,
  "condo-resale": condoResale,
  "new-launches": newLaunches,
  landed,
  rental,
}

export function getCategoryContent(slug: string): CategoryContent | null {
  return content[slug] ?? null
}

export function getAllCategories() {
  return Object.entries(content).map(([slug, data]) => ({
    slug,
    ...data.categoryInfo,
  }))
}

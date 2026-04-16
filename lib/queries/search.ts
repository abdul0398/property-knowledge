import { db } from "@/lib/db"
import type { SearchResult } from "@/types"

export async function searchAll(
  query: string,
  type: string = "all"
): Promise<SearchResult[]> {
  if (!query.trim()) return []

  const results: SearchResult[] = []
  const searchTerm = `%${query}%`

  if (type === "all" || type === "articles") {
    const articles = await db.article.findMany({
      where: {
        published: true,
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { content: { contains: query, mode: "insensitive" } },
          { tags: { has: query } },
        ],
      },
      select: {
        id: true,
        title: true,
        excerpt: true,
        content: true,
      },
      take: 20,
    })

    articles.forEach((article) => {
      results.push({
        type: "article",
        id: article.id,
        title: article.title,
        excerpt:
          article.excerpt ??
          article.content.slice(0, 150) + "...",
        url: `/articles/${article.id}`,
      })
    })
  }

  if (type === "all" || type === "dictionary") {
    const entries = await db.dictionaryEntry.findMany({
      where: {
        OR: [
          { term: { contains: query, mode: "insensitive" } },
          { definition: { contains: query, mode: "insensitive" } },
        ],
      },
      select: {
        id: true,
        term: true,
        definition: true,
        slug: true,
      },
      take: 20,
    })

    entries.forEach((entry) => {
      results.push({
        type: "dictionary",
        id: entry.id,
        title: entry.term,
        excerpt: entry.definition.slice(0, 150),
        url: `/dictionary/${entry.slug}`,
      })
    })
  }

  if (type === "all" || type === "categories") {
    const categories = await db.category.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { description: { contains: query, mode: "insensitive" } },
        ],
      },
      select: {
        id: true,
        name: true,
        description: true,
        slug: true,
      },
      take: 10,
    })

    categories.forEach((cat) => {
      results.push({
        type: "category",
        id: cat.id,
        title: cat.name,
        excerpt: cat.description ?? "",
        url: `/categories/${cat.slug}`,
      })
    })
  }

  return results
}

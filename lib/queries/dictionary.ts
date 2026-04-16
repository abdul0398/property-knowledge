import { db } from "@/lib/db"

export async function getDictionaryEntries(search?: string) {
  const where = search
    ? {
        OR: [
          { term: { contains: search, mode: "insensitive" as const } },
          { definition: { contains: search, mode: "insensitive" as const } },
        ],
      }
    : {}

  return db.dictionaryEntry.findMany({
    where,
    orderBy: { term: "asc" },
  })
}

export async function getDictionaryEntryBySlug(slug: string) {
  return db.dictionaryEntry.findUnique({
    where: { slug },
  })
}

export async function getDictionaryEntryById(id: string) {
  return db.dictionaryEntry.findUnique({
    where: { id },
  })
}

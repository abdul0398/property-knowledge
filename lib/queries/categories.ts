import { db } from "@/lib/db"

export async function getCategoriesWithCounts() {
  return db.category.findMany({
    orderBy: { order: "asc" },
    include: {
      _count: {
        select: { articles: { where: { published: true } } },
      },
    },
  })
}

export async function getCategoryBySlug(slug: string) {
  return db.category.findUnique({
    where: { slug },
  })
}

export async function getAllCategories() {
  return db.category.findMany({
    orderBy: { order: "asc" },
  })
}

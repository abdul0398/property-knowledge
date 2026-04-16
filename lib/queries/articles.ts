import { db } from "@/lib/db"

const ARTICLES_PER_PAGE = 12

export async function getArticlesByCategory(
  slug: string,
  options: {
    page?: number
    sort?: string
    tag?: string
  } = {}
) {
  const { page = 1, sort = "newest", tag } = options

  const category = await db.category.findUnique({
    where: { slug },
  })

  if (!category) return null

  const where = {
    categoryId: category.id,
    published: true,
    ...(tag ? { tags: { has: tag } } : {}),
  }

  const orderBy =
    sort === "oldest"
      ? { createdAt: "asc" as const }
      : { createdAt: "desc" as const }

  const [articles, total] = await Promise.all([
    db.article.findMany({
      where,
      orderBy,
      skip: (page - 1) * ARTICLES_PER_PAGE,
      take: ARTICLES_PER_PAGE,
      include: {
        category: { select: { name: true, slug: true } },
        _count: { select: { bookmarks: true, ratings: true } },
      },
    }),
    db.article.count({ where }),
  ])

  return {
    category,
    articles,
    totalPages: Math.ceil(total / ARTICLES_PER_PAGE),
    currentPage: page,
    total,
  }
}

export async function getArticleById(id: string) {
  return db.article.findUnique({
    where: { id },
    include: {
      category: { select: { name: true, slug: true } },
      _count: { select: { bookmarks: true, ratings: true } },
    },
  })
}

export async function getArticleRating(articleId: string) {
  const result = await db.rating.aggregate({
    where: { articleId },
    _avg: { value: true },
    _count: { value: true },
  })
  return {
    average: result._avg.value ?? 0,
    count: result._count.value,
  }
}

export async function getUserBookmark(userId: string, articleId: string) {
  return db.bookmark.findUnique({
    where: {
      userId_articleId: { userId, articleId },
    },
  })
}

export async function getUserRating(userId: string, articleId: string) {
  return db.rating.findUnique({
    where: {
      userId_articleId: { userId, articleId },
    },
  })
}

export async function getRecentArticles(limit: number = 5) {
  return db.article.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    take: limit,
    include: {
      category: { select: { name: true, slug: true } },
    },
  })
}

export async function getArticleStats() {
  const [totalArticles, totalBookmarks] = await Promise.all([
    db.article.count({ where: { published: true } }),
    db.bookmark.count(),
  ])
  return { totalArticles, totalBookmarks }
}

export async function getAllTags(categorySlug?: string) {
  const where = categorySlug
    ? {
        published: true,
        category: { slug: categorySlug },
      }
    : { published: true }

  const articles = await db.article.findMany({
    where,
    select: { tags: true },
  })

  const tagSet = new Set<string>()
  articles.forEach((a) => a.tags.forEach((t) => tagSet.add(t)))
  return Array.from(tagSet).sort()
}

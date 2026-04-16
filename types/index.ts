export type Role = "ADMIN" | "AGENT"

export interface SessionUser {
  id: string
  name: string
  email: string
  role: Role
  image?: string | null
}

export interface CategoryWithCount {
  id: string
  name: string
  slug: string
  description: string | null
  icon: string | null
  order: number
  _count: {
    articles: number
  }
}

export interface ArticlePreview {
  id: string
  title: string
  slug: string
  excerpt: string | null
  tags: string[]
  createdAt: Date
  updatedAt: Date
  category: {
    name: string
    slug: string
  }
  _count: {
    bookmarks: number
    ratings: number
  }
  _avg?: {
    ratings: { value: number | null }
  }
}

export interface SearchResult {
  type: "article" | "dictionary" | "category"
  id: string
  title: string
  excerpt: string
  url: string
}

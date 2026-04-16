"use server"

import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import {
  ArticleSchema,
  DictionaryEntrySchema,
  CategorySchema,
} from "@/lib/definitions"
import { hash } from "bcryptjs"

async function requireAdmin() {
  const session = await auth()
  if (session?.user?.role !== "ADMIN") throw new Error("Forbidden")
  return session
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

// Article actions
export type ArticleState = { error?: string; success?: boolean }

export async function createArticle(
  _prevState: ArticleState | undefined,
  formData: FormData
): Promise<ArticleState> {
  await requireAdmin()

  const parsed = ArticleSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
    excerpt: formData.get("excerpt") || undefined,
    categoryId: formData.get("categoryId"),
    tags: formData.get("tags") || undefined,
    published: formData.get("published") === "on",
  })

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Validation failed" }
  }

  const session = await auth()
  const tags = parsed.data.tags
    ? parsed.data.tags.split(",").map((t) => t.trim()).filter(Boolean)
    : []

  await db.article.create({
    data: {
      title: parsed.data.title,
      slug: slugify(parsed.data.title) + "-" + Date.now().toString(36),
      content: parsed.data.content,
      excerpt: parsed.data.excerpt || null,
      categoryId: parsed.data.categoryId,
      tags,
      published: parsed.data.published ?? false,
      authorId: session?.user?.id,
    },
  })

  revalidatePath("/admin/articles")
  revalidatePath("/dashboard")
  return { success: true }
}

export async function updateArticle(
  id: string,
  _prevState: ArticleState | undefined,
  formData: FormData
): Promise<ArticleState> {
  await requireAdmin()

  const parsed = ArticleSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
    excerpt: formData.get("excerpt") || undefined,
    categoryId: formData.get("categoryId"),
    tags: formData.get("tags") || undefined,
    published: formData.get("published") === "on",
  })

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Validation failed" }
  }

  const tags = parsed.data.tags
    ? parsed.data.tags.split(",").map((t) => t.trim()).filter(Boolean)
    : []

  await db.article.update({
    where: { id },
    data: {
      title: parsed.data.title,
      content: parsed.data.content,
      excerpt: parsed.data.excerpt || null,
      categoryId: parsed.data.categoryId,
      tags,
      published: parsed.data.published ?? false,
    },
  })

  revalidatePath(`/admin/articles/${id}/edit`)
  revalidatePath(`/articles/${id}`)
  revalidatePath("/admin/articles")
  return { success: true }
}

export async function deleteArticle(id: string) {
  await requireAdmin()
  await db.article.delete({ where: { id } })
  revalidatePath("/admin/articles")
  revalidatePath("/dashboard")
}

export async function togglePublish(id: string) {
  await requireAdmin()
  const article = await db.article.findUnique({
    where: { id },
    select: { published: true },
  })
  if (!article) throw new Error("Article not found")

  await db.article.update({
    where: { id },
    data: { published: !article.published },
  })
  revalidatePath("/admin/articles")
  revalidatePath("/dashboard")
}

// Category actions
export type CategoryState = { error?: string; success?: boolean }

export async function createCategory(
  _prevState: CategoryState | undefined,
  formData: FormData
): Promise<CategoryState> {
  await requireAdmin()

  const parsed = CategorySchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description") || undefined,
    icon: formData.get("icon") || undefined,
  })

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Validation failed" }
  }

  const maxOrder = await db.category.aggregate({ _max: { order: true } })

  await db.category.create({
    data: {
      name: parsed.data.name,
      slug: slugify(parsed.data.name),
      description: parsed.data.description || null,
      icon: parsed.data.icon || null,
      order: (maxOrder._max.order ?? 0) + 1,
    },
  })

  revalidatePath("/admin/categories")
  revalidatePath("/dashboard")
  return { success: true }
}

export async function deleteCategory(id: string) {
  await requireAdmin()
  await db.category.delete({ where: { id } })
  revalidatePath("/admin/categories")
  revalidatePath("/dashboard")
}

// Dictionary actions
export type DictionaryState = { error?: string; success?: boolean }

export async function createDictionaryEntry(
  _prevState: DictionaryState | undefined,
  formData: FormData
): Promise<DictionaryState> {
  await requireAdmin()

  const parsed = DictionaryEntrySchema.safeParse({
    term: formData.get("term"),
    definition: formData.get("definition"),
    explanation: formData.get("explanation") || undefined,
    examples: formData.get("examples") || undefined,
    relatedTerms: formData.get("relatedTerms") || undefined,
    category: formData.get("category") || undefined,
  })

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Validation failed" }
  }

  const relatedTerms = parsed.data.relatedTerms
    ? parsed.data.relatedTerms.split(",").map((t) => t.trim()).filter(Boolean)
    : []

  await db.dictionaryEntry.create({
    data: {
      term: parsed.data.term,
      slug: slugify(parsed.data.term),
      definition: parsed.data.definition,
      explanation: parsed.data.explanation || null,
      examples: parsed.data.examples || null,
      relatedTerms,
      category: parsed.data.category || null,
    },
  })

  revalidatePath("/admin/dictionary")
  revalidatePath("/dictionary")
  return { success: true }
}

export async function deleteDictionaryEntry(id: string) {
  await requireAdmin()
  await db.dictionaryEntry.delete({ where: { id } })
  revalidatePath("/admin/dictionary")
  revalidatePath("/dictionary")
}

// User actions
export async function updateUserRole(userId: string, role: "ADMIN" | "AGENT") {
  await requireAdmin()
  await db.user.update({
    where: { id: userId },
    data: { role },
  })
  revalidatePath("/admin/users")
}

export async function deleteUser(userId: string) {
  const session = await requireAdmin()
  if (session.user?.id === userId) throw new Error("Cannot delete yourself")
  await db.user.delete({ where: { id: userId } })
  revalidatePath("/admin/users")
}

export async function createUser(
  _prevState: { error?: string; success?: boolean } | undefined,
  formData: FormData
): Promise<{ error?: string; success?: boolean }> {
  await requireAdmin()

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const role = (formData.get("role") as string) || "AGENT"

  if (!name || !email || !password) {
    return { error: "All fields are required" }
  }

  const existing = await db.user.findUnique({ where: { email } })
  if (existing) {
    return { error: "A user with this email already exists" }
  }

  await db.user.create({
    data: {
      name,
      email,
      passwordHash: await hash(password, 12),
      role: role as "ADMIN" | "AGENT",
    },
  })

  revalidatePath("/admin/users")
  return { success: true }
}

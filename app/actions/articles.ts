"use server"

import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function toggleBookmark(articleId: string) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Unauthorized")

  const existing = await db.bookmark.findUnique({
    where: {
      userId_articleId: { userId: session.user.id, articleId },
    },
  })

  if (existing) {
    await db.bookmark.delete({ where: { id: existing.id } })
  } else {
    await db.bookmark.create({
      data: { userId: session.user.id, articleId },
    })
  }

  revalidatePath(`/articles/${articleId}`)
}

export async function rateArticle(articleId: string, value: number) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Unauthorized")

  if (value < 1 || value > 5) throw new Error("Rating must be between 1 and 5")

  await db.rating.upsert({
    where: {
      userId_articleId: { userId: session.user.id, articleId },
    },
    update: { value },
    create: {
      userId: session.user.id,
      articleId,
      value,
    },
  })

  revalidatePath(`/articles/${articleId}`)
}

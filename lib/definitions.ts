import { z } from "zod"

export const LoginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
})

export const ArticleSchema = z.object({
  title: z.string().min(1, "Title is required").max(200),
  content: z.string().min(1, "Content is required"),
  excerpt: z.string().max(500).optional(),
  categoryId: z.string().min(1, "Category is required"),
  tags: z.string().optional(),
  published: z.boolean().optional().default(false),
})

export const DictionaryEntrySchema = z.object({
  term: z.string().min(1, "Term is required").max(100),
  definition: z.string().min(1, "Definition is required"),
  explanation: z.string().optional(),
  examples: z.string().optional(),
  relatedTerms: z.string().optional(),
  category: z.string().optional(),
})

export const CategorySchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  description: z.string().optional(),
  icon: z.string().optional(),
})

export type LoginInput = z.infer<typeof LoginSchema>
export type ArticleInput = z.infer<typeof ArticleSchema>
export type DictionaryEntryInput = z.infer<typeof DictionaryEntrySchema>
export type CategoryInput = z.infer<typeof CategorySchema>

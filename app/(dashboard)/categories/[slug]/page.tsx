import { notFound } from "next/navigation"
import {
  getCategoryInfo,
  getQuestionsForCategory,
  getWorkflowsForCategory,
} from "@/content"
import { CategoryKnowledge } from "@/components/features/category-knowledge"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const info = getCategoryInfo(slug)
  if (!info) return { title: "Category Not Found" }
  return { title: `${info.name} — PropertyKnowledge` }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const info = getCategoryInfo(slug)

  if (!info) notFound()

  const questions = getQuestionsForCategory(slug)
  const workflows = getWorkflowsForCategory(slug)

  return (
    <CategoryKnowledge
      name={info.name}
      description={info.description}
      questions={questions}
      workflows={workflows}
    />
  )
}

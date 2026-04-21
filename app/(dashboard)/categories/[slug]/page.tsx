import { notFound } from "next/navigation"
import { readFileSync } from "fs"
import { join } from "path"
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
  if (slug === "hdb") return { title: "HDB — Property Knowledge Base" }
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

  if (slug === "hdb") {
    const htmlPath = join(process.cwd(), "public", "hdb-knowledge.html")
    const rawHtml = readFileSync(htmlPath, "utf-8")
    return (
      <iframe
        srcDoc={rawHtml}
        style={{ width: "100%", height: "100vh", border: "none" }}
        title="HDB Knowledge Base"
      />
    )
  }

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

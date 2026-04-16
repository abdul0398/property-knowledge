import { notFound } from "next/navigation"
import { getCategoryContent } from "@/content"
import { CategoryKnowledge } from "@/components/features/category-knowledge"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const data = getCategoryContent(slug)
  if (!data) return { title: "Category Not Found" }
  return { title: `${data.categoryInfo.name} — PropertyKnowledge` }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const data = getCategoryContent(slug)

  if (!data) notFound()

  return (
    <CategoryKnowledge
      name={data.categoryInfo.name}
      description={data.categoryInfo.description}
      sections={data.sections}
      faqs={data.faqs}
    />
  )
}

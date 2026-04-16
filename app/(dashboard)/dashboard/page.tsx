import { auth } from "@/lib/auth"
import { getAllCategories } from "@/content"
import { CategoryCard } from "@/components/features/category-card"
import { Building2, BookOpen, Calculator } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Dashboard — PropertyKnowledge",
}

export default async function DashboardPage() {
  const session = await auth()
  const categories = getAllCategories()

  return (
    <div className="space-y-8 max-w-5xl">
      {/* Hero Section */}
      <div
        className="relative overflow-hidden rounded-2xl warm-gradient p-8 lg:p-10 animate-fade-in-up"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0_0_0_/_0.15),transparent_70%)]" />
        <div className="relative z-10">
          <p className="text-white/70 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
            Welcome back
          </p>
          <h1 className="font-heading text-3xl lg:text-4xl font-bold text-white tracking-tight">
            {session?.user?.name?.split(" ")[0] ?? "Agent"}
          </h1>
          <p className="text-white/70 mt-2 text-sm max-w-md">
            Access property regulations, financial calculators, and expert knowledge across all property types.
          </p>
        </div>
        <div className="absolute -right-6 -bottom-6 opacity-[0.08]">
          <Building2 className="h-48 w-48 text-white" />
        </div>
      </div>

      {/* Quick Access */}
      <div className="grid grid-cols-2 gap-3 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        <Link
          href="/dictionary"
          className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 transition-all hover:border-warm/30 hover:shadow-md card-hover"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/8">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-heading text-sm font-semibold">Dictionary</p>
            <p className="text-xs text-muted-foreground">Property terms</p>
          </div>
        </Link>
        <Link
          href="/calculators"
          className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 transition-all hover:border-warm/30 hover:shadow-md card-hover"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warm/10">
            <Calculator className="h-5 w-5 text-warm" />
          </div>
          <div>
            <p className="font-heading text-sm font-semibold">Calculators</p>
            <p className="text-xs text-muted-foreground">Financial tools</p>
          </div>
        </Link>
      </div>

      {/* Categories */}
      <div className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-heading text-lg font-semibold">Property Categories</h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Browse knowledge by property type
            </p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <div
              key={category.slug}
              className="animate-fade-in-up"
              style={{ animationDelay: `${0.2 + i * 0.05}s` }}
            >
              <CategoryCard
                name={category.name}
                slug={category.slug}
                description={category.description}
                icon={category.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

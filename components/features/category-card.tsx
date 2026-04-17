import Link from "next/link"
import {
  Building2,
  Building,
  Rocket,
  Home,
  Key,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Building,
  Rocket,
  Home,
  Key,
}

const colorMap: Record<string, string> = {
  Building2: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Building: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  Rocket: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Home: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  Key: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
}

interface CategoryCardProps {
  name: string
  slug: string
  description: string | null
  icon: string | null
  questionCount?: number
}

export function CategoryCard({
  name,
  slug,
  description,
  icon,
  questionCount,
}: CategoryCardProps) {
  const Icon = icon && iconMap[icon] ? iconMap[icon] : Building2
  const colorClass = icon && colorMap[icon] ? colorMap[icon] : colorMap.Building2

  return (
    <Link href={`/categories/${slug}`}>
      <div className="group relative rounded-xl border border-border/60 bg-card p-5 transition-all card-hover hover:border-warm/30 cursor-pointer h-full">
        <div className="flex items-start justify-between mb-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClass}`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-warm group-hover:translate-x-0.5 transition-all" />
        </div>
        <div className="flex items-center gap-2">
          <h3 className="font-heading font-semibold text-[15px] tracking-tight">
            {name}
          </h3>
          {questionCount != null && questionCount > 0 && (
            <span className="rounded-md bg-warm/10 px-1.5 py-0.5 text-[10px] font-bold text-warm">
              {questionCount} Q&As
            </span>
          )}
        </div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </Link>
  )
}

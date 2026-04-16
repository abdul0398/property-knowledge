import { db } from "@/lib/db"
import { Card, CardContent } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { Users, FileText, BookOpen, Upload, Plus, Settings, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Admin — PropertyKnowledge",
}

export default async function AdminDashboard() {
  const [userCount, articleCount, dictionaryCount, pdfCount] =
    await Promise.all([
      db.user.count(),
      db.article.count(),
      db.dictionaryEntry.count(),
      db.pDFDocument.count(),
    ])

  const stats = [
    {
      label: "Users",
      value: userCount,
      icon: Users,
      href: "/admin/users",
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
      label: "Articles",
      value: articleCount,
      icon: FileText,
      href: "/admin/articles",
      color: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    },
    {
      label: "Dictionary",
      value: dictionaryCount,
      icon: BookOpen,
      href: "/admin/dictionary",
      color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    },
    {
      label: "PDFs",
      value: pdfCount,
      icon: Upload,
      href: "/admin/upload",
      color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    },
  ]

  return (
    <div className="space-y-8 max-w-5xl">
      <div className="animate-fade-in-up">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-warm mb-1.5">
          Administration
        </p>
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          Admin Dashboard
        </h1>
        <p className="text-muted-foreground mt-1.5 text-sm">
          Manage content, users, and uploads
        </p>
      </div>

      <div
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 animate-fade-in-up"
        style={{ animationDelay: "0.1s" }}
      >
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href}>
            <Card className="border-border/50 shadow-sm card-hover hover:border-warm/30 cursor-pointer">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${stat.color}`}
                  >
                    <stat.icon className="h-4 w-4" />
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/30" />
                </div>
                <p className="font-heading text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div
        className="animate-fade-in-up"
        style={{ animationDelay: "0.15s" }}
      >
        <h2 className="font-heading text-sm font-semibold mb-3">Quick Actions</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/admin/articles/new"
            className={buttonVariants({
              className: "warm-gradient text-white border-0 hover:opacity-90 gap-2 h-10",
            })}
          >
            <Plus className="h-4 w-4" />
            Create Article
          </Link>
          <Link
            href="/admin/categories"
            className={buttonVariants({
              variant: "outline",
              className: "border-border/60 gap-2 h-10",
            })}
          >
            <Settings className="h-4 w-4" />
            Categories
          </Link>
          <Link
            href="/admin/dictionary"
            className={buttonVariants({
              variant: "outline",
              className: "border-border/60 gap-2 h-10",
            })}
          >
            <BookOpen className="h-4 w-4" />
            Dictionary
          </Link>
          <Link
            href="/admin/upload"
            className={buttonVariants({
              variant: "outline",
              className: "border-border/60 gap-2 h-10",
            })}
          >
            <Upload className="h-4 w-4" />
            Upload PDF
          </Link>
        </div>
      </div>
    </div>
  )
}

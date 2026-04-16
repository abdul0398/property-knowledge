"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-provider"
import { ThemeToggle } from "./theme-toggle"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import {
  LayoutDashboard,
  Building2,
  Building,
  Rocket,
  Home,
  Key,
  BookOpen,
  Calculator,
  Shield,
  X,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavItem {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  adminOnly?: boolean
}

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "HDB", href: "/categories/hdb", icon: Building2 },
  { label: "Condo Resale", href: "/categories/condo-resale", icon: Building },
  { label: "New Launches", href: "/categories/new-launches", icon: Rocket },
  { label: "Landed", href: "/categories/landed", icon: Home },
  { label: "Rental", href: "/categories/rental", icon: Key },
  { label: "Dictionary", href: "/dictionary", icon: BookOpen },
  { label: "Calculators", href: "/calculators", icon: Calculator },
  { label: "Admin", href: "/admin", icon: Shield, adminOnly: true },
]

function NavLinks({
  role,
  onNavigate,
}: {
  role: string
  onNavigate?: () => void
}) {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-0.5 px-3">
      {navItems
        .filter((item) => !item.adminOnly || role === "ADMIN")
        .map((item) => {
          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href)

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon
                className={cn(
                  "h-[18px] w-[18px] shrink-0 transition-colors",
                  isActive ? "text-sidebar-primary-foreground" : "text-sidebar-foreground/50"
                )}
              />
              <span className="flex-1">{item.label}</span>
              {isActive && (
                <ChevronRight className="h-3.5 w-3.5 opacity-60" />
              )}
            </Link>
          )
        })}
    </nav>
  )
}

export function Sidebar({ role }: { role: string }) {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-[260px] lg:border-r lg:border-sidebar-border bg-sidebar">
      <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg warm-gradient shadow-sm">
          <Building2 className="h-4 w-4 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-heading font-bold text-sidebar-accent-foreground tracking-tight">
            Property
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-sidebar-foreground/50">
            Knowledge
          </span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <p className="px-6 mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-sidebar-foreground/40">
          Navigation
        </p>
        <NavLinks role={role} />
      </div>
      <div className="border-t border-sidebar-border p-4 flex items-center justify-between">
        <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-sidebar-foreground/40">
          Theme
        </span>
        <ThemeToggle />
      </div>
    </aside>
  )
}

export function MobileSidebar({ role }: { role: string }) {
  const { isOpen, close } = useSidebar()

  return (
    <Sheet open={isOpen} onOpenChange={close}>
      <SheetContent side="left" className="w-[260px] p-0 bg-sidebar border-sidebar-border">
        <SheetHeader className="flex h-16 flex-row items-center gap-3 border-b border-sidebar-border px-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg warm-gradient shadow-sm">
            <Building2 className="h-4 w-4 text-white" />
          </div>
          <SheetTitle className="text-sm font-heading font-bold text-sidebar-accent-foreground tracking-tight">
            PropertyKnowledge
          </SheetTitle>
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto text-sidebar-foreground/50 hover:text-sidebar-foreground"
            onClick={close}
          >
            <X className="h-4 w-4" />
          </Button>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto py-4">
          <p className="px-6 mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-sidebar-foreground/40">
            Navigation
          </p>
          <NavLinks role={role} onNavigate={close} />
        </div>
        <div className="border-t border-sidebar-border p-4 flex items-center justify-between">
          <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-sidebar-foreground/40">
            Theme
          </span>
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  )
}

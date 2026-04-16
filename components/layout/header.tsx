"use client"

import { useRouter } from "next/navigation"
import { useSidebar } from "./sidebar-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Menu, Search, LogOut } from "lucide-react"
import { logoutAction } from "@/app/actions/auth"
import { useState, type FormEvent } from "react"

interface HeaderProps {
  user: {
    name?: string | null
    email?: string | null
    role: string
  }
}

export function Header({ user }: HeaderProps) {
  const { toggle } = useSidebar()
  const router = useRouter()
  const [query, setQuery] = useState("")

  const initials = user.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "U"

  function handleSearch(e: FormEvent) {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
      setQuery("")
    }
  }

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 lg:px-6 sticky top-0 z-30">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden -ml-1"
        onClick={toggle}
      >
        <Menu className="h-5 w-5" />
      </Button>

      <form
        onSubmit={handleSearch}
        className="flex-1 max-w-lg"
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/60" />
          <Input
            placeholder="Search knowledge base..."
            className="pl-10 h-9 bg-surface border-border/60 text-sm placeholder:text-muted-foreground/50 focus-visible:ring-warm/30"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>

      <div className="ml-auto flex items-center gap-3">
        <Badge
          variant="outline"
          className="hidden sm:inline-flex text-[10px] uppercase tracking-wider font-semibold border-warm/30 text-warm"
        >
          {user.role}
        </Badge>
        <DropdownMenu>
          <DropdownMenuTrigger className="relative flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-border/60 hover:ring-warm/40 transition-all">
            <Avatar className="h-9 w-9">
              <AvatarFallback className="text-xs font-semibold bg-primary/10 text-primary">
                {initials}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-semibold">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => logoutAction()}
              className="cursor-pointer text-destructive focus:text-destructive"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

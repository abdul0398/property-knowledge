"use client"

import { useRouter } from "next/navigation"
import { useState, type FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search } from "lucide-react"

interface SearchFiltersProps {
  currentQuery: string
  currentType: string
}

export function SearchFilters({
  currentQuery,
  currentType,
}: SearchFiltersProps) {
  const router = useRouter()
  const [query, setQuery] = useState(currentQuery)
  const [type, setType] = useState(currentType)

  function handleSearch(e: FormEvent) {
    e.preventDefault()
    if (!query.trim()) return
    const params = new URLSearchParams({ q: query.trim() })
    if (type !== "all") params.set("type", type)
    router.push(`/search?${params.toString()}`)
  }

  function handleTypeChange(newType: string | null) {
    const t = newType ?? "all"
    setType(t)
    if (query.trim()) {
      const params = new URLSearchParams({ q: query.trim() })
      if (t !== "all") params.set("type", t)
      router.push(`/search?${params.toString()}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex gap-3 flex-wrap">
      <div className="relative flex-1 min-w-48">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search..."
          className="pl-9"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <Select value={type} onValueChange={handleTypeChange}>
        <SelectTrigger className="w-36">
          <SelectValue placeholder="Filter by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="articles">Articles</SelectItem>
          <SelectItem value="dictionary">Dictionary</SelectItem>
          <SelectItem value="categories">Categories</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit">Search</Button>
    </form>
  )
}

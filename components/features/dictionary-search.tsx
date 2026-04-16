"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { useDebounce } from "@/hooks/use-debounce"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface DictionarySearchProps {
  initialQuery: string
}

export function DictionarySearch({ initialQuery }: DictionarySearchProps) {
  const router = useRouter()
  const [query, setQuery] = useState(initialQuery)
  const debouncedQuery = useDebounce(query, 300)

  useEffect(() => {
    if (debouncedQuery) {
      router.push(`/dictionary?q=${encodeURIComponent(debouncedQuery)}`)
    } else if (initialQuery) {
      router.push("/dictionary")
    }
  }, [debouncedQuery, router, initialQuery])

  return (
    <div className="relative max-w-md">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder="Search terms..."
        className="pl-9"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}

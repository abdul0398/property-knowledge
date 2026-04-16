"use client"

import { useActionState } from "react"
import {
  createCategory,
  type CategoryState,
} from "@/app/actions/admin"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, Check } from "lucide-react"

export function CategoryForm() {
  const [state, action, pending] = useActionState<
    CategoryState | undefined,
    FormData
  >(createCategory, undefined)

  return (
    <form action={action} className="space-y-4">
      {state?.error && (
        <div className="flex items-center gap-2 rounded-md bg-destructive/10 p-3 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {state.error}
        </div>
      )}
      {state?.success && (
        <div className="flex items-center gap-2 rounded-md bg-green-500/10 p-3 text-sm text-green-600 dark:text-green-400">
          <Check className="h-4 w-4 shrink-0" />
          Category created!
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" rows={3} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="icon">Icon (Lucide icon name)</Label>
        <Input
          id="icon"
          name="icon"
          placeholder="e.g. Building2, Home, Key"
        />
      </div>

      <Button type="submit" disabled={pending}>
        {pending ? "Creating..." : "Create Category"}
      </Button>
    </form>
  )
}

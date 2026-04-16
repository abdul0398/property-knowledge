"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AlertCircle, Check } from "lucide-react"
import type { ArticleState } from "@/app/actions/admin"

interface Category {
  id: string
  name: string
}

interface ArticleFormProps {
  action: (
    prevState: ArticleState | undefined,
    formData: FormData
  ) => Promise<ArticleState>
  categories: Category[]
  defaultValues?: {
    title?: string
    content?: string
    excerpt?: string
    categoryId?: string
    tags?: string
    published?: boolean
  }
  submitLabel?: string
}

export function ArticleForm({
  action,
  categories,
  defaultValues = {},
  submitLabel = "Create Article",
}: ArticleFormProps) {
  const [state, formAction, pending] = useActionState<
    ArticleState | undefined,
    FormData
  >(action, undefined)

  return (
    <Card>
      <CardHeader>
        <CardTitle>{submitLabel}</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          {state?.error && (
            <div className="flex items-center gap-2 rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {state.error}
            </div>
          )}
          {state?.success && (
            <div className="flex items-center gap-2 rounded-md bg-green-500/10 p-3 text-sm text-green-600 dark:text-green-400">
              <Check className="h-4 w-4 shrink-0" />
              Article saved successfully!
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              defaultValue={defaultValues.title}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Input
              id="excerpt"
              name="excerpt"
              defaultValue={defaultValues.excerpt}
              placeholder="Brief summary (optional)"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="categoryId">Category</Label>
            <Select
              name="categoryId"
              defaultValue={defaultValues.categoryId}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags (comma-separated)</Label>
            <Input
              id="tags"
              name="tags"
              defaultValue={defaultValues.tags}
              placeholder="e.g. HDB, financing, regulations"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              name="content"
              defaultValue={defaultValues.content}
              required
              rows={20}
              className="font-mono text-sm"
              placeholder="Article content (supports basic markdown: # headings, - lists)"
            />
          </div>

          <div className="flex items-center gap-3">
            <Switch
              name="published"
              defaultChecked={defaultValues.published}
            />
            <Label>Published</Label>
          </div>

          <Button type="submit" disabled={pending}>
            {pending ? "Saving..." : submitLabel}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

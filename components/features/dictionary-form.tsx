"use client"

import { useActionState } from "react"
import {
  createDictionaryEntry,
  type DictionaryState,
} from "@/app/actions/admin"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Check } from "lucide-react"

export function DictionaryForm() {
  const [state, action, pending] = useActionState<
    DictionaryState | undefined,
    FormData
  >(createDictionaryEntry, undefined)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Dictionary Entry</CardTitle>
      </CardHeader>
      <CardContent>
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
              Entry created!
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="term">Term</Label>
            <Input id="term" name="term" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="definition">Definition</Label>
            <Input id="definition" name="definition" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="explanation">Explanation</Label>
            <Textarea id="explanation" name="explanation" rows={3} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="examples">Examples</Label>
            <Textarea id="examples" name="examples" rows={3} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="relatedTerms">Related Terms (comma-separated)</Label>
            <Input id="relatedTerms" name="relatedTerms" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              name="category"
              placeholder="e.g. Financing, HDB, Tax"
            />
          </div>

          <Button type="submit" disabled={pending}>
            {pending ? "Creating..." : "Create Entry"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

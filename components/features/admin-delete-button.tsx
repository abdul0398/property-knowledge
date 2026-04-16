"use client"

import { useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

interface AdminDeleteButtonProps {
  id: string
  action: (id: string) => Promise<void>
  label?: string
  confirmMessage?: string
}

export function AdminDeleteButton({
  id,
  action,
  label = "Delete",
  confirmMessage = "Are you sure you want to delete this?",
}: AdminDeleteButtonProps) {
  const [isPending, startTransition] = useTransition()

  return (
    <Button
      variant="ghost"
      size="sm"
      disabled={isPending}
      className="text-destructive hover:text-destructive"
      onClick={() => {
        if (confirm(confirmMessage)) {
          startTransition(() => action(id))
        }
      }}
    >
      <Trash2 className="h-4 w-4 mr-1" />
      {label}
    </Button>
  )
}

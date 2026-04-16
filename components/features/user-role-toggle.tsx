"use client"

import { useTransition } from "react"
import { updateUserRole } from "@/app/actions/admin"
import { Button } from "@/components/ui/button"

interface UserRoleToggleProps {
  userId: string
  currentRole: string
  isSelf: boolean
}

export function UserRoleToggle({
  userId,
  currentRole,
  isSelf,
}: UserRoleToggleProps) {
  const [isPending, startTransition] = useTransition()

  if (isSelf) return null

  const newRole = currentRole === "ADMIN" ? "AGENT" : "ADMIN"

  return (
    <Button
      variant="outline"
      size="sm"
      disabled={isPending}
      onClick={() =>
        startTransition(() =>
          updateUserRole(userId, newRole as "ADMIN" | "AGENT")
        )
      }
    >
      {isPending ? "..." : `Make ${newRole}`}
    </Button>
  )
}

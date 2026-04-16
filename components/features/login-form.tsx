"use client"

import { useActionState } from "react"
import { loginAction, type LoginState } from "@/app/actions/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AlertCircle, ArrowRight } from "lucide-react"

export function LoginForm() {
  const [state, action, pending] = useActionState<
    LoginState | undefined,
    FormData
  >(loginAction, undefined)

  return (
    <Card className="border-border/50 shadow-xl shadow-primary/[0.03]">
      <CardHeader className="pb-4">
        <CardTitle className="font-heading text-lg">Sign In</CardTitle>
        <CardDescription className="text-sm">
          Enter your credentials to access the platform
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={action} className="space-y-4">
          {state?.error && (
            <div className="flex items-center gap-2.5 rounded-lg bg-destructive/8 border border-destructive/20 p-3 text-sm text-destructive">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {state.error}
            </div>
          )}

          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              autoComplete="email"
              className="h-11 bg-surface border-border/60"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="password" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              autoComplete="current-password"
              className="h-11 bg-surface border-border/60"
            />
          </div>

          <Button
            type="submit"
            className="w-full h-11 warm-gradient text-white font-semibold border-0 hover:opacity-90 transition-opacity"
            disabled={pending}
          >
            {pending ? (
              "Signing in..."
            ) : (
              <span className="flex items-center gap-2">
                Sign In
                <ArrowRight className="h-4 w-4" />
              </span>
            )}
          </Button>

          <div className="text-center pt-2 space-y-0.5">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">
              Demo credentials
            </p>
            <p className="text-xs text-muted-foreground">
              admin@example.com / admin123
            </p>
            <p className="text-xs text-muted-foreground">
              agent@example.com / agent123
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

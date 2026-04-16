import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { LoginForm } from "@/components/features/login-form"
import { Building2 } from "lucide-react"

export const metadata = {
  title: "Login — PropertyKnowledge",
}

export default async function LoginPage() {
  const session = await auth()

  if (session) {
    redirect("/dashboard")
  }

  return (
    <div className="w-full max-w-[420px] px-4">
      <div className="text-center mb-8 animate-fade-in-up">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl warm-gradient shadow-lg mb-5">
          <Building2 className="h-7 w-7 text-white" />
        </div>
        <h1 className="font-heading text-2xl font-bold tracking-tight">
          PropertyKnowledge
        </h1>
        <p className="text-muted-foreground mt-1.5 text-sm">
          Real Estate Agent Knowledge Platform
        </p>
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        <LoginForm />
      </div>
    </div>
  )
}

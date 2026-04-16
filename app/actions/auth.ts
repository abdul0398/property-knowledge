"use server"

import { signIn, signOut } from "@/lib/auth"
import { LoginSchema } from "@/lib/definitions"
import { AuthError } from "next-auth"

export type LoginState = {
  error?: string
  success?: boolean
}

export async function loginAction(
  _prevState: LoginState | undefined,
  formData: FormData
): Promise<LoginState> {
  const parsed = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  })

  if (!parsed.success) {
    return { error: "Please enter a valid email and password." }
  }

  try {
    await signIn("credentials", {
      email: parsed.data.email,
      password: parsed.data.password,
      redirectTo: "/dashboard",
    })
    return { success: true }
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        return { error: "Invalid email or password." }
      }
      return { error: "Something went wrong. Please try again." }
    }
    throw error
  }
}

export async function logoutAction() {
  await signOut({ redirectTo: "/login" })
}

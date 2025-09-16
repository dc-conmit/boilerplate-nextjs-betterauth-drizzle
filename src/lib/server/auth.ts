import { authClient } from "@/lib/auth/auth-client"
import { insertUserSchema } from "@/lib/db/schema"

export async function registerUser(formData: FormData) {
  const { email, password, name, role } = Object.fromEntries(formData)
  
  // Validation
  const result = insertUserSchema.safeParse({email, password, name, role})
  if (!result.success) {
    return { success: false, errors: result.error.format() }
  }
  
  try {
    await authClient.signUp.email({
      email: email as string,
      password: password as string,
      name: name as string,
      role: role as string
    })
    return { success: true }
  } catch (error) {
    console.log(error)
    return { success: false, error: "Failed to create account" }
  }
}
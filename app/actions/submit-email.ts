"use server"

import { createClient } from "@supabase/supabase-js"
import { revalidatePath } from "next/cache"

// Initialize Supabase client with environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Type for our response
type SubmitEmailResponse = {
  success: boolean
  message: string
  email?: string
}

export async function submitEmail(prevState: SubmitEmailResponse, formData: FormData): Promise<SubmitEmailResponse> {
  const email = formData.get("email") as string
  const organization = (formData.get("organization") as string) || undefined
  const role = (formData.get("role") as string) || undefined
  const planName = (formData.get("planName") as string) || undefined
  const source = (formData.get("source") as string) || "landing_page"

  if (!email) {
    return {
      success: false,
      message: "Email is required",
    }
  }

  try {
    // Initialize Supabase client with service role key for admin operations
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Check if the email already exists in the database
    const { data: existingEmails } = await supabase.from("beta_signups").select("email").eq("email", email).limit(1)

    if (existingEmails && existingEmails.length > 0) {
      return {
        success: true,
        message: "You're already on our list! We'll be in touch soon.",
        email,
      }
    }

    // Insert the new email into the database
    const { error } = await supabase.from("beta_signups").insert([
      {
        email,
        organization,
        role,
        plan_name: planName,
        source,
        signed_up_at: new Date().toISOString(),
      },
    ])

    if (error) throw error

    // Revalidate the admin page if it exists
    revalidatePath("/admin/signups")

    return {
      success: true,
      message: "Thank you for your interest! We'll be in touch soon.",
      email,
    }
  } catch (error) {
    console.error("Error submitting email:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}

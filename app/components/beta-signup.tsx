"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Loader2 } from "lucide-react"
import { submitEmail } from "../actions/submit-email"
import { useFormState, useFormStatus } from "react-dom"

const initialState = {
  success: false,
  message: "",
}

function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="bg-teal-700 hover:bg-teal-800" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </>
      ) : (
        children
      )}
    </Button>
  )
}

export function BetaSignup({ buttonText = "Request Access", className }: { buttonText?: string; className?: string }) {
  const [email, setEmail] = useState("")
  const [clientError, setClientError] = useState("")
  const [state, formAction] = useFormState(submitEmail, initialState)

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setClientError("")

    if (!email) {
      e.preventDefault()
      setClientError("Please enter your email address")
      return
    }

    if (!validateEmail(email)) {
      e.preventDefault()
      setClientError("Please enter a valid email address")
      return
    }
  }

  if (state.success) {
    return (
      <div className="rounded-lg bg-teal-50 p-4 text-center">
        <div className="mb-2 flex justify-center">
          <div className="rounded-full bg-teal-700 p-2">
            <Check className="h-6 w-6 text-white" />
          </div>
        </div>
        <h3 className="text-lg font-medium text-teal-700">Thank you!</h3>
        <p className="mt-2 text-sm text-gray-600">
          {state.message || `We've received your request. Please check your inbox for updates.`}
        </p>
      </div>
    )
  }

  return (
    <form
      action={formAction}
      onSubmit={handleSubmit}
      className={`flex flex-col space-y-4 sm:flex-row sm:space-x-3 sm:space-y-0 ${className}`}
    >
      <input type="hidden" name="source" value="landing_page" />
      <div className="flex-1">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-teal-700 focus:outline-none focus:ring-1 focus:ring-teal-700"
          aria-label="Email address"
        />
        {clientError && <p className="mt-1 text-sm text-red-600">{clientError}</p>}
        {state.message && !state.success && <p className="mt-1 text-sm text-red-600">{state.message}</p>}
      </div>
      <SubmitButton>{buttonText}</SubmitButton>
    </form>
  )
}

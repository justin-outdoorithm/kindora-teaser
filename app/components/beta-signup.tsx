"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function BetaSignup({ buttonText = "Request Demo" }: { buttonText?: string }) {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Please enter your email address")
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    // In a real app, you would send this to your backend
    console.log("Email submitted for demo:", email)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="rounded-lg bg-teal-50 p-4 text-center">
        <div className="mb-2 flex justify-center">
          <div className="rounded-full bg-teal-700 p-2">
            <Check className="h-6 w-6 text-white" />
          </div>
        </div>
        <h3 className="text-lg font-medium text-teal-700">Thank you!</h3>
        <p className="mt-2 text-sm text-gray-600">
          We've sent demo access instructions to <span className="font-medium">{email}</span>. Please check your inbox.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 sm:flex-row sm:space-x-3 sm:space-y-0">
      <div className="flex-1">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-teal-700 focus:outline-none focus:ring-1 focus:ring-teal-700"
          aria-label="Email address"
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
      <Button type="submit" className="bg-teal-700 hover:bg-teal-800">
        {buttonText}
      </Button>
    </form>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Loader2, X } from "lucide-react"
import { submitEmail } from "../actions/submit-email"
import { useFormState, useFormStatus } from "react-dom"

interface BetaSignupModalProps {
  isOpen: boolean
  onClose: () => void
  planName: string
}

const initialState = {
  success: false,
  message: "",
  email: "",
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="bg-teal-700 hover:bg-teal-800" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </>
      ) : (
        "Request Access"
      )}
    </Button>
  )
}

export function BetaSignupModal({ isOpen, onClose, planName }: BetaSignupModalProps) {
  const [email, setEmail] = useState("")
  const [clientError, setClientError] = useState("")
  const [organization, setOrganization] = useState("")
  const [role, setRole] = useState("")
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

  const handleClose = () => {
    onClose()
    // Reset form state after animation completes
    setTimeout(() => {
      setEmail("")
      setOrganization("")
      setRole("")
      setClientError("")
    }, 300)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {state.success ? (
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
              <Check className="h-8 w-8 text-teal-700" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">Thank you for your interest</h3>
            <p className="mb-4 text-gray-600">
              {state.message ||
                `We've received your demo request for ${planName && <span className="font-medium">{planName}</span>}.`}
            </p>
            <div className="mb-6 rounded-lg bg-gray-50 p-4 text-left">
              <h4 className="mb-2 font-medium text-gray-800">What happens next:</h4>
              <ol className="list-decimal pl-5 text-sm text-gray-600">
                <li className="mb-1">We'll review your request and contact you at {state.email || email}</li>
                <li className="mb-1">You'll receive demo credentials within 1 business day</li>
                <li className="mb-1">Our team will schedule an optional walkthrough call</li>
                <li>Your feedback will help us improve the platform</li>
              </ol>
            </div>
            <Button onClick={handleClose} className="bg-teal-700 hover:bg-teal-800">
              Close
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900">Request Demo Access</h3>
              <p className="text-gray-600">
                Fill out this form to get access to our interactive demo
                {planName && <span> with the {planName} plan</span>}.
              </p>
            </div>

            <form action={formAction} onSubmit={handleSubmit}>
              <input type="hidden" name="source" value="pricing_modal" />
              <input type="hidden" name="planName" value={planName} />

              <div className="mb-4">
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                  Email address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@organization.org"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-teal-700 focus:outline-none focus:ring-1 focus:ring-teal-700"
                  required
                />
                {clientError && <p className="mt-1 text-sm text-red-600">{clientError}</p>}
                {state.message && !state.success && <p className="mt-1 text-sm text-red-600">{state.message}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="organization" className="mb-2 block text-sm font-medium text-gray-700">
                  Organization name
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Your nonprofit organization"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-teal-700 focus:outline-none focus:ring-1 focus:ring-teal-700"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="role" className="mb-2 block text-sm font-medium text-gray-700">
                  Your role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g., Development Director"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-teal-700 focus:outline-none focus:ring-1 focus:ring-teal-700"
                />
              </div>

              <div className="flex justify-end space-x-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </Button>
                <SubmitButton />
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

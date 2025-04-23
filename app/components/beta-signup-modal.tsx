"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

interface BetaSignupModalProps {
  isOpen: boolean
  onClose: () => void
  planName: string
}

export function BetaSignupModal({ isOpen, onClose, planName }: BetaSignupModalProps) {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [organization, setOrganization] = useState("")
  const [role, setRole] = useState("")

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
    console.log("Demo request submitted:", { email, organization, role, plan: planName })
    setIsSubmitted(true)
  }

  const handleClose = () => {
    onClose()
    // Reset form state after animation completes
    setTimeout(() => {
      setEmail("")
      setOrganization("")
      setRole("")
      setIsSubmitted(false)
      setError("")
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

        {isSubmitted ? (
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
              <Check className="h-8 w-8 text-teal-700" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">Thank you for your interest</h3>
            <p className="mb-4 text-gray-600">
              We've received your demo request for {planName && <span className="font-medium">{planName}</span>}.
            </p>
            <div className="mb-6 rounded-lg bg-gray-50 p-4 text-left">
              <h4 className="mb-2 font-medium text-gray-800">What happens next:</h4>
              <ol className="list-decimal pl-5 text-sm text-gray-600">
                <li className="mb-1">We'll review your request and contact you at {email}</li>
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

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                  Email address*
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@organization.org"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-teal-700 focus:outline-none focus:ring-1 focus:ring-teal-700"
                  required
                />
                {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="organization" className="mb-2 block text-sm font-medium text-gray-700">
                  Organization name
                </label>
                <input
                  type="text"
                  id="organization"
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
                <Button type="submit" className="bg-teal-700 hover:bg-teal-800">
                  Request Access
                </Button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

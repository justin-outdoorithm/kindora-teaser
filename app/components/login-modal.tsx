"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { X, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const openModal = () => setIsOpen(true)
  const closeModal = () => {
    setIsOpen(false)
    setPassword("")
    setError("")
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // Check against the hard-coded password
    if (password === "easyfundraising") {
      // Store in session storage that user is authenticated
      sessionStorage.setItem("demo-authenticated", "true")
      router.push("/dashboard")
      closeModal()
    } else {
      setError("Incorrect password. Please try again.")
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <Button variant="outline" className="border-teal-700 text-teal-700 hover:bg-teal-50" onClick={openModal}>
        View Demo
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <button className="absolute right-4 top-4 text-gray-500 hover:text-gray-700" onClick={closeModal}>
              <X className="h-5 w-5" />
            </button>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Demo Access</h3>
              <p className="text-gray-600 mb-6">Enter the demo password to explore the Kindora platform.</p>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="text-left">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <div className="relative mt-1">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pr-10"
                      placeholder="Enter demo password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-500"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
                  <p className="mt-2 text-xs text-gray-500">Hint: The password is "easyfundraising"</p>
                </div>

                <Button type="submit" className="w-full bg-teal-700 hover:bg-teal-800">
                  Access Demo
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

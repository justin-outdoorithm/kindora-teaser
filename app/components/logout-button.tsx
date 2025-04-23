"use client"

import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LogoutButton() {
  const router = useRouter()

  const handleLogout = () => {
    // Clear the authentication
    sessionStorage.removeItem("demo-authenticated")
    // Redirect to home
    router.push("/")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
      onClick={handleLogout}
    >
      <LogOut className="h-4 w-4 mr-2" />
      Exit Demo
    </Button>
  )
}

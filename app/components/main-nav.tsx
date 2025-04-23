"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Logo } from "./logo"

export function MainNav() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogin = () => {
    router.push("/dashboard")
  }

  return (
    <nav className="flex items-center space-x-6">
      <Logo />

      <div className="hidden md:flex items-center space-x-6">
        <Link
          href="/"
          className={cn(
            "font-medium text-gray-600 hover:text-gray-900",
            pathname === "/" && "border-b-2 border-teal-700 text-teal-700",
          )}
        >
          Home
        </Link>
        <Link
          href="/pricing"
          className={cn(
            "font-medium text-gray-600 hover:text-gray-900",
            pathname === "/pricing" && "border-b-2 border-teal-700 text-teal-700",
          )}
        >
          Pricing
        </Link>
      
      </div>
    </nav>
  )
}

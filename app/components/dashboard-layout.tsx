"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Search, HelpCircle, User, Menu, X, Home, FileText, Users, Package } from "lucide-react"
import { LogoutButton } from "@/app/components/logout-button"
import { cn } from "@/lib/utils"

interface DashboardLayoutProps {
  children: React.ReactNode
  activeTab?: string
}

export function DashboardLayout({ children, activeTab = "Home" }: DashboardLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Check authentication
  useEffect(() => {
    const checkAuth = () => {
      const isAuth = sessionStorage.getItem("demo-authenticated") === "true"
      setIsAuthenticated(isAuth)
      setIsCheckingAuth(false)

      // Redirect to home if not authenticated
      if (!isAuth && typeof window !== "undefined") {
        router.push("/")
      }
    }

    checkAuth()
  }, [router])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Show loading or nothing while checking authentication
  if (isCheckingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-teal-700 border-t-transparent"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // If not authenticated, don't render the dashboard
  if (!isAuthenticated) {
    return null
  }

  const navItems = [
    { name: "Home", path: "/dashboard", icon: <Home className="h-5 w-5" /> },
    { name: "Org Profile", path: "/fundraising-dna", icon: <Users className="h-5 w-5" /> },
    { name: "Funder Matches", path: "/funder-matches", icon: <FileText className="h-5 w-5" /> },
    { name: "Funder Packages", path: "/saved-funders", icon: <Package className="h-5 w-5" /> },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/">
            <Image
              src="/images/kindora-logo.png"
              alt="Kindora"
              width={90}
              height={36}
              priority
              className="h-7 w-auto"
            />
          </Link>
          <div className="flex items-center space-x-3">
            <button className="rounded-full p-1 hover:bg-gray-100">
              <Search className="h-5 w-5" />
            </button>
            <button
              className="rounded-full p-1 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30">
          <div className="flex justify-around py-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "flex flex-col items-center px-3 py-1 text-xs",
                  pathname === item.path ? "text-teal-700" : "text-gray-600",
                )}
              >
                <div className={cn("p-1 rounded-full mb-1", pathname === item.path ? "bg-teal-50" : "bg-transparent")}>
                  {item.icon}
                </div>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)}>
            <div
              className="absolute top-[57px] right-0 w-64 h-[calc(100%-57px)] bg-white overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center space-x-2 mb-4">
                  <User className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Jasmine</div>
                    <div className="text-xs text-gray-500">Future Impact Foundation</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 flex justify-between">
                  <span>Profile Completion</span>
                  <span>75%</span>
                </div>
                <div className="h-1 w-full bg-gray-200 rounded-full mt-1">
                  <div className="h-1 bg-teal-700 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>

              <nav className="p-4">
                <div className="text-xs font-semibold text-gray-500 mb-2">MAIN NAVIGATION</div>
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      "flex items-center px-3 py-2 rounded-md font-medium text-sm mb-1",
                      pathname === item.path ? "text-teal-700 bg-teal-50" : "text-gray-700 hover:bg-gray-100",
                    )}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
                <div className="text-xs font-semibold text-gray-500 mt-6 mb-2">HELP & SUPPORT</div>
                <Link
                  href="#"
                  className="flex items-center px-3 py-2 rounded-md font-medium text-sm text-gray-700 hover:bg-gray-100"
                >
                  <HelpCircle className="h-4 w-4 mr-3" />
                  Help Center
                </Link>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <LogoutButton />
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>

      <div className="flex h-screen md:h-auto">
        {/* Desktop Sidebar - hidden on mobile */}
        <div className="hidden md:block w-64 border-r border-gray-200 bg-white">
          <div className="p-4 border-b border-gray-200">
            <Link href="/">
              <Image
                src="/images/kindora-logo.png"
                alt="Kindora"
                width={90}
                height={36}
                priority
                className="h-7 w-auto"
              />
            </Link>
          </div>

          <nav className="p-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "flex items-center px-4 py-2 rounded-md font-medium mt-1",
                  pathname === item.path ? "text-teal-700 bg-teal-50" : "text-gray-700 hover:bg-gray-100",
                )}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            ))}
            <div className="mt-auto pt-4 border-t border-gray-200 mx-2 mt-4">
              <LogoutButton />
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className={`flex-1 flex flex-col ${isMobile ? "overflow-auto pb-16" : "overflow-hidden"}`}>
          {/* Desktop Top Navigation - hidden on mobile */}
          <header className="hidden md:block bg-white border-b border-gray-200">
            <div className="flex items-center justify-between px-6 py-3">
              <div className="flex space-x-8 items-center">
                <Link
                  href="/dashboard"
                  className={`pb-3 font-medium ${
                    activeTab === "Home"
                      ? "border-b-2 border-teal-700 text-teal-700"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Home
                </Link>
                <div className="text-xs px-2 py-1 bg-orange-100 text-orange-600 rounded-full uppercase font-medium">
                  Alpha Preview
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-sm font-medium">75% Complete</div>
                <button className="rounded-full p-1 hover:bg-gray-100">
                  <Search className="h-5 w-5" />
                </button>
                <button className="rounded-full p-1 hover:bg-gray-100">
                  <HelpCircle className="h-5 w-5" />
                </button>
                <button className="rounded-full p-1 hover:bg-gray-100">
                  <User className="h-5 w-5" />
                </button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className={`flex-1 overflow-y-auto bg-white ${isMobile ? "pt-0" : ""}`}>{children}</main>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout

"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Search, HelpCircle, User, Menu, X } from "lucide-react"
// Add the import for LogoutButton
import { LogoutButton } from "@/app/components/logout-button"

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
    return <div className="flex min-h-screen items-center justify-center">Loading...</div>
  }

  // If not authenticated, don't render the dashboard
  if (!isAuthenticated) {
    return null
  }

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
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Tabs */}
        <div className="flex overflow-x-auto px-4 py-2 border-b border-gray-200">
          <Link
            href="/dashboard"
            className={`whitespace-nowrap px-3 py-1 mr-3 rounded-full text-sm font-medium ${
              activeTab === "Home" ? "bg-teal-50 text-teal-700" : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Home
          </Link>
          <Link
            href="/funder-matches"
            className={`whitespace-nowrap px-3 py-1 mr-3 rounded-full text-sm font-medium ${
              activeTab === "Matches" ? "bg-teal-50 text-teal-700" : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Matches
          </Link>
          <Link
            href="/saved-funders"
            className={`whitespace-nowrap px-3 py-1 mr-3 rounded-full text-sm font-medium ${
              activeTab === "Saved" ? "bg-teal-50 text-teal-700" : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Saved
          </Link>
          <Link
            href="/ai-writing-assistant"
            className={`whitespace-nowrap px-3 py-1 mr-3 rounded-full text-sm font-medium ${
              activeTab === "AI Writing" ? "bg-teal-50 text-teal-700" : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            AI Writing
          </Link>
          <Link
            href="/grant-builder"
            className={`whitespace-nowrap px-3 py-1 mr-3 rounded-full text-sm font-medium ${
              activeTab === "Grant Builder" ? "bg-teal-50 text-teal-700" : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Grant Builder
          </Link>
          <Link
            href="/order"
            className={`whitespace-nowrap px-3 py-1 mr-3 rounded-full text-sm font-medium ${
              activeTab === "Order" ? "bg-teal-50 text-teal-700" : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Order
          </Link>
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)}>
            <div
              className="absolute top-[105px] right-0 w-64 h-full bg-white overflow-y-auto"
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
                <Link
                  href="/dashboard"
                  className={`flex items-center px-3 py-2 rounded-md font-medium text-sm ${
                    pathname === "/dashboard" ? "text-teal-700 bg-teal-50" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/fundraising-dna"
                  className={`flex items-center px-3 py-2 rounded-md font-medium text-sm ${
                    pathname === "/fundraising-dna" ? "text-teal-700 bg-teal-50" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Fundraising DNA
                </Link>
                <Link
                  href="/funder-matches"
                  className={`flex items-center px-3 py-2 rounded-md font-medium text-sm ${
                    pathname === "/funder-matches" ? "text-teal-700 bg-teal-50" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Funder Matches
                </Link>
                <Link
                  href="/saved-funders"
                  className={`flex items-center px-3 py-2 rounded-md font-medium text-sm ${
                    pathname === "/saved-funders" ? "text-teal-700 bg-teal-50" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Saved Funders
                </Link>
                <Link
                  href="/ai-writing-assistant"
                  className={`flex items-center px-3 py-2 rounded-md font-medium text-sm ${
                    pathname === "/ai-writing-assistant"
                      ? "text-teal-700 bg-teal-50"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  AI Writing Assistant
                </Link>
                <Link
                  href="/grant-builder"
                  className={`flex items-center px-3 py-2 rounded-md font-medium text-sm ${
                    pathname === "/grant-builder" ? "text-teal-700 bg-teal-50" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Grant Builder
                </Link>
                <Link
                  href="/order"
                  className={`flex items-center px-3 py-2 rounded-md font-medium text-sm ${
                    pathname === "/order" ? "text-teal-700 bg-teal-50" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Order
                </Link>
                <Link
                  href="/my-account"
                  className={`flex items-center px-3 py-2 rounded-md font-medium text-sm ${
                    pathname.startsWith("/my-account") ? "text-teal-700 bg-teal-50" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  My Account
                </Link>

                <div className="text-xs font-semibold text-gray-500 mt-6 mb-2">HELP & SUPPORT</div>
                <Link
                  href="#"
                  className="flex items-center px-3 py-2 rounded-md font-medium text-sm text-gray-700 hover:bg-gray-100"
                >
                  <HelpCircle className="h-4 w-4 mr-2" />
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
            <Link
              href="/dashboard"
              className={`flex items-center px-4 py-2 rounded-md font-medium mt-1 ${
                pathname === "/dashboard" ? "text-teal-700 bg-teal-50" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Home
            </Link>
            <Link
              href="/fundraising-dna"
              className={`flex items-center px-4 py-2 rounded-md font-medium mt-1 ${
                pathname === "/fundraising-dna" ? "text-teal-700 bg-teal-50" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Fundraising DNA
            </Link>
            <Link
              href="/funder-matches"
              className={`flex items-center px-4 py-2 rounded-md font-medium mt-1 ${
                pathname === "/funder-matches" ? "text-teal-700 bg-teal-50" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Funder Matches
            </Link>
            <Link
              href="/saved-funders"
              className={`flex items-center px-4 py-2 rounded-md font-medium mt-1 ${
                pathname === "/saved-funders" ? "text-teal-700 bg-teal-50" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Saved Funders
            </Link>
            <Link
              href="/ai-writing-assistant"
              className={`flex items-center px-4 py-2 rounded-md font-medium mt-1 ${
                pathname === "/ai-writing-assistant" ? "text-teal-700 bg-teal-50" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              AI Writing Assistant
            </Link>
            <Link
              href="/grant-builder"
              className={`flex items-center px-4 py-2 rounded-md font-medium mt-1 ${
                pathname === "/grant-builder" ? "text-teal-700 bg-teal-50" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Grant Builder
            </Link>
            <Link
              href="/order"
              className={`flex items-center px-4 py-2 rounded-md font-medium mt-1 ${
                pathname === "/order" ? "text-teal-700 bg-teal-50" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Order
            </Link>
            <Link
              href="/my-account"
              className={`flex items-center px-4 py-2 rounded-md font-medium mt-1 ${
                pathname.startsWith("/my-account") ? "text-teal-700 bg-teal-50" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              My Account
            </Link>
            <div className="mt-auto pt-4 border-t border-gray-200 mx-2 mt-4">
              <LogoutButton />
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className={`flex-1 flex flex-col ${isMobile ? "overflow-auto" : "overflow-hidden"}`}>
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
                <Link
                  href="/funder-matches"
                  className={`pb-3 font-medium ${
                    activeTab === "Matches"
                      ? "border-b-2 border-teal-700 text-teal-700"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Matches
                </Link>
                <Link
                  href="/saved-funders"
                  className={`pb-3 font-medium ${
                    activeTab === "Saved"
                      ? "border-b-2 border-teal-700 text-teal-700"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Saved
                </Link>
                <Link
                  href="/ai-writing-assistant"
                  className={`pb-3 font-medium ${
                    activeTab === "AI Writing"
                      ? "border-b-2 border-teal-700 text-teal-700"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  AI Writing Assistant
                </Link>
                <Link
                  href="/grant-builder"
                  className={`pb-3 font-medium ${
                    activeTab === "Grant Builder"
                      ? "border-b-2 border-teal-700 text-teal-700"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Grant Builder
                </Link>
                <Link
                  href="/order"
                  className={`pb-3 font-medium ${
                    activeTab === "Order"
                      ? "border-b-2 border-teal-700 text-teal-700"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Order
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

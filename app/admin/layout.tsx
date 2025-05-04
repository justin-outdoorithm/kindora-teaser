import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Dashboard | Kindora",
  description: "Admin dashboard for Kindora",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-teal-700 py-4 text-white">
        <div className="container mx-auto flex items-center justify-between px-4">
          <h1 className="text-xl font-bold">Kindora Admin</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/admin/signups" className="hover:underline">
                  Signups
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Back to Site
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}

import Link from "next/link"

export default function AdminPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-6 text-2xl font-bold">Admin Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/admin/signups"
          className="flex flex-col rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
        >
          <h2 className="mb-2 text-xl font-semibold">Beta Signups</h2>
          <p className="text-gray-600">View and manage beta signup requests</p>
        </Link>

        {/* Add more admin sections here as needed */}
      </div>
    </div>
  )
}

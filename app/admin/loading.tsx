export default function AdminLoading() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-6 h-8 w-48 animate-pulse rounded bg-gray-200"></div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="h-40 animate-pulse rounded-lg bg-gray-200"></div>
        <div className="h-40 animate-pulse rounded-lg bg-gray-200"></div>
        <div className="h-40 animate-pulse rounded-lg bg-gray-200"></div>
      </div>
    </div>
  )
}

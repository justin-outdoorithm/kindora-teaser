import { DashboardLayout } from "@/app/components/dashboard-layout"
import { Skeleton } from "@/components/ui/skeleton"

export default function FunderDetailLoading() {
  return (
    <DashboardLayout>
      <div className="p-4 md:p-6">
        {/* Back button */}
        <div className="mb-6">
          <Skeleton className="h-8 w-32" />
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <Skeleton className="h-8 w-64 mb-2" />
            <Skeleton className="h-5 w-40" />
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Skeleton className="h-10 w-28" />
            <Skeleton className="h-10 w-36" />
          </div>
        </div>

        {/* Match Score */}
        <Skeleton className="h-24 w-full mb-6" />

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Skeleton className="h-96 w-full" />
            <Skeleton className="h-48 w-full" />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-48 w-full" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

import { DashboardLayout } from "@/app/components/dashboard-layout"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <DashboardLayout activeTab="Matches">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-4 w-64" />
          </div>
          <div className="flex space-x-3">
            <Skeleton className="h-10 w-28" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>

        <Skeleton className="h-16 w-full mb-6 rounded-lg" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-24 rounded-lg" />
            ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-40 rounded-lg" />
              ))}
          </div>
          <div className="lg:col-span-1">
            <Skeleton className="h-[600px] rounded-lg" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

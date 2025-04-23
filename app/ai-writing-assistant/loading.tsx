import { DashboardLayout } from "@/app/components/dashboard-layout"
import { Skeleton } from "@/components/ui/skeleton"

export default function AIWritingAssistantLoading() {
  return (
    <DashboardLayout activeTab="AI Writing">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <Skeleton className="h-8 w-64 mb-2" />
            <Skeleton className="h-4 w-96" />
          </div>
          <div className="flex space-x-3">
            <Skeleton className="h-10 w-32" />
          </div>
        </div>

        <div className="mb-6">
          <Skeleton className="h-10 w-96 mb-6" />
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Skeleton className="h-4 w-32 mb-2" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div>
              <Skeleton className="h-4 w-32 mb-2" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>

          <div>
            <Skeleton className="h-4 w-32 mb-2" />
            <Skeleton className="h-32 w-full" />
          </div>

          <div>
            <Skeleton className="h-4 w-32 mb-2" />
            <Skeleton className="h-32 w-full" />
          </div>

          <div>
            <Skeleton className="h-4 w-32 mb-2" />
            <Skeleton className="h-32 w-full" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

import { Skeleton } from "@/components/ui/skeleton"
import { DashboardLayout } from "@/app/components/dashboard-layout"

export default function GrantBuilderLoading() {
  return (
    <DashboardLayout activeTab="Grant Builder">
      <div className="flex h-[calc(100vh-64px)]">
        {/* Left Sidebar - Sections */}
        <div className="w-64 border-r border-gray-200 bg-gray-50">
          <div className="p-4">
            <Skeleton className="h-6 w-3/4 mb-1" />
            <Skeleton className="h-4 w-1/2 mb-4" />

            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-4 w-1/6" />
              </div>
              <Skeleton className="h-2 w-full" />
            </div>

            <div className="flex justify-between mb-4">
              <Skeleton className="h-3 w-1/3" />
              <Skeleton className="h-3 w-1/4" />
            </div>

            <div className="space-y-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-8 w-full" />
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Bar */}
          <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
            <div>
              <Skeleton className="h-6 w-48 mb-2" />
              <div className="flex items-center">
                <Skeleton className="h-4 w-32 mr-4" />
                <Skeleton className="h-5 w-20" />
              </div>
            </div>
            <div className="flex space-x-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-9 w-20" />
              ))}
            </div>
          </div>

          {/* Editor Area */}
          <div className="flex-1 overflow-auto p-6 bg-white">
            <div className="mb-4">
              <Skeleton className="h-10 w-64" />
            </div>
            <Skeleton className="h-[400px] w-full" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

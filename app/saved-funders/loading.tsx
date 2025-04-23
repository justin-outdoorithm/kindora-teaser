import { DashboardLayout } from "@/app/components/dashboard-layout"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SavedFundersLoading() {
  return (
    <DashboardLayout activeTab="Saved">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-4 w-64" />
          </div>
          <div className="flex space-x-3">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-40" />
          </div>
        </div>

        {/* Tabs Skeleton */}
        <div className="mb-6">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-white border border-gray-200 p-1">
              <TabsTrigger value="all" disabled>
                All Saved
              </TabsTrigger>
              <TabsTrigger value="upcoming" disabled>
                Upcoming Deadlines
              </TabsTrigger>
              <TabsTrigger value="inProgress" disabled>
                In Progress
              </TabsTrigger>
              <TabsTrigger value="submitted" disabled>
                Submitted
              </TabsTrigger>
              <TabsTrigger value="awarded" disabled>
                Awarded
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Search and Filter Bar Skeleton */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <Skeleton className="h-10 w-full md:w-2/3" />
            <div className="flex gap-3">
              <Skeleton className="h-10 w-24" />
              <Skeleton className="h-10 w-24" />
            </div>
          </div>
        </div>

        {/* Stats Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <Skeleton className="h-4 w-24 mb-1" />
                <Skeleton className="h-8 w-16" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-3 w-32" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Funder List and Details Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          {/* Funder Cards Skeleton */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-white rounded-lg border border-gray-200 p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start">
                      <Skeleton className="h-5 w-5 mr-3 rounded-full" />
                      <div>
                        <Skeleton className="h-5 w-40 mb-2" />
                        <div className="flex gap-2">
                          <Skeleton className="h-5 w-20 rounded-full" />
                          <Skeleton className="h-5 w-24 rounded-full" />
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Skeleton className="h-5 w-12 mb-1" />
                      <Skeleton className="h-1.5 w-12 rounded-full" />
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between mb-1">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-20 rounded-full" />
                    </div>
                    <div className="flex justify-between">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-4 w-4 rounded-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Funder Details Skeleton */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-5 w-5 rounded-full" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Skeleton className="h-5 w-24 rounded-full" />
                  <Skeleton className="h-5 w-20 rounded-full" />
                  <Skeleton className="h-5 w-28 rounded-full" />
                </div>
              </div>

              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-5 w-12" />
                </div>
                <Skeleton className="h-2 w-full rounded-full mb-4" />

                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i}>
                      <Skeleton className="h-3 w-24 mb-1" />
                      <Skeleton className="h-5 w-32" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 border-b border-gray-200">
                <Skeleton className="h-5 w-32 mb-3" />
                <div className="flex flex-wrap gap-2">
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-6 w-32 rounded-full" />
                  <Skeleton className="h-6 w-24 rounded-full" />
                </div>
              </div>

              <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-8 w-20" />
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4 mt-2" />
              </div>

              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <div className="flex space-x-2">
                  <Skeleton className="h-10 flex-1" />
                  <Skeleton className="h-10 flex-1" />
                  <Skeleton className="h-10 w-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

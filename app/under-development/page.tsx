"use client"

import { useSearchParams } from "next/navigation"
import { DashboardLayout } from "@/app/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Construction } from "lucide-react"

export default function UnderDevelopmentPage() {
  const searchParams = useSearchParams()
  const feature = searchParams.get("feature") || "This feature"

  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center h-full p-6">
        <div className="max-w-md text-center">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-orange-100 p-6">
              <Construction className="h-12 w-12 text-orange-500" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Under Development</h1>
          <p className="text-gray-600 mb-8">
            {feature} is currently under development and will be available soon. We're working hard to bring you the
            best experience possible.
          </p>
          <Button onClick={() => window.history.back()} className="bg-teal-700 hover:bg-teal-800">
            Go Back
          </Button>
        </div>
      </div>
    </DashboardLayout>
  )
}

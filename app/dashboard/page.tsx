"use client"

import Link from "next/link"
import { DashboardLayout } from "@/app/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Star, Building, MapPin, FileTextIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { X } from "lucide-react"

export default function Dashboard() {
  const [showWelcomeBanner, setShowWelcomeBanner] = useState(true)

  return (
    <DashboardLayout activeTab="Home">
      <div className="p-4 md:p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
              Welcome back, Jasmine{" "}
              <span role="img" aria-label="wave" className="mx-1">
                👋
              </span>
            </h1>
            <p className="text-gray-600">Future Impact Foundation</p>
          </div>
          <div className="flex space-x-3">
            <Link href="/funder-matches">
              <Button className="bg-teal-700 hover:bg-teal-800">
                <Search className="h-4 w-4 mr-2" />
                Find Funders
              </Button>
            </Link>
          </div>
        </div>

        {/* Welcome Banner */}
        {showWelcomeBanner && (
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-lg p-4 mb-6">
            <div className="flex items-start justify-between">
              <div className="flex">
                <div className="flex-shrink-0 bg-teal-100 rounded-full p-2 mr-4">
                  <FileTextIcon className="h-6 w-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Complete Your Organization Profile</h3>
                  <p className="text-gray-700 mt-1">
                    Finish setting up your organization profile to get more accurate funder matches.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <Link href="/fundraising-dna">
                      <Button className="bg-teal-700 hover:bg-teal-800">Complete Your Profile</Button>
                    </Link>
                    <Button variant="outline" className="border-gray-300" onClick={() => setShowWelcomeBanner(false)}>
                      Dismiss
                    </Button>
                  </div>
                </div>
              </div>
              <button
                className="text-gray-400 hover:text-gray-600"
                onClick={() => setShowWelcomeBanner(false)}
                aria-label="Dismiss"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity & Matches */}
          <div className="lg:col-span-2 space-y-6">
            {/* Top Matches */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Top Funder Matches</CardTitle>
                  <Link href="/funder-matches">
                    <Button variant="ghost" size="sm" className="text-teal-700">
                      View All <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "1",
                      name: "Education Foundation of America",
                      focus: ["Education", "Youth Development"],
                      score: 92,
                      avgGrant: "$75,000",
                      deadline: "Rolling",
                      location: "National",
                      type: "Foundation",
                      status: "Researching",
                      starred: true,
                    },
                    {
                      id: "2",
                      name: "Kresge Foundation",
                      focus: ["Arts & Culture", "Education"],
                      score: 87,
                      avgGrant: "$45,000",
                      deadline: "June 30, 2023",
                      location: "Regional",
                      type: "Foundation",
                      status: "Outreach",
                      starred: false,
                    },
                    {
                      id: "3",
                      name: "Robert Wood Johnson Foundation",
                      focus: ["Health", "Youth Development"],
                      score: 83,
                      avgGrant: "$60,000",
                      deadline: "May 15, 2023",
                      location: "National",
                      type: "Foundation",
                      status: "Application",
                      starred: true,
                    },
                  ].map((funder, index) => (
                    <div key={index} className="bg-white rounded-lg border border-gray-200 p-3 md:p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <button
                            className={`mr-3 text-2xl ${funder.starred ? "text-yellow-400" : "text-gray-300"}`}
                            aria-label={funder.starred ? "Remove from starred" : "Add to starred"}
                          >
                            <Star className={`h-5 w-5 ${funder.starred ? "fill-current" : ""}`} />
                          </button>
                          <div>
                            <h3 className="font-medium text-gray-900">{funder.name}</h3>
                            <div className="flex flex-wrap gap-1 mt-1">
                              <Badge variant="outline" className="text-xs bg-gray-50">
                                <Building className="h-3 w-3 mr-1" />
                                {funder.type}
                              </Badge>
                              <Badge variant="outline" className="text-xs bg-gray-50">
                                <MapPin className="h-3 w-3 mr-1" />
                                {funder.location}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-teal-700">{funder.score}%</div>
                          <div className="h-1.5 w-12 rounded-full bg-gray-200 mt-1">
                            <div className="h-1.5 rounded-full bg-teal-700" style={{ width: `${funder.score}%` }}></div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-gray-600 flex justify-between items-center">
                        <div>
                          <div>Grant: {funder.avgGrant}</div>
                          <div>Deadline: {funder.deadline}</div>
                        </div>
                        <Link href={`/dashboard/funder/${funder.id}`}>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-teal-700 text-teal-700 hover:bg-teal-50"
                          >
                            View
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href="/fundraising-dna" className="w-full">
                  <div className="bg-white rounded-lg border border-gray-200 hover:border-teal-700 transition-colors p-4 flex items-center">
                    <div className="bg-teal-50 rounded-full p-2 mr-3">
                      <FileTextIcon className="h-5 w-5 text-teal-700" />
                    </div>
                    <div>
                      <div className="font-medium">View Org Profile</div>
                    </div>
                  </div>
                </Link>

                <Link href="/funder-matches" className="w-full">
                  <div className="bg-white rounded-lg border border-gray-200 hover:border-teal-700 transition-colors p-4 flex items-center">
                    <div className="bg-teal-50 rounded-full p-2 mr-3">
                      <Search className="h-5 w-5 text-teal-700" />
                    </div>
                    <div>
                      <div className="font-medium">Browse Funder Matches</div>
                    </div>
                  </div>
                </Link>

                <Link href="/saved-funders" className="w-full">
                  <div className="bg-white rounded-lg border border-gray-200 hover:border-teal-700 transition-colors p-4 flex items-center">
                    <div className="bg-teal-50 rounded-full p-2 mr-3">
                      <Star className="h-5 w-5 text-teal-700" />
                    </div>
                    <div>
                      <div className="font-medium">Funder Packages</div>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>

            {/* Upcoming Deadlines */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Gates Foundation", date: "May 15, 2023", days: 14 },
                    { name: "Ford Foundation", date: "June 1, 2023", days: 31 },
                    { name: "MacArthur Foundation", date: "June 15, 2023", days: 45 },
                  ].map((deadline, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 border-b border-gray-100 last:border-0"
                    >
                      <div>
                        <div className="font-medium">{deadline.name}</div>
                        <div className="text-xs text-gray-600">{deadline.date}</div>
                      </div>
                      <div className="text-xs px-2 py-1 bg-teal-100 text-teal-700 rounded-full">
                        {deadline.days} days
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

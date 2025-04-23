"use client"

import Link from "next/link"
import { DashboardLayout } from "@/app/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Star, Building, MapPin, BarChart3, Users, DollarSign, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"
import { X, HelpCircle, FileTextIcon, ExternalLink } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

export default function Dashboard() {
  const [showWelcomeBanner, setShowWelcomeBanner] = useState(true)
  const [showHelpDialog, setShowHelpDialog] = useState(false)

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
            <Link href="/fundraising-dna">
              <Button variant="outline" className="border-teal-700 text-teal-700 hover:bg-teal-50">
                <FileTextIcon className="h-4 w-4 mr-2" />
                View DNA Profile
              </Button>
            </Link>
            <Link href="/funder-matches">
              <Button className="bg-teal-700 hover:bg-teal-800">
                <Search className="h-4 w-4 mr-2" />
                Find Funders
              </Button>
            </Link>

            {/* Help Button */}
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-100"
              onClick={() => setShowHelpDialog(true)}
            >
              <HelpCircle className="h-5 w-5" />
              <span className="sr-only">Help</span>
            </Button>
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
                  <h3 className="font-bold text-gray-900">Complete Your Fundraising DNA Profile</h3>
                  <p className="text-gray-700 mt-1">
                    Your profile is 75% complete. Finish setting up your Fundraising DNA to get more accurate funder
                    matches and increase your success rate.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <Link href="/fundraising-dna">
                      <Button className="bg-teal-700 hover:bg-teal-800">Complete Your Profile</Button>
                    </Link>
                    <Button variant="outline" className="border-gray-300" onClick={() => setShowWelcomeBanner(false)}>
                      Remind Me Later
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

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>DNA Score</CardDescription>
              <CardTitle className="text-3xl text-teal-700">85</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-gray-500">Last updated: Apr 10</div>
              <Progress value={85} className="h-2 mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Funder Matches</CardDescription>
              <CardTitle className="text-3xl">42</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-gray-500">Based on your profile</div>
              <div className="flex items-center mt-2 text-sm text-teal-700">
                <ArrowRight className="h-4 w-4 mr-1" />
                <Link href="/funder-matches">View all matches</Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Packages Used</CardDescription>
              <CardTitle className="text-3xl">12/25</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-gray-500">This billing cycle</div>
              <Progress value={48} className="h-2 mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Success Rate</CardDescription>
              <CardTitle className="text-3xl text-teal-700">76%</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-gray-500">Industry avg: 35%</div>
              <div className="flex items-center mt-2 text-sm text-teal-700">
                <BarChart3 className="h-4 w-4 mr-1" />
                <span>Above average</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity & Matches */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Recent Activity</CardTitle>
                  <Button variant="ghost" size="sm" className="text-teal-700">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      icon: <FileTextIcon className="h-5 w-5 text-blue-500" />,
                      title: "Fundraising DNA updated",
                      time: "Today, 10:30 AM",
                      description: "Your organization profile was updated with new information.",
                    },
                    {
                      icon: <Star className="h-5 w-5 text-yellow-500" />,
                      title: "New funder match found",
                      time: "Yesterday, 3:45 PM",
                      description: "Education Foundation of America (92% match)",
                    },
                    {
                      icon: <DollarSign className="h-5 w-5 text-green-500" />,
                      title: "Grant application submitted",
                      time: "Apr 15, 2023",
                      description: "Application to Kresge Foundation submitted successfully.",
                    },
                    {
                      icon: <Users className="h-5 w-5 text-purple-500" />,
                      title: "Team member added",
                      time: "Apr 12, 2023",
                      description: "Michael Johnson was added to your organization.",
                    },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mr-3 mt-1 bg-gray-100 rounded-full p-2">{activity.icon}</div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium text-gray-900">{activity.title}</p>
                          <span className="text-xs text-gray-500">{activity.time}</span>
                        </div>
                        <p className="text-sm text-gray-600">{activity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

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
                      <div className="font-medium">View Fundraising DNA</div>
                      <div className="text-xs text-gray-500">Check your organization's profile</div>
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
                      <div className="text-xs text-gray-500">Find your perfect funding match</div>
                    </div>
                  </div>
                </Link>

                <Link href="/saved-funders" className="w-full">
                  <div className="bg-white rounded-lg border border-gray-200 hover:border-teal-700 transition-colors p-4 flex items-center">
                    <div className="bg-teal-50 rounded-full p-2 mr-3">
                      <Star className="h-5 w-5 text-teal-700" />
                    </div>
                    <div>
                      <div className="font-medium">Saved Funders</div>
                      <div className="text-xs text-gray-500">View and manage your saved funders</div>
                    </div>
                  </div>
                </Link>

                <Link href="/ai-writing-assistant" className="w-full">
                  <div className="bg-white rounded-lg border border-gray-200 hover:border-teal-700 transition-colors p-4 flex items-center">
                    <div className="bg-teal-50 rounded-full p-2 mr-3">
                      <FileTextIcon className="h-5 w-5 text-teal-700" />
                    </div>
                    <div>
                      <div className="font-medium">Create Grant Application</div>
                      <div className="text-xs text-gray-500">Use AI to write your application</div>
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
                        <div className="text-xs text-gray-600 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {deadline.date}
                        </div>
                      </div>
                      <div className="text-xs px-2 py-1 bg-teal-100 text-teal-700 rounded-full">
                        {deadline.days} days
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" size="sm" className="text-teal-700 w-full">
                  View All Deadlines
                </Button>
              </CardFooter>
            </Card>

            {/* Subscription Status */}
            <Card>
              <CardHeader>
                <CardTitle>Subscription Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-teal-50 rounded-lg p-3 mb-4">
                  <div className="font-medium text-teal-700">Professional Plan</div>
                  <div className="text-sm text-gray-700">$299/month, billed monthly</div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Funder Packages</span>
                      <span className="font-medium">12 / 25</span>
                    </div>
                    <Progress value={48} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>User Seats</span>
                      <span className="font-medium">2 / 3</span>
                    </div>
                    <Progress value={66} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Next Billing Date</span>
                      <span className="font-medium">May 1, 2023</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/my-account/subscription" className="w-full">
                  <Button variant="outline" className="w-full">
                    Manage Subscription
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      {/* Help Dialog */}
      <Dialog open={showHelpDialog} onOpenChange={setShowHelpDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Help & Resources</DialogTitle>
            <DialogDescription>Get help with using the Kindora platform</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="rounded-lg border border-gray-200 p-3 hover:border-teal-700 transition-colors">
              <h3 className="font-medium text-gray-900 mb-1">Getting Started Guide</h3>
              <p className="text-sm text-gray-600 mb-2">Learn the basics of using the Kindora platform</p>
              <Button variant="outline" className="w-full border-teal-700 text-teal-700 hover:bg-teal-50">
                <FileTextIcon className="h-4 w-4 mr-2" />
                View Guide
              </Button>
            </div>

            <div className="rounded-lg border border-gray-200 p-3 hover:border-teal-700 transition-colors">
              <h3 className="font-medium text-gray-900 mb-1">Video Tutorials</h3>
              <p className="text-sm text-gray-600 mb-2">Watch step-by-step tutorials on key features</p>
              <Button variant="outline" className="w-full border-teal-700 text-teal-700 hover:bg-teal-50">
                <ExternalLink className="h-4 w-4 mr-2" />
                Watch Videos
              </Button>
            </div>

            <div className="rounded-lg border border-gray-200 p-3 hover:border-teal-700 transition-colors">
              <h3 className="font-medium text-gray-900 mb-1">Contact Support</h3>
              <p className="text-sm text-gray-600 mb-2">Get help from our customer support team</p>
              <Button variant="outline" className="w-full border-teal-700 text-teal-700 hover:bg-teal-50">
                <HelpCircle className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
            </div>
          </div>

          <DialogFooter>
            <Button onClick={() => setShowHelpDialog(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  )
}

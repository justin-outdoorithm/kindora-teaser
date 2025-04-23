import Link from "next/link"
import { DashboardLayout } from "@/app/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { User, CreditCard, Settings, Shield, Bell, HelpCircle } from "lucide-react"

export default function MyAccountPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">My Account</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex items-center mb-4">
                <div className="h-16 w-16 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
                  <User className="h-8 w-8" />
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-bold text-gray-900">Jasmine Smith</h2>
                  <p className="text-gray-600">Development Director</p>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-600 mb-1">Future Impact Foundation</p>
                <p className="text-gray-600 mb-1">jasmine@futureimpact.org</p>
                <p className="text-gray-600">Member since April 2025</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="border-b border-gray-200">
                <Link href="/my-account/subscription" className="flex items-center p-4 hover:bg-gray-50">
                  <CreditCard className="h-5 w-5 text-teal-700 mr-3" />
                  <span className="font-medium">My Subscription</span>
                </Link>
              </div>
              <div className="border-b border-gray-200">
                <Link
                  href="/under-development?feature=Account Settings"
                  className="flex items-center p-4 hover:bg-gray-50"
                >
                  <Settings className="h-5 w-5 text-gray-600 mr-3" />
                  <span>Account Settings</span>
                </Link>
              </div>
              <div className="border-b border-gray-200">
                <Link
                  href="/under-development?feature=Privacy & Security"
                  className="flex items-center p-4 hover:bg-gray-50"
                >
                  <Shield className="h-5 w-5 text-gray-600 mr-3" />
                  <span>Privacy & Security</span>
                </Link>
              </div>
              <div className="border-b border-gray-200">
                <Link
                  href="/under-development?feature=Notifications"
                  className="flex items-center p-4 hover:bg-gray-50"
                >
                  <Bell className="h-5 w-5 text-gray-600 mr-3" />
                  <span>Notifications</span>
                </Link>
              </div>
              <div>
                <Link
                  href="/under-development?feature=Help & Support"
                  className="flex items-center p-4 hover:bg-gray-50"
                >
                  <HelpCircle className="h-5 w-5 text-gray-600 mr-3" />
                  <span>Help & Support</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Account Overview</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Current Plan</h3>
                  <div className="text-2xl font-bold text-teal-700 mb-1">Professional</div>
                  <p className="text-gray-600 mb-4">$299/month, billed monthly</p>
                  <Link href="/order">
                    <Button variant="outline" className="border-teal-700 text-teal-700 hover:bg-teal-50">
                      Upgrade Plan
                    </Button>
                  </Link>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Usage This Month</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Funder Packages</span>
                        <span className="font-medium">12 / 25</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-200">
                        <div className="h-2 rounded-full bg-teal-700" style={{ width: "48%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>User Seats</span>
                        <span className="font-medium">2 / 3</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-200">
                        <div className="h-2 rounded-full bg-teal-700" style={{ width: "66%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h3 className="font-medium text-orange-800 mb-2">Early Access Program</h3>
                <p className="text-gray-700 mb-3">
                  You're part of our exclusive Early Access Program. Enjoy concierge-level service and direct access to
                  our founding team.
                </p>
                <Link href="/order">
                  <Button className="bg-orange-500 hover:bg-orange-600">Manage Subscription</Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 mt-1">
                    <CreditCard className="h-4 w-4" />
                  </div>
                  <div className="ml-4">
                    <div className="font-medium">Monthly subscription payment</div>
                    <div className="text-sm text-gray-600">April 1, 2025</div>
                  </div>
                  <div className="ml-auto font-medium">$299.00</div>
                </div>

                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <div className="font-medium">Added new user seat</div>
                    <div className="text-sm text-gray-600">March 28, 2025</div>
                  </div>
                  <div className="ml-auto font-medium">-</div>
                </div>

                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <div className="font-medium">Upgraded to Professional Plan</div>
                    <div className="text-sm text-gray-600">March 15, 2025</div>
                  </div>
                  <div className="ml-auto font-medium">-</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

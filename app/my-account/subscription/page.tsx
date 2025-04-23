import Link from "next/link"
import { DashboardLayout } from "@/app/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { CreditCard, Download, Calendar, AlertCircle } from "lucide-react"

export default function MySubscriptionPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">My Subscription</h1>
          <Link href="/order">
            <Button className="bg-teal-700 hover:bg-teal-800">Change Plan</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Current Plan</h2>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Active</span>
              </div>

              <div className="flex items-center p-4 bg-teal-50 border border-teal-200 rounded-lg mb-6">
                <div className="flex-1">
                  <div className="text-2xl font-bold text-teal-700">Professional Plan</div>
                  <div className="text-gray-700">$299 per month, billed monthly</div>
                </div>
                <div>
                  <Button variant="outline" className="border-teal-700 text-teal-700 hover:bg-teal-50">
                    <Download className="h-4 w-4 mr-2" />
                    Invoice
                  </Button>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <div>
                    <span className="text-gray-700">Next billing date:</span>
                    <span className="font-medium ml-2">May 1, 2025</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <div>
                    <span className="text-gray-700">Subscription started:</span>
                    <span className="font-medium ml-2">April 1, 2025</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <div>
                    <span className="text-gray-700">Initial term ends:</span>
                    <span className="font-medium ml-2">April 1, 2026</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Early Access Program</h3>
                    <p className="text-gray-700">
                      You're part of our exclusive Early Access Program. When the Kindora web platform becomes
                      available, you'll have priority migration with no interruption to your service.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Plan Features</h2>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Funder Packages</span>
                    <span>25 per month</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div className="h-2 rounded-full bg-teal-700" style={{ width: "48%" }}></div>
                  </div>
                  <div className="flex justify-between mt-1 text-sm text-gray-600">
                    <span>12 used</span>
                    <span>13 remaining</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">User Seats</span>
                    <span>3 total</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div className="h-2 rounded-full bg-teal-700" style={{ width: "66%" }}></div>
                  </div>
                  <div className="flex justify-between mt-1 text-sm text-gray-600">
                    <span>2 used</span>
                    <span>1 remaining</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-2">Additional Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-teal-700 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>CRM Integrations</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-teal-700 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Grant Application Builder (10 free applications per month)</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-teal-700 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Quarterly Strategy Call (30-minute)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Method</h2>

              <div className="flex items-center p-4 border border-gray-200 rounded-lg mb-4">
                <CreditCard className="h-8 w-8 text-gray-400 mr-3" />
                <div>
                  <div className="font-medium">Visa ending in 4242</div>
                  <div className="text-sm text-gray-600">Expires 12/2026</div>
                </div>
              </div>

              <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                Update Payment Method
              </Button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Billing History</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border-b border-gray-100">
                  <div>
                    <div className="font-medium">April 1, 2025</div>
                    <div className="text-sm text-gray-600">Professional Plan</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$299.00</div>
                    <div className="text-xs text-green-600">Paid</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 border-b border-gray-100">
                  <div>
                    <div className="font-medium">March 15, 2025</div>
                    <div className="text-sm text-gray-600">Setup Fee</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$150.00</div>
                    <div className="text-xs text-green-600">Paid</div>
                  </div>
                </div>
              </div>

              <Button variant="link" className="mt-2 p-0 h-auto text-teal-700">
                View All Invoices
              </Button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h2>
              <p className="text-gray-700 mb-4">
                Have questions about your subscription or need to make changes? Our team is here to help.
              </p>
              <Button className="w-full bg-teal-700 hover:bg-teal-800">Contact Support</Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

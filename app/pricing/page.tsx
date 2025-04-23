"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/app/components/site-header"
import { BetaSignupModal } from "@/app/components/beta-signup-modal"

export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("")

  const openModal = (plan: string) => {
    setSelectedPlan(plan)
    setIsModalOpen(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-white py-12 border-b border-gray-100">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Pricing Plans</h1>
              <p className="mt-4 text-lg text-gray-600">
                Choose the plan that's right for your nonprofit organization.
              </p>
            </div>

            {/* Pricing Tiers - Updated with all 4 tiers */}
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:max-w-6xl lg:mx-auto">
              {/* Community Plan */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">Community</h3>
                <p className="mt-2 text-sm text-gray-500">For small organizations with limited grant-seeking needs</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold tracking-tight text-gray-900">$69</span>
                  <span className="ml-1 text-xl text-gray-500">/month</span>
                </div>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-sm text-gray-700">3 funder packages per month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-sm text-gray-700">Basic organization profile</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-sm text-gray-700">Email support</span>
                  </li>
                </ul>
                <Button
                  className="mt-8 w-full rounded-md bg-teal-700 py-2 text-white hover:bg-teal-800"
                  onClick={() => openModal("Community")}
                >
                  Request Demo
                </Button>
              </div>

              {/* Essential Plan */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">Essential</h3>
                <p className="mt-2 text-sm text-gray-500">
                  For organizations actively pursuing multiple funding sources
                </p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold tracking-tight text-gray-900">$189</span>
                  <span className="ml-1 text-xl text-gray-500">/month</span>
                </div>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-sm text-gray-700">10 funder packages per month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-sm text-gray-700">Enhanced organization profile</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-sm text-gray-700">Priority email support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-sm text-gray-700">AI writing assistance (basic)</span>
                  </li>
                </ul>
                <Button
                  className="mt-8 w-full rounded-md bg-teal-700 py-2 text-white hover:bg-teal-800"
                  onClick={() => openModal("Essential")}
                >
                  Request Demo
                </Button>
              </div>

              {/* Professional Plan */}
              <div className="relative rounded-lg border-2 border-teal-700 bg-white p-6 shadow-md">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-teal-700 px-4 py-1 text-sm font-medium text-white">
                  Most Popular
                </div>
                <h3 className="text-lg font-bold text-gray-900">Professional</h3>
                <p className="mt-2 text-sm text-gray-500">For organizations with dedicated development staff</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold tracking-tight text-gray-900">$399</span>
                  <span className="ml-1 text-xl text-gray-500">/month</span>
                </div>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-sm text-gray-700">25 funder packages per month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-sm text-gray-700">Premium organization profile</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-sm text-gray-700">CRM integrations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-sm text-gray-700">AI grant application builder (10/mo)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-sm text-gray-700">Quarterly strategy call (30 min)</span>
                  </li>
                </ul>
                <Button
                  className="mt-8 w-full rounded-md bg-teal-700 py-2 text-white hover:bg-teal-800"
                  onClick={() => openModal("Professional")}
                >
                  Request Demo
                </Button>
              </div>

              {/* Enterprise Plan */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">Enterprise</h3>
                <p className="mt-2 text-sm text-gray-500">For large organizations and consultancies</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold tracking-tight text-gray-900">$1,199</span>
                  <span className="ml-1 text-xl text-gray-500">/month</span>
                </div>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-sm text-gray-700">50 funder packages per month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-sm text-gray-700">Premium organization profile</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-sm text-gray-700">Complimentary consulting (3 hrs/quarter)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-sm text-gray-700">Premium support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-sm text-gray-700">Unlimited AI grant applications</span>
                  </li>
                </ul>
                <Button
                  className="mt-8 w-full rounded-md bg-teal-700 py-2 text-white hover:bg-teal-800"
                  onClick={() => openModal("Enterprise")}
                >
                  Request Demo
                </Button>
              </div>
            </div>

            {/* Organization Profile Setup */}
            <div className="mt-16 mx-auto max-w-3xl bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Organization Profile Setup</h3>
                  <p className="mt-2 text-gray-600">One-time fee required to get started</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="text-3xl font-bold text-gray-900">$300</span>
                  <span className="text-gray-500 ml-1">one-time</span>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-gray-700">This initial setup includes:</p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-gray-600">Organization profile creation using our AI system</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-gray-600">NTEE code assignment and sector analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-gray-600">Initial portfolio of funder matches tailored to your mission</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-gray-600">Platform orientation session</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* FAQ Section - Simple Version */}
            <div className="mt-16 mx-auto max-w-3xl">
              <h2 className="text-xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="rounded-lg border border-gray-200 p-4">
                  <h3 className="text-lg font-medium text-gray-900">How does billing work?</h3>
                  <p className="mt-2 text-gray-600">
                    All plans are billed monthly with the option to pay annually for a 10% discount. The one-time setup
                    fee is charged separately when you first sign up.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 p-4">
                  <h3 className="text-lg font-medium text-gray-900">Can I change plans later?</h3>
                  <p className="mt-2 text-gray-600">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the beginning of the
                    next billing cycle.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 p-4">
                  <h3 className="text-lg font-medium text-gray-900">What's included in a funder package?</h3>
                  <p className="mt-2 text-gray-600">
                    Each funder package includes detailed information about a potential funder, including funding
                    priorities, application requirements, past grantees, and customized outreach materials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Simple */}
        <section className="bg-gray-50 py-12 border-t border-gray-100">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Ready to experience the platform?</h2>
              <p className="mt-3 text-gray-600">
                Request demo access to explore all features and see how Kindora can help your organization.
              </p>
              <div className="mt-8">
                <Button className="px-6 py-2 bg-teal-700 hover:bg-teal-800" onClick={() => openModal("Kindora Demo")}>
                  Request Demo Access
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="container">
          <div className="text-center">
            <p className="text-gray-600">© 2023 Kindora. All rights reserved.</p>
            <p className="mt-2 text-sm text-gray-500">This is a demo version for client feedback purposes.</p>
          </div>
        </div>
      </footer>

      {/* Demo Request Modal */}
      <BetaSignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} planName={selectedPlan} />
    </div>
  )
}

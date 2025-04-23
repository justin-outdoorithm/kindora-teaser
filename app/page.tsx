import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/app/components/site-header"
import { BetaSignup } from "@/app/components/beta-signup"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section - Simplified */}
        <section className="bg-white py-12 sm:py-16 border-b border-gray-100">
          <div className="container">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
                <h1>
                  <span className="block text-base font-semibold text-orange-500">Project Kindora</span>
                  <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                    <span className="block text-gray-900">Modern</span>
                    <span className="block text-teal-700">Fundraising Tools</span>
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  AI-powered platform for nonprofits to identify, connect with, and secure funding from the right
                  donors.
                </p>
                <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                  <div className="space-y-4">
                    <BetaSignup buttonText="Request Demo Access" />
                    <p className="text-sm text-gray-500">
                      This is a demo version for client feedback. No credit card required.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:col-span-6 lg:mt-0">
                <div className="relative sm:mx-auto sm:max-w-md lg:max-w-none">
                  <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
                    <Image
                      src="/images/dashboard-preview.png"
                      alt="Kindora Dashboard Preview"
                      width={600}
                      height={400}
                      className="w-full"
                    />
                    <div className="absolute -top-2 -right-2 rounded-full bg-gray-600 px-3 py-1 text-xs font-medium text-white">
                      Demo Preview
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features - Functional Focused */}
        <section className="bg-white py-12">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Key Platform Features</h2>
              <p className="mt-3 text-gray-600">
                Our platform offers these core tools to transform your fundraising process.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-5">
                <h3 className="mb-2 text-lg font-medium text-gray-900">Fundraising DNA</h3>
                <p className="text-gray-600 text-sm">
                  Analyze your organization's unique fundraising profile to identify the best funding opportunities.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-5">
                <h3 className="mb-2 text-lg font-medium text-gray-900">Funder Matching</h3>
                <p className="text-gray-600 text-sm">
                  Get matched with funders who are most likely to support your mission and projects.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-5">
                <h3 className="mb-2 text-lg font-medium text-gray-900">AI Writing Assistant</h3>
                <p className="text-gray-600 text-sm">
                  Generate customized outreach materials for each funder to increase your success rate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Walkthrough */}
        <section className="bg-gray-50 py-12 border-y border-gray-100">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Platform Walkthrough</h2>
              <p className="mt-3 text-gray-600">
                Explore the key components of our platform and how they work together.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dashboard & Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Your central command center provides real-time insights into your fundraising activities and
                  performance metrics.
                </p>
                <Link href="/dashboard">
                  <Button className="w-full bg-teal-700 hover:bg-teal-800">View Demo Dashboard</Button>
                </Link>
              </div>

              <div className="rounded-lg bg-white p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Funder Matches</h3>
                <p className="text-gray-600 mb-4">
                  Browse and filter through potential funders that match your organization's profile and mission.
                </p>
                <Link href="/funder-matches">
                  <Button className="w-full bg-teal-700 hover:bg-teal-800">View Funder Matches</Button>
                </Link>
              </div>

              <div className="rounded-lg bg-white p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Organization DNA</h3>
                <p className="text-gray-600 mb-4">
                  Understand your organization's unique funding profile and opportunities for improvement.
                </p>
                <Link href="/fundraising-dna">
                  <Button className="w-full bg-teal-700 hover:bg-teal-800">View Org DNA Profile</Button>
                </Link>
              </div>

              <div className="rounded-lg bg-white p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI Writing Tools</h3>
                <p className="text-gray-600 mb-4">
                  Use AI to draft personalized grant applications and outreach materials.
                </p>
                <Link href="/ai-writing-assistant">
                  <Button className="w-full bg-teal-700 hover:bg-teal-800">Try AI Assistant</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Plans/Pricing - Updated with all 4 tiers */}
        <section className="bg-white py-12">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Simple, Transparent Pricing</h2>
              <p className="mt-3 text-gray-600">We offer flexible plans for organizations of every size.</p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:max-w-6xl lg:mx-auto">
              {/* Community Plan */}
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900">Community</h3>
                <p className="mt-2 text-sm text-gray-500">For grassroots organizations</p>
                <div className="mt-3 flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">$59</span>
                  <span className="ml-1 text-xl text-gray-500">/mo</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-sm text-gray-700">3 funder matches/month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-sm text-gray-700">1 user seat</span>
                  </li>
                </ul>
                <Link href="/pricing" className="block mt-6">
                  <Button className="w-full">View Details</Button>
                </Link>
              </div>

              {/* Essential Plan */}
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900">Essential</h3>
                <p className="mt-2 text-sm text-gray-500">For growing organizations</p>
                <div className="mt-3 flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">$149</span>
                  <span className="ml-1 text-xl text-gray-500">/mo</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-sm text-gray-700">10 funder matches/month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-sm text-gray-700">2 user seats</span>
                  </li>
                </ul>
                <Link href="/pricing" className="block mt-6">
                  <Button className="w-full">View Details</Button>
                </Link>
              </div>

              {/* Professional Plan */}
              <div className="rounded-lg border-2 border-teal-700 p-6 shadow-md relative">
                <div className="absolute -top-3 right-4 bg-teal-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
                <h3 className="text-lg font-bold text-gray-900">Professional</h3>
                <p className="mt-2 text-sm text-gray-500">For established organizations</p>
                <div className="mt-3 flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">$299</span>
                  <span className="ml-1 text-xl text-gray-500">/mo</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-sm text-gray-700">25 funder matches/month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-sm text-gray-700">3 user seats</span>
                  </li>
                </ul>
                <Link href="/pricing" className="block mt-6">
                  <Button className="w-full bg-teal-700 hover:bg-teal-800">View Details</Button>
                </Link>
              </div>

              {/* Enterprise Plan */}
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900">Enterprise</h3>
                <p className="mt-2 text-sm text-gray-500">For large organizations</p>
                <div className="mt-3 flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">$999</span>
                  <span className="ml-1 text-xl text-gray-500">/mo</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-sm text-gray-700">50 funder matches/month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span className="text-sm text-gray-700">5 user seats</span>
                  </li>
                </ul>
                <Link href="/pricing" className="block mt-6">
                  <Button className="w-full">View Details</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Request CTA */}
        <section className="bg-gray-50 py-12 border-t border-gray-100">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Ready to try the platform?</h2>
              <p className="mt-3 text-lg text-gray-600">
                Get access to our demo and see how Kindora can transform your fundraising process.
              </p>
              <div className="mt-8 flex justify-center">
                <BetaSignup buttonText="Request Demo Access" />
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Demo access includes all features and sample data for evaluation.
              </p>
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
    </div>
  )
}

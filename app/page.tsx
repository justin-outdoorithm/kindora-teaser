import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/app/components/site-header"
import { BetaSignup } from "@/app/components/beta-signup"
import { Button } from "@/components/ui/button"
import { Check, Users, Building, Calendar, FileText, Search, Filter, Star, Clock, ArrowRight } from "lucide-react"

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
                  <span className="block text-base font-semibold text-orange-500">Project Proxi</span>
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
                      alt="Proxi Dashboard Preview"
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

        {/* Platform Features - Consolidated Section */}
        <section className="bg-white py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Democratizing Access to Funding</h2>
              <p className="mt-4 text-lg text-gray-600">
                Proxi leverages advanced technology and human-centered design to level the playing field in the social
                sector, providing equitable intelligence once limited to insiders.
              </p>
            </div>

            {/* Org Profile Feature */}
            <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block bg-teal-100 rounded-full px-3 py-1 text-sm font-semibold text-teal-700 mb-4">
                  Organization Profile
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Understand Your Funding Potential</h3>
                <p className="text-gray-600 mb-4">
                  Your organization has unique strengths and opportunities. Our Org Profile tool analyzes your mission,
                  programs, and impact to create a comprehensive funding profile that highlights your most compelling
                  attributes to funders.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-700">Identify your organization's unique funding strengths</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-700">Discover opportunities to strengthen your funding case</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-700">Get personalized recommendations for improvement</span>
                  </li>
                </ul>
                <Link href="/fundraising-dna">
                  <Button className="bg-teal-700 hover:bg-teal-800">Explore Your Org Profile</Button>
                </Link>
              </div>
              <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-md border border-gray-200">
                {/* Org Profile Screenshot Mockup */}
                <div className="bg-white p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Organization Profile</h3>
                    <div className="flex space-x-2">
                      <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200">
                        <FileText className="h-4 w-4 text-gray-600" />
                      </button>
                      <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200">
                        <Users className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-700">Funding Readiness</h4>
                        <span className="text-teal-700 font-bold">82%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: "82%" }}></div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-700">Program Strength</h4>
                        <span className="text-teal-700 font-bold">75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-700 mb-3">Funding Focus Areas</h4>
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Education</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        Youth Development
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                        Community Services
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-3">Strengths</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 flex-shrink-0 text-green-500 mt-0.5" />
                          <span className="text-sm text-gray-600">Strong community engagement</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 flex-shrink-0 text-green-500 mt-0.5" />
                          <span className="text-sm text-gray-600">Clear impact metrics</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 flex-shrink-0 text-green-500 mt-0.5" />
                          <span className="text-sm text-gray-600">Innovative program model</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-3">Opportunities</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <ArrowRight className="mr-2 h-4 w-4 flex-shrink-0 text-orange-500 mt-0.5" />
                          <span className="text-sm text-gray-600">Expand outcome reporting</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="mr-2 h-4 w-4 flex-shrink-0 text-orange-500 mt-0.5" />
                          <span className="text-sm text-gray-600">Strengthen board diversity</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="mr-2 h-4 w-4 flex-shrink-0 text-orange-500 mt-0.5" />
                          <span className="text-sm text-gray-600">Develop sustainability plan</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Intelligent Funder Matching Feature */}
            <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                {/* Intelligent Funder Matching Screenshot Mockup */}
                <div className="bg-white p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Funder Matches</h3>
                    <div className="flex space-x-2">
                      <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200">
                        <Filter className="h-4 w-4 text-gray-600" />
                      </button>
                      <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200">
                        <Search className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-700">Match Quality</h4>
                      <div className="text-sm text-gray-500">128 matches found</div>
                    </div>
                    <div className="flex space-x-2 mb-4">
                      <button className="px-3 py-1 bg-teal-600 text-white rounded-md text-sm">All</button>
                      <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">High (42)</button>
                      <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">Medium (56)</button>
                      <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">Low (30)</button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Funder Match 1 */}
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-teal-500 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-bold text-gray-900">Johnson Family Foundation</h5>
                          <p className="text-sm text-gray-600 mt-1">Education, Youth Development</p>
                        </div>
                        <div className="bg-teal-100 text-teal-800 px-2 py-1 rounded-md text-sm font-medium">
                          95% Match
                        </div>
                      </div>
                      <div className="mt-3 flex items-center text-sm text-gray-500">
                        <Building className="h-4 w-4 mr-1" />
                        <span>San Francisco, CA</span>
                        <span className="mx-2">•</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Deadline: Aug 15, 2023</span>
                      </div>
                      <div className="mt-3 text-sm text-gray-600">
                        Strong alignment with your youth education programs and community engagement initiatives.
                      </div>
                    </div>

                    {/* Funder Match 2 */}
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-teal-500 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-bold text-gray-900">Horizon Community Fund</h5>
                          <p className="text-sm text-gray-600 mt-1">Community Services, Education</p>
                        </div>
                        <div className="bg-teal-100 text-teal-800 px-2 py-1 rounded-md text-sm font-medium">
                          92% Match
                        </div>
                      </div>
                      <div className="mt-3 flex items-center text-sm text-gray-500">
                        <Building className="h-4 w-4 mr-1" />
                        <span>Chicago, IL</span>
                        <span className="mx-2">•</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Deadline: Sep 30, 2023</span>
                      </div>
                      <div className="mt-3 text-sm text-gray-600">
                        Recently shifted focus to innovative education models like yours. New priority area in 2023.
                      </div>
                    </div>

                    {/* Funder Match 3 */}
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-teal-500 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-bold text-gray-900">Westside Foundation</h5>
                          <p className="text-sm text-gray-600 mt-1">Youth Development, Arts</p>
                        </div>
                        <div className="bg-teal-100 text-teal-800 px-2 py-1 rounded-md text-sm font-medium">
                          88% Match
                        </div>
                      </div>
                      <div className="mt-3 flex items-center text-sm text-gray-500">
                        <Building className="h-4 w-4 mr-1" />
                        <span>Portland, OR</span>
                        <span className="mx-2">•</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Deadline: Oct 15, 2023</span>
                      </div>
                      <div className="mt-3 text-sm text-gray-600">
                        Values your community-centered approach and has funded similar organizations in the past.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-block bg-orange-100 rounded-full px-3 py-1 text-sm font-semibold text-orange-700 mb-4">
                  Intelligent Matching
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Your Perfect Funders</h3>
                <p className="text-gray-600 mb-4">
                  Stop spending 15+ hours researching each funder or combing through 2,000 prospects. Our AI-powered
                  matching system analyzes thousands of data points to connect you with funders who are most likely to
                  support your mission.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-700">Receive prioritized, high-probability matches in minutes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-700">Understand why each funder is a good match for you</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-700">Save up to 60% of your fundraising research time</span>
                  </li>
                </ul>
                <Link href="/funder-matches">
                  <Button className="bg-teal-700 hover:bg-teal-800">Discover Your Matches</Button>
                </Link>
              </div>
            </div>

            {/* Funder Packages Feature */}
            <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mb-4">
                  Funder Packages
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Organize and Optimize Your Funding Strategy</h3>
                <p className="text-gray-600 mb-4">
                  Proxi helps you build strategic funder packages that group potential funders by program area,
                  timeline, or any criteria that makes sense for your organization. This approach transforms scattered
                  opportunities into a cohesive funding strategy.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-700">Create custom funder packages aligned with your programs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-700">Track application status and deadlines in one place</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-700">Collaborate with your team on funding opportunities</span>
                  </li>
                </ul>
                <Link href="/saved-funders">
                  <Button className="bg-teal-700 hover:bg-teal-800">Explore Funder Packages</Button>
                </Link>
              </div>
              <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-md border border-gray-200">
                {/* Funder Packages Screenshot Mockup */}
                <div className="bg-white p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Funder Packages</h3>
                    <button className="px-3 py-1 bg-teal-600 text-white rounded-md text-sm">+ New Package</button>
                  </div>

                  <div className="space-y-4">
                    {/* Package 1 */}
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-teal-500 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-bold text-gray-900">Youth Education Initiative</h5>
                          <p className="text-sm text-gray-600 mt-1">5 funders • $250K potential</p>
                        </div>
                        <div className="flex space-x-1">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <Star className="h-4 w-4 text-yellow-400" />
                          <Star className="h-4 w-4 text-yellow-400" />
                          <Star className="h-4 w-4 text-yellow-400" />
                          <Star className="h-4 w-4 text-gray-300" />
                        </div>
                      </div>
                      <div className="mt-3 flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Next deadline: Aug 15, 2023</span>
                        <span className="mx-2">•</span>
                        <span className="text-green-600 font-medium">2 applications in progress</span>
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <span className="px-2 py-1 bg-teal-100 text-teal-800 rounded-md text-xs">Education</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs">Youth</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-md text-xs">Q3 2023</span>
                      </div>
                    </div>

                    {/* Package 2 */}
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-teal-500 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-bold text-gray-900">Community Outreach Program</h5>
                          <p className="text-sm text-gray-600 mt-1">3 funders • $175K potential</p>
                        </div>
                        <div className="flex space-x-1">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <Star className="h-4 w-4 text-yellow-400" />
                          <Star className="h-4 w-4 text-yellow-400" />
                          <Star className="h-4 w-4 text-gray-300" />
                          <Star className="h-4 w-4 text-gray-300" />
                        </div>
                      </div>
                      <div className="mt-3 flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Next deadline: Sep 30, 2023</span>
                        <span className="mx-2">•</span>
                        <span className="text-blue-600 font-medium">1 LOI submitted</span>
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-md text-xs">Community</span>
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-md text-xs">Outreach</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-md text-xs">Q4 2023</span>
                      </div>
                    </div>

                    {/* Package 3 */}
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-teal-500 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-bold text-gray-900">Technology Innovation Fund</h5>
                          <p className="text-sm text-gray-600 mt-1">4 funders • $300K potential</p>
                        </div>
                        <div className="flex space-x-1">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <Star className="h-4 w-4 text-yellow-400" />
                          <Star className="h-4 w-4 text-yellow-400" />
                          <Star className="h-4 w-4 text-yellow-400" />
                          <Star className="h-4 w-4 text-yellow-400" />
                        </div>
                      </div>
                      <div className="mt-3 flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Next deadline: Nov 15, 2023</span>
                        <span className="mx-2">•</span>
                        <span className="text-orange-600 font-medium">Planning phase</span>
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-md text-xs">Technology</span>
                        <span className="px-2 py-1 bg-red-100 text-red-800 rounded-md text-xs">Innovation</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-md text-xs">Q1 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
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
                Get access to our demo and see how Proxi can transform your fundraising process.
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
            <p className="text-gray-600">© 2023 Proxi. All rights reserved.</p>
            <p className="mt-2 text-sm text-gray-500">This is a demo version for client feedback purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

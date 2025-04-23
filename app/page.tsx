"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { SiteHeader } from "@/app/components/site-header"
import { BetaSignup } from "@/app/components/beta-signup"
import { Button } from "@/components/ui/button"
import {
  Check,
  Users,
  Building,
  Calendar,
  FileText,
  Search,
  Filter,
  ArrowRight,
  Download,
  LinkIcon,
  Copy,
  Shield,
  Clock,
  Lightbulb,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LandingPage() {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false)
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState(false)

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "AccessCapital$") {
      setIsPasswordModalOpen(false)
      setPassword("")
      setPasswordError(false)
      window.location.href = "/dashboard"
    } else {
      setPasswordError(true)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section - Simplified */}
        <section className="bg-white py-8 sm:py-12 md:py-16 border-b border-gray-100">
          <div className="container px-4 sm:px-6">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
                <h1>
                  <span className="block text-base font-semibold text-orange-500">Kindora</span>
                  <span className="mt-1 block text-3xl sm:text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
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

        {/* Our Mission Section (from About Us) */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-teal-50 to-blue-50">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
              <div className="inline-block bg-teal-100 rounded-full px-3 py-1 text-sm font-semibold text-teal-700 mb-4">
                Our Mission
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Transforming Philanthropy</h2>
              <p className="mt-4 text-lg text-gray-600">
                Kindora creates "equitable intelligence" that serves two critical purposes:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Democratizing Access</h3>
                <p className="text-gray-600">
                  We bring program officer-level discernment to organizations that have never had it before,
                  particularly those led by and serving disadvantaged communities. Our platform levels the playing field
                  in philanthropy.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Maximizing Efficiency</h3>
                <p className="text-gray-600">
                  We automate the time-consuming research and writing processes that burden fundraising professionals.
                  This frees up human talent to focus on what matters most: building relationships and delivering
                  impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge Section (from About Us) */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
              <div className="inline-block bg-orange-100 rounded-full px-3 py-1 text-sm font-semibold text-orange-700 mb-4">
                The Challenge
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                The Philanthropic Funding Landscape is Broken
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Organizations closest to social problems often have the most effective solutions, yet they're the least
                likely to secure consistent funding.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-red-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Overwhelming and Inefficient</h3>
                <p className="text-gray-600">
                  Current grant prospecting tools generate hundreds or thousands of potential matches without meaningful
                  prioritization. A typical search can return 2,400+ funders—an impossible list to navigate effectively.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Systematically Inequitable</h3>
                <p className="text-gray-600">
                  Organizations led by people of color receive less than 4% of philanthropic dollars despite serving
                  communities with the greatest needs.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Solution: Kindora</h3>
                <p className="text-gray-600">
                  Our AI-powered platform creates equitable intelligence that democratizes access to funding while
                  maximizing efficiency for all nonprofits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features - Consolidated Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="container px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                Democratizing Access to Funding
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Kindora leverages advanced technology and human-centered design to level the playing field in the social
                sector, providing equitable intelligence once limited to insiders.
              </p>
            </div>

            {/* Org Profile Feature */}
            <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
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
                    <div className="flex flex-wrap gap-2">
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
            <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
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
                    <div className="flex flex-wrap gap-2 mb-4">
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
                      <div className="mt-3 flex flex-wrap items-center text-sm text-gray-500 gap-2">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-1" />
                          <span>San Francisco, CA</span>
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Deadline: Aug 15, 2023</span>
                        </div>
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
                      <div className="mt-3 flex flex-wrap items-center text-sm text-gray-500 gap-2">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-1" />
                          <span>Chicago, IL</span>
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Deadline: Sep 30, 2023</span>
                        </div>
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
                      <div className="mt-3 flex flex-wrap items-center text-sm text-gray-500 gap-2">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-1" />
                          <span>Portland, OR</span>
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Deadline: Oct 15, 2023</span>
                        </div>
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
              </div>
            </div>

            {/* Personalized Reachouts Feature */}
            <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mb-4">
                  Personalized Reachouts
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized Reachouts</h3>
                <p className="text-gray-600 mb-4">
                  Kindora helps you craft personalized, strategic outreach to funders that speaks directly to their
                  interests and priorities. Our AI-powered insights help you understand exactly what each funder is
                  looking for, so you can approach them with confidence.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-700">Understand each funder's unique priorities and interests</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-700">Get customized email templates and meeting guides</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-700">Increase your success rate with targeted outreach</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-md border border-gray-200">
                {/* Funder Package Modal View Screenshot */}
                <div className="bg-white p-6">
                  <div className="border-b border-gray-200 pb-4 mb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Johnson Family Foundation Funder Package</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Generated on Mar 28, 2023 • Last updated Apr 30, 2023
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200">
                          <Download className="h-4 w-4 text-gray-600" />
                        </button>
                        <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200">
                          <LinkIcon className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-bold text-teal-800">VERDICT: GOOD ALIGNMENT</h3>
                        <p className="text-sm text-gray-700 mt-1">
                          The Johnson Family Foundation would view our organization as well-aligned with their Arts &
                          Culture program, particularly their focus on arts education and community engagement. Our work
                          connecting diverse communities with cultural experiences matches their priorities.
                        </p>
                      </div>
                      <button className="flex-shrink-0 flex items-center text-xs bg-white text-gray-600 px-2 py-1 rounded border border-gray-200 mt-1 ml-2">
                        <Copy className="h-3 w-3 mr-1" />
                        Copy
                      </button>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-gray-900">KEY STATS</h3>
                      <button className="flex items-center text-xs bg-white text-gray-600 px-2 py-1 rounded border border-gray-200">
                        <Copy className="h-3 w-3 mr-1" />
                        Copy
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-y-3">
                      <div className="flex items-start">
                        <div className="h-1.5 w-1.5 rounded-full bg-teal-700 mt-2 mr-2"></div>
                        <div className="text-sm">
                          <span className="font-medium">Annual Giving:</span> $900K (2023)
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="h-1.5 w-1.5 rounded-full bg-teal-700 mt-2 mr-2"></div>
                        <div className="text-sm">
                          <span className="font-medium">Typical Grant Range:</span> $15K-$40K
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="h-1.5 w-1.5 rounded-full bg-teal-700 mt-2 mr-2"></div>
                        <div className="text-sm">
                          <span className="font-medium">Process:</span> Quarterly deadlines
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="h-1.5 w-1.5 rounded-full bg-teal-700 mt-2 mr-2"></div>
                        <div className="text-sm">
                          <span className="font-medium">Recommended Ask:</span> $45K over 2 years
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-gray-900">STRONGEST ALIGNMENT POINTS</h3>
                      <button className="flex items-center text-xs bg-white text-gray-600 px-2 py-1 rounded border border-gray-200">
                        <Copy className="h-3 w-3 mr-1" />
                        Copy
                      </button>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2 mr-2"></div>
                        <div className="text-sm">
                          <span className="font-medium">Arts Education Focus:</span> Their commitment to arts education
                          programs that reach diverse audiences aligns with our mission
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2 mr-2"></div>
                        <div className="text-sm">
                          <span className="font-medium">Community Engagement:</span> They value programs that build
                          community connections through arts and cultural activities
                        </div>
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
          <div className="container px-4 sm:px-6">
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
        <div className="container px-4 sm:px-6">
          <div className="text-center">
            <p className="text-gray-600">© 2023 Kindora. All rights reserved.</p>
            <p className="mt-2 text-sm text-gray-500">This is a demo version for client feedback purposes.</p>
          </div>
        </div>
      </footer>

      {/* Password Modal */}
      <Dialog open={isPasswordModalOpen} onOpenChange={setIsPasswordModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Enter Password</DialogTitle>
            <DialogDescription>
              This feature is password protected. Please enter the password to continue.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handlePasswordSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={passwordError ? "border-red-500" : ""}
                />
                {passwordError && <p className="text-sm text-red-500">Incorrect password. Please try again.</p>}
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsPasswordModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Continue</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

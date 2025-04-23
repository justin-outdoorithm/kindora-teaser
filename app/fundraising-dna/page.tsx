import { DashboardLayout } from "@/app/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Download,
  Info,
  Building,
  Target,
  DollarSign,
  Award,
  BarChart3,
  TrendingUp,
  CheckCircle2,
} from "lucide-react"

export default function FundraisingDNAPage() {
  return (
    <DashboardLayout activeTab="Home">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Organizational DNA Profile</h1>
          <div className="flex space-x-3">
            <Button variant="outline" className="border-teal-700 text-teal-700 hover:bg-teal-50">
              <Download className="h-4 w-4 mr-2" />
              Export Profile
            </Button>
            <Button className="bg-teal-700 hover:bg-teal-800">Update Profile</Button>
          </div>
        </div>

        {/* DNA Score Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center">
                <h2 className="text-xl font-bold text-gray-900">Your Organizational DNA Score</h2>
                <button className="ml-2 text-gray-400 hover:text-gray-600">
                  <Info className="h-5 w-5" />
                </button>
              </div>
              <p className="text-gray-600 mt-1">Based on your organization profile and funding history</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center">
              <div className="text-5xl font-bold text-teal-700">85</div>
              <div className="ml-4 text-sm text-gray-600">
                <div>Last updated: April 10, 2025</div>
                <div className="text-teal-700 font-medium">Above average for your sector</div>
              </div>
            </div>
          </div>
        </div>

        {/* Organization Identity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <Building className="h-5 w-5 text-teal-700 mr-2" />
              <h3 className="text-lg font-bold text-gray-900">Organization Identity</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600">Organization Name</div>
                <div className="font-medium">Future Impact Foundation</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Organization Type</div>
                <div className="font-medium">501(c)(3) Public Charity</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Primary NTEE Code</div>
                <div className="font-medium">B94 - Parent & Teacher Groups</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Secondary NTEE Codes</div>
                <div className="font-medium">A23 - Cultural & Ethnic Awareness</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Years of Operation</div>
                <div className="font-medium">5 years</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Annual Budget</div>
                <div className="font-medium">$250,000 - $500,000</div>
              </div>
            </div>
            <div className="mt-6">
              <Button variant="outline" className="w-full border-teal-700 text-teal-700 hover:bg-teal-50">
                Edit Organization Profile
              </Button>
            </div>
          </div>

          {/* Featured Program */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <Award className="h-5 w-5 text-teal-700 mr-2" />
              <h3 className="text-lg font-bold text-gray-900">Featured Program</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600">Program Name</div>
                <div className="font-medium">Youth Education Initiative</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Program Focus</div>
                <div className="font-medium">Education, Youth Development, Cultural Awareness</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Target Population</div>
                <div className="font-medium">Underserved youth ages 8-18 in urban communities</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Key Components</div>
                <div className="font-medium">
                  After-school tutoring, cultural enrichment activities, mentorship program
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Measurable Outcomes</div>
                <div className="font-medium">
                  Improved academic performance, increased cultural awareness, enhanced leadership skills
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button variant="outline" className="w-full border-teal-700 text-teal-700 hover:bg-teal-50">
                Edit Featured Program
              </Button>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex items-center mb-4">
            <Target className="h-5 w-5 text-teal-700 mr-2" />
            <h3 className="text-lg font-bold text-gray-900">Mission & Vision</h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-600 font-medium">Mission Statement</div>
              <div className="p-3 bg-gray-50 rounded-md mt-1">
                Future Impact Foundation empowers underserved youth through educational programs that build academic
                skills, cultural awareness, and leadership abilities, creating pathways to success for the next
                generation.
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600 font-medium">Vision Statement</div>
              <div className="p-3 bg-gray-50 rounded-md mt-1">
                We envision communities where all youth, regardless of socioeconomic background, have access to
                high-quality educational opportunities that prepare them for success in school, career, and life.
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600 font-medium">Tagline</div>
              <div className="p-3 bg-gray-50 rounded-md mt-1">"Educate. Empower. Transform."</div>
            </div>
          </div>
          <div className="mt-6">
            <Button variant="outline" className="border-teal-700 text-teal-700 hover:bg-teal-50">
              Edit Mission & Vision
            </Button>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex items-center mb-4">
            <CheckCircle2 className="h-5 w-5 text-teal-700 mr-2" />
            <h3 className="text-lg font-bold text-gray-900">Core Values</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-md">
              <div className="font-medium text-teal-700">Opportunity & Inclusion</div>
              <p className="text-sm text-gray-600 mt-1">
                A fundamental belief that talent is universal, but opportunities are not. All programs are free for
                participants, ensuring no child is priced out of pursuing their potential.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <div className="font-medium text-teal-700">Excellence & Discipline</div>
              <p className="text-sm text-gray-600 mt-1">
                Emphasis on educational excellence and personal discipline both in and out of the classroom. Success
                comes from consistent effort, sacrifice, and dedication.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <div className="font-medium text-teal-700">Community & Service</div>
              <p className="text-sm text-gray-600 mt-1">
                Commitment to giving back and creating community impact. Many staff and volunteers come from the same
                communities they serve, fostering trust and relatability.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <div className="font-medium text-teal-700">Leadership & Character</div>
              <p className="text-sm text-gray-600 mt-1">
                Using education as a vehicle to build character and leadership skills. Programs incorporate leadership
                development, communication skills, and personal accountability.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <Button variant="outline" className="border-teal-700 text-teal-700 hover:bg-teal-50">
              Edit Core Values
            </Button>
          </div>
        </div>

        {/* Funding History */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex items-center mb-4">
            <DollarSign className="h-5 w-5 text-teal-700 mr-2" />
            <h3 className="text-lg font-bold text-gray-900">Funding History</h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-600">Primary Funding Sources</div>
              <div className="font-medium">
                Foundation Grants (65%), Individual Donors (25%), Corporate Sponsorships (10%)
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Largest Grant Received</div>
              <div className="font-medium">$75,000 (Education Foundation of America)</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Average Grant Size</div>
              <div className="font-medium">$32,500</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Grant Success Rate</div>
              <div className="font-medium">42% (Industry average: 35%)</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Multi-Year Funding</div>
              <div className="font-medium">2 active multi-year grants</div>
            </div>
          </div>
          <div className="mt-6">
            <Button variant="outline" className="w-full border-teal-700 text-teal-700 hover:bg-teal-50">
              Update Funding History
            </Button>
          </div>
        </div>

        {/* DNA Score Breakdown */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex items-center mb-4">
            <BarChart3 className="h-5 w-5 text-teal-700 mr-2" />
            <h3 className="text-lg font-bold text-gray-900">DNA Score Breakdown</h3>
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <div className="font-medium">Mission Clarity</div>
                <div className="font-medium">92/100</div>
              </div>
              <div className="h-3 w-full rounded-full bg-gray-200">
                <div className="h-3 rounded-full bg-teal-700" style={{ width: "92%" }}></div>
              </div>
              <div className="mt-1 text-sm text-gray-600">
                Your mission statement is clear, compelling, and effectively communicates your organization's purpose.
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <div className="font-medium">Program Impact</div>
                <div className="font-medium">88/100</div>
              </div>
              <div className="h-3 w-full rounded-full bg-gray-200">
                <div className="h-3 rounded-full bg-teal-700" style={{ width: "88%" }}></div>
              </div>
              <div className="mt-1 text-sm text-gray-600">
                Your programs demonstrate strong outcomes and measurable impact in your community.
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <div className="font-medium">Financial Health</div>
                <div className="font-medium">78/100</div>
              </div>
              <div className="h-3 w-full rounded-full bg-gray-200">
                <div className="h-3 rounded-full bg-teal-700" style={{ width: "78%" }}></div>
              </div>
              <div className="mt-1 text-sm text-gray-600">
                Your organization shows good financial stability with room for improvement in diversifying revenue
                sources.
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <div className="font-medium">Board Engagement</div>
                <div className="font-medium">85/100</div>
              </div>
              <div className="h-3 w-full rounded-full bg-gray-200">
                <div className="h-3 rounded-full bg-teal-700" style={{ width: "85%" }}></div>
              </div>
              <div className="mt-1 text-sm text-gray-600">
                Your board is actively engaged and contributes to organizational governance and fundraising.
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <div className="font-medium">Grant Readiness</div>
                <div className="font-medium">82/100</div>
              </div>
              <div className="h-3 w-full rounded-full bg-gray-200">
                <div className="h-3 rounded-full bg-teal-700" style={{ width: "82%" }}></div>
              </div>
              <div className="mt-1 text-sm text-gray-600">
                Your organization has the necessary systems and documentation in place to apply for and manage grants
                effectively.
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Priorities */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-5 w-5 text-teal-700 mr-2" />
            <h3 className="text-lg font-bold text-gray-900">Strategic Priorities</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-md">
              <div className="font-medium">Program Expansion</div>
              <p className="text-sm text-gray-600 mt-1">
                Expand youth education programs to three additional communities within the next 18 months, reaching 250
                more students annually.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <div className="font-medium">Funding Diversification</div>
              <p className="text-sm text-gray-600 mt-1">
                Develop a corporate partnership program to increase corporate funding from 10% to 25% of total revenue
                within two years.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <div className="font-medium">Impact Measurement</div>
              <p className="text-sm text-gray-600 mt-1">
                Implement comprehensive impact measurement system to better track and communicate program outcomes to
                stakeholders.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <div className="font-medium">Board Development</div>
              <p className="text-sm text-gray-600 mt-1">
                Recruit three new board members with expertise in education, finance, and marketing to strengthen
                governance and strategic guidance.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <Button variant="outline" className="border-teal-700 text-teal-700 hover:bg-teal-50">
              Edit Strategic Priorities
            </Button>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Recommendations to Improve Your Score</h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-md">
              <div className="flex justify-between">
                <div className="font-medium">Diversify Funding Sources</div>
                <Button variant="link" className="text-teal-700 p-0 h-auto">
                  Take Action <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Consider expanding your corporate partnerships to reduce reliance on foundation grants. This will
                strengthen your financial stability score.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-md">
              <div className="flex justify-between">
                <div className="font-medium">Enhance Impact Measurement</div>
                <Button variant="link" className="text-teal-700 p-0 h-auto">
                  Take Action <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Implement more robust outcome tracking for your educational programs to better demonstrate your impact
                to potential funders.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-md">
              <div className="flex justify-between">
                <div className="font-medium">Build Operating Reserve</div>
                <Button variant="link" className="text-teal-700 p-0 h-auto">
                  Take Action <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Work toward establishing a 3-6 month operating reserve to improve your financial health score and appeal
                to sustainability-focused funders.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-md">
              <div className="flex justify-between">
                <div className="font-medium">Update Program Descriptions</div>
                <Button variant="link" className="text-teal-700 p-0 h-auto">
                  Take Action <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Refresh your program descriptions with current statistics and testimonials to strengthen your case for
                support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

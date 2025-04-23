import Link from "next/link"
import { DashboardLayout } from "@/app/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Building, Calendar, Download, ExternalLink, Mail, Phone } from "lucide-react"

// This would normally come from a database or API
const funders = [
  {
    id: "1",
    name: "Education Foundation of America",
    focus: "Education",
    score: 92,
    amount: "$75,000",
    description:
      "The Education Foundation of America supports transformative educational initiatives that promote equity and excellence in learning. With a focus on innovative approaches to education, the foundation seeks to fund programs that create lasting impact in underserved communities.",
    website: "https://www.educationfoundation.org",
    email: "grants@educationfoundation.org",
    phone: "(555) 123-4567",
    address: "123 Education Way, New York, NY 10001",
    applicationDeadline: "May 15, 2025",
    fundingAreas: ["K-12 Education", "Higher Education Access", "Teacher Development", "Educational Technology"],
    grantRange: "$25,000 - $100,000",
    acceptsUnsolicited: true,
    applicationProcess: "Online application with letter of inquiry followed by full proposal if invited",
    recentGrantees: ["Urban Education Initiative", "College Access Network", "Teacher Excellence Program"],
    notes:
      "Prefers projects with clear metrics for success and sustainability plans. First-time applicants should start with a smaller grant request.",
  },
  {
    id: "2",
    name: "Kresge Foundation",
    focus: "Arts & Culture",
    score: 87,
    amount: "$45,000",
    description:
      "The Kresge Foundation invests in arts and culture to foster equitable community development and creative placemaking. The foundation supports organizations that integrate arts and culture into community revitalization efforts.",
    website: "https://www.kresge.org",
    email: "arts@kresge.org",
    phone: "(555) 987-6543",
    address: "3215 Cultural Avenue, Detroit, MI 48226",
    applicationDeadline: "June 1, 2025",
    fundingAreas: ["Creative Placemaking", "Arts Education", "Cultural Institutions", "Community Arts"],
    grantRange: "$15,000 - $75,000",
    acceptsUnsolicited: false,
    applicationProcess: "By invitation only. Initial contact through program officer recommended.",
    recentGrantees: ["City Arts Initiative", "Metropolitan Museum", "Youth Arts Alliance"],
    notes:
      "Strongly values partnerships and collaborative approaches. Prefers projects with community engagement components.",
  },
  {
    id: "3",
    name: "Robert Wood Johnson Foundation",
    focus: "Health",
    score: 83,
    amount: "$60,000",
    description:
      "The Robert Wood Johnson Foundation is committed to improving health and healthcare for all Americans. The foundation focuses on building a culture of health where everyone has the opportunity to live a healthier life.",
    website: "https://www.rwjf.org",
    email: "proposals@rwjf.org",
    phone: "(555) 456-7890",
    address: "50 Health Plaza, Princeton, NJ 08540",
    applicationDeadline: "June 15, 2025",
    fundingAreas: ["Public Health", "Healthcare Access", "Health Equity", "Social Determinants of Health"],
    grantRange: "$25,000 - $200,000",
    acceptsUnsolicited: true,
    applicationProcess: "Online application with initial concept paper followed by invited full proposal",
    recentGrantees: ["Community Health Coalition", "Rural Healthcare Access Project", "Health Policy Institute"],
    notes:
      "Emphasizes evidence-based approaches and systems change. Interested in innovative solutions with potential for broad impact.",
  },
]

export default function FunderDetailPage({ params }: { params: { id: string } }) {
  const funder = funders.find((f) => f.id === params.id) || funders[0]

  return (
    <DashboardLayout activeTab="Matches">
      <div className="p-4 md:p-6">
        {/* Back button */}
        <div className="mb-6">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 -ml-2">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Dashboard
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{funder.name}</h1>
            <p className="text-gray-600">Focus: {funder.focus}</p>
          </div>
          <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
            <Button variant="outline" className="border-teal-700 text-teal-700 hover:bg-teal-50">
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </Button>
            <Button className="bg-teal-700 hover:bg-teal-800">
              <Download className="h-4 w-4 mr-2" />
              Save to Package
            </Button>
          </div>
        </div>

        {/* Match Score */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">Match Score</div>
              <div className="text-3xl font-bold text-teal-700">{funder.score}%</div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-sm text-gray-600 mb-1">Average Grant Size</div>
              <div className="text-3xl font-bold text-gray-900">{funder.amount}</div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-sm text-gray-600 mb-1">Application Deadline</div>
              <div className="text-xl font-medium text-gray-900 flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-teal-700" />
                {funder.applicationDeadline}
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-3">About</h2>
              <p className="text-gray-700 mb-4">{funder.description}</p>

              <h3 className="text-md font-semibold text-gray-900 mb-2">Funding Areas</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {funder.fundingAreas.map((area, index) => (
                  <span key={index} className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded-full">
                    {area}
                  </span>
                ))}
              </div>

              <h3 className="text-md font-semibold text-gray-900 mb-2">Grant Range</h3>
              <p className="text-gray-700 mb-4">{funder.grantRange}</p>

              <h3 className="text-md font-semibold text-gray-900 mb-2">Application Process</h3>
              <p className="text-gray-700 mb-4">{funder.applicationProcess}</p>

              <h3 className="text-md font-semibold text-gray-900 mb-2">Recent Grantees</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                {funder.recentGrantees.map((grantee, index) => (
                  <li key={index}>{grantee}</li>
                ))}
              </ul>

              <h3 className="text-md font-semibold text-gray-900 mb-2">Notes</h3>
              <p className="text-gray-700">{funder.notes}</p>
            </div>

            {/* Why You Match */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Why You Match</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-teal-50 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Your organization's focus areas align with {funder.name}'s funding priorities
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-50 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700">Your project scale matches their typical grant range</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-50 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700">Your geographic focus is within their funding region</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Building className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium">Address</div>
                    <div className="text-gray-600">{funder.address}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium">Email</div>
                    <a href={`mailto:${funder.email}`} className="text-teal-700 hover:underline">
                      {funder.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium">Phone</div>
                    <div className="text-gray-600">{funder.phone}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <ExternalLink className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium">Website</div>
                    <a
                      href={funder.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-700 hover:underline"
                    >
                      {funder.website.replace("https://", "")}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Actions</h2>
              <div className="space-y-3">
                <Button className="w-full bg-teal-700 hover:bg-teal-800">
                  <Download className="h-4 w-4 mr-2" />
                  Save to Package
                </Button>
                <Button variant="outline" className="w-full border-teal-700 text-teal-700 hover:bg-teal-50">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Funder
                </Button>
                <Link href="/ai-writing-assistant">
                  <Button variant="outline" className="w-full border-teal-700 text-teal-700 hover:bg-teal-50">
                    Create Grant Application
                  </Button>
                </Link>
              </div>
            </div>

            {/* Similar Funders */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Similar Funders</h2>
              <div className="space-y-3">
                {funders
                  .filter((f) => f.id !== funder.id)
                  .map((similarFunder, index) => (
                    <Link href={`/dashboard/funder/${similarFunder.id}`} key={index}>
                      <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md transition-colors">
                        <div>
                          <div className="font-medium">{similarFunder.name}</div>
                          <div className="text-xs text-gray-600">Focus: {similarFunder.focus}</div>
                        </div>
                        <div className="text-xs px-2 py-1 bg-teal-100 text-teal-700 rounded-full">
                          {similarFunder.score}%
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

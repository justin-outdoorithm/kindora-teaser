import Image from "next/image"
import { SiteHeader } from "@/app/components/site-header"
import { BetaSignup } from "@/app/components/beta-signup"
import { ArrowRight, Brain, Check, Clock, FileText, Lightbulb, Search, Shield, Target, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-50 to-blue-50 py-16 border-b border-gray-100">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900">
                Democratizing Philanthropic Access Through AI
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                We're transforming how funding flows in the social impact sector by creating equitable intelligence that
                levels the playing field for all nonprofits.
              </p>
              <div className="mt-8">
                <BetaSignup buttonText="Join Our Mission" />
              </div>
            </div>
          </div>
        </section>

        {/* The Mission */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-teal-100 rounded-full px-3 py-1 text-sm font-semibold text-teal-700 mb-4">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Transforming Philanthropy</h2>
                <p className="text-gray-600 mb-4">
                  After directing over half a billion dollars at Google.org and serving as Program Committee Chair at
                  the San Francisco Foundation, I've witnessed a fundamental truth: organizations closest to social
                  problems often have the most effective solutions, yet they're the least likely to secure consistent
                  funding.
                </p>
                <p className="text-gray-600 mb-4">
                  This disparity exists because philanthropy operates through unwritten rules, implicit relationships,
                  and insider knowledge that systematically advantages established players. Meanwhile, even
                  well-resourced nonprofits waste countless hours and resources navigating an inefficient
                  system—development professionals spend up to 60% of their time on research tasks that AI could handle
                  in minutes.
                </p>
                <p className="text-gray-700 font-medium">
                  Proxi creates "equitable intelligence" that serves two critical purposes:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <div className="bg-teal-100 rounded-full p-1 mr-3 mt-1">
                      <Check className="h-4 w-4 text-teal-700" />
                    </div>
                    <span className="text-gray-600">
                      <span className="font-medium text-gray-900">Democratizing access</span> by bringing program
                      officer-level discernment to organizations that have never had it before, particularly those led
                      by and serving disadvantaged communities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal-100 rounded-full p-1 mr-3 mt-1">
                      <Check className="h-4 w-4 text-teal-700" />
                    </div>
                    <span className="text-gray-600">
                      <span className="font-medium text-gray-900">Maximizing efficiency</span> by automating the
                      time-consuming research and writing processes that burden fundraising professionals across the
                      sector
                    </span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-600">
                  By addressing both equity and efficiency challenges, Proxi enables a fundamental shift in how social
                  impact is funded—creating a more level playing field while freeing human talent to focus on what
                  matters most: building relationships and delivering impact.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Proxi mission visualization"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-block bg-orange-100 rounded-full px-3 py-1 text-sm font-semibold text-orange-700 mb-4">
                The Challenge
              </div>
              <h2 className="text-3xl font-bold text-gray-900">The Philanthropic Funding Landscape is Broken</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-red-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Overwhelming and Inefficient</h3>
                <p className="text-gray-600">
                  Current grant prospecting tools generate hundreds or thousands of potential matches without meaningful
                  prioritization. My first search returned 2,400 funders—an impossible list to navigate effectively.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Systematically Inequitable</h3>
                <p className="text-gray-600">
                  Organizations led by people of color receive less than 4% of philanthropic dollars despite serving
                  communities with the greatest needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-red-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lacking Intelligence</h3>
                <p className="text-gray-600">
                  Existing platforms provide data without context or strategy, forcing nonprofits to spend precious time
                  deciphering funder priorities and preferences.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-red-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Resource-Intensive Process</h3>
                <p className="text-gray-600">
                  Fundraising professionals at established organizations spend an average of 15-20 hours researching
                  each potential funder and crafting customized materials—time that could be better spent building
                  relationships.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-red-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Skilled Talent Wasted</h3>
                <p className="text-gray-600">
                  Development staff spend up to 60% of their time in spreadsheets and 990 tax forms trying to assess
                  fit, rather than leveraging their interpersonal skills for donor cultivation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Solution: Proxi</h3>
                <p className="text-gray-600">
                  Our AI-powered platform creates equitable intelligence that democratizes access to funding while
                  maximizing efficiency for all nonprofits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Technology */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mb-4">
                The Technology
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Equitable Intelligence</h2>
              <p className="mt-4 text-lg text-gray-600">
                Proxi simulates the discernment of experienced grant officers through three core capabilities:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Intelligence Gathering</h3>
                <p className="text-gray-600 mb-4">
                  Our AI analyzes multiple data streams to create dynamic portraits of funders' actual interests:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-600">Form 990 tax returns (including PDF attachments)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-600">Annual reports and strategic documents</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-600">Website content analysis for real-time insights</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-600">News coverage and leadership statements</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Personification</h3>
                <p className="text-gray-600 mb-4">
                  Rather than static data points, we create dynamic AI funder "personas" that adopt the perspective of
                  each funder's Program Officer and assess:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-600">
                      Value Alignment: Finding philosophical connections between missions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-600">
                      Programmatic Fit: Matching approaches with historical giving patterns
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-600">
                      Strategic Priority Mapping: Uncovering intersections with emerging focus areas
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Actionable Intelligence</h3>
                <p className="text-gray-600 mb-4">Proxi transforms insights into immediate action, generating:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-600">Customized outreach emails that consistently secure meetings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-600">Letters of Intent that speak directly to funder interests</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-600">
                      Strategic briefs that position organizations for funding success
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-600">Meeting guides that frame conversations for maximum impact</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Early Results */}
        <section className="py-16 bg-teal-700 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-block bg-teal-600 rounded-full px-3 py-1 text-sm font-semibold text-white mb-4">
                Success Stories
              </div>
              <h2 className="text-3xl font-bold mb-6">Early Results</h2>
              <p className="text-xl text-teal-100">
                Proxi is already changing outcomes. For my nonprofit startup, Outdoorithm Collective, the platform
                filtered 2,400 potential funders to just 128 strong matches. Within two weeks, we secured meetings with
                five foundations we never would have found. Three conversations have advanced to the proposal
                stage—worlds apart from previous attempts.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-teal-800 bg-opacity-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">For Grassroots Organizations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-teal-300 mt-0.5" />
                    <span className="text-teal-100">
                      From being systematically excluded to gaining equal access to funding opportunities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-teal-300 mt-0.5" />
                    <span className="text-teal-100">
                      From lacking insider knowledge to leveraging AI-driven insights into funder preferences
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-teal-300 mt-0.5" />
                    <span className="text-teal-100">
                      From missing opportunities to discovering perfectly aligned funders they never knew existed
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-teal-800 bg-opacity-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">For Established Nonprofits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-teal-300 mt-0.5" />
                    <span className="text-teal-100">
                      From spending 15-20 hours researching each potential funder to receiving instant, AI-validated
                      matches
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-teal-300 mt-0.5" />
                    <span className="text-teal-100">
                      From development staff buried in spreadsheets to fundraisers focused on relationship-building
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-teal-300 mt-0.5" />
                    <span className="text-teal-100">
                      From generic proposals to perfectly tailored materials that speak each funder's language
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-teal-800 bg-opacity-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">For Fundraising Professionals</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-teal-300 mt-0.5" />
                    <span className="text-teal-100">
                      From tedious manual review of 990s and annual reports to automated intelligence gathering
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-teal-300 mt-0.5" />
                    <span className="text-teal-100">
                      From spending 60% of time on research and writing to investing that time in high-value donor
                      meetings
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-teal-300 mt-0.5" />
                    <span className="text-teal-100">
                      From low conversion rates to significantly higher success with precisely targeted outreach
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Business Opportunity */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-purple-100 rounded-full px-3 py-1 text-sm font-semibold text-purple-700 mb-4">
                  The Opportunity
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Business Opportunity</h2>
                <p className="text-gray-600 mb-4">
                  Our initial focus is the philanthropic sector, which distributes over $800 billion annually to 1.5
                  million nonprofits in the U.S. alone. But Proxi's intelligent matching and strategic guidance
                  capabilities extend far beyond:
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Initial Market</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-purple-600 mt-0.5" />
                    <span className="text-gray-600">Nonprofits seeking grant funding</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-purple-600 mt-0.5" />
                    <span className="text-gray-600">Nonprofit fundraising consultants and firms</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-purple-600 mt-0.5" />
                    <span className="text-gray-600">Philanthropy advisors guiding foundation strategy</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Expansion Opportunities</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-purple-600 mt-0.5" />
                    <span className="text-gray-600">
                      Community Investment Capital: Connecting social enterprises with community development financial
                      institutions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-purple-600 mt-0.5" />
                    <span className="text-gray-600">
                      Impact Investing: Matching impact-focused ventures with aligned investors
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-purple-600 mt-0.5" />
                    <span className="text-gray-600">
                      ESG-Aligned Corporate Philanthropy: Helping corporations identify partners that advance their
                      sustainability goals
                    </span>
                  </li>
                </ul>

                <p className="mt-6 text-gray-600">
                  This expansion addresses an additional $80 billion annual market while maintaining our core mission of
                  democratizing access to capital.
                </p>
              </div>

              <div>
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Revenue Model</h3>
                  <p className="text-gray-600 mb-6">
                    We're implementing a tiered pricing approach that ensures accessibility while driving strong
                    business growth:
                  </p>

                  <div className="space-y-6">
                    <div className="border-l-4 border-teal-500 pl-4 py-2">
                      <h4 className="font-bold text-gray-900">Community Builder</h4>
                      <p className="text-gray-600">$25–$50/month (organizations under $250K budget)</p>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 py-2">
                      <h4 className="font-bold text-gray-900">Growth Tier</h4>
                      <p className="text-gray-600">$75–$150/month (organizations with $250K–$2M budgets)</p>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4 py-2">
                      <h4 className="font-bold text-gray-900">Impact Tier</h4>
                      <p className="text-gray-600">$200–$300/month (larger organizations and consultancies)</p>
                    </div>
                  </div>

                  <p className="mt-6 text-gray-600">
                    This model allows us to offer discounted rates to grassroots organizations while maintaining premium
                    pricing for larger entities and consultancies—ensuring both mission alignment and robust revenue
                    potential of $15–30 million at scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-block bg-indigo-100 rounded-full px-3 py-1 text-sm font-semibold text-indigo-700 mb-4">
                Looking Forward
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Roadmap</h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"></div>

                {/* Phase 1 */}
                <div className="relative mb-16">
                  <div className="flex items-center justify-center">
                    <div className="z-10 flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-full">
                      <span className="text-white font-bold">1</span>
                    </div>
                  </div>
                  <div className="mt-4 bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 1: Proof of Concept (Current)</h3>
                    <p className="text-gray-600">
                      Working with 10 diverse community organizations to document time saved, meetings secured, and
                      grants won.
                    </p>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="relative mb-16">
                  <div className="flex items-center justify-center">
                    <div className="z-10 flex items-center justify-center w-12 h-12 bg-indigo-500 rounded-full">
                      <span className="text-white font-bold">2</span>
                    </div>
                  </div>
                  <div className="mt-4 bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 2: Community Expansion (3–9 Months)</h3>
                    <p className="text-gray-600">
                      Scaling to 50+ organizations across multiple sectors and refining based on user feedback.
                    </p>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <div className="z-10 flex items-center justify-center w-12 h-12 bg-indigo-400 rounded-full">
                      <span className="text-white font-bold">3</span>
                    </div>
                  </div>
                  <div className="mt-4 bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Phase 3: Ecosystem Integration (9–18 Months)
                    </h3>
                    <p className="text-gray-600">
                      Partnering with nonprofit infrastructure groups and offering an API for integration with existing
                      nonprofit tech.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Invitation */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">The Invitation</h2>
              <p className="text-xl text-teal-100">We're seeking thought partners who can help shape Proxi's future:</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Join Our Mission</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-300 mt-0.5" />
                    <span className="text-white">
                      Philanthropy Insiders: Foundation officers and trustees who understand the nuances of grantmaking
                      decisions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-300 mt-0.5" />
                    <span className="text-white">
                      Community Capital Experts: Leaders who can help us expand into impact investing and community
                      development finance
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Become a Partner</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-300 mt-0.5" />
                    <span className="text-white">
                      Nonprofit Leaders: Organizations willing to test our platform and provide feedback on real-world
                      functionality
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-300 mt-0.5" />
                    <span className="text-white">
                      Technology Advisors: Specialists in AI/ML who can help us refine our matching algorithms and
                      intelligence gathering
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center mt-12">
              <p className="text-lg text-teal-100 mb-8">
                When we level the philanthropic playing field through equitable intelligence, everyone wins: community
                organizations secure sustainable funding, foundations find partners whose work genuinely aligns with
                their missions, and communities receive more effective, culturally responsive solutions.
              </p>
              <BetaSignup buttonText="Join Our Mission" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container">
          <div className="text-center">
            <p>© 2023 Proxi. All rights reserved.</p>
            <p className="mt-2 text-sm text-gray-400">Democratizing access to philanthropic funding through AI.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

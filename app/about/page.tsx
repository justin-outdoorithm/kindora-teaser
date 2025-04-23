import Image from "next/image"
import { SiteHeader } from "@/app/components/site-header"
import { BetaSignup } from "@/app/components/beta-signup"
import { ArrowRight, Check, Heart, Target, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-50 to-blue-50 py-16 border-b border-gray-100">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900">Our Story</h1>
              <p className="mt-6 text-xl text-gray-600">
                How a passion for social impact and technology led to a mission to transform philanthropy
              </p>
              <div className="mt-8">
                <BetaSignup buttonText="Join Our Mission" />
              </div>
            </div>
          </div>
        </section>

        {/* The Origin Story */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-teal-100 rounded-full px-3 py-1 text-sm font-semibold text-teal-700 mb-4">
                  Our Journey
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Transforming Philanthropy</h2>
                <p className="text-gray-600 mb-4">
                  Kindora was born from a simple observation that became impossible to ignore: the organizations closest
                  to social problems often have the most effective solutions, yet they're the least likely to secure
                  consistent funding.
                </p>
                <p className="text-gray-600 mb-4">
                  We witnessed this firsthand. After directing over half a billion dollars in philanthropy and serving
                  on foundation boards, we saw how funding decisions were made behind closed doors. The system clearly
                  favored those with connections and resources to navigate the complex, unwritten rules of philanthropy.
                </p>
                <p className="text-gray-600 mb-4">
                  Meanwhile, brilliant community-led organizations were struggling to get noticed, despite their
                  incredible impact. Something had to change.
                </p>
                <p className="text-gray-600">
                  That's when the idea for Kindora sparked – what if we could use AI to democratize access to the
                  insider knowledge that makes fundraising successful? What if we could level the playing field while
                  making the entire process more efficient for everyone?
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Transforming philanthropy through technology"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-block bg-purple-100 rounded-full px-3 py-1 text-sm font-semibold text-purple-700 mb-4">
                Our Values
              </div>
              <h2 className="text-3xl font-bold text-gray-900">What Drives Us</h2>
              <p className="mt-4 text-lg text-gray-600">These core principles guide everything we do at Kindora</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Equity</h3>
                <p className="text-gray-600 mb-4">
                  We believe that funding should flow to the most effective solutions, regardless of who proposes them.
                  Our platform is designed to level the playing field and create more equitable access to philanthropic
                  resources.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-600">Prioritizing diverse perspectives and approaches</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-600">Removing barriers to access for underrepresented groups</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-orange-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Impact</h3>
                <p className="text-gray-600 mb-4">
                  We're obsessed with creating real-world impact. Every feature we build is designed to help nonprofits
                  secure more funding more efficiently, so they can focus on their mission rather than fundraising.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-600">Measuring success by nonprofit outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-600">Continuously improving based on real-world results</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-red-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
                <p className="text-gray-600 mb-4">
                  We believe in the power of community-led solutions. Our platform is built to amplify the voices and
                  work of those closest to the challenges they're addressing.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-600">Centering community expertise and lived experience</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-700 mt-0.5" />
                    <span className="text-gray-600">Building tools that strengthen community connections</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="py-16 bg-teal-700 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-block bg-teal-600 rounded-full px-3 py-1 text-sm font-semibold text-white mb-4">
                Our Vision
              </div>
              <h2 className="text-3xl font-bold mb-6">A More Equitable Future</h2>
              <p className="text-xl text-teal-100">
                We envision a world where funding flows to the most effective solutions, regardless of who proposes them
                or their access to networks of privilege. Where nonprofits spend less time fundraising and more time
                creating impact. Where philanthropy becomes a true catalyst for community-led change.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-teal-800 bg-opacity-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">For Grassroots Organizations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-teal-300 mt-0.5" />
                    <span className="text-teal-100">
                      Equal access to funding opportunities previously reserved for well-connected organizations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-teal-300 mt-0.5" />
                    <span className="text-teal-100">
                      Tools that amplify their unique strengths and community connections
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-teal-800 bg-opacity-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">For Funders</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-teal-300 mt-0.5" />
                    <span className="text-teal-100">
                      Discover high-impact organizations that might otherwise fly under the radar
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-teal-300 mt-0.5" />
                    <span className="text-teal-100">
                      Make more informed decisions based on comprehensive data and insights
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-teal-800 bg-opacity-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">For Communities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-teal-300 mt-0.5" />
                    <span className="text-teal-100">
                      More resources flowing to organizations that truly understand local needs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-teal-300 mt-0.5" />
                    <span className="text-teal-100">
                      Better solutions developed by those with lived experience and cultural context
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Us in Our Mission</h2>
              <p className="text-xl mb-8">
                When we level the philanthropic playing field through equitable intelligence, everyone wins: community
                organizations secure sustainable funding, foundations find partners whose work genuinely aligns with
                their missions, and communities receive more effective, culturally responsive solutions.
              </p>
              <BetaSignup buttonText="Request Demo Access" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container">
          <div className="text-center">
            <p>© 2023 Kindora. All rights reserved.</p>
            <p className="mt-2 text-sm text-gray-400">Democratizing access to philanthropic funding through AI.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

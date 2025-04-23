"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, FileText, MessageSquare, Copy, Share2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface FunderPackageModalProps {
  isOpen: boolean
  onClose: () => void
  funderId: number
  funderData: any
}

export function FunderPackageModal({ isOpen, onClose, funderId, funderData }: FunderPackageModalProps) {
  const [activeTab, setActiveTab] = useState("snapshot")
  const { toast } = useToast()

  // Mock function to copy content to clipboard
  const copyToClipboard = (content: string, type: string) => {
    navigator.clipboard.writeText(content)
    toast({
      title: "Copied to clipboard",
      description: `${type} has been copied to your clipboard.`,
      duration: 3000,
    })
  }

  if (!funderData) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-xl">{funderData.name} Funder Package</DialogTitle>
              <DialogDescription>
                Generated on {funderData.packageData.generatedDate} • Last updated {funderData.packageData.lastUpdated}
              </DialogDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => copyToClipboard("", "Package link")}>
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Download
              </Button>
            </div>
          </div>
        </DialogHeader>

        <Tabs
          defaultValue="snapshot"
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex-1 overflow-hidden flex flex-col"
        >
          <div className="border-b">
            <TabsList className="bg-transparent h-auto p-0">
              <TabsTrigger
                value="snapshot"
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-teal-700 data-[state=active]:text-teal-700 data-[state=active]:shadow-none rounded-none px-4 py-2"
              >
                Snapshot
              </TabsTrigger>
              <TabsTrigger
                value="deepdive"
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-teal-700 data-[state=active]:text-teal-700 data-[state=active]:shadow-none rounded-none px-4 py-2"
              >
                Deep Dive
              </TabsTrigger>
              <TabsTrigger
                value="email"
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-teal-700 data-[state=active]:text-teal-700 data-[state=active]:shadow-none rounded-none px-4 py-2"
              >
                Email Template
              </TabsTrigger>
              <TabsTrigger
                value="meeting"
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-teal-700 data-[state=active]:text-teal-700 data-[state=active]:shadow-none rounded-none px-4 py-2"
              >
                Meeting Guide
              </TabsTrigger>
              <TabsTrigger
                value="loi"
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-teal-700 data-[state=active]:text-teal-700 data-[state=active]:shadow-none rounded-none px-4 py-2"
              >
                LOI Template
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {/* Snapshot Tab */}
            <TabsContent value="snapshot" className="mt-0 h-full">
              <div className="space-y-6">
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-teal-800">VERDICT: {funderData.packageData.verdict}</h3>
                      <p className="text-sm text-gray-700 mt-1">{funderData.packageData.verdictSummary}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => copyToClipboard(funderData.packageData.verdictSummary, "Verdict summary")}
                    >
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </Button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-900">KEY STATS</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => copyToClipboard("", "Key stats")}
                    >
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {funderData.packageData.keyStats.map((stat: any, index: number) => (
                      <div key={index} className="flex items-start">
                        <div className="h-1.5 w-1.5 rounded-full bg-teal-700 mt-2 mr-2"></div>
                        <div className="text-sm">
                          <span className="font-medium">{stat.label}:</span> {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-900">STRONGEST ALIGNMENT POINTS</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => copyToClipboard("", "Alignment points")}
                    >
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {funderData.packageData.alignmentPoints.map((point: any, index: number) => (
                      <div key={index} className="flex items-start">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2 mr-2"></div>
                        <div className="text-sm">
                          <span className="font-medium">{point.title}:</span> {point.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-900">POTENTIAL DISCONNECTS</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => copyToClipboard("", "Potential disconnects")}
                    >
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {funderData.packageData.disconnects.map((point: any, index: number) => (
                      <div key={index} className="flex items-start">
                        <div className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-2 mr-2"></div>
                        <div className="text-sm">
                          <span className="font-medium">{point.title}:</span> {point.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-900">BOTTOM LINE</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => copyToClipboard(funderData.packageData.bottomLine, "Bottom line")}
                    >
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </Button>
                  </div>
                  <p className="text-sm text-gray-700 mt-2">{funderData.packageData.bottomLine}</p>
                </div>
              </div>
            </TabsContent>

            {/* Deep Dive Tab */}
            <TabsContent value="deepdive" className="mt-0 h-full">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-900">1. FUNDER DNA</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => copyToClipboard("", "Funder DNA")}
                    >
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Mission & Vision</h4>
                      <p className="text-sm text-gray-600">{funderData.packageData.deepDive.mission}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Core Values</h4>
                      <div className="flex flex-wrap gap-2">
                        {funderData.packageData.deepDive.coreValues.map((value: string, index: number) => (
                          <Badge key={index} variant="outline" className="bg-teal-50 text-teal-700 border-teal-200">
                            {value}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Decision-Making Style</h4>
                      <p className="text-sm text-gray-600">{funderData.packageData.deepDive.decisionMaking}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-900">2. GRANT HISTORY PATTERNS</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => copyToClipboard("", "Grant history")}
                    >
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-1">Financial Trajectory</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          {funderData.packageData.deepDive.financialTrajectory.map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-1">Typical Grant Sizes</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          {funderData.packageData.deepDive.grantSizes.map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Program Distribution</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        {funderData.packageData.deepDive.programDistribution.map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Geographic Preferences</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        {funderData.packageData.deepDive.geographicPreferences.map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Recent Relevant Grants</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        {funderData.packageData.deepDive.relevantGrants.map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-900">3. DECISION-MAKER INSIGHTS</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => copyToClipboard("", "Decision-maker insights")}
                    >
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Key Personnel</h4>
                      {funderData.packageData.deepDive.keyPersonnel.map((person: any, index: number) => (
                        <div key={index} className="mb-3">
                          <p className="text-sm font-medium">
                            {person.name}, {person.title}
                          </p>
                          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                            {person.details.map((detail: string, detailIndex: number) => (
                              <li key={detailIndex}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Decision Process</h4>
                      <p className="text-sm text-gray-600">{funderData.packageData.deepDive.decisionProcess}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-900">4. FUNDING RECOMMENDATIONS</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => copyToClipboard("", "Funding recommendations")}
                    >
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Suggested Ask Range</h4>
                      <p className="text-sm text-gray-600">{funderData.packageData.deepDive.suggestedAskRange}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Grant Structure Recommendation</h4>
                      <p className="text-sm text-gray-600">{funderData.packageData.deepDive.grantStructure}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-900">5. POSITIONING STRATEGY</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => copyToClipboard("", "Positioning strategy")}
                    >
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Key Differentiators to Emphasize</h4>
                      <ol className="list-decimal pl-5 text-sm text-gray-600 space-y-1">
                        {funderData.packageData.deepDive.keyDifferentiators.map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ol>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Potential Objections and Responses</h4>
                      {funderData.packageData.deepDive.objections.map((obj: any, index: number) => (
                        <div key={index} className="mb-2">
                          <p className="text-sm">
                            <span className="font-medium">Objection:</span> {obj.objection}
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">Response:</span> {obj.response}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Email Template Tab */}
            <TabsContent value="email" className="mt-0 h-full">
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900">Email Template</h3>
                      <p className="text-sm text-gray-600">
                        Use this template to initiate contact with {funderData.packageData.contactPerson.name}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        onClick={() => copyToClipboard(funderData.packageData.emailTemplate.content, "Email template")}
                      >
                        <Copy className="h-3 w-3 mr-1" />
                        Copy
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        <Mail className="h-3 w-3 mr-1" />
                        Open in Email
                      </Button>
                    </div>
                  </div>

                  <div className="border-b border-gray-200 pb-2 mb-4">
                    <div className="text-sm mb-1">
                      <span className="font-medium">To:</span> {funderData.packageData.contactPerson.name} &lt;
                      {funderData.packageData.contactPerson.email}&gt;
                    </div>
                    <div className="text-sm mb-1">
                      <span className="font-medium">Subject:</span> {funderData.packageData.emailTemplate.subject}
                    </div>
                  </div>

                  <div className="text-sm whitespace-pre-line">{funderData.packageData.emailTemplate.content}</div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Email Tips</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                    <li>Keep your email concise - aim for 250-300 words maximum</li>
                    <li>Personalize the template with specific details about your organization</li>
                    <li>Reference any mutual connections or specific programs that align with your work</li>
                    <li>Include a clear call to action (typically a request for a meeting or call)</li>
                    <li>Follow up within 1-2 weeks if you don't receive a response</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* Meeting Guide Tab */}
            <TabsContent value="meeting" className="mt-0 h-full">
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900">Meeting Conversation Guide</h3>
                      <p className="text-sm text-gray-600">
                        Use this guide to prepare for your meeting with {funderData.packageData.contactPerson.name}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => copyToClipboard("", "Meeting guide")}
                    >
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {funderData.packageData.meetingGuide.sections.map((section: any, index: number) => (
                      <div key={index} className="pb-4 border-b border-gray-100 last:border-0">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-sm font-medium text-gray-700">
                            {section.title} ({section.duration})
                          </h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 text-xs"
                            onClick={() => copyToClipboard(section.content, section.title)}
                          >
                            <Copy className="h-3 w-3 mr-1" />
                            Copy
                          </Button>
                        </div>
                        <div className="text-sm whitespace-pre-line">{section.content}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Meeting Preparation Tips</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                    <li>Research recent news about the foundation before your meeting</li>
                    <li>Prepare 2-3 specific questions about their funding priorities</li>
                    <li>Practice your key talking points but remain conversational</li>
                    <li>Bring materials that showcase your impact (one-pager, annual report)</li>
                    <li>Follow up within 48 hours with a thank you and any promised materials</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* LOI Template Tab */}
            <TabsContent value="loi" className="mt-0 h-full">
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900">Letter of Intent Template</h3>
                      <p className="text-sm text-gray-600">
                        Use this template to create your LOI for {funderData.name}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        onClick={() => copyToClipboard("", "LOI template")}
                      >
                        <Copy className="h-3 w-3 mr-1" />
                        Copy
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        <FileText className="h-3 w-3 mr-1" />
                        Download as Word
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-sm mb-4">
                      <p className="mb-2">{funderData.packageData.loiTemplate.date}</p>
                      <p className="mb-2">
                        {funderData.packageData.contactPerson.name}
                        <br />
                        {funderData.packageData.contactPerson.title}
                        <br />
                        {funderData.name}
                        <br />
                        {funderData.packageData.contactPerson.location}
                      </p>
                    </div>

                    {funderData.packageData.loiTemplate.sections.map((section: any, index: number) => (
                      <div key={index} className="pb-3 border-b border-gray-100 last:border-0">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="text-sm font-medium text-gray-700">{section.title}</h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 text-xs"
                            onClick={() => copyToClipboard(section.content, section.title)}
                          >
                            <Copy className="h-3 w-3 mr-1" />
                            Copy
                          </Button>
                        </div>
                        <div className="text-sm whitespace-pre-line">{section.content}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">LOI Writing Tips</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                    <li>Customize the template with your organization's specific details and impact</li>
                    <li>Keep your LOI concise and focused on alignment with the funder's priorities</li>
                    <li>Use data and specific examples to demonstrate your impact</li>
                    <li>Proofread carefully and have someone else review before submitting</li>
                    <li>Follow the funder's specific submission guidelines</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>

        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <div className="text-sm text-gray-500">AI-generated content. Review and customize before use.</div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button className="bg-teal-700 hover:bg-teal-800">
              <MessageSquare className="h-4 w-4 mr-2" />
              Get Help Customizing
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

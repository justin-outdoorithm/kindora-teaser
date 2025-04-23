"use client"

import { useState, useEffect } from "react"
import { DashboardLayout } from "@/app/components/dashboard-layout"
import { RichTextEditor } from "@/app/grant-builder/components/rich-text-editor"
import { KiraSidePanel } from "@/app/grant-builder/components/kira-side-panel"
import { ComplianceDrawer } from "@/app/grant-builder/components/compliance-drawer"
import { ExportModal } from "@/app/grant-builder/components/export-modal"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Download,
  Save,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  FileText,
  Settings,
  Sparkles,
  Zap,
  Lightbulb,
  Wand2,
  Bot,
  BrainCircuit,
  ArrowRight,
  X,
} from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent } from "@/components/ui/card"

// Mock data for the grant
const mockGrant = {
  id: "grant-1",
  title: "Youth Education Initiative",
  funder: "Education Foundation of America",
  deadline: "May 15, 2025",
  sections: [
    {
      id: "org-overview",
      title: "Organization Overview",
      status: "completed",
      wordCount: 250,
      wordLimit: 300,
      content:
        "Future Impact Foundation empowers underserved youth through educational programs that build academic skills, cultural awareness, and leadership abilities, creating pathways to success for the next generation. Founded in 2018, our organization has grown to serve over 500 students annually across three urban communities. Our programs have demonstrated measurable success in improving academic outcomes, increasing cultural competency, and developing leadership skills among participants.",
    },
    {
      id: "project-description",
      title: "Project Description",
      status: "in-progress",
      wordCount: 420,
      wordLimit: 500,
      content:
        "The Youth Education Initiative is a comprehensive after-school program designed to address the educational gaps faced by underserved youth in urban communities. The program combines academic tutoring, cultural enrichment activities, and leadership development to provide a holistic approach to education.\n\nKey components include:\n\n1. Academic Support: Certified teachers provide tutoring in core subjects (math, science, language arts) with personalized learning plans for each student.\n\n2. Cultural Enrichment: Weekly workshops expose students to diverse cultural experiences, including art, music, and history from various traditions.\n\n3. Leadership Development: Students participate in community service projects and receive mentoring from successful professionals who share similar backgrounds.\n\nThe program operates after school hours (3:00-6:00 PM) three days per week throughout the academic year, with an intensive summer component that includes field trips and experiential learning opportunities.",
    },
    {
      id: "goals-objectives",
      title: "Goals & Objectives",
      status: "not-started",
      wordCount: 0,
      wordLimit: 400,
      content: "",
    },
    {
      id: "budget",
      title: "Budget & Justification",
      status: "not-started",
      wordCount: 0,
      wordLimit: 600,
      content: "",
    },
    {
      id: "evaluation",
      title: "Evaluation Plan",
      status: "not-started",
      wordCount: 0,
      wordLimit: 350,
      content: "",
    },
    {
      id: "sustainability",
      title: "Sustainability Plan",
      status: "not-started",
      wordCount: 0,
      wordLimit: 300,
      content: "",
    },
  ],
  complianceScore: 78,
  lastSaved: "2 minutes ago",
}

export default function GrantBuilderPage() {
  const [activeSection, setActiveSection] = useState(mockGrant.sections[0])
  const [content, setContent] = useState(activeSection.content)
  const [isKiraPanelOpen, setIsKiraPanelOpen] = useState(false)
  const [isComplianceDrawerOpen, setIsComplianceDrawerOpen] = useState(false)
  const [isExportModalOpen, setIsExportModalOpen] = useState(false)
  const [autoSaveStatus, setAutoSaveStatus] = useState("Saved")
  const { toast } = useToast()

  const [aiSuggestions, setAiSuggestions] = useState([
    {
      id: "sug-1",
      type: "improve",
      section: "project-description",
      preview: "Add more specific metrics about your program's impact...",
      content:
        "Consider adding specific metrics about your program's impact. For example: '87% of participants showed improved academic performance' or 'Students in our program are 3x more likely to attend college.'",
    },
    {
      id: "sug-2",
      type: "clarity",
      section: "project-description",
      preview: "Clarify the timeline for implementation...",
      content:
        "The timeline for implementation could be more specific. Consider adding a month-by-month breakdown of key milestones to demonstrate thorough planning.",
    },
    {
      id: "sug-3",
      type: "alignment",
      section: "project-description",
      preview: "Strengthen alignment with funder priorities...",
      content:
        "Education Foundation of America emphasizes evidence-based approaches. Consider citing 1-2 research studies that support your methodology to strengthen alignment with their priorities.",
    },
  ])
  const [showAiPanel, setShowAiPanel] = useState(true)
  const [aiAnalysisScore, setAiAnalysisScore] = useState({
    clarity: 82,
    impact: 76,
    alignment: 68,
    overall: 75,
  })

  // Update content when active section changes
  useEffect(() => {
    setContent(activeSection.content)
  }, [activeSection])

  // Simulate auto-save
  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoSaveStatus("Saved")
    }, 1000)
    return () => clearTimeout(timer)
  }, [content])

  const handleContentChange = (newContent: string) => {
    setContent(newContent)
    setAutoSaveStatus("Saving...")
  }

  const handleSectionChange = (sectionId: string) => {
    const section = mockGrant.sections.find((s) => s.id === sectionId)
    if (section) {
      setActiveSection(section)
    }
  }

  const handleSave = () => {
    toast({
      title: "Grant saved",
      description: "Your grant has been saved successfully.",
      duration: 3000,
    })
  }

  const getComplianceColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 70) return "text-amber-600"
    return "text-red-600"
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "in-progress":
        return <FileText className="h-4 w-4 text-amber-600" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-400" />
    }
  }

  return (
    <DashboardLayout activeTab="Grant Builder">
      <div className="flex h-[calc(100vh-64px)]">
        {/* Left Sidebar - Sections */}
        <div className="w-64 border-r border-gray-200 bg-gray-50 overflow-y-auto">
          <div className="p-4">
            <h2 className="font-bold text-gray-900 mb-1">{mockGrant.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{mockGrant.funder}</p>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Compliance Score</span>
                <span className={getComplianceColor(mockGrant.complianceScore)}>{mockGrant.complianceScore}%</span>
              </div>
              <Progress value={mockGrant.complianceScore} className="h-2" />
            </div>

            <div className="flex justify-between text-xs text-gray-500 mb-4">
              <span>Deadline: {mockGrant.deadline}</span>
              <span>{autoSaveStatus}</span>
            </div>

            <div className="space-y-1">
              {mockGrant.sections.map((section) => (
                <button
                  key={section.id}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center ${
                    activeSection.id === section.id
                      ? "bg-teal-50 text-teal-700 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => handleSectionChange(section.id)}
                >
                  {getStatusIcon(section.status)}
                  <span className="ml-2">{section.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Bar */}
          <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-gray-900">{activeSection.title}</h1>
              <div className="flex items-center text-sm text-gray-600">
                <span className="mr-4">
                  Word count: {activeSection.wordCount}/{activeSection.wordLimit}
                </span>
                <Badge variant="outline" className="bg-gray-50">
                  {activeSection.status === "completed"
                    ? "Completed"
                    : activeSection.status === "in-progress"
                      ? "In Progress"
                      : "Not Started"}
                </Badge>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={handleSave}>
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm" onClick={() => setIsComplianceDrawerOpen(true)}>
                <Settings className="h-4 w-4 mr-2" />
                Compliance
              </Button>
              <Button variant="outline" size="sm" onClick={() => setIsKiraPanelOpen(true)}>
                <MessageSquare className="h-4 w-4 mr-2" />
                Ask Kira
              </Button>
              <Button className="bg-teal-700 hover:bg-teal-800" size="sm" onClick={() => setIsExportModalOpen(true)}>
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          {/* Editor Area */}
          <div className="flex-1 overflow-auto bg-white flex flex-col">
            <Tabs defaultValue="write" className="flex-1 flex flex-col">
              <div className="border-b border-gray-200 px-6 py-2 flex justify-between items-center">
                <TabsList>
                  <TabsTrigger value="write">Write</TabsTrigger>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
                  <TabsTrigger value="ai-analysis" className="relative">
                    AI Analysis
                    {aiAnalysisScore.overall < 80 && (
                      <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-amber-500"></span>
                    )}
                  </TabsTrigger>
                </TabsList>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 text-teal-700"
                        onClick={() => setShowAiPanel(!showAiPanel)}
                      >
                        {showAiPanel ? "Hide AI Panel" : "Show AI Panel"}
                        <BrainCircuit className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Toggle AI suggestions panel</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <div className="flex-1 flex overflow-hidden">
                <div className={`flex-1 overflow-auto transition-all ${showAiPanel ? "pr-[300px]" : "pr-0"}`}>
                  <TabsContent value="write" className="h-full p-6 focus-visible:outline-none focus-visible:ring-0 m-0">
                    <RichTextEditor content={content} onChange={handleContentChange} />
                  </TabsContent>

                  <TabsContent
                    value="preview"
                    className="h-full p-6 focus-visible:outline-none focus-visible:ring-0 m-0"
                  >
                    <div className="prose max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, "<br />") }} />
                    </div>
                  </TabsContent>

                  <TabsContent
                    value="guidelines"
                    className="h-full p-6 focus-visible:outline-none focus-visible:ring-0 m-0"
                  >
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-medium text-gray-900 mb-2">Section Guidelines</h3>
                      <p className="text-gray-700 mb-4">
                        This section should provide a clear and concise description of your project. Focus on:
                      </p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>What problem or need your project addresses</li>
                        <li>The specific activities and services you will provide</li>
                        <li>Who will benefit from your project</li>
                        <li>The timeline for implementation</li>
                        <li>How your project aligns with the funder's priorities</li>
                      </ul>
                      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-md">
                        <h4 className="font-medium text-amber-800 mb-1">Funder Preferences</h4>
                        <p className="text-amber-700 text-sm">
                          Education Foundation of America prefers project descriptions that include specific metrics and
                          evidence-based approaches. Be sure to include data that supports your approach.
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent
                    value="ai-analysis"
                    className="h-full p-6 focus-visible:outline-none focus-visible:ring-0 m-0"
                  >
                    <div className="space-y-6">
                      <div className="grid grid-cols-4 gap-4">
                        <Card>
                          <CardContent className="pt-6">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-gray-900">{aiAnalysisScore.overall}%</div>
                              <p className="text-sm text-gray-500">Overall Score</p>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="pt-6">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-gray-900">{aiAnalysisScore.clarity}%</div>
                              <p className="text-sm text-gray-500">Clarity</p>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="pt-6">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-gray-900">{aiAnalysisScore.impact}%</div>
                              <p className="text-sm text-gray-500">Impact</p>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="pt-6">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-gray-900">{aiAnalysisScore.alignment}%</div>
                              <p className="text-sm text-gray-500">Funder Alignment</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900">AI Recommendations</h3>

                        <div className="space-y-3">
                          <div className="p-4 border border-amber-200 bg-amber-50 rounded-lg">
                            <div className="flex gap-3">
                              <Lightbulb className="h-5 w-5 text-amber-600 mt-0.5" />
                              <div>
                                <h4 className="font-medium text-gray-900">Strengthen Funder Alignment</h4>
                                <p className="text-sm text-gray-700 mt-1">
                                  Your proposal could better align with Education Foundation of America's focus on
                                  evidence-based approaches. Consider adding 1-2 research citations that support your
                                  methodology.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-4 border border-teal-200 bg-teal-50 rounded-lg">
                            <div className="flex gap-3">
                              <Lightbulb className="h-5 w-5 text-teal-600 mt-0.5" />
                              <div>
                                <h4 className="font-medium text-gray-900">Add Impact Metrics</h4>
                                <p className="text-sm text-gray-700 mt-1">
                                  Include specific metrics about your program's impact. For example: "87% of
                                  participants showed improved academic performance" or "Students in our program are 3x
                                  more likely to attend college."
                                </p>
                                <Button size="sm" variant="outline" className="mt-2 h-8 text-xs gap-1">
                                  Apply this suggestion <ArrowRight className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>

                          <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                            <div className="flex gap-3">
                              <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5" />
                              <div>
                                <h4 className="font-medium text-gray-900">Clarify Timeline</h4>
                                <p className="text-sm text-gray-700 mt-1">
                                  The timeline for implementation could be more specific. Consider adding a
                                  month-by-month breakdown of key milestones to demonstrate thorough planning.
                                </p>
                                <Button size="sm" variant="outline" className="mt-2 h-8 text-xs gap-1">
                                  Apply this suggestion <ArrowRight className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </div>

                {/* AI Suggestions Panel */}
                <div
                  className={`fixed top-[64px] right-0 bottom-0 w-[300px] bg-gray-50 border-l border-gray-200 overflow-y-auto transition-transform ${
                    showAiPanel ? "translate-x-0" : "translate-x-full"
                  }`}
                >
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <BrainCircuit className="h-5 w-5 text-teal-700" />
                        <h3 className="font-medium text-gray-900">AI Suggestions</h3>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => setShowAiPanel(false)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="space-y-3">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button className="w-full justify-start gap-2 bg-teal-700 hover:bg-teal-800">
                            <Wand2 className="h-4 w-4" />
                            Generate Content
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                          <div className="space-y-2">
                            <h4 className="font-medium">Generate with AI</h4>
                            <p className="text-sm text-gray-500">What would you like Kira to generate?</p>
                            <div className="grid gap-2">
                              <Button variant="outline" size="sm" className="justify-start">
                                <span>Project Description</span>
                              </Button>
                              <Button variant="outline" size="sm" className="justify-start">
                                <span>Goals & Objectives</span>
                              </Button>
                              <Button variant="outline" size="sm" className="justify-start">
                                <span>Evaluation Plan</span>
                              </Button>
                              <Button variant="outline" size="sm" className="justify-start">
                                <span>Budget Justification</span>
                              </Button>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>

                      <Button variant="outline" className="w-full justify-start gap-2">
                        <Zap className="h-4 w-4 text-amber-500" />
                        Improve Writing
                      </Button>

                      <Button variant="outline" className="w-full justify-start gap-2">
                        <Bot className="h-4 w-4 text-blue-500" />
                        Ask Kira a Question
                      </Button>

                      <div className="pt-2">
                        <div className="text-sm font-medium text-gray-700 mb-2">Smart Suggestions</div>

                        {aiSuggestions.map((suggestion) => (
                          <div
                            key={suggestion.id}
                            className="mb-2 p-3 bg-white border border-gray-200 rounded-md hover:border-teal-300 hover:shadow-sm cursor-pointer"
                          >
                            <div className="flex items-start gap-2">
                              <Sparkles className="h-4 w-4 text-amber-500 mt-0.5" />
                              <div>
                                <p className="text-sm text-gray-900">{suggestion.preview}</p>
                                <div className="flex items-center gap-1 mt-1">
                                  <Button variant="ghost" size="sm" className="h-6 text-xs px-2 text-teal-700">
                                    Apply
                                  </Button>
                                  <Button variant="ghost" size="sm" className="h-6 text-xs px-2 text-gray-500">
                                    Dismiss
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2">
                        <div className="text-sm font-medium text-gray-700 mb-2">Writing Stats</div>
                        <div className="bg-white p-3 border border-gray-200 rounded-md">
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <div className="text-gray-500">Reading Level</div>
                              <div className="font-medium">Grade 11-12</div>
                            </div>
                            <div>
                              <div className="text-gray-500">Tone</div>
                              <div className="font-medium">Professional</div>
                            </div>
                            <div>
                              <div className="text-gray-500">Active Voice</div>
                              <div className="font-medium">82%</div>
                            </div>
                            <div>
                              <div className="text-gray-500">Jargon</div>
                              <div className="font-medium text-amber-600">Moderate</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs>
          </div>
        </div>

        {/* Kira Side Panel */}
        <KiraSidePanel isOpen={isKiraPanelOpen} onClose={() => setIsKiraPanelOpen(false)} />

        {/* Compliance Drawer */}
        <ComplianceDrawer
          isOpen={isComplianceDrawerOpen}
          onClose={() => setIsComplianceDrawerOpen(false)}
          score={mockGrant.complianceScore}
        />

        {/* Export Modal */}
        <ExportModal isOpen={isExportModalOpen} onClose={() => setIsExportModalOpen(false)} />
      </div>
    </DashboardLayout>
  )
}

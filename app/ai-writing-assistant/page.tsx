"use client"

import { useState } from "react"
import { DashboardLayout } from "@/app/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Copy, Download, FileText, Loader2, Sparkles, Check } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data for dropdowns
const FUNDERS = [
  { id: "1", name: "Education Foundation of America" },
  { id: "2", name: "Kresge Foundation" },
  { id: "3", name: "Robert Wood Johnson Foundation" },
  { id: "4", name: "Gates Foundation" },
  { id: "5", name: "Ford Foundation" },
]

const GRANTS = {
  "1": [
    { id: "1-1", name: "Education Innovation Grant" },
    { id: "1-2", name: "Youth Development Program" },
  ],
  "2": [
    { id: "2-1", name: "Arts & Culture Initiative" },
    { id: "2-2", name: "Community Development Grant" },
  ],
  "3": [
    { id: "3-1", name: "Health Equity Program" },
    { id: "3-2", name: "Youth Health Initiative" },
  ],
  "4": [
    { id: "4-1", name: "Global Health Initiative" },
    { id: "4-2", name: "Education Technology Grant" },
  ],
  "5": [
    { id: "5-1", name: "Social Justice Program" },
    { id: "5-2", name: "Arts & Culture Grant" },
  ],
}

const QUESTIONS = {
  "1-1": [
    { id: "q1", text: "How will your project improve educational outcomes?" },
    { id: "q2", text: "Describe your implementation plan and timeline." },
  ],
  "1-2": [
    { id: "q1", text: "How will your program support youth development?" },
    { id: "q2", text: "What metrics will you use to measure success?" },
  ],
  "2-1": [
    { id: "q1", text: "How does your project promote arts and culture in the community?" },
    { id: "q2", text: "What audiences will your project serve?" },
  ],
  "2-2": [
    { id: "q1", text: "How will your project strengthen community bonds?" },
    { id: "q2", text: "Describe the community need your project addresses." },
  ],
  "3-1": [
    { id: "q1", text: "How will your program address health disparities?" },
    { id: "q2", text: "What partnerships will support your health equity goals?" },
  ],
  "3-2": [
    { id: "q1", text: "How will your initiative improve youth health outcomes?" },
    { id: "q2", text: "What evidence-based approaches will you implement?" },
  ],
  "4-1": [
    { id: "q1", text: "How will your project address global health challenges?" },
    { id: "q2", text: "What innovative approaches does your project employ?" },
  ],
  "4-2": [
    { id: "q1", text: "How will your project leverage technology to improve education?" },
    { id: "q2", text: "What educational gaps does your technology solution address?" },
  ],
  "5-1": [
    { id: "q1", text: "How will your program advance social justice in your community?" },
    { id: "q2", text: "What systemic issues does your program address?" },
  ],
  "5-2": [
    { id: "q1", text: "How will your project enhance cultural expression?" },
    { id: "q2", text: "What artistic disciplines will your project support?" },
  ],
}

export default function AIWritingAssistant() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState("")
  const [selectedFunder, setSelectedFunder] = useState("")
  const [selectedGrant, setSelectedGrant] = useState("")
  const [selectedQuestion, setSelectedQuestion] = useState("")
  const [sampleText, setSampleText] = useState("")
  const [copied, setCopied] = useState(false)

  const handleFunderChange = (value: string) => {
    setSelectedFunder(value)
    setSelectedGrant("")
    setSelectedQuestion("")
  }

  const handleGrantChange = (value: string) => {
    setSelectedGrant(value)
    setSelectedQuestion("")
  }

  const handleGenerate = () => {
    if (!selectedFunder || !selectedGrant || !selectedQuestion) {
      alert("Please select a funder, grant, and question to continue")
      return
    }

    setIsGenerating(true)
    // Simulate AI generation
    setTimeout(() => {
      const funder = FUNDERS.find((f) => f.id === selectedFunder)?.name
      const question = Object.values(QUESTIONS)
        .flat()
        .find((q) => q.id === selectedQuestion)?.text

      setGeneratedContent(
        `Our program directly addresses ${funder}'s focus on improving outcomes through innovative approaches. 

${sampleText || "Our organization has a strong track record of success in this area, with proven results from our previous initiatives."}

We will implement a comprehensive strategy that includes:

1. Engaging community stakeholders to ensure broad support and participation
2. Utilizing evidence-based practices that have demonstrated success
3. Establishing clear metrics to track progress and outcomes
4. Building sustainable partnerships to extend impact beyond the grant period

Our approach is both innovative and practical, combining new methodologies with proven techniques to maximize effectiveness. We've carefully designed our program to align with your priorities while addressing critical community needs.

The anticipated outcomes include improved access to services, enhanced quality of life for participants, and strengthened community infrastructure that will continue to benefit residents long after the grant period ends.`,
      )
      setIsGenerating(false)
    }, 2000)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const element = document.createElement("a")
    const file = new Blob([generatedContent], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = "grant-answer.txt"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <DashboardLayout activeTab="AI Writing">
      <div className="p-4 md:p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">AI Writing Helper</h1>
            <p className="text-gray-600">Let AI help you write your grant application</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Form */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
            <div className="space-y-5">
              <div>
                <Label htmlFor="funder-select" className="text-base font-medium mb-1.5 block">
                  Select a Funder
                </Label>
                <Select value={selectedFunder} onValueChange={handleFunderChange}>
                  <SelectTrigger id="funder-select">
                    <SelectValue placeholder="Choose a funder" />
                  </SelectTrigger>
                  <SelectContent>
                    {FUNDERS.map((funder) => (
                      <SelectItem key={funder.id} value={funder.id}>
                        {funder.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedFunder && (
                <div>
                  <Label htmlFor="grant-select" className="text-base font-medium mb-1.5 block">
                    Select a Grant
                  </Label>
                  <Select value={selectedGrant} onValueChange={handleGrantChange}>
                    <SelectTrigger id="grant-select">
                      <SelectValue placeholder="Choose a grant" />
                    </SelectTrigger>
                    <SelectContent>
                      {GRANTS[selectedFunder as keyof typeof GRANTS]?.map((grant) => (
                        <SelectItem key={grant.id} value={grant.id}>
                          {grant.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {selectedGrant && (
                <div>
                  <Label htmlFor="question-select" className="text-base font-medium mb-1.5 block">
                    Select a Question
                  </Label>
                  <Select value={selectedQuestion} onValueChange={setSelectedQuestion}>
                    <SelectTrigger id="question-select">
                      <SelectValue placeholder="Choose a question" />
                    </SelectTrigger>
                    <SelectContent>
                      {QUESTIONS[selectedGrant as keyof typeof QUESTIONS]?.map((question) => (
                        <SelectItem key={question.id} value={question.id}>
                          {question.text}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {selectedQuestion && (
                <div>
                  <Label htmlFor="sample-text" className="text-base font-medium mb-1.5 block">
                    Your Draft Answer
                  </Label>
                  <Textarea
                    id="sample-text"
                    placeholder="Write a few sentences about your project..."
                    className="min-h-[120px]"
                    value={sampleText}
                    onChange={(e) => setSampleText(e.target.value)}
                  />
                </div>
              )}

              <Button
                className="w-full bg-teal-700 hover:bg-teal-800 py-6 text-lg"
                onClick={handleGenerate}
                disabled={isGenerating || !selectedFunder || !selectedGrant || !selectedQuestion}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5 mr-2" />
                    Generate Sample Answer
                  </>
                )}
              </Button>

              <div className="text-center text-sm text-gray-500">
                Select a funder, grant, and question, then click the button to get AI-generated text for your
                application.
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-900">Suggested Text</h2>
              {generatedContent && (
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-teal-700 text-teal-700 hover:bg-teal-50"
                    onClick={handleCopy}
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 mr-1" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-1" />
                        Copy
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-teal-700 text-teal-700 hover:bg-teal-50"
                    onClick={handleDownload}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                </div>
              )}
            </div>

            {generatedContent ? (
              <div className="bg-gray-50 rounded-lg p-4 prose max-w-none">
                {generatedContent.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-6 text-center h-full flex flex-col items-center justify-center">
                <FileText className="h-12 w-12 text-gray-400 mb-3" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">No text generated yet</h3>
                <p className="text-gray-600 mb-4">
                  Select a funder, grant, and question, then click "Generate Sample Answer"
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Avatar } from "@/components/ui/avatar"
import {
  Send,
  Paperclip,
  X,
  Sparkles,
  FileText,
  Lightbulb,
  Zap,
  CheckCircle,
  BarChart,
  AlertCircle,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface KiraSidePanelProps {
  isOpen: boolean
  onClose: () => void
}

interface Message {
  id: string
  sender: "user" | "kira"
  content: string
  timestamp: Date
}

export function KiraSidePanel({ isOpen, onClose }: KiraSidePanelProps) {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "kira",
      content:
        "Hi there! I'm Kira, your AI grant writing assistant. How can I help you with your grant application today?",
      timestamp: new Date(),
    },
  ])

  const [activeTab, setActiveTab] = useState("chat")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState("")

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      content: input,
      timestamp: new Date(),
    }
    setMessages([...messages, userMessage])
    setInput("")

    // Simulate Kira's response after a short delay
    setTimeout(() => {
      const kiraResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: "kira",
        content: getKiraResponse(input),
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, kiraResponse])
    }, 1000)
  }

  const getKiraResponse = (userInput: string): string => {
    // In a real implementation, this would call an AI API
    // For this demo, we'll return canned responses based on keywords
    const input = userInput.toLowerCase()

    if (input.includes("budget") || input.includes("financial")) {
      return "For the budget section, make sure to include both direct and indirect costs. Be specific about how funds will be used and ensure all expenses align with your project activities. Education Foundation of America prefers detailed line-item budgets with clear justifications."
    }

    if (input.includes("goal") || input.includes("objective")) {
      return "Your goals and objectives should be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound. For each goal, include 2-3 measurable objectives that clearly state what will be accomplished, by whom, and by when."
    }

    if (input.includes("improve") || input.includes("suggestion") || input.includes("better")) {
      return "I'd suggest strengthening your project description by adding more specific outcomes and metrics. For example, instead of saying 'improve academic performance,' specify 'increase reading proficiency by 20% as measured by standardized tests.' This level of detail will make your proposal more compelling."
    }

    return "I'd be happy to help with that aspect of your grant. Could you provide a bit more context about what specific information or assistance you need?"
  }

  const generateContent = (type: string) => {
    setIsGenerating(true)

    // Simulate AI generation with a delay
    setTimeout(() => {
      let content = ""

      if (type === "goals") {
        content = `Goal 1: Improve Academic Achievement
Objective 1.1: Increase reading proficiency by 20% among program participants as measured by standardized tests within the first academic year.
Objective 1.2: Achieve a 15% improvement in math scores for all participants by the end of the program year.

Goal 2: Enhance Cultural Competency
Objective 2.1: Ensure 90% of participants demonstrate increased knowledge of diverse cultural traditions as measured by pre/post assessments.
Objective 2.2: Facilitate at least 12 cultural exchange activities throughout the year with documented participant engagement.

Goal 3: Develop Leadership Skills
Objective 3.1: Train 100% of participants in basic leadership principles through structured workshops by program end.
Objective 3.2: Enable 75% of participants to successfully plan and execute a community service project demonstrating leadership skills.`
      }

      setGeneratedContent(content)
      setIsGenerating(false)

      // Add a message about the generation
      const kiraResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: "kira",
        content: `I've generated some ${type} content for you. You can review and edit it in the "Generated" tab.`,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, kiraResponse])
    }, 2000)
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[380px] p-0 flex flex-col">
        <SheetHeader className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 bg-teal-100">
                <Sparkles className="h-4 w-4 text-teal-700" />
              </Avatar>
              <SheetTitle className="ml-2">Kira AI Assistant</SheetTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </SheetHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
          <div className="border-b border-gray-200">
            <TabsList className="w-full justify-start h-10 bg-transparent p-0">
              <TabsTrigger
                value="chat"
                className="flex-1 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-teal-700 rounded-none"
              >
                Chat
              </TabsTrigger>
              <TabsTrigger
                value="generate"
                className="flex-1 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-teal-700 rounded-none"
              >
                Generate
              </TabsTrigger>
              <TabsTrigger
                value="analyze"
                className="flex-1 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-teal-700 rounded-none"
              >
                Analyze
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="chat" className="flex-1 flex flex-col m-0 p-0 data-[state=active]:flex">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user" ? "bg-teal-700 text-white" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {message.content}
                    <div className={`text-xs mt-1 ${message.sender === "user" ? "text-teal-100" : "text-gray-500"}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask Kira for help..."
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="icon" className="h-8 w-8 bg-teal-700 hover:bg-teal-800">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="generate"
            className="flex-1 flex flex-col m-0 p-4 data-[state=active]:flex overflow-y-auto"
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Generate Content</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Let Kira generate high-quality content for your grant application. Select what you'd like to generate:
                </p>

                <div className="grid gap-2">
                  <Button
                    variant="outline"
                    className="justify-start h-auto py-3 px-4"
                    onClick={() => generateContent("goals")}
                  >
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-teal-700 mt-0.5" />
                      <div className="text-left">
                        <div className="font-medium">Goals & Objectives</div>
                        <p className="text-xs text-gray-500 mt-1">
                          Generate SMART goals and objectives aligned with your project description.
                        </p>
                      </div>
                    </div>
                  </Button>

                  <Button variant="outline" className="justify-start h-auto py-3 px-4">
                    <div className="flex items-start gap-3">
                      <BarChart className="h-5 w-5 text-teal-700 mt-0.5" />
                      <div className="text-left">
                        <div className="font-medium">Evaluation Plan</div>
                        <p className="text-xs text-gray-500 mt-1">
                          Create a comprehensive evaluation plan with metrics and methods.
                        </p>
                      </div>
                    </div>
                  </Button>

                  <Button variant="outline" className="justify-start h-auto py-3 px-4">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="h-5 w-5 text-teal-700 mt-0.5" />
                      <div className="text-left">
                        <div className="font-medium">Project Description</div>
                        <p className="text-xs text-gray-500 mt-1">
                          Draft a compelling project description based on your program details.
                        </p>
                      </div>
                    </div>
                  </Button>
                </div>
              </div>

              {isGenerating && (
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-teal-700"></div>
                    <p className="text-sm">Generating content...</p>
                  </div>
                </div>
              )}

              {generatedContent && !isGenerating && (
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-medium">Generated Content</h4>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <CheckCircle className="h-4 w-4 text-teal-700" />
                    </Button>
                  </div>
                  <div className="prose prose-sm max-w-none">
                    <pre className="text-xs whitespace-pre-wrap">{generatedContent}</pre>
                  </div>
                  <div className="flex justify-end mt-2">
                    <Button size="sm" className="bg-teal-700 hover:bg-teal-800">
                      Use This Content
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="analyze" className="flex-1 m-0 p-4 data-[state=active]:block overflow-y-auto">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Content Analysis</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Kira can analyze your content to identify areas for improvement and ensure alignment with funder
                  priorities.
                </p>

                <Button className="w-full bg-teal-700 hover:bg-teal-800">
                  <Zap className="h-4 w-4 mr-2" />
                  Analyze Current Section
                </Button>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="text-sm font-medium mb-2">Analysis Results</h4>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Clarity</span>
                    <div className="flex items-center">
                      <span className="text-sm font-medium mr-2">Good</span>
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Funder Alignment</span>
                    <div className="flex items-center">
                      <span className="text-sm font-medium mr-2">Needs Work</span>
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full" style={{ width: "45%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Impact Language</span>
                    <div className="flex items-center">
                      <span className="text-sm font-medium mr-2">Excellent</span>
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Evidence-Based</span>
                    <div className="flex items-center">
                      <span className="text-sm font-medium mr-2">Poor</span>
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-red-500 h-full" style={{ width: "30%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200">
                  <h5 className="text-sm font-medium mb-2">Recommendations</h5>
                  <ul className="space-y-2">
                    <li className="flex gap-2 text-xs">
                      <AlertCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>Add at least 2 citations to research studies that support your approach.</span>
                    </li>
                    <li className="flex gap-2 text-xs">
                      <AlertCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>Include specific metrics about your program's impact on previous participants.</span>
                    </li>
                    <li className="flex gap-2 text-xs">
                      <AlertCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>
                        Explicitly mention how your project aligns with Education Foundation of America's focus areas.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  )
}

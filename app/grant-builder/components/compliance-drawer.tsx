"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from "@/components/ui/drawer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, AlertCircle, X, Sparkles, Zap, ArrowRight } from "lucide-react"

interface ComplianceDrawerProps {
  isOpen: boolean
  onClose: () => void
  score: number
}

export function ComplianceDrawer({ isOpen, onClose, score }: ComplianceDrawerProps) {
  const [activeTab, setActiveTab] = useState("issues")
  const [isOptimizing, setIsOptimizing] = useState(false)
  const [optimizedScore, setOptimizedScore] = useState(score)

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 70) return "text-amber-600"
    return "text-red-600"
  }

  const getScoreProgressColor = (score: number) => {
    if (score >= 90) return "bg-green-600"
    if (score >= 70) return "bg-amber-600"
    return "bg-red-600"
  }

  const handleOptimize = () => {
    setIsOptimizing(true)

    // Simulate AI optimization with a delay
    setTimeout(() => {
      setOptimizedScore(Math.min(score + 15, 100))
      setIsOptimizing(false)
    }, 2000)
  }

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="max-h-[85vh]">
        <DrawerHeader className="border-b border-gray-200">
          <div className="flex items-center justify-between">
            <DrawerTitle>Grant Compliance Analysis</DrawerTitle>
            <DrawerClose asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </DrawerClose>
          </div>
        </DrawerHeader>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold">Compliance Score</h3>
              <p className="text-sm text-gray-500">Based on funder requirements and best practices</p>
            </div>
            <div className="text-right">
              <div className={`text-3xl font-bold ${getScoreColor(optimizedScore)}`}>{optimizedScore}%</div>
              {optimizedScore > score && (
                <div className="text-xs text-green-600 flex items-center">
                  <ArrowRight className="h-3 w-3 mr-1" />
                  <span>+{optimizedScore - score}% with AI optimization</span>
                </div>
              )}
            </div>
          </div>

          <Progress value={optimizedScore} className={`h-2 mb-6 ${getScoreProgressColor(optimizedScore)}`} />

          <div className="flex justify-between mb-6">
            <Button className="bg-teal-700 hover:bg-teal-800 gap-2" onClick={handleOptimize} disabled={isOptimizing}>
              {isOptimizing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Optimizing...</span>
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  <span>AI Optimize</span>
                </>
              )}
            </Button>

            <Button variant="outline" className="gap-2">
              <Zap className="h-4 w-4" />
              <span>Fix All Issues</span>
            </Button>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full grid grid-cols-3 mb-6">
              <TabsTrigger value="issues" className="relative">
                Issues
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                  4
                </span>
              </TabsTrigger>
              <TabsTrigger value="warnings" className="relative">
                Warnings
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-amber-500 text-white text-xs flex items-center justify-center">
                  3
                </span>
              </TabsTrigger>
              <TabsTrigger value="passed">Passed</TabsTrigger>
            </TabsList>

            <TabsContent value="issues" className="space-y-4 mt-0">
              <div className="border border-red-200 bg-red-50 rounded-lg p-4">
                <div className="flex gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Missing Budget Justification</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      The Budget & Justification section is required but has not been started.
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" variant="outline" className="h-8 text-xs">
                        Start Section
                      </Button>
                      <Button size="sm" className="h-8 text-xs bg-teal-700 hover:bg-teal-800">
                        <Sparkles className="h-3 w-3 mr-1" />
                        Generate with AI
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-red-200 bg-red-50 rounded-lg p-4">
                <div className="flex gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Missing Evidence-Based Citations</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      Education Foundation of America requires evidence-based approaches with citations.
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" variant="outline" className="h-8 text-xs">
                        Add Manually
                      </Button>
                      <Button size="sm" className="h-8 text-xs bg-teal-700 hover:bg-teal-800">
                        <Sparkles className="h-3 w-3 mr-1" />
                        Find Citations
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-red-200 bg-red-50 rounded-lg p-4">
                <div className="flex gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Missing Evaluation Metrics</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      The Evaluation Plan section must include specific metrics for measuring success.
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" variant="outline" className="h-8 text-xs">
                        Edit Section
                      </Button>
                      <Button size="sm" className="h-8 text-xs bg-teal-700 hover:bg-teal-800">
                        <Sparkles className="h-3 w-3 mr-1" />
                        Suggest Metrics
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-red-200 bg-red-50 rounded-lg p-4">
                <div className="flex gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Incomplete Goals & Objectives</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      The Goals & Objectives section is required but has not been started.
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" variant="outline" className="h-8 text-xs">
                        Start Section
                      </Button>
                      <Button size="sm" className="h-8 text-xs bg-teal-700 hover:bg-teal-800">
                        <Sparkles className="h-3 w-3 mr-1" />
                        Generate SMART Goals
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="warnings" className="space-y-4 mt-0">
              <div className="border border-amber-200 bg-amber-50 rounded-lg p-4">
                <div className="flex gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Weak Impact Language</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      The Project Description could use stronger language about the impact of your program.
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" className="h-8 text-xs bg-teal-700 hover:bg-teal-800">
                        <Sparkles className="h-3 w-3 mr-1" />
                        Enhance Impact Language
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-amber-200 bg-amber-50 rounded-lg p-4">
                <div className="flex gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Timeline Needs Detail</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      The implementation timeline in the Project Description lacks specific dates and milestones.
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" className="h-8 text-xs bg-teal-700 hover:bg-teal-800">
                        <Sparkles className="h-3 w-3 mr-1" />
                        Generate Timeline
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-amber-200 bg-amber-50 rounded-lg p-4">
                <div className="flex gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Readability Concerns</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      Some sentences in the Project Description exceed recommended length. Consider breaking them up.
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" className="h-8 text-xs bg-teal-700 hover:bg-teal-800">
                        <Sparkles className="h-3 w-3 mr-1" />
                        Improve Readability
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="passed" className="space-y-4 mt-0">
              <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Organization Overview Complete</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      The Organization Overview section is complete and meets all requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Word Count Requirements Met</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      All completed sections are within the required word count limits.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Project Description Structure</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      The Project Description follows the recommended structure with clear sections.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

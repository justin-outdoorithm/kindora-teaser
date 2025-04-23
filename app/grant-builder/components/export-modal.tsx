"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { X, Download, FileText, Sparkles, CheckCircle, AlertCircle } from "lucide-react"

interface ExportModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ExportModal({ isOpen, onClose }: ExportModalProps) {
  const [exportFormat, setExportFormat] = useState("docx")
  const [isExporting, setIsExporting] = useState(false)
  const [isOptimizing, setIsOptimizing] = useState(false)
  const [optimizationProgress, setOptimizationProgress] = useState(0)
  const [isOptimized, setIsOptimized] = useState(false)
  const [optimizationIssues, setOptimizationIssues] = useState([
    { id: 1, fixed: false, text: "Added missing citations to support evidence-based approach" },
    { id: 2, fixed: false, text: "Enhanced impact language in Project Description" },
    { id: 3, fixed: false, text: "Added specific metrics to Evaluation Plan" },
    { id: 4, fixed: false, text: "Generated SMART goals for Goals & Objectives section" },
  ])

  const handleOptimize = () => {
    setIsOptimizing(true)
    setOptimizationProgress(0)

    // Simulate optimization progress
    const interval = setInterval(() => {
      setOptimizationProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsOptimizing(false)
          setIsOptimized(true)

          // Mark issues as fixed
          setOptimizationIssues((prev) => prev.map((issue) => ({ ...issue, fixed: true })))

          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  const handleExport = () => {
    setIsExporting(true)

    // Simulate export with a delay
    setTimeout(() => {
      setIsExporting(false)
      onClose()
    }, 2000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader className="border-b border-gray-200 pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle>Export Grant</DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>

        <div className="p-4">
          <Tabs defaultValue="export">
            <TabsList className="w-full grid grid-cols-2 mb-6">
              <TabsTrigger value="export">Export Options</TabsTrigger>
              <TabsTrigger value="optimize">AI Optimization</TabsTrigger>
            </TabsList>

            <TabsContent value="export" className="space-y-6 mt-0">
              <div>
                <h3 className="text-sm font-medium mb-3">Export Format</h3>
                <RadioGroup
                  defaultValue={exportFormat}
                  onValueChange={setExportFormat}
                  className="grid grid-cols-3 gap-4"
                >
                  <div>
                    <RadioGroupItem value="docx" id="docx" className="peer sr-only" />
                    <Label
                      htmlFor="docx"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-700 [&:has([data-state=checked])]:border-teal-700"
                    >
                      <FileText className="h-6 w-6 mb-2" />
                      <span className="text-sm font-medium">Word (DOCX)</span>
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem value="pdf" id="pdf" className="peer sr-only" />
                    <Label
                      htmlFor="pdf"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-700 [&:has([data-state=checked])]:border-teal-700"
                    >
                      <FileText className="h-6 w-6 mb-2" />
                      <span className="text-sm font-medium">PDF</span>
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem value="txt" id="txt" className="peer sr-only" />
                    <Label
                      htmlFor="txt"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-700 [&:has([data-state=checked])]:border-teal-700"
                    >
                      <FileText className="h-6 w-6 mb-2" />
                      <span className="text-sm font-medium">Plain Text</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-3">Sections to Include</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="section-all" defaultChecked />
                    <label
                      htmlFor="section-all"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      All Sections
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="section-overview" />
                    <label
                      htmlFor="section-overview"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Organization Overview
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="section-project" />
                    <label
                      htmlFor="section-project"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Project Description
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="section-goals" />
                    <label
                      htmlFor="section-goals"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Goals & Objectives
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="section-budget" />
                    <label
                      htmlFor="section-budget"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Budget & Justification
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="section-evaluation" />
                    <label
                      htmlFor="section-evaluation"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Evaluation Plan
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="section-sustainability" />
                    <label
                      htmlFor="section-sustainability"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Sustainability Plan
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button className="bg-teal-700 hover:bg-teal-800 gap-2" onClick={handleExport} disabled={isExporting}>
                  {isExporting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Exporting...</span>
                    </>
                  ) : (
                    <>
                      <Download className="h-4 w-4" />
                      <span>Export</span>
                    </>
                  )}
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="optimize" className="space-y-6 mt-0">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-teal-700 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">AI-Powered Grant Optimization</h3>
                    <p className="text-sm text-gray-700 mt-1">
                      Before exporting, let Kira optimize your grant to maximize your chances of success. Our AI will:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-700" />
                        <span>Fix compliance issues</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-700" />
                        <span>Enhance language for impact</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-700" />
                        <span>Ensure alignment with funder priorities</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-700" />
                        <span>Add missing components</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {isOptimizing ? (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Optimizing Your Grant...</h3>
                  <Progress value={optimizationProgress} className="h-2 mb-2" />
                  <p className="text-sm text-gray-500">
                    This may take a minute. Kira is analyzing and improving your grant.
                  </p>
                </div>
              ) : isOptimized ? (
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-gray-900">Optimization Complete!</h3>
                        <p className="text-sm text-gray-700 mt-1">
                          Kira has successfully optimized your grant. Your compliance score has increased from 78% to
                          93%.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-3">Issues Fixed</h3>
                    <div className="space-y-2">
                      {optimizationIssues.map((issue) => (
                        <div
                          key={issue.id}
                          className="flex items-start gap-2 bg-gray-50 border border-gray-200 rounded-md p-3"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <div className="text-sm">{issue.text}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">Issues Detected</h3>
                      <p className="text-sm text-gray-700 mt-1">
                        Kira has detected several issues that could be fixed before exporting:
                      </p>
                      <ul className="mt-2 space-y-1 text-sm text-gray-700">
                        {optimizationIssues.map((issue) => (
                          <li key={issue.id} className="flex items-center gap-2">
                            <AlertCircle className="h-4 w-4 text-amber-600" />
                            <span>{issue.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={onClose}>
                  Skip
                </Button>
                {isOptimized ? (
                  <Button className="bg-teal-700 hover:bg-teal-800 gap-2" onClick={handleExport}>
                    <Download className="h-4 w-4" />
                    <span>Export Optimized Grant</span>
                  </Button>
                ) : (
                  <Button
                    className="bg-teal-700 hover:bg-teal-800 gap-2"
                    onClick={handleOptimize}
                    disabled={isOptimizing}
                  >
                    <Sparkles className="h-4 w-4" />
                    <span>Optimize Now</span>
                  </Button>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Link,
  ImageIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Heading1,
  Heading2,
} from "lucide-react"
import { Sparkles, Wand2, MessageSquare, Bot, Zap } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface RichTextEditorProps {
  content: string
  onChange: (content: string) => void
}

export function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [selectedText, setSelectedText] = useState("")
  const [showAiOptions, setShowAiOptions] = useState(false)
  const [aiSuggestions, setAiSuggestions] = useState<
    {
      original: string
      improved: string
      visible: boolean
    }[]
  >([])

  const handleFormatting = (format: string) => {
    // In a real implementation, this would apply formatting to the selected text
    // For this demo, we'll just show a placeholder implementation
    console.log(`Applying ${format} formatting`)
  }

  const handleTextSelection = () => {
    const selection = window.getSelection()
    if (selection && selection.toString().length > 0) {
      setSelectedText(selection.toString())
      setShowAiOptions(true)
    } else {
      setShowAiOptions(false)
    }
  }

  const improveText = () => {
    if (!selectedText) return

    // In a real implementation, this would call an AI API
    // For this demo, we'll simulate an improved version
    const improved = selectedText
      .replace(/improve/g, "enhance")
      .replace(/good/g, "excellent")
      .replace(/increase/g, "significantly boost")

    setAiSuggestions([
      ...aiSuggestions,
      {
        original: selectedText,
        improved,
        visible: true,
      },
    ])

    setShowAiOptions(false)
  }

  const simplifyText = () => {
    if (!selectedText) return

    // Simulate simplified text
    const simplified = selectedText
      .replace(/utilize/g, "use")
      .replace(/implement/g, "use")
      .replace(/facilitate/g, "help")

    setAiSuggestions([
      ...aiSuggestions,
      {
        original: selectedText,
        improved: simplified,
        visible: true,
      },
    ])

    setShowAiOptions(false)
  }

  const expandText = () => {
    if (!selectedText) return

    // Simulate expanded text
    const expanded = `${selectedText} This expanded content provides additional context and details that strengthen your narrative. It includes specific examples and evidence-based reasoning that aligns with the funder's priorities.`

    setAiSuggestions([
      ...aiSuggestions,
      {
        original: selectedText,
        improved: expanded,
        visible: true,
      },
    ])

    setShowAiOptions(false)
  }

  const applySuggestion = (index: number) => {
    const suggestion = aiSuggestions[index]
    const newContent = content.replace(suggestion.original, suggestion.improved)
    onChange(newContent)

    // Remove the suggestion
    const newSuggestions = [...aiSuggestions]
    newSuggestions.splice(index, 1)
    setAiSuggestions(newSuggestions)
  }

  const dismissSuggestion = (index: number) => {
    const newSuggestions = [...aiSuggestions]
    newSuggestions.splice(index, 1)
    setAiSuggestions(newSuggestions)
  }

  return (
    <div
      className={`border rounded-lg transition-shadow ${isFocused ? "shadow-md border-teal-500" : "border-gray-200"}`}
    >
      <div className="border-b border-gray-200 p-2 flex flex-wrap gap-1 bg-gray-50 rounded-t-lg">
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0"
          onClick={() => handleFormatting("bold")}
          aria-label="Bold"
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0"
          onClick={() => handleFormatting("italic")}
          aria-label="Italic"
        >
          <Italic className="h-4 w-4" />
        </Button>
        <div className="h-6 w-px bg-gray-300 mx-1"></div>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0"
          onClick={() => handleFormatting("h1")}
          aria-label="Heading 1"
        >
          <Heading1 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0"
          onClick={() => handleFormatting("h2")}
          aria-label="Heading 2"
        >
          <Heading2 className="h-4 w-4" />
        </Button>
        <div className="h-6 w-px bg-gray-300 mx-1"></div>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0"
          onClick={() => handleFormatting("bullet-list")}
          aria-label="Bullet List"
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0"
          onClick={() => handleFormatting("numbered-list")}
          aria-label="Numbered List"
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
        <div className="h-6 w-px bg-gray-300 mx-1"></div>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0"
          onClick={() => handleFormatting("align-left")}
          aria-label="Align Left"
        >
          <AlignLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0"
          onClick={() => handleFormatting("align-center")}
          aria-label="Align Center"
        >
          <AlignCenter className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0"
          onClick={() => handleFormatting("align-right")}
          aria-label="Align Right"
        >
          <AlignRight className="h-4 w-4" />
        </Button>
        <div className="h-6 w-px bg-gray-300 mx-1"></div>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0"
          onClick={() => handleFormatting("link")}
          aria-label="Insert Link"
        >
          <Link className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0"
          onClick={() => handleFormatting("image")}
          aria-label="Insert Image"
        >
          <ImageIcon className="h-4 w-4" />
        </Button>

        <div className="h-6 w-px bg-gray-300 mx-1"></div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-teal-700"
                onClick={() => handleFormatting("ai-complete")}
                aria-label="AI Complete"
              >
                <Wand2 className="h-4 w-4 mr-1" />
                <span className="text-xs">Complete</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Let AI complete your thought</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-teal-700"
                onClick={() => handleFormatting("ai-improve")}
                aria-label="AI Improve"
              >
                <Zap className="h-4 w-4 mr-1" />
                <span className="text-xs">Improve</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Improve selected text with AI</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-teal-700"
                onClick={() => handleFormatting("ai-ask")}
                aria-label="Ask Kira"
              >
                <Bot className="h-4 w-4 mr-1" />
                <span className="text-xs">Ask Kira</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Ask Kira about this section</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="relative">
        <Textarea
          value={content}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onMouseUp={handleTextSelection}
          onKeyUp={handleTextSelection}
          className="min-h-[400px] p-4 rounded-t-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="Start writing your content here..."
        />

        {/* AI Selection Options */}
        {showAiOptions && (
          <div
            className="absolute bg-white border border-gray-200 rounded-md shadow-md p-1 z-10"
            style={{ top: "calc(50% - 20px)", left: "calc(50% - 100px)" }}
          >
            <div className="flex gap-1">
              <Button size="sm" variant="ghost" className="h-8 text-xs" onClick={improveText}>
                <Zap className="h-3 w-3 mr-1 text-amber-500" /> Improve
              </Button>
              <Button size="sm" variant="ghost" className="h-8 text-xs" onClick={simplifyText}>
                <Sparkles className="h-3 w-3 mr-1 text-blue-500" /> Simplify
              </Button>
              <Button size="sm" variant="ghost" className="h-8 text-xs" onClick={expandText}>
                <MessageSquare className="h-3 w-3 mr-1 text-teal-500" /> Expand
              </Button>
            </div>
          </div>
        )}

        {/* AI Suggestions */}
        {aiSuggestions.length > 0 && (
          <div className="absolute bottom-4 right-4 w-80 max-h-60 overflow-y-auto bg-white border border-teal-200 rounded-md shadow-md z-10">
            <div className="p-2 bg-teal-50 border-b border-teal-200 flex items-center">
              <Sparkles className="h-4 w-4 text-teal-700 mr-2" />
              <span className="text-sm font-medium text-teal-700">AI Suggestions</span>
            </div>
            <div className="p-2 space-y-2">
              {aiSuggestions.map((suggestion, index) => (
                <div key={index} className="bg-gray-50 p-2 rounded border border-gray-200">
                  <p className="text-xs text-gray-500 mb-1">Original:</p>
                  <p className="text-xs text-gray-700 mb-2 line-clamp-2">{suggestion.original}</p>
                  <p className="text-xs text-gray-500 mb-1">Improved:</p>
                  <p className="text-xs text-gray-700 mb-2 line-clamp-3">{suggestion.improved}</p>
                  <div className="flex justify-end gap-1">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-6 text-xs px-2"
                      onClick={() => dismissSuggestion(index)}
                    >
                      Dismiss
                    </Button>
                    <Button
                      size="sm"
                      className="h-6 text-xs px-2 bg-teal-700 hover:bg-teal-800"
                      onClick={() => applySuggestion(index)}
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Writing Assistant Indicator */}
        <div className="absolute bottom-4 left-4 bg-teal-50 border border-teal-200 rounded-full px-3 py-1 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-teal-700" />
          <span className="text-xs font-medium text-teal-700">Kira is analyzing your writing</span>
        </div>
      </div>
    </div>
  )
}

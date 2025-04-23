"use client"

import type React from "react"

import { useState } from "react"
import { DashboardLayout } from "@/app/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  Search,
  Filter,
  ArrowUpDown,
  Star,
  Building,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  X,
  Download,
  Info,
  AlertCircle,
  CheckCircle2,
  Clock,
  FileText,
  ThumbsDown,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

// Sample funder data
const FUNDERS = [
  {
    id: 1,
    name: "The Education Foundation",
    matchScore: 92,
    focus: ["Education", "Youth Development"],
    avgGrant: "$25,000 - $75,000",
    grantRange: [25000, 75000],
    deadline: "Rolling",
    location: "National",
    type: "Foundation",
    assets: "$25M",
    annualGiving: "$2.5M",
    status: "Researching",
    starred: true,
    description:
      "The Education Foundation supports innovative educational programs that improve outcomes for underserved youth.",
    priorities: ["K-12 Education", "After-school Programs", "Teacher Development"],
    eligibility: ["501(c)(3) organizations", "Public schools", "Educational institutions"],
    notes: "Strong alignment with our mission. Previous grants to similar organizations.",
  },
  {
    id: 2,
    name: "Community Impact Fund",
    matchScore: 87,
    focus: ["Community Development", "Education"],
    avgGrant: "$10,000 - $50,000",
    grantRange: [10000, 50000],
    deadline: "June 30, 2025",
    location: "Regional",
    type: "Foundation",
    assets: "$15M",
    annualGiving: "$1.2M",
    status: "Outreach",
    starred: false,
    description:
      "The Community Impact Fund invests in organizations that strengthen communities through education, economic development, and social services.",
    priorities: ["Community Centers", "Workforce Development", "Family Support Services"],
    eligibility: ["501(c)(3) organizations", "Community-based organizations"],
    notes: "Focuses on our geographic area. Potential for multi-year funding.",
  },
  {
    id: 3,
    name: "Johnson Family Foundation",
    matchScore: 85,
    focus: ["Arts & Culture", "Education"],
    avgGrant: "$15,000 - $40,000",
    grantRange: [15000, 40000],
    deadline: "September 15, 2025",
    location: "National",
    type: "Family Foundation",
    assets: "$18M",
    annualGiving: "$900K",
    status: "Application",
    starred: true,
    description: "The Johnson Family Foundation supports arts education and cultural programs that enrich communities.",
    priorities: ["Arts Education", "Cultural Preservation", "Community Arts Programs"],
    eligibility: ["501(c)(3) organizations", "Arts organizations"],
    notes: "Board member has connection. Strong interest in our arts program.",
  },
  {
    id: 4,
    name: "Tech for Good Initiative",
    matchScore: 82,
    focus: ["Technology", "Education", "Innovation"],
    avgGrant: "$20,000 - $100,000",
    grantRange: [20000, 100000],
    deadline: "Rolling",
    location: "National",
    type: "Corporate Foundation",
    assets: "$50M",
    annualGiving: "$5M",
    status: "Researching",
    starred: false,
    description:
      "The Tech for Good Initiative supports organizations using technology to solve social problems and improve educational outcomes.",
    priorities: ["EdTech", "Digital Inclusion", "STEM Education"],
    eligibility: ["501(c)(3) organizations", "Educational institutions", "Tech nonprofits"],
    notes: "Interested in our digital literacy program. Need to emphasize tech components.",
  },
  {
    id: 5,
    name: "Regional Arts Council",
    matchScore: 78,
    focus: ["Arts & Culture", "Community Development"],
    avgGrant: "$5,000 - $25,000",
    grantRange: [5000, 25000],
    deadline: "May 1, 2025",
    location: "Regional",
    type: "Government",
    assets: "N/A",
    annualGiving: "$800K",
    status: "Declined",
    starred: false,
    description:
      "The Regional Arts Council provides grants to support arts and cultural activities that enhance community life.",
    priorities: ["Community Arts", "Public Art", "Arts Access"],
    eligibility: ["501(c)(3) organizations", "Local arts organizations", "Individual artists"],
    notes: "Previous application declined. Consider reapplying with stronger community focus.",
  },
  {
    id: 6,
    name: "Children's Future Fund",
    matchScore: 76,
    focus: ["Youth Development", "Education"],
    avgGrant: "$10,000 - $30,000",
    grantRange: [10000, 30000],
    deadline: "August 15, 2025",
    location: "National",
    type: "Foundation",
    assets: "$12M",
    annualGiving: "$1M",
    status: "Awarded",
    starred: false,
    description:
      "The Children's Future Fund invests in programs that improve outcomes for children and youth through education and development opportunities.",
    priorities: ["Early Childhood Education", "Youth Mentoring", "Academic Support"],
    eligibility: ["501(c)(3) organizations", "Youth-serving organizations"],
    notes: "Currently funded. Strong relationship with program officer.",
  },
  {
    id: 7,
    name: "Environmental Education Trust",
    matchScore: 74,
    focus: ["Environment", "Education"],
    avgGrant: "$8,000 - $35,000",
    grantRange: [8000, 35000],
    deadline: "October 31, 2025",
    location: "National",
    type: "Foundation",
    assets: "$20M",
    annualGiving: "$1.5M",
    status: "Researching",
    starred: false,
    description:
      "The Environmental Education Trust supports programs that connect youth with nature and promote environmental stewardship.",
    priorities: ["Environmental Education", "Outdoor Learning", "Conservation"],
    eligibility: ["501(c)(3) organizations", "Educational institutions", "Environmental organizations"],
    notes: "Potential fit for our outdoor education program. Need to emphasize environmental components.",
  },
  {
    id: 8,
    name: "Health & Wellness Foundation",
    matchScore: 71,
    focus: ["Health", "Youth Development"],
    avgGrant: "$15,000 - $60,000",
    grantRange: [15000, 60000],
    deadline: "March 15, 2026",
    location: "National",
    type: "Foundation",
    assets: "$30M",
    annualGiving: "$2.2M",
    status: "Researching",
    starred: false,
    description:
      "The Health & Wellness Foundation funds programs that promote physical and mental health, particularly for underserved populations.",
    priorities: ["Youth Mental Health", "Physical Activity Programs", "Health Education"],
    eligibility: ["501(c)(3) organizations", "Healthcare organizations", "Community health programs"],
    notes: "Could be a fit for our wellness curriculum. Need to highlight health outcomes.",
  },
]

// Status options with colors
const STATUS_OPTIONS = [
  { value: "Researching", label: "Researching", color: "bg-blue-100 text-blue-800" },
  { value: "Outreach", label: "Outreach", color: "bg-purple-100 text-purple-800" },
  { value: "Application", label: "Application", color: "bg-yellow-100 text-yellow-800" },
  { value: "Submitted", label: "Submitted", color: "bg-orange-100 text-orange-800" },
  { value: "Awarded", label: "Awarded", color: "bg-green-100 text-green-800" },
  { value: "Declined", label: "Declined", color: "bg-red-100 text-red-800" },
]

// Focus area options
const FOCUS_AREAS = [
  "Education",
  "Youth Development",
  "Arts & Culture",
  "Community Development",
  "Technology",
  "Innovation",
  "Environment",
  "Health",
]

// Funder type options
const FUNDER_TYPES = ["Foundation", "Family Foundation", "Corporate Foundation", "Government", "Individual"]

// Location options
const LOCATIONS = ["National", "Regional", "Local"]

// Decline reasons
const DECLINE_REASONS = [
  "Grant size too small",
  "Deadline doesn't fit our timeline",
  "Mission alignment is weak",
  "Already applied to this funder",
  "Eligibility requirements don't match",
  "Geographic focus doesn't include us",
  "Too competitive",
  "Limited capacity to apply",
]

export default function FunderMatchesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFunder, setSelectedFunder] = useState<number | null>(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [filters, setFilters] = useState({
    focusAreas: [] as string[],
    funderTypes: [] as string[],
    locations: [] as string[],
    statuses: [] as string[],
    minMatchScore: 0,
    minGrantSize: 0,
    maxGrantSize: 100000,
    starred: false,
  })
  const [sortBy, setSortBy] = useState("matchScore")
  const [sortOrder, setSortOrder] = useState("desc")

  // Dialog states
  const [generateDialogOpen, setGenerateDialogOpen] = useState(false)
  const [declineDialogOpen, setDeclineDialogOpen] = useState(false)
  const [declineReasons, setDeclineReasons] = useState<string[]>([])
  const [declineNotes, setDeclineNotes] = useState("")

  // Filter funders based on search term and filters
  const filteredFunders = FUNDERS.filter((funder) => {
    // Search term filter
    if (
      searchTerm &&
      !funder.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !funder.focus.some((f) => f.toLowerCase().includes(searchTerm.toLowerCase()))
    ) {
      return false
    }

    // Focus areas filter
    if (filters.focusAreas.length > 0 && !funder.focus.some((f) => filters.focusAreas.includes(f))) {
      return false
    }

    // Funder types filter
    if (filters.funderTypes.length > 0 && !filters.funderTypes.includes(funder.type)) {
      return false
    }

    // Locations filter
    if (filters.locations.length > 0 && !filters.locations.includes(funder.location)) {
      return false
    }

    // Statuses filter
    if (filters.statuses.length > 0 && !filters.statuses.includes(funder.status)) {
      return false
    }

    // Match score filter
    if (funder.matchScore < filters.minMatchScore) {
      return false
    }

    // Grant size filter
    if (funder.grantRange[0] > filters.maxGrantSize || funder.grantRange[1] < filters.minGrantSize) {
      return false
    }

    // Starred filter
    if (filters.starred && !funder.starred) {
      return false
    }

    return true
  })

  // Sort funders
  const sortedFunders = [...filteredFunders].sort((a, b) => {
    let comparison = 0

    switch (sortBy) {
      case "matchScore":
        comparison = a.matchScore - b.matchScore
        break
      case "name":
        comparison = a.name.localeCompare(b.name)
        break
      case "grantSize":
        comparison = a.grantRange[0] - b.grantRange[0]
        break
      case "deadline":
        // Sort "Rolling" deadlines last
        if (a.deadline === "Rolling" && b.deadline !== "Rolling") return 1
        if (a.deadline !== "Rolling" && b.deadline === "Rolling") return -1
        comparison = a.deadline.localeCompare(b.deadline)
        break
      default:
        comparison = 0
    }

    return sortOrder === "asc" ? comparison : -comparison
  })

  const toggleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(field)
      setSortOrder("desc")
    }
  }

  const toggleFilter = (filterType: string, value: string) => {
    setFilters((prev) => {
      const currentFilters = prev[filterType as keyof typeof prev] as string[]
      if (currentFilters.includes(value)) {
        return {
          ...prev,
          [filterType]: currentFilters.filter((f) => f !== value),
        }
      } else {
        return {
          ...prev,
          [filterType]: [...currentFilters, value],
        }
      }
    })
  }

  const resetFilters = () => {
    setFilters({
      focusAreas: [],
      funderTypes: [],
      locations: [],
      statuses: [],
      minMatchScore: 0,
      minGrantSize: 0,
      maxGrantSize: 100000,
      starred: false,
    })
  }

  const getStatusColor = (status: string) => {
    const statusOption = STATUS_OPTIONS.find((option) => option.value === status)
    return statusOption ? statusOption.color : "bg-gray-100 text-gray-800"
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Researching":
        return <Search className="h-3.5 w-3.5 mr-1" />
      case "Outreach":
        return <ExternalLink className="h-3.5 w-3.5 mr-1" />
      case "Application":
        return <Clock className="h-3.5 w-3.5 mr-1" />
      case "Submitted":
        return <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
      case "Awarded":
        return <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
      case "Declined":
        return <X className="h-3.5 w-3.5 mr-1" />
      default:
        return null
    }
  }

  const toggleStar = (id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    // In a real app, this would update the database
    // For now, we'll just update the local state
    const updatedFunders = FUNDERS.map((funder) => {
      if (funder.id === id) {
        return { ...funder, starred: !funder.starred }
      }
      return funder
    })
    // This is just for demonstration - in a real app we would update state properly
    console.log("Toggled star for funder", id)
  }

  const handleGeneratePackage = () => {
    // In a real app, this would generate the package and update the count
    console.log("Generating package for funder", selectedFunder)
    setGenerateDialogOpen(false)
    // Show success message or redirect
  }

  const handleDeclineMatch = () => {
    // In a real app, this would update the database
    console.log("Declined match for funder", selectedFunder, "reasons:", declineReasons, "notes:", declineNotes)
    setDeclineDialogOpen(false)
    setDeclineReasons([])
    setDeclineNotes("")
    // Show success message or update UI
  }

  const toggleDeclineReason = (reason: string) => {
    if (declineReasons.includes(reason)) {
      setDeclineReasons(declineReasons.filter((r) => r !== reason))
    } else {
      setDeclineReasons([...declineReasons, reason])
    }
  }

  const activeFilterCount =
    filters.focusAreas.length +
    filters.funderTypes.length +
    filters.locations.length +
    filters.statuses.length +
    (filters.minMatchScore > 0 ? 1 : 0) +
    (filters.minGrantSize > 0 || filters.maxGrantSize < 100000 ? 1 : 0) +
    (filters.starred ? 1 : 0)

  // Calculate average grant size
  const calculateAverageGrantSize = () => {
    if (FUNDERS.length === 0) return "$0"
    const total = FUNDERS.reduce((sum, funder) => sum + (funder.grantRange[0] + funder.grantRange[1]) / 2, 0)
    const average = total / FUNDERS.length
    return `$${Math.round(average).toLocaleString()}`
  }

  // Get the selected funder
  const selectedFunderData = selectedFunder ? FUNDERS.find((f) => f.id === selectedFunder) : null

  return (
    <DashboardLayout activeTab="Matches">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Funder Matches</h1>
            <p className="text-gray-600">{filteredFunders.length} matches found based on your organization's profile</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" className="border-teal-700 text-teal-700 hover:bg-teal-50">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button className="bg-teal-700 hover:bg-teal-800">Run New Match</Button>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search funders by name or focus area..."
                className="pl-10 pr-4 py-2 border-gray-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className={`border-gray-300 ${isFilterOpen ? "bg-gray-100" : ""}`}
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="ml-2 bg-teal-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {activeFilterCount}
                  </span>
                )}
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-gray-300">
                    <ArrowUpDown className="h-4 w-4 mr-2" />
                    Sort
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => toggleSort("matchScore")}>
                    <div className="flex items-center justify-between w-full">
                      <span>Match Score</span>
                      {sortBy === "matchScore" && (
                        <span>
                          {sortOrder === "desc" ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronUp className="h-4 w-4" />
                          )}
                        </span>
                      )}
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toggleSort("name")}>
                    <div className="flex items-center justify-between w-full">
                      <span>Name</span>
                      {sortBy === "name" && (
                        <span>
                          {sortOrder === "desc" ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronUp className="h-4 w-4" />
                          )}
                        </span>
                      )}
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toggleSort("grantSize")}>
                    <div className="flex items-center justify-between w-full">
                      <span>Grant Size</span>
                      {sortBy === "grantSize" && (
                        <span>
                          {sortOrder === "desc" ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronUp className="h-4 w-4" />
                          )}
                        </span>
                      )}
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toggleSort("deadline")}>
                    <div className="flex items-center justify-between w-full">
                      <span>Deadline</span>
                      {sortBy === "deadline" && (
                        <span>
                          {sortOrder === "desc" ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronUp className="h-4 w-4" />
                          )}
                        </span>
                      )}
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Filter Panel */}
          {isFilterOpen && (
            <div className="mt-4 border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-900">Filters</h3>
                <Button variant="link" className="h-auto p-0 text-teal-700" onClick={resetFilters}>
                  Reset all
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Focus Areas */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Focus Areas</h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                    {FOCUS_AREAS.map((focus) => (
                      <div key={focus} className="flex items-center">
                        <Checkbox
                          id={`focus-${focus}`}
                          checked={filters.focusAreas.includes(focus)}
                          onCheckedChange={() => toggleFilter("focusAreas", focus)}
                          className="mr-2"
                        />
                        <label htmlFor={`focus-${focus}`} className="text-sm cursor-pointer">
                          {focus}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Funder Types */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Funder Type</h4>
                  <div className="space-y-2">
                    {FUNDER_TYPES.map((type) => (
                      <div key={type} className="flex items-center">
                        <Checkbox
                          id={`type-${type}`}
                          checked={filters.funderTypes.includes(type)}
                          onCheckedChange={() => toggleFilter("funderTypes", type)}
                          className="mr-2"
                        />
                        <label htmlFor={`type-${type}`} className="text-sm cursor-pointer">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Locations */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Location</h4>
                  <div className="space-y-2">
                    {LOCATIONS.map((location) => (
                      <div key={location} className="flex items-center">
                        <Checkbox
                          id={`location-${location}`}
                          checked={filters.locations.includes(location)}
                          onCheckedChange={() => toggleFilter("locations", location)}
                          className="mr-2"
                        />
                        <label htmlFor={`location-${location}`} className="text-sm cursor-pointer">
                          {location}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Status</h4>
                  <div className="space-y-2">
                    {STATUS_OPTIONS.map((status) => (
                      <div key={status.value} className="flex items-center">
                        <Checkbox
                          id={`status-${status.value}`}
                          checked={filters.statuses.includes(status.value)}
                          onCheckedChange={() => toggleFilter("statuses", status.value)}
                          className="mr-2"
                        />
                        <label htmlFor={`status-${status.value}`} className="text-sm cursor-pointer">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${status.color}`}>
                            {getStatusIcon(status.value)}
                            {status.label}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {/* Match Score Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-sm font-medium text-gray-700">Minimum Match Score</h4>
                    <span className="text-sm font-medium text-teal-700">{filters.minMatchScore}%</span>
                  </div>
                  <Slider
                    value={[filters.minMatchScore]}
                    min={0}
                    max={100}
                    step={5}
                    onValueChange={(value) => setFilters({ ...filters, minMatchScore: value[0] })}
                    className="py-2"
                  />
                </div>

                {/* Grant Size Range */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-sm font-medium text-gray-700">Grant Size Range</h4>
                    <span className="text-sm font-medium text-teal-700">
                      ${filters.minGrantSize.toLocaleString()} - ${filters.maxGrantSize.toLocaleString()}
                    </span>
                  </div>
                  <Slider
                    value={[filters.minGrantSize, filters.maxGrantSize]}
                    min={0}
                    max={100000}
                    step={5000}
                    onValueChange={(value) =>
                      setFilters({
                        ...filters,
                        minGrantSize: value[0],
                        maxGrantSize: value[1],
                      })
                    }
                    className="py-2"
                  />
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center">
                  <Checkbox
                    id="starred-only"
                    checked={filters.starred}
                    onCheckedChange={(checked) => setFilters({ ...filters, starred: checked as boolean })}
                    className="mr-2"
                  />
                  <label htmlFor="starred-only" className="text-sm cursor-pointer">
                    Show starred funders only
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Match Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600">Total Matches</div>
            <div className="text-3xl font-bold text-gray-900">{FUNDERS.length}</div>
            <div className="text-sm text-gray-600 mt-1">Based on your profile</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600">Average Grant Size</div>
            <div className="text-3xl font-bold text-teal-700">{calculateAverageGrantSize()}</div>
            <div className="text-sm text-gray-600 mt-1">Across all matches</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600">Funder Packages Generated</div>
            <div className="text-3xl font-bold text-orange-500">12</div>
            <div className="text-sm text-gray-600 mt-1">This billing cycle</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600">Matches Remaining</div>
            <div className="text-3xl font-bold text-purple-600">13</div>
            <div className="text-sm text-gray-600 mt-1">Out of 25 total</div>
          </div>
        </div>

        {/* Funder List */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          {/* Funder Cards */}
          <div className="lg:col-span-2">
            {sortedFunders.length === 0 ? (
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                <div className="flex justify-center mb-4">
                  <AlertCircle className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No funders found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters or search criteria to find more matches.
                </p>
                <Button
                  variant="outline"
                  onClick={resetFilters}
                  className="border-teal-700 text-teal-700 hover:bg-teal-50"
                >
                  Reset Filters
                </Button>
              </div>
            ) : (
              <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-280px)] pr-2">
                {sortedFunders.map((funder) => (
                  <div
                    key={funder.id}
                    className={`bg-white rounded-lg border ${
                      selectedFunder === funder.id ? "border-teal-700 ring-1 ring-teal-700" : "border-gray-200"
                    } p-4 cursor-pointer hover:border-teal-700 transition-colors`}
                    onClick={() => setSelectedFunder(funder.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <button
                          className={`mr-3 text-2xl ${funder.starred ? "text-yellow-400" : "text-gray-300"}`}
                          onClick={(e) => toggleStar(funder.id, e)}
                          aria-label={funder.starred ? "Remove from starred" : "Add to starred"}
                        >
                          <Star className={`h-5 w-5 ${funder.starred ? "fill-current" : ""}`} />
                        </button>
                        <div>
                          <h3 className="font-medium text-gray-900">{funder.name}</h3>
                          <div className="flex flex-wrap gap-1 mt-1">
                            <Badge variant="outline" className="text-xs bg-gray-50">
                              {funder.type}
                            </Badge>
                            <Badge className={`text-xs ${getStatusColor(funder.status)}`}>
                              {getStatusIcon(funder.status)}
                              {funder.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-teal-700">{funder.matchScore}%</div>
                        <div className="h-1.5 w-12 rounded-full bg-gray-200 mt-1">
                          <div
                            className="h-1.5 rounded-full bg-teal-700"
                            style={{ width: `${funder.matchScore}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-gray-600">
                      <div>Grant: {funder.avgGrant}</div>
                      <div>Deadline: {funder.deadline}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Funder Details */}
          <div className="lg:col-span-4">
            {selectedFunder ? (
              (() => {
                const funder = FUNDERS.find((f) => f.id === selectedFunder)
                if (!funder) return null

                return (
                  <div className="bg-white rounded-lg border border-gray-200 sticky top-6">
                    <div className="p-4 border-b border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-bold text-gray-900">{funder.name}</h2>
                        <button
                          className={`text-2xl ${funder.starred ? "text-yellow-400" : "text-gray-300"}`}
                          onClick={(e) => toggleStar(funder.id, e)}
                          aria-label={funder.starred ? "Remove from starred" : "Add to starred"}
                        >
                          <Star className={`h-5 w-5 ${funder.starred ? "fill-current" : ""}`} />
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs bg-gray-50">
                          <Building className="h-3 w-3 mr-1" />
                          {funder.type}
                        </Badge>
                        <Badge variant="outline" className="text-xs bg-gray-50">
                          <MapPin className="h-3 w-3 mr-1" />
                          {funder.location}
                        </Badge>
                        <Badge className={`text-xs ${getStatusColor(funder.status)}`}>
                          {getStatusIcon(funder.status)}
                          {funder.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-4 border-b border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm text-gray-600">Match Score</div>
                        <div className="font-bold text-teal-700">{funder.matchScore}%</div>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-200 mb-4">
                        <div className="h-2 rounded-full bg-teal-700" style={{ width: `${funder.matchScore}%` }}></div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs text-gray-500">Avg. Grant Size</div>
                          <div className="font-medium">{funder.avgGrant}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Deadline</div>
                          <div className="font-medium">{funder.deadline}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Assets</div>
                          <div className="font-medium">{funder.assets}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Annual Giving</div>
                          <div className="font-medium">{funder.annualGiving}</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border-b border-gray-200">
                      <h3 className="font-medium text-gray-900 mb-2">Description</h3>
                      <p className="text-sm text-gray-700">{funder.description}</p>
                    </div>

                    <div className="p-4 border-b border-gray-200">
                      <h3 className="font-medium text-gray-900 mb-2">Funding Priorities</h3>
                      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                        {funder.priorities.map((priority, index) => (
                          <li key={index}>{priority}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 border-b border-gray-200">
                      <h3 className="font-medium text-gray-900 mb-2">Eligibility</h3>
                      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                        {funder.eligibility.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 mb-2">Notes</h3>
                      <p className="text-sm text-gray-700">{funder.notes}</p>
                    </div>

                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <div className="flex space-x-2">
                        <Button
                          className="flex-1 bg-teal-700 hover:bg-teal-800"
                          onClick={() => setGenerateDialogOpen(true)}
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Generate Funder Package
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 border-red-500 text-red-500 hover:bg-red-50"
                          onClick={() => setDeclineDialogOpen(true)}
                        >
                          <ThumbsDown className="h-4 w-4 mr-2" />
                          Pass on Match
                        </Button>
                        <Button variant="outline" className="flex-1 border-gray-300">
                          View Detailed Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })()
            ) : (
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Info className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Funder</h3>
                <p className="text-gray-600">Click on a funder from the list to view detailed information.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Generate Package Dialog */}
      <Dialog open={generateDialogOpen} onOpenChange={setGenerateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Generate Funder Package</DialogTitle>
            <DialogDescription>This will count as one of your monthly funder packages.</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-4">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 mr-2" />
                <div>
                  <p className="text-sm text-gray-700">
                    You have <span className="font-bold">13 packages</span> remaining this month.
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    Generating a package for <span className="font-medium">{selectedFunderData?.name}</span> will
                    provide you with:
                  </p>
                  <ul className="list-disc pl-5 text-sm text-gray-700 mt-1">
                    <li>Detailed funder analysis</li>
                    <li>Customized outreach materials</li>
                    <li>Application strategy recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setGenerateDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleGeneratePackage} className="bg-teal-700 hover:bg-teal-800">
              Generate Package
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Decline Match Dialog */}
      <Dialog open={declineDialogOpen} onOpenChange={setDeclineDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Pass on This Match</DialogTitle>
            <DialogDescription>
              Please let us know why you're passing on this match. This helps us improve future recommendations.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Reason for declining (select all that apply)</h4>
                <div className="space-y-2">
                  {DECLINE_REASONS.map((reason) => (
                    <div key={reason} className="flex items-start">
                      <Checkbox
                        id={`reason-${reason}`}
                        checked={declineReasons.includes(reason)}
                        onCheckedChange={() => toggleDeclineReason(reason)}
                        className="mr-2 mt-0.5"
                      />
                      <label htmlFor={`reason-${reason}`} className="text-sm">
                        {reason}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Additional notes (optional)</h4>
                <Textarea
                  placeholder="Add any additional context..."
                  value={declineNotes}
                  onChange={(e) => setDeclineNotes(e.target.value)}
                  className="resize-none"
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeclineDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleDeclineMatch}
              className="bg-red-500 hover:bg-red-600 text-white"
              disabled={declineReasons.length === 0}
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  )
}

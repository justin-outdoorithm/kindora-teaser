"use client"

import type React from "react"

import { useState } from "react"
import { DashboardLayout } from "@/app/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Filter,
  ArrowUpDown,
  Star,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  X,
  Download,
  CheckCircle2,
  Clock,
  FileText,
  ThumbsDown,
  Plus,
  Trash2,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FunderPackageCard } from "./components/funder-package-card"
import { FunderPackageCardSkeleton } from "./components/funder-package-card-skeleton"
import { funderPackages } from "./data/funder-packages"
import { FunderPackageModal } from "./components/funder-package-modal"

// Sample funder data
const SAVED_FUNDERS = [
  {
    id: 1,
    name: "Horizon Foundation",
    matchScore: 92,
    focus: ["Education", "Youth Development", "Environment"],
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
      "The Horizon Foundation supports innovative educational and environmental programs that improve outcomes for underserved youth.",
    priorities: ["K-12 Education", "Environmental Education", "Teacher Development"],
    eligibility: ["501(c)(3) organizations", "Public schools", "Educational institutions"],
    notes: "Strong alignment with our mission. Previous grants to similar organizations.",
    dateAdded: "Apr 15, 2023",
    lastUpdated: "May 2, 2023",
    applicationStatus: "Not Started",
    packageData: funderPackages[1],
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
    starred: true,
    description:
      "The Community Impact Fund invests in organizations that strengthen communities through education, economic development, and social services.",
    priorities: ["Community Centers", "Workforce Development", "Family Support Services"],
    eligibility: ["501(c)(3) organizations", "Community-based organizations"],
    notes: "Focuses on our geographic area. Potential for multi-year funding.",
    dateAdded: "Apr 10, 2023",
    lastUpdated: "May 5, 2023",
    applicationStatus: "In Progress",
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
    dateAdded: "Mar 28, 2023",
    lastUpdated: "Apr 30, 2023",
    applicationStatus: "Submitted",
    packageData: funderPackages[3],
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
    starred: true,
    description:
      "The Tech for Good Initiative supports organizations using technology to solve social problems and improve educational outcomes.",
    priorities: ["EdTech", "Digital Inclusion", "STEM Education"],
    eligibility: ["501(c)(3) organizations", "Educational institutions", "Tech nonprofits"],
    notes: "Interested in our digital literacy program. Need to emphasize tech components.",
    dateAdded: "Mar 15, 2023",
    lastUpdated: "Apr 20, 2023",
    applicationStatus: "Not Started",
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
    starred: true,
    description:
      "The Regional Arts Council provides grants to support arts and cultural activities that enhance community life.",
    priorities: ["Community Arts", "Public Art", "Arts Access"],
    eligibility: ["501(c)(3) organizations", "Local arts organizations", "Individual artists"],
    notes: "Previous application declined. Consider reapplying with stronger community focus.",
    dateAdded: "Feb 20, 2023",
    lastUpdated: "Apr 15, 2023",
    applicationStatus: "Rejected",
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
    starred: true,
    description:
      "The Children's Future Fund invests in programs that improve outcomes for children and youth through education and development opportunities.",
    priorities: ["Early Childhood Education", "Youth Mentoring", "Academic Support"],
    eligibility: ["501(c)(3) organizations", "Youth-serving organizations"],
    notes: "Currently funded. Strong relationship with program officer.",
    dateAdded: "Feb 10, 2023",
    lastUpdated: "May 1, 2023",
    applicationStatus: "Awarded",
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

// Application status options with colors
const APPLICATION_STATUS_OPTIONS = [
  { value: "Not Started", label: "Not Started", color: "bg-gray-100 text-gray-800" },
  { value: "In Progress", label: "In Progress", color: "bg-blue-100 text-blue-800" },
  { value: "Submitted", label: "Submitted", color: "bg-orange-100 text-orange-800" },
  { value: "Awarded", label: "Awarded", color: "bg-green-100 text-green-800" },
  { value: "Rejected", label: "Rejected", color: "bg-red-100 text-red-800" },
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

export default function SavedFundersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFunder, setSelectedFunder] = useState<number | null>(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [filters, setFilters] = useState({
    focusAreas: [] as string[],
    funderTypes: [] as string[],
    locations: [] as string[],
    statuses: [] as string[],
    applicationStatuses: [] as string[],
  })
  const [sortBy, setSortBy] = useState("dateAdded")
  const [sortOrder, setSortOrder] = useState("desc")
  const [activeTab, setActiveTab] = useState("all")
  const [removeDialogOpen, setRemoveDialogOpen] = useState(false)
  const [funderToRemove, setFunderToRemove] = useState<number | null>(null)
  const [addNoteDialogOpen, setAddNoteDialogOpen] = useState(false)
  const [noteText, setNoteText] = useState("")
  const [viewMode, setViewMode] = useState<"list" | "packages">("list")
  const [packageModalOpen, setPackageModalOpen] = useState(false)
  const [selectedPackageFunder, setSelectedPackageFunder] = useState<number | null>(null)
  const [generatePackageDialogOpen, setGeneratePackageDialogOpen] = useState(false)
  const [loadingPackages, setLoadingPackages] = useState(false)

  // Filter funders based on search term, filters, and active tab
  const filteredFunders = SAVED_FUNDERS.filter((funder) => {
    // Search term filter
    if (
      searchTerm &&
      !funder.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !funder.focus.some((f) => f.toLowerCase().includes(searchTerm.toLowerCase()))
    ) {
      return false
    }

    // Tab filter
    if (activeTab === "upcoming" && funder.deadline === "Rolling") {
      return false
    }

    if (activeTab === "inProgress" && funder.applicationStatus !== "In Progress") {
      return false
    }

    if (activeTab === "submitted" && funder.applicationStatus !== "Submitted") {
      return false
    }

    if (activeTab === "awarded" && funder.applicationStatus !== "Awarded") {
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

    // Application statuses filter
    if (filters.applicationStatuses.length > 0 && !filters.applicationStatuses.includes(funder.applicationStatus)) {
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
      case "dateAdded":
        comparison = new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime()
        break
      case "lastUpdated":
        comparison = new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime()
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

  // Get funders with packages
  const fundersWithPackages = sortedFunders.filter((funder) => funder.packageData)

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
      applicationStatuses: [],
    })
  }

  const getStatusColor = (status: string) => {
    const statusOption = STATUS_OPTIONS.find((option) => option.value === status)
    return statusOption ? statusOption.color : "bg-gray-100 text-gray-800"
  }

  const getApplicationStatusColor = (status: string) => {
    const statusOption = APPLICATION_STATUS_OPTIONS.find((option) => option.value === status)
    return statusOption ? statusOption.color : "bg-gray-100 text-gray-800"
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Researching":
        return <Search className="h-3.5 w-3.5 mr-1" />
      case "Outreach":
        return <ExternalLink className="h-3.5 w-3.5 mr-1" />
      case "Application":
        return <FileText className="h-3.5 w-3.5 mr-1" />
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

  const getApplicationStatusIcon = (status: string) => {
    switch (status) {
      case "Not Started":
        return <Clock className="h-3.5 w-3.5 mr-1" />
      case "In Progress":
        return <FileText className="h-3.5 w-3.5 mr-1" />
      case "Submitted":
        return <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
      case "Awarded":
        return <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
      case "Rejected":
        return <ThumbsDown className="h-3.5 w-3.5 mr-1" />
      default:
        return null
    }
  }

  const handleRemoveFunder = (id: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    setFunderToRemove(id)
    setRemoveDialogOpen(true)
  }

  const confirmRemoveFunder = () => {
    // In a real app, this would update the database
    console.log("Removing funder", funderToRemove)
    setRemoveDialogOpen(false)
    setFunderToRemove(null)
    // Show success message or update UI
  }

  const handleAddNote = () => {
    // In a real app, this would update the database
    console.log("Adding note to funder", selectedFunder, ":", noteText)
    setAddNoteDialogOpen(false)
    setNoteText("")
    // Show success message or update UI
  }

  const handleViewPackage = (funderId: number) => {
    setSelectedPackageFunder(funderId)
    setPackageModalOpen(true)
  }

  const handleGeneratePackage = (funderId: number) => {
    setSelectedFunder(funderId)
    setGeneratePackageDialogOpen(true)
  }

  const confirmGeneratePackage = () => {
    // In a real app, this would generate the package
    setLoadingPackages(true)
    setTimeout(() => {
      setLoadingPackages(false)
      setGeneratePackageDialogOpen(false)
      // Show success message or update UI
    }, 2000)
  }

  const activeFilterCount =
    filters.focusAreas.length +
    filters.funderTypes.length +
    filters.locations.length +
    filters.statuses.length +
    filters.applicationStatuses.length

  // Get the selected funder
  const selectedFunderData = selectedFunder ? SAVED_FUNDERS.find((f) => f.id === selectedFunder) : null
  const selectedPackageFunderData = selectedPackageFunder
    ? SAVED_FUNDERS.find((f) => f.id === selectedPackageFunder)
    : null

  return (
    <DashboardLayout activeTab="Saved">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Saved Funders</h1>
            <p className="text-gray-600">{filteredFunders.length} funders saved for future reference</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" className="border-teal-700 text-teal-700 hover:bg-teal-50">
              <Download className="h-4 w-4 mr-2" />
              Export List
            </Button>
            <Button className="bg-teal-700 hover:bg-teal-800">
              <Search className="h-4 w-4 mr-2" />
              Find More Funders
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="bg-white border border-gray-200 p-1">
            <TabsTrigger value="all" className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700">
              All Saved
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700">
              Upcoming Deadlines
            </TabsTrigger>
            <TabsTrigger
              value="inProgress"
              className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700"
            >
              In Progress
            </TabsTrigger>
            <TabsTrigger value="submitted" className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700">
              Submitted
            </TabsTrigger>
            <TabsTrigger value="awarded" className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700">
              Awarded
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search saved funders..."
                className="pl-10 pr-4 py-2 border-gray-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <div className="flex border rounded-md overflow-hidden">
                <button
                  className={`px-3 py-2 text-sm font-medium ${
                    viewMode === "list"
                      ? "bg-teal-50 text-teal-700 border-r border-gray-200"
                      : "bg-white text-gray-700 border-r border-gray-200 hover:bg-gray-50"
                  }`}
                  onClick={() => setViewMode("list")}
                >
                  List View
                </button>
                <button
                  className={`px-3 py-2 text-sm font-medium ${
                    viewMode === "packages" ? "bg-teal-50 text-teal-700" : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setViewMode("packages")}
                >
                  Packages
                </button>
              </div>
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
                  <DropdownMenuItem onClick={() => toggleSort("dateAdded")}>
                    <div className="flex items-center justify-between w-full">
                      <span>Date Added</span>
                      {sortBy === "dateAdded" && (
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
                  <DropdownMenuItem onClick={() => toggleSort("lastUpdated")}>
                    <div className="flex items-center justify-between w-full">
                      <span>Last Updated</span>
                      {sortBy === "lastUpdated" && (
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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

                {/* Application Status */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Application Status</h4>
                  <div className="space-y-2">
                    {APPLICATION_STATUS_OPTIONS.map((status) => (
                      <div key={status.value} className="flex items-center">
                        <Checkbox
                          id={`app-status-${status.value}`}
                          checked={filters.applicationStatuses.includes(status.value)}
                          onCheckedChange={() => toggleFilter("applicationStatuses", status.value)}
                          className="mr-2"
                        />
                        <label htmlFor={`app-status-${status.value}`} className="text-sm cursor-pointer">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${status.color}`}>
                            {getApplicationStatusIcon(status.value)}
                            {status.label}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Saved Funders Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Saved</CardDescription>
              <CardTitle className="text-3xl font-bold text-gray-900">{SAVED_FUNDERS.length}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-gray-500">From all sources</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Applications In Progress</CardDescription>
              <CardTitle className="text-3xl font-bold text-blue-600">
                {SAVED_FUNDERS.filter((f) => f.applicationStatus === "In Progress").length}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-gray-500">Currently working on</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Applications Submitted</CardDescription>
              <CardTitle className="text-3xl font-bold text-orange-500">
                {SAVED_FUNDERS.filter((f) => f.applicationStatus === "Submitted").length}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-gray-500">Awaiting decision</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Grants Awarded</CardDescription>
              <CardTitle className="text-3xl font-bold text-green-600">
                {SAVED_FUNDERS.filter((f) => f.applicationStatus === "Awarded").length}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-gray-500">Successfully funded</div>
            </CardContent>
          </Card>
        </div>

        {/* View Mode Tabs */}
        {viewMode === "packages" ? (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Funder Packages</h2>
              <Button variant="outline" className="border-teal-700 text-teal-700 hover:bg-teal-50">
                <Plus className="h-4 w-4 mr-2" />
                Generate New Package
              </Button>
            </div>

            {fundersWithPackages.length === 0 ? (
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                <div className="flex justify-center mb-4">
                  <FileText className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No funder packages found</h3>
                <p className="text-gray-600 mb-4">
                  Generate a funder package to get detailed insights and materials for your saved funders.
                </p>
                <Button className="bg-teal-700 hover:bg-teal-800">Generate Your First Package</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loadingPackages ? (
                  <>
                    <FunderPackageCardSkeleton />
                    <FunderPackageCardSkeleton />
                    <FunderPackageCardSkeleton />
                  </>
                ) : (
                  fundersWithPackages.map((funder) => (
                    <FunderPackageCard
                      key={funder.id}
                      funder={funder}
                      onViewPackage={() => handleViewPackage(funder.id)}
                    />
                  ))
                )}
              </div>
            )}

            {/* Funders without packages */}
            {sortedFunders.filter((f) => !f.packageData).length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Funders Without Packages</h2>
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-600 text-sm">Funder</th>
                          <th className="text-left py-2 px-3 font-medium text-gray-600 text-sm">Match Score</th>
                          <th className="text-left py-2 px-3 font-medium text-gray-600 text-sm">Status</th>
                          <th className="text-left py-2 px-3 font-medium text-gray-600 text-sm">Deadline</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-600 text-sm">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sortedFunders
                          .filter((f) => !f.packageData)
                          .map((funder) => (
                            <tr key={funder.id} className="border-b border-gray-200 hover:bg-gray-50">
                              <td className="py-3 px-3">{funder.name}</td>
                              <td className="py-3 px-3">
                                <div className="font-medium text-teal-700">{funder.matchScore}%</div>
                              </td>
                              <td className="py-3 px-3">
                                <Badge className={`${getStatusColor(funder.status)}`}>
                                  {getStatusIcon(funder.status)}
                                  {funder.status}
                                </Badge>
                              </td>
                              <td className="py-3 px-3">{funder.deadline}</td>
                              <td className="py-3 px-3 text-right">
                                <Button
                                  size="sm"
                                  className="text-xs bg-teal-700 hover:bg-teal-800"
                                  onClick={() => handleGeneratePackage(funder.id)}
                                >
                                  Generate Package
                                </Button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          // List View
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
            {/* Funder Cards */}
            <div className="lg:col-span-3">
              {sortedFunders.length === 0 ? (
                <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <Star className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No saved funders found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your filters or search criteria to find your saved funders.
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
                          <div className="text-yellow-400 mr-3">
                            <Star className="h-5 w-5 fill-current" />
                          </div>
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
                              {funder.packageData && (
                                <Badge className="text-xs bg-teal-100 text-teal-800">
                                  <FileText className="h-3.5 w-3.5 mr-1" />
                                  Package
                                </Badge>
                              )}
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
                        <div className="flex justify-between">
                          <div>Grant: {funder.avgGrant}</div>
                          <div>
                            <Badge className={`text-xs ${getApplicationStatusColor(funder.applicationStatus)}`}>
                              {getApplicationStatusIcon(funder.applicationStatus)}
                              {funder.applicationStatus}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex justify-between mt-1">
                          <div>Deadline: {funder.deadline}</div>
                          <button
                            onClick={(e) => handleRemoveFunder(funder.id, e)}
                            className="text-gray-400 hover:text-red-500"
                            aria-label="Remove funder"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Funder Details */}
            <div className="lg:col-span-3">
              {selectedFunder ? (
                (() => {
                  const funder = SAVED_FUNDERS.find((f) => f.id === selectedFunder)
                  if (!funder) return null

                  return (
                    <div className="bg-white rounded-lg border border-gray-200 sticky top-6">
                      <div className="p-4 border-b border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <h2 className="text-xl font-bold text-gray-900">{funder.name}</h2>
                          <div className="text-yellow-400">
                            <Star className="h-5 w-5 fill-current" />
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs bg-gray-50">
                            {funder.type}
                          </Badge>
                          <Badge className={`text-xs ${getStatusColor(funder.status)}`}>
                            {getStatusIcon(funder.status)}
                            {funder.status}
                          </Badge>
                          <Badge className={`text-xs ${getApplicationStatusColor(funder.applicationStatus)}`}>
                            {getApplicationStatusIcon(funder.applicationStatus)}
                            {funder.applicationStatus}
                          </Badge>
                          {funder.packageData && (
                            <Badge className="text-xs bg-teal-100 text-teal-800">
                              <FileText className="h-3.5 w-3.5 mr-1" />
                              Package Available
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="p-4 border-b border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm text-gray-600">Match Score</div>
                          <div className="font-bold text-teal-700">{funder.matchScore}%</div>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200 mb-4">
                          <div
                            className="h-2 rounded-full bg-teal-700"
                            style={{ width: `${funder.matchScore}%` }}
                          ></div>
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
                            <div className="text-xs text-gray-500">Date Added</div>
                            <div className="font-medium">{funder.dateAdded}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500">Last Updated</div>
                            <div className="font-medium">{funder.lastUpdated}</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border-b border-gray-200">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium text-gray-900">Focus Areas</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {funder.focus.map((area, index) => (
                            <Badge key={index} variant="outline" className="bg-teal-50 text-teal-700 border-teal-200">
                              {area}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 border-b border-gray-200">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium text-gray-900">Notes</h3>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-xs"
                            onClick={() => setAddNoteDialogOpen(true)}
                          >
                            Add Note
                          </Button>
                        </div>
                        <p className="text-sm text-gray-700">{funder.notes}</p>
                      </div>

                      <div className="p-4 bg-gray-50 border-t border-gray-200">
                        <div className="flex space-x-2">
                          {funder.packageData ? (
                            <Button
                              className="flex-1 bg-teal-700 hover:bg-teal-800"
                              onClick={() => handleViewPackage(funder.id)}
                            >
                              <FileText className="h-4 w-4 mr-2" />
                              View Funder Package
                            </Button>
                          ) : (
                            <Button
                              className="flex-1 bg-teal-700 hover:bg-teal-800"
                              onClick={() => handleGeneratePackage(funder.id)}
                            >
                              <Plus className="h-4 w-4 mr-2" />
                              Generate Package
                            </Button>
                          )}
                          <Button variant="outline" className="flex-1 border-gray-300">
                            Start Application
                          </Button>
                          <Button
                            variant="outline"
                            className="border-red-500 text-red-500 hover:bg-red-50"
                            onClick={() => handleRemoveFunder(funder.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  )
                })()
              ) : (
                <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <Star className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Funder</h3>
                  <p className="text-gray-600">Click on a funder from the list to view detailed information.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Funder Package Modal */}
      {selectedPackageFunderData && (
        <FunderPackageModal
          isOpen={packageModalOpen}
          onClose={() => setPackageModalOpen(false)}
          funderId={selectedPackageFunder || 0}
          funderData={selectedPackageFunderData}
        />
      )}
    </DashboardLayout>
  )
}

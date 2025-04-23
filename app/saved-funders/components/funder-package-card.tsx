"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Calendar, Clock, CheckCircle2, AlertCircle } from "lucide-react"

interface FunderPackageCardProps {
  funder: any
  onViewPackage: () => void
}

export function FunderPackageCard({ funder, onViewPackage }: FunderPackageCardProps) {
  if (!funder.packageData) return null

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{funder.name}</CardTitle>
            <CardDescription>Funder Package</CardDescription>
          </div>
          <Badge
            className={`${
              funder.packageData.alignmentScore >= 80
                ? "bg-green-100 text-green-800"
                : funder.packageData.alignmentScore >= 60
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
            }`}
          >
            {funder.packageData.alignmentScore}% Match
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 text-gray-500" />
            <span>Generated: {funder.packageData.generatedDate}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-2 text-gray-500" />
            <span>Last updated: {funder.packageData.lastUpdated}</span>
          </div>
          <div className="flex items-start text-sm">
            <AlertCircle className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
            <span>Recommended ask: {funder.packageData.recommendedAsk}</span>
          </div>
          <div className="flex items-start text-sm">
            <CheckCircle2 className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
            <span>Verdict: {funder.packageData.verdict}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 flex justify-between">
        <Button variant="outline" size="sm" className="text-xs">
          <Download className="h-3.5 w-3.5 mr-1.5" />
          Download
        </Button>
        <Button size="sm" className="text-xs bg-teal-700 hover:bg-teal-800" onClick={onViewPackage}>
          <FileText className="h-3.5 w-3.5 mr-1.5" />
          View Package
        </Button>
      </CardFooter>
    </Card>
  )
}

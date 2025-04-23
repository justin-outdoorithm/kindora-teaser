"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { DashboardLayout } from "@/app/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface OrderData {
  orgName: string
  contactName: string
  contactEmail: string
  plan: string
  billingFrequency: string
  startDate: string
  initialTerm: string
  additionalPackages: number
  grantAssistant: boolean
  strategicConsultation: boolean
  crmSetup: boolean
}

export default function OrderConfirmationPage() {
  const [orderData, setOrderData] = useState<OrderData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Retrieve order data from localStorage
    const storedData = localStorage.getItem("orderData")
    if (storedData) {
      setOrderData(JSON.parse(storedData))
    }
    setIsLoading(false)
  }, [])

  const getPlanDetails = (plan: string) => {
    switch (plan) {
      case "community":
        return { name: "Community Plan", price: "$59/month", packages: 3, users: 1 }
      case "essential":
        return { name: "Essential Plan", price: "$149/month", packages: 10, users: 2 }
      case "professional":
        return { name: "Professional Plan", price: "$299/month", packages: 25, users: 3 }
      case "enterprise":
        return { name: "Enterprise Plan", price: "$999/month", packages: 50, users: 5 }
      default:
        return { name: "Unknown Plan", price: "N/A", packages: 0, users: 0 }
    }
  }

  const getBillingFrequency = (frequency: string) => {
    switch (frequency) {
      case "monthly":
        return "Monthly"
      case "quarterly":
        return "Quarterly"
      case "semi-annual":
        return "Semi-Annual"
      case "annual":
        return "Annual"
      default:
        return "Unknown"
    }
  }

  const getInitialTerm = (term: string) => {
    switch (term) {
      case "3":
        return "3 Months"
      case "6":
        return "6 Months"
      case "12":
        return "12 Months"
      default:
        return "Unknown"
    }
  }

  if (isLoading) {
    return (
      <DashboardLayout activeTab="Order">
        <div className="p-6 flex justify-center items-center h-full">
          <div className="animate-pulse">Loading order details...</div>
        </div>
      </DashboardLayout>
    )
  }

  if (!orderData) {
    return (
      <DashboardLayout activeTab="Order">
        <div className="p-6 flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Not Found</h1>
          <p className="text-gray-600 mb-6">
            We couldn't find your order details. Please try submitting your order again.
          </p>
          <Link href="/order">
            <Button className="bg-teal-700 hover:bg-teal-800">Return to Order Form</Button>
          </Link>
        </div>
      </DashboardLayout>
    )
  }

  const planDetails = getPlanDetails(orderData.plan)

  return (
    <DashboardLayout activeTab="Order">
      <div className="p-6 max-w-3xl mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-teal-700 text-white p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white rounded-full p-3">
                <Check className="h-8 w-8 text-teal-700" />
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-lg opacity-90">Thank you for joining Kindora's Early Access Program</p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Organization</h3>
                <p className="text-gray-700">{orderData.orgName}</p>
                <p className="text-gray-700">{orderData.contactName}</p>
                <p className="text-gray-700">{orderData.contactEmail}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Plan Details</h3>
                <p className="text-gray-700">
                  <span className="font-medium">{planDetails.name}</span> - {planDetails.price}
                </p>
                <p className="text-gray-700">Billed {getBillingFrequency(orderData.billingFrequency).toLowerCase()}</p>
                <p className="text-gray-700">Starting {new Date(orderData.startDate).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="flex items-center p-3 bg-teal-50 border border-teal-200 rounded-lg mb-4">
              <div className="flex-1">
                <div className="font-semibold">Organization Profile Setup</div>
                <div className="text-sm text-gray-600">One-time fee</div>
              </div>
              <div className="font-semibold text-teal-700">$150</div>
            </div>

            {orderData.additionalPackages > 0 && (
              <div className="flex items-center p-3 bg-gray-50 border border-gray-200 rounded-lg mb-4">
                <div className="flex-1">
                  <div className="font-semibold">Additional Funder Packages</div>
                  <div className="text-sm text-gray-600">{orderData.additionalPackages} packages at $29 each</div>
                </div>
                <div className="font-semibold text-gray-700">${orderData.additionalPackages * 29}</div>
              </div>
            )}

            {orderData.grantAssistant && (
              <div className="flex items-center p-3 bg-gray-50 border border-gray-200 rounded-lg mb-4">
                <div className="flex-1">
                  <div className="font-semibold">Grant Application Assistant</div>
                  <div className="text-sm text-gray-600">Per application</div>
                </div>
                <div className="font-semibold text-gray-700">$75</div>
              </div>
            )}

            {orderData.strategicConsultation && (
              <div className="flex items-center p-3 bg-gray-50 border border-gray-200 rounded-lg mb-4">
                <div className="flex-1">
                  <div className="font-semibold">Strategic Consultation</div>
                  <div className="text-sm text-gray-600">Per hour</div>
                </div>
                <div className="font-semibold text-gray-700">$300</div>
              </div>
            )}

            {orderData.crmSetup && orderData.plan !== "enterprise" && (
              <div className="flex items-center p-3 bg-gray-50 border border-gray-200 rounded-lg mb-4">
                <div className="flex-1">
                  <div className="font-semibold">CRM Setup & Integration</div>
                  <div className="text-sm text-gray-600">One-time fee</div>
                </div>
                <div className="font-semibold text-gray-700">$250</div>
              </div>
            )}

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <span className="text-sm text-gray-500 block">Initial Term</span>
                <span className="font-medium">{getInitialTerm(orderData.initialTerm)}</span>
              </div>
              <div>
                <span className="text-sm text-gray-500 block">Funder Packages</span>
                <span className="font-medium">{planDetails.packages} per month</span>
              </div>
              <div>
                <span className="text-sm text-gray-500 block">User Seats</span>
                <span className="font-medium">{planDetails.users}</span>
              </div>
            </div>

            <div className="flex justify-center">
              <Link href="/dashboard">
                <Button className="bg-teal-700 hover:bg-teal-800">Go to Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

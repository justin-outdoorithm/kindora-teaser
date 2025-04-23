"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/app/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function OrderPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    orgName: "",
    ein: "",
    contactName: "",
    contactTitle: "",
    contactEmail: "",
    contactPhone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    plan: "",
    additionalPackages: 0,
    grantAssistant: false,
    strategicConsultation: false,
    crmSetup: false,
    billingFrequency: "",
    startDate: "",
    initialTerm: "",
    termsAgreed: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handleCheckboxChange = (id: string, checked: boolean) => {
    setFormData({ ...formData, [id]: checked })
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSelectChange = (name: string, value: string | number) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Store form data in localStorage for the confirmation page
    localStorage.setItem("orderData", JSON.stringify(formData))

    // Redirect to confirmation page
    router.push("/order/confirmation")
  }

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
    window.scrollTo(0, 0)
  }

  const calculateAdditionalPackagesCost = () => {
    return formData.additionalPackages * 29
  }

  const calculateTotalCost = () => {
    let planCost = 0
    switch (formData.plan) {
      case "community":
        planCost = 59
        break
      case "essential":
        planCost = 149
        break
      case "professional":
        planCost = 299
        break
      case "enterprise":
        planCost = 999
        break
      default:
        planCost = 0
    }

    let additionalCosts = calculateAdditionalPackagesCost()

    if (formData.grantAssistant) additionalCosts += 75
    if (formData.strategicConsultation) additionalCosts += 300
    if (formData.crmSetup && formData.plan !== "enterprise") additionalCosts += 250

    return {
      setupFee: 150,
      planCost,
      additionalCosts,
      total: 150 + planCost + additionalCosts,
    }
  }

  const renderClientInformation = () => (
    <div className="p-6 border-b border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Client Information</h2>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <h3 className="font-semibold text-green-700 mb-1">Early Access Program Benefits</h3>
        <p className="text-gray-700">
          As an Early Access participant, you'll receive concierge-level service, direct access to the founding team,
          input on product features, and priority migration to our web platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <Label htmlFor="orgName" className="mb-1.5">
            Organization Name*
          </Label>
          <Input id="orgName" value={formData.orgName} onChange={handleInputChange} required />
        </div>
        <div>
          <Label htmlFor="ein" className="mb-1.5">
            EIN (if applicable)
          </Label>
          <Input id="ein" value={formData.ein} onChange={handleInputChange} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <Label htmlFor="contactName" className="mb-1.5">
            Primary Contact Name*
          </Label>
          <Input id="contactName" value={formData.contactName} onChange={handleInputChange} required />
        </div>
        <div>
          <Label htmlFor="contactTitle" className="mb-1.5">
            Title*
          </Label>
          <Input id="contactTitle" value={formData.contactTitle} onChange={handleInputChange} required />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <Label htmlFor="contactEmail" className="mb-1.5">
            Email*
          </Label>
          <Input id="contactEmail" type="email" value={formData.contactEmail} onChange={handleInputChange} required />
        </div>
        <div>
          <Label htmlFor="contactPhone" className="mb-1.5">
            Phone*
          </Label>
          <Input id="contactPhone" type="tel" value={formData.contactPhone} onChange={handleInputChange} required />
        </div>
      </div>

      <div className="mb-6">
        <Label htmlFor="address" className="mb-1.5">
          Organization Address*
        </Label>
        <Input id="address" value={formData.address} onChange={handleInputChange} required />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <Label htmlFor="city" className="mb-1.5">
            City*
          </Label>
          <Input id="city" value={formData.city} onChange={handleInputChange} required />
        </div>
        <div>
          <Label htmlFor="state" className="mb-1.5">
            State*
          </Label>
          <Input id="state" value={formData.state} onChange={handleInputChange} required />
        </div>
        <div>
          <Label htmlFor="zip" className="mb-1.5">
            ZIP*
          </Label>
          <Input id="zip" value={formData.zip} onChange={handleInputChange} required />
        </div>
      </div>
    </div>
  )

  const renderServiceSelection = () => (
    <div className="p-6 border-b border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Service Selection</h2>

      <div className="flex items-center p-4 mb-6 bg-teal-50 border border-teal-200 rounded-lg">
        <div className="flex-1">
          <div className="font-semibold">Organization Profile Setup</div>
          <div className="text-sm text-gray-600">
            One-time fee for profile creation, NTEE code assignment, and initial funder matches
          </div>
        </div>
        <div className="font-semibold text-teal-700">$150</div>
      </div>

      <div className="mb-6">
        <Label className="mb-3 block">Select Your Plan*</Label>
        <RadioGroup
          value={formData.plan}
          onValueChange={(value) => handleRadioChange("plan", value)}
          className="space-y-3"
          required
        >
          <div className="flex items-start space-x-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="community" id="community-plan" className="mt-1" />
            <div className="flex-1">
              <Label htmlFor="community-plan" className="flex justify-between cursor-pointer">
                <span>Community Plan</span>
                <span className="text-teal-700 font-semibold">$59/month</span>
              </Label>
              <p className="text-sm text-gray-600 mt-1">
                3 Funder Packages per month, 1 user seat. Best for grassroots organizations.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="essential" id="essential-plan" className="mt-1" />
            <div className="flex-1">
              <Label htmlFor="essential-plan" className="flex justify-between cursor-pointer">
                <span>Essential Plan</span>
                <span className="text-teal-700 font-semibold">$149/month</span>
              </Label>
              <p className="text-sm text-gray-600 mt-1">
                10 Funder Packages per month, 2 user seats. Best for organizations actively pursuing multiple funding
                sources.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="professional" id="professional-plan" className="mt-1" />
            <div className="flex-1">
              <Label htmlFor="professional-plan" className="flex justify-between cursor-pointer">
                <span>Professional Plan</span>
                <span className="text-teal-700 font-semibold">$299/month</span>
              </Label>
              <p className="text-sm text-gray-600 mt-1">
                25 Funder Packages per month, 3 user seats. Best for organizations with dedicated development staff.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="enterprise" id="enterprise-plan" className="mt-1" />
            <div className="flex-1">
              <Label htmlFor="enterprise-plan" className="flex justify-between cursor-pointer">
                <span>Enterprise Plan</span>
                <span className="text-teal-700 font-semibold">$999/month</span>
              </Label>
              <p className="text-sm text-gray-600 mt-1">
                50 Funder Packages per month, 5 user seats. Best for large organizations and consultancies.
              </p>
            </div>
          </div>
        </RadioGroup>
      </div>

      <div className="mb-6">
        <Label className="mb-3 block">Additional Services (Optional)</Label>
        <div className="space-y-3">
          <div className="flex items-start space-x-2 p-4 border border-gray-200 rounded-lg">
            <div className="flex-1">
              <Label className="cursor-pointer">Additional Funder Packages</Label>
              <p className="text-sm text-gray-600">$29 per additional package beyond your plan limit</p>
            </div>
            <div className="w-24">
              <Select
                value={formData.additionalPackages.toString()}
                onValueChange={(value) => handleSelectChange("additionalPackages", Number.parseInt(value))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="0" />
                </SelectTrigger>
                <SelectContent>
                  {[0, 1, 2, 3, 4, 5, 10, 15, 20].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {formData.additionalPackages > 0 && (
                <div className="text-right text-sm font-medium text-teal-700 mt-1">
                  ${calculateAdditionalPackagesCost()}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="grantAssistant"
              checked={formData.grantAssistant}
              onCheckedChange={(checked) => handleCheckboxChange("grantAssistant", checked as boolean)}
              className="mt-1"
            />
            <div>
              <Label htmlFor="grantAssistant" className="cursor-pointer">
                Grant Application Assistant
              </Label>
              <p className="text-sm text-gray-600">$75 per application (some included in higher tier plans)</p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="strategicConsultation"
              checked={formData.strategicConsultation}
              onCheckedChange={(checked) => handleCheckboxChange("strategicConsultation", checked as boolean)}
              className="mt-1"
            />
            <div>
              <Label htmlFor="strategicConsultation" className="cursor-pointer">
                Strategic Consultation
              </Label>
              <p className="text-sm text-gray-600">$300 per hour (25% discount for Enterprise plan)</p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="crmSetup"
              checked={formData.crmSetup}
              onCheckedChange={(checked) => handleCheckboxChange("crmSetup", checked as boolean)}
              className="mt-1"
            />
            <div>
              <Label htmlFor="crmSetup" className="cursor-pointer">
                CRM Setup & Integration
              </Label>
              <p className="text-sm text-gray-600">$250 one-time fee (included with Enterprise Plan)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTermsAndConditions = () => (
    <div className="p-6 border-b border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Terms & Conditions</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="startDate" className="mb-1.5">
            Service Start Date*
          </Label>
          <div className="relative">
            <Input
              id="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleInputChange}
              required
              className="pl-10"
            />
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        <div>
          <Label className="mb-1.5 block">Initial Term*</Label>
          <RadioGroup
            value={formData.initialTerm}
            onValueChange={(value) => handleRadioChange("initialTerm", value)}
            className="flex space-x-4"
            required
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="3" id="term-3" />
              <Label htmlFor="term-3" className="cursor-pointer">
                3 Months
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="6" id="term-6" />
              <Label htmlFor="term-6" className="cursor-pointer">
                6 Months
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="12" id="term-12" />
              <Label htmlFor="term-12" className="cursor-pointer">
                12 Months
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className="mt-6">
        <Label className="mb-1.5 block">Billing Frequency*</Label>
        <RadioGroup
          value={formData.billingFrequency}
          onValueChange={(value) => handleRadioChange("billingFrequency", value)}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          required
        >
          <div className="flex items-center space-x-2 border border-gray-200 rounded-md p-3">
            <RadioGroupItem value="monthly" id="monthly" />
            <Label htmlFor="monthly" className="cursor-pointer">
              Monthly
            </Label>
          </div>

          <div className="flex items-center space-x-2 border border-gray-200 rounded-md p-3">
            <RadioGroupItem value="quarterly" id="quarterly" />
            <Label htmlFor="quarterly" className="cursor-pointer">
              Quarterly
            </Label>
          </div>

          <div className="flex items-center space-x-2 border border-gray-200 rounded-md p-3">
            <RadioGroupItem value="semi-annual" id="semi-annual" />
            <Label htmlFor="semi-annual" className="cursor-pointer">
              Semi-Annual
            </Label>
          </div>

          <div className="flex items-center space-x-2 border border-gray-200 rounded-md p-3">
            <RadioGroupItem value="annual" id="annual" />
            <Label htmlFor="annual" className="cursor-pointer">
              Annual
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg mt-6">
        <p className="mb-3">By submitting this form, you agree to the following terms:</p>

        <div className="max-h-48 overflow-y-auto p-3 mb-3 bg-white border border-gray-200 rounded-lg text-sm">
          <p className="mb-2">
            1. This Order Form is subject to the Kindora Master Services Agreement – Early Access, which is incorporated
            by reference.
          </p>
          <p className="mb-2">
            2. True Steele may terminate this Agreement upon written notice when the Kindora web platform becomes
            available, at which time Client will be offered the opportunity to migrate to the web platform under an
            updated Master Services Agreement.
          </p>
          <p className="mb-2">
            3. The selected term represents the initial commitment period. After this period, the Agreement will
            automatically renew for successive periods of the same length unless either party provides written notice of
            non-renewal at least thirty (30) days prior to the end of the then-current term.
          </p>
          <p className="mb-2">
            4. Fees will be invoiced according to the billing frequency selected above. All invoices are due within
            thirty (30) days of receipt.
          </p>
          <p className="mb-2">
            5. As an Early Access participant, Client will receive the Early Access Benefits described in Section 1.2 of
            the Master Services Agreement, including dedicated support, input on product features, access to Beta
            features, and priority migration to the web platform when available.
          </p>
          <p>
            6. Client acknowledges that the Early Access program is a transitional phase until the web platform becomes
            available, at which time this Agreement will terminate and Client will have the opportunity to continue
            service under an updated Agreement.
          </p>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox
            id="termsAgreed"
            checked={formData.termsAgreed}
            onCheckedChange={(checked) => handleCheckboxChange("termsAgreed", checked as boolean)}
            className="mt-1"
            required
          />
          <Label htmlFor="termsAgreed" className="text-sm cursor-pointer">
            I have read and agree to the above terms and the Kindora Master Services Agreement – Early Access.
          </Label>
        </div>
      </div>
    </div>
  )

  const renderOrderReview = () => {
    const costs = calculateTotalCost()

    return (
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Order Review</h2>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-700">
            Please review your order details below. If you need to make changes, you can go back to the previous steps.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Organization Information</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Organization Name</p>
                  <p className="font-medium">{formData.orgName || "Not provided"}</p>
                </div>
                {formData.ein && (
                  <div>
                    <p className="text-sm text-gray-500">EIN</p>
                    <p className="font-medium">{formData.ein}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-gray-500">Contact</p>
                  <p className="font-medium">
                    {formData.contactName || "Not provided"}
                    {formData.contactTitle ? `, ${formData.contactTitle}` : ""}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{formData.contactEmail || "Not provided"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">{formData.contactPhone || "Not provided"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-medium">
                    {formData.address ? `${formData.address}, ` : ""}
                    {formData.city ? `${formData.city}, ` : ""}
                    {formData.state} {formData.zip}
                  </p>
                </div>
              </div>
              <Button variant="link" className="mt-2 h-auto p-0 text-teal-700" onClick={() => setCurrentStep(1)}>
                Edit Information
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-2">Selected Plan & Services</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <div>
                    <p className="font-medium">Organization Profile Setup</p>
                    <p className="text-sm text-gray-500">One-time fee</p>
                  </div>
                  <p className="font-medium">${costs.setupFee}</p>
                </div>

                {formData.plan && (
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <div>
                      <p className="font-medium">
                        {formData.plan === "community" && "Community Plan"}
                        {formData.plan === "essential" && "Essential Plan"}
                        {formData.plan === "professional" && "Professional Plan"}
                        {formData.plan === "enterprise" && "Enterprise Plan"}
                      </p>
                      <p className="text-sm text-gray-500">
                        {formData.plan === "community" && "3 Funder Packages per month, 1 user seat"}
                        {formData.plan === "essential" && "10 Funder Packages per month, 2 user seats"}
                        {formData.plan === "professional" && "25 Funder Packages per month, 3 user seats"}
                        {formData.plan === "enterprise" && "50 Funder Packages per month, 5 user seats"}
                      </p>
                    </div>
                    <p className="font-medium">${costs.planCost}/month</p>
                  </div>
                )}

                {formData.additionalPackages > 0 && (
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <div>
                      <p className="font-medium">Additional Funder Packages</p>
                      <p className="text-sm text-gray-500">{formData.additionalPackages} packages at $29 each</p>
                    </div>
                    <p className="font-medium">${calculateAdditionalPackagesCost()}</p>
                  </div>
                )}

                {formData.grantAssistant && (
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <div>
                      <p className="font-medium">Grant Application Assistant</p>
                      <p className="text-sm text-gray-500">Per application</p>
                    </div>
                    <p className="font-medium">$75</p>
                  </div>
                )}

                {formData.strategicConsultation && (
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <div>
                      <p className="font-medium">Strategic Consultation</p>
                      <p className="text-sm text-gray-500">Per hour</p>
                    </div>
                    <p className="font-medium">$300</p>
                  </div>
                )}

                {formData.crmSetup && formData.plan !== "enterprise" && (
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <div>
                      <p className="font-medium">CRM Setup & Integration</p>
                      <p className="text-sm text-gray-500">One-time fee</p>
                    </div>
                    <p className="font-medium">$250</p>
                  </div>
                )}

                <div className="flex justify-between items-center pt-2 font-bold">
                  <p>Total</p>
                  <p>${costs.total}</p>
                </div>
              </div>
              <Button variant="link" className="mt-2 h-auto p-0 text-teal-700" onClick={() => setCurrentStep(2)}>
                Edit Services
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-2">Billing Details</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Service Start Date</p>
                  <p className="font-medium">{formData.startDate || "Not selected"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Initial Term</p>
                  <p className="font-medium">
                    {formData.initialTerm === "3" && "3 Months"}
                    {formData.initialTerm === "6" && "6 Months"}
                    {formData.initialTerm === "12" && "12 Months"}
                    {!formData.initialTerm && "Not selected"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Billing Frequency</p>
                  <p className="font-medium">
                    {formData.billingFrequency === "monthly" && "Monthly"}
                    {formData.billingFrequency === "quarterly" && "Quarterly"}
                    {formData.billingFrequency === "semi-annual" && "Semi-Annual"}
                    {formData.billingFrequency === "annual" && "Annual"}
                    {!formData.billingFrequency && "Not selected"}
                  </p>
                </div>
              </div>
              <Button variant="link" className="mt-2 h-auto p-0 text-teal-700" onClick={() => setCurrentStep(3)}>
                Edit Billing Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderStepIndicator = () => (
    <div className="p-4 bg-gray-50 border-b border-gray-200">
      <div className="flex justify-between items-center max-w-3xl mx-auto">
        <div className={`flex flex-col items-center ${currentStep >= 1 ? "text-teal-700" : "text-gray-400"}`}>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
              currentStep >= 1 ? "bg-teal-700 text-white" : "bg-gray-200"
            }`}
          >
            1
          </div>
          <span className="text-xs">Information</span>
        </div>
        <div className={`w-16 h-0.5 ${currentStep >= 2 ? "bg-teal-700" : "bg-gray-200"}`} />
        <div className={`flex flex-col items-center ${currentStep >= 2 ? "text-teal-700" : "text-gray-400"}`}>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
              currentStep >= 2 ? "bg-teal-700 text-white" : "bg-gray-200"
            }`}
          >
            2
          </div>
          <span className="text-xs">Services</span>
        </div>
        <div className={`w-16 h-0.5 ${currentStep >= 3 ? "bg-teal-700" : "bg-gray-200"}`} />
        <div className={`flex flex-col items-center ${currentStep >= 3 ? "text-teal-700" : "text-gray-400"}`}>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
              currentStep >= 3 ? "bg-teal-700 text-white" : "bg-gray-200"
            }`}
          >
            3
          </div>
          <span className="text-xs">Terms</span>
        </div>
        <div className={`w-16 h-0.5 ${currentStep >= 4 ? "bg-teal-700" : "bg-gray-200"}`} />
        <div className={`flex flex-col items-center ${currentStep >= 4 ? "text-teal-700" : "text-gray-400"}`}>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
              currentStep >= 4 ? "bg-teal-700 text-white" : "bg-gray-200"
            }`}
          >
            4
          </div>
          <span className="text-xs">Review</span>
        </div>
      </div>
    </div>
  )

  return (
    <DashboardLayout activeTab="Order">
      <div className="p-6 max-w-4xl mx-auto">
        <div className="bg-teal-700 text-white p-6 rounded-t-lg text-center">
          <h1 className="text-2xl font-bold mb-2">Kindora Early Access Order Form</h1>
          <p className="text-lg opacity-90">Join us in transforming how funding flows in the social impact sector</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-b-lg shadow-sm border border-gray-200">
          {renderStepIndicator()}

          {currentStep === 1 && renderClientInformation()}
          {currentStep === 2 && renderServiceSelection()}
          {currentStep === 3 && renderTermsAndConditions()}
          {currentStep === 4 && renderOrderReview()}

          <div className="p-6 flex justify-between">
            {currentStep > 1 ? (
              <Button type="button" variant="outline" onClick={prevStep}>
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            ) : (
              <div></div>
            )}

            {currentStep < 4 ? (
              <Button
                type="button"
                className="bg-teal-700 hover:bg-teal-800"
                onClick={nextStep}
                disabled={
                  (currentStep === 1 &&
                    (!formData.orgName ||
                      !formData.contactName ||
                      !formData.contactEmail ||
                      !formData.contactPhone ||
                      !formData.address ||
                      !formData.city ||
                      !formData.state ||
                      !formData.zip)) ||
                  (currentStep === 2 && !formData.plan) ||
                  (currentStep === 3 &&
                    (!formData.startDate ||
                      !formData.initialTerm ||
                      !formData.billingFrequency ||
                      !formData.termsAgreed))
                }
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button type="submit" className="bg-teal-700 hover:bg-teal-800">
                Submit Order
              </Button>
            )}
          </div>
        </form>
      </div>
    </DashboardLayout>
  )
}

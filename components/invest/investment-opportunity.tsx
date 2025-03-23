"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from "recharts"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle } from "lucide-react"
import { submitInvestorForm } from "@/lib/airtable"

const fundAllocation = [
  { name: "Product Development", value: 40 },
  { name: "Marketing & User Acquisition", value: 30 },
  { name: "Operations & Infrastructure", value: 20 },
  { name: "Legal & Compliance", value: 10 },
]

const COLORS = ["#1DB48C", "#1A3A5F", "#3B82F6", "#EF4444"]

export default function InvestmentOpportunity() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.email || !formData.fullName) {
      return // Basic validation
    }

    setIsSubmitting(true)
    setIsError(false)

    try {
      // Envoyer les données à Airtable
      await submitInvestorForm({
        fullName: formData.fullName,
        email: formData.email,
        company: formData.fullName, // Utiliser le nom comme entreprise si non spécifié
        investorType: "Other", // Valeur par défaut
        investmentInterest: "To be discussed", // Valeur par défaut
        requestDocumentation: true, // Demande de documentation
      })

      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting investor form:", error)
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-navy-900 mb-12"
        >
          Investment Opportunity
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-2xl font-semibold text-navy-900 mb-6">Fund Allocation</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={fundAllocation}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {fundAllocation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4">
              {fundAllocation.map((item, index) => (
                <div key={index} className="flex items-center mb-2">
                  <div className="w-4 h-4 mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                  <span className="text-navy-600">
                    {item.name}: {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-2xl font-semibold text-navy-900 mb-6">Secure Your Spot in the Privacy Revolution</h3>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-navy-900 mb-1">
                    Name
                  </label>
                  <Input
                    id="fullName"
                    placeholder="Your Name"
                    className="w-full"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your interest in investing"
                    className="w-full text-navy-900"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                {isError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                    <AlertCircle className="h-6 w-6 text-red-500 mx-auto mb-2" />
                    <p className="text-red-600">There was an error submitting your request. Please try again.</p>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-turquoise-500 hover:bg-turquoise-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Investor Information"}
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm text-center"
              >
                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Thank you for your interest!</h3>
                <p className="text-navy-600 mb-6">
                  Download our pitch deck to learn more about this exciting opportunity.
                </p>
                <Button
                  onClick={() => window.open("/pitch-deck-consentd.pdf", "_blank")}
                  className="bg-navy-900 hover:bg-navy-800 text-white"
                >
                  Download Pitch Deck
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}


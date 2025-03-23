"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, AlertCircle } from "lucide-react"
import { submitBusinessForm } from "@/lib/airtable"

export default function BusinessCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isError, setIsError] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.email || !formData.name || !formData.company) {
      return // Basic validation
    }

    setIsSubmitting(true)
    setIsError(false)

    try {
      await submitBusinessForm({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
      })

      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting business form:", error)
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-navy-900 to-turquoise-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Ethical Data Future Starts Now</h2>
          <p className="text-xl">
            The best data isn't bought. It's earned with trust. Welcome to a new era of consent-driven intelligence.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
              Get early access to the Consentd marketplace today
            </h3>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your Name"
                      className="w-full"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-navy-900 mb-1">
                      Company
                    </label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      className="w-full"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your data needs"
                    className="w-full text-navy-900"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                {isError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                    <AlertCircle className="h-6 w-6 text-red-500 mx-auto mb-2" />
                    <p className="text-red-600">There was an error submitting your message. Please try again.</p>
                  </div>
                )}

                <div className="flex items-center space-x-4">
                  <Button
                    type="submit"
                    className="bg-turquoise-500 hover:bg-turquoise-600 text-white w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Request Early Access"}
                  </Button>
                </div>
                <div className="text-center">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-navy-500 text-navy-500 hover:bg-navy-50"
                    onClick={() => window.open("https://calendly.com/cecile-consentd/30min", "_blank")}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule a Demo
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-navy-900 mb-4">Thank You!</h3>
                <p className="text-navy-600 mb-6">
                  We've received your request for early access. Our team will be in touch shortly.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-turquoise-500 hover:bg-turquoise-600 text-white"
                >
                  Submit Another Request
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}


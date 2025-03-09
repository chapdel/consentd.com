"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from "recharts"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const fundAllocation = [
  { name: "Product Development", value: 40 },
  { name: "Marketing & User Acquisition", value: 30 },
  { name: "Operations & Infrastructure", value: 20 },
  { name: "Legal & Compliance", value: 10 },
]

const COLORS = ["#1DB48C", "#1A3A5F", "#3B82F6", "#EF4444"]

export default function InvestmentOpportunity() {
  const [email, setEmail] = useState("")
  const [showPitchDeck, setShowPitchDeck] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    setShowPitchDeck(true)
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-1">
                  Name
                </label>
                <Input id="name" placeholder="Your Name" className="w-full" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="Tell us about your interest in investing" className="w-full" />
              </div>
              <Button type="submit" className="w-full bg-turquoise-500 hover:bg-turquoise-600 text-white">
                Request Investor Information
              </Button>
            </form>
          </motion.div>
        </div>

        {showPitchDeck && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold text-navy-900 mb-4">Thank you for your interest!</h3>
            <p className="text-navy-600 mb-4">Download our pitch deck to learn more about this exciting opportunity.</p>
            <Button
              onClick={() => window.open("/path-to-your-pitch-deck.pdf", "_blank")}
              className="bg-navy-900 hover:bg-navy-800 text-white"
            >
              Download Pitch Deck
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}


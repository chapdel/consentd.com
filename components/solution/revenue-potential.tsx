"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"

const dataCategories = [
  { name: "Browsing History", value: 5 },
  { name: "Purchase History", value: 10 },
  { name: "Location Data", value: 8 },
  { name: "Social Media Activity", value: 7 },
  { name: "Health & Fitness", value: 12 },
]

export default function RevenuePotential() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sharingPercentage, setSharingPercentage] = useState(50)

  const totalRevenue =
    selectedCategories.reduce((sum, category) => {
      const categoryData = dataCategories.find((c) => c.name === category)
      return sum + (categoryData ? categoryData.value : 0)
    }, 0) *
    (sharingPercentage / 100)

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
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
          Your Data, Your Earnings
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-navy-900 mb-6">Potential Monthly Revenue</h3>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-navy-600">Selected Data Categories:</span>
                <span className="font-semibold text-navy-900">{selectedCategories.length}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-navy-600">Data Sharing Percentage:</span>
                <span className="font-semibold text-navy-900">{sharingPercentage}%</span>
              </div>
              <div className="flex justify-between items-center text-xl">
                <span className="text-navy-600">Estimated Monthly Revenue:</span>
                <span className="font-bold text-turquoise-500">${totalRevenue.toFixed(2)}</span>
              </div>
            </div>
            <p className="text-sm text-navy-600 italic">
              Note: These figures are estimates and may vary based on market demand and data quality.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-navy-900 mb-6">Customize Your Data Sharing</h3>
            <div className="space-y-4 mb-6">
              {dataCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => handleCategoryToggle(category.name)}
                  className={`w-full p-3 rounded-lg text-left transition-colors ${
                    selectedCategories.includes(category.name)
                      ? "bg-turquoise-500 text-white"
                      : "bg-gray-100 text-navy-600 hover:bg-gray-200"
                  }`}
                >
                  <span className="font-medium">{category.name}</span>
                  <span className="float-right">${category.value}/month</span>
                </button>
              ))}
            </div>
            <div>
              <label htmlFor="sharing-percentage" className="block text-sm font-medium text-navy-600 mb-2">
                Data Sharing Percentage: {sharingPercentage}%
              </label>
              <Slider
                id="sharing-percentage"
                min={0}
                max={100}
                step={10}
                value={[sharingPercentage]}
                onValueChange={(value) => setSharingPercentage(value[0])}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


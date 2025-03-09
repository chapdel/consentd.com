"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const dataCategories = [
  { name: "Demographics", basePrice: 1000 },
  { name: "Purchase History", basePrice: 2000 },
  { name: "Browsing Behavior", basePrice: 1500 },
  { name: "Location Data", basePrice: 1800 },
  { name: "Social Media Activity", basePrice: 1200 },
]

export default function DataOfferings() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [dataVolume, setDataVolume] = useState(50)

  const totalPrice =
    selectedCategories.reduce((sum, category) => {
      const categoryData = dataCategories.find((c) => c.name === category)
      return sum + (categoryData ? categoryData.basePrice : 0)
    }, 0) *
    (dataVolume / 50)

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
          Tailored Data Offerings
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-navy-900 mb-6">Available Data Types</h3>
            <div className="space-y-4 mb-6">
              {dataCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => handleCategoryToggle(category.name)}
                  className={`w-full p-4 rounded-lg text-left transition-colors ${
                    selectedCategories.includes(category.name)
                      ? "bg-turquoise-500 text-white"
                      : "bg-gray-100 text-navy-600 hover:bg-gray-200"
                  }`}
                >
                  <span className="font-medium">{category.name}</span>
                  <span className="float-right">From ${category.basePrice.toLocaleString()}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-navy-900 mb-6">Customize Your Package</h3>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
              <div className="mb-4">
                <label htmlFor="data-volume" className="block text-sm font-medium text-navy-600 mb-2">
                  Data Volume: {dataVolume}%
                </label>
                <Slider
                  id="data-volume"
                  min={10}
                  max={100}
                  step={10}
                  value={[dataVolume]}
                  onValueChange={(value) => setDataVolume(value[0])}
                  className="w-full"
                />
              </div>
              <div className="flex justify-between items-center text-xl mt-6">
                <span className="text-navy-600">Estimated Price:</span>
                <span className="font-bold text-turquoise-500">${totalPrice.toLocaleString()}</span>
              </div>
            </div>
            <Link href="/contact">
              <Button className="w-full bg-turquoise-500 hover:bg-turquoise-600 text-white">
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-navy-600 mt-12 italic"
        >
          All data is ethically sourced and compliant with GDPR, CCPA, and other relevant regulations.
        </motion.p>
      </div>
    </section>
  )
}


"use client"

import { motion } from "framer-motion"
import { Shield, BarChart, Zap } from "lucide-react"

const valuePropositions = [
  {
    icon: <Shield className="h-8 w-8 sm:h-12 sm:w-12 text-turquoise-500" />,
    title: "Compliant & Ethical",
    description: "Access to regulation-compliant data, ensuring ethical use and user consent.",
  },
  {
    icon: <BarChart className="h-8 w-8 sm:h-12 sm:w-12 text-turquoise-500" />,
    title: "High-Quality Insights",
    description: "Precise and up-to-date data for accurate decision-making and analysis.",
  },
  {
    icon: <Zap className="h-8 w-8 sm:h-12 sm:w-12 text-turquoise-500" />,
    title: "Real-Time Access",
    description: "Instant access to trends and analytics for timely business decisions.",
  },
]

export default function BusinessValue() {
  return (
    <section className="section-padding bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-navy-900 mb-12 text-wrap"
        >
          Unlock the Power of Ethical Data
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {valuePropositions.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-turquoise-100 rounded-full p-3 sm:p-4">{prop.icon}</div>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-navy-900 text-center mb-4 text-wrap">
                {prop.title}
              </h2>
              <p className="text-navy-600 text-center text-wrap">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


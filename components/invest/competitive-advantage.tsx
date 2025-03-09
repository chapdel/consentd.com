"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const competitors = [
  { name: "Consentd", features: [true, true, true, true, true] },
  { name: "Competitor A", features: [true, false, true, false, false] },
  { name: "Competitor B", features: [false, true, false, true, false] },
  { name: "Competitor C", features: [true, false, false, false, true] },
]

const features = [
  "Blockchain-based data security",
  "User-controlled data sharing",
  "Real-time data monetization",
  "Compliance with global privacy regulations",
  "AI-powered insights for businesses",
]

export default function CompetitiveAdvantage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-navy-900 mb-12"
        >
          Our Competitive Advantage
        </motion.h2>

        <div className="overflow-x-auto">
          <motion.table
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <thead>
              <tr>
                <th className="p-4 text-left text-navy-900">Features</th>
                {competitors.map((competitor) => (
                  <th key={competitor.name} className="p-4 text-center text-navy-900">
                    {competitor.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <motion.tr
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td className="p-4 text-navy-600">{feature}</td>
                  {competitors.map((competitor) => (
                    <td key={`${competitor.name}-${feature}`} className="p-4 text-center">
                      {competitor.features[index] ? (
                        <Check className="inline-block text-green-500" />
                      ) : (
                        <X className="inline-block text-red-500" />
                      )}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-navy-600 mt-12"
        >
          Consentd leads the market with our comprehensive suite of features, positioning us at the forefront of the
          data privacy revolution.
        </motion.p>
      </div>
    </section>
  )
}


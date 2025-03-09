"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Target, TrendingUp, Brain, ShieldCheck } from "lucide-react"

const useCases = [
  {
    icon: <Target className="h-8 w-8 text-turquoise-500" />,
    title: "Marketing & Advertising",
    description: "Enhance targeting and personalization for more effective campaigns.",
    benefits: ["Improved ROI on ad spend", "Higher conversion rates", "Better customer segmentation"],
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-turquoise-500" />,
    title: "Market Research",
    description: "Gain deep insights into consumer behavior and market trends.",
    benefits: ["Accurate demand forecasting", "Competitive advantage", "Informed product development"],
  },
  {
    icon: <Brain className="h-8 w-8 text-turquoise-500" />,
    title: "AI & Analytics",
    description: "Power your AI models and analytics with high-quality, diverse data.",
    benefits: [
      "Enhanced machine learning models",
      "More accurate predictive analytics",
      "Improved decision-making processes",
    ],
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-turquoise-500" />,
    title: "Regulatory Compliance",
    description: "Ensure your data usage is compliant with global privacy regulations.",
    benefits: ["Reduced legal risks", "Improved customer trust", "Simplified auditing processes"],
  },
]

export default function UseCases() {
  const [hoveredCase, setHoveredCase] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-navy-900 mb-12"
        >
          Empowering Business Use Cases
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              style={{
                height: hoveredCase === index ? "auto" : "280px",
                overflow: "hidden",
              }}
              onMouseEnter={() => setHoveredCase(index)}
              onMouseLeave={() => setHoveredCase(null)}
            >
              <div className="flex items-center mb-4">
                <div className="bg-turquoise-100 rounded-full p-3 mr-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-navy-900">{useCase.title}</h3>
              </div>
              <p className="text-navy-600 mb-4">{useCase.description}</p>
              <motion.ul
                className="list-disc list-inside text-navy-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredCase === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {useCase.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="mb-2">
                    {benefit}
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      number: "1⃣",
      title: "Browse the Data Marketplace",
      description: "Filter by categories, industries, and audience segments.",
    },
    {
      number: "2⃣",
      title: "Request Access with One Click",
      description: "No long contracts. Just transparent, smart contract-powered transactions.",
    },
    {
      number: "3⃣",
      title: "Receive Real-Time Insights",
      description: "Continuous, structured data feeds optimized for analytics and AI.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-navy-900 mb-16"
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="text-4xl mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">{step.title}</h3>
              <p className="text-navy-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


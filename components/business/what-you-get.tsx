"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CheckCircle, Database, Zap, Shield, ArrowRight } from "lucide-react"

export default function WhatYouGet() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <Database className="h-6 w-6 text-turquoise-500" />,
      title: "Precision Data, Direct from Users",
      description: "Access verified data points from social, commerce, and behavioral sources.",
    },
    {
      icon: <Zap className="h-6 w-6 text-turquoise-500" />,
      title: "Plug & Play AI Integration",
      description: "Structured, real-time feeds ready for machine learning, marketing, and business intelligence.",
    },
    {
      icon: <Shield className="h-6 w-6 text-turquoise-500" />,
      title: "Regulatory-First Approach",
      description: "GDPR & CCPA-compliant from day one, eliminating legal risks.",
    },
    {
      icon: <ArrowRight className="h-6 w-6 text-turquoise-500" />,
      title: "Seamless Data Transactions",
      description: "Blockchain-backed permissions with automated access controls and instant settlements.",
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
          What You Get
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg p-6 shadow-md flex items-start"
            >
              <div className="mr-4 mt-1">
                <CheckCircle className="h-6 w-6 text-turquoise-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">{feature.title}</h3>
                <p className="text-navy-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


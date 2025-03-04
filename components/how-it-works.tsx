"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { UserPlus, Settings, DollarSign, Shield, Share2, BarChart } from "lucide-react"

const steps = [
  {
    icon: <UserPlus className="h-8 w-8 text-turquoise-500" />,
    title: "Sign Up",
    description: "Create your Consentd account in minutes",
  },
  {
    icon: <Settings className="h-8 w-8 text-turquoise-500" />,
    title: "Set Preferences",
    description: "Choose what data you're willing to share",
  },
  {
    icon: <Shield className="h-8 w-8 text-turquoise-500" />,
    title: "Secure Your Data",
    description: "Your data is encrypted and stored securely",
  },
  {
    icon: <Share2 className="h-8 w-8 text-turquoise-500" />,
    title: "Share Safely",
    description: "Approve requests from businesses for your data",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-turquoise-500" />,
    title: "Get Paid",
    description: "Receive compensation for your shared data",
  },
  {
    icon: <BarChart className="h-8 w-8 text-turquoise-500" />,
    title: "Track & Manage",
    description: "Monitor your data usage and earnings",
  },
]

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-navy-900 mb-12"
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-turquoise-100 rounded-full p-3 mr-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-navy-900">{step.title}</h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


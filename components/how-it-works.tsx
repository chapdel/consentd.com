"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { UserPlus, Settings, DollarSign } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: <UserPlus className="h-8 w-8 text-turquoise-500" />,
    title: "Sign Up & Connect",
    description: "Securely Link your online accounts and browsing activity",
  },
  {
    number: "2",
    icon: <Settings className="h-8 w-8 text-turquoise-500" />,
    title: "Customize & Control",
    description: "Choose what data you share and set your preferences",
  },
  {
    number: "3",
    icon: <DollarSign className="h-8 w-8 text-turquoise-500" />,
    title: "Start Earning",
    description: "Cash out as companies pay for insights from your anonymized data",
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

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-24 left-1/2 h-[calc(100%-6rem)] w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 relative z-10"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-navy-50 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-navy-900 font-bold text-xl">
                    {step.number}
                  </div>
                  <div className="bg-turquoise-100 rounded-full p-3 mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Shield, DollarSign, Lock } from "lucide-react"

export default function Features() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const features = [
    {
      icon: <Lock className="h-10 w-10" />,
      title: "Stay private",
      description: "Control who can access your data and for what purpose. Revoke access anytime.",
    },
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: "Get paid",
      description: "Earn rewards when businesses use your data for research and marketing.",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Stay in control",
      description: "Monitor how your data is being used with full transparency and security.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 text-turquoise-500">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-navy-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


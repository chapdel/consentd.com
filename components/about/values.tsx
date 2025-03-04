"use client"

import { motion } from "framer-motion"
import { Shield, Handshake, Users } from "lucide-react"

const values = [
  {
    icon: <Shield className="h-12 w-12 text-turquoise-500" />,
    title: "Privacy-First Technology",
    description:
      "We build our solutions with privacy at the core, ensuring your data is always protected and under your control.",
  },
  {
    icon: <Handshake className="h-12 w-12 text-turquoise-500" />,
    title: "Ethical Business Partnerships",
    description:
      "We collaborate only with businesses that share our commitment to data privacy and fair compensation for users.",
  },
  {
    icon: <Users className="h-12 w-12 text-turquoise-500" />,
    title: "User Empowerment",
    description:
      "We provide tools and knowledge to help you understand the value of your data and make informed decisions about sharing it.",
  },
]

export default function Values() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-navy-900 mb-12"
        >
          Our Core Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg p-6 shadow-sm"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-navy-900 text-center mb-4">{value.title}</h3>
              <p className="text-navy-600 text-center">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


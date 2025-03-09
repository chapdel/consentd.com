"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, BarChart2, Award } from "lucide-react"

const keyPoints = [
  {
    icon: <TrendingUp className="h-12 w-12 text-turquoise-500" />,
    title: "Booming Market",
    description: "$500 billion market by 2030",
  },
  {
    icon: <Users className="h-12 w-12 text-turquoise-500" />,
    title: "Consumer-Powered Data Revolution",
    description: "Empowering individuals to monetize their data",
  },
  {
    icon: <BarChart2 className="h-12 w-12 text-turquoise-500" />,
    title: "High-Growth Business Model",
    description: "Scalable platform with multiple revenue streams",
  },
  {
    icon: <Award className="h-12 w-12 text-turquoise-500" />,
    title: "Competitive Advantage",
    description: "Unique blockchain-based solution for data privacy",
  },
]

export default function MainSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy-900 to-turquoise-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Invest in the Future of Data Privacy
        </motion.h1>

        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 md:w-96 md:h-96 border-4 border-turquoise-500 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            {keyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="bg-white rounded-full p-4 mb-4">{point.icon}</div>
                <h2 className="text-xl md:text-2xl font-semibold mb-2">{point.title}</h2>
                <p className="text-sm md:text-base text-gray-300">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


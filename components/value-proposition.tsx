"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

type DataCategory = {
  name: string
  value: number
  icon: string
  color: string
}

const dataCategories: DataCategory[] = [
  {
    name: "Basic Profile",
    value: 500,
    icon: "👤",
    color: "bg-blue-100 border-blue-300",
  },
  {
    name: "Shopping Habits",
    value: 1200,
    icon: "🛍️",
    color: "bg-purple-100 border-purple-300",
  },
  {
    name: "Financial Data",
    value: 2000,
    icon: "💰",
    color: "bg-green-100 border-green-300",
  },
  {
    name: "Health Information",
    value: 1500,
    icon: "🏥",
    color: "bg-red-100 border-red-300",
  },
  {
    name: "Location History",
    value: 800,
    icon: "📍",
    color: "bg-yellow-100 border-yellow-300",
  },
]

export default function ValueProposition() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [counters, setCounters] = useState<number[]>(dataCategories.map(() => 0))

  useEffect(() => {
    if (isInView) {
      const intervals = dataCategories.map((category, index) => {
        return setInterval(() => {
          setCounters((prev) => {
            const newCounters = [...prev]
            if (newCounters[index] < category.value) {
              newCounters[index] = Math.min(newCounters[index] + Math.ceil(category.value / 20), category.value)
            }
            return newCounters
          })
        }, 50)
      })

      return () => {
        intervals.forEach((interval) => clearInterval(interval))
      }
    }
  }, [isInView])

  return (
    <section className="section-padding bg-gray-50" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-4 text-wrap">
            Your Data Is Worth Billions. It&apos;s Time You Got Paid!
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {dataCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${category.color} border rounded-lg p-4 sm:p-6 text-center shadow-sm`}
            >
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{category.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-navy-900 text-wrap">{category.name}</h3>
              <div className="text-xl sm:text-2xl font-bold text-turquoise-600">
                ${counters[index]}
                <span className="text-xs sm:text-sm font-normal text-gray-500">/year</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-sm sm:text-base text-gray-600 italic text-wrap">
            *Based on average market rates for consensual data sharing
          </p>
        </motion.div>
      </div>
    </section>
  )
}


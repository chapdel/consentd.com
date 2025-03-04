"use client"

import { motion } from "framer-motion"
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const revenueData = [
  { year: 2023, revenue: 1, users: 100000 },
  { year: 2024, revenue: 5, users: 500000 },
  { year: 2025, revenue: 15, users: 2000000 },
  { year: 2026, revenue: 40, users: 5000000 },
  { year: 2027, revenue: 100, users: 10000000 },
]

const revenueStreams = [
  { name: "Data Marketplace Fees", percentage: 40 },
  { name: "Premium User Subscriptions", percentage: 30 },
  { name: "API Access for Businesses", percentage: 20 },
  { name: "Consulting Services", percentage: 10 },
]

export default function BusinessModel() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-navy-900 mb-12"
        >
          Our Business Model
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-2xl font-semibold text-navy-900 mb-6">Projected Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <XAxis dataKey="year" />
                <YAxis yAxisId="left" orientation="left" stroke="#1DB48C" />
                <YAxis yAxisId="right" orientation="right" stroke="#1A3A5F" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="revenue" fill="#1DB48C" name="Revenue ($M)" />
                <Bar yAxisId="right" dataKey="users" fill="#1A3A5F" name="Users" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-2xl font-semibold text-navy-900 mb-6">Multi-Stream Revenue Model</h3>
            {revenueStreams.map((stream, index) => (
              <motion.div
                key={stream.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="mb-4"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-navy-600">{stream.name}</span>
                  <span className="font-semibold text-turquoise-500">{stream.percentage}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-turquoise-500 rounded-full h-2" style={{ width: `${stream.percentage}%` }}></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-navy-600 mt-12"
        >
          Our diverse revenue streams and scalable platform position us for exponential growth in the booming data
          privacy market.
        </motion.p>
      </div>
    </section>
  )
}


"use client"

import { motion } from "framer-motion"
import { ArrowRight, Database, Lock, DollarSign } from "lucide-react"

export default function SolutionOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-navy-900 mb-8"
        >
          The Future of Personal Data Ownership
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-center text-navy-600 max-w-3xl mx-auto mb-12"
        >
          In today's digital economy, personal data has become a valuable commodity. However, individuals often have
          little control over how their data is collected, used, and monetized. Consentd aims to revolutionize this
          paradigm by putting the power back in the hands of users.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">The Current Problem</h2>
            <p className="text-navy-600 mb-4">
              Large tech companies collect vast amounts of personal data, often without explicit consent or fair
              compensation. This leads to privacy concerns and an imbalance in the data economy.
            </p>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">Our Blockchain Solution</h2>
            <p className="text-navy-600">
              Consentd leverages blockchain technology to create a secure, transparent, and user-controlled data
              ecosystem. Users can choose what data to share, with whom, and for what compensation, all while
              maintaining full ownership and control.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-80 bg-gray-100 rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center space-x-4">
                <motion.div
                  animate={{ x: [0, 100, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "linear" }}
                  className="flex flex-col items-center"
                >
                  <Database className="h-12 w-12 text-turquoise-500 mb-2" />
                  <span className="text-sm text-navy-600">Your Data</span>
                </motion.div>
                <ArrowRight className="h-8 w-8 text-navy-300" />
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  className="flex flex-col items-center"
                >
                  <Lock className="h-12 w-12 text-turquoise-500 mb-2" />
                  <span className="text-sm text-navy-600">Blockchain</span>
                </motion.div>
                <ArrowRight className="h-8 w-8 text-navy-300" />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  className="flex flex-col items-center"
                >
                  <DollarSign className="h-12 w-12 text-turquoise-500 mb-2" />
                  <span className="text-sm text-navy-600">Fair Compensation</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


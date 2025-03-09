"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Key } from "lucide-react"

export default function Technology() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-navy-900 mb-12"
        >
          Our Technology
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-navy-900 mb-4">Powered by our proprietary "DATA DNA" technology</h3>
            <p className="text-navy-600 mb-6">
              Consentd enables you to identify, track, and control access to your data across the internet. Our platform provides a seamless way to encrypt personal information, manage consent, and earn passive income from data sharing—on their own terms.
            </p>
            <p className="text-navy-600">
              This technology ensures that you always know who's using your data, for what purpose, and that you're
              fairly compensated for it.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-navy-900 mb-6 text-center">Security Architecture</h3>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 bg-turquoise-100 rounded-full">
                <Shield className="h-8 w-8 text-turquoise-500" />
              </div>
              <ArrowIcon />
              <div className="flex items-center justify-center w-16 h-16 bg-turquoise-100 rounded-full">
                <Lock className="h-8 w-8 text-turquoise-500" />
              </div>
              <ArrowIcon />
              <div className="flex items-center justify-center w-16 h-16 bg-turquoise-100 rounded-full">
                <Key className="h-8 w-8 text-turquoise-500" />
              </div>
            </div>
            <div className="mt-6 text-center text-sm text-navy-600">
              <p>User Authentication</p>
              <p>↓</p>
              <p>Data Encryption</p>
              <p>↓</p>
              <p>Blockchain Storage</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-4 mt-12"
        >
          <span className="bg-navy-100 text-navy-600 px-4 py-2 rounded-full text-sm font-semibold">GDPR Compliant</span>
          <span className="bg-navy-100 text-navy-600 px-4 py-2 rounded-full text-sm font-semibold">CCPA Compliant</span>
          <span className="bg-navy-100 text-navy-600 px-4 py-2 rounded-full text-sm font-semibold">
            ISO 27001 Certified
          </span>
        </motion.div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-navy-300"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <polyline points="19 12 12 19 5 12"></polyline>
    </svg>
  )
}


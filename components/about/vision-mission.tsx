"use client"

import { motion } from "framer-motion"

export default function VisionMission() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-navy-900 mb-8"
        >
          Reimagining Data Ownership for a Fairer Digital Economy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-center text-navy-600 max-w-3xl mx-auto mb-12"
        >
          At Consentd, we envision a world where individuals have full control over their personal data, empowering them
          to participate actively in the digital economy while preserving their privacy. Our mission is to revolutionize
          data ownership, creating a transparent and equitable ecosystem that benefits both individuals and businesses.
        </motion.p>
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl italic text-center text-turquoise-600 max-w-2xl mx-auto"
        >
          "In the age of information, consent is the new currency. We're here to ensure everyone gets their fair share."
        </motion.blockquote>
      </div>
    </section>
  )
}


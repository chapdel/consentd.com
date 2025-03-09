"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function DataValueSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Concentric circles */}
              {[4, 3, 2, 1].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-navy-200"
                  style={{
                    width: `${i * 25}%`,
                    height: `${i * 25}%`,
                    top: `${50 - (i * 25) / 2}%`,
                    left: `${50 - (i * 25) / 2}%`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  viewport={{ once: true }}
                />
              ))}

              {/* Center dot */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-turquoise-500 rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />

              {/* Connection nodes */}
              {[0, 72, 144, 216, 288].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-4 h-4 bg-navy-900 rounded-full"
                  style={{
                    transform: `rotate(${angle}deg) translateY(-150px) rotate(-${angle}deg)`,
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
                  viewport={{ once: true }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Your Data, Your Asset</h2>
            <p className="text-lg text-navy-600 mb-8">
              In today's digital economy, your personal data is valuable. Consentd gives you the tools to treat it like
              the asset it is—protecting it, managing it, and monetizing it on your terms.
            </p>
            <ul className="space-y-4">
              {[
                "Secure blockchain technology ensures your data remains protected",
                "Transparent marketplace for data sharing with trusted partners",
                "Real-time insights into how your data is being used",
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center text-navy-600"
                >
                  <Check className="w-5 h-5 text-turquoise-500 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


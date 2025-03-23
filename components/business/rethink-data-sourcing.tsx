"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ShieldCheck, Database, RefreshCw } from "lucide-react"

export default function RethinkDataSourcing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Rethink Data Sourcing</h2>
          <p className="text-lg text-navy-600">
            Traditional data collection is broken—opaque, intrusive, and legally risky. Consentd flips the model, giving
            businesses access to high-quality, permissioned data directly from users. No black-box data brokers. No
            compliance headaches. Just clean, structured data streams designed for AI and analytics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="bg-turquoise-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
              <Database className="h-8 w-8 text-turquoise-500" />
            </div>
            <h3 className="text-xl font-semibold text-navy-900 mb-3">Direct Data Access</h3>
            <p className="text-navy-600">
              Bypass traditional data brokers and connect directly with users willing to share their data on fair terms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="bg-turquoise-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
              <ShieldCheck className="h-8 w-8 text-turquoise-500" />
            </div>
            <h3 className="text-xl font-semibold text-navy-900 mb-3">Compliance Built-in</h3>
            <p className="text-navy-600">
              Every data transaction is compliant with GDPR, CCPA, and other privacy regulations from the ground up.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="bg-turquoise-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
              <RefreshCw className="h-8 w-8 text-turquoise-500" />
            </div>
            <h3 className="text-xl font-semibold text-navy-900 mb-3">Structured for AI</h3>
            <p className="text-navy-600">
              Clean, organized data streams ready for machine learning, analytics, and business intelligence
              applications.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


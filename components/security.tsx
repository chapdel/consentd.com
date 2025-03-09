"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Shield, Lock, UserCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Security() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const shieldVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-20 bg-navy-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Stay in control of your Data Online</h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Powered by our proprietary "Data DNA" technology, Consentd enables you to identify, track, and control
            access to your data across the internet. Our platform provides a seamless way to encrypt personal
            information, manage consent, and earn passive income from data sharing—on your own terms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-lg p-6 shadow-sm"
          >
            <div className="flex items-center mb-4">
              <div className="bg-turquoise-100 rounded-full p-3 mr-4">
                <Shield className="h-8 w-8 text-turquoise-500" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900">Data DNA Technology</h3>
            </div>
            <p className="text-gray-600">
              Our proprietary technology creates a unique digital fingerprint for your data, allowing you to track and
              control it across the internet.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg p-6 shadow-sm"
          >
            <div className="flex items-center mb-4">
              <div className="bg-turquoise-100 rounded-full p-3 mr-4">
                <Lock className="h-8 w-8 text-turquoise-500" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900">End-to-End Encryption</h3>
            </div>
            <p className="text-gray-600">
              Your personal information is encrypted and secured with military-grade protection, ensuring only
              authorized parties can access it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-lg p-6 shadow-sm"
          >
            <div className="flex items-center mb-4">
              <div className="bg-turquoise-100 rounded-full p-3 mr-4">
                <UserCheck className="h-8 w-8 text-turquoise-500" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900">User Control</h3>
            </div>
            <p className="text-gray-600">
              You have full control over your data sharing preferences, with the ability to grant or revoke access at
              any time.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-8"
        >
          <Link href="/solution">
            <Button size="lg" className="bg-turquoise-500 hover:bg-turquoise-600 text-white">
              Learn More About Our Solution
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-navy-600 mb-4">Compliant with</p>
          <div className="flex justify-center space-x-4">
            <span className="bg-navy-100 text-navy-600 px-3 py-1 rounded-full text-sm font-semibold">GDPR</span>
            <span className="bg-navy-100 text-navy-600 px-3 py-1 rounded-full text-sm font-semibold">CCPA</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


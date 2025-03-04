"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Shield, Lock, UserCheck } from "lucide-react"

const securityFeatures = [
  {
    icon: <Shield className="h-8 w-8 text-turquoise-500" />,
    title: "Blockchain-Backed Security",
    description: "Your data is protected by cutting-edge blockchain technology",
  },
  {
    icon: <Lock className="h-8 w-8 text-turquoise-500" />,
    title: "End-to-End Encryption",
    description: "All your data is encrypted from start to finish",
  },
  {
    icon: <UserCheck className="h-8 w-8 text-turquoise-500" />,
    title: "User Control",
    description: "You have full control over your data sharing preferences",
  },
]

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
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Military-Grade Security for Your Data</h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Your privacy and security are our top priorities. We use state-of-the-art technology to keep your data safe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="bg-turquoise-100 rounded-full p-3 mr-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-navy-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={shieldVariants}
          className="flex justify-center items-center"
        >
          <div className="bg-white rounded-full p-8 shadow-lg">
            <Shield className="h-24 w-24 text-turquoise-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
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


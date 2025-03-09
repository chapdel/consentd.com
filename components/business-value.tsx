"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building, Shield, TrendingUp } from "lucide-react"

export default function BusinessValue() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const businessBenefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Ethical Data Access",
      description: "Access high-quality, user-consented data that meets regulatory requirements",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Better Insights",
      description: "Get more accurate and comprehensive data for improved decision-making",
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Build Trust",
      description: "Demonstrate your commitment to data ethics and user privacy",
    },
  ]

  return (
    <section className="py-20 bg-navy-900 text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">For Businesses</h2>
          <p className="text-lg text-white/80">
            For businesses, Consentd offers an ethical, compliant way to access high-quality, user-consented data,
            fostering trust and fairness in the digital economy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {businessBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="bg-navy-800 rounded-lg p-6 border border-navy-700"
            >
              <div className="bg-turquoise-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-white/70">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-turquoise-500 hover:bg-turquoise-600 text-white">
            <Link href="/business">Discover Business Solutions</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}


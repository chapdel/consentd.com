"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-turquoise-500 opacity-95 z-0" />

      <div className="container relative mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Get Paid  for Your Data
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xl">
              Every day, your online activity generate value-why let big tech keep all the profits? Consentd gives you the power to control your data and get paid for it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-turquoise-500 hover:bg-turquoise-600 text-white border-none">
                Sign up Today - it's free
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-800 bg-blue-900 text-white hover:bg-blue-900 hover:border-blue-900 transition-colors duration-300"
              >
                Be the first to experience the MVP launch
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-[400px]">
              <svg className="w-full h-full" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Abstract data visualization */}
                <circle cx="250" cy="200" r="150" stroke="white" strokeWidth="2" strokeDasharray="10 5" />
                <circle cx="250" cy="200" r="100" stroke="white" strokeWidth="2" opacity="0.7" />
                <circle cx="250" cy="200" r="50" stroke="white" strokeWidth="2" opacity="0.5" />

                {/* Data nodes */}
                <circle cx="250" cy="50" r="15" fill="#1DB48C" />
                <circle cx="350" cy="150" r="15" fill="#1DB48C" />
                <circle cx="300" cy="300" r="15" fill="#1DB48C" />
                <circle cx="150" cy="250" r="15" fill="#1DB48C" />
                <circle cx="100" cy="120" r="15" fill="#1DB48C" />

                {/* Connection lines */}
                <line x1="250" y1="50" x2="250" y2="200" stroke="white" strokeWidth="2" />
                <line x1="350" y1="150" x2="250" y2="200" stroke="white" strokeWidth="2" />
                <line x1="300" y1="300" x2="250" y2="200" stroke="white" strokeWidth="2" />
                <line x1="150" y1="250" x2="250" y2="200" stroke="white" strokeWidth="2" />
                <line x1="100" y1="120" x2="250" y2="200" stroke="white" strokeWidth="2" />

                {/* User silhouette in center */}
                <circle cx="250" cy="200" r="30" fill="white" />
                <path d="M250 185 A15 15 0 1 1 250 215 A15 15 0 1 1 250 185" fill="#1A3A5F" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


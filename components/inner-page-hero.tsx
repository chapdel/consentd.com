"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface InnerPageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  children?: ReactNode
}

export default function InnerPageHero({ title, subtitle, backgroundImage, children }: InnerPageHeroProps) {
  return (
    <div className="relative bg-navy-900 text-white overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="absolute inset-0 bg-navy-900 bg-opacity-75"></div>
        </div>
      )}
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-8"
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </div>
  )
}


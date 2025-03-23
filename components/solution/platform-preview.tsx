"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// These URLs should be replaced with the actual generated screenshots
const screenshots = [
  {
    id: 1,
    title: "User Dashboard",
    description: "Main interface allowing users to visualize and manage their shared data.",
    imageUrl: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    title: "Data Marketplace",
    description: "Explore data sharing opportunities and choose which companies to collaborate with.",
    imageUrl: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "Permission Controls",
    description: "Define precisely which data you want to share and with whom.",
    imageUrl: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    title: "Revenue Tracking",
    description: "Visualize your earnings and transaction history related to your data sharing.",
    imageUrl: "/placeholder.svg?height=600&width=800",
  },
]

export default function PlatformPreview() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length)
  }

  const currentScreenshot = screenshots[currentIndex]

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Platform Preview</h2>
          <p className="text-lg text-navy-600 max-w-3xl mx-auto">
            Discover Consentd's intuitive and powerful interface, designed to give users complete control over their
            data.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 rounded-lg p-4 md:p-8 shadow-lg"
          >
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-md mb-6">
              <Image
                src={currentScreenshot.imageUrl || "/placeholder.svg"}
                alt={currentScreenshot.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-4 md:p-6 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{currentScreenshot.title}</h3>
                  <p className="text-sm md:text-base">{currentScreenshot.description}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <div className="flex space-x-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-turquoise-500" : "bg-gray-300"}`}
                  />
                ))}
              </div>

              <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-navy-600 italic">*Interface under development, final product may differ slightly.</p>
        </motion.div>
      </div>
    </section>
  )
}


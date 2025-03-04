"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "lucide-react"

export default function BusinessCTA() {
  const [isScheduleDemo, setIsScheduleDemo] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-br from-navy-900 to-turquoise-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Ready to access high-quality, ethical data?
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg p-8 shadow-xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-1">
                    Name
                  </label>
                  <Input id="name" placeholder="Your Name" className="w-full" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-navy-900 mb-1">
                    Company
                  </label>
                  <Input id="company" placeholder="Your Company" className="w-full" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" className="w-full" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="How can we help you?" className="w-full" />
              </div>
              <div className="flex items-center space-x-4">
                <Button type="submit" className="bg-turquoise-500 hover:bg-turquoise-600 text-white">
                  Send Message
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="border-turquoise-500 text-turquoise-500 hover:bg-turquoise-50"
                  onClick={() => setIsScheduleDemo(true)}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule a Demo
                </Button>
              </div>
            </form>
          </motion.div>
        </div>

        {isScheduleDemo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Schedule a Demo</h3>
              <p className="text-navy-600 mb-4">
                Our team will contact you shortly to arrange a personalized demo at your convenience.
              </p>
              <Button
                onClick={() => setIsScheduleDemo(false)}
                className="bg-turquoise-500 hover:bg-turquoise-600 text-white"
              >
                Close
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}


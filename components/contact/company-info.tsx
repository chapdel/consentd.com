"use client"

import { motion } from "framer-motion"
import { Calendar, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CompanyInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-semibold text-navy-900 mb-4">Company Information</h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <MapPin className="mr-2 h-5 w-5 text-turquoise-500" />
            <span>3000 Pegasus Park Dr, Dallas, TX 75247</span>
          </li>
          <li className="flex items-center">
            <Mail className="mr-2 h-5 w-5 text-turquoise-500" />
            <span>contact@consentd.com</span>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-navy-900 mb-4">Schedule a Meeting</h2>
        <Button
          onClick={() => window.open("https://calendly.com/cecile-consentd/30min", "_blank")}
          className="w-full bg-turquoise-500 hover:bg-turquoise-600 text-white"
        >
          <Calendar className="mr-2 h-4 w-4" /> Book a Time
        </Button>
      </div>
    </motion.div>
  )
}


"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function CEOLetter() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/3"
          >
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Cecile Mengue, CEO of Consentd"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-2/3"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-6">A Message from Our CEO</h2>
            <p className="text-lg text-navy-600 mb-6">Dear Consentd Community,</p>
            <p className="text-lg text-navy-600 mb-6">
              The idea for Consentd was born out of a deep frustration with the current state of data privacy and
              ownership. As a technologist and privacy advocate, I've witnessed firsthand how our personal data is
              exploited without our knowledge or fair compensation. I founded Consentd with a vision to shift the
              paradigm of data ownership and empower individuals in the digital age.
            </p>
            <p className="text-lg text-navy-600 mb-6">
              Our journey is just beginning, and I'm excited to have you join us in reshaping the future of data privacy
              and monetization. Together, we can create a more equitable digital economy where your data works for you.
            </p>
            <p className="text-lg text-navy-600 mb-6">Thank you for your trust and support.</p>
            <div className="flex items-center">
              <Image
                src="/placeholder.svg?height=60&width=200"
                alt="Cecile Mengue's signature"
                width={200}
                height={60}
                className="mr-4"
              />
              <div>
                <p className="font-semibold text-navy-900">Cecile Mengue</p>
                <p className="text-navy-600">CEO & Founder, Consentd</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


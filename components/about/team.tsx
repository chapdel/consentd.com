"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const teamMembers = [
  {
    name: "Cecile Mengue",
    title: "CEO & Founder",
    bio: "Tech visionary with 10+ years in data privacy. Former Google privacy engineer. Stanford CS graduate.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Alex Thompson",
    title: "CTO",
    bio: "Blockchain expert and security specialist. Previously led engineering at a major crypto exchange. MIT alum.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sarah Chen",
    title: "COO",
    bio: "Operations guru with experience scaling startups. Former management consultant at McKinsey. Harvard MBA.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function Team() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-navy-900 mb-12"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-2">{member.name}</h3>
                <p className="text-turquoise-600 mb-4">{member.title}</p>
                <p className="text-navy-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


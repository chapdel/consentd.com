"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "How does Consentd ensure the security of my data?",
    answer:
      "Consentd uses advanced blockchain technology and encryption methods to secure your data. Our decentralized approach means your information isn't stored in one central location, making it extremely difficult for unauthorized access.",
    category: "Security",
  },
  {
    question: "Can I choose which data to share and with whom?",
    answer:
      "Consentd gives you full control over your data. You can select which types of data you want to share, and you'll always be informed about who wants to access your data and for what purpose before you give consent.",
    category: "Usage",
  },
  {
    question: "How much can I realistically earn from sharing my data?",
    answer:
      "Earnings can vary based on the types and amount of data you choose to share. Some users report earning between $50 to $200 per month, but this can be higher for users with more valuable data sets or who participate more actively.",
    category: "Revenue",
  },
  {
    question: "Is Consentd compliant with data protection regulations?",
    answer:
      "Yes, Consentd is fully compliant with major data protection regulations including GDPR and CCPA. We prioritize user privacy and data rights in all our operations.",
    category: "Security",
  },
  {
    question: "How often will I receive payments for my shared data?",
    answer:
      "Payments are typically processed on a monthly basis. You can track your earnings in real-time through your Consentd dashboard and set up automatic transfers to your preferred payment method.",
    category: "Revenue",
  },
  {
    question: "What companies or organizations will have access to my data?",
    answer:
      "Only companies that you explicitly approve will have access to your data. These are typically market research firms, product development teams, and academic institutions. You'll always be informed about the entity requesting your data before you consent.",
    category: "Usage",
  },
]

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredFAQs, setFilteredFAQs] = useState(faqs)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    setFilteredFAQs(
      faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(term) ||
          faq.answer.toLowerCase().includes(term) ||
          faq.category.toLowerCase().includes(term),
      ),
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-navy-900 mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-2xl mx-auto mb-8">
          <Input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full"
          />
        </div>

        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          {filteredFAQs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-navy-600 mb-2">{faq.answer}</p>
                <span className="text-sm text-turquoise-500">Category: {faq.category}</span>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {filteredFAQs.length === 0 && <p className="text-center text-navy-600 mt-4">No matching questions found.</p>}

        <div className="text-center mt-12">
          <Button variant="outline" className="bg-white hover:bg-gray-100">
            Ask Another Question
          </Button>
        </div>
      </div>
    </section>
  )
}


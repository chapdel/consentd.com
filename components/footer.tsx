"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram, AlertCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ConsentdLogo from "./consentd-logo"
import { submitNewsletterSubscription } from "@/lib/airtable"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return // Basic email validation
    }

    setIsSubmitting(true)
    setIsError(false)

    try {
      await submitNewsletterSubscription({ email })
      setIsSubmitted(true)
      setEmail("")
    } catch (error) {
      console.error("Error submitting newsletter subscription:", error)
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <ConsentdLogo className="h-8 w-auto mb-4" />
            <p className="text-sm mb-4">Empowering individuals to control and monetize their data</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-turquoise-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-turquoise-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-turquoise-500 transition-colors">
                <LinkedIn className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-turquoise-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-turquoise-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-turquoise-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/solution" className="hover:text-turquoise-500 transition-colors">
                  Solution
                </Link>
              </li>
              <li>
                <Link href="/business" className="hover:text-turquoise-500 transition-colors">
                  For Businesses
                </Link>
              </li>
              <li>
                <Link href="/invest" className="hover:text-turquoise-500 transition-colors">
                  Invest
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-turquoise-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with our latest news and offers</p>

            {!isSubmitted ? (
              <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-navy-800 border-navy-700 text-white placeholder-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  className="bg-turquoise-500 hover:bg-turquoise-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "..." : "Subscribe"}
                </Button>
              </form>
            ) : (
              <p className="text-turquoise-400">Thank you for subscribing!</p>
            )}

            {isError && (
              <p className="text-red-400 text-sm mt-2">
                <AlertCircle className="h-4 w-4 inline mr-1" />
                Error subscribing. Please try again.
              </p>
            )}
          </div>
        </div>
        <div className="border-t border-navy-800 pt-8 text-sm text-center">
          <p>&copy; 2023 Consentd. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="hover:text-turquoise-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-turquoise-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


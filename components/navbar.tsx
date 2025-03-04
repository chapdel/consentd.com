"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import ConsentdLogo from "./consentd-logo"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <ConsentdLogo className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-navy-600 hover:text-turquoise-500 font-medium transition-colors">
            About
          </Link>
          <Link href="/solution" className="text-navy-600 hover:text-turquoise-500 font-medium transition-colors">
            Solution
          </Link>
          <Link href="/business" className="text-navy-600 hover:text-turquoise-500 font-medium transition-colors">
            For Businesses
          </Link>
          <Link href="/invest" className="text-navy-600 hover:text-turquoise-500 font-medium transition-colors">
            Invest
          </Link>
          <Link href="/contact" className="text-navy-600 hover:text-turquoise-500 font-medium transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-6 mt-10">
              <Link
                href="/about"
                className="text-navy-600 hover:text-turquoise-500 font-medium text-lg transition-colors"
              >
                About
              </Link>
              <Link
                href="/solution"
                className="text-navy-600 hover:text-turquoise-500 font-medium text-lg transition-colors"
              >
                Solution
              </Link>
              <Link
                href="/business"
                className="text-navy-600 hover:text-turquoise-500 font-medium text-lg transition-colors"
              >
                For Businesses
              </Link>
              <Link
                href="/invest"
                className="text-navy-600 hover:text-turquoise-500 font-medium text-lg transition-colors"
              >
                Invest
              </Link>
              <Link
                href="/contact"
                className="text-navy-600 hover:text-turquoise-500 font-medium text-lg transition-colors"
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}


"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import ConsentdLogo from "./consentd-logo"
// Ajouter l'import pour la fonction scrollToSection
import { scrollToSection } from "../utils/scroll-to-section"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  // Ajouter une fonction handleWaitlistClick dans le composant Navbar
  // Ajouter cette fonction juste après les hooks useState et useEffect

  const handleWaitlistClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Si nous sommes déjà sur la page d'accueil, empêcher la navigation par défaut
    // et faire défiler vers la section waitlist
    if (window.location.pathname === "/") {
      e.preventDefault()
      scrollToSection("waitlist")
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Détermine la couleur du texte des liens en fonction de la page et du scroll
  const linkTextColor =
    isHomePage && !scrolled ? "text-white hover:text-white/80" : "text-navy-600 hover:text-turquoise-500"

  // Détermine la couleur du bouton en fonction de la page et du scroll
  const buttonStyle =
    isHomePage && !scrolled
      ? "bg-white text-navy-900 hover:bg-white/90"
      : "bg-turquoise-500 hover:bg-turquoise-600 text-white"

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
          <Link href="/about" className={`font-medium transition-colors ${linkTextColor}`}>
            About
          </Link>
          <Link href="/solution" className={`font-medium transition-colors ${linkTextColor}`}>
            Solution
          </Link>
          <Link href="/business" className={`font-medium transition-colors ${linkTextColor}`}>
            For Businesses
          </Link>
          <Link href="/invest" className={`font-medium transition-colors ${linkTextColor}`}>
            Invest
          </Link>
          <Link href="/contact" className={`font-medium transition-colors ${linkTextColor}`}>
            Contact
          </Link>
          <Link href="/#waitlist" onClick={handleWaitlistClick}>
            <Button className={buttonStyle}>Join Waitlist</Button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-2 md:hidden">
          <Link href="/#waitlist" onClick={handleWaitlistClick}>
            <Button size="sm" className={buttonStyle}>
              Join Waitlist
            </Button>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open Menu"
                className={isHomePage && !scrolled ? "text-white" : ""}
              >
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
      </div>
    </header>
  )
}


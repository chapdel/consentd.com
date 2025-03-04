import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import InnerPageHero from "@/components/inner-page-hero"
import SolutionOverview from "@/components/solution/overview"
import Technology from "@/components/solution/technology"
import RevenuePotential from "@/components/solution/revenue-potential"
import FAQ from "@/components/solution/faq"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Consentd Solution - Revolutionizing Data Ownership",
  description:
    "Discover how Consentd's blockchain-based solution empowers users to control, secure, and monetize their personal data.",
}

export default function SolutionPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <InnerPageHero
        title="Our Solution"
        subtitle="Revolutionizing data ownership and monetization"
        backgroundImage="/placeholder.svg?height=800&width=1600"
      />
      <SolutionOverview />
      <Technology />
      <RevenuePotential />
      <FAQ />
      <Footer />
    </main>
  )
}


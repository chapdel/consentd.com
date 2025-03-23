import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import InnerPageHero from "@/components/inner-page-hero"
import RethinkDataSourcing from "@/components/business/rethink-data-sourcing"
import WhatYouGet from "@/components/business/what-you-get"
import DataDrivenLeaders from "@/components/business/data-driven-leaders"
import HowItWorks from "@/components/business/how-it-works"
import BusinessCTA from "@/components/business/business-cta"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Consentd for Businesses - Ethical Data Solutions",
  description:
    "Unlock real-time, user-consented data for AI, analytics, and marketing—built for compliance, transparency, and trust.",
}

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <InnerPageHero
        title="For Businesses"
        subtitle="The Future of Ethical Data for Smarter Insights"
        backgroundImage="/placeholder.svg?height=800&width=1600"
      />
      <RethinkDataSourcing />
      <WhatYouGet />
      <DataDrivenLeaders />
      <HowItWorks />
      <BusinessCTA />
      <Footer />
    </main>
  )
}


import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import InnerPageHero from "@/components/inner-page-hero"
import BusinessValue from "@/components/business/business-value"
import DataOfferings from "@/components/business/data-offerings"
import UseCases from "@/components/business/use-cases"
import BusinessCTA from "@/components/business/business-cta"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Consentd for Businesses - Ethical Data Solutions",
  description:
    "Unlock the power of ethical data for your organization with Consentd. Access high-quality, regulation-compliant data for better decision-making.",
}

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <InnerPageHero
        title="For Businesses"
        subtitle="Unlock the power of ethical data for your organization"
        backgroundImage="/placeholder.svg?height=800&width=1600"
      />
      <BusinessValue />
      <DataOfferings />
      <UseCases />
      <BusinessCTA />
      <Footer />
    </main>
  )
}


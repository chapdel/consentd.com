import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import InnerPageHero from "@/components/inner-page-hero"
import MainSection from "@/components/invest/main-section"
import BusinessModel from "@/components/invest/business-model"
import CompetitiveAdvantage from "@/components/invest/competitive-advantage"
import InvestmentOpportunity from "@/components/invest/investment-opportunity"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Invest in Consentd - The Future of Data Privacy",
  description:
    "Join Consentd in shaping the future of data privacy and monetization. Learn about our investment opportunities and growth potential.",
}

export default function InvestPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <InnerPageHero
        title="Invest in Consentd"
        subtitle="Join us in shaping the future of data privacy and monetization"
        backgroundImage="/placeholder.svg?height=800&width=1600"
      />
      <MainSection />
      <BusinessModel />
      <CompetitiveAdvantage />
      <InvestmentOpportunity />
      <Footer />
    </main>
  )
}


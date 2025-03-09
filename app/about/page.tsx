import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import InnerPageHero from "@/components/inner-page-hero"
import VisionMission from "@/components/about/vision-mission"
import CEOLetter from "@/components/about/ceo-letter"
import Team from "@/components/about/team"
import Values from "@/components/about/values"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "About Consentd - Empowering Data Privacy",
  description:
    "Learn about Consentd's mission to revolutionize data ownership and create a transparent, equitable ecosystem for individuals and businesses.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <InnerPageHero
        title="About Consentd"
        subtitle="Empowering individuals to control and monetize their data"
        backgroundImage="/placeholder.svg?height=800&width=1600"
      />
      <VisionMission />
      <CEOLetter />
      <Values />
      <Footer />
    </main>
  )
}


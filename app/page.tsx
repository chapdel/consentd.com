import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import ValueProposition from "@/components/value-proposition"
import WaitlistForm from "@/components/waitlist-form"
import HowItWorks from "@/components/how-it-works"
import Security from "@/components/security"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Consentd - Control & Monetize Your Data",
  description:
    "Consentd empowers you to take control of your personal data, keep it secure, and earn rewards for sharing—on your own terms.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <ValueProposition />
      <HowItWorks />
      <Security />
      <WaitlistForm />
      <Footer />
    </main>
  )
}


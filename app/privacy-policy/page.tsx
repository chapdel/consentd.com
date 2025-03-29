import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PrivacyPolicyContent from "@/components/privacy-policy-content"

export const metadata: Metadata = {
  title: "Privacy Policy - Consentd",
  description: "Learn about how Consentd collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 text-center">Privacy Policy</h1>
        </div>
      </div>
      <PrivacyPolicyContent />
      <Footer />
    </main>
  )
}


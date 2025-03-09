import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import InnerPageHero from "@/components/inner-page-hero"
import ContactForm from "@/components/contact/contact-form"
import CompanyInfo from "@/components/contact/company-info"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact Consentd - Get in Touch",
  description:
    "Have questions about Consentd? Get in touch with our team. We're here to help you take control of your data and start earning.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <InnerPageHero
        title="Get in Touch"
        subtitle="We're here to answer your questions and help you get started"
        backgroundImage="/placeholder.svg?height=800&width=1600"
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactForm />
            <CompanyInfo />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


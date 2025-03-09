"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { AlertCircle } from "lucide-react"
import { submitInvestorForm } from "@/lib/airtable"

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  company: z.string().min(2, { message: "Company name is required" }),
  investorType: z.enum(["Angel", "VC", "Corporate", "Family Office", "Other"]),
  investmentInterest: z.enum(["$10K-$50K", "$50K-$100K", "$100K-$250K", "$250K-$500K", "$500K+", "To be discussed"]),
  requestDocumentation: z.boolean().default(false),
})

export default function InvestorAction() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isError, setIsError] = useState(false)
  const [showCalendly, setShowCalendly] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      investorType: "Angel",
      investmentInterest: "To be discussed",
      requestDocumentation: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsError(false)
      // Envoyer les données à Airtable
      await submitInvestorForm({
        fullName: values.fullName,
        email: values.email,
        company: values.company,
        investorType: values.investorType,
        investmentInterest: values.investmentInterest,
        requestDocumentation: values.requestDocumentation,
      })

      setIsSubmitted(true)
      if (!values.requestDocumentation) {
        setShowCalendly(true)
      }
    } catch (error) {
      console.error("Error submitting investor form:", error)
      setIsError(true)
    }
  }

  return (
    <section id="investor-action" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-navy-900 mb-4"
        >
          Take the Next Step
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-navy-600 mb-12"
        >
          Schedule a meeting with our founding team or request investor documentation
        </motion.p>

        {!isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Professional Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@company.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company/Fund</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company or fund name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="investorType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Investor Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select investor type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Angel">Angel</SelectItem>
                          <SelectItem value="VC">VC</SelectItem>
                          <SelectItem value="Corporate">Corporate</SelectItem>
                          <SelectItem value="Family Office">Family Office</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="investmentInterest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Investment Interest Level</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select investment interest" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="$10K-$50K">$10K-$50K</SelectItem>
                          <SelectItem value="$50K-$100K">$50K-$100K</SelectItem>
                          <SelectItem value="$100K-$250K">$100K-$250K</SelectItem>
                          <SelectItem value="$250K-$500K">$250K-$500K</SelectItem>
                          <SelectItem value="$500K+">$500K+</SelectItem>
                          <SelectItem value="To be discussed">To be discussed</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="requestDocumentation"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Request investor documentation instead of scheduling a meeting</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                {isError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                    <AlertCircle className="h-6 w-6 text-red-500 mx-auto mb-2" />
                    <p className="text-red-600">There was an error submitting your request. Please try again.</p>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-turquoise-500 hover:bg-turquoise-600 text-white"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              </form>
            </Form>
            <p className="mt-4 text-sm text-navy-600 text-center">
              Note: A non-disclosure agreement may be required for access to certain documents.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg p-8 text-center max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-navy-900 mb-4">Thank you for your interest!</h3>
            {showCalendly ? (
              <>
                <p className="text-navy-600 mb-6">Please click the button below to schedule a meeting with our team.</p>
                <Button
                  onClick={() => setShowCalendly(true)}
                  className="bg-turquoise-500 hover:bg-turquoise-600 text-white"
                >
                  Schedule Meeting
                </Button>
              </>
            ) : (
              <>
                <p className="text-navy-600 mb-6">
                  We've received your request for documentation and will be in touch shortly.
                </p>
                <Button
                  className="bg-turquoise-500 hover:bg-turquoise-600 text-white"
                  onClick={() => {
                    // Logic to download the abridged pitch deck
                    console.log("Downloading abridged pitch deck")
                  }}
                >
                  Download Abridged Pitch Deck
                </Button>
              </>
            )}
          </motion.div>
        )}
      </div>

      <Dialog open={showCalendly} onOpenChange={setShowCalendly}>
        <DialogContent className="sm:max-w-[600px] sm:max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>Schedule a Meeting</DialogTitle>
          </DialogHeader>
          <div className="mt-4 h-[600px]">
            <iframe
              src="https://calendly.com/cecile-consentd/30min"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}


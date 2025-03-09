"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, AlertCircle } from "lucide-react"
import { submitWaitlistForm } from "@/lib/airtable"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  name: z.string().optional(),
  userType: z.enum(["individual", "business"]),
})

type FormValues = z.infer<typeof formSchema>

export default function WaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isError, setIsError] = useState(false)
  const [waitlistCount, setWaitlistCount] = useState(1842) // Simulated count

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      userType: "individual",
    },
  })

  async function onSubmit(values: FormValues) {
    try {
      setIsError(false)
      // Envoyer les données à Airtable
      await submitWaitlistForm({
        email: values.email,
        name: values.name || "",
        userType: values.userType,
      })

      setIsSubmitted(true)
      setWaitlistCount(waitlistCount + 1)
    } catch (error) {
      console.error("Error submitting waitlist form:", error)
      setIsError(true)
    }
  }

  return (
    <section id="waitlist" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Join the waitlist and be the first to get access
            </h2>
            <p className="text-lg text-gray-600">Be among the first to take control of your data and start earning.</p>
          </motion.div>

          {!isSubmitted ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} className="h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className="h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="userType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>I am a</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Select user type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="individual">Individual</SelectItem>
                            <SelectItem value="business">Business</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {isError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                      <AlertCircle className="h-6 w-6 text-red-500 mx-auto mb-2" />
                      <p className="text-red-600">There was an error submitting your information. Please try again.</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full h-12 bg-turquoise-500 hover:bg-turquoise-600 text-white"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Submitting..." : "Join Waitlist"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
            >
              <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-navy-900 mb-2">You&apos;re on the list!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for joining our waitlist. We&apos;ll notify you as soon as Consentd is ready for you.
              </p>
              <Button
                variant="outline"
                onClick={() => setIsSubmitted(false)}
                className="border-turquoise-500 text-turquoise-500 hover:bg-turquoise-50"
              >
                Back to form
              </Button>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-500">
              <span className="font-semibold text-navy-900">{waitlistCount.toLocaleString()}</span> people already
              waiting
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


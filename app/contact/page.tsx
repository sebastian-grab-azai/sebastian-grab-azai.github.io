"use client"

import type React from "react"
import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // simple honeypot (hidden field) to reduce bot spam
  const [trap, setTrap] = useState("")

  useEffect(() => {
    // optional: init once; you can also pass { publicKey } directly to send()
    emailjs.init({ publicKey: PUBLIC_KEY })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSent(false)

    // abort if honeypot filled (bot)
    if (trap.trim()) return

    // basic client-side guard
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setError("Please fill in all required fields.")
      return
    }

    setIsSubmitting(true)
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...formData,
          from_name: `${formData.firstName} ${formData.lastName}`,
          reply_to: formData.email, // maps to Reply-To in your template
        },
        { publicKey: PUBLIC_KEY } // not needed if you called emailjs.init
      )

      setSent(true)
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" })
    } catch (err) {
      setError("Sorry, something went wrong while sending. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen flex flex-col bg-sand">
      <Header />

      <main className="flex-1 py-22 lg:py-25 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Contact Info */}
            <div className="lg:pr-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-balance leading-tight">
                Get In Touch With Azai
              </h1>
              <p className="text-base lg:text-lg text-gray-700 mb-12 leading-relaxed">
                Have questions, feedback, or need support? We're here to help. Reach out to our team and we'll respond
                as quickly as possible.
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email:</p>
                  <a href="mailto:info@azai.ch" className="text-lg font-bold text-foreground hover:text-accent transition-colors">
                    info@azai.ch
                  </a>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">Phone:</p>
                  <a href="tel:+123456789" className="text-lg font-bold text-foreground hover:text-accent transition-colors">
                    +123 456 789
                  </a>
                </div>

                <div className="pt-2">
                  <p className="text-sm text-gray-600 mb-2">Want to talk right away?</p>
                  <a href="#book" className="text-foreground font-semibold underline hover:text-accent transition-colors inline-block">
                    Book a Meeting
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <Card className="bg-black/5 backdrop-blur-sm border-gray-200 shadow-xl">
              <CardContent className="p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* honeypot field (hidden) */}
                  <input
                    type="text"
                    name="company" // a field real users won't fill
                    className="hidden"
                    autoComplete="off"
                    tabIndex={-1}
                    value={trap}
                    onChange={(e) => setTrap(e.target.value)}
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-semibold text-foreground">
                        First name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="bg-gray-50 border-gray-200 h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-semibold text-foreground">
                        Last name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="bg-gray-50 border-gray-200 h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-50 border-gray-200 h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold text-foreground">
                      Phone <span className="text-gray-500 font-normal">(optional)</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+123 456 789"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-gray-50 border-gray-200 h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold text-foreground">
                      How can we help you? <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Start typing..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-gray-50 border-gray-200 resize-none"
                    />
                  </div>

                  {error && <p className="text-sm text-red-600">{error}</p>}
                  {sent && <p className="text-sm text-green-700">Thanks! Your message has been sent.</p>}

                  <div className="flex justify-end pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="bg-primary text-white hover:bg-primary/90 font-semibold disabled:opacity-70"
                    >
                      {isSubmitting ? "Sending..." : "Submit Inquiry"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  {/* tiny GDPR hint */}
                  <p className="text-xs text-gray-500 pt-2">
                    By submitting, you agree that we process your data to handle your request.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

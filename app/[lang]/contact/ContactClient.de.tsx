"use client"

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
import { de as L } from "@/lib/i18n/de"

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string

export default function ContactPageDEClient() {
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

  const [trap, setTrap] = useState("")

  useEffect(() => {
    emailjs.init({ publicKey: PUBLIC_KEY })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSent(false)

    if (trap.trim()) return

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setError(L.contact.form.errorRequired)
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
          reply_to: formData.email,
        },
        { publicKey: PUBLIC_KEY }
      )

      setSent(true)
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" })
    } catch (err) {
      setError(L.contact.form.sendError)
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

      <main className="flex-1 py-22 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Linke Spalte – Kontaktinfos */}
            <div className="lg:pr-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-balance leading-tight">
                {L.contact.h1}
              </h1>
              <p className="text-base lg:text-lg text-gray-700 mb-12 leading-relaxed">
                {L.contact.lead}
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{L.contact.emailLabel}:</p>
                  <a href="mailto:info@azai.ch" className="text-lg font-bold text-foreground hover:text-accent transition-colors">
                    info@azai.ch
                  </a>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">{L.contact.phoneLabel}:</p>
                  <a href="tel:+41796875082" className="text-lg font-bold text-foreground hover:text-accent transition-colors">
                    +41 79 687 50 82
                  </a>
                </div>

                <div className="pt-2">
                  <p className="text-sm text-gray-600 mb-2">{L.contact.questionNow}</p>
                  <a href="/de/#book" className="text-foreground font-semibold underline hover:text-accent transition-colors inline-block">
                    {L.contact.bookLink}
                  </a>
                </div>
              </div>
            </div>

            {/* Rechte Spalte – Formular */}
            <Card className="bg-black/5 backdrop-blur-sm border-gray-200 shadow-xl">
              <CardContent className="p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot-Feld (hidden) */}
                  <input
                    type="text"
                    name="company"
                    className="hidden"
                    autoComplete="off"
                    tabIndex={-1}
                    value={trap}
                    onChange={(e) => setTrap(e.target.value)}
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-semibold text-foreground">
                        {L.contact.form.firstName} <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder={L.contact.form.placeholders.firstName}
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="bg-gray-50 border-gray-200 h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-semibold text-foreground">
                        {L.contact.form.lastName} <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder={L.contact.form.placeholders.lastName}
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="bg-gray-50 border-gray-200 h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                      {L.contact.form.email} <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={L.contact.form.placeholders.email}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-50 border-gray-200 h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold text-foreground">
                      {L.contact.form.phone} <span className="text-gray-500 font-normal">{L.contact.form.phoneOptional}</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder={L.contact.form.placeholders.phone}
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-gray-50 border-gray-200 h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold text-foreground">
                      {L.contact.form.message} <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={L.contact.form.placeholders.message}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-gray-50 border-gray-200 resize-none"
                    />
                  </div>

                  {error && <p className="text-sm text-red-600">{error}</p>}
                  {sent && <p className="text-sm text-green-700">{L.contact.form.success}</p>}

                  <div className="flex justify-end pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="bg-primary text-white hover:bg-primary/90 font-semibold disabled:opacity-70"
                    >
                      {isSubmitting ? L.contact.form.sending : L.contact.form.submit}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  {/* kleiner DSGVO-Hinweis */}
                  <p className="text-xs text-gray-500 pt-2">
                    {L.contact.form.gdpr}
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
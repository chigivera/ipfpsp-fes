"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"

export default function EnrollmentSection() {
  const { t, dir } = useLanguage()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Simulate submission
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ fullName: "", email: "", phone: "", program: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24"
      className="py-20 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 moroccan-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t("enroll.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("enroll.desc")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">{t("enroll.getInTouch")}</h3>
              <p className="text-muted-foreground">{t("enroll.questions")}</p>
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <Card className="p-4 border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t("enroll.phone.label")}</h4>
                    <p className="text-muted-foreground">{t("contact.phone")}</p>
                    <p className="text-muted-foreground">{t("contact.whatsapp")}</p>
                  </div>
                </div>
              </Card>

              {/* Email */}
              <Card className="p-4 border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t("enroll.email.label")}</h4>
                    <p className="text-muted-foreground">{t("contact.email")}</p>
                  </div>
                </div>
              </Card>

              {/* Location */}
              <Card className="p-4 border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t("enroll.location")}</h4>
                    <p className="text-muted-foreground">{t("contact.address")}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <p className="text-xs text-muted-foreground">{t("enroll.support")}</p>
              </div>
              <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                <div className="text-2xl font-bold text-accent">1-2 {t("hero.experience").split(" ")[0]}</div>
                <p className="text-xs text-muted-foreground">{t("enroll.response")}</p>
              </div>
            </div>
          </div>

          {/* Enrollment Form */}
          <Card className="p-8 border-none shadow-xl">
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100">{t("enroll.thanks")}</h4>
                  <p className="text-sm text-green-800 dark:text-green-200">{t("enroll.thanks.message")}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium mb-2">{t("enroll.fullName")}</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder={t("enroll.fullName.placeholder")}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">{t("enroll.email.label")}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder={t("enroll.email.placeholder")}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-2">{t("enroll.phone.label")}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder={t("enroll.phone.placeholder")}
                />
              </div>

              {/* Program */}
              <div>
                <label className="block text-sm font-medium mb-2">{t("enroll.program")}</label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">{t("enroll.program.select")}</option>
                  <option value="languages">{t("enroll.program.languages")}</option>
                  <option value="nursing">{t("enroll.program.nursing")}</option>
                  <option value="both">{t("enroll.program.both")}</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">{t("enroll.message")}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder={t("enroll.message.placeholder")}
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full gap-2 bg-primary hover:bg-primary/90">
                {t("enroll.submit")}
                <Send className="w-4 h-4" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">{t("enroll.contact.within")}</p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

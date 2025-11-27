"use client"

import { useLanguage } from "@/context/language-context"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Shield, Globe, Award } from "lucide-react"

export default function CertificationsSection() {
  const { t } = useLanguage()

  const certifications = [
    {
      icon: Shield,
      titleKey: "certs.international",
      descriptionKey: "certs.recognized",
      color: "from-primary to-blue-600",
    },
    {
      icon: Globe,
      titleKey: "certs.standards",
      descriptionKey: "certs.curriculum",
      color: "from-accent to-yellow-600",
    },
    {
      icon: Award,
      titleKey: "certs.opportunities",
      descriptionKey: "certs.graduates",
      color: "from-secondary to-orange-600",
    },
  ]

  const trustIndicators = [
    { label: "25+", valueKey: "footer.mission" },
    { label: "500+", valueKey: "hero.graduates" },
    { label: "95%", valueKey: "enroll.response" },
    { label: "50+", valueKey: "nav.contact" },
  ]

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t("certs.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("certs.subtitle")}</p>
        </div>

        {/* Certifications Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon
            return (
              <Card
                key={idx}
                className="border-none shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden"
              >
                <div className={`h-24 bg-gradient-to-r ${cert.color} opacity-90 relative overflow-hidden`}>
                  <div className="absolute inset-0 moroccan-pattern opacity-20" />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">{t(cert.titleKey)}</h3>
                  <p className="text-muted-foreground text-center text-sm">{t(cert.descriptionKey)}</p>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-12 border border-primary/20">
          <div className="grid md:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, idx) => (
              <div key={idx} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <div className="text-3xl font-bold text-primary">{indicator.label}</div>
                </div>
                <p className="text-sm text-muted-foreground">{t(indicator.valueKey)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Logos Section */}
        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-2xl font-bold text-center mb-8">{t("certs.accredited")}</h3>
          <div className="grid md:grid-cols-4 gap-8 items-center justify-center">
            {[
              {
                name: "وزارة التعليم المغربية",
                en: "Ministry of Education Morocco",
                de: "Ministerium für Bildung Marokko",
              },
              { name: "ISO 9001", en: "ISO 9001 Quality", de: "ISO 9001 Qualität" },
              { name: "المعايير الدولية", en: "International Standards", de: "Internationale Standards" },
              { name: "معتمد EU", en: "EU Certified", de: "EU-zertifiziert" },
            ].map((org, idx) => (
              <div
                key={idx}
                className="p-6 bg-card rounded-lg border border-border text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-sm font-bold text-primary/80">{org.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

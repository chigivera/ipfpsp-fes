"use client"

import { useLanguage } from "@/context/language-context"
import { Card } from "@/components/ui/card"
import { FileText, Search, ClipboardCheck, CheckCircle2 } from "lucide-react"

export default function RegistrationSection() {
  const { t, dir } = useLanguage()

  const steps = [
    {
      icon: FileText,
      titleKey: "registration.step1.title",
      descKey: "registration.step1.desc",
      number: 1,
      color: "from-primary to-blue-600",
    },
    {
      icon: Search,
      titleKey: "registration.step2.title",
      descKey: "registration.step2.desc",
      number: 2,
      color: "from-accent to-yellow-600",
    },
    {
      icon: ClipboardCheck,
      titleKey: "registration.step3.title",
      descKey: "registration.step3.desc",
      number: 3,
      color: "from-secondary to-orange-600",
    },
    {
      icon: CheckCircle2,
      titleKey: "registration.step4.title",
      descKey: "registration.step4.desc",
      number: 4,
      color: "from-green-500 to-emerald-600",
    },
  ]

  return (
    <section id="registration" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t("registration.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("enroll.questions")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <Card
                key={idx}
                className="p-6 border-none shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${step.color}`} />
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center text-white font-bold text-xl`}>
                    {step.number}
                  </div>
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{t(step.titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{t(step.descKey)}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}




"use client"

import { useLanguage } from "@/context/language-context"
import { Phone, Clock } from "lucide-react"

export default function ContactInfoSection() {
  const { t, dir } = useLanguage()

  const departments = [
    {
      label: t("contact.germanLessons"),
      number: t("contact.germanLessonsNumber"),
      icon: "🇩🇪",
    },
    {
      label: t("contact.nursingCourses"),
      number: t("contact.nursingNumber"),
      icon: "🏥",
    },
    {
      label: t("contact.jobsGermany"),
      numbers: [t("contact.germanJobsNumber"), t("contact.germanNumber")],
      icon: "💼",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t("contact.important")}</h2>
          <p className="text-lg text-foreground/60">{t("enroll.questions")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Working Hours */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-primary/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{t("contact.workingHours")}</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-lg font-semibold text-foreground">{t("contact.weekdays")}</p>
              </div>
              <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                <p className="text-lg font-semibold text-foreground">{t("contact.saturday")}</p>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-primary/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{t("contact.emergency")}</h3>
            </div>

            <div className="space-y-3">
              {departments.map((dept, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-primary/10 hover:border-primary/30 transition"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{dept.icon}</span>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground text-sm">{dept.label}</p>
                      <div className="mt-2 space-y-1">
                        {dept.number && (
                          <a
                            href={`tel:${dept.number.replace(/\s/g, "")}`}
                            className="text-primary hover:text-primary/80 font-bold text-lg transition block"
                          >
                            {dept.number}
                          </a>
                        )}
                        {dept.numbers &&
                          dept.numbers.map((num, i) => (
                            <a
                              key={i}
                              href={`tel:${num.replace(/\s/g, "")}`}
                              className="text-primary hover:text-primary/80 font-bold text-lg transition block"
                            >
                              {num}
                            </a>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="mt-12 p-8 bg-primary/10 rounded-2xl border border-primary/20">
          <p className="text-center text-foreground text-lg">
            <span className="font-semibold">{t("enroll.support")}</span> - {t("enroll.response")}
          </p>
        </div>
      </div>
    </section>
  )
}

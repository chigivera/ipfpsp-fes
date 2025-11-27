"use client"

import { useLanguage } from "@/context/language-context"
import { Phone, Mail, Facebook, Instagram, TicketIcon as TikTok } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProgramsInfoSection() {
  const { language, t } = useLanguage()
  const isRTL = language === "ar"

  const programs = [
    {
      key: "program1",
      icon: "👩‍⚕️",
      nameKey: "program1_name",
      levelKey: "program1_level",
      durationKey: "program1_duration",
      requirementKey: "program1_requirement",
      yearsKey: "program1_years",
      color: "from-blue-600 to-blue-700",
    },
    {
      key: "program2",
      icon: "🏥",
      nameKey: "program2_name",
      levelKey: "program2_level",
      durationKey: "program2_duration",
      requirementKey: "program2_requirement",
      yearsKey: "program2_years",
      color: "from-teal-600 to-teal-700",
    },
  ]

  const contacts = [
    { type: "phone", value: "+212 6-30-99-50-44" },
    { type: "phone", value: "+212 5-35-94-34-68" },
    { type: "phone", value: "+49 1747780532" },
    { type: "email", value: "ipfpsp@gmail.com" },
  ]

  const socialMedia = [
    { platform: "Facebook", url: "https://facebook.com", icon: Facebook },
    { platform: "Instagram", url: "https://instagram.com", icon: Instagram },
    { platform: "TikTok", url: "https://tiktok.com", icon: TikTok },
  ]

  return (
    <section className={`py-16 px-4 bg-gradient-to-b from-slate-50 to-white ${isRTL ? "rtl" : "ltr"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-orange-500 to-amber-600 bg-clip-text text-transparent">
            I.P.F.P.S.P
          </h2>
          <p className="text-lg text-slate-700 font-semibold mb-2">{t("institution_name")}</p>
          <p className="text-sm text-slate-600">{t("authorization_date")}</p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((program) => (
            <div
              key={program.key}
              className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white border-t-4 ${
                program.key === "program1" ? "border-blue-600" : "border-teal-600"
              }`}
            >
              {/* Program Header */}
              <div className={`bg-gradient-to-r ${program.color} text-white p-6`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{program.icon}</span>
                  <h3 className="text-2xl font-bold">{t(program.nameKey)}</h3>
                </div>
              </div>

              {/* Program Content */}
              <div className="p-8 space-y-6">
                {/* Education Level */}
                <div>
                  <label className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                    {t("education_level")}
                  </label>
                  <p className="text-lg font-semibold text-slate-900 mt-2">{t(program.levelKey)}</p>
                </div>

                {/* Requirements */}
                <div>
                  <label className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                    {t("admission_requirement")}
                  </label>
                  <p className="text-lg font-semibold text-slate-900 mt-2">{t(program.requirementKey)}</p>
                </div>

                {/* Duration */}
                <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg p-4">
                  <label className="text-sm font-semibold text-slate-600 uppercase tracking-wider block">
                    {t("training_duration")}
                  </label>
                  <p
                    className={`text-2xl font-bold mt-2 ${
                      program.key === "program1" ? "text-blue-600" : "text-teal-600"
                    }`}
                  >
                    {t(program.yearsKey)}
                  </p>
                </div>

                {/* Enrollment Button */}
                <Button
                  className={`w-full py-3 text-white font-semibold rounded-lg transition-all ${
                    program.key === "program1" ? "bg-blue-600 hover:bg-blue-700" : "bg-teal-600 hover:bg-teal-700"
                  }`}
                >
                  {t("enroll_now")}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact and Social Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-2xl">📞</span>
              {t("contact_us")}
            </h3>
            <div className="space-y-4">
              {contacts.map((contact, idx) => (
                <a
                  key={idx}
                  href={contact.type === "phone" ? `tel:${contact.value}` : `mailto:${contact.value}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 transition-colors"
                >
                  {contact.type === "phone" ? (
                    <>
                      <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{contact.value}</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{contact.value}</span>
                    </>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-2xl">🌐</span>
              {t("follow_us")}
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {socialMedia.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 hover:from-blue-100 hover:to-blue-50 transition-all hover:shadow-md"
                  >
                    <Icon className="w-6 h-6 text-blue-600 mb-2" />
                    <span className="text-xs font-semibold text-slate-700 text-center">{social.platform}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Certification Badge */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-bold shadow-lg">
            ✓ {t("officially_authorized")}
          </div>
          <p className="mt-4 text-slate-600 text-sm">{t("authorization_date")}</p>
        </div>
      </div>
    </section>
  )
}

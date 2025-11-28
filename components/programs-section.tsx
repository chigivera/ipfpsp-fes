"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Heart, Globe, Users, Zap, Award, Briefcase, GraduationCap, Stethoscope, UtensilsCrossed, HeartPulse, Laptop, Languages, Building2, FlaskConical, X } from "lucide-react"
import Image from "next/image"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer"

export default function ProgramsSection() {
  const { t, dir, language } = useLanguage()
  const [selectedItem, setSelectedItem] = useState<{ type: 'diploma' | 'formation', id: number } | null>(null)

  const formations = [
    {
      id: 1,
      titleKey: "programs.delegue.title",
      descKey: "programs.delegue.desc",
      fullDescKey: "programs.delegue.full",
      icon: Briefcase,
      color: "from-blue-600 to-blue-700",
      imageKey: "programs.delegue.image",
    },
    {
      id: 2,
      titleKey: "programs.pedagogique.title",
      descKey: "programs.pedagogique.desc",
      fullDescKey: "programs.pedagogique.full",
      icon: BookOpen,
      color: "from-green-600 to-green-700",
      imageKey: "programs.pedagogique.image",
    },
    {
      id: 3,
      titleKey: "programs.paramedical.title",
      descKey: "programs.paramedical.desc",
      fullDescKey: "programs.paramedical.full",
      icon: Stethoscope,
      color: "from-red-600 to-red-700",
      imageKey: "programs.paramedical.image",
    },
    {
      id: 4,
      titleKey: "programs.koch.title",
      descKey: "programs.koch.desc",
      fullDescKey: "programs.koch.full",
      icon: UtensilsCrossed,
      color: "from-orange-600 to-orange-700",
      imageKey: "programs.koch.image",
    },
    {
      id: 5,
      titleKey: "programs.premiers_secours.title",
      descKey: "programs.premiers_secours.desc",
      fullDescKey: "programs.premiers_secours.full",
      icon: HeartPulse,
      color: "from-red-500 to-pink-600",
      imageKey: "programs.premiers_secours.image",
    },
    {
      id: 6,
      titleKey: "programs.bureautique.title",
      descKey: "programs.bureautique.desc",
      fullDescKey: "programs.bureautique.full",
      icon: Laptop,
      color: "from-purple-600 to-purple-700",
      imageKey: "programs.bureautique.image",
    },
  ]

  const diplomas = [
    {
      id: 1,
      titleKey: "diplomas.infirmier_polyvalent.title",
      descKey: "diplomas.infirmier_polyvalent.desc",
      fullDescKey: "diplomas.infirmier_polyvalent.full",
      icon: Heart,
      color: "from-primary to-blue-600",
      duration: "program1_years",
      imageKey: "diplomas.infirmier_polyvalent.image",
    },
    {
      id: 2,
      titleKey: "diplomas.aide_soignant.title",
      descKey: "diplomas.aide_soignant.desc",
      fullDescKey: "diplomas.aide_soignant.full",
      icon: Stethoscope,
      color: "from-secondary to-red-600",
      duration: "program2_years",
      imageKey: "diplomas.aide_soignant.image",
    },
  ]

  const languagePrograms = [
    {
      id: 1,
      titleKey: "languages.german.title",
      descKey: "languages.german.desc",
      levelsKey: "languages.german.levels",
      icon: Globe,
      color: "from-primary to-blue-600",
    },
    {
      id: 2,
      titleKey: "languages.english.title",
      descKey: "languages.english.desc",
      levelsKey: "languages.english.levels",
      icon: Languages,
      color: "from-accent to-yellow-600",
    },
    {
      id: 3,
      titleKey: "languages.french.title",
      descKey: "languages.french.desc",
      levelsKey: "languages.french.levels",
      icon: Globe,
      color: "from-secondary to-orange-600",
    },
  ]

  const programs = [
    {
      id: 1,
      titleKey: "programs.languages",
      descKey: "programs.languages.desc",
      icon: Globe,
      color: "from-primary to-blue-600",
      features: ["programs.english", "programs.french", "programs.spanish"],
    },
    {
      id: 2,
      titleKey: "programs.nursing",
      descKey: "programs.nursing.desc",
      icon: Heart,
      color: "from-secondary to-red-600",
      features: ["programs.clinical", "programs.standards", "programs.certification"],
    },
  ]

  const features = [
    { icon: BookOpen, titleKey: "programs.experts" },
    { icon: Users, titleKey: "programs.smallClasses" },
    { icon: Zap, titleKey: "programs.modern" },
    { icon: Award, titleKey: "programs.certified" },
  ]

  return (
    <section id="programs" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t("programs.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("programs.excellence")}</p>
        </div>

        {/* Diplomas Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">{t("diplomas.title")}</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {diplomas.map((diploma) => {
              const IconComponent = diploma.icon
              return (
                <Card
                  key={diploma.id}
                  className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedItem({ type: 'diploma', id: diploma.id })}
                >
                  <div className={`h-24 bg-gradient-to-r ${diploma.color} opacity-90 relative overflow-hidden`}>
                    <div className="absolute inset-0 moroccan-pattern opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="w-16 h-16 text-white/30" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">{t(diploma.titleKey)}</h4>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{t(diploma.descKey)}</p>
                    <div className="text-xs font-semibold text-primary">{typeof diploma.duration === "string" ? diploma.duration : t(diploma.duration)}</div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Formations Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Formations / Ausbildungsprogramme / برامج التكوين</h3>
            <p className="text-muted-foreground">برامج متنوعة لتلبية احتياجاتك / Programmes variés pour répondre à vos besoins / Vielfältige Programme für Ihre Bedürfnisse</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formations.map((formation) => {
              const IconComponent = formation.icon
              return (
                <Card
                  key={formation.id}
                  className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedItem({ type: 'formation', id: formation.id })}
                >
                  <div className={`h-24 bg-gradient-to-r ${formation.color} opacity-90 relative overflow-hidden`}>
                    <div className="absolute inset-0 moroccan-pattern opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="w-16 h-16 text-white/30" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">{t(formation.titleKey)}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-4">{t(formation.descKey)}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Language Courses Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">{t("languages.title")}</h3>
              <p className="text-muted-foreground leading-relaxed">{t("languages.description")}</p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop"
                alt="Language Learning - Students Studying Languages"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {languagePrograms.map((lang) => {
              const IconComponent = lang.icon
              return (
                <Card
                  key={lang.id}
                  className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <div className={`h-24 bg-gradient-to-r ${lang.color} opacity-90 relative overflow-hidden`}>
                    <div className="absolute inset-0 moroccan-pattern opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="w-16 h-16 text-white/30" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">{t(lang.titleKey)}</h4>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{t(lang.descKey)}</p>
                    <p className="text-xs text-primary font-medium">{t(lang.levelsKey)}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Online Learning */}
        <div className="mb-16">
          <Card className="p-8 md:p-12 border-none shadow-xl bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="text-center mb-6">
              <Laptop className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">{t("online.title")}</h3>
            </div>
            <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground">
              <p>{t("online.description")}</p>
              <p>{t("online.description2")}</p>
              <p className="font-semibold text-foreground">{t("online.allCourses")}</p>
            </div>
          </Card>
        </div>

        {/* Companies Section */}
        <div className="mb-16">
          <Card className="p-8 md:p-12 border-none shadow-xl bg-gradient-to-br from-secondary/5 to-primary/5">
            <div className="text-center mb-6">
              <Building2 className="w-16 h-16 text-secondary mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">{t("companies.title")}</h3>
            </div>
            <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground mb-8">
              <p>{t("companies.description")}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 border-none shadow-lg">
                <h4 className="font-bold mb-2">{t("companies.training.title")}</h4>
                <p className="text-sm text-muted-foreground">{t("companies.training.desc")}</p>
              </Card>
              <Card className="p-6 border-none shadow-lg">
                <h4 className="font-bold mb-2">{t("companies.partnerships.title")}</h4>
                <p className="text-sm text-muted-foreground">{t("companies.partnerships.desc")}</p>
              </Card>
              <Card className="p-6 border-none shadow-lg">
                <h4 className="font-bold mb-2">{t("companies.recruitment.title")}</h4>
                <p className="text-sm text-muted-foreground">{t("companies.recruitment.desc")}</p>
              </Card>
            </div>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-12 border border-primary/10">
          <h3 className="text-2xl font-bold mb-8 text-center">{t("programs.why")}</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-sm">{t(feature.titleKey)}</h4>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Drawer for Diploma/Formation Details */}
      <Drawer 
        open={selectedItem !== null} 
        onOpenChange={(open) => !open && setSelectedItem(null)}
        direction={dir === "rtl" ? "left" : "right"}
        dismissible={true}
      >
        <DrawerContent className={`${dir === "rtl" ? "left-0" : "right-0"} !w-[60%] !min-w-[50%] !max-w-[80%] sm:!max-w-[80%]`}>
          {selectedItem && (() => {
            const item = selectedItem.type === 'diploma' 
              ? diplomas.find(d => d.id === selectedItem.id)
              : formations.find(f => f.id === selectedItem.id)
            
            if (!item) return null
            
            const fullText = selectedItem.type === 'diploma'
              ? t((item as typeof diplomas[0]).fullDescKey)
              : t((item as typeof formations[0]).fullDescKey)
            
            const imagePath = selectedItem.type === 'diploma'
              ? t((item as typeof diplomas[0]).imageKey)
              : t((item as typeof formations[0]).imageKey)
            
            // Split the full text by language markers
            const parts = fullText.split(/\n\n/)
            const germanPart = parts.find(p => p.startsWith("Deutsch:"))
            const arabicPart = parts.find(p => p.startsWith("العربية:"))
            const frenchPart = parts.find(p => p.startsWith("Français:"))
            
            const currentLangPart = language === "de" ? germanPart 
              : language === "ar" ? arabicPart 
              : frenchPart
            
            const displayText = currentLangPart 
              ? currentLangPart.replace(/^(Deutsch:|العربية:|Français:)\s*/, "")
              : fullText

            return (
              <>
                <DrawerHeader>
                  <DrawerTitle className="text-2xl font-bold">{t(item.titleKey)}</DrawerTitle>
                  <DrawerClose className="absolute top-4 right-4">
                    <X className="h-4 w-4" />
                  </DrawerClose>
                </DrawerHeader>
                <div className="p-6 overflow-y-auto max-h-[70vh]">
                  <div className="relative w-full h-96 mb-6 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={imagePath || "https://images.pexels.com/photos/28271058/pexels-photo-28271058.jpeg?w=1200&h=600&fit=crop"}
                      alt={t(item.titleKey)}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="prose prose-sm max-w-none">
                    <p className="whitespace-pre-line text-muted-foreground leading-relaxed">
                      {displayText}
                    </p>
                  </div>
                </div>
              </>
            )
          })()}
        </DrawerContent>
      </Drawer>
    </section>
  )
}

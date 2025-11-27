"use client"

import { useLanguage } from "@/context/language-context"
import { Card } from "@/components/ui/card"
import { Target, Heart, Lightbulb, Globe, Award } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  const { t, dir } = useLanguage()

  const values = [
    {
      icon: Award,
      titleKey: "values.excellence.title",
      descKey: "values.excellence.desc",
      color: "from-primary to-blue-600",
    },
    {
      icon: Target,
      titleKey: "values.professionalism.title",
      descKey: "values.professionalism.desc",
      color: "from-secondary to-red-600",
    },
    {
      icon: Heart,
      titleKey: "values.humanity.title",
      descKey: "values.humanity.desc",
      color: "from-accent to-yellow-600",
    },
    {
      icon: Lightbulb,
      titleKey: "values.innovation.title",
      descKey: "values.innovation.desc",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Globe,
      titleKey: "values.openness.title",
      descKey: "values.openness.desc",
      color: "from-purple-500 to-indigo-600",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t("about.title")}</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>{t("about.description")}</p>
              <p>{t("about.description2")}</p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/5905708/pexels-photo-5905708.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                alt="IPFPSP Institute - Students Learning"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t("vision.title")}</h2>
          </div>
          <Card className="p-8 md:p-12 border-none shadow-xl bg-gradient-to-br from-primary/5 to-accent/5">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center">
              {t("vision.description")}
            </p>
          </Card>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t("values.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("programs.excellence")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <Card
                  key={idx}
                  className="p-6 border-none shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden"
                >
                  <div className={`h-20 bg-gradient-to-r ${value.color} opacity-90 relative overflow-hidden mb-6`}>
                    <div className="absolute inset-0 moroccan-pattern opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-12 h-12 text-white/30" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t(value.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(value.descKey)}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}




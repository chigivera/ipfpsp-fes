"use client"

import { useLanguage } from "@/context/language-context"
import { Card } from "@/components/ui/card"
import { BookOpen, FlaskConical, Laptop, Library, Users } from "lucide-react"
import Image from "next/image"

export default function CampusSection() {
  const { t, dir } = useLanguage()

  const facilities = [
    {
      icon: BookOpen,
      titleKey: "campus.facility1.title",
      descKey: "campus.facility1.desc",
    },
    {
      icon: FlaskConical,
      titleKey: "campus.facility2.title",
      descKey: "campus.facility2.desc",
    },
    {
      icon: Library,
      titleKey: "campus.facility3.title",
      descKey: "campus.facility3.desc",
    },
    {
      icon: Laptop,
      titleKey: "campus.facility4.title",
      descKey: "campus.facility4.desc",
    },
    {
      icon: Users,
      titleKey: "campus.facility5.title",
      descKey: "campus.facility5.desc",
    },
  ]

  return (
    <section id="campus" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t("campus.title")}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>{t("campus.description")}</p>
            <p>{t("campus.description2")}</p>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop"
              alt="IPFPSP Campus - Modern Library and Facilities"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, idx) => {
            const Icon = facility.icon
            return (
              <Card key={idx} className="p-6 border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{t(facility.titleKey)}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{t(facility.descKey)}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}


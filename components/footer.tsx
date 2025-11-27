"use client"

import { useLanguage } from "@/context/language-context"
import { MapPin, Mail, Phone, Facebook, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const { t, dir } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 py-16">
          {/* About */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold flex items-center gap-2">
              <Image src="/logo.png" alt="IPFPSP-FES Logo" width={40} height={40} className="w-10 h-10" />
              IPFPSP-FES
            </h4>
            <p className="text-sm text-primary-foreground/80">{t("footer.description")}</p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">{t("footer.programs")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#programs" className="hover:text-accent transition">
                  {t("programs.languages")}
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-accent transition">
                  {t("programs.nursing")}
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-accent transition">
                  {t("nav.certifications")}
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">{t("footer.about")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-accent transition">
                  {t("footer.mission")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  {t("footer.team")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  {t("footer.stories")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  {t("footer.blog")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">{t("footer.contact")}</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{t("footer.location")}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="tel:+212630995044" className="hover:text-accent transition">
                  +212 6 30 99 50 44
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:ipfpsp@gmail.com" className="hover:text-accent transition">
                  ipfpsp@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20" />

        {/* Map Section */}
        <div className="py-8 border-b border-primary-foreground/20">
          <h4 className="text-2xl font-bold mb-6 text-center">{t("footer.location")}</h4>
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl border-2 border-primary-foreground/20">
            <iframe
              src="https://www.google.com/maps?q=34.0333907,-4.9962875&hl=en&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="IPFPSP Location - Fès, Morocco"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary/10 to-transparent" />
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://www.google.com/maps/place/IPFPSP+F%C3%A8s+de+sant%C3%A9/@34.0333907,-4.9962875,17z/data=!3m1!4b1!4m6!3m5!1s0xd9f8b004f1ffb61:0x6b3ccb8551cca55a!8m2!3d34.0333907!4d-4.9962875!16s%2Fg%2F11mf1b5hmm?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-foreground/80 hover:text-accent transition inline-flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              {t("contact.address")}
            </a>
          </div>
        </div>

        {/* Working Hours and Emergency Contacts */}
        <div className="border-b border-primary-foreground/20 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Working Hours */}
            <div className="space-y-3">
              <h4 className="text-lg font-bold">{t("contact.workingHours")}</h4>
              <div className="text-sm space-y-2 text-primary-foreground/90">
                <p>{t("contact.weekdays")}</p>
                <p>{t("contact.saturday")}</p>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="space-y-3">
              <h4 className="text-lg font-bold">{t("contact.important")}</h4>
              <div className="text-sm space-y-3">
                <div>
                  <p className="font-semibold text-primary-foreground mb-1">{t("contact.germanLessons")}</p>
                  <a href="tel:+21263099504" className="hover:text-accent transition">
                    {t("contact.germanLessonsNumber")}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground mb-1">{t("contact.nursingCourses")}</p>
                  <a href="tel:+212779747529" className="hover:text-accent transition">
                    {t("contact.nursingNumber")}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground mb-1">{t("contact.jobsGermany")}</p>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+212344361000" className="hover:text-accent transition">
                      {t("contact.germanJobsNumber")}
                    </a>
                    <a href="tel:+4917477805332" className="hover:text-accent transition">
                      {t("contact.germanNumber")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 flex flex-col sm:flex-row justify-between items-center text-sm text-primary-foreground/80 gap-4">
          <p>{t("footer.rights")}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition">
              {t("footer.privacy")}
            </a>
            <a href="#" className="hover:text-accent transition">
              {t("footer.terms")}
            </a>
            <a href="#" className="hover:text-accent transition">
              {t("footer.cookies")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

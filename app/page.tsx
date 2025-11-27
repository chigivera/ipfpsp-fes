"use client"

import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import CampusSection from "@/components/campus-section"
import ProgramsSection from "@/components/programs-section"
import CertificationsSection from "@/components/certifications-section"
import RegistrationSection from "@/components/registration-section"
import EnrollmentSection from "@/components/enrollment-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"
import ProgramsInfoSection from "@/components/programs-info-section"
import ContactInfoSection from "@/components/contact-info-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CampusSection />
      <ProgramsSection />
      <ProgramsInfoSection />
      <ContactInfoSection />
      <CertificationsSection />
      <RegistrationSection />
      <EnrollmentSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

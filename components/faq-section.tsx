"use client"

import { useLanguage } from "@/context/language-context"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQSection() {
  const { t, dir } = useLanguage()

  const faqs = [
    {
      questionKey: "faq.q1.question",
      answerKey: "faq.q1.answer",
    },
    {
      questionKey: "faq.q2.question",
      answerKey: "faq.q2.answer",
    },
    {
      questionKey: "faq.q3.question",
      answerKey: "faq.q3.answer",
    },
    {
      questionKey: "faq.q4.question",
      answerKey: "faq.q4.answer",
    },
    {
      questionKey: "faq.q5.question",
      answerKey: "faq.q5.answer",
    },
    {
      questionKey: "faq.q6.question",
      answerKey: "faq.q6.answer",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background to-card/30 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t("faq.title")}</h2>
          <p className="text-lg text-muted-foreground">
            {t("enroll.questions")}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-border">
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                {t(faq.questionKey)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {t(faq.answerKey)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}






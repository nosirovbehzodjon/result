"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to see results?",
    answer:
      "Most clients notice significant improvements within 2-3 weeks. However, lasting confidence building is a journey. Our programs are designed for sustainable, long-term growth.",
  },
  {
    question: "Are the courses suitable for beginners?",
    answer:
      "All our courses are designed for people at any level. Whether you're just starting or looking to deepen your confidence, we have programs for you.",
  },
  {
    question: "What if I don't see results?",
    answer:
      "We offer a 30-day money-back guarantee. Your satisfaction is our priority. If you're not happy, we'll refund you completely, no questions asked.",
  },
  {
    question: "Can I access the courses on mobile?",
    answer:
      "Yes! All our courses are fully accessible on mobile devices. Learn whenever and wherever it's convenient for you.",
  },
  {
    question: "Do you offer group discounts?",
    answer:
      "Yes, we do! If you're interested in bringing our programs to your organization or group, please contact us for special pricing.",
  },
  {
    question: "How do I get started?",
    answer:
      'Simply click "Get Started" or "Schedule a Free Consultation" to begin. We\'ll help you choose the perfect program for your needs.',
  },
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our programs and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-background hover:bg-primary/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-primary/5 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

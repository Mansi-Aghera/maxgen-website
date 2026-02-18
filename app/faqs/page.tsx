"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageBanner from "@/components/ui/PageBanner";
import { main } from "framer-motion/client";

type FAQ = {
  question: string;
  answer: string;
};

const faqsLeft: FAQ[] = [
  {
    question: "Incomprehensibility or readability? That is the question.",
    answer:
      "5 Years Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Origin and meaning of the Lorem Ipsum text",
    answer:
      "5 Years Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const faqsRight: FAQ[] = [
  {
    question: "Incomprehensibility or readability? That is the question.",
    answer:
      "5 Years Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Origin and meaning of the Lorem Ipsum text",
    answer:
      "5 Years Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* PAGE BANNER */}
      <main className="min-h-screen bg-[#f6f7fb] pt-24">
        <PageBanner
          title="FAQS"
          crumbs={[{ label: "Home", href: "/" }, { label: "Customer's FAQ" }]}
          bg1="/background.png"
          bg2="/keyboard1.jpg"
        />

        <section
          id="customer-faq"
          className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* TITLE */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center text-2xl sm:text-3xl lg:text-[42px] font-bold text-[#0b1b3f] mb-10 lg:mb-14"
            >
              FAQS
            </motion.h2>

            {/* GRID */}
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
              <FAQColumn faqs={faqsLeft} />
              <FAQColumn faqs={faqsRight} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function FAQColumn({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <FAQItem
          key={faq.question}
          faq={faq}
          open={open === i}
          onClick={() => setOpen(open === i ? null : i)}
        />
      ))}
    </div>
  );
}

function FAQItem({
  faq,
  open,
  onClick,
}: {
  faq: FAQ;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      className="rounded-xl border border-gray-200 bg-white overflow-hidden"
    >
      {/* HEADER */}
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
      >
        <span className="text-[#0b1b3f] font-medium text-base sm:text-lg">
          {faq.question}
        </span>

        {/* ARROW */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#0b1b3f]"
        >
          ▾
        </motion.span>
      </button>

      {/* BODY */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="px-5 sm:px-6 pb-6">
              <h4 className="font-semibold text-[#0b1b3f] mb-2">
                Content List
              </h4>
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

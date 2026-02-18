"use client";

import { motion } from "framer-motion";
import PageBanner from "@/components/ui/PageBanner";

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-[#f6f7fb] pt-24">
      {/* PAGE BANNER */}
      <PageBanner
        title="Terms and Conditions"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Terms and Conditions" },
        ]}
        bg1="/background.png"
        bg2="/keyboard1.jpg"
      />

      {/* CONTENT SECTION */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-[#0b1b3f] mb-6">
                Terms and Conditions
              </h2>

              <p className="text-slate-600 leading-relaxed mb-6">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>

              <p className="text-slate-600 leading-relaxed mb-6">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been
                the industry's specimen book.
              </p>

              <p className="text-slate-600 leading-relaxed mb-8">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
              </p>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden"
            >
              <img
                src="/privacy-policy.jpg"
                alt="terms"
                className="w-full h-full object-cover"
              />
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}

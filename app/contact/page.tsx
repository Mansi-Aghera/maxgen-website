"use client";
 
import PageBanner from "@/components/ui/PageBanner";
import ContactSection from "@/components/sections/ContactSection";
import OfficeLocations from "@/components/sections/OfficeLocations";
import News from "@/components/sections/News";
import { Variants } from "framer-motion";
 
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f6f7fb] pt-20 sm:pt-24">
 
      {/* HERO BANNER */}
      <PageBanner
        title="Contact"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        bg1="/contact-bg.png"
        bg2="/contact-keyboard-bg.jpg"
      />
 
      {/* CONTACT SECTION */}
      <ContactSection />
<OfficeLocations/>
      <News variants={fadeUp} />
    </main>
  );
}
 
 
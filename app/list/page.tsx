// import ServicesSection from '@/components/sections/ServicesSection'

// const page = () => {
//   return (
//     <div className='mt-20'>
//       <ServicesSection />
//     </div>
//   )
// }

// export default page


"use client";

import PageBanner from "@/components/ui/PageBanner";
import ServicesSection from "@/components/sections/ServicesSection";

export default function ServicesPage() {
  return (
    <main className="bg-white pt-20 sm:pt-24">
      {/* 🔥 SAME GLOBAL BANNER */}
      <PageBanner
      title="Our Services"
              crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
              bg1="/background.png"
              bg2="/keyboard1.jpg"
            />

      {/* 🔥 SERVICES CONTENT */}
      <section>
        <ServicesSection />
      </section>
    </main>
  );
}

// // import ServicesSection from "./ServicesSection";

// // export default function AgencySection() {
// //   return (
// //     <section className="bg-[#f5efe9] py-20">

// //       {/* TOP CONTENT */}
// //       <div className="max-w-6xl mx-auto px-6 text-center">

// //         <p className="text-sm tracking-widest text-pink-600 font-semibold">
// //           WE ARE CREATIVE AGENCY
// //         </p>

// //         <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight">
// //           <span className="text-pink-600">Top-rated</span> Web And Mobile App
// //           <br className="hidden md:block" />
// //           Development Company
// //         </h2>

// //         <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
// //           Lorem Ipsum is simply dummy text of the printing and typesetting
// //           industry. Lorem Ipsum has been the industry's standard dummy text ever
// //           since the 1500s.
// //         </p>

// //         <h3 className="mt-12 text-2xl md:text-3xl font-bold text-[#0f172a]">
// //           Big Ideas, creative people, new technology.
// //         </h3>

// //         <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
// //           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
// //         </p>
// //       </div>

// //       {/* SERVICES GRID */}
// //       <ServicesSection />

// //       {/* HIRE CTA */}
// //       <div className="max-w-6xl mx-auto px-6 mt-20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">

// //         <h3 className="text-2xl md:text-3xl font-semibold text-[#0f172a]">
// //           Hire a <span className="font-bold">Dedicated Developer</span>
// //         </h3>

// //         <button className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition">
// //           Hire Now →
// //         </button>

// //       </div>
// //     </section>
// //   );
// // }



// import ServicesSection from "./ServicesSection";

// export default function AgencySection() {
//   return (
//     <section className="bg-[#f5efe9] py-16 sm:py-20 lg:py-24">
      
//       {/* TOP CONTENT */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        
//         <p className="text-xs sm:text-sm tracking-widest text-pink-600 font-semibold">
//           WE ARE CREATIVE AGENCY
//         </p>

//         <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] leading-tight">
//           <span className="text-pink-600">Top-rated</span> Web And Mobile App
//           <br className="hidden md:block" />
//           Development Company
//         </h2>

//         <p className="mt-5 sm:mt-6 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since the 1500s.
//         </p>

//         <h3 className="mt-10 sm:mt-12 text-xl sm:text-2xl md:text-3xl font-bold text-[#0f172a]">
//           Big Ideas, creative people, new technology.
//         </h3>

//         <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
//           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//         </p>
//       </div>

//       {/* SERVICES GRID */}
//       <div className="mt-12 sm:mt-16">
//         <ServicesSection />
//       </div>

//       {/* HIRE CTA */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mt-16 sm:mt-20 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
        
//         <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0f172a]">
//           Hire a <span className="font-bold">Dedicated Developer</span>
//         </h3>

//         <button className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm sm:text-base font-semibold shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200">
//           Hire Now →
//         </button>

//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import ServicesSection from "./ServicesSection";
import Button from "../ui/Button";

export default function AgencySection() {
  return (
    <section className="bg-[#f5efe9] py-16 sm:py-20 lg:py-24">
      
      {/* TOP CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center"
      >
        <p className="text-xs sm:text-sm tracking-widest text-pink-600 font-semibold">
          WE ARE CREATIVE AGENCY
        </p>

        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] leading-tight">
          <span className="text-pink-600">Top-rated</span> Web And Mobile App
          <br className="hidden md:block" />
          Development Company
        </h2>

        <p className="mt-5 sm:mt-6 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <h3 className="mt-10 sm:mt-12 text-xl sm:text-2xl md:text-3xl font-bold text-[#0f172a]">
          Big Ideas, creative people, new technology.
        </h3>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </motion.div>

      {/* SERVICES GRID */}
      <div className="mt-12 sm:mt-16">
        <ServicesSection />
      </div>

      {/* HIRE CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mt-16 sm:mt-20 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left"
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0f172a]">
          Hire a <span className="font-bold">Dedicated Developer</span>
        </h3>

       <Button variant="hero" size="md">
         Hire Now →
       </Button>
      </motion.div>
    </section>
  );
}

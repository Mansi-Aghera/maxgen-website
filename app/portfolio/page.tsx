// // import PortfolioGrid from "./PortfolioGrid";
// // import PageBanner from "../../components/ui/PageBanner"; // path adjust કરજો

// // export default function PortfolioPage() {
// //   return (
// //     <div className="min-h-screen bg-[#f6f7fb] pt-24">
// //       {/* 🔥 HERO SECTION */}
// //       <PageBanner
// //         title="Our Projects"
// //         breadcrumb="Home • Portfolio"
// //         bg1="/background.png"
// //         bg2="/keyboard1.jpg"
// //       />

// //       {/* BELOW CONTENT */}
// //       <div className="pt-16 px-4">
// //         <div className="text-center mb-16">
// //           <p className="text-sm text-pink-500 tracking-widest uppercase">
// //             Our Work
// //           </p>
// //           <h2 className="text-4xl font-bold text-[#0b1b3f] mt-2">Portfolio</h2>
// //         </div>

// //         <PortfolioGrid />
// //       </div>
// //     </div>
// //   );
// // }


// import PortfolioGrid from "./PortfolioGrid";
// import PageBanner from "@/components/ui/PageBanner";

// export default function PortfolioPage() {
//   return (
//     <div className="min-h-screen bg-[#f6f7fb] pt-20 sm:pt-24">
//       {/* HERO */}
//       <PageBanner
//         title="Our Projects"
//         breadcrumb="Home • Portfolio"
//         bg1="/background.png"
//         bg2="/keyboard1.jpg"
//       />

//       {/* CONTENT */}
//       <div className="pt-12 sm:pt-16 pb-16 sm:pb-24">
//         <div className="text-center mb-10 sm:mb-14">
//           <p className="text-pink-500 tracking-widest uppercase text-xs sm:text-sm">
//             Our Work
//           </p>
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1b3f] mt-2">
//             Portfolio
//           </h2>
//         </div>

//         <PortfolioGrid />
//       </div>
//     </div>
//   );
// }


"use client";

import { motion } from "framer-motion";
import PortfolioGrid from "./PortfolioGrid";
import PageBanner from "@/components/ui/PageBanner";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#f6f7fb] pt-20 sm:pt-24">
      
      {/* HERO */}
      <PageBanner
            title="Portfolio"
              crumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
              bg1="/background.png"
              bg2="/keyboard1.jpg"
            />

      {/* CONTENT */}
      <div className="pt-12 sm:pt-16 pb-16 sm:pb-24">

        {/* HEADING — SAME AS PortfolioSection */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-pink-500 tracking-widest uppercase text-xs sm:text-sm">
            Our Work
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1b3f] mt-2">
            Portfolio
          </h2>

          {/* underline grow */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 70 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <PortfolioGrid />
      </div>
    </div>
  );
}

// // // // 

// // // "use client";

// // // import { motion } from "framer-motion";

// // // type Work = {
// // //   title: string;
// // //   category: string;
// // //   image: string;
// // //   bg: string;
// // // };

// // // const works: Work[] = [
// // //   {
// // //     title: "Ecommerce Development",
// // //     category: "Web Application",
// // //     image: "/work1.jpg",
// // //     bg: "bg-[#e9e9ea]",
// // //   },
// // //   {
// // //     title: "Creative App",
// // //     category: "iOs, Android",
// // //     image: "/work2.jpg",
// // //     bg: "bg-[#efd7c9]",
// // //   },
// // //   {
// // //     title: "Brochure Design",
// // //     category: "Graphic, Print",
// // //     image: "/work3.jpg",
// // //     bg: "bg-gradient-to-r from-[#6fb1c7] to-[#7faedc]",
// // //   },
// // //   {
// // //     title: "Icon Pack",
// // //     category: "iOs, Android",
// // //     image: "/work4.jpg",
// // //     bg: "bg-gradient-to-r from-[#34d2b0] to-[#6aa6e8]",
// // //   },
// // // ];

// // // export default function PortfolioSection() {
// // //   return (
// // //     <section className="relative py-20 lg:py-24 bg-white overflow-hidden">
// // //       {/* dotted bg */}
// // //       <div className="absolute inset-0 opacity-[0.15] pointer-events-none"
// // //         style={{
// // //           backgroundImage:
// // //             "radial-gradient(#000 1px, transparent 1px)",
// // //           backgroundSize: "12px 12px",
// // //         }}
// // //       />

// // //       <div className="relative max-w-7xl mx-auto px-6">
// // //         {/* heading */}
// // //         <div className="text-center mb-14 lg:mb-16">
// // //           <p className="text-pink-500 tracking-[4px] font-semibold mb-3">
// // //             OUR WORK
// // //           </p>
// // //           <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0b1b3f]">
// // //             Our Latest Creative Work
// // //           </h2>
// // //         </div>

// // //         {/* GRID — EXACT TEMPLATE */}
// // //         <div className="grid md:grid-cols-2 gap-x-10 gap-y-14">
// // //           {works.map((work, i) => (
// // //             <motion.div
// // //               key={work.title}
// // //               initial={{ opacity: 0, y: 40 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.6, delay: i * 0.12 }}
// // //               viewport={{ once: true }}
// // //               className="group"
// // //             >
// // //               {/* IMAGE CARD */}
// // //               <div
// // //                 className={`
// // //                   ${work.bg}
// // //                   rounded-[18px]
// // //                   overflow-hidden
// // //                   flex items-center justify-center
// // //                   h-[260px] sm:h-[300px] lg:h-[320px]
// // //                   transition-all duration-500
// // //                   group-hover:shadow-2xl
// // //                 `}
// // //               >
// // //                 <img
// // //                   src={work.image}
// // //                   alt={work.title}
// // //                   className="
// // //                     max-h-[85%]
// // //                     object-contain
// // //                     transition-transform duration-700
// // //                     group-hover:scale-105
// // //                   "
// // //                 />
// // //               </div>

// // //               {/* TEXT */}
// // //               <div className="mt-5">
// // //                 <h3 className="text-xl lg:text-[22px] font-bold text-[#0b1b3f]">
// // //                   {work.title}
// // //                 </h3>
// // //                 <p className="text-slate-500 mt-1 text-[15px]">
// // //                   {work.category}
// // //                 </p>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // "use client";

// // import { motion } from "framer-motion";

// // type Work = {
// //   title: string;
// //   category: string;
// //   image: string;
// //   bg: string;
// // };

// // const works: Work[] = [
// //   {
// //     title: "Ecommerce Development",
// //     category: "Web Application",
// //     image: "/work1.jpg",
// //     bg: "bg-[#e9e9ea]",
// //   },
// //   {
// //     title: "Creative App",
// //     category: "iOS, Android",
// //     image: "/work2.jpg",
// //     bg: "bg-[#efd7c9]",
// //   },
// //   {
// //     title: "Brochure Design",
// //     category: "Graphic, Print",
// //     image: "/work3.jpg",
// //     bg: "bg-gradient-to-r from-[#6fb1c7] to-[#7faedc]",
// //   },
// //   {
// //     title: "Icon Pack",
// //     category: "iOS, Android",
// //     image: "/work4.jpg",
// //     bg: "bg-gradient-to-r from-[#34d2b0] to-[#6aa6e8]",
// //   },
// // ];

// // export default function PortfolioSection() {
// //   return (
// //     <section className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
// //       {/* dotted bg */}
// //       <div
// //         className="absolute inset-0 opacity-[0.12] pointer-events-none"
// //         style={{
// //           backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
// //           backgroundSize: "12px 12px",
// //         }}
// //       />

// //       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* heading */}
// //         <div className="text-center mb-12 sm:mb-14 lg:mb-16">
// //           <p className="text-pink-500 tracking-[4px] font-semibold mb-3 text-sm">
// //             OUR WORK
// //           </p>
// //           <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-[#0b1b3f]">
// //             Our Latest Creative Work
// //           </h2>
// //         </div>

// //         {/* GRID */}
// //         <div className="grid sm:grid-cols-2 gap-8 lg:gap-x-10 lg:gap-y-14">
// //           {works.map((work, i) => (
// //             <motion.div
// //               key={work.title}
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: i * 0.12 }}
// //               viewport={{ once: true }}
// //               className="group"
// //             >
// //               {/* CARD */}
// //               <div
// //                 className={`
// //                   ${work.bg}
// //                   rounded-xl sm:rounded-2xl
// //                   overflow-hidden
// //                   flex items-center justify-center
// //                   h-[220px] sm:h-[260px] lg:h-[300px]
// //                   transition-all duration-500
// //                   group-hover:shadow-2xl
// //                 `}
// //               >
// //                 <img
// //                   src={work.image}
// //                   alt={work.title}
// //                   className="
// //                     max-h-[80%]
// //                     object-contain
// //                     transition-transform duration-700
// //                     group-hover:scale-105
// //                   "
// //                 />
// //               </div>

// //               {/* TEXT */}
// //               <div className="mt-4 sm:mt-5">
// //                 <h3 className="text-lg sm:text-xl font-bold text-[#0b1b3f]">
// //                   {work.title}
// //                 </h3>
// //                 <p className="text-slate-500 mt-1 text-sm">
// //                   {work.category}
// //                 </p>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { motion } from "framer-motion";

// type Work = {
//   title: string;
//   category: string;
//   image: string;
//   bg: string;
// };

// const works: Work[] = [
//   {
//     title: "Ecommerce Development",
//     category: "Web Application",
//     image: "/work1.jpg",
//     bg: "bg-[#e9e9ea]",
//   },
//   {
//     title: "Creative App",
//     category: "iOS, Android",
//     image: "/work2.jpg",
//     bg: "bg-[#efd7c9]",
//   },
//   {
//     title: "Brochure Design",
//     category: "Graphic, Print",
//     image: "/work3.jpg",
//     bg: "bg-gradient-to-r from-[#6fb1c7] to-[#7faedc]",
//   },
//   {
//     title: "Icon Pack",
//     category: "iOS, Android",
//     image: "/work4.jpg",
//     bg: "bg-gradient-to-r from-[#34d2b0] to-[#6aa6e8]",
//   },
// ];

// export default function PortfolioSection() {
//   return (
//     <section className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
//       {/* dotted bg */}
//       <div
//         className="absolute inset-0 opacity-[0.12] pointer-events-none"
//         style={{
//           backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
//           backgroundSize: "12px 12px",
//         }}
//       />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* HEADING ANIMATION */}
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-12 sm:mb-14 lg:mb-16"
//         >
//           <p className="text-pink-500 tracking-[4px] font-semibold mb-3 text-sm">
//             OUR WORK
//           </p>

//           <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-[#0b1b3f]">
//             Our Latest Creative Work
//           </h2>

//           {/* animated underline */}
//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: 80 }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//             viewport={{ once: true }}
//           />
//         </motion.div>

//         {/* GRID */}
//         <div className="grid sm:grid-cols-2 gap-8 lg:gap-x-10 lg:gap-y-14">
//           {works.map((work, i) => (
//             <motion.div
//               key={work.title}
//               initial={{ opacity: 0, y: 50, scale: 0.95 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{
//                 duration: 0.6,
//                 delay: i * 0.15,
//                 ease: "easeOut",
//               }}
//               viewport={{ once: true }}
//               className="group"
//             >
//               {/* CARD */}
//               <div
//                 className={`
//                   ${work.bg}
//                   rounded-xl sm:rounded-2xl
//                   overflow-hidden
//                   flex items-center justify-center
//                   h-[220px] sm:h-[260px] lg:h-[300px]
//                   transition-all duration-500
//                   group-hover:-translate-y-2
//                   group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)]
//                 `}
//               >
//                 <img
//                   src={work.image}
//                   alt={work.title}
//                   className="
//                     max-h-[80%]
//                     object-contain
//                     transition-transform duration-700
//                     group-hover:scale-110
//                   "
//                 />
//               </div>

//               {/* TEXT */}
//               <div className="mt-4 sm:mt-5">
//                 <h3 className="text-lg sm:text-xl font-bold text-[#0b1b3f] transition-colors duration-300 group-hover:text-pink-600">
//                   {work.title}
//                 </h3>
//                 <p className="text-slate-500 mt-1 text-sm">
//                   {work.category}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";

type Work = {
  title: string;
  category: string;
  image: string;
  bg: string;
};

const works: Work[] = [
  {
    title: "Ecommerce Development",
    category: "Web Application",
    image: "/work1.jpg",
    bg: "bg-[#e9e9ea]",
  },
  {
    title: "Creative App",
    category: "iOS, Android",
    image: "/work2.jpg",
    bg: "bg-[#efd7c9]",
  },
  {
    title: "Brochure Design",
    category: "Graphic, Print",
    image: "/work3.jpg",
    bg: "bg-gradient-to-r from-[#6fb1c7] to-[#7faedc]",
  },
  {
    title: "Icon Pack",
    category: "iOS, Android",
    image: "/work4.jpg",
    bg: "bg-gradient-to-r from-[#34d2b0] to-[#6aa6e8]",
  },
];

export default function PortfolioSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
      {/* dotted bg */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14 lg:mb-16"
        >
          <p className="text-pink-500 tracking-[4px] font-semibold mb-3 text-sm">
            OUR WORK
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-[#0b1b3f]">
            Our Latest Creative Work
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className=""
          />
        </motion.div>

        {/* ROW 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-10 mb-8 lg:mb-10">
          <PortfolioCard work={works[0]} delay={0} />
          <PortfolioCard work={works[1]} delay={0.12} />
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-10">
          <PortfolioCard work={works[2]} delay={0.24} />
          <PortfolioCard work={works[3]} delay={0.36} />
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({
  work,
  delay,
}: {
  work: Work;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className={`
          ${work.bg}
          rounded-2xl
          overflow-hidden
          relative overflow-hidden
          h-[240px] sm:h-[260px] lg:h-[320px]
          transition-all duration-500
          group-hover:-translate-y-2
          group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)]
        `}
      >
        <img
          src={work.image}
          alt={work.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="mt-4 sm:mt-5">
        <h3 className="text-lg sm:text-xl font-bold text-[#0b1b3f] group-hover:text-pink-600 transition-colors">
          {work.title}
        </h3>
        <p className="text-slate-500 mt-1 text-sm sm:text-base">
          {work.category}
        </p>
      </div>
    </motion.div>
  );
}

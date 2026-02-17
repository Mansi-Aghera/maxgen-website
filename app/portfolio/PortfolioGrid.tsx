 
// // // "use client";
 
// // // import { useState } from "react";
// // // import Image from "next/image";
 
// // // const categories = ["All", "Website", "Mobile App", "Graphic"];
 
// // // const projects = [
// // //     {
// // //         title: "Pets Care & Training App",
// // //         category: "Mobile App",
// // //         sub: "iOS, Android",
// // //         image: "/app-img1.jpg",
// // //     },
// // //     {
// // //         title: "Car Rental App",
// // //         category: "Graphic",
// // //         sub: "Graphic, Print",
// // //         image: "/app-img2.jpg",
// // //     },
// // //     {
// // //         title: "Event Management App",
// // //         category: "Graphic",
// // //         sub: "Graphic, Print",
// // //         image: "/app-img3.jpg",
// // //     },
// // //     {
// // //         title: "Restaurant App",
// // //         category: "Mobile App",
// // //         sub: "iOS, Android",
// // //         image: "/app-img4.jpg",
// // //     },
// // //     {
// // //         title: "Restaurant / Hotel App",
// // //         category: "Graphic",
// // //         sub: "Graphic, Print",
// // //         image: "/app-img5.jpg",
// // //     },
// // //     {
// // //         title: "Super Mart App",
// // //         category: "Graphic",
// // //         sub: "Graphic, Print",
// // //         image: "/app-img6.jpg",
// // //     },
// // // ];
 
// // // export default function PortfolioGrid() {
// // //     const [active, setActive] = useState("All");
 
// // //     const filtered =
// // //         active === "All"
// // //             ? projects
// // //             : projects.filter((p) => p.category === active);
 
// // //     return (
// // //         <div className="max-w-7xl mx-auto px-4">
 
// // //             {/* FILTER BUTTONS */}
// // //             <div className="flex flex-wrap justify-center gap-4 mb-12">
// // //                 {categories.map((cat) => (
// // //                     <button
// // //                         key={cat}
// // //                         onClick={() => setActive(cat)}
// // //                         className={`px-6 py-2 rounded-full text-sm font-medium transition ${active === cat
// // //                                 ? "bg-pink-500 text-white"
// // //                                 : "bg-[#efe6df] text-gray-700 hover:bg-pink-100"
// // //                             }`}
// // //                     >
// // //                         {cat}
// // //                     </button>
// // //                 ))}
// // //             </div>
 
// // //             {/* GRID */}
// // //             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
// // //                 {filtered.map((item, index) => (
// // // <div
// // //   key={index}
// // //   className="group rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
// // // >
 
// // //   {/* IMAGE FULL CARD */}
// // //   <div className="relative w-full h-[260px]">
// // //     <Image
// // //       src={item.image}
// // //       alt={item.title}
// // //       fill
// // //       className="object-fill"
// // //     />
// // //   </div>
 
// // //   {/* CONTENT */}
// // //   <div className="text-center py-6 px-4 bg-white">
// // //     <h3 className="text-lg font-semibold text-[#0b1b3f]">
// // //       {item.title}
// // //     </h3>
// // //     <p className="text-sm text-gray-500 mt-1">
// // //       {item.sub}
// // //     </p>
// // //   </div>
 
// // // </div>
 
 
// // //                 ))}
// // //             </div>
// // //         </div>
// // //     );
// // // }
 
 

// // "use client";

// // import { useState } from "react";
// // import Image from "next/image";
// // import { motion } from "framer-motion";

// // const categories = ["All", "Website", "Mobile App", "Graphic"];

// // const projects = [
// //   {
// //     title: "Pets Care & Training App",
// //     category: "Mobile App",
// //     sub: "iOS, Android",
// //     image: "/app-img1.jpg",
// //   },
// //   {
// //     title: "Car Rental App",
// //     category: "Graphic",
// //     sub: "Graphic, Print",
// //     image: "/app-img2.jpg",
// //   },
// //   {
// //     title: "Event Management App",
// //     category: "Graphic",
// //     sub: "Graphic, Print",
// //     image: "/app-img3.jpg",
// //   },
// //   {
// //     title: "Restaurant App",
// //     category: "Mobile App",
// //     sub: "iOS, Android",
// //     image: "/app-img4.jpg",
// //   },
// //   {
// //     title: "Restaurant / Hotel App",
// //     category: "Graphic",
// //     sub: "Graphic, Print",
// //     image: "/app-img5.jpg",
// //   },
// //   {
// //     title: "Super Mart App",
// //     category: "Graphic",
// //     sub: "Graphic, Print",
// //     image: "/app-img6.jpg",
// //   },
// // ];

// // export default function PortfolioGrid() {
// //   const [active, setActive] = useState("All");

// //   const filtered =
// //     active === "All"
// //       ? projects
// //       : projects.filter((p) => p.category === active);

// //   return (
// //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //       {/* FILTER */}
// //       <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
// //         {categories.map((cat) => (
// //           <button
// //             key={cat}
// //             onClick={() => setActive(cat)}
// //             className={`
// //               px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition
// //               ${
// //                 active === cat
// //                   ? "bg-pink-500 text-white shadow-md"
// //                   : "bg-[#efe6df] text-gray-700 hover:bg-pink-100"
// //               }
// //             `}
// //           >
// //             {cat}
// //           </button>
// //         ))}
// //       </div>

// //       {/* GRID */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
// //         {filtered.map((item, index) => (
// //           <motion.div
// //             key={index}
// //             initial={{ opacity: 0, y: 35 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: index * 0.08 }}
// //             viewport={{ once: true }}
// //             className="group rounded-xl sm:rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
// //           >
// //             {/* IMAGE */}
// //             <div className="relative w-full h-[200px] sm:h-[230px] lg:h-[260px] overflow-hidden">
// //               <Image
// //                 src={item.image}
// //                 alt={item.title}
// //                 fill
// //                 className="object-cover transition-transform duration-500 group-hover:scale-105"
// //               />
// //             </div>

// //             {/* CONTENT */}
// //             <div className="text-center py-5 sm:py-6 px-4">
// //               <h3 className="text-base sm:text-lg font-semibold text-[#0b1b3f]">
// //                 {item.title}
// //               </h3>
// //               <p className="text-xs sm:text-sm text-gray-500 mt-1">
// //                 {item.sub}
// //               </p>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// const categories = ["All", "Website", "Mobile App", "Graphic"];

// const projects = [
//   {
//     title: "Pets Care & Training App",
//     category: "Mobile App",
//     sub: "iOS, Android",
//     image: "/app-img1.jpg",
//   },
//   {
//     title: "Car Rental App",
//     category: "Graphic",
//     sub: "Graphic, Print",
//     image: "/app-img2.jpg",
//   },
//   {
//     title: "Event Management App",
//     category: "Graphic",
//     sub: "Graphic, Print",
//     image: "/app-img3.jpg",
//   },
//   {
//     title: "Restaurant App",
//     category: "Mobile App",
//     sub: "iOS, Android",
//     image: "/app-img4.jpg",
//   },
//   {
//     title: "Restaurant / Hotel App",
//     category: "Graphic",
//     sub: "Graphic, Print",
//     image: "/app-img5.jpg",
//   },
//   {
//     title: "Super Mart App",
//     category: "Graphic",
//     sub: "Graphic, Print",
//     image: "/app-img6.jpg",
//   },
// ];

// export default function PortfolioGrid() {
//   const [active, setActive] = useState("All");

//   const filtered =
//     active === "All"
//       ? projects
//       : projects.filter((p) => p.category === active);

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
//       {/* FILTER */}
//       <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
//         {categories.map((cat) => (
//           <motion.button
//             key={cat}
//             onClick={() => setActive(cat)}
//             whileTap={{ scale: 0.9 }}
//             className={`
//               relative px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium
//               transition-all duration-300
//               ${
//                 active === cat
//                   ? "text-white"
//                   : "bg-[#efe6df] text-gray-700 hover:bg-pink-100"
//               }
//             `}
//           >
//             {/* active background */}
//             {active === cat && (
//               <motion.span
//                 layoutId="activeFilter"
//                 className="absolute inset-0 rounded-full bg-pink-500"
//                 transition={{ type: "spring", stiffness: 300, damping: 25 }}
//               />
//             )}

//             <span className="relative z-10">{cat}</span>
//           </motion.button>
//         ))}
//       </div>

//       {/* GRID */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
//         <AnimatePresence>
//           {filtered.map((item, index) => (
//             <motion.div
//               key={item.title}
//               layout
//               initial={{ opacity: 0, y: 50, scale: 0.95 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: 30, scale: 0.9 }}
//               transition={{
//                 duration: 0.45,
//                 delay: index * 0.07,
//                 ease: "easeOut",
//               }}
//               whileHover={{ y: -8 }}
//               className="group rounded-xl sm:rounded-2xl bg-white shadow-sm overflow-hidden"
//             >
//               {/* IMAGE */}
//               <div className="relative w-full h-[200px] sm:h-[230px] lg:h-[260px] overflow-hidden">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   fill
//                   className="
//                     object-cover
//                     transition-transform duration-700
//                     group-hover:scale-110
//                   "
//                 />

//                 {/* hover overlay glow */}
//                 <div className="
//                   absolute inset-0
//                   bg-gradient-to-t from-black/20 via-transparent to-transparent
//                   opacity-0 group-hover:opacity-100
//                   transition duration-500
//                 " />
//               </div>

//               {/* CONTENT */}
//               <motion.div
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.15 }}
//                 className="text-center py-5 sm:py-6 px-4"
//               >
//                 <h3 className="
//                   text-base sm:text-lg font-semibold text-[#0b1b3f]
//                   transition-colors duration-300
//                   group-hover:text-pink-600
//                 ">
//                   {item.title}
//                 </h3>

//                 <p className="text-xs sm:text-sm text-gray-500 mt-1">
//                   {item.sub}
//                 </p>
//               </motion.div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = ["All", "Website", "Mobile App", "Graphic"];

const projects = [
  {
    title: "Pets Care & Training App",
    category: "Mobile App",
    sub: "iOS, Android",
    image: "/app-img1.jpg",
  },
  {
    title: "Car Rental App",
    category: "Graphic",
    sub: "Graphic, Print",
    image: "/app-img2.jpg",
  },
  {
    title: "Event Management App",
    category: "Graphic",
    sub: "Graphic, Print",
    image: "/app-img3.jpg",
  },
  {
    title: "Restaurant App",
    category: "Mobile App",
    sub: "iOS, Android",
    image: "/app-img4.jpg",
  },
  {
    title: "Restaurant / Hotel App",
    category: "Graphic",
    sub: "Graphic, Print",
    image: "/app-img5.jpg",
  },
  {
    title: "Super Mart App",
    category: "Graphic",
    sub: "Graphic, Print",
    image: "/app-img6.jpg",
  },
];

export default function PortfolioGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* FILTER */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition
              ${
                active === cat
                  ? "bg-pink-500 text-white shadow-md"
                  : "bg-[#efe6df] text-gray-700 hover:bg-pink-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {filtered.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: i * 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="group"
          >
            {/* CARD */}
            <div
              className="
                rounded-xl sm:rounded-2xl
                overflow-hidden
                bg-white
                shadow-sm
                transition-all duration-500
                group-hover:-translate-y-2
                group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)]
              "
            >
              {/* IMAGE */}
              <div className="relative w-full h-[200px] sm:h-[230px] lg:h-[260px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              {/* TEXT */}
              <div className="text-center py-5 sm:py-6 px-4">
                <h3
                  className="
                    text-base sm:text-lg font-semibold text-[#0b1b3f]
                    transition-colors duration-300
                    group-hover:text-pink-600
                  "
                >
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {item.sub}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

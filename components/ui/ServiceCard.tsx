// // "use client";

// // type Props = {
// //   title: string;
// //   tags: string;
// //   description: string;
// //   bg: string;
// //   accent: string;
// //   icon: string;
// // };

// // export default function ServiceCard({
// //   title,
// //   tags,
// //   description,
// //   bg,
// //   accent,
// //   icon,
// // }: Props) {
// //   return (
// //     <div
// //       className={`group relative overflow-hidden rounded-2xl p-10 min-h-[330px] 
// //       transition-all duration-500 ease-out
// //       hover:shadow-2xl hover:shadow-black/10
// //       ${bg}`}
// //     >
// //       {/* Accent Line */}
// //       <div
// //         className={`absolute bottom-0 left-0 w-full h-1 ${accent}
// //         transition-all duration-500 group-hover:h-2`}
// //       />

// //       {/* Glow Effect */}
// //       <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

// //       {/* TOP CONTENT */}
// //       <div
// //         className="transition-all duration-500 ease-out
// //         group-hover:opacity-0
// //         group-hover:-translate-y-6
// //         group-hover:scale-95"
// //       >
// //         <img
// //           src={icon}
// //           alt={title}
// //           className="w-14 mb-6 transition-all duration-500 group-hover:scale-75 group-hover:blur-sm"
// //         />

// //         <h3 className="text-xl font-semibold text-[#0b1238] mb-3 transition-all duration-300">
// //           {title}
// //         </h3>

// //         <p className="text-sm text-gray-500 tracking-wide">
// //           {tags}
// //         </p>
// //       </div>

// //       {/* HOVER CONTENT */}
// //       <div
// //         className="absolute left-10 right-10 bottom-10
// //         opacity-0 translate-y-10
// //         transition-all duration-500 ease-out
// //         group-hover:opacity-100
// //         group-hover:translate-y-0"
// //       >
// //         <h3 className="text-xl font-semibold text-[#0b1238] mb-3">
// //           {title}
// //         </h3>

// //         <p className="text-sm text-gray-500 tracking-wide mb-4">
// //           {tags}
// //         </p>

// //         <p className="text-sm text-gray-600 leading-relaxed">
// //           {description}
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }


// // "use client";

// // type Props = {
// //   title: string;
// //   tags: string;
// //   description: string;
// //   bg: string;
// //   accent: string;
// //   icon: string;
// // };

// // export default function ServiceCard({
// //   title,
// //   tags,
// //   description,
// //   bg,
// //   accent,
// //   icon,
// // }: Props) {
// //   return (
// //     <div
// //       className={`
// //         group relative overflow-hidden
// //         rounded-2xl p-8 min-h-[300px]
// //         transition-all duration-500 ease-out
// //         ${bg}
// //       `}
// //     >
// //       {/* Accent Bottom Line */}
// //       <div
// //         className={`
// //           absolute bottom-0 left-0 h-1 w-12
// //           transition-all duration-500 ease-out
// //           group-hover:w-full
// //           ${accent}
// //         `}
// //       />

// //       {/* DEFAULT CONTENT */}
// //       <div
// //         className="
// //           transition-all duration-500 ease-out
// //           group-hover:-translate-y-6
// //           group-hover:opacity-0
// //         "
// //       >
// //         <img
// //           src={icon}
// //           alt={title}
// //           className="
// //             w-14 mb-6
// //             transition-all duration-500 ease-out
// //             group-hover:scale-75
// //           "
// //         />

// //         <h3 className="text-xl font-semibold text-[#0f172a] mb-4">
// //           {title}
// //         </h3>

// //         <p className="text-sm font-medium text-gray-500 tracking-wide">
// //           {tags}
// //         </p>
// //       </div>

// //       {/* HOVER CONTENT */}
// //       <div
// //         className="
// //           absolute left-8 right-8 bottom-10
// //           opacity-0 translate-y-8
// //           transition-all duration-500 ease-out
// //           group-hover:opacity-100
// //           group-hover:translate-y-0
// //         "
// //       >
// //         <h3 className="text-xl font-semibold text-[#0f172a] mb-3">
// //           {title}
// //         </h3>

// //         <p className="text-sm font-medium text-gray-500 mb-4 tracking-wide">
// //           {tags}
// //         </p>

// //         <p className="text-sm text-gray-600 leading-relaxed">
// //           {description}
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }



// // "use client";

// // import { useState } from "react";

// // type Props = {
// //   title: string;
// //   tags: string;
// //   description: string;
// //   bg: string;
// //   accent: string;
// //   icon: string;
// // };

// // export default function ServiceCard({
// //   title,
// //   tags,
// //   description,
// //   bg,
// //   accent,
// //   icon,
// // }: Props) {
// //   const [position, setPosition] = useState({ x: 0, y: 0 });

// //   const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
// //     const rect = e.currentTarget.getBoundingClientRect();
// //     setPosition({
// //       x: e.clientX - rect.left,
// //       y: e.clientY - rect.top,
// //     });
// //   };

// //   return (
// //     <div
// //       onMouseMove={handleMove}
// //       className={`
// //         group relative overflow-hidden
// //         rounded-2xl p-8 min-h-[320px]
// //         transition-all duration-500 ease-out
// //         transform hover:-translate-y-4 hover:shadow-2xl
// //         ${bg}
// //       `}
// //       style={{
// //         backgroundImage: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 40%)`,
// //       }}
// //     >
// //       {/* Gradient Sweep Overlay */}
// //       <div
// //         className="
// //           absolute inset-0 opacity-0
// //           bg-gradient-to-br from-white/20 to-transparent
// //           transition-all duration-700
// //           group-hover:opacity-100
// //         "
// //       />

// //       {/* Animated Border Glow */}
// //       <div
// //         className={`
// //           absolute -inset-[2px] rounded-2xl opacity-0 blur-xl
// //           transition-all duration-500
// //           group-hover:opacity-60
// //           ${accent}
// //         `}
// //       />

// //       {/* Accent Line */}
// //       <div
// //         className={`
// //           absolute bottom-0 left-0 h-1 w-12
// //           transition-all duration-500 ease-out
// //           group-hover:w-full
// //           ${accent}
// //         `}
// //       />

// //       {/* DEFAULT CONTENT */}
// //       <div
// //         className="
// //           relative z-10
// //           transition-all duration-500 ease-out
// //           group-hover:-translate-y-6
// //           group-hover:opacity-0
// //         "
// //       >
// //         <img
// //           src={icon}
// //           alt={title}
// //           className="
// //             w-14 mb-6
// //             transition-all duration-500 ease-out
// //             group-hover:scale-90 group-hover:drop-shadow-xl
// //           "
// //         />

// //         <h3 className="text-xl font-semibold text-[#0f172a] mb-4">
// //           {title}
// //         </h3>

// //         <p className="text-sm font-medium text-gray-500 tracking-wide">
// //           {tags}
// //         </p>
// //       </div>

// //       {/* HOVER CONTENT */}
// //       <div
// //         className="
// //           relative z-10
// //           absolute left-8 right-8 bottom-10
// //           opacity-0 translate-y-8
// //           transition-all duration-500 ease-out
// //           group-hover:opacity-100
// //           group-hover:translate-y-0
// //         "
// //       >
// //         <h3 className="text-xl font-semibold text-[#0f172a] mb-3">
// //           {title}
// //         </h3>

// //         <p className="text-sm font-medium text-gray-500 mb-4 tracking-wide">
// //           {tags}
// //         </p>

// //         <p className="text-sm text-gray-600 leading-relaxed">
// //           {description}
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }


// "use client";

// import { useState } from "react";

// type Props = {
//   title: string;
//   tags: string;
//   description: string;
//   bg: string;
//   accent: string;
//   icon: string;
// };

// export default function ServiceCard({
//   title,
//   tags,
//   description,
//   bg,
//   accent,
//   icon,
// }: Props) {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setPosition({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//   };

//   return (
//     <div
//       onMouseMove={handleMove}
//       className={`
//         group relative overflow-hidden
//         rounded-xl sm:rounded-2xl
//         p-5 sm:p-6 lg:p-8
//         min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]
//         transition-all duration-500 ease-out
//         transform hover:-translate-y-3 sm:hover:-translate-y-4 hover:shadow-2xl
//         ${bg}
//       `}
//       style={{
//         backgroundImage: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 40%)`,
//       }}
//     >
//       {/* Gradient Sweep Overlay */}
//       <div
//         className="
//           pointer-events-none
//           absolute inset-0 opacity-0
//           bg-gradient-to-br from-white/20 to-transparent
//           transition-all duration-700
//           group-hover:opacity-100
//         "
//       />

//       {/* Animated Border Glow */}
//       <div
//         className={`
//           pointer-events-none
//           absolute -inset-[2px] rounded-xl sm:rounded-2xl opacity-0 blur-xl
//           transition-all duration-500
//           group-hover:opacity-60
//           ${accent}
//         `}
//       />

//       {/* Accent Line */}
//       <div
//         className={`
//           absolute bottom-0 left-0 h-1 w-10 sm:w-12
//           transition-all duration-500 ease-out
//           group-hover:w-full
//           ${accent}
//         `}
//       />

//       {/* DEFAULT CONTENT */}
//       <div
//         className="
//           relative z-10
//           transition-all duration-500 ease-out
//           group-hover:-translate-y-6
//           group-hover:opacity-0
//         "
//       >
//         <img
//           src={icon}
//           alt={title}
//           className="
//             w-10 sm:w-12 lg:w-14 mb-4 sm:mb-6
//             transition-all duration-500 ease-out
//             group-hover:scale-90 group-hover:drop-shadow-xl
//           "
//         />

//         <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#0f172a] mb-2 sm:mb-3">
//           {title}
//         </h3>

//         <p className="text-xs sm:text-sm font-medium text-gray-500 tracking-wide">
//           {tags}
//         </p>
//       </div>

//       {/* HOVER / EXPANDED CONTENT */}
//       <div
//         className="
//           relative z-10
//           absolute left-5 right-5 sm:left-6 sm:right-6 lg:left-8 lg:right-8 bottom-6 sm:bottom-8 lg:bottom-10
//           opacity-0 translate-y-6
//           transition-all duration-500 ease-out
//           group-hover:opacity-100
//           group-hover:translate-y-0
//         "
//       >
//         <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#0f172a] mb-2">
//           {title}
//         </h3>

//         <p className="text-xs sm:text-sm font-medium text-gray-500 mb-2 sm:mb-3 tracking-wide">
//           {tags}
//         </p>

//         <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  title: string;
  tags: string;
  description: string;
  bg: string;
  accent: string;
  icon: string;
};

export default function ServiceCard({
  title,
  tags,
  description,
  bg,
  accent,
  icon,
}: Props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onMouseMove={handleMove}
      className={`
        group relative overflow-hidden
        rounded-xl sm:rounded-2xl
        p-5 sm:p-6 lg:p-8
        min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]
        transition-all duration-500 ease-out
        hover:-translate-y-4 hover:shadow-2xl
        ${bg}
      `}
      style={{
        backgroundImage: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 40%)`,
      }}
    >
      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-0 bg-gradient-to-br from-white/20 to-transparent transition-all duration-700 group-hover:opacity-100" />

      {/* Glow */}
      <div className={`pointer-events-none absolute -inset-[2px] rounded-xl sm:rounded-2xl opacity-0 blur-xl transition-all duration-500 group-hover:opacity-60 ${accent}`} />

      {/* Accent */}
      <div className={`absolute bottom-0 left-0 h-1 w-10 sm:w-12 transition-all duration-500 group-hover:w-full ${accent}`} />

      {/* Default */}
      <div className="relative z-10 transition-all duration-500 group-hover:-translate-y-6 group-hover:opacity-0">
        <img src={icon} alt={title} className="w-10 sm:w-12 lg:w-14 mb-4 sm:mb-6 transition-all duration-500 group-hover:scale-90" />

        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#0f172a] mb-2">
          {title}
        </h3>

        <p className="text-xs sm:text-sm font-medium text-gray-500">
          {tags}
        </p>
      </div>

      {/* Hover */}
      <div className="absolute left-5 right-5 bottom-6 opacity-0 translate-y-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#0f172a] mb-2">
          {title}
        </h3>

        <p className="text-xs sm:text-sm font-medium text-gray-500 mb-2">
          {tags}
        </p>

        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

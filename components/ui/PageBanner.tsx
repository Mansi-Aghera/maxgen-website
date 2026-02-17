 
// // // import Link from "next/link";
 
// // // type PageBannerProps = {
// // //   title?: string;
// // //   breadcrumb?: string;
 
// // //   bg1?: string;
// // //   bg2?: string;   // 👈 optional overlay
// // // };
 
// // // export default function PageBanner({
// // //   title = "Page Title",
// // //   breadcrumb = "Home • Page",
 
// // //   bg1 = "/background.png",
// // //   bg2, // ❗ default remove kari didhu
// // // }: PageBannerProps) {
 
// // //   const parts = breadcrumb?.split(" • ") ?? ["Home", "Page"];
 
// // //   return (
// // // <div className="relative w-full h-[350px] md:h-[420px] flex items-center justify-center text-center">
 
// // //       {/* 🔥 BASE IMAGE */}
// // //       <div
// // //         className="absolute inset-0 bg-cover bg-center"
// // //         style={{
// // //           backgroundImage: `url(${bg1})`,
// // //           filter: "brightness(1)",
// // //         }}
// // //       />
 
// // //       {/* 🔥 OVERLAY IMAGE (ONLY IF PROVIDED) */}
// // //       {bg2 && (
// // //         <div
// // //           className="absolute inset-0 bg-cover bg-center"
// // //           style={{
// // //             backgroundImage: `url(${bg2})`,
// // //             filter: "brightness(0.7) blur(1px)",
// // //           }}
// // //         />
// // //       )}
 
// // //       {/* LEFT FADE */}
// // //       <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent" />
 
// // //       {/* RIGHT FADE */}
// // //       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-teal-200/40" />
 
// // //       {/* TEXT */}
// // //       <div className="relative z-10">
// // //         <p className="text-sm text-gray-500 mb-2">
// // //           <Link href="/" className="hover:text-pink-500 transition">
// // //             {parts[0]}
// // //           </Link>
// // //           <span className="mx-1">•</span>
// // //           <span>{parts[1]}</span>
// // //         </p>
 
// // //         <h1 className="text-3xl md:text-4xl font-bold text-[#0b1b3f]">
// // //           {title}
// // //         </h1>
// // //       </div>
// // //     </div>
// // //   );
// // // }
 
 

// // "use client";

// // import Link from "next/link";
// // import { motion } from "framer-motion";

// // type PageBannerProps = {
// //   title?: string;
// //   breadcrumb?: string;
// //   bg1?: string;
// //   bg2?: string;
// // };

// // export default function PageBanner({
// //   title = "Page Title",
// //   breadcrumb = "Home • Page",
// //   bg1 = "/background.png",
// //   bg2,
// // }: PageBannerProps) {
// //   const parts = breadcrumb?.split(" • ") ?? ["Home", "Page"];

// //   return (
// //     <section
// //       className="
// //         relative w-full overflow-hidden
// //         h-[260px]
// //         sm:h-[300px]
// //         md:h-[360px]
// //         lg:h-[420px]
// //         flex items-center justify-center text-center
// //       "
// //     >
// //       {/* BASE IMAGE */}
// //       <div
// //         className="absolute inset-0 bg-cover bg-center pt-24"
// //         style={{
// //           backgroundImage: `url(${bg1})`,
// //         }}
// //       />

// //       {/* OVERLAY IMAGE */}
// //       {bg2 && (
// //         <div
// //           className="absolute inset-0 bg-cover bg-center pt-24"
// //           style={{
// //             backgroundImage: `url(${bg2})`,
// //             filter: "brightness(0.75) blur(1px)",
// //           }}
// //         />
// //       )}

// //       {/* LEFT FADE */}
// //       <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent" />

// //       {/* RIGHT COLOR FADE */}
// //       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-teal-200/40" />

// //       {/* CONTENT */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 25 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6, ease: "easeOut" }}
// //         className="relative z-10 px-4 sm:px-6"
// //       >
// //         {/* BREADCRUMB */}
// //         <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
// //           <Link href="/" className="hover:text-pink-500 transition">
// //             {parts[0]}
// //           </Link>
// //           <span className="mx-1">•</span>
// //           <span>{parts[1]}</span>
// //         </p>

// //         {/* TITLE */}
// //         <h1
// //           className="
// //             text-xl
// //             sm:text-2xl
// //             md:text-3xl
// //             lg:text-4xl
// //             font-bold
// //             text-[#0b1b3f]
// //             leading-tight
// //           "
// //         >
// //           {title}
// //         </h1>
// //       </motion.div>
// //     </section>
// //   );
// // }


// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// type PageBannerProps = {
//   title?: string;
//   breadcrumb?: string;
//   bg1?: string;
//   bg2?: string;
// };

// export default function PageBanner({
//   title = "Page Title",
//   breadcrumb = "Home • Page",
//   bg1 = "/background.png",
//   bg2,
// }: PageBannerProps) {
//   const parts = breadcrumb?.split(" • ") ?? ["Home", "Page"];

//   return (
//     <section
//       className="
//         relative w-full overflow-hidden
//         pt-20 sm:pt-24   /* 👈 NAVBAR OFFSET */
//         h-[260px] sm:h-[300px] md:h-[360px] lg:h-[420px]
//         flex items-center justify-center text-center
//       "
//     >
//       {/* BASE */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${bg1})` }}
//       />

//       {/* OVERLAY */}
//       {bg2 && (
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: `url(${bg2})`,
//             filter: "brightness(0.75) blur(1px)",
//           }}
//         />
//       )}

//       {/* GRADIENTS */}
//       <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent" />
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-teal-200/40" />

//       {/* CONTENT */}
//       <motion.div
//         initial={{ opacity: 0, y: 25 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="relative z-10 px-4 sm:px-6"
//       >
//         {/* BREADCRUMB */}
//         <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
//           <Link href="/" className="hover:text-pink-500">
//             {parts[0]}
//           </Link>
//           <span className="mx-1">•</span>
//           <span>{parts[1]}</span>
//         </p>

//         {/* TITLE */}
//         <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b1b3f]">
//           {title}
//         </h1>
//       </motion.div>
//     </section>
//   );
// }


// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// type PageBannerProps = {
//   title?: string;
//   breadcrumb?: string;
//   bg1?: string;
//   bg2?: string;
// };

// export default function PageBanner({
//   title = "Page Title",
//   breadcrumb = "Home • Page",
//   bg1,
//   bg2,
// }: PageBannerProps) {
//   const parts = breadcrumb?.split(" • ") ?? ["Home", "Page"];

//   return (
//     <section
//       className="
//         relative w-full overflow-hidden
//         h-[260px] sm:h-[300px] md:h-[360px] lg:h-[420px]
//         flex items-center justify-center text-center
//       "
//     >
//       {/* BASE */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${bg1})` }}
//       />

//       {/* OVERLAY */}
//       {bg2 && (
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: `url(${bg2})`,
//             filter: "brightness(0.75) blur(1px)",
//           }}
//         />
//       )}

//       {/* LEFT FADE */}
//       <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent" />

//       {/* RIGHT FADE */}
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-teal-200/40" />

//       {/* CONTENT */}
//       <motion.div
//         initial={{ opacity: 0, y: 25 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="relative z-10 px-4 sm:px-6"
//       >
//         {/* BREADCRUMB */}
//         <p className="text-xs sm:text-sm text-black-500 mb-2 sm:mb-3 text-black-500">
//           <Link href="/" className="hover:text-pink-500 transition">
//             {parts[0]}
//           </Link>
//           <span className="mx-1">•</span>
//           <span>{parts[1]}</span>
//         </p>

//         {/* TITLE */}
//         <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b1b3f]">
//           {title}
//         </h1>
//       </motion.div>
//     </section>
//   );
// }


"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Crumb = {
  label: string;
  href?: string;
};

type PageBannerProps = {
  title?: string;
  crumbs?: Crumb[];
  bg1?: string;
  bg2?: string;
};

export default function PageBanner({
  title = "Page Title",
  crumbs = [],
  bg1 = "/background.png",
  bg2,
}: PageBannerProps) {
  return (
    <section
      className="
        relative w-full overflow-hidden
        h-[260px]
        sm:h-[300px]
        md:h-[360px]
        lg:h-[420px]
        flex items-center justify-center text-center
      "
    >
      {/* BASE IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg1})` }}
      />

      {/* OVERLAY */}
      {bg2 && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bg2})`,
            filter: "brightness(0.75) blur(1px)",
          }}
        />
      )}

      {/* FADES */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-teal-200/40" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 px-4 sm:px-6"
      >
        {/* BREADCRUMB */}
        {crumbs.length > 0 && (
          <p className="text-xs sm:text-sm text-black-500 mb-2 sm:mb-3 flex flex-wrap justify-center gap-1">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                {c.href ? (
                  <Link
                    href={c.href}
                    className="hover:text-pink-500 transition"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-black-700">{c.label}</span>
                )}

                {i < crumbs.length - 1 && <span>•</span>}
              </span>
            ))}
          </p>
        )}

        {/* TITLE */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b1b3f] leading-tight">
          {title}
        </h1>
      </motion.div>
    </section>
  );
}

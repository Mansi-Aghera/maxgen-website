// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 80);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "HOME+", path: "/" },
//     { name: "PAGES+", path: "/pages" },
//     { name: "SHORTCODES+", path: "/shortcodes" },
//     { name: "PORTFOLIO+", path: "/portfolio" },
//     { name: "BLOG+", path: "/blog" },
//   ];

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-500 ${
//         scrolled ? "bg-white shadow-md py-4" : "py-6"
//       }`}
//     >
//       {/* Gradient Background */}
//       {!scrolled && (
//         <div
//           className="absolute inset-0"
//           style={{ background: "var(--header-gradient)" }}
//         ></div>
//       )}

//       <div className="relative max-w-7xl mx-auto px-8 flex items-center justify-between">
//         {/* LOGO */}
//         <Link href="/">
//           <Image src="/logo.png" alt="MaxGen" width={90} height={10} priority />
//         </Link>

//         {/* MENU */}
//         <ul className="hidden md:flex items-center gap-10 font-semibold tracking-wide">
//           {navItems.map((item) => (
//             <li key={item.name} className="relative group">
//               <Link
//                 href={item.path}
//                 className={`transition ${
//                   scrolled
//                     ? "text-[var(--text-dark)]"
//                     : "text-[var(--text-light)]"
//                 }`}
//               >
//                 {item.name}
//               </Link>

//               {/* Underline */}
//               <span
//                 className={`absolute left-0 -bottom-2 h-[3px] transition-all duration-300 ${
//                   pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
//                 }`}
//                 style={{
//                   background: scrolled
//                     ? "var(--underline-dark)"
//                     : "var(--underline-light)",
//                 }}
//               ></span>
//             </li>
//           ))}
//         </ul>

//         {/* RIGHT SIDE */}
//         <div className="hidden md:flex items-center gap-4">
//           {/* PHONE */}
//           <div
//             className="w-11 h-11 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer"
//             style={{ background: "var(--phone-gradient)" }}
//           >
//             ☎
//           </div>

//           {/* BUTTON */}
//           <Link href="/contact">
//             <button className="btn-niwax">Request A Quote</button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 80);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "HOME+", path: "/" },
//     { name: "PAGES+", path: "/pages" },
//     { name: "SHORTCODES+", path: "/shortcodes" },
//     { name: "PORTFOLIO+", path: "/portfolio" },
//     { name: "BLOG+", path: "/blog" },
//   ];

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-500 ${
//         scrolled ? "bg-white shadow-md py-3" : "py-4 sm:py-5 lg:py-6"
//       }`}
//     >
//       {/* Gradient Background */}
//       {!scrolled && (
//         <div
//           className="absolute inset-0"
//           style={{ background: "var(--header-gradient)" }}
//         />
//       )}

//       {/* NAV CONTAINER */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

//         {/* LOGO */}
//         <Link href="/" className="flex items-center">
//           <Image
//             src="/logo.png"
//             alt="MaxGen"
//             width={90}
//             height={20}
//             priority
//             className="w-20 sm:w-24 lg:w-[90px] h-auto"
//           />
//         </Link>

//         {/* DESKTOP MENU */}
//         <ul className="hidden lg:flex items-center gap-8 xl:gap-10 font-semibold tracking-wide">
//           {navItems.map((item) => (
//             <li key={item.name} className="relative group">
//               <Link
//                 href={item.path}
//                 className={`transition ${
//                   scrolled
//                     ? "text-[var(--text-dark)]"
//                     : "text-[var(--text-light)]"
//                 }`}
//               >
//                 {item.name}
//               </Link>

//               {/* Underline */}
//               <span
//                 className={`absolute left-0 -bottom-2 h-[3px] transition-all duration-300 ${
//                   pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
//                 }`}
//                 style={{
//                   background: scrolled
//                     ? "var(--underline-dark)"
//                     : "var(--underline-light)",
//                 }}
//               />
//             </li>
//           ))}
//         </ul>

//         {/* DESKTOP RIGHT */}
//         <div className="hidden lg:flex items-center gap-4">
//           <div
//             className="w-10 h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer"
//             style={{ background: "var(--phone-gradient)" }}
//           >
//             ☎
//           </div>

//           <Link href="/contact">
//             <button className="btn-niwax">Request A Quote</button>
//           </Link>
//         </div>

//         {/* MOBILE TOGGLE */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
//           aria-label="Menu"
//         >
//           <span
//             className={`block h-0.5 w-6 transition-all ${
//               scrolled ? "bg-black" : "bg-white"
//             } ${open ? "rotate-45 translate-y-1.5" : ""}`}
//           />
//           <span
//             className={`block h-0.5 w-6 transition-all ${
//               scrolled ? "bg-black" : "bg-white"
//             } ${open ? "opacity-0" : ""}`}
//           />
//           <span
//             className={`block h-0.5 w-6 transition-all ${
//               scrolled ? "bg-black" : "bg-white"
//             } ${open ? "-rotate-45 -translate-y-1.5" : ""}`}
//           />
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       <div
//         className={`lg:hidden absolute left-0 w-full transition-all duration-500 overflow-hidden ${
//           open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
//         } ${scrolled ? "bg-white" : ""}`}
//         style={!scrolled ? { background: "var(--header-gradient)" } : {}}
//       >
//         <div className="px-6 pb-6 pt-2 space-y-4">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.path}
//               onClick={() => setOpen(false)}
//               className={`block font-semibold tracking-wide ${
//                 scrolled
//                   ? "text-[var(--text-dark)]"
//                   : "text-[var(--text-light)]"
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}

//           {/* MOBILE CTA */}
//           <div className="flex items-center gap-3 pt-4">
//             <div
//               className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg"
//               style={{ background: "var(--phone-gradient)" }}
//             >
//               ☎
//             </div>

//             <Link href="/contact" onClick={() => setOpen(false)}>
//               <button className="btn-niwax text-sm px-5 py-2">
//                 Request A Quote
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME+", path: "/" },
    { name: "SERVICES+", path: "/pages" },
    { name: "PORTFOLIO+", path: "/portfolio" },
    { name: "BLOG+", path: "/blog" },
    { name: "LIST+", path: "/list" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md py-3" : "py-4 sm:py-5 lg:py-6"
      }`}
    >
      {/* Gradient Background */}
      {!scrolled && (
        <div
          className="absolute inset-0"
          style={{ background: "var(--header-gradient)" }}
        />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="MaxGen"
            width={90}
            height={20}
            priority
            className="w-20 sm:w-24 lg:w-[90px] h-auto"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-8 xl:gap-10 font-semibold tracking-wide">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link href={item.path} className="text-[#0b1b3f]">
                {item.name}
              </Link>

              <span
                className={`absolute left-0 -bottom-2 h-[3px] transition-all duration-300 ${
                  pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                }`}
                style={{ background: "var(--underline-dark)" }}
              />
            </li>
          ))}
        </ul>

        {/* RIGHT */}
        <div className="hidden lg:flex items-center gap-4">
          <div
            className="w-10 h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center text-white shadow-lg"
            style={{ background: "var(--phone-gradient)" }}
          >
            ☎
          </div>

          <Button href="/contact" size="md">
            Request A Quote
          </Button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span className="block h-0.5 w-6 bg-[#0b1b3f]" />
          <span className="block h-0.5 w-6 bg-[#0b1b3f]" />
          <span className="block h-0.5 w-6 bg-[#0b1b3f]" />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden absolute left-0 w-full transition-all duration-500 overflow-hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "var(--header-gradient)" }}
      >
        <div className="px-6 pb-6 pt-2 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setOpen(false)}
              className="block font-semibold tracking-wide text-[#0b1b3f]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

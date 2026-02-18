// // import PageBanner from "@/components/ui/PageBanner";
// // import ServicesSection from "@/components/sections/ServicesSection";
// // import StatsSection from "@/components/sections/StatsSection";

// // export default function Page() {
// //   return (
// //     <main className="min-h-screen bg-[#f6f7fb] pt-24">
// //       {/* HERO BANNER */}
// //       <PageBanner
// //             title="Our Services"
// //                     crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
// //                     bg1="/background.png"
// //                     bg2="/keyboard1.jpg"
// //                   />

// //       <StatsSection />

// //       {/* 🔥 SERVICE OVERVIEW SECTION (inline) */}
// //       <section className="relative py-20 bg-[#f6f7fb] overflow-hidden">
// //         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[35%_60%] gap-12 items-start">
// //           {/* LEFT IMAGE SIDE */}
// //           {/* LEFT IMAGE SIDE */}
// //           <div className="relative w-full h-[300px]">
// //             {/* 🎨 DECORATION LAYER (BACKGROUND) */}
// //             <div className="absolute inset-0 z-0 pointer-events-none">
// //               {/* TOP LEFT SHAPE */}
// //               <img
// //                 src="/service-bg-left.svg"
// //                 alt="decor"
// //                 className="absolute -top-10 -left-10 w-28 opacity-100"
// //               />

// //               {/* BOTTOM RIGHT SHAPE */}
// //               <img
// //                 src="/service-bg-right.svg"
// //                 alt="decor"
// //                 className="absolute -bottom-10 -right-10 w-32 opacity-100"
// //               />
// //             </div>

// //             {/* 🔥 MAIN IMAGE (ALWAYS FRONT & CLEAN) */}
// //             <img
// //               src="/service-overview.jpg"
// //               alt="overview"
// //               className="relative z-10 w-full h-full object-cover rounded-xl shadow-lg"
// //             />
// //           </div>

// //           {/* RIGHT TEXT SIDE */}
// //           <div>
// //             <p className="text-pink-500 uppercase tracking-widest text-sm mb-3">
// //               Overview
// //             </p>

// //             <h2 className="fs-45 lh-57 font-bold text-[#0b1b3f] mb-6">
// //               Creative Web Design Service
// //             </h2>

// //             <p className="text-gray-600 mb-4 leading-relaxed">
// //               Lorem Ipsum is simply dummy text of the printing and typesetting
// //               industry. Lorem Ipsum has been the industry's standard dummy text
// //               ever since the 1500s, when an unknown printer took a galley of
// //               type and scrambled it to make a type specimen book.
// //             </p>

// //             <p className="text-gray-600 leading-relaxed">
// //               Lorem Ipsum is simply dummy text of the printing and typesetting
// //               industry. Lorem Ipsum is simply dummy text of the printing and
// //               typesetting industry.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* 🔥 TECHNOLOGY STACK SECTION */}
// //       <section className="py-16 bg-[#f6f7fb]">
// //         <div
// //           className="max-w-6xl mx-auto px-8 md:px-12
// // "
// //         >
// //           <div className="flex flex-wrap justify-center items-center gap-8">
// //             {[
// //               "service-language1.png",
// //               "service-language2.png",
// //               "service-language3.png",
// //               "service-language4.png",
// //               "service-language5.png",
// //               "service-language6.png",
// //               "service-language7.png",
// //             ].map((img, i) => (
// //               <div
// //                 key={i}
// //                 className="group w-24 h-24 md:w-28 md:h-28 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110"
// //               >
// //                 {/* INNER CIRCLE BORDER ON HOVER */}
// //                 <div className="w-full h-full rounded-full flex items-center justify-center transition-all duration-300 group-hover:ring-4 group-hover:ring-purple-400 group-hover:ring-offset-4 group-hover:ring-offset-[#f6f7fb]">
// //                   <img
// //                     src={`/${img}`}
// //                     alt="tech"
// //                     className="w-10 h-10 object-contain opacity-70 group-hover:opacity-100 transition"
// //                   />
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <section className="py-10 bg-[#f6f7fb] text-center">
// //         <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
// //           {/* 🔹 TOP SMALL LABEL */}
// //           <p className="text-pink-500 uppercase tracking-widest text-sm mb-2">
// //             Service
// //           </p>

// //           {/* 🔹 MAIN HEADING */}
// //           <h2 className="text-[36px] md:text-[40px] font-bold text-[#0b1b3f] mb-4">
// //             Our Services
// //           </h2>

// //           {/* 🔹 SUB TEXT */}
// //           <p className="text-gray-600 max-w-xl mx-auto mb-12">
// //             We think big and have hands in all leading technology platforms to
// //             provide you wide array of services.
// //           </p>

// //           {/* 🔥 GRID */}
// //           <div className="grid md:grid-cols-3 gap-6">
// //             {[
// //               {
// //                 title: "Graphic Designing Services",
// //                 img: "/service-card1.svg",
// //                 desc: "We create visually stunning graphics including logos, banners and brand identity designs.",
// //               },
// //               {
// //                 title: "Responsive Web Designing",
// //                 img: "/service-card2.svg",
// //                 desc: "Fully responsive websites that look perfect on mobile, tablet and desktop devices.",
// //               },
// //               {
// //                 title: "Static Website Designing",
// //                 img: "/service-card3.svg",
// //                 desc: "Fast loading static websites ideal for small businesses and landing pages.",
// //               },
// //               {
// //                 title: "Dynamic Website Designing",
// //                 img: "/service-card4.svg",
// //                 desc: "Advanced dynamic websites with database integration and admin control panels.",
// //               },
// //               {
// //                 title: "Psd to HTML Service",
// //                 img: "/service-card5.svg",
// //                 desc: "Convert your PSD, Figma or XD designs into pixel-perfect responsive HTML.",
// //               },
// //               {
// //                 title: "Website Redesign Service",
// //                 img: "/service-card6.svg",
// //                 desc: "Modern redesign of your old website with improved UI/UX and performance.",
// //               },
// //             ].map((item, i) => (
// //               <div
// //                 key={i}
// //                 className="bg-white rounded-xl py-6 px-2 border border-gray-100 shadow-sm hover:shadow-md transition duration-300"
// //               >
// //                 <img
// //                   src={item.img}
// //                   alt={item.title}
// //                   className="w-12 h-12 mx-auto mb-3"
// //                 />

// //                 <h3 className="text-[16px] font-semibold text-[#0b1b3f] mb-2 text-center">
// //                   {item.title}
// //                 </h3>

// //                 <p className="text-gray-600 text-sm leading-relaxed text-center">
// //                   {item.desc}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //       {/* 🔥 PROCESS SECTION */}
// //       <section className="py-20 bg-[#f6f7fb]">
// //         <div className="max-w-6xl mx-auto px-6 md:px-10">
// //           {/* TOP HEADING */}
// //           <div className="text-center mb-16">
// //             <p className="text-pink-500 uppercase tracking-[3px] text-sm mb-2">
// //               Process
// //             </p>

// //             <h2 className="text-[34px] md:text-[40px] font-bold text-[#0b1b3f] mb-4">
// //               Our App Development Process
// //             </h2>

// //             <p className="text-gray-600 max-w-2xl mx-auto">
// //               Our design process follows a proven approach. We begin with a deep
// //               understanding of your needs and create a planning template.
// //             </p>
// //           </div>

// //           {/* STEPS */}
// //           <div className="">
// //             {[
// //               {
// //                 id: 1,
// //                 title: "Requirement Gathering",
// //                 img: "/service-process1.jpg",
// //                 desc: "We understand your business goals, target users and gather all requirements before starting.",
// //               },
// //               {
// //                 id: 2,
// //                 title: "Prototype",
// //                 img: "/service-process2.jpg",
// //                 desc: "We create wireframes and prototypes to visualize the product structure and user experience.",
// //               },
// //               {
// //                 id: 3,
// //                 title: "Development",
// //                 img: "/service-process3.jpg",
// //                 desc: "Our team starts coding the application using modern technologies and best practices.",
// //               },
// //               {
// //                 id: 4,
// //                 title: "Launch & Support",
// //                 img: "/service-process4.jpg",
// //                 desc: "We deploy your product and provide ongoing support, updates and improvements.",
// //               },
// //             ].map((step, index) => {
// //               const isEven = (index + 1) % 2 === 0;

// //               return (
// //                 <div
// //                   key={step.id}
// //                   className={`grid items-center gap-12 ${
// //                     isEven
// //                       ? "md:grid-cols-[58%_35%]" // even → content 65 | image 35
// //                       : "md:grid-cols-[35%_58%]" // odd → image 35 | content 65
// //                   }`}
// //                 >
// //                   {isEven ? (
// //                     <>
// //                       {/* CONTENT 35% */}
// //                       <div>
// //                         <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-semibold text-[#0b1b3f] mb-4">
// //                           {step.id}
// //                         </div>

// //                         <h3 className="text-2xl font-bold text-[#0b1b3f] mb-3">
// //                           {step.title}
// //                         </h3>

// //                         <p className="text-gray-600 leading-relaxed ">
// //                           {step.desc}
// //                         </p>
// //                       </div>

// //                       {/* IMAGE 65% */}
// //                       <div className="flex justify-center">
// //                         <img
// //                           src={step.img}
// //                           alt={step.title}
// //                           className="w-full h-[320px] md:h-[360px] object-cover rounded-xl shadow-md"
// //                         />
// //                       </div>
// //                     </>
// //                   ) : (
// //                     <>
// //                       {/* IMAGE 35% */}
// //                       <div className="flex justify-center">
// //                         <img
// //                           src={step.img}
// //                           alt={step.title}
// //                           className="w-full h-[320px] md:h-[360px] object-cover rounded-xl shadow-md"
// //                         />
// //                       </div>

// //                       {/* CONTENT 65% */}
// //                       <div>
// //                         <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-semibold text-[#0b1b3f] mb-4">
// //                           {step.id}
// //                         </div>

// //                         <h3 className="text-2xl font-bold text-[#0b1b3f] mb-3">
// //                           {step.title}
// //                         </h3>

// //                         <p className="text-gray-600 leading-relaxed ">
// //                           {step.desc}
// //                         </p>
// //                       </div>
// //                     </>
// //                   )}
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </section>

// //       <section className="py-20 bg-[#f3f5f8]">
// //         <div className="max-w-6xl mx-auto px-6 md:px-10">
// //           {/* TOP HEADING */}
// //           <div className="text-center mb-14">
// //             <p className="text-pink-500 uppercase tracking-[3px] text-sm mb-2">
// //               Our Projects
// //             </p>

// //             <h2 className="text-[32px] md:text-[40px] font-bold text-[#0b1b3f] mb-4">
// //               Some of Our Works
// //             </h2>

// //             <p className="text-gray-600 max-w-2xl mx-auto text-[15px]">
// //               We think big and have hands in all leading technology platforms to
// //               provide you wide array of services.
// //             </p>
// //           </div>

// //           {/* PROJECT GRID */}
// //           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
// //             {[
// //               {
// //                 id: 1,
// //                 title: "Creative",
// //                 category: "ios, design",
// //                 image: "/service-ourproject1.jpg",
// //               },
// //               {
// //                 id: 2,
// //                 title: "Brochure Design",
// //                 category: "Graphic, Print",
// //                 image: "/service-ourproject2.jpg",
// //               },
// //               {
// //                 id: 3,
// //                 title: "Ecommerce Development",
// //                 category: "Web application",
// //                 image: "/service-ourproject3.jpg",
// //               },
// //               {
// //                 id: 4,
// //                 title: "Icon Pack",
// //                 category: "Android & iOS, Design",
// //                 image: "/service-ourproject4.jpg",
// //               },
// //               {
// //                 id: 5,
// //                 title: "Smart Watch",
// //                 category: "UI/UX Design",
// //                 image: "/service-ourproject5.jpg",
// //               },
// //               {
// //                 id: 6,
// //                 title: "Brochure Design",
// //                 category: "Graphic, Print",
// //                 image: "/service-ourproject6.jpg",
// //               },
// //             ].map((item) => (
// //               <div key={item.id} className="group">
// //                 {/* IMAGE */}
// //                 <div className="w-full h-[275x] rounded-xl overflow-hidden">
// //                   <img
// //                     src={item.image}
// //                     alt={item.title}
// //                     className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
// //                   />
// //                 </div>

// //                 {/* CONTENT */}
// //                 <div className="pt-5">
// //                   <h3 className="text-[20px] font-semibold text-[#0b1b3f] mb-1">
// //                     {item.title}
// //                   </h3>

// //                   <p className="text-gray-500 text-sm">{item.category}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* BUTTON */}
// //           <div className="text-center mt-14">
// //             <button className="px-7 py-3 border border-[#0b1b3f] text-[#0b1b3f] rounded-full text-sm font-medium hover:bg-[#0b1b3f] hover:text-white transition">
// //               View More Projects →
// //             </button>
// //           </div>
// //         </div>
// //       </section>

// //       <section className="relative py-24 bg-gradient-to-b from-[#dfeaf1] to-[#f3f5f8]">
// //         {/* TOP RIGHT CIRCLE */}
// //         <img
// //           src="/service-together2.svg"
// //           alt="design"
// //           className="absolute top-6 right-10 w-28 opacity-40 pointer-events-none"
// //         />

// //         {/* BOTTOM LEFT SHAPE */}
// //         <img
// //           src="/service-together3.svg"
// //           alt="design"
// //           className="absolute bottom-0 left-0 w-56 opacity-80 pointer-events-none"
// //         />

// //         {/* BOTTOM RIGHT SHAPE */}
// //         <img
// //           src="/service-together4.svg"
// //           alt="design"
// //           className="absolute bottom-0 right-0 w-48 opacity-90 pointer-events-none"
// //         />

// //         {/* CONTENT */}
// //         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
// //           {/* TITLE ROW WITH SIDE DESIGN */}
// //           <div className="relative inline-block mb-4">
// //             <p className="text-pink-500 uppercase tracking-[3px] text-sm inline-block">
// //               LET’S WORK TOGETHER
// //             </p>

// //             {/* <img
// //     src="/service-together1.svg"
// //     alt="design"
// //     className="absolute left-full ml-3 -top-6 w-40 opacity-80 pointer-events-none"
// //   /> */}
// //           </div>

// //           {/* MAIN HEADING */}
// //           <h2 className="text-[36px] md:text-[48px] font-bold text-[#0b1b3f] leading-tight mb-8">
// //             We Love to Listen to Your <br className="hidden md:block" />
// //             Requirements
// //           </h2>

// //           {/* BUTTON */}
// //           <button className="px-8 py-4 border-2 border-[#0b1b3f] text-[#0b1b3f] rounded-full text-lg font-medium hover:bg-[#0b1b3f] hover:text-white transition flex items-center gap-2 mx-auto">
// //             Estimate Project
// //             <span className="text-xl">›</span>
// //           </button>

// //           {/* PHONE */}
// //           <div className="mt-8 flex items-center justify-center gap-3 text-gray-600 text-lg">
// //             <span>Or call us now</span>
// //             <span className="text-xl">📞</span>
// //             <span className="text-[22px] font-medium text-gray-700">
// //               (123) 456 7890
// //             </span>
// //           </div>
// //         </div>
// //       </section>

// //       <section className="py-20 bg-[#f4eeea]">
// //         <div className="max-w-6xl mx-auto px-6 md:px-10">
// //           <div className="grid md:grid-cols-2 items-center gap-10">
// //             {/* LEFT CONTENT */}
// //             <div>
// //               <h2 className="text-[20px] md:text-[40px] font-bold text-[#0b1b3f] mb-4">
// //                 Get New Insights Weekly
// //               </h2>

// //               <p className="text-gray-600 text-[17px] leading-relaxed max-w-lg">
// //                 News letter dolor sit amet, consectetur adipiscing elit, sed do
// //                 eiusmod tempor incididunt. Enter your email
// //               </p>
// //             </div>

// //             {/* RIGHT INPUT + BUTTON */}
// //             <div className="w-full">
// //               <div className="flex items-center bg-white rounded-full shadow-sm overflow-hidden border border-gray-200">
// //                 <input
// //                   type="email"
// //                   placeholder="Email Your Address"
// //                   className="flex-1 px-6 py-4 outline-none text-gray-700 text-[16px]"
// //                 />

// //                 <button className="px-8 py-4 bg-gradient-to-r from-[#ff9a8b] to-[#ff4b8a] text-white font-medium rounded-full m-1 flex items-center gap-2 hover:opacity-90 transition">
// //                   Subscribe
// //                   <span>›</span>
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //     </main>
// //   );
// // }

 
"use client";
 
import PageBanner from "@/components/ui/PageBanner";
import StatsSection from "@/components/sections/StatsSection";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import News from "@/components/sections/News";
 
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
 
 
 
export default function Page() {
  return (
    <main className="min-h-screen bg-[#f6f7fb] pt-24">
      {/* HERO BANNER */}
      <PageBanner
        title="Our Services"
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        bg1="/background.png"
        bg2="/keyboard1.jpg"
      />
 
 
      {/* 🔥 SERVICE OVERVIEW SECTION (inline) */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
 
        className="relative py-20 bg-[#f6f7fb] overflow-hidden"
        viewport={{ once: true }}
 
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[35%_60%] gap-12 items-start">
 
          {/* LEFT IMAGE SIDE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative w-full h-[300px]"
          >
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute -top-10 -left-10 w-28 h-28 relative">
                <Image
                  src="/service-bg-left.svg"
                  alt="decor"
                  fill
                  className="object-contain opacity-100"
                />
              </div>
 
              <div className="absolute -bottom-10 -right-10 w-32 h-32 relative">
                <Image
                  src="/service-bg-right.svg"
                  alt="decor"
                  fill
                  className="object-contain opacity-100"
                />
              </div>
            </div>
 
            <Image
              src="/service-overview.jpg"
              alt="overview"
              fill
              className="relative z-10 w-full h-full object-cover rounded-xl shadow-lg"
            />
          </motion.div>
 
          {/* RIGHT TEXT SIDE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="text-pink-500 uppercase tracking-widest text-sm mb-3">
              Overview
            </p>
 
            <h2 className="fs-45 lh-57 font-bold text-[#0b1b3f] mb-6">
              Creative Web Design Service
            </h2>
 
            <p className="text-gray-600 mb-4 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
 
            <p className="text-gray-600 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </motion.div>
 
        </div>
      </motion.section>
 
 
      {/* 🔥 TECHNOLOGY STACK SECTION */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 bg-[#f6f7fb]"
      >
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              "service-language1.png",
              "service-language2.png",
              "service-language3.png",
              "service-language4.png",
              "service-language5.png",
              "service-language6.png",
              "service-language7.png",
            ].map((img, index) => (
              <motion.div
                key={img}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group w-24 h-24 md:w-28 md:h-28 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <div className="w-full h-full rounded-full flex items-center justify-center transition-all duration-300 group-hover:ring-4 group-hover:ring-purple-400 group-hover:ring-offset-4 group-hover:ring-offset-[#f6f7fb]">
                  <div className="relative w-10 h-10">
                    <Image
                      src={`/${img}`}
                      alt="tech"
                      fill
                      className="object-contain opacity-70 group-hover:opacity-100 transition"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
 
 
      {/* 🔥 SERVICE GRID */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-10 bg-[#f6f7fb] text-center"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
          <p className="text-pink-500 uppercase tracking-widest text-sm mb-2">
            Service
          </p>
 
          <h2 className="text-[36px] md:text-[40px] font-bold text-[#0b1b3f] mb-4">
            Our Services
          </h2>
 
          <p className="text-gray-600 max-w-xl mx-auto mb-12">
            We think big and have hands in all leading technology platforms to
            provide you wide array of services.
          </p>
 
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Graphic Designing Services",
                img: "/service-card1.svg",
                desc: "We create visually stunning graphics including logos, banners and brand identity designs.",
              },
              {
                title: "Responsive Web Designing",
                img: "/service-card2.svg",
                desc: "Fully responsive websites that look perfect on mobile, tablet and desktop devices.",
              },
              {
                title: "Static Website Designing",
                img: "/service-card3.svg",
                desc: "Fast loading static websites ideal for small businesses and landing pages.",
              },
              {
                title: "Dynamic Website Designing",
                img: "/service-card4.svg",
                desc: "Advanced dynamic websites with database integration and admin control panels.",
              },
              {
                title: "Psd to HTML Service",
                img: "/service-card5.svg",
                desc: "Convert your PSD, Figma or XD designs into pixel-perfect responsive HTML.",
              },
              {
                title: "Website Redesign Service",
                img: "/service-card6.svg",
                desc: "Modern redesign of your old website with improved UI/UX and performance.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl py-6 px-2 border border-gray-100 shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="relative w-12 h-12 mx-auto mb-3">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
 
                <h3 className="text-[16px] font-semibold text-[#0b1b3f] mb-2 text-center">
                  {item.title}
                </h3>
 
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
 
 
      {/* 🔥 PROCESS SECTION */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 bg-[#f6f7fb]"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="text-pink-500 uppercase tracking-[3px] text-sm mb-2">
              Process
            </p>
 
            <h2 className="text-[34px] md:text-[40px] font-bold text-[#0b1b3f] mb-4">
              Our App Development Process
            </h2>
 
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our design process follows a proven approach. We begin with a deep
              understanding of your needs and create a planning template.
            </p>
          </div>
 
          <div>
            {[
              {
                id: 1,
                title: "Requirement Gathering",
                img: "/service-process1.jpg",
                desc: "We understand your business goals, target users and gather all requirements before starting.",
              },
              {
                id: 2,
                title: "Prototype",
                img: "/service-process2.jpg",
                desc: "We create wireframes and prototypes to visualize the product structure and user experience.",
              },
              {
                id: 3,
                title: "Development",
                img: "/service-process3.jpg",
                desc: "Our team starts coding the application using modern technologies and best practices.",
              },
              {
                id: 4,
                title: "Launch & Support",
                img: "/service-process4.jpg",
                desc: "We deploy your product and provide ongoing support, updates and improvements.",
              },
            ].map((step, index) => {
              const isEven = (index + 1) % 2 === 0;
 
              return (
                <motion.div
                  key={step.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className={`grid items-center gap-12 ${isEven ? "md:grid-cols-[60%_40%]" : "md:grid-cols-[40%_60%]"
                    }`}
                >
                  {isEven ? (
                    <>
                      <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                      >
                        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-semibold text-[#0b1b3f] mb-4">
                          {step.id}
                        </div>
 
                        <h3 className="text-2xl font-bold text-[#0b1b3f] mb-3">
                          {step.title}
                        </h3>
 
                        <p className="text-gray-600 leading-relaxed">
                          {step.desc}
                        </p>
                      </motion.div>
 
                      <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex justify-center"
                      >
                        <div className="relative w-full h-[320px] md:h-[360px]">
                          <Image
                            src={step.img}
                            alt={step.title}
                            fill
                            className="object-cover rounded-xl shadow-md"
                          />
                        </div>
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex justify-center"
                      >
                        <div className="relative w-full h-[320px] md:h-[360px]">

                                                 <Image
                            src={step.img}
                            alt={step.title}
                            fill
                            className="object-cover rounded-xl shadow-md"
                          />
                        </div>
                      </motion.div>
 
                      <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                      >
                        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-semibold text-[#0b1b3f] mb-4">
                          {step.id}
                        </div>
 
                        <h3 className="text-2xl font-bold text-[#0b1b3f] mb-3">
                          {step.title}
                        </h3>
 
                        <p className="text-gray-600 leading-relaxed">
                          {step.desc}
                        </p>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>
 
 
      {/* 🔥 PROJECT SECTION */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 bg-[#f3f5f8]"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="text-pink-500 uppercase tracking-[3px] text-sm mb-2">
              Our Projects
            </p>
 
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#0b1b3f] mb-4">
              Some of Our Works
            </h2>
 
            <p className="text-gray-600 max-w-2xl mx-auto text-[15px]">
              We think big and have hands in all leading technology platforms to
              provide you wide array of services.
            </p>
          </div>
 
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                id: 1,
                title: "Creative",
                category: "ios, design",
                image: "/service-ourproject1.jpg",
              },
              {
                id: 2,
                title: "Brochure Design",
                category: "Graphic, Print",
                image: "/service-ourproject2.jpg",
              },
              {
                id: 3,
                title: "Ecommerce Development",
                category: "Web application",
                image: "/service-ourproject3.jpg",
              },
              {
                id: 4,
                title: "Icon Pack",
                category: "Android & iOS, Design",
                image: "/service-ourproject4.jpg",
              },
              {
                id: 5,
                title: "Smart Watch",
                category: "UI/UX Design",
                image: "/service-ourproject5.jpg",
              },
              {
                id: 6,
                title: "Brochure Design",
                category: "Graphic, Print",
                image: "/service-ourproject6.jpg",
              },
            ].map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative w-full h-[275px] rounded-xl overflow-hidden">
                  <Image
                    fill
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
 
                <div className="pt-5">
                  <h3 className="text-[20px] font-semibold text-[#0b1b3f] mb-1">
                    {item.title}
                  </h3>
 
                  <p className="text-gray-500 text-sm">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
 
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <button className="px-7 py-3 border border-[#0b1b3f] text-[#0b1b3f] rounded-full text-sm font-medium hover:bg-[#0b1b3f] hover:text-white transition">
              View More Projects →
            </button>
          </motion.div>
        </div>
      </motion.section>
 
 
      {/* LETS WORK TOGETHER */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative py-24 bg-gradient-to-b from-[#dfeaf1] to-[#f3f5f8] overflow-hidden"
      >
        {/* DECOR IMAGES */}
 
        <div className="absolute top-6 right-10 w-28 h-28">
          <Image
            src="/service-together2.svg"
            alt="design"
            fill
            className="object-contain opacity-40 pointer-events-none"
          />
        </div>
 
        <div className="absolute bottom-0 left-0 w-56 h-56">
          <Image
            src="/service-together3.svg"
            alt="design"
            fill
            className="object-contain opacity-80 pointer-events-none"
          />
        </div>
 
        <div className="absolute bottom-0 right-0 w-48 h-48">
          <Image
            src="/service-together4.svg"
            alt="design"
            fill
            className="object-contain opacity-90 pointer-events-none"
          />
        </div>
 
        {/* CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center relative z-10"
        >
          <p className="text-pink-500 uppercase tracking-[3px] text-sm mb-4">
            LET’S WORK TOGETHER
          </p>
 
          <h2 className="text-[36px] md:text-[48px] font-bold text-[#0b1b3f] leading-tight mb-8">
            We Love to Listen to Your <br className="hidden md:block" />
            Requirements
          </h2>
 
          <button className="px-8 py-4 border-2 border-[#0b1b3f] text-[#0b1b3f] rounded-full text-lg font-medium hover:bg-[#0b1b3f] hover:text-white transition flex items-center gap-2 mx-auto">
            Estimate Project
            <span className="text-xl">›</span>
          </button>
 
          <div className="mt-8 flex items-center justify-center gap-3 text-gray-600 text-lg">
            <span>Or call us now</span>
            <span className="text-xl">📞</span>
            <span className="text-[22px] font-medium text-gray-700">
              (123) 456 7890
            </span>
          </div>
        </motion.div>
      </motion.section>
 
 
 
      {/* NEWSLETTER */}
      <News variants={fadeUp} />
 
            <StatsSection />

 
    </main>
  );
}
 
 
 
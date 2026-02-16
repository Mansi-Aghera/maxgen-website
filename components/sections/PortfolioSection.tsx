// 

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
    category: "iOs, Android",
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
    category: "iOs, Android",
    image: "/work4.jpg",
    bg: "bg-gradient-to-r from-[#34d2b0] to-[#6aa6e8]",
  },
];

export default function PortfolioSection() {
  return (
    <section className="relative py-20 lg:py-24 bg-white overflow-hidden">
      {/* dotted bg */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* heading */}
        <div className="text-center mb-14 lg:mb-16">
          <p className="text-pink-500 tracking-[4px] font-semibold mb-3">
            OUR WORK
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0b1b3f]">
            Our Latest Creative Work
          </h2>
        </div>

        {/* GRID — EXACT TEMPLATE */}
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-14">
          {works.map((work, i) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* IMAGE CARD */}
              <div
                className={`
                  ${work.bg}
                  rounded-[18px]
                  overflow-hidden
                  flex items-center justify-center
                  h-[260px] sm:h-[300px] lg:h-[320px]
                  transition-all duration-500
                  group-hover:shadow-2xl
                `}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="
                    max-h-[85%]
                    object-contain
                    transition-transform duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* TEXT */}
              <div className="mt-5">
                <h3 className="text-xl lg:text-[22px] font-bold text-[#0b1b3f]">
                  {work.title}
                </h3>
                <p className="text-slate-500 mt-1 text-[15px]">
                  {work.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

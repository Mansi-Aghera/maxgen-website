"use client";
 
import { motion, Variants } from "framer-motion";
 
type Props = {
  variants: Variants;
};
 
export default function News({ variants }: Props) {
  return (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="show"
viewport={{ once: true }}
      className="py-20 bg-[#f4eeea]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 items-center gap-10">
         
          {/* LEFT TEXT */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
viewport={{ once: true }}
          >
            <h2 className="text-[20px] md:text-[40px] font-bold text-[#0b1b3f] mb-4">
              Get New Insights Weekly
            </h2>
 
            <p className="text-gray-600 text-[17px] leading-relaxed max-w-lg">
              News letter dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. Enter your email
            </p>
          </motion.div>
 
          {/* RIGHT INPUT */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
viewport={{ once: true }}
            className="w-full"
          >
            <div className="flex items-center bg-white rounded-full shadow-sm overflow-hidden border border-gray-200">
              <input
                type="email"
                placeholder="Email Your Address"
                className="flex-1 px-6 py-4 outline-none text-gray-700 text-[16px]"
              />
 
              <button className="px-8 py-4 bg-gradient-to-r from-[#ff9a8b] to-[#ff4b8a] text-white font-medium rounded-full m-1 flex items-center gap-2 hover:opacity-90 transition">
                Subscribe
                <span>›</span>
              </button>
            </div>
          </motion.div>
 
        </div>
      </div>
    </motion.section>
  );
}
 
 
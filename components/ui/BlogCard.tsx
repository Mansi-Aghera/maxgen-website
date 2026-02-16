// "use client";

// import { motion } from "framer-motion";
// import { User, Clock, MessageCircle } from "lucide-react";

// type Props = {
//   image: string;
//   tags: string[];
//   title: string;
//   desc: string;
//   author: string;
//   date: string;
//   comments: number;
// };

// export default function BlogCard({
//   image,
//   tags,
//   title,
//   desc,
//   author,
//   date,
//   comments,
// }: Props) {
//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       className="
//         bg-white rounded-2xl overflow-hidden
//         border border-slate-100
//         shadow-[0_6px_20px_rgba(0,0,0,0.06)]
//         hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)]
//         transition-all duration-500
//         hover:-translate-y-2
//         group
//       "
//     >
//       {/* IMAGE */}
//       <div className="relative overflow-hidden">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-[220px] object-cover transition-transform duration-700 group-hover:scale-105"
//         />

//         {/* TAGS */}
//         <div className="absolute bottom-3 left-3 flex gap-2">
//           {tags.map((tag) => (
//             <span
//               key={tag}
//               className="px-3 py-1 text-xs font-semibold rounded-md bg-pink-500 text-white shadow"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="p-6">
//         {/* META */}
//         <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-3">
//           <div className="flex items-center gap-1">
//             <User size={16} /> {author}
//           </div>
//           <div className="flex items-center gap-1">
//             <Clock size={16} /> {date}
//           </div>
//           <div className="flex items-center gap-1">
//             <MessageCircle size={16} /> ({comments})
//           </div>
//         </div>

//         {/* TITLE */}
//         <h3 className="text-xl font-bold text-[#0b1b3f] leading-snug mb-2 group-hover:text-pink-600 transition-colors">
//           {title}
//         </h3>

//         {/* DESC */}
//         <p className="text-slate-600 text-sm leading-relaxed">
//           {desc}
//         </p>
//       </div>
//     </motion.article>
//   );
// }


"use client";

import Link from "next/link";
import { MessageCircle, User, Calendar } from "lucide-react";

type Props = {
  slug: string;
  image: string;
  tags: string[];
  title: string;
  desc: string;
  author: string;
  date: string;
  comments: number;
};

export default function BlogCard({
  slug,
  image,
  tags,
  title,
  desc,
  author,
  date,
  comments,
}: Props) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        
        {/* IMAGE */}
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-56 object-cover"
          />

          {/* TAGS */}
          <div className="absolute bottom-3 left-3 flex gap-2">
            {tags.map((t, i) => (
              <span
                key={i}
                className="bg-pink-600 text-white text-xs px-3 py-1 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
            <span className="flex items-center gap-1">
              <User size={14} /> {author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={14} /> {date}
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle size={14} /> ({comments})
            </span>
          </div>

          <h3 className="text-lg font-semibold text-[#0b1b3f] group-hover:text-pink-600 transition-colors">
            {title}
          </h3>

          <p className="text-slate-600 text-sm mt-2">{desc}</p>
        </div>
      </article>
    </Link>
  );
}

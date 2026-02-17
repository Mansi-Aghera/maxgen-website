// // // "use client";

// // // import BlogCard from "@/components/ui/BlogCard";

// // // const blogs = [
// // //   {
// // //     image: "/blog-1.jpg",
// // //     tags: ["iOS", "Android"],
// // //     title: "Stock Market App Development – Time, Cost, Features",
// // //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
// // //     author: "Tom Black",
// // //     date: "Sep 24, 2019",
// // //     comments: 23,
// // //   },
// // //   {
// // //     image: "/blog2.jpg",
// // //     tags: ["iOS", "Android"],
// // //     title: "Finance App Development – Time, Cost, Features",
// // //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
// // //     author: "Tom Black",
// // //     date: "Sep 24, 2019",
// // //     comments: 23,
// // //   },
// // //   {
// // //     image: "/blog3.jpg",
// // //     tags: ["Marketing", "SEM"],
// // //     title: "How to Increase Your ROI Through scientific SEM?",
// // //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
// // //     author: "Tom Black",
// // //     date: "Sep 24, 2019",
// // //     comments: 23,
// // //   },
// // //   {
// // //     image: "/blog4.jpg",
// // //     tags: ["Marketing", "SEO"],
// // //     title: "How to Increase Website Traffic Using SEO",
// // //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
// // //     author: "Tom Black",
// // //     date: "Sep 24, 2019",
// // //     comments: 23,
// // //   },
// // //   {
// // //     image: "/blog5.jpg",
// // //     tags: ["Marketing", "SEO"],
// // //     title: "How digital transformation has changed the world.",
// // //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
// // //     author: "Tom Black",
// // //     date: "Sep 24, 2019",
// // //     comments: 23,
// // //   },
// // //   {
// // //     image: "/blog6.jpg",
// // //     tags: ["Marketing", "SEO"],
// // //     title: "How digital transformation has changed the world.",
// // //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
// // //     author: "Tom Black",
// // //     date: "Sep 24, 2019",
// // //     comments: 23,
// // //   },
// // // ];

// // // export default function BlogSection() {
// // //   return (
// // //     <section className="bg-white py-20">
// // //       <div className="max-w-7xl mx-auto px-6">

// // //         {/* HEADING */}
// // //         <div className="text-center mb-14">
// // //           <p className="text-pink-600 tracking-[4px] font-semibold mb-2">
// // //             BLOG UPDATE
// // //           </p>
// // //           <h2 className="text-4xl font-bold text-[#0b1b3f]">
// // //             Latest News & Articles
// // //           </h2>
// // //         </div>

// // //         {/* GRID */}
// // //         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
// // //           {blogs.map((b, i) => (
// // //             <BlogCard key={i} {...b} />
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // "use client";

// // import BlogCard from "@/components/ui/BlogCard";

// // const blogs = [
// //   {
// //     slug: "stock-market-app-development",
// //     image: "/blog-1.jpg",
// //     tags: ["iOS", "Android"],
// //     title: "Stock Market App Development – Time, Cost, Features",
// //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
// //     author: "Tom Black",
// //     date: "Sep 24, 2019",
// //     comments: 23,
// //   },
// //   {
// //     slug: "finance-app-development",
// //     image: "/blog2.jpg",
// //     tags: ["iOS", "Android"],
// //     title: "Finance App Development – Time, Cost, Features",
// //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
// //     author: "Tom Black",
// //     date: "Sep 24, 2019",
// //     comments: 23,
// //   },
// //   {
// //     slug: "increase-roi-sem",
// //     image: "/blog3.jpg",
// //     tags: ["Marketing", "SEM"],
// //     title: "How to Increase Your ROI Through scientific SEM?",
// //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
// //     author: "Tom Black",
// //     date: "Sep 24, 2019",
// //     comments: 23,
// //   },
// //   {
// //     slug: "increase-traffic-seo",
// //     image: "/blog4.jpg",
// //     tags: ["Marketing", "SEO"],
// //     title: "How to Increase Website Traffic Using SEO",
// //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
// //     author: "Tom Black",
// //     date: "Sep 24, 2019",
// //     comments: 23,
// //   },
// //   {
// //     slug: "digital-transformation-world",
// //     image: "/blog5.jpg",
// //     tags: ["Marketing", "SEO"],
// //     title: "How digital transformation has changed the world.",
// //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
// //     author: "Tom Black",
// //     date: "Sep 24, 2019",
// //     comments: 23,
// //   },
// //   {
// //     slug: "digital-transformation-future",
// //     image: "/blog6.jpg",
// //     tags: ["Marketing", "SEO"],
// //     title: "How digital transformation has changed the world.",
// //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
// //     author: "Tom Black",
// //     date: "Sep 24, 2019",
// //     comments: 23,
// //   },
// // ];

// // export default function BlogSection() {
// //   return (
// //     <section className="bg-white py-20">
// //       <div className="max-w-7xl mx-auto px-6">
// //         {/* HEADING */}
// //         <div className="text-center mb-14">
// //           <p className="text-pink-600 tracking-[4px] font-semibold mb-2">
// //             BLOG UPDATE
// //           </p>
// //           <h2 className="text-4xl font-bold text-[#0b1b3f]">
// //             Latest News & Articles
// //           </h2>
// //         </div>

// //         {/* GRID */}
// //         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
// //           {blogs.map((b, i) => (
// //             <BlogCard key={i} {...b} />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import BlogCard from "@/components/ui/BlogCard";

// const blogs = [
//   {
//     slug: "stock-market-app",
//     image: "/blog-1.jpg",
//     tags: ["iOS", "Android"],
//     title: "Stock Market App Development – Time, Cost, Features",
//     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     author: "Tom Black",
//     date: "Sep 24, 2019",
//     comments: 23,
//   },
//   {
//     slug: "finance-app",
//     image: "/blog2.jpg",
//     tags: ["iOS", "Android"],
//     title: "Finance App Development – Time, Cost, Features",
//     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     author: "Tom Black",
//     date: "Sep 24, 2019",
//     comments: 23,
//   },
//   {
//     slug: "increase-roi-sem",
//     image: "/blog3.jpg",
//     tags: ["Marketing", "SEM"],
//     title: "How to Increase Your ROI Through scientific SEM?",
//     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     author: "Tom Black",
//     date: "Sep 24, 2019",
//     comments: 23,
//   },
//   {
//     slug: "increase-traffic-seo",
//     image: "/blog4.jpg",
//     tags: ["Marketing", "SEO"],
//     title: "How to Increase Website Traffic Using SEO",
//     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     author: "Tom Black",
//     date: "Sep 24, 2019",
//     comments: 23,
//   },
//   {
//     slug: "digital-transformation-world",
//     image: "/blog5.jpg",
//     tags: ["Marketing", "SEO"],
//     title: "How digital transformation has changed the world.",
//     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     author: "Tom Black",
//     date: "Sep 24, 2019",
//     comments: 23,
//   },
//   {
//     slug: "digital-transformation-future",
//     image: "/blog6.jpg",
//     tags: ["Marketing", "SEO"],
//     title: "How digital transformation has changed the world.",
//     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     author: "Tom Black",
//     date: "Sep 24, 2019",
//     comments: 23,
//   },
// ];

// export default function BlogSection() {
//   return (
//     <section className="bg-white py-24">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* HEADING */}
//         <div className="text-center mb-14">
//           <p className="text-pink-600 tracking-[4px] font-semibold mb-2">
//             BLOG UPDATE
//           </p>
//           <h2 className="text-4xl font-bold text-[#0b1b3f]">
//             Latest News & Articles
//           </h2>
//         </div>

//         {/* GRID */}
//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//           {blogs.map((b, i) => (
//             <BlogCard key={i} {...b} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import PageBanner from "@/components/ui/PageBanner";
import { motion } from "framer-motion";
import BlogCard from "@/components/ui/BlogCard";

const blogs = [
  {
    slug: "stock-market-app",
    image: "/blog-1.jpg",
    tags: ["iOS", "Android"],
    title: "Stock Market App Development – Time, Cost, Features",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    author: "Tom Black",
    date: "Sep 24, 2019",
    comments: 23,
  },
  {
    slug: "finance-app",
    image: "/blog2.jpg",
    tags: ["iOS", "Android"],
    title: "Finance App Development – Time, Cost, Features",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    author: "Tom Black",
    date: "Sep 24, 2019",
    comments: 23,
  },
  {
    slug: "increase-roi-sem",
    image: "/blog3.jpg",
    tags: ["Marketing", "SEM"],
    title: "How to Increase Your ROI Through scientific SEM?",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    author: "Tom Black",
    date: "Sep 24, 2019",
    comments: 23,
  },
  {
    slug: "increase-traffic-seo",
    image: "/blog4.jpg",
    tags: ["Marketing", "SEO"],
    title: "How to Increase Website Traffic Using SEO",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    author: "Tom Black",
    date: "Sep 24, 2019",
    comments: 23,
  },
  {
    slug: "digital-transformation-world",
    image: "/blog5.jpg",
    tags: ["Marketing", "SEO"],
    title: "How digital transformation has changed the world.",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    author: "Tom Black",
    date: "Sep 24, 2019",
    comments: 23,
  },
  {
    slug: "digital-transformation-future",
    image: "/blog6.jpg",
    tags: ["Marketing", "SEO"],
    title: "How digital transformation has changed the world.",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    author: "Tom Black",
    date: "Sep 24, 2019",
    comments: 23,
  },
];

export default function BlogSection() {
  return (
    <main className="bg-white">

      {/* 🔥 BANNER */}
      <PageBanner
            title="Blogs"
              crumbs={[{ label: "Home", href: "/" }, { label: "Blogs" }]}
              bg1="/blog-banner-2.png"
              bg2="/servicebg-new.jpg"
            />

      {/* 🔥 BLOG CONTENT */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-pink-600 tracking-[4px] font-semibold mb-2">
              BLOG UPDATE
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#0b1b3f]">
              Latest News & Articles
            </h2>
          </motion.div>

          {/* GRID */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((b, i) => (
              <motion.div
                key={b.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <BlogCard {...b} />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}

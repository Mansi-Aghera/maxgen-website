
"use client";

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
];

export default function BlogSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADING */}
        <div className="text-center mb-14">
          <p className="text-pink-600 tracking-[4px] font-semibold mb-2">
            BLOG UPDATE
          </p>
          <h2 className="text-4xl font-bold text-[#0b1b3f]">
            Latest News & Articles
          </h2>
        </div>

        {/* GRID */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((b, i) => (
            <BlogCard key={i} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}

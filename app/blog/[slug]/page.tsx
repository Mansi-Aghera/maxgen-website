import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Eye } from "lucide-react";

const blogData: Record<string, any> = {
  "stock-market-app": {
    title: "Website – The quickest way to take your business online",
    image: "/blog-1.jpg",
    author: "John Doe",
    date: "January 10, 2020",
    views: 120,
  },
  "finance-app": {
    title: "Finance App Development – Time, Cost, Features",
    image: "/blog2.jpg",
    author: "John Doe",
    date: "January 10, 2020",
    views: 95,
  },
  "roi-sem": {
    title: "How to Increase Your ROI Through scientific SEM?",
    image: "/blog3.jpg",
    author: "John Doe",
    date: "January 10, 2020",
    views: 140,
  },
};

export default async function SingleBlog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogData[slug];

  if (!blog) return notFound();

  return (
    <main className="bg-[#f6f7fb] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">

        {/* ================= LEFT CONTENT ================= */}
        <article className="lg:col-span-2">

          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] leading-tight font-bold text-[#0b1b3f] mb-6">
            {blog.title}
          </h1>

          {/* AUTHOR + META */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-4">
              <img
                src="/user.jpg"
                alt="author"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-[#0b1b3f]">
                  By {blog.author}
                </div>
                <div className="text-sm text-slate-500">
                  {blog.date}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <Eye size={18} />
              {blog.views}
            </div>
          </div>

          {/* FEATURE IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-md mb-10">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="prose max-w-none prose-p:text-slate-600 prose-p:leading-relaxed">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book.
            </p>

            <p>
              It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages.
            </p>

            <p>
              More recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>
        </article>

        {/* ================= SIDEBAR ================= */}
        <aside className="space-y-10">

          {/* CTA CARD */}
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6 text-center shadow-sm">
            <h3 className="text-lg font-bold text-[#0b1b3f] mb-4">
              GET MORE <span className="text-pink-600">CUSTOMERS</span><br/>
              AND <span className="text-pink-600">GROW</span> YOUR BUSINESS
            </h3>

            <button className="btn-niwax mt-3">
              FREE STRATEGY CALL
            </button>

            <img
              src="/cta-people.png"
              alt=""
              className="mt-6 mx-auto w-40"
            />
          </div>

          {/* RECENT POSTS */}
          <div>
            <h3 className="text-xl font-bold text-[#0b1b3f] mb-6">
              Recent post
            </h3>

            <div className="space-y-4">
              {Object.entries(blogData).map(([key, b]) => (
                <Link
                  key={key}
                  href={`/blog/${key}`}
                  className="flex gap-4 items-center group"
                >
                  <img
                    src={b.image}
                    className="w-16 h-16 rounded-lg object-cover"
                  />

                  <div>
                    <div className="text-sm font-semibold text-[#0b1b3f] group-hover:text-pink-600 leading-snug">
                      {b.title}
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                      <Calendar size={12} />
                      {b.date}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CATEGORY */}
          <div>
            <h3 className="text-xl font-bold text-[#0b1b3f] mb-4">
              Blog Category
            </h3>

            <ul className="space-y-3 text-slate-600">
              <li className="flex justify-between border-b pb-2">
                Business <span>(2)</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                Financial <span>(3)</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                Marketing <span>(5)</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                SEO <span>(4)</span>
              </li>
            </ul>
          </div>

        </aside>
      </div>
    </main>
  );
}

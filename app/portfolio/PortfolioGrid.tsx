 
"use client";
 
import { useState } from "react";
import Image from "next/image";
 
const categories = ["All", "Website", "Mobile App", "Graphic"];
 
const projects = [
    {
        title: "Pets Care & Training App",
        category: "Mobile App",
        sub: "iOS, Android",
        image: "/app-img1.jpg",
    },
    {
        title: "Car Rental App",
        category: "Graphic",
        sub: "Graphic, Print",
        image: "/app-img2.jpg",
    },
    {
        title: "Event Management App",
        category: "Graphic",
        sub: "Graphic, Print",
        image: "/app-img3.jpg",
    },
    {
        title: "Restaurant App",
        category: "Mobile App",
        sub: "iOS, Android",
        image: "/app-img4.jpg",
    },
    {
        title: "Restaurant / Hotel App",
        category: "Graphic",
        sub: "Graphic, Print",
        image: "/app-img5.jpg",
    },
    {
        title: "Super Mart App",
        category: "Graphic",
        sub: "Graphic, Print",
        image: "/app-img6.jpg",
    },
];
 
export default function PortfolioGrid() {
    const [active, setActive] = useState("All");
 
    const filtered =
        active === "All"
            ? projects
            : projects.filter((p) => p.category === active);
 
    return (
        <div className="max-w-7xl mx-auto px-4">
 
            {/* FILTER BUTTONS */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition ${active === cat
                                ? "bg-pink-500 text-white"
                                : "bg-[#efe6df] text-gray-700 hover:bg-pink-100"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
 
            {/* GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filtered.map((item, index) => (
<div
  key={index}
  className="group rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
>
 
  {/* IMAGE FULL CARD */}
  <div className="relative w-full h-[260px]">
    <Image
      src={item.image}
      alt={item.title}
      fill
      className="object-fill"
    />
  </div>
 
  {/* CONTENT */}
  <div className="text-center py-6 px-4 bg-white">
    <h3 className="text-lg font-semibold text-[#0b1b3f]">
      {item.title}
    </h3>
    <p className="text-sm text-gray-500 mt-1">
      {item.sub}
    </p>
  </div>
 
</div>
 
 
                ))}
            </div>
        </div>
    );
}
 
 
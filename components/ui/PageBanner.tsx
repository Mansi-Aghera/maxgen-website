 
import Link from "next/link";
 
type PageBannerProps = {
  title?: string;
  breadcrumb?: string;
  height?: string;
  bg1?: string;
  bg2?: string;
};
 
export default function PageBanner({
  title = "Page Title",
  breadcrumb = "Home • Page",
  height = "h-[325px]",
  bg1 = "/background.png",
  bg2 = "/keyboard1.jpg",
}: PageBannerProps) {
 
  const parts = breadcrumb?.split(" • ") ?? ["Home", "Page"];
 
  return (
    <div className={`relative w-full ${height} flex items-center justify-center text-center`}>
 
      {/* 🔥 BASE BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg1})`,
          filter: "brightness(1)",
        }}
      />
 
      {/* 🔥 OVERLAY IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg2})`,
          filter: "brightness(0.7) blur(1px)",
        }}
      />
 
      {/* LEFT FADE */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent" />
 
      {/* RIGHT FADE */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-teal-200/40" />
 
      {/* TEXT */}
      <div className="relative z-10">
        <p className="text-sm text-gray-500 mb-2">
 
          {/* 🔗 HOME LINK */}
          <Link href="/" className="hover:text-pink-500 transition cursor-pointer">
            {parts[0]}
          </Link>
 
          <span className="mx-1">•</span>
 
          <span>{parts[1]}</span>
 
        </p>
 
        <h1 className="text-3xl md:text-4xl font-bold text-[#0b1b3f]">
          {title}
        </h1>
      </div>
    </div>
  );
}
 
 
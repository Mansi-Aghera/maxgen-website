 
import PortfolioGrid from "./PortfolioGrid";
import PageBanner from "../../components/ui/PageBanner"; // path adjust કરજો
 
export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#f6f7fb] pt-24">
 
      {/* 🔥 HERO SECTION */}
<PageBanner
  title="Our Projects"
  breadcrumb="Home • Portfolio"
  height="h-[400px]"   // 👈 height અહીંથી control કર
/>
 
 
 
 
      {/* BELOW CONTENT */}
      <div className="pt-16 px-4">
        <div className="text-center mb-16">
          <p className="text-sm text-pink-500 tracking-widest uppercase">
            Our Work
          </p>
          <h2 className="text-4xl font-bold text-[#0b1b3f] mt-2">
            Portfolio
          </h2>
        </div>
 
        <PortfolioGrid />
      </div>
    </div>
  );
}
 
 
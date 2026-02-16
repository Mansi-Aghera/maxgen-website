// import Hero from "@/components/sections/Hero";
// import AgencySection from "@/components/sections/AgencySection";

// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <AgencySection />
//     </>
//   );
// }


import Hero from "@/components/sections/Hero";
import AgencySection from "@/components/sections/AgencySection";
import StatsSection from "@/components/sections/StatsSection";
import OfficeLocations from "@/components/sections/OfficeLocations";
import ClientsSection from "@/components/sections/ClientsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import Blog from "@/components/sections/Blog";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full">
        <Hero />
      </section>

      {/* Agency Section */}
      <section className="">
        <AgencySection />
        <StatsSection />
        <PortfolioSection />
        <ClientsSection />
        <OfficeLocations />
        <Blog />
      </section>
    </main>
  );
}

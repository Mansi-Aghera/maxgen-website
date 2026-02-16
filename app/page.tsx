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
        <OfficeLocations />
      </section>
    </main>
  );
}

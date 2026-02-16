// "use client";

// import ServiceCard from "../ui/ServiceCard";

// export default function ServicesSection() {
//   return (
//     <section className="relative py-24 bg-[#f3efe9]">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* TOP ROW */}
//         <div className="grid md:grid-cols-3 gap-8">

//           {/* CARD 1 - INTEGRATED SERVICES */}
//           <div className="rounded-2xl p-10 text-white bg-gradient-to-br from-purple-600 to-purple-800 min-h-[300px] flex flex-col justify-between">
//             <div>
//               <h3 className="uppercase text-lg font-semibold tracking-wide mb-6">
//                 Integrated Services
//               </h3>

//               <p className="text-white/90 leading-relaxed">
//                 Lorem Ipsum is text of the printing and typesetting industry.
//                 Lorem Ipsum has been the industry's standard dummy text ever
//                 since the 1500.
//               </p>
//             </div>

//             <button className="mt-8 text-white font-medium flex items-center gap-2">
//               Learn More →
//             </button>
//           </div>

//           {/* CARD 2 */}
//           <ServiceCard
//             title="Web Development"
//             tags="PHP  |  .NET  |  JAVA  |  JOOMLA"
//             description="Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
//             bg="bg-[#e9edf6]"
//             accent="bg-blue-400"
//             icon="/development.svg"
//           />

//           {/* CARD 3 */}
//           <ServiceCard
//             title="Ecommerce Development"
//             tags="MAGENTO  |  WP  |  SHOPIFY  |  JOOMLA"
//             description="Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
//             bg="bg-[#f1e6d8]"
//             accent="bg-orange-400"
//             icon="/ecommerce.svg"
//           />
//         </div>

//         {/* BOTTOM ROW */}
//         <div className="grid md:grid-cols-3 gap-8 mt-10">

//           <ServiceCard
//             title="Mobile App Development"
//             tags="IPHONE  |  ANDROID  |  CROSS PLATFORM"
//             description="Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
//             bg="bg-[#efe5f3]"
//             accent="bg-pink-400"
//             icon="/app.svg"
//           />

//           <ServiceCard
//             title="Trending Technologies"
//             tags="REACT.JS  |  NODE.JS  |  ANGULAR.JS"
//             description="Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
//             bg="bg-[#e5f2f5]"
//             accent="bg-cyan-400"
//             icon="/tech.svg"
//           />

//           <ServiceCard
//             title="Digital Marketing"
//             tags="SEO  |  SMO  |  PPC  |  PPC"
//             description="Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
//             bg="bg-[#edf1e2]"
//             accent="bg-orange-300"
//             icon="/seo.svg"
//           />

//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import ServiceCard from "../ui/ServiceCard";

export default function ServicesSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#f3efe9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        {/* TOP ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* CARD 1 - INTEGRATED SERVICES */}
          <div className="rounded-2xl p-6 sm:p-8 lg:p-10 text-white bg-gradient-to-br from-purple-600 to-purple-800 min-h-[260px] sm:min-h-[300px] flex flex-col justify-between">
            <div>
              <h3 className="uppercase text-base sm:text-lg font-semibold tracking-wide mb-4 sm:mb-6">
                Integrated Services
              </h3>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Lorem Ipsum is text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500.
              </p>
            </div>

            <button className="mt-6 sm:mt-8 text-white text-sm sm:text-base font-medium flex items-center gap-2">
              Learn More →
            </button>
          </div>

          {/* CARD 2 */}
          <ServiceCard
            title="Web Development"
            tags="PHP  |  .NET  |  JAVA  |  JOOMLA"
            description="Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
            bg="bg-[#e9edf6]"
            accent="bg-blue-400"
            icon="/development.svg"
          />

          {/* CARD 3 */}
          <ServiceCard
            title="Ecommerce Development"
            tags="MAGENTO  |  WP  |  SHOPIFY  |  JOOMLA"
            description="Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
            bg="bg-[#f1e6d8]"
            accent="bg-orange-400"
            icon="/ecommerce.svg"
          />
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8 lg:mt-10">

          <ServiceCard
            title="Mobile App Development"
            tags="IPHONE  |  ANDROID  |  CROSS PLATFORM"
            description="Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
            bg="bg-[#efe5f3]"
            accent="bg-pink-400"
            icon="/app.svg"
          />

          <ServiceCard
            title="Trending Technologies"
            tags="REACT.JS  |  NODE.JS  |  ANGULAR.JS"
            description="Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
            bg="bg-[#e5f2f5]"
            accent="bg-cyan-400"
            icon="/tech.svg"
          />

          <ServiceCard
            title="Digital Marketing"
            tags="SEO  |  SMO  |  PPC  |  PPC"
            description="Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
            bg="bg-[#edf1e2]"
            accent="bg-orange-300"
            icon="/seo.svg"
          />

        </div>
      </div>
    </section>
  );
}

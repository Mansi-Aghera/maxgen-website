// import HeroCard from "../ui/HeroCard";

// export default function Hero() {
//   return (
//     <section
//   className="relative min-h-screen flex items-center pt-28 overflow-hidden text-white"
//   style={{ background: "var(--header-gradient)" }}
// >
//       {/* CONTENT CONTAINER */}
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

//         {/* LEFT SIDE */}
//         <div className="space-y-8">

//           <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
//             WEB.<br />
//             MOBILE.<br />
//             GRAPHIC.<br />
//             MARKETING.
//           </h1>

//           <p className="text-lg max-w-xl text-white/80">
//             <span className="text-[var(--yellow)] font-semibold">
//               Website and App development
//             </span>{" "}
//             solution for transforming and innovating businesses.
//           </p>

//           <button className="btn-niwax btn-hero mt-10">
//   View Case Studies →
// </button>

//           <div className="pt-6 flex gap-10 text-sm text-white/70">
//             <span>1000+ High Growth</span>
//             <span>Clutch Top 1000</span>
//             <span>Google 5★ Rating</span>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="relative flex justify-center lg:justify-end gap-8">

//           <HeroCard
//             title="VR Solution"
//             image="/vr.png"
//             gradient="linear-gradient(180deg,#3b82f6 0%,#7c3aed 100%)"
//           />

//           <HeroCard
//             title="Custom App Solution"
//             image="/app.png"
//             gradient="linear-gradient(180deg,#ec4899 0%,#9333ea 100%)"
//           />

//           <HeroCard
//             title="Startup Solution"
//             image="/startup.png"
//             gradient="linear-gradient(180deg,#14b8a6 0%,#0ea5e9 100%)"
//           />

//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";

// import HeroCard from "../ui/HeroCard";

// export default function Hero() {
//   return (
//     <section
//       className="relative min-h-screen flex items-center pt-28 overflow-hidden text-white"
//       style={{ background: "var(--header-gradient)" }}
//     >
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

//         {/* LEFT SIDE */}
//         <div className="space-y-8">

//           <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
//             WEB.<br />
//             MOBILE.<br />
//             GRAPHIC.<br />
//             MARKETING.
//           </h1>

//           <p className="text-lg max-w-xl text-white/80">
//             <span className="text-[var(--yellow)] font-semibold">
//               Website and App development
//             </span>{" "}
//             solution for transforming and innovating businesses.
//           </p>

//           <button className="btn-niwax btn-hero mt-10">
//             View Case Studies →
//           </button>

//           <div className="pt-6 flex gap-10 text-sm text-white/70">
//             <span>1000+ High Growth</span>
//             <span>Clutch Top 1000</span>
//             <span>Google 5★ Rating</span>
//           </div>
//         </div>

//         {/* RIGHT SIDE SLIDER */}
//         <div className="relative w-full overflow-hidden">
//           <div className="flex gap-8 animate-cards w-max">

//             {/* ORIGINAL 3 */}
//             <HeroCard
//               title="VR Solution"
//               image="/vr.png"
//               gradient="linear-gradient(180deg,#3b82f6 0%,#7c3aed 100%)"
//             />
//             <HeroCard
//               title="Custom App Solution"
//               image="/app.png"
//               gradient="linear-gradient(180deg,#ec4899 0%,#9333ea 100%)"
//             />
//             <HeroCard
//               title="Startup Solution"
//               image="/startup.png"
//               gradient="linear-gradient(180deg,#14b8a6 0%,#0ea5e9 100%)"
//             />
//             <HeroCard
//               title="Car Rental Solution"
//               image="/car-rental.png"
//               gradient="linear-gradient(180deg,#3b82f6 0%,#7c3aed 100%)"
//             />
//             <HeroCard
//               title="Marketing Solution"
//               image="/marketing.png"
//               gradient="linear-gradient(180deg,#ec4899 0%,#9333ea 100%)"
//             />
//             <HeroCard
//               title="e-Wallet Solution"
//               image="/eWallet.png"
//               gradient="linear-gradient(180deg,#14b8a6 0%,#0ea5e9 100%)"
//             />

//             {/* DUPLICATE FOR INFINITE LOOP */}
//             <HeroCard
//               title="VR Solution"
//               image="/vr.png"
//               gradient="linear-gradient(180deg,#3b82f6 0%,#7c3aed 100%)"
//             />
//             <HeroCard
//               title="Custom App Solution"
//               image="/app.png"
//               gradient="linear-gradient(180deg,#ec4899 0%,#9333ea 100%)"
//             />
//             <HeroCard
//               title="Startup Solution"
//               image="/startup.png"
//               gradient="linear-gradient(180deg,#14b8a6 0%,#0ea5e9 100%)"
//             />

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


// "use client";

// import { useState } from "react";
// import HeroCard from "../ui/HeroCard";

// export default function Hero() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <section
//         className="relative min-h-screen flex items-center pt-28 overflow-hidden text-white"
//         style={{ background: "var(--header-gradient)" }}
//       >
//         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT SIDE */}
//           <div className="space-y-8">

//             {/* MAIN HEADING */}
//             <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
//               WEB.<br />
//               MOBILE.<br />
//               GRAPHIC.<br />
//               MARKETING.
//             </h1>

//             <p className="text-lg max-w-xl text-white/80">
//               <span className="text-[var(--yellow)] font-semibold">
//                 Website and App development
//               </span>{" "}
//               solution for transforming and innovating businesses.
//             </p>

//             <button className="btn-niwax btn-hero mt-10">
//               View Case Studies →
//             </button>

//             <div className="pt-6 flex gap-10 text-sm text-white/70">
//               <span>1000+ High Growth</span>
//               <span>Clutch Top 1000</span>
//               <span>Google 5★ Rating</span>
//             </div>
//           </div>

//           {/* RIGHT SIDE SLIDER */}
          
//           <div className="relative w-full overflow-hidden">
            
           
//             <div className="flex gap-8 animate-cards w-max">

//               <HeroCard
//                 title="VR Solution"
//                 image="/vr.png"
//                 gradient="linear-gradient(180deg,#3b82f6 0%,#7c3aed 100%)"
//               />
//               <HeroCard
//                 title="Custom App Solution"
//                 image="/app.png"
//                 gradient="linear-gradient(180deg,#ec4899 0%,#9333ea 100%)"
//               />
//               <HeroCard
//                 title="Startup Solution"
//                 image="/startup.png"
//                 gradient="linear-gradient(180deg,#14b8a6 0%,#0ea5e9 100%)"
//               />

//               {/* Duplicate for smooth infinite */}
//               <HeroCard
//                 title="VR Solution"
//                 image="/vr.png"
//                 gradient="linear-gradient(180deg,#3b82f6 0%,#7c3aed 100%)"
//               />
//               <HeroCard
//                 title="Custom App Solution"
//                 image="/app.png"
//                 gradient="linear-gradient(180deg,#ec4899 0%,#9333ea 100%)"
//               />
//               <HeroCard
//                 title="Startup Solution"
//                 image="/startup.png"
//                 gradient="linear-gradient(180deg,#14b8a6 0%,#0ea5e9 100%)"
//               />

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* VIDEO MODAL */}
//       {open && (
//         <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="relative w-[90%] max-w-4xl">
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute -top-10 right-0 text-white text-2xl"
//             >
//               ✕
//             </button>

//             <div className="aspect-video">
//               <iframe
//                 className="w-full h-full rounded-xl"
//                 src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//                 title="Video"
//                 allowFullScreen
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


// "use client";

// import { useState } from "react";
// import HeroCard from "../ui/HeroCard";

// export default function Hero() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <section
//         className="relative flex items-center pt-24 sm:pt-28 lg:pt-32 overflow-hidden text-white min-h-[90vh] lg:min-h-screen"
//         style={{ background: "var(--header-gradient)" }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          
//           {/* LEFT SIDE */}
//           <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            
//             {/* MAIN HEADING */}
//             <h1 className="font-extrabold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
//               WEB.<br />
//               MOBILE.<br />
//               GRAPHIC.<br />
//               MARKETING.
//             </h1>

//             <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 text-white/80">
//               <span className="text-[var(--yellow)] font-semibold">
//                 Website and App development
//               </span>{" "}
//               solution for transforming and innovating businesses.
//             </p>

//             <div className="pt-2">
//               <button className="btn-niwax btn-hero mt-4 sm:mt-6">
//                 View Case Studies →
//               </button>
//             </div>

//             {/* STATS */}
//             <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-white/70">
//               <span>1000+ High Growth</span>
//               <span>Clutch Top 1000</span>
//               <span>Google 5★ Rating</span>
//             </div>
//           </div>

//           {/* RIGHT SIDE SLIDER */}
//           <div className="relative w-full overflow-hidden">
//             <div className="flex gap-6 sm:gap-8 animate-cards w-max">
              
//               <HeroCard
//                 title="VR Solution"
//                 image="/vr.png"
//                 gradient="linear-gradient(180deg,#3b82f6 0%,#7c3aed 100%)"
//               />
//               <HeroCard
//                 title="Custom App Solution"
//                 image="/app.png"
//                 gradient="linear-gradient(180deg,#ec4899 0%,#9333ea 100%)"
//               />
//               <HeroCard
//                 title="Startup Solution"
//                 image="/startup.png"
//                 gradient="linear-gradient(180deg,#14b8a6 0%,#0ea5e9 100%)"
//               />

//               {/* Duplicate for smooth infinite */}
//               <HeroCard
//                 title="VR Solution"
//                 image="/vr.png"
//                 gradient="linear-gradient(180deg,#3b82f6 0%,#7c3aed 100%)"
//               />
//               <HeroCard
//                 title="Custom App Solution"
//                 image="/app.png"
//                 gradient="linear-gradient(180deg,#ec4899 0%,#9333ea 100%)"
//               />
//               <HeroCard
//                 title="Startup Solution"
//                 image="/startup.png"
//                 gradient="linear-gradient(180deg,#14b8a6 0%,#0ea5e9 100%)"
//               />

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* VIDEO MODAL */}
//       {open && (
//         <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
//           <div className="relative w-full max-w-4xl">
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute -top-8 right-0 text-white text-xl sm:text-2xl"
//             >
//               ✕
//             </button>

//             <div className="aspect-video">
//               <iframe
//                 className="w-full h-full rounded-xl"
//                 src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//                 title="Video"
//                 allowFullScreen
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


"use client";

import { useState } from "react";
import HeroCard from "../ui/HeroCard";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        className="relative flex items-center pt-24 sm:pt-28 lg:pt-32 overflow-hidden min-h-[90vh] lg:min-h-screen text-[var(--text-dark)]"
        style={{ background: "var(--header-gradient)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          
          {/* LEFT SIDE */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* MAIN HEADING */}
            <h1 className="font-extrabold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#0b1b3f]">
              WEB.<br />
              MOBILE.<br />
              GRAPHIC.<br />
              MARKETING.
            </h1>

            <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 text-slate-600">
              <span className="text-[var(--yellow)] font-semibold">
                Website and App development
              </span>{" "}
              solution for transforming and innovating businesses.
            </p>

            <div className="pt-2">
              <button className="btn-niwax btn-hero mt-4 sm:mt-6">
                View Case Studies →
              </button>
            </div>

            {/* STATS */}
            <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-500">
              <span>1000+ High Growth</span>
              <span>Clutch Top 1000</span>
              <span>Google 5★ Rating</span>
            </div>
          </div>

          {/* RIGHT SIDE SLIDER */}
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-6 sm:gap-8 animate-cards w-max">
              
              <HeroCard
                title="VR Solution"
                image="/vr.png"
                gradient="linear-gradient(180deg,#3b82f6 0%,#7c3aed 100%)"
              />
              <HeroCard
                title="Custom App Solution"
                image="/app.png"
                gradient="linear-gradient(180deg,#ec4899 0%,#9333ea 100%)"
              />
              <HeroCard
                title="Startup Solution"
                image="/startup.png"
                gradient="linear-gradient(180deg,#14b8a6 0%,#0ea5e9 100%)"
              />

              {/* duplicate for loop */}
              <HeroCard
                title="VR Solution"
                image="/vr.png"
                gradient="linear-gradient(180deg,#3b82f6 0%,#7c3aed 100%)"
              />
              <HeroCard
                title="Custom App Solution"
                image="/app.png"
                gradient="linear-gradient(180deg,#ec4899 0%,#9333ea 100%)"
              />
              <HeroCard
                title="Startup Solution"
                image="/startup.png"
                gradient="linear-gradient(180deg,#14b8a6 0%,#0ea5e9 100%)"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-8 right-0 text-white text-xl sm:text-2xl"
            >
              ✕
            </button>

            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

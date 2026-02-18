// "use client";

// import { motion } from "framer-motion";
// import { MapPin, Phone, Mail, Globe } from "lucide-react";

// type Office = {
//   city: string;
//   address: string;
//   image: string;
// };

// const offices: Office[] = [
//   {
//     city: "New York",
//     address: "603 FA Forest Avenue, New York, USA 10021",
//     image: "/newyork.png",
//   },
//   {
//     city: "Sydney",
//     address: "2449 Columbia Boulevard, Sydney, 10021",
//     image: "/sydeny.png",
//   },
//   {
//     city: "Rome",
//     address: "9988 Piazzetta Scalette Rubiani 99, Rome, 84090",
//     image: "/rome.png",
//   },
// ];

// function CircleIcon({
//   children,
//   active = false,
// }: {
//   children: React.ReactNode;
//   active?: boolean;
// }) {
//   return (
//     <div
//       className={`
//         relative flex items-center justify-center
//         w-[58px] h-[58px] rounded-full cursor-pointer
//         border border-gray-200
//         transition-all duration-300
//         ${active ? "bg-pink-500 text-white shadow-lg" : "bg-white text-[#0b1b3f]"}
//         hover:bg-pink-500 hover:text-white hover:shadow-xl
//         hover:-translate-y-1
//       `}
//     >
//       {children}
//     </div>
//   );
// }

// export default function OfficeLocations() {
//   return (
//     <section className="relative py-[110px] bg-[#f6f7fb] overflow-hidden">
//       {/* decorative dots */}
//       <div className="absolute left-10 top-20 opacity-40 hidden lg:block">
//         <div className="grid grid-cols-5 gap-3">
//           {Array.from({ length: 25 }).map((_, i) => (
//             <div
//               key={i}
//               className="w-2.5 h-2.5 rounded-full bg-[#c9d6ea]"
//             />
//           ))}
//         </div>
//       </div>

//       {/* decorative circle lines */}
//       <div className="absolute right-0 top-16 opacity-30 hidden lg:block">
//         <div className="w-[220px] h-[220px] border-2 border-dashed border-[#c9d6ea] rounded-full" />
//       </div>

//       <div className="max-w-7xl mx-auto px-6">
//         {/* heading */}
//         <div className="text-center mb-16">
//           <p className="text-pink-500 tracking-[4px] font-semibold mb-3">
//             OUR LOCATIONS
//           </p>
//           <h2 className="text-[44px] font-bold text-[#0b1b3f]">
//             Our Office
//           </h2>
//         </div>

//         {/* cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
//           {offices.map((office, i) => (
//             <motion.div
//               key={office.city}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: i * 0.15 }}
//               viewport={{ once: true }}
//             >
//               {/* image card */}
//               <div className="bg-[#efe7e4] rounded-[24px] p-10 mb-8 flex justify-center">
//                 <img
//                   src={office.image}
//                   alt={office.city}
//                   className="h-[90px] object-contain"
//                 />
//               </div>

//               {/* text */}
//               <h3 className="text-[26px] font-bold text-[#0b1b3f] mb-3">
//                 {office.city}
//               </h3>

//               <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
//                 {office.address}
//               </p>

//               {/* icons */}
//               <div className="flex gap-4">
//                 <CircleIcon>
//                   <MapPin size={20} />
//                 </CircleIcon>

//                 <CircleIcon>
//                   <Phone size={20} />
//                 </CircleIcon>

//                 <CircleIcon>
//                   <Mail size={20} />
//                 </CircleIcon>

//                 <CircleIcon>
//                   <Globe size={20} />
//                 </CircleIcon>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";

// import { motion } from "framer-motion";
// import { MapPin, Phone, Mail, Globe } from "lucide-react";

// type Office = {
//   city: string;
//   address: string;
//   image: string;
// };

// const offices: Office[] = [
//   {
//     city: "New York",
//     address: "603 FA Forest Avenue, New York, USA 10021",
//     image: "/newyork.png",
//   },
//   {
//     city: "Sydney",
//     address: "2449 Columbia Boulevard, Sydney, 10021",
//     image: "/sydeny.png",
//   },
//   {
//     city: "Rome",
//     address: "9988 Piazzetta Scalette Rubiani 99, Rome, 84090",
//     image: "/rome.png",
//   },
// ];

// function CircleIcon({ children }: { children: React.ReactNode }) {
//   return (
//     <div
//       className="
//         w-[54px] h-[54px] rounded-full
//         flex items-center justify-center
//         bg-white border border-gray-200
//         text-[#0b1b3f]
//         transition-all duration-300
//         hover:bg-pink-500 hover:text-white
//         hover:shadow-lg hover:-translate-y-1
//         cursor-pointer
//       "
//     >
//       {children}
//     </div>
//   );
// }

// export default function OfficeLocations() {
//   return (
//     <section className="relative py-[110px] bg-[#f6f7fb] overflow-hidden">
//       {/* decorative dots */}
//       <div className="absolute left-10 top-20 opacity-40 hidden lg:block">
//         <div className="grid grid-cols-5 gap-3">
//           {Array.from({ length: 25 }).map((_, i) => (
//             <div
//               key={i}
//               className="w-2.5 h-2.5 rounded-full bg-[#c9d6ea]"
//             />
//           ))}
//         </div>
//       </div>

//       {/* decorative circle */}
//       <div className="absolute right-0 top-16 opacity-30 hidden lg:block">
//         <div className="w-[220px] h-[220px] border-2 border-dashed border-[#c9d6ea] rounded-full" />
//       </div>

//       <div className="max-w-7xl mx-auto px-6">
//         {/* heading */}
//         <div className="text-center mb-20">
//           <p className="text-pink-500 tracking-[4px] font-semibold mb-3">
//             OUR LOCATIONS
//           </p>
//           <h2 className="text-[44px] font-bold text-[#0b1b3f]">
//             Our Office
//           </h2>
//         </div>

//         {/* cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {offices.map((office, i) => (
//             <motion.div
//               key={office.city}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: i * 0.15 }}
//               viewport={{ once: true }}
//               className="
//                 bg-white rounded-[26px]
//                 shadow-[0_10px_30px_rgba(0,0,0,0.06)]
//                 hover:shadow-[0_18px_50px_rgba(0,0,0,0.12)]
//                 transition-all duration-300
//                 hover:-translate-y-2
//                 overflow-hidden
//                 flex flex-col
//               "
//             >
//               {/* skyline area */}
//               <div className="bg-[#efe7e4] flex justify-center items-center h-[150px]">
//                 <img
//                   src={office.image}
//                   alt={office.city}
//                   className="h-[90px] object-contain"
//                 />
//               </div>

//               {/* content */}
//               <div className="p-8 flex flex-col flex-1">
//                 <h3 className="text-[24px] font-bold text-[#0b1b3f] mb-3">
//                   {office.city}
//                 </h3>

//                 <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
//                   {office.address}
//                 </p>

//                 {/* icons bottom aligned */}
//                 <div className="flex gap-4 mt-auto">
//                   <CircleIcon>
//                     <MapPin size={18} />
//                   </CircleIcon>
//                   <CircleIcon>
//                     <Phone size={18} />
//                   </CircleIcon>
//                   <CircleIcon>
//                     <Mail size={18} />
//                   </CircleIcon>
//                   <CircleIcon>
//                     <Globe size={18} />
//                   </CircleIcon>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


 
"use client";
 
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
 
type Office = {
  city: string;
  address: string;
  image: string;
};
 
const offices: Office[] = [
  {
    city: "New York",
    address: "603 FA Forest Avenue, New York, USA 10021",
    image: "/newyork.png",
  },
  {
    city: "Sydney",
    address: "2449 Columbia Boulevard, Sydney, 10021",
    image: "/sydeny.png",
  },
  {
    city: "Rome",
    address: "9988 Piazzetta Scalette Rubiani 99, Rome, 84090",
    image: "/rome.png",
  },
];
 
function CircleIcon({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        w-[54px] h-[54px] rounded-full
        flex items-center justify-center
        bg-white border border-gray-200
        text-[#0b1b3f]
        transition-all duration-300
        hover:bg-pink-500 hover:text-white
        hover:shadow-lg hover:-translate-y-1
        cursor-pointer
      "
    >
      {children}
    </div>
  );
}
 
export default function OfficeLocations() {
  return (
    <section className="relative isolate py-[110px] bg-[#f6f7fb] overflow-hidden">
 
      {/* decorative circle (background) */}
      <div className="absolute right-0 top-16 opacity-30 hidden lg:block -z-10">
        <div className="w-[220px] h-[220px] border-2 border-dashed border-[#c9d6ea] rounded-full" />
      </div>
 
      <div className="relative z-10 max-w-7xl mx-auto px-6">
 
        {/* 🔥 DOTS moved inside container (behind first card) */}
        <div
          className="
            absolute
            -left-3
            top-[105px]
            -translate-x-10
            opacity-50
            hidden lg:block
            -z-10
          "
        >
          <div className="grid grid-cols-6 gap-4">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-[#c9d6ea]" />
            ))}
          </div>
        </div>
 
        {/* heading */}
        <div className="text-center mb-20">
          <p className="text-pink-500 tracking-[4px] font-semibold mb-3">
            OUR LOCATIONS
          </p>
          <h2 className="text-[44px] font-bold text-[#0b1b3f]">
            Our Office
          </h2>
        </div>
 
        {/* cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {offices.map((office, i) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className="
                bg-white rounded-[26px]
                shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                hover:shadow-[0_18px_50px_rgba(0,0,0,0.12)]
                transition-all duration-300
                hover:-translate-y-2 hover:scale-[1.02]
                overflow-hidden
                flex flex-col
              "
            >
              {/* skyline area */}
              <div className="bg-[#efe7e4] flex justify-center items-center h-[150px]">
                <img
                  src={office.image}
                  alt={office.city}
                  className="h-[90px] object-contain"
                />
              </div>
 
              {/* content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-[24px] font-bold text-[#0b1b3f] mb-3">
                  {office.city}
                </h3>
 
                <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
                  {office.address}
                </p>
 
                {/* icons */}
                <div className="flex gap-4 mt-auto">
                  <CircleIcon>
                    <MapPin size={18} />
                  </CircleIcon>
                  <CircleIcon>
                    <Phone size={18} />
                  </CircleIcon>
                  <CircleIcon>
                    <Mail size={18} />
                  </CircleIcon>
                  <CircleIcon>
                    <Globe size={18} />
                  </CircleIcon>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
 
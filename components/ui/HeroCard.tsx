// // type Props = {
// //   title: string;
// //   image: string;
// //   gradient: string;
// // };

// // export default function HeroCard({ title, image, gradient }: Props) {
// //   return (
// //     <div
// //       className="w-[290px] h-[300px] rounded-[30px] p-4 flex flex-col justify-between text-white shadow-xl transition-all duration-500 hover:-translate-y-6"
// //       style={{ background: gradient }}
// //     >
// //       <img
// //         src={image}
// //         alt={title}
// //         className="w-50 mx-auto mt-6"
// //       />

// //       <h3 className="text-xl font-semibold leading-snug">
// //         {title}
// //       </h3>
// //     </div>
// //   );
// // }

// // type Props = {
// //   title: string;
// //   image: string;
// //   gradient: string;
// // };

// // export default function HeroCard({ title, image, gradient }: Props) {
// //   return (
// //     <div
// //       className="w-[290px] h-[300px] rounded-[30px] p-8 flex flex-col justify-between text-white shadow-xl shrink-0"
// //       style={{ background: gradient }}
// //     >
// //       <img src={image} alt={title} className="w-40 mx-auto mt-6" />

// //       <h3 className="text-xl font-semibold leading-snug">{title}</h3>
// //     </div>
// //   );
// // }


// type Props = {
//   title: string;
//   image: string;
//   gradient: string;
// };

// export default function HeroCard({ title, image, gradient }: Props) {
//   return (
//     <div
//       className="w-[220px] sm:w-[250px] md:w-[280px] lg:w-[300px] 
//                  h-[240px] sm:h-[260px] md:h-[290px] lg:h-[310px]
//                  rounded-[26px] sm:rounded-[28px] lg:rounded-[30px]
//                  p-5 sm:p-6 lg:p-8
//                  flex flex-col justify-between text-white shadow-xl shrink-0"
//       style={{ background: gradient }}
//     >
//       <img
//         src={image}
//         alt={title}
//         className="w-24 sm:w-28 md:w-36 lg:w-40 mx-auto mt-4 sm:mt-6"
//       />

//       <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-snug">
//         {title}
//       </h3>
//     </div>
//   );
// }


type Props = {
  title: string;
  image: string;
  gradient: string;
};

export default function HeroCard({ title, image, gradient }: Props) {
  return (
    <div
      className="
        group relative shrink-0
        w-[220px] sm:w-[250px] md:w-[280px] lg:w-[300px]
        h-[240px] sm:h-[260px] md:h-[290px] lg:h-[310px]
        rounded-[26px] sm:rounded-[28px] lg:rounded-[30px]
        p-5 sm:p-6 lg:p-8
        flex flex-col justify-between text-white
        transition-all duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:-translate-y-3
        hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)]
      "
      style={{ background: gradient }}
    >
      {/* GLOW */}
      <div
        className="
          absolute -inset-3 rounded-[34px]
          opacity-0 group-hover:opacity-100
          transition duration-500
          blur-2xl
        "
        style={{ background: gradient }}
      />

      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="
          relative z-10
          w-24 sm:w-28 md:w-36 lg:w-40
          mx-auto mt-4 sm:mt-6
          transition-transform duration-500
          group-hover:-translate-y-2
          group-hover:scale-105
        "
      />

      {/* TITLE */}
      <h3
        className="
          relative z-10
          text-sm sm:text-base md:text-lg lg:text-xl
          font-semibold leading-snug
          transition-transform duration-500
          group-hover:-translate-y-1
        "
      >
        {title}
      </h3>
    </div>
  );
}

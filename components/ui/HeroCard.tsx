// type Props = {
//   title: string;
//   image: string;
//   gradient: string;
// };

// export default function HeroCard({ title, image, gradient }: Props) {
//   return (
//     <div
//       className="w-[290px] h-[300px] rounded-[30px] p-4 flex flex-col justify-between text-white shadow-xl transition-all duration-500 hover:-translate-y-6"
//       style={{ background: gradient }}
//     >
//       <img
//         src={image}
//         alt={title}
//         className="w-50 mx-auto mt-6"
//       />

//       <h3 className="text-xl font-semibold leading-snug">
//         {title}
//       </h3>
//     </div>
//   );
// }

// type Props = {
//   title: string;
//   image: string;
//   gradient: string;
// };

// export default function HeroCard({ title, image, gradient }: Props) {
//   return (
//     <div
//       className="w-[290px] h-[300px] rounded-[30px] p-8 flex flex-col justify-between text-white shadow-xl shrink-0"
//       style={{ background: gradient }}
//     >
//       <img src={image} alt={title} className="w-40 mx-auto mt-6" />

//       <h3 className="text-xl font-semibold leading-snug">{title}</h3>
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
      className="w-[220px] sm:w-[250px] md:w-[280px] lg:w-[300px] 
                 h-[240px] sm:h-[260px] md:h-[290px] lg:h-[310px]
                 rounded-[26px] sm:rounded-[28px] lg:rounded-[30px]
                 p-5 sm:p-6 lg:p-8
                 flex flex-col justify-between text-white shadow-xl shrink-0"
      style={{ background: gradient }}
    >
      <img
        src={image}
        alt={title}
        className="w-24 sm:w-28 md:w-36 lg:w-40 mx-auto mt-4 sm:mt-6"
      />

      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-snug">
        {title}
      </h3>
    </div>
  );
}

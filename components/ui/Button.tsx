// "use client";

// import Link from "next/link";
// import { ReactNode } from "react";

// type Props = {
//   children: ReactNode;
//   href?: string;
//   size?: "sm" | "md" | "lg";
//   variant?: "primary" | "hero";
//   full?: boolean;
// };

// export default function Button({
//   children,
//   href,
//   size = "md",
//   variant = "primary",
//   full = false,
// }: Props) {
//   const sizeClass =
//     size === "sm"
//       ? "px-4 py-2 text-sm"
//       : size === "lg"
//       ? "px-10 py-4 text-lg"
//       : "px-8 py-3 text-base";

//   const gradient =
//     variant === "hero"
//       ? "from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
//       : "from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600";

//   const className = `
//     relative inline-flex items-center justify-center
//     overflow-hidden rounded-full font-semibold text-white
//     bg-gradient-to-r ${gradient}
//     transition-all duration-300 ease-out
//     hover:-translate-y-[2px] hover:shadow-lg
//     active:translate-y-0 active:shadow-md
//     ${sizeClass}
//     ${full ? "w-full" : ""}
//   `;

//   const shine = `
//     before:content-['']
//     before:absolute before:inset-0
//     before:bg-[linear-gradient(120deg,rgba(255,255,255,0.35),transparent)]
//     before:translate-x-[-120%]
//     before:transition-transform before:duration-700
//     hover:before:translate-x-[120%]
//   `;

//   if (href) {
//     return (
//       <Link href={href} className={`${className} ${shine}`}>
//         {children}
//       </Link>
//     );
//   }

//   return (
//     <button className={`${className} ${shine}`}>
//       {children}
//     </button>
//   );
// }


"use client";

import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "hero";
  full?: boolean;
};

export default function Button({
  children,
  href,
  onClick,
  size = "md",
  variant = "primary",
  full = false,
}: Props) {
  const sizeClass =
    size === "sm"
      ? "px-6 py-2.5 text-sm"
      : size === "lg"
      ? "px-10 py-4 text-lg"
      : "px-8 py-3 text-base";

  const variantClass =
    variant === "hero" ? "btn-niwax btn-hero" : "btn-niwax";

  const className = `
    ${variantClass}
    ${sizeClass}
    ${full ? "w-full" : ""}
    inline-flex items-center justify-center
    whitespace-nowrap
  `;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

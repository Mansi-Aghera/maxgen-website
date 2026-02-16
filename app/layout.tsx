// // import "./globals.css";
// // import Navbar from "@/components/Navbar";

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   return (
// //     <html lang="en">
// //       <body>
// //   <Navbar />
// //   {children}
// // </body>
// //     </html>
// //   );
// // }



// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import type { ReactNode } from "react";

// export const metadata = {
//   title: "MaxGen",
//   description: "MaxGen Website",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen w-full overflow-x-hidden">
//         <Navbar />
//         <main className="w-full">{children}</main>
//       </body>
//     </html>
//   );
// }


import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import type { ReactNode } from "react";

export const metadata = {
  title: "MaxGen",
  description: "MaxGen Website",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full overflow-x-hidden flex flex-col">
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <Footer />
      </body>
    </html>
  );
}

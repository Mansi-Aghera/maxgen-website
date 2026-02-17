"use client";

import { motion } from "framer-motion";

type Client = {
  logo: string;
  name: string;
  country: string;
};

const clients: Client[] = [
  { logo: "/clients-1.png", name: "Shutter", country: "USA" },
  { logo: "/clients-2.png", name: "Hipster", country: "USA" },
  { logo: "/clients-3.png", name: "Happy", country: "USA" },
  { logo: "/clients-4.png", name: "Retro Studio", country: "USA" },
  { logo: "/clients-5.png", name: "Royale Stone", country: "UK" },
  { logo: "/clients-6.png", name: "Coffee", country: "Australia" },

  { logo: "/clients-7.png", name: "PAPA", country: "Malaysia" },
  { logo: "/clients-8.png", name: "Iconic", country: "Australia" },
  { logo: "/clients-9.png", name: "Bakery", country: "India" },
  { logo: "/clients-10.png", name: "Iconico", country: "India" },
  { logo: "/clients-11.png", name: "Tom N Jerry", country: "UK" },
  { logo: "/clients-12.png", name: "Arch", country: "India" },

  // { logo: "/clients-13.png", name: "Aro Group", country: "India" },
  // { logo: "/clients-14.png", name: "Tom Group", country: "India" },
  // { logo: "/clients-15.png", name: "Premier Pipes", country: "India" },
  // { logo: "/clients-16.png", name: "Dynamic", country: "India" },
  // { logo: "/clients-17.png", name: "Fns Inc", country: "India" },
  // { logo: "/clients-18.png", name: "RP School", country: "India" },
];

function ClientCard({ client, index }: { client: Client; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.03 }}
      viewport={{ once: true }}
      className="group flex flex-col items-center text-center"
    >
      {/* LOGO BOX */}
      <div
        className="
          w-full h-[90px] sm:h-[100px] md:h-[110px]
          flex items-center justify-center
          rounded-xl
          transition-all duration-300
          group-hover:bg-white/60
        "
      >
        <img
          src={client.logo}
          alt={client.name}
          className="
            max-h-[50px] sm:max-h-[58px] md:max-h-[62px]
            object-contain
            transition-all duration-300
            group-hover:scale-110
          "
        />
      </div>

      {/* TEXT */}
      <p className="mt-4 text-sm text-slate-500">
        {client.name}, {client.country}
      </p>
    </motion.div>
  );
}

export default function ClientsSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#efe7e4]">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-pink-500 tracking-[4px] font-semibold mb-3">
            OUR HAPPY CUSTOMERS
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1b3f]">
            Some of our Clients
          </h2>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
            gap-y-12
            gap-x-8
          "
        >
          {clients.map((c, i) => (
            <ClientCard key={i} client={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

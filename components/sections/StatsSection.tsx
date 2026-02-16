"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = {
  icon: string;
  value: number;
  suffix?: string;
  label: string;
};

const topStats: Stat[] = [
  { icon: "/startup.svg", value: 15, suffix: "+", label: "Year In Business" },
  { icon: "/team.svg", value: 80, suffix: "+", label: "Team Members" },
];

const bottomStats: Stat[] = [
  { icon: "/deal.svg", value: 450, label: "Happy Clients" },
  { icon: "/computers.svg", value: 48, suffix: "k", label: "Projects Done" },
  { icon: "/worker.svg", value: 95, suffix: "k", label: "Hours Worked" },
  { icon: "/customer-service.svg", value: 24, suffix: "/7", label: "Support Available" },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1400;
    const step = Math.ceil(value / (duration / 16));

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(start);
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function StatItem({ stat, delay }: { stat: Stat; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex items-center gap-3 sm:gap-4 lg:gap-6 group"
    >
      {/* ICON BADGE */}
      <div
        className="
          relative
          w-[52px] h-[52px]
          sm:w-[60px] sm:h-[60px]
          lg:w-[72px] lg:h-[72px]
          rounded-[14px] sm:rounded-[16px] lg:rounded-[20px]
          bg-[#f4f5f7]
          flex items-center justify-center
          shrink-0
          transition-all duration-400
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:-translate-y-1.5
          sm:group-hover:-translate-y-2
          group-hover:bg-white
          group-hover:shadow-[0_18px_35px_rgba(0,0,0,0.18)]
          lg:group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)]
        "
      >
        {/* AURA */}
        <div
          className="
            absolute -inset-2 sm:-inset-3
            rounded-[18px] sm:rounded-[22px] lg:rounded-[26px]
            opacity-0
            transition-opacity duration-400
            group-hover:opacity-100
            bg-gradient-to-br from-purple-500/35 via-pink-500/30 to-indigo-500/30
            blur-xl sm:blur-2xl
          "
        />

        {/* INNER LIGHT */}
        <div
          className="
            absolute inset-0
            rounded-[14px] sm:rounded-[16px] lg:rounded-[20px]
            opacity-0
            transition-opacity duration-400
            group-hover:opacity-100
            bg-gradient-to-br from-white/80 to-white/0
          "
        />

        {/* ICON */}
        <img
          src={stat.icon}
          alt=""
          draggable={false}
          className="
            relative z-10
            w-6 h-6
            sm:w-7 sm:h-7
            lg:w-9 lg:h-9
            object-contain
            pointer-events-none select-none
            transition-transform duration-400
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:scale-115
            group-hover:-translate-y-[2px]
            sm:group-hover:-translate-y-[3px]
            lg:group-hover:-translate-y-[4px]
          "
        />
      </div>

      {/* TEXT */}
      <div>
        <div
          className="
            font-black text-[#0b1b3f] leading-none
            text-[26px]
            sm:text-[32px]
            lg:text-[42px]
          "
        >
          <Counter value={stat.value} suffix={stat.suffix} />
        </div>

        <p
          className="
            text-slate-600 mt-1
            text-[13px]
            sm:text-[15px]
            lg:text-[18px]
          "
        >
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section
      className="
        py-[60px]
        sm:py-[80px]
        lg:py-[100px]
      "
      style={{
        background: "linear-gradient(180deg,#e7f0f6 0%,#efe3e8 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-y-10 sm:gap-y-12 lg:gap-y-14 mb-14 sm:mb-16 lg:mb-20">
          {topStats.map((s, i) => (
            <StatItem key={s.label} stat={s} delay={i * 0.15} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-y-10 sm:gap-y-12 lg:gap-y-14">
          {bottomStats.map((s, i) => (
            <StatItem key={s.label} stat={s} delay={i * 0.12} />
          ))}
        </div>

      </div>
    </section>
  );
}

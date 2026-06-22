"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const flavours = [
  {
    name: "Citrus Sunrise",
    tagline: "Lemon · Lime · Orange",
    color: "#b5e550",
    bg: "from-[#b5e550]/10 to-transparent",
    emoji: "🍋",
    description: "Bright, zesty and refreshing. The perfect morning wake-up.",
  },
  {
    name: "Tropical Mango",
    tagline: "Mango · Passionfruit",
    color: "#fb923c",
    bg: "from-[#fb923c]/10 to-transparent",
    emoji: "🥭",
    description: "Sun-drenched tropical sweetness with a passionfruit finish.",
  },
  {
    name: "Berry Fusion",
    tagline: "Mixed Berries",
    color: "#c084fc",
    bg: "from-[#c084fc]/10 to-transparent",
    emoji: "🫐",
    description: "Rich mixed berry depth — bold, vibrant, satisfying.",
  },
  {
    name: "Apple Kiwi",
    tagline: "Crisp Apple · Kiwi",
    color: "#4ade80",
    bg: "from-[#4ade80]/10 to-transparent",
    emoji: "🍏",
    description: "Clean, crisp and energising with a bright green finish.",
  },
];

export default function FlavoursPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[#b5e550] font-mono text-xs tracking-widest uppercase mb-4">
            Four options
          </p>
          <h2
            className="font-display text-5xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Refreshing{" "}
            <span className="text-[#b5e550]">Flavours</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flavours.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative group bg-gradient-to-b ${f.bg} border border-white/8 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 cursor-default overflow-hidden`}
            >
              {/* Glow */}
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"
                style={{ background: f.color }}
              />
              {/* Can mockup */}
              <div className="relative mb-6 flex justify-center">
                <div
                  className="w-20 h-28 rounded-2xl border border-white/10 flex flex-col items-center justify-end pb-2 overflow-hidden"
                  style={{
                    background: `linear-gradient(to bottom, #0d2952, #040d1a)`,
                    boxShadow: `0 8px 30px ${f.color}30`,
                  }}
                >
                  <div
                    className="absolute bottom-0 left-0 right-0 h-7 flex items-center justify-center"
                    style={{ background: f.color }}
                  >
                    <span className="text-[5px] font-mono tracking-widest text-[#040d1a] font-bold uppercase">
                      {f.name.split(" ")[0]}
                    </span>
                  </div>
                  <span className="text-2xl mb-5">{f.emoji}</span>
                </div>
              </div>

              <h3
                className="font-display text-2xl font-semibold mb-1"
                style={{ fontFamily: "Cormorant Garamond, serif", color: f.color }}
              >
                {f.name}
              </h3>
              <p className="text-xs font-mono text-[#8fa3bb] tracking-wide mb-3">
                {f.tagline}
              </p>
              <p className="text-[#8fa3bb] text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/flavours"
            className="inline-flex items-center gap-2 text-[#b5e550] text-sm font-medium hover:gap-3 transition-all"
          >
            Explore all flavours <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const flavours = [
  {
    name: "Citrus Sunrise",
    tagline: "Lemon · Lime · Orange",
    color: "#b5e550",
    bg: "#b5e550",
    emoji: "🍋",
    description:
      "Bright, zesty and endlessly refreshing. Citrus Sunrise blends the sharpness of lemon, the tang of lime, and the warmth of orange into a perfectly balanced morning ritual.",
    notes: ["Lemon zest on the nose", "Clean citrus mid-palate", "Warm orange finish"],
    mood: "Start your morning right",
  },
  {
    name: "Tropical Mango",
    tagline: "Mango · Passionfruit",
    color: "#fb923c",
    bg: "#fb923c",
    emoji: "🥭",
    description:
      "Sun-drenched and unapologetically tropical. The richness of ripe mango meets the exotic sharpness of passionfruit for a flavour that tastes like pure vitamin D.",
    notes: ["Ripe mango sweetness", "Passionfruit tartness", "Long tropical finish"],
    mood: "Holiday in a can",
  },
  {
    name: "Berry Fusion",
    tagline: "Mixed Berries",
    color: "#c084fc",
    bg: "#c084fc",
    emoji: "🫐",
    description:
      "A bold, deep blend of mixed berries — blueberry, blackberry, and raspberry working in harmony. Rich, slightly tart, and unmistakably satisfying.",
    notes: ["Deep blueberry base", "Blackberry complexity", "Bright raspberry top note"],
    mood: "Bold and vibrant",
  },
  {
    name: "Apple Kiwi",
    tagline: "Crisp Apple · Kiwi",
    color: "#4ade80",
    bg: "#4ade80",
    emoji: "🍏",
    description:
      "Crisp, clean and energising. The familiar comfort of green apple pairs with the tropical brightness of kiwi for something both refreshing and invigorating.",
    notes: ["Crisp green apple", "Bright kiwi mid-note", "Clean, dry finish"],
    mood: "Clean and energised",
  },
];

export default function FlavoursPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[300px] rounded-full bg-[#b5e550]/5 blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#b5e550] font-mono text-xs tracking-widest uppercase mb-4">
              Four Flavours
            </p>
            <h1
              className="font-display text-6xl md:text-7xl font-bold text-white mb-6"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Find Your{" "}
              <span className="text-[#b5e550]">Favourite.</span>
            </h1>
            <p className="text-[#8fa3bb] text-xl max-w-xl mx-auto leading-relaxed">
              All four flavours. Same formula. Same benefits. Just pick the one that
              speaks to your mood.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Flavours */}
      <section className="py-10 pb-24">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          {flavours.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white/3 border border-white/8 rounded-3xl overflow-hidden hover:border-white/15 transition-all duration-300"
            >
              {/* Colour accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: f.color }}
              />
              <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                {/* Can visual */}
                <div className="flex justify-center md:justify-start">
                  <motion.div
                    whileHover={{ y: -8, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative"
                  >
                    {/* Glow */}
                    <div
                      className="absolute inset-0 rounded-full blur-2xl opacity-20"
                      style={{ background: f.color }}
                    />
                    <div
                      className="relative w-36 h-48 rounded-3xl border border-white/10 flex flex-col items-center justify-end pb-4 overflow-hidden"
                      style={{
                        background: `linear-gradient(to bottom, #0d2952, #040d1a)`,
                        boxShadow: `0 20px 60px ${f.color}40`,
                      }}
                    >
                      {/* Bottom band */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-12 flex items-center justify-center"
                        style={{ background: f.bg }}
                      >
                        <span className="text-[7px] font-mono tracking-[0.2em] text-[#040d1a] font-black uppercase">
                          {f.name}
                        </span>
                      </div>
                      {/* EC1 brand */}
                      <div className="flex flex-col items-center mb-12">
                        <span
                          className="font-display text-5xl font-bold text-white leading-none"
                          style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                          EC<span style={{ color: f.color }}>1</span>
                        </span>
                        <span className="text-[7px] font-mono tracking-widest text-[#8fa3bb] uppercase mt-1">
                          ONE
                        </span>
                      </div>
                      <span className="text-4xl absolute top-6">{f.emoji}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Info */}
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <h2
                      className="font-display text-4xl font-bold"
                      style={{ fontFamily: "Cormorant Garamond, serif", color: f.color }}
                    >
                      {f.name}
                    </h2>
                    <span className="text-[#8fa3bb] font-mono text-sm">·</span>
                    <span className="text-[#8fa3bb] text-sm">{f.tagline}</span>
                  </div>
                  <p className="text-[#cdd8e8] leading-relaxed mb-6">{f.description}</p>

                  {/* Tasting notes */}
                  <div className="mb-6">
                    <p className="text-[10px] font-mono tracking-widest text-[#8fa3bb] uppercase mb-3">
                      Tasting Notes
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {f.notes.map((note) => (
                        <span
                          key={note}
                          className="text-xs px-3 py-1.5 rounded-full border"
                          style={{ color: f.color, borderColor: `${f.color}30`, background: `${f.color}10` }}
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-[#8fa3bb] text-sm italic">&ldquo;{f.mood}&rdquo;</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#071428]/60 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2
            className="font-display text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Want to try them all?
          </h2>
          <p className="text-[#8fa3bb] mb-8">
            Join the waitlist and be first to get access when EC1 ONE launches.
          </p>
          <Link
            href="/#waitlist"
            className="inline-flex items-center gap-2 bg-[#b5e550] text-[#040d1a] font-semibold px-8 py-4 rounded-full hover:bg-[#a3d63a] transition-all duration-200 hover:shadow-xl hover:shadow-[#b5e550]/20"
          >
            Join the Waitlist <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

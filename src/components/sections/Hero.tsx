"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const badges = [
  { label: "Zero Added Sugar" },
  { label: "Natural Caffeine" },
  { label: "Low Calorie" },
  { label: "Vegan Friendly" },
  { label: "Gluten Free" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#0a1e3d] via-[#071428] to-[#040d1a]" />
        {/* Lime orb */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#b5e550]/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#0a4d8c]/20 blur-3xl" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#8fa3bb 1px, transparent 1px), linear-gradient(90deg, #8fa3bb 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#b5e550]/10 border border-[#b5e550]/20 text-[#b5e550] text-xs font-mono tracking-widest uppercase px-4 py-2 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#b5e550] animate-pulse" />
            New — Launching Soon
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-6"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            ONE
            <br />
            <span className="text-[#b5e550] lime-text-glow">DRINK.</span>
            <br />
            BETTER
            <br />
            DAY.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-[#8fa3bb] text-lg leading-relaxed mb-8 max-w-md"
          >
            Hydration. Focus. Nutrition. Immunity.{" "}
            <span className="text-white">All in one clean, refreshing drink</span> designed to help
            you start better and perform better — every day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <Link
              href="#waitlist"
              className="inline-flex items-center gap-2 bg-[#b5e550] text-[#040d1a] font-semibold px-7 py-3.5 rounded-full hover:bg-[#a3d63a] transition-all duration-200 hover:shadow-xl hover:shadow-[#b5e550]/25 text-sm"
            >
              Join the Waitlist <ArrowRight size={16} />
            </Link>
            <Link
              href="/ingredients"
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-7 py-3.5 rounded-full hover:bg-white/10 transition-all text-sm"
            >
              What&apos;s Inside
            </Link>
          </motion.div>

          {/* Badge row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            {badges.map((b) => (
              <span
                key={b.label}
                className="text-[10px] font-mono tracking-widest uppercase text-[#8fa3bb] bg-white/5 border border-white/8 px-3 py-1.5 rounded-full"
              >
                {b.label}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right — Can visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center relative"
        >
          <div className="relative w-72 h-[420px]">
            {/* Glow behind can */}
            <div className="absolute inset-0 bg-[#b5e550]/10 rounded-full blur-3xl scale-75" />
            {/* Can mockup */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              <div className="w-56 h-[380px] mx-auto relative">
                {/* Can body */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-[#0d2952] via-[#071428] to-[#040d1a] border border-white/10 shadow-2xl overflow-hidden">
                  {/* Top sheen */}
                  <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />
                  {/* Lime band */}
                  <div className="absolute bottom-16 left-0 right-0 h-14 bg-[#b5e550] flex items-center justify-center">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-[#040d1a] font-bold uppercase">
                      Citrus Sunrise
                    </span>
                  </div>
                  {/* Content on can */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pb-20">
                    <span
                      className="font-display text-7xl font-bold text-white leading-none"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      EC<span className="text-[#b5e550]">1</span>
                    </span>
                    <span className="text-[8px] font-mono tracking-[0.4em] text-[#8fa3bb] uppercase">
                      One
                    </span>
                    <span className="text-[7px] font-mono tracking-[0.2em] text-[#8fa3bb] uppercase text-center">
                      Daily Wellness
                      <br />& Performance
                    </span>
                    {/* Icons */}
                    <div className="flex flex-col gap-1.5 mt-3 text-left w-32">
                      {[
                        { label: "Focus", sub: "Natural Caffeine + L-Theanine" },
                        { label: "Hydration", sub: "Electrolytes" },
                        { label: "Wellness", sub: "Vitamins & Minerals" },
                      ].map((item) => (
                        <div key={item.label} className="flex items-start gap-1.5">
                          <div className="w-1 h-1 rounded-full bg-[#b5e550] mt-1 flex-shrink-0" />
                          <div>
                            <div className="text-[7px] font-mono text-[#b5e550] tracking-wider uppercase">
                              {item.label}
                            </div>
                            <div className="text-[6px] text-[#8fa3bb]">{item.sub}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Bottom */}
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <span className="text-[7px] font-mono text-[#8fa3bb] tracking-widest">
                      500ml e
                    </span>
                  </div>
                  {/* Side sheen */}
                  <div className="absolute top-0 right-4 bottom-0 w-6 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                </div>
                {/* Can top */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-40 h-6 rounded-full bg-[#1a3060] border border-white/10" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-[#b5e550]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

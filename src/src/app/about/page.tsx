"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const values = [
  {
    icon: "🔬",
    title: "Science First",
    description:
      "Every ingredient is chosen based on clinical evidence and formulated at doses that actually work. We don't do proprietary blends or underdosed formulas.",
  },
  {
    icon: "🌱",
    title: "Clean Label",
    description:
      "No artificial colours, no synthetic preservatives, no unnecessary additives. If it doesn't belong in your body, it doesn't belong in EC1.",
  },
  {
    icon: "⚖️",
    title: "Honest Nutrition",
    description:
      "Zero added sugar. Minimal calories. Full transparency on every ingredient and dose. You deserve to know exactly what you're putting into your body.",
  },
  {
    icon: "♻️",
    title: "Responsible Packaging",
    description:
      "100% recyclable aluminium cans and eco-conscious packaging. We care about performance — yours and the planet's.",
  },
];

const milestones = [
  { year: "2023", label: "Concept born", detail: "The idea: one daily drink that genuinely does everything." },
  { year: "2024", label: "Formulation", detail: "12 months of R&D, lab testing, and iteration with nutrition scientists." },
  { year: "2025", label: "Waitlist opens", detail: "EC1 ONE is nearly ready. Be part of the first chapter." },
  { year: "2026", label: "Launch", detail: "EC1 ONE hits shelves — and your mornings." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#b5e550]/5 blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#b5e550] font-mono text-xs tracking-widest uppercase mb-4">
              Our Story
            </p>
            <h1
              className="font-display text-6xl md:text-7xl font-bold text-white mb-8 leading-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Built for People Who
              <br />
              <span className="text-[#b5e550]">Refuse to Compromise.</span>
            </h1>
            <p className="text-[#8fa3bb] text-xl leading-relaxed max-w-2xl">
              EC1 started with a simple question: why do we have to choose between what tastes
              good, what&apos;s good for us, and what actually works? The answer is — we don&apos;t.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#071428]/60">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#b5e550] font-mono text-xs tracking-widest uppercase mb-4">Mission</p>
              <h2
                className="font-display text-4xl md:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                One Drink.
                <br />Better Day.
              </h2>
              <p className="text-[#8fa3bb] text-lg leading-relaxed">
                Our mission is simple: make daily wellness effortless. EC1 ONE is engineered
                to replace the cluttered shelf of supplements, energy drinks, and vitamins with
                one exceptional product — clean, effective, and designed for real life.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-[#b5e550] font-mono text-xs tracking-widest uppercase mb-4">Vision</p>
              <h2
                className="font-display text-4xl md:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                The Future of
                <br />Performance Nutrition
              </h2>
              <p className="text-[#8fa3bb] text-lg leading-relaxed">
                We envision a world where peak daily performance is accessible to everyone —
                not just elite athletes or biohackers. Where great nutrition doesn&apos;t require
                a degree in biochemistry to understand.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#b5e550] font-mono text-xs tracking-widest uppercase mb-4">What We Stand For</p>
            <h2
              className="font-display text-5xl font-bold text-white"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Our Values
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/3 border border-white/8 rounded-2xl p-8 hover:bg-white/5 transition-colors"
              >
                <span className="text-3xl mb-4 block">{v.icon}</span>
                <h3
                  className="font-display text-2xl font-semibold text-[#b5e550] mb-3"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-[#8fa3bb] leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#071428]/60">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#b5e550] font-mono text-xs tracking-widest uppercase mb-4">Timeline</p>
            <h2
              className="font-display text-5xl font-bold text-white"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              The Journey
            </h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex gap-8 pl-20"
                >
                  <div className="absolute left-4 top-1 w-8 h-8 rounded-full bg-[#071428] border-2 border-[#b5e550] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#b5e550]" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#b5e550] tracking-widest">{m.year}</span>
                    <h3 className="text-white font-semibold text-lg mt-1 mb-1">{m.label}</h3>
                    <p className="text-[#8fa3bb] text-sm">{m.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2
            className="font-display text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Ready to experience it?
          </h2>
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

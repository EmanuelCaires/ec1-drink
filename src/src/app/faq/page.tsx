"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    category: "Product",
    questions: [
      {
        q: "What is EC1 ONE?",
        a: "EC1 ONE is a premium daily wellness and performance drink. It's a 500ml can containing 15 active ingredients targeting five pillars of daily health: Focus, Hydration, Wellness, Energy, and Recovery — all with zero added sugar and natural caffeine.",
      },
      {
        q: "How is EC1 different from energy drinks?",
        a: "Traditional energy drinks typically contain high amounts of sugar, synthetic caffeine, and a handful of ingredients at doses too low to be effective. EC1 ONE uses natural caffeine from green tea at a moderate 80mg dose, paired with L-Theanine for a smooth, jitter-free effect — plus 11 additional functional ingredients that generic energy drinks simply don't include.",
      },
      {
        q: "Can I drink EC1 every day?",
        a: "Yes — EC1 ONE is specifically designed as a daily drink. The ingredient doses are calibrated for safe, daily consumption. It's not a high-stimulant product; it's a daily wellness companion.",
      },
      {
        q: "When is the best time to drink it?",
        a: "Most people find morning or early afternoon works best — the caffeine content means drinking it late in the evening may affect sleep. That said, it can be enjoyed any time you need a performance or focus boost.",
      },
      {
        q: "Is EC1 ONE vegan and gluten free?",
        a: "Yes. EC1 ONE is 100% vegan friendly, gluten free, and contains no artificial colours, flavours, or preservatives.",
      },
    ],
  },
  {
    category: "Ingredients & Nutrition",
    questions: [
      {
        q: "How much caffeine is in EC1 ONE?",
        a: "EC1 ONE contains 80mg of natural caffeine per 500ml can, sourced from green tea. For reference, a standard cup of coffee contains 80–100mg. This dose is intentionally moderate — combined with 200mg of L-Theanine, the effect is smooth and sustained rather than sharp and jittery.",
      },
      {
        q: "Why is there L-Theanine with the caffeine?",
        a: "L-Theanine is an amino acid found in tea that promotes calm, relaxed alertness. When combined with caffeine at a 2:1 ratio (L-Theanine:Caffeine), clinical research shows it enhances focus and attention while reducing the anxiety and jitteriness that caffeine alone can cause.",
      },
      {
        q: "What is Ashwagandha KSM-66® and why is it in EC1?",
        a: "KSM-66® is the world's most clinically studied ashwagandha extract, standardised to a minimum of 5% withanolides. Research supports its role in reducing cortisol (the stress hormone), improving stress resilience, enhancing physical performance, and supporting better sleep quality. We use it at 300mg — an effective dose.",
      },
      {
        q: "Is there any sugar in EC1 ONE?",
        a: "Zero added sugars. EC1 ONE contains 0g of added or total sugars. The 6g of total carbohydrates per can comes from the natural trace content of the functional ingredients.",
      },
      {
        q: "How many calories are in EC1 ONE?",
        a: "Just 30 calories per 500ml can.",
      },
    ],
  },
  {
    category: "Availability",
    questions: [
      {
        q: "Where can I buy EC1 ONE?",
        a: "EC1 ONE is not yet on sale. We're building our launch waitlist now. Join to get early access, exclusive launch pricing, and be first to know when we go live.",
      },
      {
        q: "Will EC1 ONE be available in the UK?",
        a: "Yes — the UK is our launch market. We'll be shipping directly to customers across the UK from day one. International availability will follow.",
      },
      {
        q: "Will you offer subscriptions?",
        a: "Yes. We'll offer flexible subscription options at launch, with savings for recurring orders. Waitlist members will get exclusive access to the best subscription rates.",
      },
      {
        q: "What flavours will be available at launch?",
        a: "All four flavours — Citrus Sunrise, Tropical Mango, Berry Fusion, and Apple Kiwi — will be available from launch. We plan to introduce new flavours over time.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/8 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
      >
        <span className="text-white group-hover:text-[#b5e550] transition-colors font-medium leading-snug">
          {q}
        </span>
        <span className="flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center mt-0.5 group-hover:border-[#b5e550]/40 transition-colors">
          {open ? (
            <Minus size={12} className="text-[#b5e550]" />
          ) : (
            <Plus size={12} className="text-[#8fa3bb]" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-[#8fa3bb] leading-relaxed pb-5 text-sm">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#b5e550]/5 blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#b5e550] font-mono text-xs tracking-widest uppercase mb-4">
              Got questions?
            </p>
            <h1
              className="font-display text-6xl md:text-7xl font-bold text-white mb-6"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Frequently
              <br />
              <span className="text-[#b5e550]">Asked.</span>
            </h1>
            <p className="text-[#8fa3bb] text-xl leading-relaxed">
              Everything you need to know about EC1 ONE. Can&apos;t find your answer?{" "}
              <a href="/contact" className="text-[#b5e550] hover:underline">
                Get in touch.
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="py-10 pb-28">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          {faqs.map((section, si) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: si * 0.1 }}
            >
              <h2 className="font-mono text-xs tracking-widest text-[#b5e550] uppercase mb-6">
                {section.category}
              </h2>
              <div className="bg-white/3 border border-white/8 rounded-2xl px-6">
                {section.questions.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

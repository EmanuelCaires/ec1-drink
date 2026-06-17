"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const categories = ["All", "Focus", "Hydration", "Wellness", "Energy", "Recovery"];

const ingredients = [
  {
    name: "Natural Caffeine (Green Tea)",
    amount: "80mg",
    category: "Focus",
    color: "#b5e550",
    description:
      "Sourced from green tea leaves, this form of caffeine is absorbed more steadily than synthetic caffeine, providing clean, sustained energy without the harsh crash. 80mg delivers a noticeable but comfortable lift.",
    benefit: "Alertness · Reaction time · Endurance",
  },
  {
    name: "L-Theanine",
    amount: "200mg",
    category: "Focus",
    color: "#b5e550",
    description:
      "An amino acid found naturally in tea leaves. When paired with caffeine at a 2:1 ratio (as in EC1), L-Theanine smooths the stimulant effect and promotes a calm, focused state — sometimes called 'alert calm'.",
    benefit: "Focus · Calm · Anxiety reduction",
  },
  {
    name: "Choline",
    amount: "250mg",
    category: "Focus",
    color: "#b5e550",
    description:
      "An essential nutrient that supports the production of acetylcholine, the brain's primary neurotransmitter for memory and muscle control. Often under-consumed in modern diets.",
    benefit: "Memory · Cognitive function · Brain health",
  },
  {
    name: "Lion's Mane Extract",
    amount: "500mg",
    category: "Focus",
    color: "#b5e550",
    description:
      "A functional mushroom with a growing body of research behind its neuroprotective and cognitive-enhancing properties. Supports nerve growth factor (NGF) and long-term brain health.",
    benefit: "Neuroplasticity · Memory · Nerve health",
  },
  {
    name: "Potassium",
    amount: "700mg",
    category: "Hydration",
    color: "#38bdf8",
    description:
      "A critical electrolyte for fluid balance, muscle contractions, and nerve function. Most people are chronically low in potassium. 700mg makes a meaningful contribution to the 3,500mg daily target.",
    benefit: "Fluid balance · Muscle function · Blood pressure",
  },
  {
    name: "Magnesium",
    amount: "150mg",
    category: "Hydration",
    color: "#38bdf8",
    description:
      "Involved in over 300 enzymatic reactions in the body. Vital for energy production, protein synthesis, muscle and nerve function, blood glucose control, and blood pressure regulation.",
    benefit: "Energy · Muscle recovery · Sleep quality",
  },
  {
    name: "Sodium",
    amount: "250mg",
    category: "Hydration",
    color: "#38bdf8",
    description:
      "The primary electrolyte lost through sweat. Sodium is essential for maintaining fluid balance and is particularly important for hydration during and after physical activity.",
    benefit: "Hydration · Fluid retention · Performance",
  },
  {
    name: "Calcium",
    amount: "250mg",
    category: "Hydration",
    color: "#38bdf8",
    description:
      "Beyond its role in bone health, calcium is essential for muscle contractions, nerve transmission, and vascular function. A key electrolyte for daily performance.",
    benefit: "Bone health · Muscle contraction · Nerve function",
  },
  {
    name: "Vitamin C",
    amount: "100mg",
    category: "Wellness",
    color: "#a78bfa",
    description:
      "A potent antioxidant that supports immune function, collagen synthesis, and iron absorption. 100mg represents 125% of the UK Reference Nutrient Intake (RNI).",
    benefit: "Immune support · Antioxidant · Collagen",
  },
  {
    name: "Vitamin D3",
    amount: "10µg",
    category: "Wellness",
    color: "#a78bfa",
    description:
      "The form of vitamin D most efficiently used by the body. Critical for immune function, bone health, mood regulation, and muscle function. Particularly important in the UK where sunlight is limited.",
    benefit: "Immunity · Bone health · Mood",
  },
  {
    name: "Zinc",
    amount: "10mg",
    category: "Wellness",
    color: "#a78bfa",
    description:
      "An essential trace mineral involved in immune function, protein synthesis, wound healing, DNA synthesis, and cell division. Often depleted by exercise.",
    benefit: "Immune function · Wound healing · Hormone support",
  },
  {
    name: "Selenium",
    amount: "55µg",
    category: "Wellness",
    color: "#a78bfa",
    description:
      "A trace mineral with powerful antioxidant properties. Selenium is essential for thyroid function, DNA synthesis, and protecting cells from oxidative damage.",
    benefit: "Antioxidant · Thyroid health · Immune support",
  },
  {
    name: "B-Complex (B1, B2, B3, B5, B6, B7, B9, B12)",
    amount: "100% DV",
    category: "Energy",
    color: "#fbbf24",
    description:
      "All eight essential B vitamins at 100% of the daily value. B vitamins are the backbone of energy metabolism — they're essential for converting carbohydrates, fats, and protein into usable energy.",
    benefit: "Energy metabolism · Red blood cells · Nervous system",
  },
  {
    name: "Ashwagandha KSM-66®",
    amount: "300mg",
    category: "Recovery",
    color: "#34d399",
    description:
      "KSM-66® is the most clinically studied ashwagandha extract, standardised to ≥5% withanolides. Research supports its role in reducing cortisol, managing stress, and improving physical recovery and sleep quality.",
    benefit: "Stress reduction · Cortisol · Physical recovery",
  },
  {
    name: "Ginger Extract",
    amount: "100mg",
    category: "Recovery",
    color: "#34d399",
    description:
      "A concentrated extract of ginger root with potent anti-inflammatory and antioxidant properties. Supports digestive comfort and helps reduce exercise-induced muscle soreness.",
    benefit: "Anti-inflammatory · Digestive health · Recovery",
  },
];

export default function IngredientsPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? ingredients : ingredients.filter((i) => i.category === active);

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#b5e550]/5 blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#b5e550] font-mono text-xs tracking-widest uppercase mb-4">
              Full Transparency
            </p>
            <h1
              className="font-display text-6xl md:text-7xl font-bold text-white mb-6"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Every Ingredient.
              <br />
              <span className="text-[#b5e550]">Every Dose.</span>
            </h1>
            <p className="text-[#8fa3bb] text-xl max-w-2xl leading-relaxed">
              EC1 ONE contains 15 active ingredients, each carefully selected and dosed
              for real-world impact. No fillers. No proprietary blends. Just science.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="sticky top-16 z-30 bg-[#040d1a]/95 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-5xl mx-auto px-6 flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wide transition-all ${
                active === cat
                  ? "bg-[#b5e550] text-[#040d1a] font-bold"
                  : "bg-white/5 text-[#8fa3bb] hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Ingredients grid */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((ing, i) => (
              <motion.div
                key={ing.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/3 border border-white/8 rounded-2xl p-7 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span
                      className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{
                        color: ing.color,
                        background: `${ing.color}15`,
                      }}
                    >
                      {ing.category}
                    </span>
                  </div>
                  <span
                    className="font-mono text-lg font-bold"
                    style={{ color: ing.color }}
                  >
                    {ing.amount}
                  </span>
                </div>
                <h3
                  className="font-display text-2xl font-semibold text-white mb-3"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {ing.name}
                </h3>
                <p className="text-[#8fa3bb] text-sm leading-relaxed mb-4">
                  {ing.description}
                </p>
                <div className="border-t border-white/5 pt-4">
                  <span className="text-[10px] font-mono text-[#8fa3bb] tracking-widest uppercase">
                    Benefits:{" "}
                  </span>
                  <span className="text-[10px] font-mono" style={{ color: ing.color }}>
                    {ing.benefit}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition facts box */}
      <section className="py-16 bg-[#071428]/60">
        <div className="max-w-md mx-auto px-6">
          <div className="border-4 border-white/20 rounded-2xl overflow-hidden">
            <div className="bg-white/5 px-6 py-4 border-b-4 border-white/20">
              <h3 className="text-white text-2xl font-black tracking-tight">Nutrition Facts</h3>
              <p className="text-[#8fa3bb] text-xs mt-1">Per 500ml Can</p>
            </div>
            <div className="px-6 divide-y divide-white/10">
              {[
                { label: "Calories", value: "30" },
                { label: "Total Fat", value: "0g" },
                { label: "Sodium", value: "250mg" },
                { label: "Total Carbohydrate", value: "6g" },
                { label: "Total Sugars", value: "0g" },
                { label: "  Includes Added Sugars", value: "0g" },
                { label: "Protein", value: "0g" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between py-3">
                  <span className="text-[#cdd8e8] text-sm">{row.label}</span>
                  <span className="font-mono text-sm font-semibold text-white">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

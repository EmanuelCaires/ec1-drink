"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, Loader2, Mail, Instagram } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate send — wire up to your preferred email service
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#b5e550]/5 blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#b5e550] font-mono text-xs tracking-widest uppercase mb-4">
              Get in touch
            </p>
            <h1
              className="font-display text-6xl md:text-7xl font-bold text-white mb-6"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Say{" "}
              <span className="text-[#b5e550]">Hello.</span>
            </h1>
            <p className="text-[#8fa3bb] text-xl max-w-xl leading-relaxed">
              Whether you have a question about EC1, want to explore a partnership,
              or just want to say hi — we&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 pb-28">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-mono text-xs tracking-widest text-[#b5e550] uppercase mb-4">
                Direct
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:hello@ec1drink.com"
                  className="flex items-center gap-3 text-[#8fa3bb] hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center group-hover:border-[#b5e550]/30 transition-colors">
                    <Mail size={16} className="text-[#b5e550]" />
                  </div>
                  <span className="text-sm">hello@ec1drink.com</span>
                </a>
                <a
                  href="https://instagram.com/ec1.drink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#8fa3bb] hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center group-hover:border-[#b5e550]/30 transition-colors">
                    <Instagram size={16} className="text-[#b5e550]" />
                  </div>
                  <span className="text-sm">@ec1.drink</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-mono text-xs tracking-widest text-[#b5e550] uppercase mb-4">
                Topics
              </h3>
              <div className="space-y-2">
                {[
                  "General enquiries",
                  "Wholesale & retail",
                  "Press & media",
                  "Partnerships & collab",
                  "Waitlist & orders",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-[#8fa3bb] text-sm">
                    <div className="w-1 h-1 rounded-full bg-[#b5e550]" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-20 text-center">
                <div className="w-16 h-16 rounded-full bg-[#b5e550]/10 border border-[#b5e550]/30 flex items-center justify-center">
                  <CheckCircle className="text-[#b5e550]" size={28} />
                </div>
                <h3
                  className="font-display text-3xl font-semibold text-white"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Message sent!
                </h3>
                <p className="text-[#8fa3bb]">We&apos;ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[10px] font-mono tracking-widest text-[#8fa3bb] uppercase block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-[#8fa3bb]/50 text-sm focus:outline-none focus:border-[#b5e550]/40 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono tracking-widest text-[#8fa3bb] uppercase block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-[#8fa3bb]/50 text-sm focus:outline-none focus:border-[#b5e550]/40 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-mono tracking-widest text-[#8fa3bb] uppercase block mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-[#8fa3bb]/50 text-sm focus:outline-none focus:border-[#b5e550]/40 transition-all"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono tracking-widest text-[#8fa3bb] uppercase block mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-[#8fa3bb]/50 text-sm focus:outline-none focus:border-[#b5e550]/40 transition-all resize-none"
                    placeholder="Tell us more..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 bg-[#b5e550] text-[#040d1a] font-semibold px-8 py-4 rounded-xl hover:bg-[#a3d63a] transition-all hover:shadow-lg hover:shadow-[#b5e550]/20 disabled:opacity-60 text-sm"
                >
                  {status === "loading" ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <>
                      Send Message <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

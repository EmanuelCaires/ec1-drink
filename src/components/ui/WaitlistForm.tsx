"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const { error } = await supabase
        .from("waitlist")
        .insert([{ name: name.trim(), email: email.trim().toLowerCase() }]);

      if (error) {
        if (error.code === "23505") {
          setErrorMsg("This email is already on the waitlist!");
        } else {
          setErrorMsg("Something went wrong. Please try again.");
        }
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 py-8 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-[#b5e550]/10 border border-[#b5e550]/30 flex items-center justify-center">
          <CheckCircle className="text-[#b5e550]" size={28} />
        </div>
        <div>
          <h3 className="text-white text-xl font-display font-semibold mb-2" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            You&apos;re on the list!
          </h3>
          <p className="text-[#8fa3bb] text-sm">
            We&apos;ll be in touch with early access and exclusive launch updates.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md mx-auto">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-[#8fa3bb] text-sm focus:outline-none focus:border-[#b5e550]/50 focus:bg-white/8 transition-all"
        />
        <div className="flex gap-3">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-[#8fa3bb] text-sm focus:outline-none focus:border-[#b5e550]/50 transition-all"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-[#b5e550] text-[#040d1a] font-semibold px-6 py-3.5 rounded-xl hover:bg-[#a3d63a] transition-all duration-200 hover:shadow-lg hover:shadow-[#b5e550]/20 disabled:opacity-60 flex items-center gap-2 whitespace-nowrap text-sm"
          >
            {status === "loading" ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <>
                Join <ArrowRight size={16} />
              </>
            )}
          </button>
        </div>
      </div>
      {status === "error" && (
        <p className="text-red-400 text-xs text-center">{errorMsg}</p>
      )}
      <p className="text-[#8fa3bb] text-xs text-center">
        No spam. Early access + exclusive launch offers only.
      </p>
    </form>
  );
}

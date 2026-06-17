"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/ingredients", label: "Ingredients" },
  { href: "/flavours", label: "Flavours" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#040d1a]/95 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 group">
          <span
            className="font-display text-3xl font-bold tracking-tight text-white leading-none"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            EC
            <span className="text-[#b5e550]">1</span>
          </span>
          <span className="text-[10px] font-mono text-[#8fa3bb] tracking-widest uppercase mt-0.5 ml-0.5">
            ™
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="nav-link relative text-sm font-body text-[#8fa3bb] hover:text-white transition-colors duration-200 tracking-wide"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/#waitlist"
            className="bg-[#b5e550] text-[#040d1a] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#a3d63a] transition-all duration-200 hover:shadow-lg hover:shadow-[#b5e550]/20 tracking-wide"
          >
            Join Waitlist
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#071428] border-t border-white/5"
          >
            <ul className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#8fa3bb] hover:text-white text-base transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#waitlist"
                  className="inline-block bg-[#b5e550] text-[#040d1a] font-semibold px-6 py-3 rounded-full text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  Join Waitlist
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

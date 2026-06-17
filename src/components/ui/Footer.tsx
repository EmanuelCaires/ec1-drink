import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#040d1a] border-t border-white/5 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-display text-3xl font-bold text-white mb-3" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              EC<span className="text-[#b5e550]">1</span>
              <span className="text-sm text-[#8fa3bb] font-mono ml-1">™</span>
            </div>
            <p className="text-[#8fa3bb] text-sm leading-relaxed">
              One drink. Better day. Daily wellness and performance in perfect balance.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://instagram.com/ec1.drink"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#8fa3bb] hover:text-[#b5e550] hover:border-[#b5e550]/30 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://tiktok.com/@ec1.drink"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#8fa3bb] hover:text-[#b5e550] hover:border-[#b5e550]/30 transition-all text-xs font-bold"
                aria-label="TikTok"
              >
                TK
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white text-xs font-mono tracking-widest uppercase mb-5 text-[#b5e550]">Product</h4>
            <ul className="space-y-3">
              {[
                { href: "/ingredients", label: "Ingredients" },
                { href: "/flavours", label: "Flavours" },
                { href: "/#waitlist", label: "Join Waitlist" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#8fa3bb] hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-xs font-mono tracking-widest uppercase mb-5 text-[#b5e550]">Company</h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#8fa3bb] hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-xs font-mono tracking-widest uppercase mb-5 text-[#b5e550]">Legal</h4>
            <ul className="space-y-3">
              {[
                { href: "/legal#privacy", label: "Privacy Policy" },
                { href: "/legal#terms", label: "Terms & Conditions" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#8fa3bb] hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#8fa3bb] text-xs">
            © {new Date().getFullYear()} EC1 Drink Ltd. All rights reserved.
          </p>
          <p className="text-[#8fa3bb] text-xs font-mono">
            @ec1.drink
          </p>
        </div>
      </div>
    </footer>
  );
}

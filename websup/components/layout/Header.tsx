"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Diensten", href: "/diensten" },
  { label: "Cases", href: "/cases" },
  { label: "Kennisbank", href: "/kennisbank" },
  { label: "Over ons", href: "/over-ons" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#EBEBEB] shadow-sm"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="font-heading text-xl font-bold text-[#111827] tracking-tight">
              Webs<span className="text-[#FF8C00]">Up</span>
              <span className="text-[#FF8C00]">.</span>nl
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#4B5563] hover:text-[#111827] transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-sm font-medium text-[#4B5563] hover:text-[#111827] transition-colors px-4 py-2"
            >
              Contact
            </Link>
            <Link
              href="/gratis-website-concept"
              className="px-5 py-2.5 bg-[#FF8C00] hover:bg-[#E67D00] text-white font-semibold rounded-lg text-sm transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Gratis concept
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[#F8F8F6] transition-colors"
            aria-label="Menu"
          >
            <div className="w-5 space-y-1.5">
              <span className={`block h-0.5 bg-[#111827] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-[#111827] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-[#111827] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-white border-t border-[#EBEBEB] overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-[#4B5563] hover:text-[#111827] font-medium border-b border-[#F3F3F3] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 space-y-3">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center py-3 border border-[#EBEBEB] text-[#111827] font-medium rounded-lg hover:bg-[#F8F8F6] transition-colors text-sm"
            >
              Contact
            </Link>
            <Link
              href="/gratis-website-concept"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center py-3 bg-[#FF8C00] hover:bg-[#E67D00] text-white font-semibold rounded-lg transition-colors text-sm"
            >
              Gratis concept aanvragen
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

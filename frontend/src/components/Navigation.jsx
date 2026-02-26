import React, { useState, useEffect } from "react";

const navLinks = [
  { label: "Our Company", href: "#company" },
  { label: "Our Services", href: "#services" },
  { label: "Our Projects", href: "#projects" },
  { label: "News & Insights", href: "#news" },
  { label: "Careers", href: "#careers" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Left green accent bar that mirrors the hero */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#00c700]" />

      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-5">
        {/* ── LOGO ── */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img src="https://magedubai.com/wp-content/uploads/2024/09/Mage-Dubai-Logo.png" alt="Prime Mage Logo" className="h-8 w-auto" />
        </a>

        {/* ── DESKTOP NAV LINKS ── */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/80 hover:text-[#00c700] text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── RIGHT CTA GROUP ── */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search */}
          <button className="text-white/70 hover:text-white transition-colors p-1" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
          </button>

          <a
            href="#contact"
            className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
          >
            Contact Us
          </a>

          <a
            href="#subcontractor"
            className="px-4 py-2 border border-[#00c700] text-[#00c700] text-sm font-semibold tracking-wide hover:bg-[#00c700] hover:text-black transition-all duration-300"
          >
            Get a Quote
          </a>
        </div>

        {/* ── MOBILE HAMBURGER ── */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-black/90 backdrop-blur-sm ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-8 gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-[#00c700] text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#subcontractor"
            className="mt-2 px-4 py-2 border border-[#00c700] text-[#00c700] text-sm font-semibold tracking-wide text-center hover:bg-[#00c700] hover:text-black transition-all duration-300"
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;

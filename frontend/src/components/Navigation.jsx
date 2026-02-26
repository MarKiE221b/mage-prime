import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import imgWorkers from "../assets/workers.jpg";

// Use Lenis smooth scroll if available, fall back to native
const scrollTo = (href) => {
  if (window.__lenis) {
    window.__lenis.scrollTo(href, { offset: -80, duration: 1.6 });
  } else {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }
};

const companyLinks = [
  {
    group: "Who We Are",
    items: [
      { label: "About Us", href: "/about-us" },
      { label: "Our Teams", href: "/teams" },
    ],
  },
];

const navLinks = [
  { label: "Our Company", href: "#company", submenu: true },
  { label: "Our Services", href: "#services" },
  { label: "Our Projects", href: "#projects" },
  { label: "News & Insights", href: "#news" },
  { label: "Careers", href: "#careers" },
];

/* ── Mega‑menu dropdown ── */
const CompanyMegaMenu = ({ onClose }) => (
  <div className="absolute top-full left-0 right-0 flex shadow-2xl z-40 overflow-hidden">
    {/* ── LEFT ACCENT PANEL ── */}
    <div className="w-72 shrink-0 bg-[#00c700] p-10 flex flex-col justify-between">
      <div>
        <p className="text-black text-[10px] font-black tracking-[0.35em] uppercase mb-4">
          Our Company
        </p>
        <h3 className="text-black text-2xl font-light leading-snug mb-6">
          Designing with Purpose,
          <br />
          <span className="font-semibold">Building with Precision.</span>
        </h3>
        <Link
          to="/about-us"
          onClick={onClose}
          className="group inline-flex items-center gap-3 text-black text-xs font-bold tracking-[0.3em] uppercase border-b-2 border-black/30 pb-1 hover:border-black transition-colors duration-200"
        >
          Get to Know Us
          <span className="inline-block transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
            →
          </span>
        </Link>
      </div>
      <p className="text-black/60 text-xs leading-relaxed mt-10">
        Mage Prime &mdash; Est. 2024
      </p>
    </div>

    {/* ── LINK COLUMNS ── */}
    <div className="flex-1 bg-white p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {companyLinks.map((group) => (
        <div key={group.group}>
          <p className="text-gray-400 text-[10px] font-bold tracking-[0.35em] uppercase mb-5">
            {group.group}
          </p>
          <ul className="flex flex-col gap-3">
            {group.items.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  onClick={onClose}
                  className="text-gray-700 hover:text-[#00c700] text-sm transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* ── RIGHT IMAGE PANEL ── */}
    <div className="hidden xl:block w-72 shrink-0 relative">
      <img
        src={imgWorkers}
        alt="Mage Dubai team"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <p className="absolute bottom-6 left-6 text-white text-sm font-semibold tracking-wide">
        Meet Our Team
      </p>
    </div>
  </div>
);

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const submenuTimeout = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close submenu on route/scroll click
  const closeSubmenu = () => setSubmenuOpen(false);

  const handleMouseEnter = () => {
    clearTimeout(submenuTimeout.current);
    setSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    submenuTimeout.current = setTimeout(() => setSubmenuOpen(false), 120);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Left green accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#00c700]" />

      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-5">
        {/* ── LOGO ── */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="https://magedubai.com/wp-content/uploads/2024/09/Mage-Prime-Logo-4.png"
            alt="Mage Dubai Logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* ── DESKTOP NAV LINKS ── */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.submenu ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-200 ${
                    submenuOpen
                      ? "text-[#00c700]"
                      : "text-white/80 hover:text-[#00c700]"
                  }`}
                  onClick={() => setSubmenuOpen((v) => !v)}
                  aria-expanded={submenuOpen}
                >
                  {link.label}
                  <svg
                    className={`w-3.5 h-3.5 mt-0.5 transition-transform duration-200 ${
                      submenuOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M2 4l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Bottom indicator bar */}
                {submenuOpen && (
                  <span className="absolute -bottom-5.5 left-0 right-0 h-0.5 bg-[#00c700]" />
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  closeSubmenu();
                  scrollTo(link.href);
                }}
                className="text-white/80 hover:text-[#00c700] text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        {/* ── RIGHT CTA GROUP ── */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
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
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* ── MEGA MENU ── */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`hidden lg:block transition-all duration-300 overflow-hidden ${
          submenuOpen
            ? "max-h-150 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <CompanyMegaMenu onClose={closeSubmenu} />
      </div>

      {/* ── MOBILE MENU ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-black/90 backdrop-blur-sm ${
          menuOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-8 gap-5">
          {/* Our Company accordion */}
          <div>
            <button
              className="w-full flex items-center justify-between text-white/80 text-sm font-medium tracking-wide py-1"
              onClick={() => setSubmenuOpen((v) => !v)}
            >
              Our Company
              <svg
                className={`w-3.5 h-3.5 transition-transform ${submenuOpen ? "rotate-180" : ""}`}
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${submenuOpen ? "max-h-40 mt-3" : "max-h-0"}`}
            >
              <div className="flex flex-col gap-3 pl-4 border-l border-[#00c700]">
                {companyLinks[0].items.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => {
                      setMenuOpen(false);
                      setSubmenuOpen(false);
                    }}
                    className="text-white/60 hover:text-[#00c700] text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks
            .filter((l) => !l.submenu)
            .map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                  setMenuOpen(false);
                }}
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

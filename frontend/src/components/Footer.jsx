import React from "react";
import { Link } from "react-router";

const navLinks = [
  { label: "Our Company", href: "/about-us" },
  { label: "Our Services", href: "#services" },
  { label: "Our Projects", href: "#projects" },
  { label: "News & Insights", href: "#news" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Our Teams", href: "/teams" },
];

/* ── SVG social icons ── */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="3" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);

const socialLinks = [
  { label: "Facebook", Icon: FacebookIcon, href: "#" },
  { label: "Instagram", Icon: InstagramIcon, href: "#" },
  { label: "LinkedIn", Icon: LinkedInIcon, href: "#" },
  { label: "YouTube", Icon: YouTubeIcon, href: "#" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-white">
      {/* ── TOP ROW ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-b border-white/10">
        {/* Logo */}
        <Link
          to="/"
          className="text-white font-bold text-2xl tracking-widest uppercase select-none"
        >
          <img
            src="https://magedubai.com/wp-content/uploads/2024/09/Mage-Prime-Logo-4.png"
            alt="Mage Prime Logo"
            className="h-16 w-auto"
          />
        </Link>

        {/* Nav links — centered */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-start md:justify-center">
          {navLinks.map(({ label, href }) =>
            href.startsWith("/") ? (
              <Link
                key={label}
                to={href}
                className="text-white/70 text-sm hover:text-[#00c700] transition-colors duration-200 whitespace-nowrap"
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={href}
                className="text-white/70 text-sm hover:text-[#00c700] transition-colors duration-200 whitespace-nowrap"
              >
                {label}
              </a>
            ),
          )}
        </nav>

        {/* Social icons — right */}
        <div className="flex items-center gap-4 md:justify-end">
          {socialLinks.map(({ label, Icon, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-[#00c700] hover:text-[#00c700] transition-colors duration-200"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* ── BOTTOM ROW ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-7 grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
        {/* Copyright */}
        <div>
          <p className="text-white/50 text-xs leading-relaxed">
            &copy; {year} Mage Prime
            <br />
            All rights reserved.
          </p>
        </div>

        {/* Statement */}
        <div>
          <p className="text-white/50 text-xs leading-relaxed">Mage Prime</p>
        </div>

        {/* Legal links */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:justify-end">
          {legalLinks.map(({ label, href }, i) => (
            <React.Fragment key={label}>
              {i > 0 && (
                <span className="text-white/20 text-xs hidden sm:inline">
                  |
                </span>
              )}
              <Link
                to={href}
                className="text-white/50 text-xs hover:text-[#00c700] transition-colors duration-200"
              >
                {label}
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

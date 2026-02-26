import React, { useRef, useEffect, useState } from "react";
import backgroundVideo from "../../../assets/background.mp4";

const HeroSection = () => {
  const videoRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax factor for content on scroll
  const contentOffset = scrollY * 0.3;

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* ── VIDEO BACKGROUND ── */}
      <video
        ref={videoRef}
        src={backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />

      {/* ── DARK OVERLAY ── */}
      <div className="absolute inset-0 bg-black/55" />

      {/* ── THIN GREEN ACCENT LINE (left edge) ── */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#00c700]" />

      {/* ── HERO CONTENT (lower-left, offset from center) ── */}
      <div
        className="absolute inset-0 flex flex-col justify-end pb-24 pl-16 pr-8 md:pl-24 lg:pl-32"
        style={{ transform: `translateY(-${contentOffset}px)` }}
      >
        {/* Pre-heading label */}
        <p className="text-[#00c700] text-xs font-semibold tracking-[0.35em] uppercase mb-4">
          Est. 2024 &nbsp;·&nbsp; Prime Mage Construction
        </p>

        {/* Main heading */}
        <div className="mb-6 leading-none">
          <span className="block text-white font-light text-[clamp(3rem,7vw,6rem)] tracking-tight">
            Building a
          </span>
          <span className="block hero-script text-[clamp(3.5rem,8.5vw,7.5rem)] text-white leading-none">
            Legacy.
            {/* Green script underline */}
            <svg
              aria-hidden="true"
              viewBox="0 0 400 20"
              className="w-[clamp(14rem,34vw,30rem)] mt-1"
              preserveAspectRatio="none"
            >
              <path
                d="M0 12 Q100 2 200 12 Q300 22 400 10"
                stroke="#00c700"
                strokeWidth="3.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>

        {/* CTA row */}
        <div className="flex items-center gap-6 mt-2">
          <a
            href="#services"
            className="group flex items-center gap-3 text-white text-xs font-bold tracking-[0.3em] uppercase border-b border-white/40 pb-1 hover:border-[#00c700] transition-colors duration-300"
          >
            What will you build?
            <span className="inline-block text-[#00c700] transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 text-base">
              →
            </span>
          </a>
        </div>
      </div>

      {/* ── VERTICAL "SCROLL" INDICATOR (left side) ── */}
      <div className="absolute left-6 bottom-20 flex flex-col items-center gap-3">
        {/* Animated scroll mouse */}
        <div className="w-5 h-8 border border-white/50 rounded-full flex items-start justify-center pt-1">
          <div className="w-0.5 h-2 bg-white rounded-full animate-scroll-dot" />
        </div>
        <span
          className="text-white/50 text-[10px] tracking-[0.3em] font-light"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          SCROLL
        </span>
      </div>

      {/* ── BOTTOM GRADIENT FADE ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/60 to-transparent" />
    </section>
  );
};

export default HeroSection;

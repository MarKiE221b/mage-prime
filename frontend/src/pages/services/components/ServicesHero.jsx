import React from "react";
import imgBuildings from "../../../assets/buildings.jpg";

const ServicesHero = () => {
  return (
    <section className="relative w-full h-[65vh] min-h-120 overflow-hidden">
      {/* ── BACKGROUND IMAGE ── */}
      <img
        src={imgBuildings}
        alt="Mage Dubai services"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ── DARK OVERLAY ── */}
      <div className="absolute inset-0 bg-black/65" />

      {/* ── GREEN LEFT ACCENT ── */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#00c700]" />

      {/* ── HERO CONTENT ── */}
      <div className="absolute inset-0 flex flex-col justify-center pl-16 pr-8 md:pl-24 lg:pl-32 pb-6">
        <p className="text-[#00c700] text-xs font-semibold tracking-[0.35em] uppercase mb-4">
          WHAT WE OFFER
        </p>
        <h1 className="text-white font-light text-[clamp(2.8rem,6vw,5.5rem)] tracking-tight leading-tight max-w-2xl">
          Our Services
        </h1>
        <p className="mt-5 text-white/70 text-[clamp(1rem,1.8vw,1.2rem)] font-light leading-relaxed max-w-xl">
          By integrating architecture with engineering, we deliver comprehensive
          design and construction solutions that anticipate challenges early and
          provide efficient, integrated outcomes.
        </p>
      </div>

      {/* ── BOTTOM GRADIENT FADE ── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent" />
    </section>
  );
};

export default ServicesHero;

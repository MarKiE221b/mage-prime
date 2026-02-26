import React from "react";
import team from "../../../assets/companyTeam.png";

const TeamsHero = () => {
  return (
    <section className="relative w-full h-[65vh] min-h-120 overflow-hidden">
      {/* ── BACKGROUND IMAGE ── */}
      <img
        src={team}
        alt="Mage Dubai team"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ── DARK OVERLAY ── */}
      <div className="absolute inset-0 bg-black/60" />

      {/* ── GREEN LEFT ACCENT ── */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#00c700]" />

      {/* ── HERO CONTENT (lower-left) ── */}
      <div className="absolute inset-0 flex flex-col justify-center pl-16 pr-8 md:pl-24 lg:pl-32 pb-8">
        {/* Label */}
        <p className="text-[#00c700] text-xs font-semibold tracking-[0.35em] uppercase mb-4">
          WHO WE ARE
        </p>

        {/* Main heading */}
        <h1 className="text-white font-light text-[clamp(2.8rem,6vw,5.5rem)] tracking-tight leading-tight max-w-2xl">
          Our Leadership
        </h1>

        {/* Sub-heading */}
        <p className="mt-5 text-white/75 text-[clamp(1rem,1.8vw,1.25rem)] font-light leading-relaxed max-w-xl">
          Building the right environment where people can be at their best,
          act with integrity, and are treated with dignity and respect.
        </p>
      </div>

      {/* ── BOTTOM GRADIENT FADE ── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent" />
    </section>
  );
};

export default TeamsHero;

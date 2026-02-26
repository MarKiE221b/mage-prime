import React from "react";
import imgBuildings from "../../../assets/buildings.jpg";

const AboutHero = () => {
  return (
    <section className="relative w-full h-[70vh] min-h-120 overflow-hidden">
      {/* ── BACKGROUND IMAGE ── */}
      <img
        src={imgBuildings}
        alt="Mage Dubai buildings"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ── DARK OVERLAY ── */}
      <div className="absolute inset-0 bg-black/60" />

      {/* ── GREEN LEFT ACCENT ── */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#00c700]" />

      {/* ── HERO CONTENT ── */}
      <div className="absolute inset-0 flex flex-col justify-end pb-25 pl-16 pr-8 md:pl-24 lg:pl-32">
        {/* Tagline */}
        <p className="text-[#00c700] text-xs font-semibold tracking-[0.35em] uppercase mb-4">
          TEAMWORK &nbsp;|&nbsp; INTEGRITY &nbsp;|&nbsp; COMMITMENT
        </p>

        {/* Main heading */}
        <h1 className="text-white font-light text-[clamp(2.4rem,6vw,4rem)] tracking-tight leading-tight max-w-3xl">
          Making a Difference in the Lives of{" "}
          <span className="text-[#00c700]">Our People,</span> Clients, and
          Communities.
        </h1>
      </div>

      {/* ── BOTTOM GRADIENT FADE ── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent" />
    </section>
  );
};

export default AboutHero;

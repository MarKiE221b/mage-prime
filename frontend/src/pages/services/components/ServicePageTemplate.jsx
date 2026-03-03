import React from "react";
import { Link } from "react-router";
import FadeIn from "../../../components/FadeIn";

/* ─────────────────────────────────────────────
   Reusable template for every service page.

   Props:
     service = {
       label       : string       — page / hero title
       tagline     : string       — small label above title
       description : string       — hero subtitle
       heroImage   : img          — imported image for hero bg
       overview    : string       — "What We Do" intro paragraph
       bullets     : string[]     — key capabilities list
     }
───────────────────────────────────────────── */

const ServicePageTemplate = ({ service }) => {
  const { label, tagline, description, heroImage, overview, bullets } = service;

  return (
    <main className="pt-20">
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative w-full h-[65vh] min-h-120 overflow-hidden">
        <img
          src={heroImage}
          alt={label}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute left-0 top-0 h-full w-1 bg-[#00c700]" />

        <div className="absolute inset-0 flex flex-col justify-center pl-16 pr-8 md:pl-24 lg:pl-32 pb-6">
          <p className="text-[#00c700] text-xs font-semibold tracking-[0.35em] uppercase mb-4">
            {tagline}
          </p>
          <h1 className="text-white font-light text-[clamp(2.8rem,6vw,4.5rem)] tracking-tight leading-tight max-w-2xl">
            {label}
          </h1>
          <p className="mt-5 text-white/70 text-[clamp(1rem,1.8vw,1.2rem)] font-light leading-relaxed max-w-xl">
            {description}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent" />
      </section>

      {/* ══════════════════════════════════════════
          OVERVIEW (2-col: intro + bullets)
      ══════════════════════════════════════════ */}
      <section className="w-full bg-white py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <FadeIn direction="left" duration={1.3} amount={0.2}>
            <p className="text-[#00c700] text-xs font-semibold tracking-[0.35em] uppercase mb-4">
              What We Do
            </p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-light text-gray-900 leading-snug mb-6">
              {label}
            </h2>
            <div className="w-10 h-0.5 bg-[#00c700] mb-8" />
            <p className="text-gray-600 leading-relaxed text-[1.05rem]">
              {overview}
            </p>
          </FadeIn>

          {/* Right — bullet list */}
          <FadeIn direction="right" delay={0.15} duration={1.3} amount={0.2}>
            <p className="text-gray-400 text-xs font-semibold tracking-[0.3em] uppercase mb-6">
              Key Capabilities
            </p>
            <ul className="flex flex-col gap-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#00c700]" />
                  <span className="text-gray-600 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA STRIP
      ══════════════════════════════════════════ */}
      <section className="w-full bg-gray-900 py-16 px-6 md:px-16 lg:px-24">
        <FadeIn direction="up" duration={1.1} amount={0.3}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-10 h-0.5 bg-[#00c700] mx-auto mb-7" />
            <h3 className="text-white text-[clamp(1.4rem,3vw,2rem)] font-light leading-relaxed mb-4">
              Ready to start your next project with us?
            </h3>
            <p className="text-white/60 text-sm mb-8">
              View our full portfolio to see the breadth and quality of our delivered work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-[#00c700] text-black text-sm font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
              >
                Get a Quote
                <span>&rarr;</span>
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-3 px-8 py-3 border border-white/30 text-white text-sm font-bold tracking-[0.2em] uppercase hover:border-[#00c700] hover:text-[#00c700] transition-colors duration-300"
              >
                View All Projects
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
};

export default ServicePageTemplate;

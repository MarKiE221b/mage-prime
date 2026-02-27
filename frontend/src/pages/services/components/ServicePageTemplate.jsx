import React from "react";
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
       projects    : [{ title, category, description }]
     }
───────────────────────────────────────────── */

/* ── Project row (text-left / image-right) ── */
const ProjectRow = ({ project, delay, index }) => {
  const isEven = index % 2 === 0;
  return (
    <FadeIn direction="up" delay={delay} duration={1.2} amount={0.12}>
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0 border-b border-gray-100 last:border-0`}>
        {/* Text side */}
        <div className="flex-1 py-16 px-8 lg:px-16 flex flex-col justify-center">
          <span className="text-[#00c700] text-[10px] font-bold tracking-[0.3em] uppercase mb-5">
            {project.category}
          </span>
          <h4 className="text-gray-900 font-light text-[clamp(1.6rem,2.8vw,2.3rem)] leading-snug mb-6">
            {project.title}
          </h4>
          <div className="w-8 h-0.5 bg-[#00c700] mb-6" />
          <p className="text-gray-500 text-[1rem] leading-[1.85] max-w-lg">
            {project.description}
          </p>
        </div>
        {/* Image side */}
        <div className="w-full lg:w-[48%] shrink-0 bg-gray-100 min-h-80 lg:min-h-105 overflow-hidden relative">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <svg viewBox="0 0 80 60" className="w-20 h-20 text-gray-400" fill="currentColor">
                <rect x="0" y="38" width="80" height="22" />
                <path d="M0 38L24 12h32L80 38H0z" />
                <rect x="30" y="18" width="20" height="20" fill="white" opacity="0.45" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </FadeIn>
  );
};

const ServicePageTemplate = ({ service }) => {
  const { label, tagline, description, heroImage, overview, bullets, projects } =
    service;

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
          PROJECTS SHOWCASE
      ══════════════════════════════════════════ */}
      <section className="w-full bg-white">
        {/* Section header */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pt-24 pb-10">
          <FadeIn direction="up" duration={1.1} amount={0.3}>
            <p className="text-[#00c700] text-xs font-semibold tracking-[0.35em] uppercase mb-3">
              Our Work
            </p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-light text-gray-900">
              Featured Projects
            </h2>
            <div className="w-10 h-0.5 bg-[#00c700] mt-4" />
          </FadeIn>
        </div>

        {/* Rows */}
        <div className="border-t border-gray-100">
          {projects.map((project, i) => (
            <ProjectRow
              key={project.title}
              project={project}
              delay={i * 0.08}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA STRIP
      ══════════════════════════════════════════ */}
      <section className="w-full bg-gray-900 py-16 px-6 md:px-16 lg:px-24">
        <FadeIn direction="up" duration={1.1} amount={0.3}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-10 h-0.5 bg-[#00c700] mx-auto mb-7" />
            <h3 className="text-white text-[clamp(1.4rem,3vw,2rem)] font-light leading-relaxed mb-8">
              Ready to start your next project with us?
            </h3>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-3 bg-[#00c700] text-black text-sm font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
            >
              Get a Quote
              <span>→</span>
            </a>
          </div>
        </FadeIn>
      </section>
    </main>
  );
};

export default ServicePageTemplate;

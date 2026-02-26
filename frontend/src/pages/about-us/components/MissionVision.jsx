import React from "react";
import imgWorkers from "../../../assets/workers.jpg";
import imgCountries from "../../../assets/countries.jpg";
import FadeIn from "../../../components/FadeIn";

/* ── Reusable pill label ── */
const SectionLabel = ({ children }) => (
  <p className="text-[#00c700] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
    {children}
  </p>
);

const MissionVision = () => {
  return (
    <>
      {/* ════════════════════════════════════════════════════════
          MISSION — text left, image right
      ════════════════════════════════════════════════════════ */}
      <section className="w-full bg-white py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — text */}
          <FadeIn direction="left" duration={1.3} amount={0.2}>
            <SectionLabel>Our Mission</SectionLabel>

            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light text-gray-900 leading-snug mb-6">
              Building with <span className="text-[#00c700]">Purpose</span> and{" "}
              <span className="italic">Precision</span>
            </h2>

            {/* Green accent rule */}
            <div className="w-14 h-0.5 bg-[#00c700] mb-8" />

            <p className="text-gray-600 leading-relaxed text-[1.05rem]">
              Our mission is to provide outstanding architectural and engineering
              solutions that meet our clients' unique needs. We are committed to
              designing and building spaces that are{" "}
              <span className="text-gray-900 font-medium">well-planned</span>,{" "}
              <span className="text-gray-900 font-medium">expertly executed</span>,
              and contribute to a better built environment for future generations.
            </p>

            {/* Key pillars */}
            <ul className="mt-10 space-y-4">
              {[
                "Client-centred design and delivery",
                "On-time, within-budget project execution",
                "Building spaces that serve future generations",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#00c700]" />
                  <span className="text-gray-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Right — image */}
          <FadeIn direction="right" delay={0.15} duration={1.4} amount={0.2}>
            <div className="relative overflow-hidden rounded-sm shadow-lg aspect-4/3">
              <img
                src={imgWorkers}
                alt="Mage Dubai team at work"
                className="w-full h-full object-cover"
              />
              {/* Bottom green label */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#00c700]/90 px-6 py-4">
                <p className="text-white text-xs font-bold tracking-[0.25em] uppercase">
                  Our People · Our Strength
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          VISION — image left, text right  (reversed layout)
      ════════════════════════════════════════════════════════ */}
      <section className="w-full bg-gray-50 py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — image (order reversed) */}
          <FadeIn direction="left" duration={1.4} amount={0.2} className="lg:order-last">
            <div className="relative overflow-hidden rounded-sm shadow-lg aspect-4/3">
              <img
                src={imgCountries}
                alt="Mage Dubai global reach"
                className="w-full h-full object-cover"
              />
              {/* Dark overlay strip at top */}
              <div className="absolute top-0 left-0 right-0 bg-black/50 px-6 py-4">
                <p className="text-white text-xs font-bold tracking-[0.25em] uppercase">
                  Global Vision · Local Impact
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right — text */}
          <FadeIn direction="right" delay={0.15} duration={1.3} amount={0.2} className="lg:order-first">
            <SectionLabel>Our Vision</SectionLabel>

            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light text-gray-900 leading-snug mb-6">
              Leading the Industry{" "}
              <span className="text-[#00c700]">Toward a Better Future</span>
            </h2>

            {/* Green accent rule */}
            <div className="w-14 h-0.5 bg-[#00c700] mb-8" />

            <p className="text-gray-600 leading-relaxed text-[1.05rem]">
              Our vision is to lead the architectural, engineering, and construction
              industries toward a future where design blends seamlessly with nature
              and society. We aim to create spaces that are{" "}
              <span className="text-gray-900 font-medium">beautiful</span>,{" "}
              <span className="text-gray-900 font-medium">functional</span>, and{" "}
              <span className="text-gray-900 font-medium">
                environmentally responsible
              </span>{" "}
              — setting new standards for innovation, excellence, and sustainability.
            </p>

            {/* Key pillars */}
            <ul className="mt-10 space-y-4">
              {[
                "Seamless fusion of design, nature, and society",
                "New standards in innovation and sustainability",
                "Excellence across every market we operate in",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#00c700]" />
                  <span className="text-gray-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          CLOSING STATEMENT — full-width dark strip
      ════════════════════════════════════════════════════════ */}
      <section className="w-full bg-gray-900 py-20 px-6 md:px-16 lg:px-24">
        <FadeIn direction="up" duration={1.3} amount={0.3}>
          <div className="max-w-4xl mx-auto text-center">
            {/* Green rule */}
            <div className="w-10 h-0.5 bg-[#00c700] mx-auto mb-8" />
            <blockquote className="text-white text-[clamp(1.4rem,3vw,2.2rem)] font-light leading-relaxed">
              "A promise made is a promise delivered — in every project, in every
              partnership, in every community we serve."
            </blockquote>
            <p className="mt-6 text-[#00c700] text-xs font-semibold tracking-[0.3em] uppercase">
              Mage Prime &nbsp;·&nbsp; Est. 2024
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
};

export default MissionVision;

import React from "react";
import { Link } from "react-router";
import FadeIn from "../../../components/FadeIn";
import img from "../../../assets/workers.jpg";

const CareersOpenPositions = () => (
  <section className="w-full bg-white py-24 px-6 md:px-16 lg:px-24">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
      {/* Left — CTA block */}
      <FadeIn direction="left" duration={1.2} amount={0.2}>
        <div className="bg-[#1a4a0a] rounded-sm p-14 flex flex-col justify-between min-h-[420px]">
          {/* Top */}
          <div>
            <div className="w-10 h-0.5 bg-[#00c700] mb-8" />
            <h2 className="text-white font-light text-[clamp(2rem,4vw,3.2rem)] leading-[1.1]">
              Find Your Place<br />at Mage Prime
            </h2>
          </div>

          {/* Bottom — CTA */}
          <div className="mt-12 flex items-center justify-between gap-6">
            <p className="text-white/70 text-[1rem] font-light leading-relaxed max-w-[200px]">
              View open positions
            </p>
            <Link
              to="/contact"
              className="shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#1a4a0a] hover:bg-[#00c700] hover:text-white transition-colors duration-300 shadow-md"
              aria-label="View open positions"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </FadeIn>

      {/* Right — team photo */}
      <FadeIn direction="right" delay={0.1} duration={1.2} amount={0.2}>
        <div className="relative overflow-hidden rounded-sm min-h-[420px]">
          <img
            src={img}
            alt="Mage Dubai team"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
      </FadeIn>
    </div>
  </section>
);

export default CareersOpenPositions;

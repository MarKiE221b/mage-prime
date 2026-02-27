import React from "react";
import FadeIn from "../../../components/FadeIn";
import img from "../../../assets/planning.jpg";

const CareersWelcome = () => (
  <section className="w-full bg-white py-24 px-6 md:px-16 lg:px-24">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      {/* Left — text */}
      <FadeIn direction="left" duration={1.3} amount={0.2}>
        <p className="text-[#00c700] text-xs font-semibold tracking-[0.35em] uppercase mb-5">
          Life at Mage Prime
        </p>
        <h2 className="text-gray-900 font-light text-[clamp(2rem,4vw,3rem)] leading-snug mb-6">
          A Welcoming Place for All
        </h2>
        <div className="w-10 h-0.5 bg-[#00c700] mb-8" />
        <p className="text-gray-600 text-[1.05rem] leading-[1.85] mb-5">
          At Mage Prime, we believe that great buildings are built by great people. Our team is
          made up of passionate architects, engineers, project managers, and skilled tradespeople
          who share one vision: designing with purpose and building with precision.
        </p>
        <p className="text-gray-600 text-[1.05rem] leading-[1.85]">
          We foster a culture of inclusion, growth, and collaboration — where every voice is
          heard and every contribution matters. Joining Mage Prime means becoming part of a
          family that shapes the future of the built environment across the UAE.
        </p>
      </FadeIn>

      {/* Right — image */}
      <FadeIn direction="right" delay={0.15} duration={1.3} amount={0.2}>
        <div className="w-full aspect-4/3 overflow-hidden rounded-sm">
          <img
            src={img}
            alt="Mage Dubai team"
            className="w-full h-full object-cover"
          />
        </div>
      </FadeIn>
    </div>
  </section>
);

export default CareersWelcome;

import React from "react";
import imgPlanning from "../../../assets/mage-companies.png";
import FadeIn from "../../../components/FadeIn";

const AboutIntro = () => {
  return (
    <>
      {/* ════════════════════════════════════════════════════════
          SECTION 1 — Overview (2-column: heading left, text right)
          Like Turner's "About Turner" layout
      ════════════════════════════════════════════════════════ */}
      <section className="w-full bg-white py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Large heading */}
          <FadeIn direction="left" duration={1.3}>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-light text-gray-900 leading-tight">
              About{" "}
              <span className="text-[#00c700] font-normal">Mage Prime</span>
            </h2>
            {/* Decorative rule */}
            <div className="mt-6 w-16 h-0.5 bg-[#00c700]" />
          </FadeIn>

          {/* Right — Intro paragraph */}
          <FadeIn direction="right" delay={0.15} duration={1.3}>
            <p className="text-gray-600 text-lg leading-relaxed">
              Mage Prime is the cornerstone of innovation and excellence in the
              construction and interior design industries. As the parent company,
              we provide comprehensive support and strategic direction to our
              subsidiaries —{" "}
              <span className="text-gray-900 font-medium">Mage Prime</span>,{" "}
              <span className="text-gray-900 font-medium">Mage Middle East</span>,{" "}
              <span className="text-gray-900 font-medium">Mage Trading</span>, and{" "}
              <span className="text-gray-900 font-medium">Mage International</span>.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-6">
              With a focus on delivering world-class solutions, we bring together
              cutting-edge engineering, architectural design, construction expertise,
              and seamless interior design services — guiding every project from
              first concept through to final handover.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 2 — The Mage Group (image left, text right)
          Like Turner's "A Legacy Built on Trust" layout
      ════════════════════════════════════════════════════════ */}
      <section className="w-full bg-gray-50 py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — image */}
          <FadeIn direction="left" duration={1.4} amount={0.2}>
            <div className="relative overflow-hidden rounded-sm shadow-lg aspect-4/3">
              <img
                src={imgPlanning}
                alt="Mage Dubai project planning"
                className="w-full h-full object-cover"
              />
              {/* Green corner accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-[#00c700]" />
            </div>
          </FadeIn>

          {/* Right — text */}
          <FadeIn direction="right" delay={0.2} duration={1.4} amount={0.2}>
            {/* Label */}
            <p className="text-[#00c700] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              The Mage Group
            </p>

            <h3 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-light text-gray-900 leading-snug mb-6">
              A Family of Companies,{" "}
              <span className="italic">Built for Excellence</span>
            </h3>

            <p className="text-gray-600 leading-relaxed mb-5">
              <span className="text-gray-900 font-semibold">Mage Prime</span> serves
              as our creative and technical force — a talented team of engineers and
              architects who bring visions to life, from structural engineering to
              bespoke interior design. They support Mage Middle East and Mage
              International in executing every project with precision and artistry.
            </p>

            <p className="text-gray-600 leading-relaxed mb-5">
              <span className="text-gray-900 font-semibold">Mage Middle East</span>{" "}
              specialises in turnkey interior solutions, transforming spaces
              across the region with unparalleled craftsmanship.{" "}
              <span className="text-gray-900 font-semibold">Mage International</span>{" "}
              extends our construction expertise on a global scale, while{" "}
              <span className="text-gray-900 font-semibold">Mage Trading</span>{" "}
              ensures every material, tool, and resource is in place to keep
              operations running without interruption.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Together, the Mage Group is dedicated to building a legacy of quality
              and innovation — in every project we touch.
            </p>

            {/* CTA link */}
            <a
              href="#"
              className="group inline-flex items-center gap-3 mt-8 text-xs font-bold tracking-[0.3em] uppercase text-gray-900 border-b border-gray-300 pb-1 hover:text-[#00c700] hover:border-[#00c700] transition-colors duration-300"
            >
              Get to know us
              <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default AboutIntro;

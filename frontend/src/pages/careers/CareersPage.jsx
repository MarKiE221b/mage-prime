import React from "react";
import CareersHero from "./components/CareersHero";
import CareersWelcome from "./components/CareersWelcome";
import CareersPeople from "./components/CareersPeople";
import CareersCulture from "./components/CareersCulture";
import CareersOpenPositions from "./components/CareersOpenPositions";
import FadeIn from "../../components/FadeIn";

const CareersPage = () => (
  <main className="pt-20">
    <CareersHero />
    <CareersWelcome />
    <CareersPeople />
    <CareersCulture />
    <CareersOpenPositions />

    {/* CTA strip */}
    <section className="w-full bg-gray-900 py-16 px-6 md:px-16 lg:px-24">
      <FadeIn direction="up" duration={1.1} amount={0.3}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-10 h-0.5 bg-[#00c700] mx-auto mb-7" />
          <h3 className="text-white text-[clamp(1.4rem,3vw,2rem)] font-light leading-relaxed mb-8">
            Ready to shape the future of Dubai&rsquo;s built environment?
          </h3>
          <a
            href="mailto:info@mage-prime.com"
            className="inline-flex items-center gap-3 px-8 py-3 bg-[#00c700] text-black text-sm font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
          >
            Send Your CV
            <span>&rarr;</span>
          </a>
        </div>
      </FadeIn>
    </section>
  </main>
);

export default CareersPage;

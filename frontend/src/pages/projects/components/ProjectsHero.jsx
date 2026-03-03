import React from "react";
import heroImg from "../../../assets/buildings.jpg";

const ProjectsHero = () => (
  <section className="relative w-full h-[60vh] min-h-120 overflow-hidden">
    <img
      src={heroImg}
      alt="Our Projects"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/65" />
    <div className="absolute left-0 top-0 h-full w-1 bg-[#00c700]" />

    <div className="absolute inset-0 flex flex-col justify-center pl-16 pr-8 md:pl-24 lg:pl-32 pb-6">
      <p className="text-[#00c700] text-xs font-semibold tracking-[0.35em] uppercase mb-4">
        Our Work
      </p>
      <h1 className="text-white font-light text-[clamp(2.8rem,6vw,5.5rem)] tracking-tight leading-tight">
        Our Projects
      </h1>
      <p className="mt-5 text-white/70 text-[clamp(1rem,1.8vw,1.15rem)] font-light leading-relaxed max-w-xl">
        A curated showcase of our completed and ongoing works across the UAE —
        from residential villas to landmark masterplans.
      </p>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent" />
  </section>
);

export default ProjectsHero;

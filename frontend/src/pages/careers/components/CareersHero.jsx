import React from "react";
import heroImg from "../../../assets/workers.jpg";

const CareersHero = () => (
  <section className="relative w-full h-[75vh] min-h-120 overflow-hidden">
    <img
      src={heroImg}
      alt="Life at Mage Dubai"
      className="absolute inset-0 w-full h-full object-cover object-top"
    />
    <div className="absolute inset-0 bg-black/55" />

    <div className="absolute inset-0 flex flex-col justify-center pl-16 pr-8 md:pl-24 lg:pl-32 pb-10">
      <p className="text-white/70 text-xs font-semibold tracking-[0.35em] uppercase mb-5">
        Life at Mage Prime
      </p>
      <h1 className="text-white font-light text-[clamp(2.8rem,6.5vw,6rem)] tracking-tight leading-[1.05]">
        We Do{" "}
        <span className="hero-script text-[#00c700] not-italic font-normal text-[1.1em]">
          Great
        </span>
        <br />
        Things Together
      </h1>
    </div>

    {/* Fade to white */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent" />
  </section>
);

export default CareersHero;

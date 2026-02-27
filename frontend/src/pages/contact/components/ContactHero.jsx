import React from "react";
import heroImg from "../../../assets/buildings.jpg";

const ContactHero = () => (
  <section className="relative w-full h-[55vh] min-h-100 overflow-hidden">
    <img
      src={heroImg}
      alt="Contact Mage Dubai"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/65" />
    <div className="absolute left-0 top-0 h-full w-1 bg-[#00c700]" />

    <div className="absolute inset-0 flex flex-col justify-center pl-16 pr-8 md:pl-24 lg:pl-32 pb-6">
      <p className="text-[#00c700] text-xs font-semibold tracking-[0.35em] uppercase mb-4">
        Get In Touch
      </p>
      <h1 className="text-white font-light text-[clamp(2.8rem,6vw,5.5rem)] tracking-tight leading-tight">
        Contact Us
      </h1>
      <p className="mt-5 text-white/70 text-[clamp(1rem,1.8vw,1.15rem)] font-light leading-relaxed max-w-xl">
        We invite you to visit our office or contact us to discuss your project.
      </p>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent" />
  </section>
);

export default ContactHero;

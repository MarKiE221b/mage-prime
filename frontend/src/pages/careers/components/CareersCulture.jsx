import React from "react";
import FadeIn from "../../../components/FadeIn";
import img from "../../../assets/countries.jpg";

const values = [
  {
    title: "Collaboration",
    body:
      "Our teams work as one across disciplines — architects, engineers, and site managers aligned from day one to deliver excellence together.",
  },
  {
    title: "Growth & Learning",
    body:
      "We invest in our people through mentorship programmes, continuous learning opportunities, and a clear path for career advancement at every level.",
  },
  {
    title: "Innovation",
    body:
      "We embrace new technologies and methods that push the boundaries of design and construction, keeping Mage Prime at the forefront of the industry.",
  },
];

const CareersCulture = () => (
  <section className="w-full bg-white border-t border-gray-100">
    {/* 3-col layout: text-left | image-center | values-right */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 min-h-130">
      {/* Left — intro + decorative text */}
      <FadeIn direction="left" duration={1.2} amount={0.15}>
        <div className="flex flex-col justify-center px-8 md:px-12 py-16 border-r border-gray-100">
          <p className="text-gray-400 text-[1.05rem] leading-[1.85] mb-10">
            An excellent support system built within Mage Prime to foster
            awareness, respect, and inclusion across every project and team.
          </p>
          <div className="mt-auto">
            <p className="text-[#2d5a1b] text-[2.2rem] font-extrabold uppercase leading-[1.05] tracking-tight">
              Our <span className="text-[#00c700]">Culture</span>
            </p>
            <p className="text-[#2d5a1b] text-[2.2rem] font-extrabold uppercase leading-[1.05] tracking-tight">
              &amp; Values
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Center — image */}
      <FadeIn direction="up" delay={0.1} duration={1.2} amount={0.1}>
        <div className="relative overflow-hidden min-h-95 lg:min-h-full">
          <img
            src={img}
            alt="Mage Dubai culture"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </FadeIn>

      {/* Right — value cards */}
      <FadeIn direction="right" delay={0.15} duration={1.2} amount={0.15}>
        <div className="flex flex-col justify-center px-8 md:px-12 py-16 gap-8 border-l border-gray-100">
          {values.map((v, i) => (
            <div key={v.title}>
              <p className="text-[#00c700] text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                0{i + 1}
              </p>
              <h4 className="text-gray-900 font-semibold text-[1rem] mb-2">{v.title}</h4>
              <p className="text-gray-500 text-[0.92rem] leading-[1.8]">{v.body}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);

export default CareersCulture;

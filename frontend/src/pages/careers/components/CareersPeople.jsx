import React from "react";
import FadeIn from "../../../components/FadeIn";

/* ── placeholder people — swap photo imports + data when ready ── */
const people = [
  { name: "Sarah Al Rashid",  title: "Lead Architect",         photo: null },
  { name: "James Okafor",     title: "Senior Project Manager", photo: null },
  { name: "Lena Stavros",     title: "Interior Design Lead",   photo: null },
  { name: "Khalid Mansouri",  title: "Civil Engineer",         photo: null },
];

const AvatarPlaceholder = () => (
  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
    <svg viewBox="0 0 80 80" className="w-20 h-20 text-gray-400" fill="currentColor">
      <circle cx="40" cy="28" r="18" />
      <path d="M4 76c0-19.88 16.12-36 36-36s36 16.12 36 36H4z" />
    </svg>
  </div>
);

const PersonCard = ({ person, delay }) => (
  <FadeIn direction="up" delay={delay} duration={1.1} amount={0.15}>
    <div className="relative overflow-hidden rounded-sm group" style={{ aspectRatio: "3/4" }}>
      {/* Photo */}
      <div className="absolute inset-0">
        {person.photo ? (
          <img
            src={person.photo}
            alt={person.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <AvatarPlaceholder />
        )}
      </div>

      {/* Name tag overlay — bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="bg-[#1a4a0a]/90 backdrop-blur-sm px-5 py-4 rounded-xs">
          <p className="text-[#00c700] text-[10px] font-bold tracking-[0.25em] uppercase mb-1">
            {person.title}
          </p>
          <p className="text-white font-light text-[1.05rem] leading-snug">
            {person.name}
          </p>
        </div>
      </div>
    </div>
  </FadeIn>
);

const CareersPeople = () => (
  <section className="w-full bg-gray-50 py-24 px-6 md:px-16 lg:px-24">
    <div className="max-w-7xl mx-auto">
      <FadeIn direction="up" duration={1.1} amount={0.25}>
        <p className="text-[#00c700] text-xs font-semibold tracking-[0.35em] uppercase mb-4">
          Life at Mage Prime
        </p>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-light text-gray-900 mb-14">
          Meet our{" "}
          <span className="text-[#00c700] font-normal">people</span>.
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {people.map((p, i) => (
          <PersonCard key={p.name} person={p} delay={i * 0.1} />
        ))}
      </div>
    </div>
  </section>
);

export default CareersPeople;

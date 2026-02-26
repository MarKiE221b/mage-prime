import React, { useState } from "react";
import FadeIn from "../../../components/FadeIn";

/* ─────────────────────────────────────────────
   PLACEHOLDER DATA
   Replace `photo` with an imported image path,
   and fill in real names/titles/contact info.
───────────────────────────────────────────── */
const executives = [
  {
    id: 1,
    name: "Your Name Here",
    title: "Chairman & Chief Executive Officer",
    phone: "+971 00 000 0000",
    email: "ceo@magedubai.com",
    photo: null, // import photo and place here
    featured: true,
  },
  {
    id: 2,
    name: "Your Name Here",
    title: "Chief Operating Officer",
    phone: "+971 00 000 0000",
    email: "coo@magedubai.com",
    photo: null,
  },
  {
    id: 3,
    name: "Your Name Here",
    title: "Chief Financial Officer",
    phone: "+971 00 000 0000",
    email: "cfo@magedubai.com",
    photo: null,
  },
  {
    id: 4,
    name: "Your Name Here",
    title: "Head of Engineering",
    phone: "+971 00 000 0000",
    email: "engineering@magedubai.com",
    photo: null,
  },
  {
    id: 5,
    name: "Your Name Here",
    title: "Head of Architecture & Design",
    phone: "+971 00 000 0000",
    email: "design@magedubai.com",
    photo: null,
  },
  {
    id: 6,
    name: "Your Name Here",
    title: "Director of Project Delivery",
    phone: "+971 00 000 0000",
    email: "projects@magedubai.com",
    photo: null,
  },
];

/* ─────────────────────────────────────────────
   PERSON PLACEHOLDER SVG (shown when no photo)
───────────────────────────────────────────── */
const AvatarPlaceholder = () => (
  <div className="w-full h-full flex items-center justify-center bg-gray-200">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className="w-16 h-16 text-gray-400"
      fill="currentColor"
    >
      <circle cx="32" cy="22" r="13" />
      <path d="M4 56c0-15.464 12.536-28 28-28s28 12.536 28 28H4z" />
    </svg>
  </div>
);

/* ─────────────────────────────────────────────
   TEAM MEMBER CARD
───────────────────────────────────────────── */
const MemberCard = ({ member, large = false }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-gray-100 rounded-sm overflow-hidden flex flex-col ${
        large ? "shadow-md" : ""
      }`}
    >
      {/* Photo */}
      <div className={`w-full overflow-hidden ${large ? "aspect-3/4" : "aspect-4/3"}`}>
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <AvatarPlaceholder />
        )}
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-1">
        <h3 className="text-gray-900 text-[1.1rem] font-semibold leading-snug">
          {member.name}
        </h3>
        <p className="text-gray-500 text-sm leading-snug">{member.title}</p>

        {/* Expandable contact */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-3 flex items-center justify-between w-full group"
          aria-expanded={open}
        >
          <span className="text-xs text-gray-400 tracking-wide">
            {open ? "Hide contact" : "Show contact"}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`w-4 h-4 text-[#00c700] transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Contact details (collapsible) */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            open ? "max-h-20 mt-2" : "max-h-0"
          }`}
        >
          <p className="text-sm text-gray-500">{member.phone}</p>
          <a
            href={`mailto:${member.email}`}
            className="text-sm text-[#00c700] hover:underline"
          >
            {member.email}
          </a>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────── */
const LeadershipSection = () => {
  const featured = executives.find((m) => m.featured);
  const rest = executives.filter((m) => !m.featured);

  return (
    <>
      {/* ══════════════════════════════════════════════════
          EXECUTIVE LEADERSHIP — intro + featured card
      ══════════════════════════════════════════════════ */}
      <section className="w-full bg-white py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — heading + description */}
          <FadeIn direction="left" duration={1.3} amount={0.2}>
            {/* Green rule */}
            <div className="w-10 h-0.5 bg-[#00c700] mb-8" />

            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-gray-900 leading-tight">
              <span className="text-[#00c700]">Executive</span>
              <br />
              Leadership
            </h2>

            <p className="mt-8 text-gray-500 leading-relaxed max-w-sm text-[1.05rem]">
              Our executive officers are seasoned industry veterans who share a
              collective vision for quality, innovation, and client success. They
              guide a global team to deliver outstanding results — for our clients,
              our communities, and the built environment.
            </p>

            {/* Stat row */}
            <div className="mt-12 flex items-start gap-12">
              {[
                { stat: "120+", label: "Expert Employees" },
                { stat: "15+", label: "Countries Served" },
              ].map(({ stat, label }) => (
                <div key={label}>
                  <p className="text-[2rem] font-light text-gray-900 leading-none">
                    {stat}
                  </p>
                  <p className="text-xs text-[#00c700] font-semibold tracking-[0.25em] uppercase mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right — featured executive card */}
          {featured && (
            <FadeIn direction="right" delay={0.15} duration={1.3} amount={0.2}>
              <MemberCard member={featured} large />
            </FadeIn>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          LEADERSHIP GRID — remaining team members
      ══════════════════════════════════════════════════ */}
      <section className="w-full bg-gray-50 py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <FadeIn direction="up" duration={1.2} amount={0.2}>
            <p className="text-[#00c700] text-xs font-semibold tracking-[0.35em] uppercase mb-3">
              The Team
            </p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-light text-gray-900">
              The People Behind the Work
            </h2>
            <div className="mt-4 w-14 h-0.5 bg-[#00c700]" />
          </FadeIn>

          {/* 3-column card grid */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((member, i) => (
              <FadeIn
                key={member.id}
                direction="up"
                delay={i * 0.1}
                duration={1.2}
                amount={0.15}
              >
                <MemberCard member={member} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CLOSING STRIP
      ══════════════════════════════════════════════════ */}
      <section className="w-full bg-gray-900 py-16 px-6 md:px-16 lg:px-24">
        <FadeIn direction="up" duration={1.2} amount={0.3}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-10 h-0.5 bg-[#00c700] mx-auto mb-7" />
            <p className="text-white text-[clamp(1.2rem,2.5vw,1.8rem)] font-light leading-relaxed">
              "Our strength lies in our people. Every project we complete is a
              reflection of the dedication, expertise, and passion they bring to
              work every day."
            </p>
            <p className="mt-5 text-[#00c700] text-xs font-semibold tracking-[0.3em] uppercase">
              Mage Prime &nbsp;·&nbsp; Leadership
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
};

export default LeadershipSection;

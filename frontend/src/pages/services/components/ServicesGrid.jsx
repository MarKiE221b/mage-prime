import React from "react";
import { Link } from "react-router";
import FadeIn from "../../../components/FadeIn";

/* ── Inline SVG icons ── */
const ResidentialIcon = () => (
  <svg viewBox="0 0 64 64" fill="currentColor" className="w-14 h-14">
    <path d="M32 6L4 28h8v30h16V40h8v18h16V28h8L32 6z" />
  </svg>
);

const CommercialIcon = () => (
  <svg viewBox="0 0 64 64" fill="currentColor" className="w-14 h-14">
    <rect x="4" y="20" width="24" height="38" />
    <rect x="36" y="8" width="24" height="50" />
    <rect x="10" y="26" width="5" height="6" fill="white" />
    <rect x="10" y="38" width="5" height="6" fill="white" />
    <rect x="19" y="26" width="5" height="6" fill="white" />
    <rect x="19" y="38" width="5" height="6" fill="white" />
    <rect x="42" y="14" width="5" height="6" fill="white" />
    <rect x="51" y="14" width="5" height="6" fill="white" />
    <rect x="42" y="26" width="5" height="6" fill="white" />
    <rect x="51" y="26" width="5" height="6" fill="white" />
    <rect x="42" y="38" width="5" height="6" fill="white" />
    <rect x="51" y="38" width="5" height="6" fill="white" />
  </svg>
);

const InteriorIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
    <line x1="12" y1="52" x2="42" y2="12" />
    <line x1="42" y1="12" x2="52" y2="22" />
    <line x1="52" y1="22" x2="22" y2="52" />
    <line x1="12" y1="52" x2="22" y2="52" />
    <line x1="8" y1="56" x2="18" y2="56" />
    <line x1="8" y1="52" x2="8" y2="58" />
    <circle cx="46" cy="16" r="5" fill="currentColor" stroke="none" />
  </svg>
);

const InfrastructureIcon = () => (
  <svg viewBox="0 0 64 64" fill="currentColor" className="w-14 h-14">
    <path d="M4 44c0-12 8-20 16-22v22H4zM44 22c8 2 16 10 16 22H44V22z" />
    <rect x="20" y="32" width="24" height="12" />
    <rect x="28" y="22" width="8" height="10" />
    <rect x="2" y="44" width="60" height="6" />
  </svg>
);

const MasterplanIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
    <rect x="10" y="8" width="36" height="46" rx="2" />
    <line x1="18" y1="20" x2="38" y2="20" />
    <line x1="18" y1="28" x2="38" y2="28" />
    <line x1="18" y1="36" width="14" y2="36" x2="32" />
    <path d="M38 38l6 6-6 6" fill="none" />
    <line x1="38" y1="44" x2="54" y2="44" />
  </svg>
);

const ConstructionIcon = () => (
  <svg viewBox="0 0 64 64" fill="currentColor" className="w-14 h-14">
    <rect x="28" y="8" width="6" height="48" />
    <rect x="8" y="12" width="20" height="4" />
    <rect x="8" y="24" width="20" height="4" />
    <rect x="8" y="36" width="20" height="4" />
    <rect x="8" y="48" width="48" height="6" />
    <path d="M10 12V50" stroke="currentColor" strokeWidth="4" fill="none" />
    <path d="M6 6h26l-4 8H6z" />
    <rect x="36" y="20" width="18" height="28" rx="1" />
    <rect x="40" y="26" width="4" height="4" fill="white" />
    <rect x="46" y="26" width="4" height="4" fill="white" />
    <rect x="40" y="34" width="4" height="4" fill="white" />
    <rect x="46" y="34" width="4" height="4" fill="white" />
  </svg>
);

const ProjectMgmtIcon = () => (
  <svg viewBox="0 0 64 64" fill="currentColor" className="w-14 h-14">
    <circle cx="22" cy="14" r="10" />
    <path d="M4 52c0-10 8-18 18-18s18 8 18 18H4z" />
    <rect x="38" y="20" width="20" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="3" />
    <line x1="43" y1="28" x2="53" y2="28" stroke="currentColor" strokeWidth="2.5" />
    <line x1="43" y1="34" x2="49" y2="34" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="54" cy="18" r="6" />
    <path d="M51 18l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

const ManpowerIcon = () => (
  <svg viewBox="0 0 64 64" fill="currentColor" className="w-14 h-14">
    <path d="M16 10h32v6H16z" />
    <path d="M12 16h40l-4 8H16z" />
    <rect x="28" y="24" width="8" height="4" />
    <circle cx="32" cy="34" r="8" />
    <path d="M14 58c0-10 8-18 18-18s18 8 18 18H14z" />
  </svg>
);

/* ── Data ── */
const disciplines = [
  "Architectural",
  "Structural",
  "Mechanical",
  "Electrical",
  "Auxiliary",
  "Plumbing",
  "Fire Protection",
];

const services = [
  {
    id: "residential",
    label: "Residential",
    Icon: ResidentialIcon,
    body: "Residential design combines function and style, focusing on space, lighting, furniture, and technology. Success comes from strong collaboration between designers and homeowners.",
    href: "/services/residential",
  },
  {
    id: "commercial",
    label: "Commercial, Industrial & Institutional",
    Icon: CommercialIcon,
    body: "We create efficient commercial, industrial and institutional spaces that combine functionality, aesthetics, and branding to enhance productivity. Collaboration with clients ensures their identity is reflected in the design.",
    href: "/services/commercial",
  },
  {
    id: "interior",
    label: "Interior",
    Icon: InteriorIcon,
    body: "We create inviting, functional indoor spaces that blend aesthetics, practicality, and client preferences for personalised environments.",
    href: "/services/interior",
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    Icon: InfrastructureIcon,
    body: "We bring innovative engineering solutions to every infrastructure project, ensuring communities and businesses have the systems needed to thrive — built with sustainability, durability, and efficiency in mind.",
    href: "/services/infrastructure",
  },
  {
    id: "masterplan",
    label: "Masterplan Development",
    Icon: MasterplanIcon,
    body: "We combine creativity with technical expertise to create master plans that reflect your vision while addressing site-specific challenges and opportunities — aligned with regulatory requirements and environmental goals.",
    href: "/services/masterplan",
  },
  {
    id: "construction",
    label: "Construction and Development",
    Icon: ConstructionIcon,
    body: "We handle every aspect of construction with precision — from site preparation and excavation to final finishes. Our team ensures all safety, environmental, and quality control standards are upheld throughout.",
    href: "/services/construction",
  },
  {
    id: "project-management",
    label: "Project Management",
    Icon: ProjectMgmtIcon,
    body: "We utilise traditional project management principles combined with cutting-edge technology to keep projects on track. Our certified project managers handle complex multi-stakeholder projects seamlessly.",
    href: "/services/project-management",
  },
  {
    id: "manpower",
    label: "Manpower Supply",
    Icon: ManpowerIcon,
    body: "We are dedicated to providing qualified and experienced workers that meet your project needs. Our staffing solutions ensure projects maintain momentum, with the right manpower deployed at the right time.",
    href: "/services/manpower",
  },
];

/* ── Service card ── */
const ServiceCard = ({ service, delay }) => (
  <FadeIn direction="up" delay={delay} duration={1.2} amount={0.15}>
    <Link
      to={service.href}
      className="flex flex-col items-center text-center px-4 py-8 group cursor-pointer"
    >
      {/* Icon */}
      <div className="text-gray-800 mb-5 group-hover:text-[#00c700] transition-colors duration-300">
        <service.Icon />
      </div>
      {/* Title */}
      <h3 className="text-gray-900 font-bold text-[1rem] leading-snug mb-4 group-hover:text-[#00c700] transition-colors duration-300">
        {service.label}
      </h3>
      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.body}</p>
      {/* Learn more */}
      <span className="inline-flex items-center gap-2 text-[#00c700] text-xs font-bold tracking-[0.25em] uppercase border-b border-[#00c700]/40 pb-0.5 group-hover:border-[#00c700] transition-colors duration-200">
        Learn More
        <span className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform duration-200">→</span>
      </span>
    </Link>
  </FadeIn>
);

/* ── Main component ── */
const ServicesGrid = () => (
  <section className="w-full bg-[#f5f5f0] py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
    <div className="max-w-7xl mx-auto">

      {/* ── SECTION HEADING ── */}
      <FadeIn direction="up" duration={1.1} amount={0.3}>
        <h2 className="text-center text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-gray-900 tracking-wide uppercase mb-16">
          Our <span className="text-[#00c700]">Services</span>
        </h2>
      </FadeIn>

      {/* ── 3-COLUMN LAYOUT: sidebar + service grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">

        {/* ── LEFT SIDEBAR ── */}
        <FadeIn direction="left" duration={1.3} amount={0.2} className="lg:col-span-1">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Building/gear icon */}
            <div className="text-gray-800 mb-6">
              <svg viewBox="0 0 64 64" fill="currentColor" className="w-20 h-20 mx-auto lg:mx-0">
                <rect x="8" y="28" width="48" height="30" />
                <path d="M2 32L32 6l30 26H2z" />
                <rect x="24" y="38" width="16" height="20" fill="white" />
                <rect x="12" y="34" width="8" height="8" fill="white" />
                <rect x="44" y="34" width="8" height="8" fill="white" />
                {/* Gear overlay */}
                <circle cx="32" cy="24" r="6" fill="#00c700" />
                <path d="M29 18h6l1 3-3 1-3-1z" fill="#00c700" />
              </svg>
            </div>

            {/* Discipline list */}
            <ul className="flex flex-col gap-1.5 mb-7">
              {disciplines.map((d) => (
                <li key={d} className="flex items-center gap-2 justify-center lg:justify-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00c700] shrink-0" />
                  <span className="text-gray-700 font-medium text-sm">{d}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-500 text-sm leading-relaxed">
              By integrating architecture with engineering, we offer comprehensive
              design services that anticipate challenges early and deliver
              efficient, integrated solutions from first concept to final handover.
            </p>

            {/* Green rule */}
            <div className="mt-7 w-10 h-0.5 bg-[#00c700] mx-auto lg:mx-0" />
          </div>
        </FadeIn>

        {/* ── SERVICE CARDS — 2-col grid ── */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-0 divide-x-0 sm:divide-x divide-y divide-gray-200">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 0.07} />
          ))}
        </div>

      </div>
    </div>

    {/* ── DECORATIVE BLOBS (matching screenshot) ── */}
    <div className="pointer-events-none select-none absolute top-32 right-0 w-48 h-64 bg-gray-300/30 rounded-l-full hidden lg:block" />
    <div className="pointer-events-none select-none absolute bottom-16 left-0 w-40 h-56 bg-gray-300/30 rounded-r-full hidden lg:block" />
  </section>
);

export default ServicesGrid;

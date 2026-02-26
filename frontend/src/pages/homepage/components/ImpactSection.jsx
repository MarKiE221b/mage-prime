import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import imgPlanning  from "../../../assets/planning.jpg";
import imgBuildings from "../../../assets/buildings.jpg";
import imgWorkers   from "../../../assets/workers.jpg";
import imgCountries from "../../../assets/countries.jpg";
import FadeIn from "../../../components/FadeIn";

const impacts = [
  {
    id: "consultants",
    stat: "50+",
    label: "Our Expertise",
    heading: "Experienced\nConsultants",
    body: "Seasoned professionals guiding every phase of your project — from feasibility and planning through to final handover. Our consultants bring decades of industry knowledge to the table.",
    image: imgPlanning,
    imageAccent: "#00c700",
    imageLabel: "CONSULTING EXCELLENCE",
    flip: false,
  },
  {
    id: "projects",
    stat: "200+",
    label: "Proven Track Record",
    heading: "Successful\nProjects",
    body: "A consistent record of on-time, within-budget delivery across commercial, industrial, and civil sectors — every project a testament to our commitment to quality.",
    image: imgBuildings,
    imageAccent: "#ffffff",
    imageLabel: "PROJECT DELIVERY",
    flip: true,
  },
  {
    id: "employees",
    stat: "120+",
    label: "Our People",
    heading: "Expert\nEmployees",
    body: "A dedicated crew of certified engineers, project managers, and skilled tradespeople united by one purpose — building structures that stand the test of time.",
    image: imgWorkers,
    imageAccent: "#00c700",
    imageLabel: "SKILLED WORKFORCE",
    flip: false,
  },
  {
    id: "countries",
    stat: "15+",
    label: "Global Reach",
    heading: "Countries\nServed",
    body: "An international footprint delivering world-class construction standards across borders. Wherever your vision takes root, we have the reach to build it.",
    image: imgCountries,
    imageAccent: "#00c700",
    imageLabel: "WORLDWIDE IMPACT",
    flip: true,
  },
];

/* ── single animated number counter ── */
const useCounter = (target, inView, duration = 1400) => {
  const [count, setCount] = React.useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;
    const numeric = parseInt(target, 10);
    const steps = 60;
    const increment = numeric / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= numeric) {
        setCount(numeric);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, target, duration]);

  return count;
};

/* ── individual impact block ── */
const ImpactBlock = ({ impact, index }) => {
  // Framer Motion's useInView to trigger the counter
  const blockRef = useRef(null);
  const inView = useInView(blockRef, { once: true, amount: 0.2 });

  const numericPart = impact.stat.replace(/\D/g, "");
  const suffix = impact.stat.replace(/\d/g, "");
  const counted = useCounter(numericPart, inView);

  // direction logic: image enters from the side it sits on, text from the opposite
  const imgDir  = impact.flip ? "right" : "left";
  const textDir = impact.flip ? "left"  : "right";

  return (
    <div
      ref={blockRef}
      className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-20 lg:py-28 px-6 md:px-16 lg:px-24 ${
        index % 2 !== 0 ? "bg-gray-50" : "bg-white"
      } border-t border-gray-100`}
    >
      {/* ── IMAGE PANEL ── */}
      <FadeIn
        direction={imgDir}
        duration={1.4}
        amount={0.2}
        className={`relative w-full lg:w-[48%] aspect-4/3 rounded-2xl overflow-hidden shadow-2xl ${
          impact.flip ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <img
          src={impact.image}
          alt={impact.imageLabel}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg, transparent, transparent 39px, rgba(255,255,255,.15) 39px, rgba(255,255,255,.15) 40px
            ), repeating-linear-gradient(
              90deg, transparent, transparent 39px, rgba(255,255,255,.15) 39px, rgba(255,255,255,.15) 40px
            )`,
          }}
        />
        <div
          className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full blur-3xl opacity-20"
          style={{ background: impact.imageAccent }}
        />
        <div className="absolute top-5 left-5">
          <span
            className="text-[10px] font-bold tracking-[0.3em] px-3 py-1 rounded-sm backdrop-blur-sm bg-black/30"
            style={{ color: impact.imageAccent, border: `1px solid ${impact.imageAccent}` }}
          >
            {impact.imageLabel}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
          <span className="text-[11rem] font-black leading-none opacity-10 text-white">
            {counted}{suffix}
          </span>
        </div>
      </FadeIn>

      {/* ── TEXT PANEL ── */}
      <FadeIn
        direction={textDir}
        delay={0.2}
        duration={1.4}
        amount={0.2}
        className={`w-full lg:w-[46%] flex flex-col justify-center ${
          impact.flip ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <p className="text-[#00c700] text-xs font-bold tracking-[0.4em] uppercase mb-5">
          {impact.label}
        </p>
        <div className="flex items-end gap-2 mb-4">
          <span className="text-[clamp(4rem,8vw,7rem)] font-black leading-none text-[#00c700]">
            {counted}
          </span>
          <span className="text-[clamp(3rem,6vw,5rem)] font-black leading-none text-black/20 pb-2">
            {suffix}
          </span>
        </div>
        <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-light text-gray-900 leading-tight mb-6 whitespace-pre-line">
          {impact.heading}
        </h2>
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-10 bg-[#00c700]" />
          <div className="h-px flex-1 bg-gray-200" />
        </div>
        <p className="text-gray-500 text-base leading-relaxed lg:pl-12 max-w-md">
          {impact.body}
        </p>
        <a
          href={`#${impact.id}`}
          className="group inline-flex items-center gap-3 mt-8 text-xs font-bold tracking-[0.3em] uppercase text-gray-900 border-b-2 border-[#00c700] pb-1 self-start hover:text-[#00c700] transition-colors duration-300"
        >
          Learn More
          <span className="inline-block transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 text-[#00c700]">
            →
          </span>
        </a>
      </FadeIn>
    </div>
  );
};

/* ── section wrapper ── */
const ImpactSection = () => {
  return (
    <section id="impact">
      {/* Section intro */}
      <div className="bg-white px-6 md:px-16 lg:px-24 pt-24 pb-4">
        <FadeIn direction="up" duration={1.1}>
          <p className="text-[#00c700] text-xs font-bold tracking-[0.4em] uppercase mb-4">
            Why Prime Mage
          </p>
        </FadeIn>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <FadeIn direction="up" delay={0.12} duration={1.2}>
            <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-light text-gray-900 leading-tight max-w-xl">
              Numbers That Tell <br />
              <span className="hero-script text-[clamp(2.5rem,5.5vw,4.5rem)]">Our Story.</span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.25} duration={1.2}>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed lg:text-right">
              Every figure below represents real people, real structures, and real communities — shaped by Prime Mage Construction.
            </p>
          </FadeIn>
        </div>
      </div>

      {impacts.map((impact, i) => (
        <ImpactBlock key={impact.id} impact={impact} index={i} />
      ))}
    </section>
  );
};

export default ImpactSection;

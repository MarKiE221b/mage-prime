import React, { useState } from "react";
import FadeIn from "../../../components/FadeIn";

/* ── Import all works images ── */
import residentialWork1  from "../../../assets/works/residential_work.png";
import residentialWork2  from "../../../assets/works/residential_work (2).png";
import residentialWork3  from "../../../assets/works/residential_work (3).png";
import interiorWork1     from "../../../assets/works/interior_work.png";
import interiorWork2     from "../../../assets/works/interior_work (2).png";
import interiorWork3     from "../../../assets/works/interior_work (3).png";
import masterplanWork1   from "../../../assets/works/masterplan_work.png";
import masterplanWork2   from "../../../assets/works/masterplan_work (2).png";

/* ── Project data ── */
const projects = [
  {
    id: 1,
    title: "Private Villa — Palm Jumeirah",
    category: "Residential",
    description:
      "A 6-bedroom beachfront villa with bespoke interiors, smart-home integration, and seamless indoor-outdoor living spaces.",
    image: residentialWork1,
  },
  {
    id: 2,
    title: "Townhouse Development — Meydan",
    category: "Residential",
    description:
      "Design and delivery of 12 contemporary townhouses with cohesive landscaping and community amenities.",
    image: residentialWork2,
  },
  {
    id: 3,
    title: "Penthouse Fit-Out — Downtown Dubai",
    category: "Residential",
    description:
      "Full fit-out of a duplex penthouse featuring custom millwork, marble surfaces, and a rooftop terrace design.",
    image: residentialWork3,
  },
  {
    id: 4,
    title: "Contemporary Living Space — Jumeirah",
    category: "Interior Design",
    description:
      "A full residential interior transformation blending warm natural materials with clean modern lines.",
    image: interiorWork1,
  },
  {
    id: 5,
    title: "Luxury Office Interior — DIFC",
    category: "Interior Design",
    description:
      "Corporate office fit-out for a financial services firm, combining open-plan flexibility with executive privacy.",
    image: interiorWork2,
  },
  {
    id: 6,
    title: "Boutique Hotel Suite — Dubai Marina",
    category: "Interior Design",
    description:
      "Bespoke suite interiors for a boutique property, balancing intimacy and luxury across 24 unique rooms.",
    image: interiorWork3,
  },
  {
    id: 7,
    title: "Mixed-Use District — Al Quoz",
    category: "Masterplan",
    description:
      "A 15-hectare masterplan integrating retail, hospitality, and residential uses around a central civic spine.",
    image: masterplanWork1,
  },
  {
    id: 8,
    title: "Waterfront Community — Port Rashid",
    category: "Masterplan",
    description:
      "Strategic masterplanning for a mixed-income waterfront neighbourhood with public promenades and marina access.",
    image: masterplanWork2,
  },
];

const ALL = "All";
const categories = [ALL, "Residential", "Interior Design", "Masterplan"];

/* ── Single project card ── */
const ProjectCard = ({ project, delay }) => (
  <FadeIn direction="up" delay={delay} duration={1.1} amount={0.12}>
    <div className="group overflow-hidden bg-white border border-gray-100 hover:border-[#00c700] transition-colors duration-300 shadow-sm hover:shadow-md">
      {/* Image */}
      <div className="relative overflow-hidden aspect-4/3">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <span className="absolute top-3 left-3 bg-[#00c700] text-black text-[10px] font-bold tracking-[0.25em] uppercase px-2.5 py-1">
          {project.category}
        </span>
      </div>
      {/* Text */}
      <div className="p-6">
        <h3 className="text-gray-900 font-semibold text-[1rem] leading-snug mb-3">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  </FadeIn>
);

const ProjectsGrid = () => {
  const [active, setActive] = useState(ALL);

  const filtered =
    active === ALL ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <FadeIn direction="up" duration={1.1} amount={0.25}>
          <p className="text-[#00c700] text-xs font-semibold tracking-[0.35em] uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-light text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-10 h-0.5 bg-[#00c700] mb-10" />
        </FadeIn>

        {/* Category filter pills */}
        <FadeIn direction="up" delay={0.1} duration={1} amount={0.2}>
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-250 border ${
                  active === cat
                    ? "bg-[#00c700] border-[#00c700] text-black"
                    : "bg-white border-gray-200 text-gray-500 hover:border-[#00c700] hover:text-[#00c700]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;

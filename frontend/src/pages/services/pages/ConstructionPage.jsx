import React from "react";
import ServicePageTemplate from "../components/ServicePageTemplate";
import heroImg from "../../../assets/construction.jpg";

const service = {
  label: "Construction & Development",
  tagline: "Our Services · Construction",
  description:
    "Precision-built structures, delivered on time and on budget — with safety, quality, and sustainability at the core.",
  heroImage: heroImg,
  overview:
    "We handle every aspect of construction with precision — from site preparation and excavation to structural works, MEP installation, and final finishes. Our team rigorously upholds safety, environmental, and quality control standards at every stage, delivering robust, durable built environments that stand the test of time and exceed client expectations.",
  bullets: [
    "Site preparation, demolition, and excavation",
    "Structural works — concrete, steel, and masonry",
    "MEP coordination and installation",
    "Façade and cladding systems",
    "Final fit-out and finishing works",
    "Quality assurance and handover management",
  ],
  projects: [
    {
      title: "Mixed-Use Tower — Dubai Marina",
      category: "Construction",
      description:
        "Full construction of a 35-storey mixed-use tower including basement, podium retail, residential floors, and rooftop amenities.",
    },
    {
      title: "Retail Mall Expansion — Al Ain",
      category: "Construction",
      description:
        "Structural extension and full fit-out of a 40,000 m² retail mall expansion delivered in two live-site phases.",
    },
    {
      title: "Industrial Complex — KIZAD Abu Dhabi",
      category: "Industrial Construction",
      description:
        "Design-build of a multi-unit industrial complex including heavy-duty floors, overhead cranes, and integrated utilities.",
    },
  ],
};

const ConstructionPage = () => <ServicePageTemplate service={service} />;
export default ConstructionPage;

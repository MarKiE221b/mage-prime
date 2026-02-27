import React from "react";
import ServicePageTemplate from "../components/ServicePageTemplate";
import heroImg from "../../../assets/masterplan.jpg";

const service = {
  label: "Masterplan Development",
  tagline: "Our Services · Masterplan",
  description:
    "Vision-led planning that shapes entire communities, districts, and destinations from the ground up.",
  heroImage: heroImg,
  overview:
    "Masterplan development requires the rare ability to think at the scale of cities while designing for the experience of individuals. We combine creativity with rigorous technical expertise to create master plans that reflect your vision, respond to site-specific opportunities and constraints, and satisfy regulatory, environmental, and community requirements — setting the framework that all future development will build upon.",
  bullets: [
    "Strategic land-use planning and zoning",
    "Mixed-use community masterplanning",
    "Feasibility studies and development frameworks",
    "Environmental and sustainability integration",
    "Regulatory compliance and authority liaison",
    "Phasing strategies and infrastructure sequencing",
  ],
  projects: [
    {
      title: "Mixed-Use District Masterplan — Dubai Creek",
      category: "Masterplan",
      description:
        "A 1.2 million m² mixed-use masterplan integrating residential, retail, hospitality, and public open space along the creek.",
    },
    {
      title: "Eco-Residential Community — Ajman",
      category: "Masterplan",
      description:
        "A sustainability-first residential masterplan for 800 homes with solar integration, green corridors, and cycle infrastructure.",
    },
    {
      title: "Township Framework Plan — Northern Emirates",
      category: "Urban Planning",
      description:
        "Phased development framework for a 250-hectare township including land-use allocation, transport nodes, and servicing.",
    },
  ],
};

const MasterplanPage = () => <ServicePageTemplate service={service} />;
export default MasterplanPage;

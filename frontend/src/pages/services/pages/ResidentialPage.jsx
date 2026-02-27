import React from "react";
import ServicePageTemplate from "../components/ServicePageTemplate";
import heroImg from "../../../assets/residential.jpg";

const service = {
  label: "Residential",
  tagline: "Our Services · Residential",
  description:
    "Creating homes that are functional, beautiful, and deeply personal — designed around the way you live.",
  heroImage: heroImg,
  overview:
    "Residential design combines function and style, with careful attention to space planning, lighting, materials, and the lifestyle of every homeowner. Our team works closely with clients from initial concept through to final handover, ensuring each residence is a true reflection of the people who call it home.",
  bullets: [
    "Custom residential design and space planning",
    "Lighting, material, and furniture specification",
    "Collaboration with structural and MEP engineers",
    "Interior fit-out and finishing coordination",
    "Smart-home and technology integration",
    "Project management from concept to completion",
  ],
  projects: [
    {
      title: "Private Villa — Palm Jumeirah",
      category: "Residential",
      description:
        "A 6-bedroom beachfront villa with bespoke interiors, smart-home integration, and seamless indoor-outdoor living spaces.",
    },
    {
      title: "Penthouse Fit-Out — Downtown Dubai",
      category: "Residential",
      description:
        "Full fit-out of a duplex penthouse featuring custom millwork, marble surfaces, and a rooftop terrace design.",
    },
    {
      title: "Townhouse Development — Meydan",
      category: "Residential",
      description:
        "Design and delivery of 12 contemporary townhouses with cohesive landscaping and community amenities.",
    },
  ],
};

const ResidentialPage = () => <ServicePageTemplate service={service} />;
export default ResidentialPage;

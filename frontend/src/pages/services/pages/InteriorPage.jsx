import React from "react";
import ServicePageTemplate from "../components/ServicePageTemplate";
import heroImg from "../../../assets/interior.jpg";

const service = {
  label: "Interior Design",
  tagline: "Our Services · Interior",
  description:
    "Transforming spaces into inviting, functional environments that reflect the identity and aspirations of their occupants.",
  heroImage: heroImg,
  overview:
    "Our interior design team creates spaces that are as practical as they are beautiful. We blend aesthetics, ergonomics, and client preferences to produce environments that feel both purposeful and personal. From concept moodboards and material selection through to furniture procurement and installation oversight, we manage every detail of the interior journey.",
  bullets: [
    "Space planning and interior concept development",
    "Material, finishes, and FF&E specification",
    "Lighting design and atmosphere creation",
    "Custom joinery and bespoke furniture design",
    "Art curation and styling",
    "Procurement coordination and site supervision",
  ],
  projects: [
    {
      title: "Luxury Apartment Interior — JBR",
      category: "Interior",
      description:
        "Complete interior design for a 3-bedroom beachfront apartment, featuring custom cabinetry, curated art, and layered lighting.",
    },
    {
      title: "Boutique Hotel Lobby — DIFC",
      category: "Hospitality",
      description:
        "A dramatic reception and lobby concept blending Middle Eastern geometry with contemporary materials and warm lighting.",
    },
    {
      title: "Executive Board Suite — Abu Dhabi",
      category: "Commercial Interior",
      description:
        "A refined boardroom and executive suite interior with acoustic panels, integrated AV, and bespoke furniture.",
    },
  ],
};

const InteriorPage = () => <ServicePageTemplate service={service} />;
export default InteriorPage;

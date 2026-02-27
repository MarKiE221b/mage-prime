import React from "react";
import ServicePageTemplate from "../components/ServicePageTemplate";
import heroImg from "../../../assets/industrial.jpg";

const service = {
  label: "Commercial, Industrial & Institutional",
  tagline: "Our Services · Commercial",
  description:
    "Efficient, high-performance spaces built to support commercial activity, industrial operations, and public institutions.",
  heroImage: heroImg,
  overview:
    "We create commercial, industrial, and institutional spaces that combine functionality, aesthetics, and branding to enhance productivity and identity. From corporate headquarters and retail environments to manufacturing facilities and public buildings, our integrated design-to-delivery approach ensures every detail serves the client's operational and strategic goals.",
  bullets: [
    "Corporate office and co-working space design",
    "Retail and hospitality environments",
    "Industrial facility planning and fit-out",
    "Institutional buildings — schools, clinics, government",
    "Branding integration within architectural design",
    "Compliance with local authority requirements",
  ],
  projects: [
    {
      title: "Corporate HQ Fit-Out — Business Bay",
      category: "Commercial",
      description:
        "A 15-storey headquarters fit-out integrating brand identity, open-plan collaboration zones, and executive suites.",
    },
    {
      title: "Logistics Warehouse — Jebel Ali",
      category: "Industrial",
      description:
        "Design and construction of a 25,000 m² warehousing facility with optimised flow, racking systems, and loading bays.",
    },
    {
      title: "Community Health Centre — Sharjah",
      category: "Institutional",
      description:
        "A purpose-built outpatient clinic integrating clinical workflow, patient comfort, and accessibility standards.",
    },
  ],
};

const CommercialPage = () => <ServicePageTemplate service={service} />;
export default CommercialPage;

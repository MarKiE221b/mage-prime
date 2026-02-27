import React from "react";
import ServicePageTemplate from "../components/ServicePageTemplate";
import heroImg from "../../../assets/companyTeam.png";

const service = {
  label: "Manpower Supply",
  tagline: "Our Services · Manpower",
  description:
    "Qualified, experienced professionals and skilled labour — deployed precisely when and where your project needs them.",
  heroImage: heroImg,
  overview:
    "We are dedicated to providing qualified and experienced workers that meet the precise demands of your project. Our staffing solutions ensure projects maintain momentum at every stage — with the right people, the right skills, and the right numbers deployed at exactly the right time. From skilled tradespeople to technical supervisors, our manpower supply is reliable, vetted, and ready to perform.",
  bullets: [
    "Skilled trades — civil, MEP, finishing",
    "Technical supervisors and site engineers",
    "Short-term, long-term, and project-based contracts",
    "Full HR, payroll, and compliance management",
    "Health, safety, and induction training",
    "Rapid mobilisation and replacement guarantees",
  ],
  projects: [
    {
      title: "Manpower Mobilisation — Expo Legacy District",
      category: "Manpower",
      description:
        "Mobilisation of 180 skilled workers across civil, MEP, and finishing trades for a large-scale post-Expo retrofit programme.",
    },
    {
      title: "Ongoing Site Labour — Dubai South",
      category: "Manpower",
      description:
        "Continued supply of 60+ site operatives across multiple residential and commercial developments in Dubai South.",
    },
    {
      title: "Technical Staffing — Abu Dhabi Utility Project",
      category: "Technical Staffing",
      description:
        "Placement of 25 mechanical and electrical supervisors for a 2-year utilities infrastructure contract.",
    },
  ],
};

const ManpowerPage = () => <ServicePageTemplate service={service} />;
export default ManpowerPage;

import React from "react";
import ServicePageTemplate from "../components/ServicePageTemplate";
import heroImg from "../../../assets/project-management.jpg";

const service = {
  label: "Project Management",
  tagline: "Our Services · Project Management",
  description:
    "Expert oversight from kickoff to closeout — keeping your project on schedule, within budget, and to the highest standard.",
  heroImage: heroImg,
  overview:
    "We utilise a proven combination of traditional project management principles and cutting-edge technology to keep complex projects on track. Our certified project managers are skilled in coordinating multiple stakeholders, managing risk, and resolving challenges decisively — ensuring every phase of your project is executed seamlessly and every commitment to the client is honoured.",
  bullets: [
    "Project planning, scheduling, and milestone tracking",
    "Budget management and cost control",
    "Stakeholder coordination and reporting",
    "Risk identification and mitigation strategies",
    "Contractor and supplier management",
    "Handover coordination and post-completion support",
  ],
  projects: [
    {
      title: "Hotel Development PMC — Ras Al Khaimah",
      category: "Project Management",
      description:
        "Project management consultancy for a 5-star, 320-key beachfront hotel from design stage through to opening.",
    },
    {
      title: "Government Campus — Abu Dhabi",
      category: "Project Management",
      description:
        "End-to-end PMC services for a 6-building government campus, coordinating 14 contractors across a 3-year programme.",
    },
    {
      title: "Retail Rollout Programme — UAE & KSA",
      category: "Programme Management",
      description:
        "Programme management of a 22-store retail rollout across the UAE and Saudi Arabia, delivered in 14 months.",
    },
  ],
};

const ProjectManagementPage = () => <ServicePageTemplate service={service} />;
export default ProjectManagementPage;

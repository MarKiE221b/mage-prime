import React from "react";
import ServicePageTemplate from "../components/ServicePageTemplate";
import heroImg from "../../../assets/infra.jpg";

const service = {
  label: "Infrastructure",
  tagline: "Our Services · Infrastructure",
  description:
    "Building the foundations that communities and cities rely on — engineered for durability, efficiency, and long-term sustainability.",
  heroImage: heroImg,
  overview:
    "We bring innovative engineering solutions to every infrastructure project, ensuring that communities and businesses have the systems needed to thrive. Our work spans roads and bridges, utilities, drainage, and public realm improvements — always carried out with long-term sustainability, environmental stewardship, and best-practice standards in mind.",
  bullets: [
    "Road, highway, and bridge design and construction",
    "Water supply and drainage engineering",
    "Utility networks — power, telecoms, stormwater",
    "Public realm and streetscape improvements",
    "Environmental impact assessment and mitigation",
    "Long-term asset lifecycle planning",
  ],
  projects: [
    {
      title: "Arterial Road Upgrade — Dubai South",
      category: "Infrastructure",
      description:
        "Design and construction of 8 km of dual carriageway including service roads, signalisation, and utility diversions.",
    },
    {
      title: "Stormwater Management System — RAK",
      category: "Infrastructure",
      description:
        "A comprehensive stormwater drainage network protecting a 400-hectare development from flash flood risk.",
    },
    {
      title: "Public Realm Upgrade — Sharjah Waterfront",
      category: "Public Realm",
      description:
        "Landscaping, pedestrian walkways, lighting, and utility upgrades along a 2 km waterfront promenade.",
    },
  ],
};

const InfrastructurePage = () => <ServicePageTemplate service={service} />;
export default InfrastructurePage;

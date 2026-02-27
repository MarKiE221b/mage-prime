import React from "react";
import ServicesHero from "./components/ServicesHero";
import ServicesGrid from "./components/ServicesGrid";

const ServicesPage = () => {
  return (
    <main className="pt-20">
      <ServicesHero />
      <ServicesGrid />
    </main>
  );
};

export default ServicesPage;

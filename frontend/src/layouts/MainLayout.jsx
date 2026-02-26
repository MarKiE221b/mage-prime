import React from "react";
import { Outlet } from "react-router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";

export const MainLayout = () => {
  return (
    <SmoothScroll>
      <Navigation />
      <Outlet />
      <Footer />
    </SmoothScroll>
  );
};

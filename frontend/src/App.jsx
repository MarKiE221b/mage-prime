import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import PageLoader from "./components/PageLoader";
import ScrollToTop from "./components/ScrollToTop";

const Homepage    = lazy(() => import("./pages/homepage/Homepage"));
const AboutUsPage  = lazy(() => import("./pages/about-us/AboutUsPage"));
const PrivacyPage  = lazy(() => import("./pages/privacy/PrivacyPage"));
const TeamsPage    = lazy(() => import("./pages/teams/TeamsPage"));
const ServicesPage = lazy(() => import("./pages/services/ServicesPage"));

// Individual service pages
const ResidentialPage      = lazy(() => import("./pages/services/pages/ResidentialPage"));
const CommercialPage       = lazy(() => import("./pages/services/pages/CommercialPage"));
const InteriorPage         = lazy(() => import("./pages/services/pages/InteriorPage"));
const InfrastructurePage   = lazy(() => import("./pages/services/pages/InfrastructurePage"));
const MasterplanPage       = lazy(() => import("./pages/services/pages/MasterplanPage"));
const ConstructionPage     = lazy(() => import("./pages/services/pages/ConstructionPage"));
const ProjectManagementPage = lazy(() => import("./pages/services/pages/ProjectManagementPage"));
const ManpowerPage         = lazy(() => import("./pages/services/pages/ManpowerPage"));
const ContactUsPage        = lazy(() => import("./pages/contact/ContactUsPage"));
const CareersPage          = lazy(() => import("./pages/careers/CareersPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="about-us" element={<AboutUsPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="teams" element={<TeamsPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/residential"       element={<ResidentialPage />} />
            <Route path="services/commercial"        element={<CommercialPage />} />
            <Route path="services/interior"          element={<InteriorPage />} />
            <Route path="services/infrastructure"    element={<InfrastructurePage />} />
            <Route path="services/masterplan"        element={<MasterplanPage />} />
            <Route path="services/construction"      element={<ConstructionPage />} />
            <Route path="services/project-management" element={<ProjectManagementPage />} />
            <Route path="services/manpower"          element={<ManpowerPage />} />
            <Route path="contact"                     element={<ContactUsPage />} />
            <Route path="careers"                     element={<CareersPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

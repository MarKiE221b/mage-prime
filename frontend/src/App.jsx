import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import PageLoader from "./components/PageLoader";
import ScrollToTop from "./components/ScrollToTop";

const Homepage   = lazy(() => import("./pages/homepage/Homepage"));
const AboutUsPage = lazy(() => import("./pages/about-us/AboutUsPage"));
const PrivacyPage = lazy(() => import("./pages/privacy/PrivacyPage"));
const TeamsPage   = lazy(() => import("./pages/teams/TeamsPage"));

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
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

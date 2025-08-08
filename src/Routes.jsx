import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import AboutPage from './pages/about-professional-story-philosophy';
import CreativeTechnicalPlayground from './pages/404-creative-technical-playground';
import HomepagePremiumDeveloperPortfolio from './pages/homepage-premium-developer-portfolio';
import ResourcesPage from './pages/resources-professional-download-center';
import ProjectsPage from './pages/projects-immersive-case-study-gallery';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<CreativeTechnicalPlayground />} />
        <Route path="/about-professional-story-philosophy" element={<AboutPage />} />
        <Route path="/404-creative-technical-playground" element={<CreativeTechnicalPlayground />} />
        <Route path="/homepage-premium-developer-portfolio" element={<HomepagePremiumDeveloperPortfolio />} />
        <Route path="/resources-professional-download-center" element={<ResourcesPage />} />
        <Route path="/projects-immersive-case-study-gallery" element={<ProjectsPage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
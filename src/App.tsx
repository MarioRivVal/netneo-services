import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DesktopNav from "./layouts/DesktopNav";
import MobileNav from "./layouts/MobileNav";
import Footer from "./layouts/Footer";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NoFound";

import Privacy from "./pages/legal/Privacy";
import Cookies from "./pages/legal/Cookies";
import Legal from "./pages/legal/Legal";

import CookieBanner from "./components/CookieBanner";
import { trackPageView } from "./lib/ga";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    trackPageView();
  }, [location.pathname]);

  return (
    <>
      {isMobile ? <MobileNav /> : <DesktopNav />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </>
  );
}

export default App;

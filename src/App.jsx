import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoadingPage from "./components/LoadingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Error from "./pages/Error/Page"; // Ensure Error component exists

import Home from "./pages/Home/Page";
import About from "./pages/About/Page";
import Services from "./pages/Services/Page";
import SingleService from "./pages/SingleService/Page";
import Team from "./pages/Team/Page";
import Contact from "./pages/Contact/Page";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

// The main application component
const MainApp = ({ loading, setLoading, progress, setProgress }) => {
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setProgress(30);

    const timer = setTimeout(() => {
      setLoading(false);
      setProgress(100);
    }, 1000); // Reduced loading time for better UX

    return () => clearTimeout(timer);
  }, [location]);

  if (loading) return <LoadingPage />;

  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceid" element={<SingleService />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/load" element={<LoadingPage />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

function App() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <MainApp
        loading={loading}
        setLoading={setLoading}
        progress={progress}
        setProgress={setProgress}
      />
    </BrowserRouter>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoadingPage from "./components/LoadingPage"; // Ensure the correct import path

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton"; // New component for the scroll-to-top button

import Home from "./pages/Home/Page";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Auto-scroll logic (if needed)
const AutoScroll = () => {
  // Add your auto-scroll logic here if required
  return null;
};

// The component wrapped inside <BrowserRouter>
const MainApp = ({ loading, setLoading, progress, setProgress }) => {
  const location = useLocation();

  useEffect(() => {
    // Trigger loading on route change
    setLoading(true);
    setProgress(30); // Start the loading bar

    const timer = setTimeout(() => {
      setLoading(false);
      setProgress(100); // Complete the loading bar
    }, 2000); // Simulate loading for 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [location, setLoading, setProgress]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <Header />
      <ScrollToTop />
      <AutoScroll />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
      <ScrollToTopButton /> {/* Add the scroll-to-top button here */}
    </div>
  );
};

function App() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Ensure ScrollToTop is inside BrowserRouter */}
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

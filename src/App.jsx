import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Common/ScrollToTop";
import Loader from "./components/Loader/Loader";
import MouseGlow from "./components/MouseGlow/MouseGlow";
import ParticleBackground from "./components/ParticleBackground/ParticleBackground";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">

      {/* Top Left Glow */}
      <div className="fixed -left-40 -top-40 -z-10 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl"></div>

      {/* Right Side Glow */}
      <div className="fixed -right-40 top-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl"></div>

      {/* Bottom Glow */}
      <div className="fixed bottom-0 left-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-3xl"></div>

      <ParticleBackground />
      <MouseGlow />
       
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>

    </div>
  );
}

export default App;
import React from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import Skills from "./pages/Skills";
import EducationPage from "./pages/EducationPage";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0d0d14] text-white">
      <section id="navbar">
        {/* Navbar */}
        <Navbar />
      </section>

      <section id="homepage">
        {/* Homepage */}
        <HomePage />
      </section>

      <section id="about">
        {/* ABout Me */}
        <AboutPage />
      </section>

      <section id="education">
        {/* Education */}
        <EducationPage />
      </section>

      {/* Skills */}
      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <ProjectPage />
      </section>

      <FooterComponent />
    </div>
  );
}

export default App;

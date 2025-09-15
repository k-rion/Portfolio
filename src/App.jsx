import React from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <div>
      <section id="navbar">
        {/* Navbar */}
        <Navbar />
      </section>

      <section id="homepage">
        {/* Homepage */}
        <HomePage />
      </section>

      <section id="aboutme">
        {/* ABout Me */}
        <AboutPage />
      </section>

      <section id="projects">
        <ProjectPage />
      </section>
    </div>
  );
}

export default App;

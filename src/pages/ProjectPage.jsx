import React from "react";
import ProjectCards from "../components/ProjectCards";

export default function ProjectPage() {
  return (
    <div className="flex flex-col px-6 py-16 text-white mx-auto min-h-screen w-[80%] max-w-7xl">
      <div className="flex flex-col mb-5 py-6 text-start">
        <h1 className="inline-block mb-4 text-3xl font-bold">My Projects</h1>
        <p className="text-base">
          Here are some of the projects I've worked on. Each project represents
          unique challenges and creative solutions.
        </p>
      </div>
      <div>
        <ProjectCards />
      </div>
    </div>
  );
}
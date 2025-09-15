import React, { useState } from "react";
import { projects } from "../data/projectData";

export default function ProjectCards() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Group tags by type
  const groupTags = (tags) => {
    const groups = {};
    tags.forEach((tag) => {
      if (!groups[tag.type]) groups[tag.type] = [];
      groups[tag.type].push(tag);
    });
    return groups;
  };

  return (
    <>
      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {["All Projects", "Web Development", "Game Development"].map(
          (category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`btn ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                  : "border border-blue-400 text-blue-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:text-white"
              }`}
            >
              {category}
            </button>
          )
        )}
      </div>

      {/* Project Cards */}
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {filteredProjects.map((project) => {
          const grouped = groupTags(project.tags);

          return (
            <div
              key={project.id}
              className="overflow-hidden ease-in-out card bg-base-100 w-96 group max-w-sm text-white rounded-2xl shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition duration-300"
            >
              {/* Image */}
              <figure>
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-48 transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </figure>

              {/* Body */}
              <div className="flex flex-col p-5 card-body">
                <h2 className="mb-2 text-lg font-semibold card-title">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-400">{project.description}</p>

                {/* Grouped Tags */}
                <div className="mt-4 space-y-3">
                  {Object.keys(grouped).map((type) => (
                    <div key={type}>
                      <p className="mb-1 text-xs font-semibold text-gray-500">
                        {type}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {grouped[type].map((tag, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 bg-gray-800 text-gray-200 px-3 py-1.5 rounded-lg text-sm font-medium"
                          >
                            {/* If SVG class is provided */}
                            {tag.svg && (
                              <img
                                src={tag.svg}
                                alt={tag.name}
                                className="object-contain w-5 h-5"
                              />
                            )}

                            {/* If Icon class is provided */}
                            {tag.icon && (
                              <i className={`${tag.icon} text-xl`}></i>
                            )}
                            <span>{tag.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Link Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 rounded-lg btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

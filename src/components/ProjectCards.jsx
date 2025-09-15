import React, { useState } from "react";
import { projects } from "../data/projectData";

export default function ProjectCards() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
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
      <div className="flex flex-wrap gap-2 mb-6">
        {["All", "Web Applications", "Game Development"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`btn ${
              selectedCategory === category ? "btn-primary" : "btn-outline"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="flex flex-wrap justify-center gap-12 mt-10">
        {filteredProjects.map((project) => {
          const grouped = groupTags(project.tags);

          return (
            <div
              key={project.id}
              className="card bg-base-100 w-80 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden"
            >
              {/* Image */}
              <figure>
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />
              </figure>

              {/* Body */}
              <div className="card-body p-5 flex flex-col">
                <h2 className="card-title text-lg font-semibold mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-sm">{project.description}</p>

                {/* Grouped Tags */}
                <div className="mt-4 space-y-3">
                  {Object.keys(grouped).map((type) => (
                    <div key={type}>
                      <p className="text-xs font-semibold text-gray-500 mb-1">
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
                                className="w-5 h-5 object-contain"
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
                  className="btn btn-primary rounded-lg mt-5"
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

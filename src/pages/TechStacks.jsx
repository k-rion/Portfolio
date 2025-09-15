import React from "react";

export default function TechStacks() {
  const techStacks = [
    { name: "Java", icon: "devicon-java-plain" },
    { name: "C#", icon: "devicon-csharp-plain "},
    { name: "HTML5", icon: "devicon-html5-plain" },
    { name: "CSS3", icon: "devicon-css3-plain" },
    { name: "React", icon: "devicon-react-original" },
    { name: "Tailwind", icon: "devicon-tailwindcss-original" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "Git", icon: "devicon-git-plain" },
  ];

  return (
    <section>
      <div className="min-h-screen px-6 py-20 mx-auto max-w-7xl ">
        {/* Title */}
        <h1 className="title-text">
          Tech <span className="text-primary">Stack</span>
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
          {techStacks.map((tech, indx) => (
            <div
              key={indx}
              className="flex flex-col items-center justify-center bg-[#1a1a27] p-6 rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all hover:scale-105 duration-300 max-w-52"
            >
              {/* Render Icon or SVG */}
              {tech.icon ? (
                <i className={`${tech.icon} text-5xl text-primary mb-4`}></i>
              ) : (
                <img
                  src={tech.svg}
                  alt={tech.name}
                  className="mb-4 w-14 h-14"
                />
              )}
              <span className="text-lg font-semibold">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

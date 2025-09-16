import React, { useState } from "react";

// Imported SVG (Languages Category)
import CSS from "../assets/SVG ICONS/css3-original.svg";
import Java from "../assets/SVG ICONS/java-original.svg";
import HTML from "../assets/SVG ICONS/html5-original.svg";
import CSharp from "../assets/SVG ICONS/csharp-original.svg";
import Tailwind from "../assets/SVG ICONS/tailwindcss-original.svg";
import Javascript from "../assets/SVG ICONS/javascript-original.svg";

// Imported SVG (Tools Category)
import Git from "../assets/SVG ICONS/git-original.svg";
import Unity from "../assets/SVG ICONS/unity-original.svg";
import Figma from "../assets/SVG ICONS/figma-original.svg";
import Canva from "../assets/SVG ICONS/canva-original.svg";
import VSCode from "../assets/SVG ICONS/vscode-original.svg";
import ReactIcon from "../assets/SVG ICONS/react-original.svg";
import VStudio from "../assets/SVG ICONS/visualstudio-original.svg";
import SourceTree from "../assets/SVG ICONS/sourcetree-original.svg";

function SkillCard({ name, icon, svg }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center bg-[#1a1a27] p-6 rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-transform hover:scale-105 duration-300 w-full cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon / SVG Toggle */}
      {hovered && svg ? (
        <img src={svg} alt={name} className="mb-3 w-14 h-14" />
      ) : (
        <i className={`${icon} text-5xl text-primary mb-3`} />
      )}

      <span className="text-base font-medium">{name}</span>
    </div>
  );
}

export default function Skills() {
  const techStacks = [
    { name: "Java", icon: "devicon-java-plain", svg: Java },
    { name: "C#", icon: "devicon-csharp-plain", svg: CSharp },
    { name: "HTML5", icon: "devicon-html5-plain", svg: HTML },
    { name: "CSS3", icon: "devicon-css3-plain", svg: CSS },
    { name: "React", icon: "devicon-react-original", svg: ReactIcon },
    { name: "Tailwind", icon: "devicon-tailwindcss-original", svg: Tailwind },
    { name: "JavaScript", icon: "devicon-javascript-plain", svg: Javascript },
  ];

  const tools = [
    { name: "Canva", icon: "devicon-canva-original", svg: Canva },
    { name: "Figma", icon: "devicon-figma-plain", svg: Figma },
    { name: "Git", icon: "devicon-git-plain", svg: Git },
    { name: "SourceTree", icon: "devicon-sourcetree-original", svg: SourceTree },
    { name: "Unity", icon: "devicon-unity-plain", svg: Unity },
    { name: "Visual Studio", icon: "devicon-visualstudio-plain", svg: VStudio },
    { name: "VSCode", icon: "devicon-vscode-plain", svg: VSCode },
  ];

  return (
    <section className="min-h-screen px-6 py-20 mx-auto max-w-7xl">
      {/* Main Title */}
      <h1 className="mb-16 text-center title-text">
        My <span className="text-primary">Skills</span>
      </h1>

      {/* Tech Stack */}
      <div className="mb-20">
        <h2 className="mb-10 text-2xl font-semibold text-center">
          Tech <span className="text-primary">Stack</span>
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {techStacks.map((tech, idx) => (
            <SkillCard key={idx} {...tech} />
          ))}
        </div>
      </div>

      {/* Tools Used */}
      <div>
        <h2 className="mb-10 text-2xl font-semibold text-center">
          Tools <span className="text-primary">Used</span>
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {tools.map((tool, idx) => (
            <SkillCard key={idx} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
}

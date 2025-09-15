import React from "react";
import AboutMePic from "../assets/My Photo/MyPic.jpeg";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-[90%] mx-auto max-w-7xl py-16">
      {/* Title */}
      <h2 className="inline-block mb-8 text-4xl font-bold border-b-4 border-blue-500 ml-32">
        About Me
      </h2>

      <div className="flex flex-col items-center justify-between gap-12 text-white md:flex-row">
        {/* Left Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="overflow-hidden rounded-2xl shadow-xl max-w-sm">
            <img
              src={AboutMePic}
              alt="About Me"
              className="object-cover w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          {/* Description */}
          <p>
            Hello! I'm <span className="font-bold">Kurt Rion</span>, a
            passionate IT graduate eager to create innovative solutions and
            build the future of technology. I enjoy coding, designing, and
            working on creative projects.
          </p>
          <p>
            My expertise includes web development, UI/UX design, and database
            management. I'm committed to writing clean, efficient code and
            designing systems that are both scalable and maintainable.
          </p>

          {/* Skill Bars */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1 text-sm font-medium">
                <span>Web Development</span>
                <span>90%</span>
              </div>
              <progress
                className="progress progress-primary w-full h-2"
                value="90"
                max="100"
              ></progress>
            </div>

            <div>
              <div className="flex justify-between mb-1 text-sm font-medium">
                <span>UI/UX Design</span>
                <span>85%</span>
              </div>
              <progress
                className="progress progress-primary w-full h-2"
                value="85"
                max="100"
              ></progress>
            </div>

            <div>
              <div className="flex justify-between mb-1 text-sm font-medium">
                <span>Database Management</span>
                <span>88%</span>
              </div>
              <progress
                className="progress progress-primary w-full h-2"
                value="88"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

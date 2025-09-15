import React from "react";
import AboutMePic from "../assets/My Photo/MyPic.jpeg";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 mx-auto max-w-7xl">
      {/* Title */}
      <h2 className="title-text">
        About <span className="text-primary">Me</span>
      </h2>

      <div className="flex flex-col items-center justify-between gap-6 text-white md:flex-row">
        {/* Left Image */}
        <div className="flex justify-start md:w-1/2">
          <div className="max-w-sm overflow-hidden shadow-xl rounded-2xl">
            <img
              src={AboutMePic}
              alt="About Me"
              className="object-cover w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-6 text-end md:w-1/2 md:text-left">
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
                className="w-full h-2 progress progress-primary"
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
                className="w-full h-2 progress progress-primary"
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
                className="w-full h-2 progress progress-primary"
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

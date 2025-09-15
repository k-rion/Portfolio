import React from "react";

// Import image
import MyPhoto from "../../src/assets/My Photo/1000115656.jpg";

export default function HomePage() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto w-[90%] text-center">
      {/* Avatar */}
      <div className="mb-4 avatar">
        <div className="w-40 h-40 rounded-full ring ring-offset-base-100 ring-offset-2 animate-[bounce_4s_infinite] overflow-hidden">
          <img src={MyPhoto} alt="Profile" />
        </div>
      </div>

      {/* Name */}
      <h1 className="mb-4 text-6xl font-bold">Kurt Rion</h1>

      {/* Description */}
      <p className="max-w-xl mb-4 text-lg">
        Recent Information Technology graduate passionate about creating
        innovative solutions and building the future of technology.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="viewProj-btn " id="#projects">
          View Project
        </button>
        <button className="contact-btn">Contact Me</button>
      </div>
    </div>
  );
}

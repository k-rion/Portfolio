import React from "react";
import Logo from "../assets/My Photo/K__1_-removebg-preview.png";

export default function Navbar() {
  return (
    <div className="flex flex-wrap justify-between mx-auto navbar w-full bg-[#0d0d14] text-white shadow-xl">
      <a className="cursor-pointer">
        <img src={Logo} alt="My logo" className="w-[80px]" />{" "}
        <span className="text-lg font-bold">Kurt</span>
      </a>

      <div className="flex items-center gap-10">
        <div className="flex flex-row gap-4">
          <a className="navbar-texts" href="#home">
            Home
          </a>
          <a className="navbar-texts" href="#about">
            About
          </a>
          <a className="navbar-texts" href="#education">
            Education
          </a>
          <a className="navbar-texts" href="#projects">
            Projects
          </a>
          <a className="navbar-texts" href="#contact">
            Contact
          </a>
        </div>

        {/* Toggle Dark and Light Mode */}
        <label className="cursor-pointer">
          <input type="checkbox" className="toggle" defaultChecked />
        </label>
      </div>
    </div>
  );
}

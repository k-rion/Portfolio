import React from "react";
import Logo from "../assets/My Photo/K__1_-removebg-preview.png";

export default function Navbar() {
  return (
    <div className="flex flex-wrap justify-between mx-auto navbar w-[80%] max-w-7xl">
      <a className="cursor-pointer">
        <img src={Logo} alt="My logo" className="w-[80px]" />{" "}
        <span className="text-lg font-bold">Kurt</span>
      </a>

      <div className="flex flex-row gap-4">
        <a className="navbar-texts" href="">
          Home
        </a>
        <a className="navbar-texts" href="">
          About
        </a>
        <a className="navbar-texts" href="">
          Education
        </a>
        <a className="navbar-texts" href="">
          Projects
        </a>
        <a className="navbar-texts" href="">
          Contact
        </a>
      </div>

      {/* Toggle Dark and Light Mode */}
      <button>
        <input type="checkbox" className="toggle" defaultChecked />
      </button>
    </div>
  );
}

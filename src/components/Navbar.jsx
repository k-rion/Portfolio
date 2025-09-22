// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-scroll";
import { Dlinks } from "../data/dataLinks";
import Logo from "../assets/My Photo/K__1_-removebg-preview.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0d0d14] text-white shadow-xl fixed left-0 top-0 z-9999">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 cursor-pointer">
          <img src={Logo} alt="My logo" className="w-12 sm:w-16" />
          <span className="text-lg font-bold">Kurt</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-6">
            {Dlinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-blue-400"
                className="navbar-texts cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Dark/Light Toggle */}
          <label className="swap swap-rotate">
            <input type="checkbox" className="theme-controller" value="dark" />
            {/* Sun icon */}
            <svg
              className="w-8 h-8 fill-current swap-off"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
            </svg>
            {/* Moon icon */}
            <svg
              className="w-8 h-8 fill-current swap-on"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64 13A9 9 0 1111 3.36 7 7 0 0021.64 13z" />
            </svg>
          </label>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center gap-4 py-4 md:hidden bg-[#13131c]">
          {Dlinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-blue-400"
              className="navbar-texts cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

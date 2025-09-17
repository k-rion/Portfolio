import React, { useState } from "react";
import Logo from "../assets/My Photo/K__1_-removebg-preview.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0d0d14] text-white shadow-xl">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 cursor-pointer">
          <img src={Logo} alt="My logo" className="w-12 sm:w-16" />
          <span className="text-lg font-bold">Kurt</span>
        </a>

        {/* Desktop Menu */}
        <div className="items-center hidden gap-10 md:flex">
          <div className="flex gap-6">
            <a className="navbar-texts" href="#home">Home</a>
            <a className="navbar-texts" href="#about">About</a>
            <a className="navbar-texts" href="#education">Education</a>
            <a className="navbar-texts" href="#skills">Skills</a>
            <a className="navbar-texts" href="#projects">Projects</a>
            <a className="navbar-texts" href="#contact">Contact</a>
          </div>

          {/* Dark/Light Toggle */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller"
              value="dark" // 👈 switches only between light and dark
            />
            {/* Sun icon for light mode */}
            <svg
              className="w-8 h-8 fill-current swap-off"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
            </svg>
            {/* Moon icon for dark mode */}
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center gap-4 py-4 md:hidden bg-[#13131c]">
          <a className="navbar-texts" href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a className="navbar-texts" href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a className="navbar-texts" href="#education" onClick={() => setIsOpen(false)}>Education</a>
          <a className="navbar-texts" href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a className="navbar-texts" href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a className="navbar-texts" href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}

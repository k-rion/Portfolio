import React from "react";

export default function FooterComponent() {
  return (
    <div className="p-10 rounded footer footer-center bg-base-200 text-base-content">
      <div className="footer-content">
        <a href="#" className="">
          Kurt Rion
        </a>
        <ul className="grid grid-flow-col gap-4 my-5">
          <li>
            <a className="hover:text-primary" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-primary" href="#about">
              About
            </a>
          </li>

          <li>
            <a className="hover:text-primary" href="#education">
              Education
            </a>
          </li>
          <li>
            <a className="hover:text-primary" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="hover:text-primary" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="hover:text-primary" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <div className="grid grid-flow-col gap-8 mb-4">
          <a href="https://github.com/k-rion">
            <i className="text-3xl devicon-github-original hover:text-primary"></i>
          </a>
          <a href="https://www.linkedin.com/in/kurt-rion-aquino-90aa22375/">
            <i className="text-3xl devicon-linkedin-plain hover:text-primary"></i>
          </a>
          <a href="https://www.facebook.com/kurtrion.aquino/">
            <i className="text-3xl devicon-facebook-plain hover:text-primary"></i>
          </a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Kurt Rion. All rights reserved.
        </p>
      </div>
    </div>
  );
}

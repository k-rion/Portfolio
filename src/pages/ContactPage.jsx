import React from "react";

// Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const cntct = [
  {
    icon: faEnvelope,
    title: "Email",
    subtitle: "aquino.rionkurt@gmail.com",
  },
  {
    icon: faPhone,
    title: "Phone",
    subtitle: "(+63) 981 799 3839",
  },
  {
    icon: faLocationDot,
    title: "Location",
    subtitle: "North Caloocan, Metro Manila, Philippines",
  },
];

const socials = [
  { link: "https://github.com/k-rion", icon: faGithub },
  { link: "https://www.facebook.com/kurtrion.aquino/", icon: faFacebook },
  { link: "https://www.instagram.com/queue_queueee/", icon: faInstagram },
  { link: "https://www.linkedin.com/in/kurt-rion-aquino-90aa22375/", icon: faLinkedin },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16 mx-auto max-w-7xl">
      {/* Title */}
      <h2 className="title-text">
        Get In <span className="text-primary">Touch</span>
      </h2>

      <div className="flex flex-col items-center justify-between gap-6 text-white md:flex-row">
        {/* Left Image */}
        <div className="flex flex-col justify-start gap-10 md:w-1/2">
          {cntct.map((c, indx) => (
            <div className="flex items-center gap-2 " key={indx}>
              <FontAwesomeIcon
                icon={c.icon}
                className="x-5 py-2 text-white border border-blue-400 rounded-full shadow-lg 
             bg-gradient-to-r from-blue-600 to-cyan-500 
             hover:from-blue-500 hover:to-cyan-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] 
             transition-all duration-30 text-center w-8"
              />
              <div>
                <p className="text-[14px] font-semibold">{c.title}</p>
                <p className="text-[12px] text-gray-300">{c.subtitle}</p>
              </div>
            </div>
          ))}
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
          <div className=""></div>
        </div>
      </div>

      <div className="inline-flex gap-6 mt-12">
        {socials.map((s, indx) => (
          <div className="" key={indx}>
            <a href={s.link} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={s.icon}
                className="x-5 py-2 text-white border border-blue-400 rounded-full shadow-lg 
             bg-gradient-to-r from-blue-600 to-cyan-500 
             hover:from-blue-500 hover:to-cyan-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] 
             transition-all duration-150 text-center w-8 hover:scale-125 ease-in-out"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

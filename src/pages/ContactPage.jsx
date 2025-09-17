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
  {
    link: "https://www.linkedin.com/in/kurt-rion-aquino-90aa22375/",
    icon: faLinkedin,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen px-4 py-16 mx-auto max-w-7xl">
      {/* Title */}
      <h2 className="text-center title-text md:text-left">
        Get In <span className="text-primary">Touch</span>
      </h2>

      <div className="flex flex-col-reverse items-center gap-12 mt-10 text-white md:flex-row md:items-start md:gap-20">
        {/* Left Content */}
        <div className="flex flex-col w-full gap-8 md:w-1/2">
          {cntct.map((c, indx) => (
            <div className="flex items-center gap-4" key={indx}>
              <FontAwesomeIcon
                icon={c.icon}
                className="p-3 text-white border border-blue-400 rounded-full shadow-lg
                  bg-gradient-to-r from-blue-600 to-cyan-500 
                  hover:from-blue-500 hover:to-cyan-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] 
                  transition-all duration-150 text-center w-10 h-10"
              />
              <div>
                <p className="text-sm font-semibold">{c.title}</p>
                <p className="text-xs text-gray-300">{c.subtitle}</p>
              </div>
            </div>
          ))}

          {/* Socials */}
          <div className="flex justify-center gap-6 mt-6 md:justify-start">
            {socials.map((s, indx) => (
              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                key={indx}
              >
                <FontAwesomeIcon
                  icon={s.icon}
                  className="p-3 text-white border border-blue-400 rounded-full shadow-lg
                    bg-gradient-to-r from-blue-600 to-cyan-500 
                    hover:from-blue-500 hover:to-cyan-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] 
                    transition-all duration-150 w-10 h-10 hover:scale-125 ease-in-out"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2">
          <div className="w-full p-8 bg-[#1a1a27] rounded-2xl shadow-lg">
            {/* Name */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-semibold text-gray-200">
                Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 text-white bg-[#13131c] rounded-md border border-gray-700 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-semibold text-gray-200">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 text-white bg-[#13131c] rounded-md border border-gray-700 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block mb-2 text-sm font-semibold text-gray-200">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full px-3 py-2 text-white bg-[#13131c] rounded-md border border-gray-700 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message..."
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full px-6 py-2 font-medium text-white transition-all duration-300 rounded-full shadow-md md:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

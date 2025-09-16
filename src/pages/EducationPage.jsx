import React, { useState } from "react";

export default function EducationPage() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "Java Certificate (June 25, 2022)",
      img: "/certificates/java-cert.jpg", // replace with your actual path
    },
    {
      title: "ReactJS Certificate (Simple Learn)",
      img: "/certificates/react-cert.jpg",
    },
    {
      title: "SAP Certificate",
      img: "/certificates/sap-cert.jpg",
    },
    {
      title: "Symposium Presenter Certificate",
      img: "/certificates/symposium-cert.jpg",
    },
    {
      title: "Certificate of Completion (Lamina Studios)",
      img: "/certificates/lamina-cert.jpg",
    },
    {
      title: "Simple Learn Certificate",
      img: "/certificates/simplelearn-cert.jpg",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-16 mx-auto max-w-7xl">
      {/* Education Background Section */}
      <section id="education" className="mb-16">
        <h2 className="mb-12 text-center title-text">
          Education <span className="text-primary">Background</span>
        </h2>

        {/* Education Card */}
        <div className="bg-[#1a1a27] p-8 rounded-2xl shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-shadow duration-300">
          <div className="flex flex-col mb-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="mb-2 text-2xl font-semibold">
                STI College San Jose Del Monte
              </h3>
              <p className="text-lg text-gray-300">
                Bachelor of Science in Information Technology
              </p>
              <p className="text-lg text-gray-300">GWA: 1.42 || Cum Laude</p>
            </div>
            <p className="mt-2 text-sm text-gray-400 md:mt-0">
              Aug 2021 – Jul 11, 2025
            </p>
          </div>

          {/* Certificates */}
          <div>
            <h4 className="mb-6 text-lg font-medium">Certificates:</h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {certificates.map((cert, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCert(cert)}
                  className="bg-[#2a2a3d] px-4 py-6 rounded-lg text-gray-300 text-sm shadow hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-transform hover:scale-105"
                >
                  {cert.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-[#1a1a27] p-6 rounded-xl shadow-lg max-w-3xl w-[90%] relative">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute text-xl text-gray-400 top-3 right-3 hover:text-white"
            >
              ✕
            </button>
            <h3 className="mb-4 text-lg font-semibold text-center text-gray-200">
              {selectedCert.title}
            </h3>
            <img
              src={selectedCert.img}
              alt={selectedCert.title}
              className="rounded-lg max-h-[70vh] mx-auto object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

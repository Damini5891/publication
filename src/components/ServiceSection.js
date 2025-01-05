import React, { useState } from "react";

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      title: "Book Editing & Proof Reading",
      description:
        "Our experts ensure your manuscript is error-free and polished for publishing.",
    },
    {
      title: "Interior Design",
      description:
        "We design visually appealing and readable interiors for your book.",
    },
    {
      title: "Cover Design",
      description:
        "Create stunning covers that captivate your audience at first glance.",
    },
    {
      title: "Digital Marketing",
      description:
        "Promote your book to the right audience with tailored marketing strategies.",
    },
    {
      title: "Worldwide Distribution",
      description:
        "Make your book available globally through extensive distribution channels.",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Explore our wide range of services tailored to meet your needs.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-2 sm:w-1/2 w-full"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="bg-gray-100 rounded flex p-4 h-full items-center relative">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">{service.title}</span>
          
                {hoveredService === index && (
                  <div className="absolute top-12 left-12 bg-white p-4 shadow-lg rounded-lg w-64 z-10">
                    <h2 className="text-lg font-bold">{service.title}</h2>
                    <p className="text-sm mt-2">{service.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <button className="flex mx-auto mt-16 bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-6 md:px-8 rounded-full">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;

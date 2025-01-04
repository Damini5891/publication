import React from "react";

const FlipCard = () => {
  const servicesList = [
    {
      name: "Book Editing & Proof Reading",
      description:
        "Our experts ensure your manuscript is error-free and polished for publishing.",
    },
    {
      name: "Interior Design",
      description:
        "We design visually appealing and readable interiors for your book.",
    },
    {
      name: "Cover Design",
      description:
        "Create stunning covers that captivate your audience at first glance.",
    },
    {
      name: "Digital Marketing",
      description:
        "Promote your book to the right audience with tailored marketing strategies.",
    },
    {
      name: "Worldwide Distribution",
      description:
        "Make your book available globally through extensive distribution channels.",
    },
  ];

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
        {servicesList.map((service, index) => (
          <div
            key={index}
            className="group w-64 h-40 relative bg-transparent perspective"
          >
            <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-500 group-hover:rotate-y-180">
              <div className="absolute w-full h-full bg-blue-900 text-white flex justify-center items-center rounded-lg backface-hidden">
                <h2 className="text-lg font-semibold">{service.name}</h2>
              </div>
              <div className="absolute w-full h-full bg-white text-gray-900 flex justify-center items-center rounded-lg backface-hidden transform rotate-y-180 p-4">
                <p className="text-sm">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlipCard;

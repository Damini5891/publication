import Image from "next/image";
import React from "react";
import print from "../../public/images/website/print.png";
import service from "../../public/images/website/service.png";
import quick from "../../public/images/website/quick.png";
import worldwide from "../../public/images/website/worldwide.png";

const featuresData = [
  {
    title: "PRINT",
    description:
      "We provide unbelievable Print On Demand Lifetime Inventory on International Print Quality for your books. We provide best POD service for your book.",
    imageAlt: "Print",
    imageSrc: print,
  },
  {
    title: "QUICK SERVICE",
    description:
      "With quick publishing within 7 to 10 Days only, your book will be ready for worldwide distribution as print and eBook. We ensure fastest service is delivered to you.",
    imageAlt: "Quick Service",
    imageSrc: quick,
  },
  {
    title: "SUPPORT",
    description:
      "Get a dedicated Project flow while publishing and a caring post-publishing support once released. You are provided with best in class support platforms.",
    imageAlt: "Support",
    imageSrc: service,
  },
  {
    title: "WORLDWIDE DISTRIBUTION",
    description:
      "We make your book available in up to 150+ countries as paperback and eBook. We are in partnership with largest global book distribution networks.",
    imageAlt: "Worldwide Distribution",
    imageSrc: worldwide,
  },
];

const Features = () => {
  return (
    <div className="container mx-auto px-4 py-20 w-full lg:w-3/4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        <div className="text-left">
          <h1 className="text-4xl font-bold text-blue-900 mt-24">
            Most Economical & Trusted Book Publication In India.
          </h1>
          <p className="mt-4 text-gray-700">
            Yashaswin Publication offers the most affordable self-publishing
            services in India. We aim to provide professional self book
            publication services, guidance, and support to all emerging Indian
            Authors who inspire to write and publish their book with our
            Worldwide Availability on Print & eBook.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
          {featuresData.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-left mb-4">
                <Image
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  className="h-12 w-12"
                />
              </div>
              <h2 className="text-base font-semibold text-left">
                {feature.title}
              </h2>
              <p className="mt-2 text-gray-600 text-left text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

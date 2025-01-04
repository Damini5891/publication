import Image from "next/image";
import React from "react";
import publish from "../../public/images/website/publish.svg";
import registration from "../../public/images/website/registration.png";
import design from "../../public/images/website/design.png";
import review from "../../public/images/website/review.png";
import sales from "../../public/images/website/sales.png";
import launch from "../../public/images/website/launch.png";
import support from "../../public/images/website/support.png";

const steps = [
  {
    title: "1. Registration and Consultation",
    imageSrc: registration,
    imageAlt: registration,
    description:
      "Register with us by filling a simple form and our book publishing consultant will call you to discuss about your book and will forward you the best proposal.",
  },
  {
    title: "2. Design and Formatting",
    imageSrc: design,
    imageAlt: registration,

    description:
      "After finalising the proposal, you need to submit your manuscript and other design inputs for book cover designing and publication process.",
  },
  {
    title: "3. Review and Approval",
    imageSrc: review,
    imageAlt: registration,

    description:
      "You will be assigned a Publishing Manager. The final book interior and book cover design will be sent to you for review and approval.",
  },
  {
    title: "4. Pre Order, Launch and Distribution",
    imageSrc: launch,
    imageAlt: registration,

    description:
      "After confirming from you, the book will be forwarded for printing and distribution to worldwide platforms as paperback and eBook.",
  },
  {
    title: "5. Marketing and Promotions",
    imageSrc: sales,
    imageAlt: registration,

    description:
      "Online book promotions will be done by our team. Marketing assistance and visual creatives will also be provided to boost book sales.",
  },
  {
    title: "6. Royalty and Support",
    imageSrc: support,
    imageAlt: registration,

    description:
      "You will be granted an access of online dashboard for royalty and support. You will get an update and payment of Royalty on Monthly Cycle.",
  },
];

const SelfPublishingProcess = () => {
  return (
    <div className="max-w-6xl mx-auto text-center ">
      <h1 className="text-blue-900 text-4xl font-bold mb-6 mt-24">
        The Self Publishing Process
      </h1>
      <p className="text-lg mb-10">
        Publishing process with Yashaswin Publication simplifies your book
        publication requirements. Our book publishing consultant will guide you
        throughout the self publishing process to transform your manuscript to a
        masterpiece book. Following is the flowchart of Self Book Publishing.
      </p>
      <div className="flex flex-wrap items-center justify-center ">
        <div className="w-full lg:w-1/3 p-4">
          {steps.slice(0, 3).map((step, index) => (
            <div key={index} className="step mb-8">
              <h2 className="font-semibold mb-2 text-lg text-right">
                <div className="flex justify-end items-end">
                  <Image
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    className="h-10 w-10"
                  />
                </div>
                {step.title}
              </h2>
              <p className="text-base text-right">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/3 p-4 flex justify-center">
          <Image
            src={publish}
            alt="Publishing Process"
            className="w-full h-auto max-w-sm"
          />
        </div>
        <div className="w-full lg:w-1/3 p-4">
          {steps.slice(3).map((step, index) => (
            <div key={index} className="step mb-8">
              <h2 className="text-lg font-semibold mb-2 text-left">
                <Image
                  src={step.imageSrc}
                  alt={step.imageAlt}
                  className="h-12 w-12"
                />
                {step.title}
              </h2>
              <p className="text-base text-left">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelfPublishingProcess;

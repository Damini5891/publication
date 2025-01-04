// components/Pricing.js

import React from "react";

const pricingData = [
  {
    title: "STARTER",
    price: "9,999",
    features: [
      "Front and Back Cover Design",
      "Proofreading upto 5k words",
      "ISBN and Barcode",
      "Upto 10 Complimentary copies",
      "Basic Marketing",
      "Email Support",
    ],
    buttonClass: "bg-gray-400 hover:bg-gray-500",
    borderClass: "border-gray-300",
    popular: false,
  },
  {
    title: "PROFESSIONAL",
    price: "24,999",
    features: [
      "Front and Back Cover Design",
      "Proofreading upto 25k words",
      "ISBN and Barcode",
      "Upto 20 Complimentary copies",
      "Authors's Portfolio website",
      "Promotion and Marketing",
      "Priority Support",
    ],
    buttonClass: "bg-blue-900 hover:bg-indigo-600",
    borderClass: "border-blue-900",
    popular: true,
  },
  {
    title: "STANDARD",
    price: "14,999",
    features: [
      "Front and Back Cover Design",
      "Proofreading upto 15k words",
      "ISBN and Barcode",
      "Upto 15 Complimentary copies",
      "Basic Marketing",
      "WhatsApp and Email Support",
    ],
    buttonClass: "bg-gray-400 hover:bg-gray-500",
    borderClass: "border-gray-300",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Publishing Packages
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            To self-publish your book, you may select a publishing package below
            and register for publishing. The cost of publishing a book totally
            depends upon the publishing services you choose.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {pricingData.map((plan, index) => (
            <div key={index} className="p-4 lg:w-1/3 md:w-1/2 sm:w-1/2 w-full">
              <div
                className={`h-full p-6 rounded-lg border-2 flex flex-col relative overflow-hidden ${plan.borderClass}`}
              >
                {plan.popular && (
                  <span className="bg-blue-900 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                    POPULAR
                  </span>
                )}
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  {plan.title}
                </h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>{plan.price}</span>
                </h1>
                {plan.features.map((feature, idx) => (
                  <p key={idx} className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    {feature}
                  </p>
                ))}
                <button
                  className={`flex items-center mt-auto text-white border-0 py-2 px-4 w-1/3 focus:outline-none rounded ${plan.buttonClass}`}
                >
                  Know more
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  There is more to the package, Click and{" "}
                  <span className="text-black font-semibold">Know more</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

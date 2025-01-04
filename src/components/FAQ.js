import React, { useState } from "react";
import questions from "../../public/images/website/questions.svg";
import Image from "next/image";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the Publishing Process?",
      answer:
        "Publishing with us is very easy. Register with us, select the publishing package according to your requirement and how you want to publish your book. Follow the instructions to publish your book with Yashaswin Publication.",
    },
    {
      question: "How much royalty will I get?",
      answer:
        "Author will get 100% Royalty of each print order and eBook Sales. Royalty is calculated as MRP – (Production Cost + Distribution Charges). Hence authors will get 100% of the profits.",
    },
    {
      question: "Will I get ISBN number?",
      answer:
        "ISBN stands for 'International Standard Book Number'. It's basically a 13 digit identification number that booksellers and libraries use to identify books. A separate ISBN is assigned for Paperback, Hardcover, and eBook versions of your book by the ISBN agency of India.",
    },
    {
      question: "Who owns the rights to my book?",
      answer:
        "You retain all the rights to your book! We don't own any of your content and you can even publish it elsewhere if you wish with our non-exclusive agreement with the author.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row md:space-x-4 py-8 px-4 md:py-16 md:px-16">
      <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
        <Image src={questions} alt="FAQ Image" className="w-full md:w-1/2" />
      </div>
      <div className="w-full md:w-1/2 px-4 md:px-0">
        <h1 className="text-2xl md:text-3xl text-blue-900 font-bold py-4 md:py-8">
          FAQs
        </h1>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full bg-gray-200 text-left px-4 py-2 rounded focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between">
                {faq.question}
                <svg
                  height="18px"
                  id="Layer_1"
                  style={{ enableBackground: "new 0 0 512 512" }}
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="18px"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path d="M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z" />
                </svg>
              </div>
            </button>
            <div
              className={`p-4 ${activeIndex === index ? "block" : "hidden"}`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

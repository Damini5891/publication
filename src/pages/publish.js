import React from "react";
import publishpage from "../../public/images/website/publishpage.svg";
import Image from "next/image";
import PublishingProcess from "@/components/PublishingProcess";
import BookPublishingForm from "@/components/BookPublishingForm";
import EbookSection from "@/components/EbookSection";

const publish = () => {
  return (
    <>
      <section className="text-gray-600 body-font px-5 md:px-10 lg:px-32">
        <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-900">
              Confused,
              <br className="hidden lg:inline-block" />
              How to publish a book?
            </h1>
            <p className="mb-8 leading-relaxed">
              Yashaswin Publication provides you the platform, independence and
              flexibility to create and share what you love and feel with the
              entire world through book publishing. With our team of experts,
              we’ll guide you on how to publish a book and sell globally,
              earning 100% of the profit.
            </p>
            <button className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-6 md:px-8 rounded-full">
              Know the Process
            </button>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center"
              alt="hero"
              src={publishpage}
            />
          </div>
        </div>
      </section>
      <PublishingProcess />
      <EbookSection />
    </>
  );
};

export default publish;

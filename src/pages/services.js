import Image from "next/image";
import React from "react";
import services from "../../public/images/website/services.svg";
import FlipCard from "../components/FlipCard";

const servicesPage = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex py-24 md:flex-row flex-col items-center w-3/4">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={services}
            width={720}
            height={600}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-12 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Expert Publication Services
            <br className="hidden lg:inline-block" />
            to Bring Your Vision to Life
          </h1>
          <p className="mb-8 leading-relaxed">
            Let us help you share your story with the world. Our team offers
            personalized editing, design, and distribution services to make your
            publication stand out and reach the right audience.
          </p>
          <button className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-6 md:px-8 rounded-full">
            Get Started
          </button>
        </div>
      </div>

      <FlipCard />
    </section>
  );
};

export default servicesPage;

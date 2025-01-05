// FeaturedAuthor.js
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const FeaturedAuthor = ({ data }) => {
  return (
    <section className="mt-12 mb-16">
      <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row w-full mb-10 lg:items-center text-center lg:text-left">
          <h1 className="text-3xl font-bold text-blue-900 lg:w-1/3">
            Featured Author
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-16">
          <Image
            src={data.image}
            alt="Featured Author"
            width={192}
            height={192}
            className="rounded-full shadow-lg"
          />

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold">{data.name}</h3>
            <p className="text-gray-600 mt-1">{data.designation}</p>
            <p className="text-gray-500 italic mt-1">{data.qualification}</p>
            <p className="mt-4 text-gray-700">{data.description}</p>

            <div className="mt-6 flex gap-8 flex-wrap justify-center md:justify-start">
              {data.books.map((book, index) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  key={index}
                  className="flex flex-col items-center"
                >
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={96}
                    height={128}
                    className="rounded shadow-md"
                  />
                  <p className="text-sm mt-2 text-gray-700">{book.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAuthor;

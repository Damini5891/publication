import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const BookGenres = ({ genres }) => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex w-full mb-20 flex-wrap justify-center items-center ">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Book Genres
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Books are portals to new worlds, inviting us to explore distant
            galaxies, delve into hidden histories, or simply lose ourselves in a
            captivating story.
          </p>
        </div>

      {/* Genres Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {genres.map((genre, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`relative overflow-hidden rounded-lg shadow-md col-span-${
              genre.name === "New Released" ? "2" : "1"
            } row-span-${
              genre.name === "Fiction" ? "2" : "1"
            }`}
            key={index}
          >
            <div className="w-full h-40 md:h-60 relative">
              <Image
                src={genre.image}
                alt={genre.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="absolute inset-0 bg-black bg-opacity-50 text-white text-lg font-bold flex items-center justify-center">
              {genre.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BookGenres;

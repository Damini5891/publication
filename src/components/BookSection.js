import Image from "next/image";
import React from "react";
import book1 from "../../public/images/books/book1.webp";
import book2 from "../../public/images/books/book2.webp";
import book3 from "../../public/images/books/book3.jpg";
import book4 from "../../public/images/books/book4.jpg";
import book5 from "../../public/images/books/book5.png";
import book6 from "../../public/images/books/book6.webp";

const BookSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap w-3/4">
        <div className="flex w-full mb-20 flex-wrap justify-center items-center ">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Featured Books
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Books are portals to new worlds, inviting us to explore distant
            galaxies, delve into hidden histories, or simply lose ourselves in a
            captivating story.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={book1}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={book2}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={book3}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={book4}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={book5}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={book6}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;

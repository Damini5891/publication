import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import book1 from "../../public/images/books/book1.webp";
import book2 from "../../public/images/books/book2.webp";
import book3 from "../../public/images/books/book3.jpg";
import book4 from "../../public/images/books/book4.jpg";
import book5 from "../../public/images/books/book5.png";
import book6 from "../../public/images/books/book6.webp";

const recentlyPublishedBooks = [
  { title: "Concept of Endocrinology", price: "₹600", image: book1 },
  { title: "Dental Launchpad", price: "₹250", image: book2 },
  { title: "The Psychology of Your Stars", price: "₹249", image: book3 },
  { title: "A New Page", price: "₹160", image: book4 },
  { title: "Mother's Twilight Fables", price: "₹360", image: book5 },
  { title: "Shatithya Ki Vivechna", price: "₹130", image: book6 },
  { title: "Marvel Stories", price: "₹380", image: book1 },
  { title: "Qaidi Ka Tamasha", price: "₹186", image: book2 },
];

const CustomArrow = ({ className, style, onClick, direction }) => (
  <div
    className={`${className} ${direction === "left" ? "slick-left" : "slick-right"}`}
    style={{
      ...style,
      display: "block",
      background: "rgba(0,0,0,0.5)",
      borderRadius: "50%",
      zIndex: 10,
    }}
    onClick={onClick}
  />
);

const RecentlyPublishedBooks = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="mt-8 mb-8">
      <div className="container px-5 py-24 mx-auto flex flex-col items-center w-3/4">
        {/* Header Section */}
        <div className="flex w-full mb-8 flex-wrap justify-center items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Recently Published
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Books are portals to new worlds, inviting us to explore distant
            galaxies, delve into hidden histories, or simply lose ourselves in a
            captivating story.
          </p>
        </div>

        {/* Slider Section */}
        <div className="w-full px-4">
          <Slider {...sliderSettings}>
            {recentlyPublishedBooks.map((book, index) => (
              <div key={index} className="p-4">
                <div className="p-4 bg-white shadow-md rounded-lg text-center">
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={150}
                    height={200}
                    className="mx-auto rounded"
                  />
                  <p className="mt-2 font-medium text-gray-800">{book.title}</p>
                  <p className="text-gray-600">{book.price}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default RecentlyPublishedBooks;

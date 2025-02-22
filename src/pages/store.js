import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FeaturedAuthor from "@/components/FeaturedAuthor";
import BookGenres from "@/components/BookGenres";
import BookSection from "@/components/BookSection";
import RecentlyPublishedBooks from "@/components/RecentlyPublishedBooks";
import book1 from "../../public/images/books/book1.webp";
import book2 from "../../public/images/books/book2.webp";
import book3 from "../../public/images/books/book3.jpg";
import book4 from "../../public/images/books/book4.jpg";
import book5 from "../../public/images/books/book5.png";
import book6 from "../../public/images/books/book6.webp";
import ebook from "../../public/images/website/ebook.png";
import background from "../../public/images/website/background.jpg";
import sunny from "../../public/images/sunny/sunny.jpg";
import omtatsat from "../../public/images/sunny/om_tatsat.jpg";
import alakh from "../../public/images/sunny/alakh.jpg";
import khalish from "../../public/images/sunny/khalish.png";



const featuredAuthorData = {
  name: "Dr. Sarojini 'Tanhaa'",
  image: sunny,
  designation: "Professor Physical Education",
  qualification: "PhD-Physical Education (BHU Varanasi), M.PED (BHU), MA (BHU)",
  description: `

Dr. Sarojini Tanhaa is a renowned poet and writer celebrated for her evocative works that explore themes of solitude, resilience, and human emotions. Her literary contributions have inspired many, blending poignant reflections with a profound understanding of life's complexities.`,
  books: [
    { title: "Om Tat Sat", image: omtatsat },
    { title: "Alakh", image: alakh },
    { title: "Khalish", image: khalish },
  ],
};

const bookGenres = [
  { name: "New Released", image: book1 },
  { name: "Academic", image: book2 },
  { name: "Horror", image: book3 },
  { name: "Children", image: book4 },
  { name: "Poetry", image: book5 },
  { name: "Fiction", image: book6 },
];

const Section = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="p-6 bg-white shadow-xl rounded-xl my-8"
  >
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </motion.div>
);

const Store = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div
        className="text-center py-10 px-6 rounded-md shadow-md mb-10"
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        
      >
        <div className="flex justify-center mb-4">
          <Image
            className="lg:w-2/6 md:w-3/6 w-1/4 object-cover object-center"
            alt="ebook"
            src={ebook}
          />
        </div>
        <h1 className="text-3xl font-bold text-blue-900 mb-2">
          Yashaswin Bookstore
        </h1>
        <p className="text-gray-700 text-base mb-6">
          A world of stories to explore. Shop newly self-published books by
          Yashaswin.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-4 py-2 bg-blue-900 text-white font-medium rounded hover:bg-blue-800 transition">
            NEW ARRIVALS
          </button>
          <button className="px-4 py-2 border border-blue-900 text-blue-900 font-medium rounded hover:bg-blue-100 transition">
            EXPLORE ALL BOOKS
          </button>
        </div>
      </div>



      <FeaturedAuthor data={featuredAuthorData} />
      <BookGenres genres={bookGenres} />
      <BookSection />
      <RecentlyPublishedBooks />
   
    </div>
  );
};

export default Store;

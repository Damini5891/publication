import Image from "next/image";
import React from "react";
import unsure from "../../public/images/website/unsure.svg";

const BookPublishingForm = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-blue-950 p-6">
      <div className="text-center md:text-left md:w-1/2 p-6">
        <Image
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-4 object-cover object-center rounded"
          alt="ebook"
          src={unsure}
        />
        <h1 className="text-gray-300 text-lg md:text-2xl font-semibold mb-4 text-left">
          Still not sure how to get your book published?
        </h1>
        <p className="text-gray-300 mb-4 text-sm text-left">
          Want to discuss the packages and publication procedure? Talk to our
          Publishing Consultant or simply register with us to get started!
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg md:w-1/3 w-full">
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <select className="w-full px-4 py-2 border rounded-lg text-blue-900">
              <option>Your Publishing Budget</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
          <div className="mb-4">
            <select className="w-full px-4 py-2 border rounded-lg text-blue-900">
              <option>Your Manuscript Status</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-900 text-white px-4 py-2 rounded-lg"
          >
            Sign Up For Free Consultation
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookPublishingForm;

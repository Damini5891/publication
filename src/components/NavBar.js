import Image from "next/image";
import React from "react";
import yashaswin from "../../public/images/website/yashaswin.png";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
            src={yashaswin}
            alt="yashaswin logo"
            height={150}
            width={150}
          />
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href="/publish" className="mr-5 hover:text-gray-900">
            How to publish
          </Link>
          <Link href="/services" className="mr-5 hover:text-gray-900">
            Services
          </Link>
          <Link href="/" className="mr-5 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="" className="mr-5 hover:text-gray-900">
            Registration
          </Link>
          <Link href="/store" className="mr-5 hover:text-gray-900">
            Book Store
          </Link>
        </nav>
        <button className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default NavBar;

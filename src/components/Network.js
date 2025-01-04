import React from "react";
import amazon from "../../public/images/network/amazon.png";
import flipkart from "../../public/images/network/flipkart.png";
import gplay from "../../public/images/network/gplay.png";
import kindle from "../../public/images/network/kindle.png";
import ebay from "../../public/images/network/ebay.png";
import meesho from "../../public/images/network/meesho.png";
import Image from "next/image";

const Network = () => {
  return (
    <div className=" py-10 px-4">
      <h2 className="text-3xl font-semibold mb-6 text-center text-blue-900">
        Worldwide Distribution Network
      </h2>
      <p className="max-w-2xl mx-auto mb-8 leading-relaxed">
        When you publish your book with us, it is published in both Paperback
        and eBook (most advanced print replica) and gets available in up to 20+
        states and countries. We are in partnership with largest global book
        distribution networks. Reach to a larger reader base from all over the
        world with our distribution network.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 w-full">
        <Image src={amazon} alt="Amazon" className="h-10 w-auto" />
        <Image src={flipkart} alt="Flipkart" className="h-16 w-auto" />
        <Image src={gplay} alt="Google Play" className="h-12 w-auto" />
        <Image src={kindle} alt="Amazon Kindle" className="h-16 w-auto" />
        <Image src={ebay} alt="ebay" className="h-12 w-auto" />
        <Image src={meesho} alt="meesho" className="h-12 w-auto" />
      </div>
    </div>
  );
};

export default Network;

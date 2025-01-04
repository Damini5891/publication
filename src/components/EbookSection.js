import Image from "next/image";
import ebook from "../../public/images/website/ebook.png";

const EbookSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="bg-slate-300 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full lg:w-2/3 mx-auto px-8 lg:px-0">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-900 mt-8 lg:mt-16">
              E Book or Paperback or Both?
            </h1>
            <p className="mb-8 leading-relaxed">
              What if you initially selected to publish only e-book but now your
              readers want a hard copy? Well, dont worry, we at Yashaswin
              Publishing offer Package Upgradation option from e-book to
              paperback. Where you will be getting your printed book by just
              paying a small package upgradation cost. After upgrading, your
              book will be listed on all distribution channels.
            </p>
          </div>
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-end">
            <Image
              className="lg:w-2/6 md:w-3/6 w-5/6 mb-4 object-cover object-center rounded"
              alt="ebook"
              src={ebook}
            />
            <span className="text-black font-semibold mb-4">
              Still not sure, e book or paperback or both?
            </span>
            <button className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-8 rounded-full">
              Register and Decide!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookSection;

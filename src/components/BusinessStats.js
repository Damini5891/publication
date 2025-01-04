// components/BusinessStats.js
import Image from "next/image";
import business from "../../public/images/website/business.svg";

const BusinessStats = () => {
  const stats = [
    { value: "100+", label: "Books" },
    { value: "50+", label: "Authors" },
    { value: "20+", label: "States" },
    { value: "1+", label: "Experience" },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container w-5/6 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="title-font font-medium text-3xl mb-2 text-blue-900">
              Why choose Yahaswin?
            </h1>
            <div className="leading-relaxed">
              We provides you the platform, independence and flexibility to
              create and share what you love and feel with the entire world
              through book publishing. We provide Book Publishing, Cover
              Designing, Sales and Distribution services at most economical
              price.
            </div>
          </div>
          {stats.map((stat, index) => (
            <div key={index} className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-blue-900">
                {stat.value}
              </h2>
              <p className="leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
          <Image
            className="object-cover object-center"
            src={business}
            alt="stats"
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessStats;

import registration from "../../public/images/website/registration.png";
import design from "../../public/images/website/design.png";
import review from "../../public/images/website/review.png";
import sales from "../../public/images/website/sales.png";
import launch from "../../public/images/website/launch.png";
import support from "../../public/images/website/support.png";
import Image from "next/image";

const steps = [
  {
    title: "1. Registration and Consultation",
    description:
      "Firstly, you have to register on our website and provide us 5-10 pages sample of your manuscript. We will review it and will forward you a publishing proposal of your book, of course, completely Free of Cost. Thereafter, you have to accept the same to start book publishing. Meanwhile you can discuss your queries with our publishing consultant.",
    image: registration,
  },
  {
    title: "2. Design and Formatting",
    description:
      "Once you accept the proposal, we will ask you to submit the complete manuscript and other inputs through Publishing Input Form (PIF). After receiving inputs, the book publishing process gets started. We’ll check the submitted PIF and will start the book cover and interior designing process. Proofreading of the book will also be done if it is included in your proposal.",
    image: design,
  },
  {
    title: "3. Review and Approval",
    description:
      "You will be assigned a Publishing Manager. The final book interior and book cover design will be sent to you for review. If you accept the design then we’ll proceed with the next step otherwise revision of the same will be done. After finalizing both the cover and interior of the book, we’ll apply for the 13 digit ISBN number of the book with ISBN Agency of India.",
    image: review,
  },
  {
    title: "4. Pre Order, Launch and Distribution",
    description:
      "After confirming from you, the book will be forwarded for printing and distribution to worldwide platforms as print and eBook. Author copies will be shipped to you. Firstly, pre-order is done in which the book is made live on our bookstore from where the potential readers can pre order the book. In the meantime, the book is also made available on other online platforms.",
    image: launch,
  },
  {
    title: "5. Marketing and Promotions",
    description:
      "Online book promotions will be done by our team. Several promotional creatives, including beautiful posts and video trailers, will be shared on our social media handles. Marketing assistance and visual creatives will also be provided to boost book sales. We also run paid campaigns/ads on different channels (including amazon, facebook, etc.) if its included in your package.",
    image: sales,
  },
  {
    title: "6. Royalty and Support",
    description:
      "Once your book is completely published and live, you will be granted an access of author sales sheet. You will get an update and payment of Royalty on Monthly Cycle. For any support or information, you will have an option to reach author support by your sheet or phone call. The sales sheet is updated as soon as the book gets dispatched from the printing facility.",
    image: support,
  },
];

export default function PublishingProcess() {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-32 sm:px-6 lg:px-8 text-center">
      <h1 className="text-blue-900 text-3xl font-medium mb-6 mt-24">
        The Complete Self Publishing Process With Yashaswin
      </h1>
      <p className="text-base mb-10">
        If you are confused how to publish a book, then you have come to the
        right place. You just need to register yourself and our publishing team
        will do the rest. Below is a detailed flowchart on how to publish your
        book.
      </p>
      <div className="grid gap-8 lg:grid-cols-2">
        {steps.map((step, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <Image
              src={step.image}
              alt={step.title}
              className="mb-4 w-12 h-12"
            />
            <h2 className="text-lg font-semibold mb-4 text-left">
              {step.title}
            </h2>
            <p className="text-gray-600 text-left">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import BookPublishingForm from "@/components/BookPublishingForm";
import FooterData from "@/components/FooterData";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <Component {...pageProps} />
        <BookPublishingForm />
        <FooterData />
      </main>
    </>
  );
}

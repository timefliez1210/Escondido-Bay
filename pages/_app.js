import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  const navLinks = [
    {
      text: "Home",
      path: "/",
      key: "1",
    },
    {
      text: "Island Hopping",
      path: "/island_hopping",
      key: "2",
    },
    {
      text: "Events",
      path: "/events",
      key: "3",
    },
    {
      text: "Fun Diving",
      path: "/fun_diving",
      key: "4",
    },
    {
      text: "Diving Courses",
      path: "/PADI_diving_courses",
      key: "5",
    },
    {
      text: "Contact",
      path: "/contact",
      key: "6",
    },
  ];
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          defer
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/img/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/img/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/img/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
       
      </Head>
      <Navbar navLinks={navLinks} />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
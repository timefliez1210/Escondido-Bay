import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import '../styles/globals.css'
import Script from "next/script"
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";


function MyApp({ Component, pageProps }) {
  const navLinks = [
    {
      text: "Home",
      path: "/",
      key: "1",
    },
    {
      text: "Fun Diving",
      path: "/fun-diving",
      key: "2",
    },
    {
      text: "Diving Courses",
      path: "/diving-courses",
      key: "3",
    },
    {
      text: "Island Hopping",
      path: "/island-hopping",
      key: "4",
    },
    {
      text: "About us",
      path: "/about",
      key: "5",
    },

  ];
  const router = useRouter();
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="geo.region" content="PH-CEB" />
        <meta name="geo.placename" content="Lapu-Lapu" />
        <meta name="geo.position" content="10.273677;123.966241" />
        <meta name="ICBM" content="10.273677, 123.966241" />
      </Head>
        <div className="scriptHolder">
          <Script 
            src="https://www.googletagmanager.com/gtag/js?id=G-0PNQ3SB0TL"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-0PNQ3SB0TL');
          `}
          </Script>
        </div>
       
        <Navbar navLinks={navLinks} />
        
        <AnimatePresence mode='wait'>
          
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.5,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: {
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }}
        className="base-page-size"
      >
        
        <Component {...pageProps} />
        </motion.div>
    </AnimatePresence>
    <Footer />
    </div>
  );
}

export default MyApp;
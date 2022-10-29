import Head from 'next/head'
import Banner from '../components/Banner'
import ServiceDisplay from '../components/ServiceDisplay';

const Home = () => {
  const display = [
    {
      title: "Island Hopping",
      image: "/Island-hopping.JPG",
      alt: "Island Hopping with Escondido Bay",
      text: "The Sea around Mactan is full of hidden gems for Island Hoppers and Snorkelers. Enjoy your day with us, relax with soothing tunes, cold beers and cocktails on the deck of our boat or while exploring some of the beautiful islands around, on land or on the shallow reefs.",
      href: "island_hopping",
      button: "Island Hopping",
      key: "1",
    },
    {
      title: "Events",
      image: "/events.JPG",
      alt: "Events in Cebu City and Lapu-Lapu City",
      text: "Abundant space for 40 people and more our boat 'Escondido Bay' gives you enough space to host your next event on the ocean. And don't worry, we can take care of everything if you need. From catering the food, simple bottled drinks and even up to fresh and home made cocktails, we have everything covered.",
      href: "events",
      button: "Events",
      key: "2",
    },
    {
      title: "Fun Diving",
      image: "/peacock-mantis.JPG",
      alt: "Fun Diving in Cebu, Mactan, Olango, Hilutongan and Nalusuan",
      text: "With the Dive Sites on and around Mactan we are richly spoiled. Join us and discover abundant sea life around Mactan, Olango Island, Nalusuan or Hilutongan. From exceptional macro creatures up to all sorts of pelagic animals, you will not be disappointed.",
      href: "fun_diving",
      button: "Fun Diving",
      key: "3",
    },
    {
      title: "PADI Diving Courses",
      image: "/Diving-Nalusuan.jpeg",
      alt: "PADI Diving Courses from beginner level classes Open Water to Divemaster Internships",
      text: "Dive into a complete new world of adventures or continue your education. We walk you through a broad array of possibilities below the surface. No matter if you are a beginner or already certified, we have got the course for you!",
      href: "PADI_diving_courses",
      button: "PADI Diving Courses",
      key: "4",
    },
  ]
  return (
    <div>
      <Head>
        <title>
        Escondido Bay - Your Boat Service Operator on Mactan specialized in making your Diving, Island Hopping and Event an unforgettable experience without losing the native touch of the philippines.
        </title>
        <meta
          name="description"
          content="We are operating weekly fundives, teach you diving and cater to all your needs around Island Hopping and Events"
        />
      </Head>
      <Banner
        heading={'Escondido Bay'}
        title={'The Native Experience Reinvented'}
        text={"The ship's history is richly steeped in a very heroic and distinguished past having been constructed so robustly that it was often used in rescue and salvage operations during turbulent sea conditions and inclement weather. Being so sturdy, it was also often used as avcargo vessel for inter-island transfers of goods, supplies and personnel, hence its past namesake “The Warrior”, a true testament to its sea worthiness and brawn.\n\n While today, it has maintained the basic structure consisting of a heavily strengthened frame and hull, the vessel has undergone a complete refurbishment focused on catering for comfortable and very safe passages from island to island, diving or events for groups of up to 40 people."}
        src={'/escondido-bay-boat.JPG'}
        alt={'Escondido Bay Boat Services'}
      />
      <ServiceDisplay
        title={'Our Services'}
        display={display}
      />
    </div>
  )
}

export default Home;
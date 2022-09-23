import Head from 'next/head'
import Banner from '../components/Banner'
import ServiceDisplay from '../components/ServiceDisplay';

const Home = () => {
  const display = [
    {
      title: "Island Hopping",
      image: "/Island-hopping.JPG",
      alt: "Island Hopping with Escondido Bay",
      text: "",
      href: "island_hopping",
      key: "1",
    },
    {
      title: "Events",
      image: "/events.JPG",
      alt: "Events in Cebu City and Lapu-Lapu City",
      text: "Abundant space for 40 people and more our boat 'Escondido Bay' gives you enough space to host your next event on the ocean. And don't worry, we can take care of everything if you need. From catering the food, simple bottled drinks and even up to fresh and home made cocktails, we have everything covered.",
      href: "events",
      key: "2",
    },
    {
      title: "Fun Diving",
      image: "/peacock-mantis.JPG",
      alt: "Fun Diving in Cebu, Mactan, Olango, Hilutongan and Nalusuan",
      text: "With the Dive Sites on and around Mactan we are richly spoiled. Join us and discover abundant sea life around Mactan, Olango Island, Nalusuan or Hilutongan. From exceptional macro creatures up to all sorts of pelagic animals, you will not be disappointed.",
      href: "fun_diving",
      key: "3",
    },
    {
      title: "PADI Diving Courses",
      image: "/Diving-Nalusuan.jpeg",
      alt: "PADI Diving Courses from beginner level classes Open Water to Divemaster Internships",
      text: "Dive into a complete new world of adventures or continue your education. We walk you through a broad array of possibilities below the surface. No matter if you are a beginner or already certified, we have got the course for you!",
      href: "PADI_diving_courses",
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
/*
<style jsx>{`

.divider {
  height: 3px;
  width: 40%;
  background: #0F0D69;
  margin: auto auto;
}
h1,
h2,
h3 {
  text-align: center;
  color: black;
}
p {
  text-align: left;
}
.card {
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 40px;
  border-radius: 40px;
  width: 95vw;
  max-width: 1080px;
  margin: 5vh auto;
  min-height: 300px;
}
@media only screen and (max-width: 800px) {
  .content {
    padding: 10px 0;
    margin: 10vh auto;
  }
}
a {
  color: white;
  text-decoration: none;
}
.image-container {
  display: block;
  height: auto;
  width: auto;
  position: relative;
  padding: auto auto;
  }

  .wrapper {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (minmax(19rem, 1fr))[auto-fit];
        grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
    grid-gap: 20px;
    height: auto;
    width: auto;
    text-align: center;
    content: center center;
    padding: 20px;
    margin: 150px 0 0 0;
} 
@media screen and (max-width: 800px) {
  .wrapper {
    grid-gap: 40px;
    padding: 50px 10px;
    margin: 50px 0 0 0;
  }
}
.content {
  background: white;
  color: black;
}
.leistungen {
  text-align: justify;
  margin: -150px 0 -150pxF 0;
}

.leistungen .button {
  padding: 20px;
  background-color: #0F0D69;
  color: white;
  border-radius: 20px;
  margin: 0 auto;
  text-align: center;
  width: 200px;
}

.leistungen .item-holder {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(14rem, 1fr))[auto-fit];
      grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
  grid-gap: 20px;
  padding: 50px;
}

@media screen and (max-width: 650px) {
  .leistungen .item-holder {
    grid-gap: 40px;
    padding: 50px 10px;
  }
}
.service-images {
  width: 300px;
}
`}</style>
*/
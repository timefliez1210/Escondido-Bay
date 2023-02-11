import Head from 'next/head'
import Banner from '../components/Banner'
import ServiceDisplay from '../components/ServiceDisplay';

const Home = () => {
  const display = [
    {
      title: "Fun Diving",
      image: "/peacock-mantis.JPG",
      alt: "Fun Diving in Cebu, Mactan, Olango, Hilutongan and Nalusuan",
      text: "Embark on an aquatic journey with us and discover the treasure trove of marine life that Mactan and its surrounding islands have to offer. Nalusuan Island, Olango Island, and Hilutongan are among the most pristine dive spots, where you'll encounter an awe-inspiring array of sea creatures. From the tiniest macro life to the most magnificent pelagic animals, your diving experience will be nothing short of extraordinary. With crystal clear waters, vibrant coral reefs, and diverse marine life, the Mactan area promises an unforgettable dive adventure. So, pack your gear and get ready to be swept away by the beauty of the underwater world.\n\n\n",
      href: "fun_diving",
      button: "Fun Diving",
      key: "1",
    },
    {
      title: "Our Diving Courses",
      image: "/Diving-Nalusuan.jpeg",
      alt: "Our Diving Courses from beginner level classes Open Water to Divemaster Internships",
      text: "Unleash the depths of a breathtaking underwater world with us, where the possibilities are endless. Whether you are a beginner who is eager to start a new adventure, or a seasoned diver seeking to continue your education, we have the perfect course for you. Our experienced instructors will guide you through a range of immersive diving experiences, where you can explore the diversity of marine life and discover hidden wonders beneath the waves. With a comprehensive curriculum that covers everything from the basics to advanced techniques, you will be inspired to reach new heights of underwater mastery. So come join us and embark on a journey into the heart of the ocean, where the wonders never cease and the excitement never ends.",
      href: "diving_courses",
      button: "Our Diving Courses",
      key: "2",
    },
    {
      title: "Island Hopping",
      image: "/Island-hopping.JPG",
      alt: "Island Hopping with Escondido Bay",
      text: "Indulge in a captivating and enlightening experience with us in the tranquil waters of Mactan. Whether you are an avid island hopper or an enthusiastic snorkeler, we offer a once-in-a-lifetime adventure, full of breathtaking beauty and unexpected treasures waiting to be discovered.\n\nTake a break from the hectic pace of city life and join us on an unforgettable journey to uncover the hidden wonders of the sea. Recharge your batteries on the deck of our boat, surrounded by the calming sounds of music and the fresh sea air. Savor the taste of cold beers and delicious cocktails while basking in the stunning scenery that surrounds you.\n\n",
      href: "island_hopping",
      button: "Island Hopping",
      key: "3",
    },
  ]
  return (
    <div>
      <Head>
        <title>
        Discover the Ocean&apos;s Wonders with Escondido Bay TDI Dive Center - Expert Instructors & Exceptional Dive Services
        </title>
        <meta
          name="description"
          content="Explore the Abundant Aquatic Life with Escondido Bay TDI Dive Center - Trusted Instructors & Premier Dive Services"
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
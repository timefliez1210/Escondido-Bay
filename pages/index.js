import Head from 'next/head'
import Banner from '../components/Banner'
import ServiceDisplay from '../components/ServiceDisplay'
import Card from '../components/Card'

const Home = () => {
  const display = [
    {
      title: "Fun Diving",
      image: "/peacock-mantis.JPG",
      alt: "Fun Diving in Cebu, Mactan, Olango, Hilutongan and Nalusuan",
      text: "Embark on an aquatic journey with us and discover the treasure trove of marine life that Mactan and its surrounding islands have to offer. Nalusuan Island, Olango Island, and Hilutongan are among the most pristine dive spots, where you'll encounter an awe-inspiring array of sea creatures. From the tiniest macro life to the most magnificent pelagic animals, your diving experience will be nothing short of extraordinary. With crystal clear waters, vibrant coral reefs, and diverse marine life, the Mactan area promises an unforgettable dive adventure. So, pack your gear and get ready to be swept away by the beauty of the underwater world.\n\n\n",
      href: "fun_diving",
      button: "Fun Diving",
      buttontTitle: "Book Fun Diving with us on Mactan and our Marine Sanctuaries",
      key: "1",
    },
    {
      title: "Our Diving Courses",
      image: "/Diving-Nalusuan.jpeg",
      alt: "Our Diving Courses from beginner level classes Open Water to Divemaster Internships",
      text: "Unleash the depths of a breathtaking underwater world with us, where the possibilities are endless. Whether you are a beginner who is eager to start a new adventure, or a seasoned diver seeking to continue your education, we have the perfect course for you. Our experienced instructors will guide you through a range of immersive diving experiences, where you can explore the diversity of marine life and discover hidden wonders beneath the waves. With a comprehensive curriculum that covers everything from the basics to advanced techniques, you will be inspired to reach new heights of underwater mastery. So come join us and embark on a journey into the heart of the ocean, where the wonders never cease and the excitement never ends.",
      href: "diving_courses",
      button: "Our Diving Courses",
      buttontTitle: "Learn to Dive or Improve your Diving with us in Lapu-Lapu City, Cebu",
      key: "2",
    },
    {
      title: "Island Hopping",
      image: "/Island-Hopping-Around-Mactan.JPG",
      alt: "Island Hopping with Escondido Bay on Mactan Island",
      text: "Indulge in a captivating and enlightening experience with us in the tranquil waters of Mactan. Whether you are an avid island hopper or an enthusiastic snorkeler, we offer a once-in-a-lifetime adventure, full of breathtaking beauty and unexpected treasures waiting to be discovered.\n\nTake a break from the hectic pace of city life and join us on an unforgettable journey to uncover the hidden wonders of the sea. Recharge your batteries on the deck of our boat, surrounded by the calming sounds of music and the fresh sea air. Savor the taste of cold beers and delicious cocktails while basking in the stunning scenery that surrounds you.\n\n",
      href: "island_hopping",
      button: "Island Hopping",
      buttontTitle: "Island Hopping around Mactan with Escondido Bay Dive Center",
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
        heading={'Escondido Bay Dive Center'}
        title={'Discover the Beauty Above and Below the Waves with our Expert Diving and Island Hopping Adventures.'}
        text={"The ship's history is richly steeped in a very heroic and distinguished past having been constructed so robustly that it was often used in rescue and salvage operations during turbulent sea conditions and inclement weather. Being so sturdy, it was also often used as avcargo vessel for inter-island transfers of goods, supplies and personnel, hence its past namesake “The Warrior”, a true testament to its sea worthiness and brawn.\n\n While today, it has maintained the basic structure consisting of a heavily strengthened frame and hull, the vessel has undergone a complete refurbishment focused on catering for comfortable and very safe passages from island to island, diving or events for groups of up to 40 people."}
        src={'/Escondido-Bay-Dive-Center-Lapu-Lapu-City.JPG'}
        alt={'Dive Center with daily diving, education around diving and Island Hopping'}
      />
      <ServiceDisplay
        title={'Diving and Island Hopping'}
        display={display}
      />
      <Card
        heading={'About us and what we stand for'}
        title={'Escondido Bay Dive Center: A Passion for Conservation and Education in the Heart of Mactan Island'}
        text={"Located in the bustling city of Lapu-Lapu, Escondido Bay Dive Center offers visitors a unique opportunity to explore the stunning coral reefs and diverse marine life of Mactan Island and beyond. The center is only 5 months old, but its owners, Akira, Clemens and team, are already making a big impact in the local diving community.\n\nAt Escondido Bay, conservation and education are at the forefront of the business. Akira, Clemens and their team are passionate about the ocean and the creatures that call it home, and they are dedicated to sharing that passion with others. Through their diving courses and fun diving trips, they aim to educate people about the importance of the ocean and the need to protect it for future generations.\n\nWith 5 regularly operated dive sites, Escondido Bay offers a variety of underwater experiences for all levels of divers. From the stunning Nalusuan Marine Sanctuary, to the diverse marine life of Gilutongan Marine Sanctuary, to the unique Talima Marine Sanctuary, to the beautiful coral formations at Kontiki, and the exciting Marigondon Cave, there is something for everyone. And for those looking to explore even further afield, Escondido Bay also operates long haul trips via boat to the beautiful Cabilao Island, the MV San Juan in Liloan, and the Danajon Double Barrier Reef.\n\nEscondido Bay is equipped to educate divers of all levels, from absolute beginners all the way to professional and technical divers. The center's experienced instructors are knowledgeable and patient, ensuring that even beginners feel comfortable and confident underwater. And for those who are already certified, Escondido Bay offers a range of exciting dive trips to some of the best dive sites in the area.\n\nAnd for those who want to experience the beauty of Mactan beyond the underwater world, Escondido Bay offers island hopping trips. Explore the stunning beaches, breathtaking scenery, and rich cultural heritage of the nearby islands and make memories to last a lifetime.\n\nSo whether you're a seasoned scuba diver or just getting started, come and discover the world under the waves with Escondido Bay Dive Center. With its commitment to conservation and education, you're sure to have a unique and memorable experience."}
        src={'/about_escondido_bay.jpg'}
        alt={'Escondido Bay in Lapu-Lapu City committed to excellence'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Get in Touch with us'}
        buttontTitle={'Escondido Bay Dive Center - your one stop destination for Diving and Island Hopping in Lapu-Lapu City, Cebu'}
      />
    </div>
  )
}

export default Home;
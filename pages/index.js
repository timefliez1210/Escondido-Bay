import Head from 'next/head'
import Banner from '../components/Banner'
import ServiceDisplay from '../components/ServiceDisplay'
import Card from '../components/Card'
import H2 from '../components/utils/H2'
import Divider from '../components/utils/Divider'

const Home = () => {
  const display = [
    {
      title: "Fun Diving in Lapu-Lapu City",
      image: "/peacock-mantis-diving-mactan.jpeg",
      alt: "Fun Diving in Cebu, Mactan, Olango, Hilutongan and Nalusuan",
      text: "Are you ready for a fun diving adventure in Mactan? Embark on an underwater journey and discover the mesmerizing marine life that this island paradise has to offer. Mactan is home to some of the best dive sites in the Philippines, and Nalusuan Island, Olango Island, and Hilutongan are just a few of the must-visit spots.\n\nExperience the thrill of swimming alongside an incredible array of sea creatures, from the tiniest macro life to the most magnificent pelagic animals. With crystal clear waters, vibrant coral reefs, and diverse marine life, Mactan promises an unforgettable diving experience that will leave you in awe.\n\nLooking for the best dive sites in Mactan? Look no further than Nalusuan Island, Olango Island, and Hilutongan. These sites are some of the most pristine dive spots in the area, with an awe-inspiring array of sea creatures waiting to be discovered.\n\nWith its stunning coral reefs and crystal clear waters, Mactan offers a dive adventure like no other. So pack your gear and get ready to explore the beautiful underwater world of Mactan.\n\n\n",
      href: "fun-diving",
      button: "Fun Diving",
      buttontTitle: "Book Fun Diving with us on Mactan and our Marine Sanctuaries",
      key: "1",
    },
    {
      title: "Our Diving Courses in Cebu",
      image: "/diving-courses-lapu-lapu-city.jpeg",
      alt: "Our Diving Courses from beginner level classes Open Water to Divemaster Internships",
      text: "Looking for the perfect diving course in Mactan? Look no further. Whether you're a beginner or a seasoned diver, we have the perfect course for you. Our experienced instructors will guide you through a range of immersive diving experiences, allowing you to explore the diversity of marine life and discover hidden wonders beneath the waves.\n\nAt our diving school, we offer a comprehensive curriculum that covers everything from the basics to advanced techniques, so you can be confident that you're learning the skills you need to become a master diver. With a variety of courses available, including PADI certification, SDI & TDI certification, beginner scuba diving courses, open water diving certification, and advanced diving courses all the way up to technical diving, you'll be able to find the perfect course to suit your needs.\n\nOur courses take place in some of the best dive sites in the area, such as Nalusuan Island, Olango Island, and Hilutongan, where you'll encounter an awe-inspiring array of sea creatures. With rental gear available, you won't have to worry about bringing your own equipment. So, what are you waiting for? Embark on a journey into the heart of the ocean and explore the underwater world of Mactan.\n\n",
      href: "diving-courses",
      button: "Our Diving Courses",
      buttontTitle: "Learn to Dive or Improve your Diving with us in Lapu-Lapu City, Cebu",
      key: "2",
    },
    {
      title: "Island Hopping around Mactan",
      image: "/Island-Hopping-Around-Mactan.jpeg",
      alt: "Island Hopping with Escondido Bay on Mactan Island",
      text: "Experience an extraordinary island hopping and boat charter adventure in the breathtaking waters of Mactan with us. Whether you're a seasoned traveler or a first-time visitor, our unparalleled expertise in the area promises to provide you with an unforgettable journey filled with captivating beauty and hidden treasures that await to be discovered.\n\nAt Mactan Island, our boat charters offer you an immersive experience, taking you to the most sought-after island destinations such as Nalusuan, Hilutungan, and Pandanon islands, to name a few. These islands are surrounded by crystal-clear waters, perfect for snorkeling and diving, and blessed with white sandy beaches, ideal for beachcombing and sunbathing.\nOur island hopping packages are carefully crafted to cater to your preferences, ensuring that you enjoy every moment of your journey. We provide an extensive list of customizable tours, which include a wide range of activities like snorkeling, diving, beach volleyball, fishing, and island picnics, among others.\n\nOur boat charters and island hopping packages provide more than just a tour, but rather an unforgettable journey filled with comfort, relaxation, and adventure.",
      href: "island-hopping",
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
        title={'Discover the Beauty Above and Below the Waves with our Diving and Island Hopping Adventures from Mactan'}
        text={"The ship's history is richly steeped in a very heroic and distinguished past having been constructed so robustly that it was often used in rescue and salvage operations during turbulent sea conditions and inclement weather. Being so sturdy, it was also often used as avcargo vessel for inter-island transfers of goods, supplies and personnel, hence its past namesake “The Warrior”, a true testament to its sea worthiness and brawn.\n\n While today, it has maintained the basic structure consisting of a heavily strengthened frame and hull, the vessel has undergone a complete refurbishment focused on catering for comfortable and very safe passages from island to island, diving or events for groups of up to 40 people."}
        src={'/Escondido-Bay-Dive-Center-Lapu-Lapu-City.jpeg'}
        alt={'Dive Center with daily diving, education around diving and Island Hopping'}
      />
      <ServiceDisplay
        title={'Diving and Island Hopping from Lapu-Lapu City'}
        display={display}
      />
      <H2 
        heading='Find out more about our Dive Center here on Mactan, Cebu' 
      />
      <Divider />
      <Card
        heading={'Get to Know Us'}
        title={'Our Story, Mission, and Team at Escondido Bay'}
        text={"Learn more about who we are at Escondido Bay and our journey in creating a premier diving destination in Mactan, Cebu. Discover our passion for the ocean and commitment to sustainable tourism, as well as meet our team of experienced and dedicated dive instructors and staff who ensure your safety and enjoyment on every dive. Explore our mission to provide top-notch service and create unforgettable memories for every guest, and see how our unique backgrounds and expertise contribute to making Escondido Bay a truly exceptional experience.\n\nAs a diving center, our main goal is to provide a safe and unforgettable experience for our customers. We understand that diving can be a daunting and intimidating activity for some people, which is why we make it our priority to create a relaxed and welcoming environment. Our team of experienced and certified instructors will guide you through every step of the way, ensuring that you feel comfortable and confident during your dive. We also offer a variety of diving courses, from beginner to advanced levels, so that you can improve your skills and become a certified diver.\n\nIn addition to our diving services, we also offer various activities and tours for non-divers. Our island hopping tours are a great way to explore the beautiful surrounding islands and beaches, while our snorkeling tours allow you to discover the underwater world without diving. For those who prefer to stay on land, we also organize cultural tours and nature hikes to experience the local way of life and natural beauty of the Philippines. Whatever your preference may be, we strive to provide an all-inclusive experience that caters to your interests and desires."}
        src={'/diving-and-island-hopping-cebu.jpeg'}
        alt={'Escondido Bay one stop destination for diving and Island Hopping on Mactan'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Find out more about us'}
        buttontTitle={'Escondido Bay Dive Center - your one stop destination for Diving and Island Hopping in Lapu-Lapu City, Cebu'}
        link={'/about'}
      />
    </div>
  )
}

export default Home;
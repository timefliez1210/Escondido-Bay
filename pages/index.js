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
      image: "/peacock-mantis.JPG",
      alt: "Fun Diving in Cebu, Mactan, Olango, Hilutongan and Nalusuan",
      text: "Embark on an aquatic journey with us and discover the treasure trove of marine life that Mactan and its surrounding islands have to offer. Nalusuan Island, Olango Island, and Hilutongan are among the most pristine dive spots, where you'll encounter an awe-inspiring array of sea creatures. From the tiniest macro life to the most magnificent pelagic animals, your diving experience will be nothing short of extraordinary. With crystal clear waters, vibrant coral reefs, and diverse marine life, the Mactan area promises an unforgettable dive adventure. So, pack your gear and get ready to be swept away by the beauty of the underwater world.\n\n\n",
      href: "fun_diving",
      button: "Fun Diving",
      buttontTitle: "Book Fun Diving with us on Mactan and our Marine Sanctuaries",
      key: "1",
    },
    {
      title: "Our Diving Courses in Cebu",
      image: "/Diving-Nalusuan.jpeg",
      alt: "Our Diving Courses from beginner level classes Open Water to Divemaster Internships",
      text: "Unleash the depths of a breathtaking underwater world with us, where the possibilities are endless. Whether you are a beginner who is eager to start a new adventure, or a seasoned diver seeking to continue your education, we have the perfect course for you. Our experienced instructors will guide you through a range of immersive diving experiences, where you can explore the diversity of marine life and discover hidden wonders beneath the waves. With a comprehensive curriculum that covers everything from the basics to advanced techniques, you will be inspired to reach new heights of underwater mastery. So come join us and embark on a journey into the heart of the ocean, where the wonders never cease and the excitement never ends.",
      href: "diving_courses",
      button: "Our Diving Courses",
      buttontTitle: "Learn to Dive or Improve your Diving with us in Lapu-Lapu City, Cebu",
      key: "2",
    },
    {
      title: "Island Hopping around Mactan",
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
      <H2 
        heading='Find out more about our Dive Center here on Mactan, Cebu' 
      />
      <Divider />
      <Card
        heading={'Get to Know Us'}
        title={'Our Story, Mission, and Team at Escondido Bay'}
        text={"Learn more about who we are at Escondido Bay and our journey in creating a premier diving destination in Mactan, Cebu. Discover our passion for the ocean and commitment to sustainable tourism, as well as meet our team of experienced and dedicated dive instructors and staff who ensure your safety and enjoyment on every dive. Explore our mission to provide top-notch service and create unforgettable memories for every guest, and see how our unique backgrounds and expertise contribute to making Escondido Bay a truly exceptional experience.\n\nAs a diving center, our main goal is to provide a safe and unforgettable experience for our customers. We understand that diving can be a daunting and intimidating activity for some people, which is why we make it our priority to create a relaxed and welcoming environment. Our team of experienced and certified instructors will guide you through every step of the way, ensuring that you feel comfortable and confident during your dive. We also offer a variety of diving courses, from beginner to advanced levels, so that you can improve your skills and become a certified diver.\n\nIn addition to our diving services, we also offer various activities and tours for non-divers. Our island hopping tours are a great way to explore the beautiful surrounding islands and beaches, while our snorkeling tours allow you to discover the underwater world without diving. For those who prefer to stay on land, we also organize cultural tours and nature hikes to experience the local way of life and natural beauty of the Philippines. Whatever your preference may be, we strive to provide an all-inclusive experience that caters to your interests and desires."}
        src={'/more-about-escondido-bay-mactan.jpg'}
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
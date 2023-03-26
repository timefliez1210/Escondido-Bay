import Head from 'next/head'
import Banner from '../components/Banner'
import ServiceDisplay from '../components/ServiceDisplay'

export default function article_overview() {
    const display = [
        {
          title: "Fun Diving in Lapu-Lapu City",
          image: "/peacock-mantis-diving-mactan.jpeg",
          alt: "Fun Diving in Cebu, Mactan, Olango, Hilutongan and Nalusuan",
          text: "Are you ready for a fun diving adventure in Mactan? Embark on an underwater journey and discover the mesmerizing marine life that this island paradise has to offer. Mactan is home to some of the best dive sites in the Philippines, and Nalusuan Island, Olango Island, and Hilutongan are just a few of the must-visit spots.\n\nExperience the thrill of swimming alongside an incredible array of sea creatures, from the tiniest macro life to the most magnificent pelagic animals. With crystal clear waters, vibrant coral reefs, and diverse marine life, Mactan promises an unforgettable diving experience that will leave you in awe.\n\nLooking for the best dive sites in Mactan? Look no further than Nalusuan Island, Olango Island, and Hilutongan. These sites are some of the most pristine dive spots in the area, with an awe-inspiring array of sea creatures waiting to be discovered.\n\nWith its stunning coral reefs and crystal clear waters, Mactan offers a dive adventure like no other. So pack your gear and get ready to explore the beautiful underwater world of Mactan.\n\n\n",
          href: '/articles/scuba-diving-lessons-faq',
          button: "Read the Article",
          buttontTitle: "Book Fun Diving with us on Mactan and our Marine Sanctuaries",
          key: "1",
        },
        {
          title: "Our Diving Courses in Cebu",
          image: "/diving-courses-lapu-lapu-city.jpeg",
          alt: "Our Diving Courses from beginner level classes Open Water to Divemaster Internships",
          text: "Looking for the perfect diving course in Mactan? Look no further. Whether you're a beginner or a seasoned diver, we have the perfect course for you. Our experienced instructors will guide you through a range of immersive diving experiences, allowing you to explore the diversity of marine life and discover hidden wonders beneath the waves.\n\nAt our diving school, we offer a comprehensive curriculum that covers everything from the basics to advanced techniques, so you can be confident that you're learning the skills you need to become a master diver. With a variety of courses available, including PADI certification, SDI & TDI certification, beginner scuba diving courses, open water diving certification, and advanced diving courses all the way up to technical diving, you'll be able to find the perfect course to suit your needs.\n\nOur courses take place in some of the best dive sites in the area, such as Nalusuan Island, Olango Island, and Hilutongan, where you'll encounter an awe-inspiring array of sea creatures. With rental gear available, you won't have to worry about bringing your own equipment. So, what are you waiting for? Embark on a journey into the heart of the ocean and explore the underwater world of Mactan.\n\n",
          href: "bluenomads-escondidobay-ocean-conservation-partnership",
          button: "Read the Article",
          buttontTitle: "Learn to Dive or Improve your Diving with us in Lapu-Lapu City, Cebu",
          key: "2",
        },
        {
          title: "Island Hopping around Mactan",
          image: "/Island-Hopping-Around-Mactan.jpeg",
          alt: "Island Hopping with Escondido Bay on Mactan Island",
          text: "Experience an extraordinary island hopping and boat charter adventure in the breathtaking waters of Mactan with us. Whether you're a seasoned traveler or a first-time visitor, our unparalleled expertise in the area promises to provide you with an unforgettable journey filled with captivating beauty and hidden treasures that await to be discovered.\n\nAt Mactan Island, our boat charters offer you an immersive experience, taking you to the most sought-after island destinations such as Nalusuan, Hilutungan, and Pandanon islands, to name a few. These islands are surrounded by crystal-clear waters, perfect for snorkeling and diving, and blessed with white sandy beaches, ideal for beachcombing and sunbathing.\nOur island hopping packages are carefully crafted to cater to your preferences, ensuring that you enjoy every moment of your journey. We provide an extensive list of customizable tours, which include a wide range of activities like snorkeling, diving, beach volleyball, fishing, and island picnics, among others.\n\nOur boat charters and island hopping packages provide more than just a tour, but rather an unforgettable journey filled with comfort, relaxation, and adventure.",
          href: "importance-of-good-habits-while-diving",
          button: "Read the Article",
          buttontTitle: "Island Hopping around Mactan with Escondido Bay Dive Center",
          key: "3",
        },
      ]
  return (
    <div>
        <Head>
        <title>
        Discover Your Passion for the Ocean at Escondido Bay Diving: Diving Instructors in Lapu-Lapu City
        </title>
        <meta
          name="description"
          content="Learn to dive and explore the underwater world with Escondido Bay Diving in Cebu. Offering a wide range of courses from beginner to professional or technical diver, including Open Water, Advanced, Rescue, and Specialties. Join us for a unique diving experience in Lapu-Lapu City."
        />
      </Head>
      <Banner
        heading={'All about the Ocean'}
        title={'Discover the Hidden Treasures of the Ocean with Every Dive in the Philippines'}
        text={"No matter if you are a complete beginner or already an experienced diver, we have a wide variety of Diving Certification courses to either start your adventure or improve it. \n\nReach out to us if you have any questions or don't find what you are looking for, we are sure we can help you."}
        src={'/Diving-Certification-Mactan.jpeg'}
        alt={'Learn Scuba Diving on Mactan Lapu-Lapu City'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <ServiceDisplay
        title={'Articles all around Diving and Island Hopping on Mactan'}
        display={display}
      />
    </div>
  )
}

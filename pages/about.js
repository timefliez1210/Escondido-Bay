import Head from 'next/head'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Reviews from '../components/Reviews'
import H2 from '../components/utils/H2'
import Paragraph from '../components/utils/Paragraph'
import Divider from '../components/utils/Divider'

export default function about() {
  return (
    <div>
      <Head>
        <title>
        Discover Our Story: Learn About Our Dive Team and Passion for the Ocean here in Mactan, Cebu
        </title>
        <meta
          name="description"
          content="Explore the Abundant Aquatic Life with Escondido Bay TDI Dive Center - Trusted Instructors & Premier Dive Services"
        />
      </Head>
      <Banner
        heading={'About Escondido Bay Dive Center'}
        title={'What do our Customers say about us and who we are.'}
        text={"The ship's history is richly steeped in a very heroic and distinguished past having been constructed so robustly that it was often used in rescue and salvage operations during turbulent sea conditions and inclement weather. Being so sturdy, it was also often used as avcargo vessel for inter-island transfers of goods, supplies and personnel, hence its past namesake “The Warrior”, a true testament to its sea worthiness and brawn.\n\n While today, it has maintained the basic structure consisting of a heavily strengthened frame and hull, the vessel has undergone a complete refurbishment focused on catering for comfortable and very safe passages from island to island, diving or events for groups of up to 40 people."}
        src={'/about-escondido-bay-mactan.jpeg'}
        alt={'About our Dive Center and Island Hopping around Mactan'}
      />
      <Reviews title='Find more Reviews on:'/>
      <Card
        heading={'About us and what we stand for'}
        title={'Escondido Bay Dive Center: A Passion for Conservation and Education in the Heart of Mactan Island'}
        text={"Located in the bustling city of Lapu-Lapu, Escondido Bay Dive Center offers visitors a unique opportunity to explore the stunning coral reefs and diverse marine life of Mactan Island and beyond. The center is only 5 months old, but its owners, Akira, Clemens and team, are already making a big impact in the local diving community.\n\nAt Escondido Bay, conservation and education are at the forefront of the business. Akira, Clemens and their team are passionate about the ocean and the creatures that call it home, and they are dedicated to sharing that passion with others. Through their diving courses and fun diving trips, they aim to educate people about the importance of the ocean and the need to protect it for future generations.\n\nWith 5 regularly operated dive sites, Escondido Bay offers a variety of underwater experiences for all levels of divers. From the stunning Nalusuan Marine Sanctuary, to the diverse marine life of Gilutongan Marine Sanctuary, to the unique Talima Marine Sanctuary, to the beautiful coral formations at Kontiki, and the exciting Marigondon Cave, there is something for everyone. And for those looking to explore even further afield, Escondido Bay also operates long haul trips via boat to the beautiful Cabilao Island, the MV San Juan in Liloan, and the Danajon Double Barrier Reef.\n\nEscondido Bay is equipped to educate divers of all levels, from absolute beginners all the way to professional and technical divers. The center's experienced instructors are knowledgeable and patient, ensuring that even beginners feel comfortable and confident underwater. And for those who are already certified, Escondido Bay offers a range of exciting dive trips to some of the best dive sites in the area.\n\nAnd for those who want to experience the beauty of Mactan beyond the underwater world, Escondido Bay offers island hopping trips. Explore the stunning beaches, breathtaking scenery, and rich cultural heritage of the nearby islands and make memories to last a lifetime.\n\nSo whether you're a seasoned scuba diver or just getting started, come and discover the world under the waves with Escondido Bay Dive Center. With its commitment to conservation and education, you're sure to have a unique and memorable experience."}
        src={'/about_escondido_bay.jpeg'}
        alt={'Escondido Bay in Lapu-Lapu City committed to excellence'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Get in Touch with us'}
        buttontTitle={'Escondido Bay Dive Center - your one stop destination for Diving and Island Hopping in Lapu-Lapu City, Cebu'}
      />
      <H2 heading='Meet the Team' />
      <Divider />
      <Card
        heading={'Clemens'}
        title={'Accomplished Dive Instructor and Certified Technical Diver Based on Mactan'}
        text={"Meet Clemens, our multi-talented dive instructor who is both a native German and a graduate of Humboldt-Universität zu Berlin. With a background in web development, including a focus on blockchain technology, he also happens to be an accomplished dive instructor. Clemens offers dive certification courses within PADI, SDI, and TDI in both German and English languages.\n\nBut that’s not all – Clemens is also a certified technical diver on open circuit and closed circuit rebreather. He believes that there should be no compromise when it comes to safety and competency in diving, and he strives to instill this philosophy in his students.\n\nAt our dive operation, we take safety seriously and ensure that all of our instructors adhere to the highest standards of training. With Clemens leading the way, you can rest assured that you are in good hands during your dive certification course.\n\nBut don’t let his serious dedication to safety fool you – Clemens also knows how to have fun! With his quick wit and sense of humor, he’ll have you laughing and enjoying your dive experience to the fullest.\n\nSo if you’re looking for a dive instructor who can offer you both the highest level of training and a fun, enjoyable experience, look no further than Clemens. Book your dive certification course with him today and discover the underwater world like never before!"}
        src={'/Clemens-Fabig.jpeg'}
        alt={'Clemens Fabig Recreational and Technical Dive Instructor with Escondido Bay Dive Center'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <Card
        heading={'Akira'}
        title={'The Multi-Talented Hospitality Expert and Diving Enthusiast Behind Escondido Bay'}
        text={"Are you looking for a diving destination that's managed by people with a wealth of experience in the hospitality industry? Look no further than Escondido Bay! Our operational standards and strategic vision are set by Akira, who has an impressive track record in the development and management of high-end hotels, branded residences, and private clubs worldwide.\n\nBut Akira isn't just a business mastermind. He's also a passionate diver who knows the local diving spots like the back of his hand. In fact, he shares this passion with our dive instructor, Clemens, who is a certified technical diver and experienced instructor in PADI, SDI, and TDI courses.\n\nTogether, Akira and Clemens are committed to making Escondido Bay not only a top diving destination but also a valuable member of the local community. Akira is heavily involved in supporting causes and initiatives that promote the growth and exposure of our beautiful destination.\n\nSo come dive with us and experience the perfect blend of hospitality and passion for the ocean and the outdoors. With Akira and Clemens leading the way, you're in for a treat at Escondido Bay!"}
        src={'/Akira-Moreno.jpeg'}
        alt={'Akira Moreno with Escondido Bay Dive Center in Lapu-Lapu City'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <Card
        heading={'Christine'}
        title={'From Food Business Owner to Fearless Diver and Boat Manager'}
        text={"Meet Christine, a born-and-raised Manila girl with a knack for running her own food preparation, catering, and delivery business. But when Covid hit, Christine saw an opportunity to expand her skills in customer care, service, and hospitality. And her hard work paid off when Akira and Clemens immediately hired her to manage the day-to-day operations of Escondido Bay.\n\nWorking onboard, Christine has embraced the ocean and has become a fearless Advanced Diver. But her talents don't stop there. While onboard, she whips up her delicious homemade food delicacies and serves up classic cocktails. Plus, she hosts island hopping and themed events to keep the party going.\n\nAnd when Christine isn't managing the boat or cooking up a storm, she's off traveling throughout the Philippines in search of her next shark encounter. With Christine at the helm, you're sure to have a fun and unforgettable experience onboard Escondido Bay."}
        src={'/Christine-Lautan.jpeg'}
        alt={'Christine Lautan with Escondido Bay Dive Center on Mactan'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <H2 heading='Mactan Ocean Adventure with our Boat' />
      <Divider />
      <Paragraph text={'Our boat has a rich and distinguished history, having been constructed so robustly that it was often used in rescue and salvage operations during turbulent sea conditions and inclement weather. Its sea worthiness and brawn earned it the name "The Warrior" during its days as a cargo vessel for inter-island transfers of goods, supplies, and personnel.\n\nToday, our vessel has undergone a complete refurbishment focused on providing a comfortable and safe experience for up to 50 people during island hopping and diving trips from Mactan. While it maintains its heavily strengthened frame and hull, our boat has been modernized with amenities to ensure a smooth and enjoyable journey.\n\nWhether you are embarking on a fun diving trip, a diving course, or simply enjoying a leisurely island hopping excursion, our boat provides the perfect setting for your adventure. With a keen focus on safety and comfort, our crew ensures that you will have a memorable and stress-free experience on the water.'} />
    </div>
  )
}

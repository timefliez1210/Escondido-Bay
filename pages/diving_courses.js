import Head from 'next/head'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Link from 'next/link'
import Cta from '../components/Cta'
import ReviewLinks from '../components/ReviewLinks'
import H2 from '../components/utils/H2'
import Paragraph from '../components/utils/Paragraph'
import Divider from '../components/utils/Divider'

export default function diving_courses() {
  return (
    <div>
      <Head>
        <title>
        Find Your Passion for the Ocean at Escondido Bay Diving: Inspiring Diving Education with Expert Instructors in Lapu-Lapu City
        </title>
        <meta
          name="description"
          content="Learn to dive and explore the underwater world with Escondido Bay Diving in Cebu. Offering a wide range of courses from beginner to professional or technical diver, including Open Water, Advanced, Rescue, and Specialties. Join us for a unique diving experience in Lapu-Lapu City."
        />
      </Head>
      <Banner
        heading={'Diving Courses in Lapu-Lapu City'}
        title={'Discover the Hidden Treasures of the Ocean with Every Dive in the Philippines'}
        text={"No matter if you are a complete beginner or already an experienced diver, we have a wide variety of Diving Certification courses to either start your adventure or improve it. \n\nReach out to us if you have any questions or don't find what you are looking for, we are sure we can help you."}
        src={'/Diving-Certification-Mactan.jpeg'}
        alt={'Learn Scuba Diving on Mactan Lapu-Lapu City'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <H2 heading='Diving Courses on Mactan with Escondido Bay' />
      <Divider />
      <Paragraph text={'Our diving courses in Lapu-Lapu City cater to all levels of divers, from beginners to experienced divers looking to expand their skills. We offer a range of courses, including the Open Water Diver course for those who want to get certified and start exploring the underwater world, as well as more advanced courses like the Advanced Open Water Diver and Rescue Diver courses.\n\nFor those interested in technical diving, we also offer courses like TDI Nitrox and Intro into Tec. These courses provide divers with the knowledge and skills to safely use advanced diving equipment and techniques, allowing them to explore deeper and stay underwater for longer periods of time.\n\nOur experienced and certified instructors provide personalized training and guidance to ensure that our students receive the best possible instruction and are well-prepared for their future dives. We also provide all necessary equipment and use state-of-the-art facilities to ensure that our students have a safe and enjoyable learning experience.\n\nWhether you\'re just starting out or looking to expand your skills, our diving courses in Lapu-Lapu City offer something for everyone. Join us for an unforgettable underwater adventure!'} />
      <H2 heading='Our Diving Courses in Overview' />
      <Divider />
      <div className='overflow'>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Description</th>
              <th>Price</th>
              <th>Find some Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Discover Scuba Diving</td>
              <td>Discover Scuba Diving is a one-day experience where participants learn basic diving skills and explore the underwater world with a certified instructor</td>
              <td>PHP 3,000</td>
              <td>
                <Link 
                href="#two" 
                style={{ textDecoration: 'none' , color: 'white'}}
                title="Read More about Discover Scuba Diving in Mactan"
                >
                  Read More
                </Link>
              </td>
            </tr>
            <tr>
              <td>Open Water Training</td>
              <td>The Open Water Course is a comprehensive diving course that teaches fundamental skills and prepares divers for open water diving without a professional.<br/>Duration: 2-3 Days</td>
              <td>PHP 18,000</td>
              <td>
                <Link 
                href="#one" 
                style={{ textDecoration: 'none' , color: 'black'}}
                title="Read More about Open Water Training in Lapu-Lapu City"
                >
                  Read More
                </Link>
              </td>
            </tr>
            <tr>
              <td>Advanced Open Water Training</td>
              <td>The Advanced Open Water course is designed to enhance diving skills and increase confidence in various diving conditions.<br/>Duration: 2 Days</td>
              <td>PHP 16,000</td>
              <td>
                <Link 
                href="#three" 
                style={{ textDecoration: 'none' , color: 'white'}}
                title="Read More about Advanced Open Water in Cebu"
                >
                  Read More
                </Link>
              </td>
            </tr>
            <tr>
              <td>Rescue Diver and First Response Training</td>
              <td>The Rescue Diver and First Responder course teaches skills to handle emergency situations and prevent accidents while diving.<br/>Duration: 3-4 Days</td>
              <td>PHP 26,000</td>
              <td>
                <Link 
                href="#four" 
                style={{ textDecoration: 'none' , color: 'black'}}
                title="Read More about becoming a Rescue Diver and First Responder with Escondido Bay in Lapu-Lapu City"
                >
                  Read More
                </Link>
              </td>
            </tr>
            <tr>
              <td>Divemaster Internship</td>
              <td>The Divemaster Internship trains experienced divers to become professional diving leaders capable of supervising and guiding recreational diving activities.<br/>Duration: Minimum of 15 Days</td>
              <td>Packages starting at PHP 50,000</td>
              <td>
                <Link 
                href="#five" 
                style={{ textDecoration: 'none' , color: 'white'}}
                title="Read More about becoming a Divemaster in the Philippines"
                >
                  Read More
                </Link>
              </td>
            </tr>
            <tr>
              <td>Enriched Air or Nitrox Training</td>
              <td>Nitrox training enables divers to extend bottom time and reduce nitrogen levels, offering a safer and more comfortable dive experience.<br/>Duration: 1 Day</td>
              <td>PHP 11,000</td>
              <td>
                <Link 
                href="#six" 
                style={{ textDecoration: 'none' , color: 'black'}}
                title="Read More about Nitrox Training in Cebu"
                >
                  Read More
                </Link>
              </td>
            </tr>
            <tr>
              <td>Deep Diving Training</td>
              <td>The Deep Diving course is designed to train divers to safely plan and execute dives to depths of up to 40 meters.<br/>Duration: 1-2 Days</td>
              <td>PHP 12,000</td>
              <td>
                <Link 
                href="#seven" 
                style={{ textDecoration: 'none' , color: 'white'}}
                title="Read More about Deep Diving around Mactan"
                >
                  Read More
                </Link>
              </td>
            </tr>
            <tr>
              <td>Wreck Diver Training</td>
              <td>Wreck diving training equips divers with skills to safely explore sunken ships, airplanes and other underwater wrecks in diverse conditions.<br/>Duration: 1-2 Days</td>
              <td>PHP 14,000</td> 
              <td>
                <Link 
                href="#eight" 
                style={{ textDecoration: 'none' , color: 'black'}}
                title="Read More about Wreck Diving in Cebu"
                >
                  Read More
                </Link>
              </td>
            </tr>
            <tr>
              <td>Sidemount Training</td>
              <td>Sidemount training is a diving technique where cylinders are attached to the diver&apos;s sides, allowing for greater flexibility and ease of movement underwater.<br/>Duration: 1-2 Days</td>
              <td>PHP 16,000</td>
              <td>
                <Link 
                href="#nine" 
                style={{ textDecoration: 'none' , color: 'white'}}
                title="Read More about Sidemount Training with Escondido Bay, Lapu-Lapu City"
                >
                  Read More
                </Link>
              </td>
            </tr>
          </tbody>
      </table>
      </div>
      <Cta text='Get in Touch' buttontTitle='Book your Diving Course in Mactan' />  
      <Paragraph text='Please note that above times are indicative and assume you finished the theory with e-learning before we start hands-on training' />
      <br /> <br /><br /> <br />
      <ReviewLinks title='Read what our Customers say about our Diving Courses in Cebu' />  
      <br /> <br /><br /> <br />
      <H2 heading='Our Diver Training on Mactan in detail' />
      <Divider />
      <div id='one'></div>
      <Card 
        heading={'Learn to Dive in Lapu-Lapu City'}
        title={'Dive into a New Adventure with Escondido Bay Dive Center - Your Open Water Certification Destination'}
        text={"If you're looking to start your scuba diving journey, look no further than Escondido Bay Dive Center. Our experienced instructors are dedicated to providing top-quality training and education to help you achieve your diving goals. Our Open Water Certification course is designed specifically for beginners, giving you the knowledge and skills you need to dive safely and confidently.\n\nWhether you're a complete novice or simply looking to try something new, the Open Water Certification course will introduce you to the exciting world of scuba diving. You'll learn about the equipment you'll use, the skills you'll need to dive safely, and the knowledge you'll need to understand the underwater environment. With Escondido Bay Dive Center, you can be confident that you're getting the best training and education available.\n\nTake the plunge and discover the wonders of the ocean with Escondido Bay Dive Center. Our commitment to safety, education, and conservation will ensure that you have a unique and memorable experience.\n\n\nPrice for our Open Water Certification is PHP18,000."}
        src={'/Open-Water-Course-Mactan.jpeg'}
        alt={'Open Water Diver Certification Course in Lapu-Lapu City'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Book your Open Water Course'}
        buttontTitle={'Your Open Water Course in Lapu-Lapu City'}
      />
      <div id='two'></div>
      <Card
        heading={'Discover Scuba Diving in Cebu'}
        title={'Unleash Your Adventure with Discover Scuba Diving at Escondido Bay: Explore the Beauty of the Ocean with Expert Instructors.'}
        text={"Take your first dive into the world of scuba diving with Escondido Bay's Discover Scuba Diving experience. Our certified instructors will guide you through a safe and exciting introduction to the underwater world. With small class sizes and personalized attention, you can be sure to get the most out of your diving experience.\n\nDiscover the breathtaking biodiversity of the ocean and see the world from a new perspective. From curious beginners to experienced divers, our Discover Scuba Diving program is designed for anyone who wants to explore the underwater world.\n\nJoin us for a life-changing adventure and become a part of the ocean community. Book your Discover Scuba Diving experience today and get ready to dive into a world of wonder and excitement!\n\n\nThe Price for the Discover Scuba Diving Experience is PHP3,000."}
        src={'/Discover-Scuba-Diving-Mactan.jpeg'}
        alt={'Discover Scuba Diving and Scuba Diver Courses on Mactan, Cebu'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Book your DSD Experience'}
        buttontTitle={'Discover Scuba with Escondido Bay Dive Center, Cebu'}
      />
      <div id='three'></div>
      <Card
        heading={'Advanced Open Water Diver on Mactan'}
        title={'Advance Your Diving Skills with Escondido Bay Dive Center - Your Advanced Open Water Diver Destination'}
        text={"Take your scuba diving to the next level with Escondido Bay Dive Center's Advanced Open Water Diver course. Whether you're looking to gain more experience, explore new dive sites, or simply improve your skills, this course is perfect for you. Our experienced instructors will guide you through a range of specialties, including deep diving, navigation, and more, giving you the knowledge and skills you need to dive safely and confidently.\n\nThe Advanced Open Water Diver course is designed to challenge and inspire you, helping you develop your skills and expand your knowledge. With a focus on safety, education, and adventure, you can be sure that you're getting the best training and education available.\n\nChoose Escondido Bay Dive Center as your Advanced Open Water Diver destination and take your scuba diving to the next level. With our commitment to safety, education, and conservation, you're sure to have a unique and memorable experience.\n\n\nThe Price for the Advanced Open Water Certification is PHP16,000."}
        src={'/Advanced-Open-Water-Cebu.jpeg'}
        alt={'Advanced Open Water Diver Certification in Cebu'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Book your Advanced Course'}
        buttontTitle={'Redifine your Skills now with Advanced Open Water on Mactan, Cebu'}
      />
      <div id='four'></div>
      <Card
        heading={'Rescue Diver and First Response'}
        title={'Rescue Diver and First Response Training at Escondido Bay Dive Center'}
        text={"As a scuba diver, being prepared for unexpected situations is a top priority. Accidents and emergencies can happen at any time, and it’s essential to be equipped with the right skills and knowledge to respond appropriately. That’s where the Rescue Diver and First Response training comes in.\nAt Escondido Bay Dive Center, we provide comprehensive training programs that equip divers with the skills and confidence to handle emergency situations both in and out of the water. Our training programs are taught by experienced and knowledgeable instructors, who are dedicated to providing students with hands-on and engaging training experiences.\nThe Rescue Diver course is designed to teach divers how to prevent and manage emergencies, and how to render assistance to other divers in need. The course covers a range of topics, including self-rescue, diver stress, emergency management and equipment, and panicking divers. During the course, students will also learn how to assess and manage dive accidents and illnesses, as well as how to conduct rescue scenarios and evacuation procedures.\nIn addition to the Rescue Diver course, Escondido Bay Dive Center also offers the First Response training program. This program is designed to teach divers the skills and techniques needed to provide immediate care and stabilize patients in an emergency situation. The program covers a range of topics, including primary assessment, CPR, basic life support, and wound management.\nBy completing both the Rescue Diver and First Response training programs, divers can have the peace of mind that they have the skills and knowledge to handle emergency situations. These courses are ideal for divers who are looking to advance their dive education, and for those who are looking to become dive professionals.\nAt Escondido Bay Dive Center, we are committed to providing high-quality and engaging training programs that help divers achieve their goals and advance their diving skills.\n\n\nPrice for Rescue Diver and First Response Training is PHP26,000."}
        src={'/Rescue-Diver-Lapu-Lapu-City.jpeg'}
        alt={'Rescue Diver and First Responder on Mactan'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Book your Rescue Course'}
        buttontTitle={'Rescue Diver and First Responder in Lapu-Lapu City'}
      />
      <div id='five'></div>
      <Card
        heading={'Divemaster Internship in the Philippines'}
        title={'Dive into a New Career with Escondido Bay\'s Divemaster Internship'}
        text={"Are you looking to take your diving to the next level and turn it into a career? Then look no further than Escondido Bay's Divemaster Internship! Our professional and experienced instructors will guide you through the process of becoming a divemaster, the first professional level in the diving industry.\nThe Divemaster Internship is a comprehensive training program that will teach you all the necessary skills to lead and guide scuba dives, assist instructors with student divers, and manage dive activities. You will also gain a deeper understanding of dive theory, dive skills and the diving environment, as well as learn how to conduct dive briefings, manage dive equipment, and solve common diving problems.\nOne of the unique aspects of our Divemaster Internship is the opportunity to gain hands-on experience by working with our instructors and participating in real-life dive scenarios. This will give you the chance to put into practice what you have learned and develop your leadership and communication skills.\nAt Escondido Bay, we offer a flexible schedule for our Divemaster Internship, allowing you to complete the program at your own pace and on your own time. Our goal is to ensure that you receive the best possible training and support to help you reach your full potential as a dive professional.\nIn addition, our Divemaster Internship program is recognized by several international dive organizations, including Scuba Diving International (SDI) and Technical Diving International (TDI), which means that once you complete the program, you will be qualified to work as a dive professional anywhere in the world.\nSo, whether you're a seasoned diver looking to take the next step in your diving career, or simply want to learn more about the underwater world, our Divemaster Internship is the perfect program for you. So why wait? Sign up today and start your journey towards a career in diving!\n\n\nDivemaster Internships starting at PHP50,000"}
        src={'/Divemaster-Internship-Cebu.jpeg'}
        alt={'Divemaster Internship with Escondido Bay in Cebu'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Book your Divemaster'}
        buttontTitle={'Book your Divemaster Internship in Cebu with Escondido Bay Dive Center'}
      />
      <div id='six'></div>
      <Card
        heading={'Enriched Air Diver (also known as Nitrox diving)'}
        title={'Enhance Your Diving with Nitrox - Escondido Bay Dive Center\'s Nitrox Specialty Course'}
        text={"Take your diving to the next level with Escondido Bay Dive Center's Nitrox Specialty course. Our experienced instructors will guide you through the basics of nitrox diving, giving you the skills and knowledge you need to dive safely and comfortably.\n\nNitrox diving offers a range of benefits, including longer no-decompression limits, reduced nitrogen absorption, and increased safety. Whether you're a recreational or technical diver, nitrox diving is the perfect choice for those looking to enhance their diving experience.\n\nChoose Escondido Bay Dive Center as your nitrox diving experts and experience the benefits of nitrox diving. With our commitment to safety, education, and conservation, you're sure to have a unique and memorable experience.\n\n\nThe Price for the Nitrox Certification is PHP11,000."}
        src={'/Nitrox-Certification-Cebu.jpeg'}
        alt={'Enriched Air or Nitrox Certification in Lapu-Lapu City'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Book your Nitrox Course'}
        buttontTitle={'Learn to Dive Nitrox in Lapu-Lapu City, Cebu'}
      />
      <div id='seven'></div>
      <Card
        heading={'Deep Diving Specialist'}
        title={'Explore the Depths of the Ocean with Escondido Bay Dive Center\'s Deep Diving Specialty Course'}
        text={"Ready to take the plunge and explore the depths of the ocean? Then consider Escondido Bay Dive Center's Deep Diving Specialty course. Our experienced instructors will guide you through the basics of deep diving, giving you the skills and knowledge you need to dive safely and comfortably.\n\nDeep diving offers a range of new and exciting experiences, including the chance to see unique and fascinating marine life, explore shipwrecks, and visit deep walls and drop-offs. With a focus on safety and education, our deep diving specialty course will help you develop the skills and knowledge you need to dive safely and confidently.\n\nChoose Escondido Bay Dive Center as your deep diving experts and discover the wonders of the deep ocean. With our commitment to safety, education, and conservation, you're sure to have a unique and memorable experience.\n\n\nThe Price for the Deep Specialty Certification is PHP12,000."}
        src={'/Deep-Diving-Specialty-Mactan.jpeg'}
        alt={'Deep Diving Training in Lapu-Lapu City'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Book your Deep Specialty'}
        buttontTitle={'Dive to a Maximum of 40m with our Deep Specialty Course'}
      />
      <div id='eight'></div>
      <Card
        heading={'Wreck Diver Training in Cebu'}
        title={'Explore the Wrecks of the Ocean with Escondido Bay Dive Center\'s Wreck Diving Specialty Course'}
        text={"Ready to explore the wrecks of the ocean? Then consider Escondido Bay Dive Center's Wreck Diving Specialty course. Our experienced instructors will guide you through the basics of wreck diving, giving you the skills and knowledge you need to dive safely and comfortably.\n\nWreck diving offers a unique and fascinating look at history, with the chance to explore the remains of shipwrecks, planes, and other vessels. With a focus on safety, education, and adventure, our wreck diving specialty course will help you develop the skills and knowledge you need to dive safely and confidently.\n\nChoose Escondido Bay Dive Center as your wreck diving experts and explore the history of the ocean. With our commitment to safety and exploration there isn\'t a better place.\n\n\nThe Price for the Wreck Diving Certification is PHP14,000."}
        src={'/Wreck-Diving-Education-Mactan.jpeg'}
        alt={'Wreck Diver Specialty in Cebu, Philippines'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Book your Wreck Certification'}
        buttontTitle={'Dive the sunken treasures of the Philippines'}
      />
      <div id='nine'></div>
      <Card
        heading={'Sidemount Diving'}
        title={'Redundancy & Innovation: Experience Sidemount Diving'}
        text={"If you're looking for a new and exciting way to dive, look no further than sidemount diving. This innovative diving method is gaining popularity among divers, and it's easy to see why. Here are some of the key benefits of sidemount diving and why it's worth considering for your next diving adventure.\n\nEase of Movement\nOne of the biggest advantages of sidemount diving is the ease of movement it offers. With the tanks mounted on your sides instead of on your back, you have much more freedom of movement in the water. This makes it easier to maneuver in tight spaces, such as caves or wrecks, and also makes the dive much more comfortable.\n\nBetter Weight Distribution\nAnother benefit of sidemount diving is better weight distribution. With the tanks mounted on your sides, the weight is evenly distributed on your body, reducing the stress on your back and allowing for a more comfortable dive.\n\nEasier Equipment Management\nSidemount diving also makes equipment management much easier. With the tanks mounted on your sides, you have easy access to your regulators, gauges, and other diving gear, making it easier to manage and make adjustments during your dive.\n\nFlexibility\nFinally, sidemount diving is also much more flexible than traditional backmount diving. You can easily switch between different tank sizes, allowing you to customize your dive setup to suit the specific dive site you're exploring.\n\nIn conclusion, sidemount diving is a unique and exciting way to dive that offers numerous benefits over traditional backmount diving. So why not give it a try? Start your sidemount diving journey with Escondido Bay Dive Center today.\n\n\nThe Price for the Sidemount Course is PHP16,000."}
        src={'/Sidemount-Diving-Certification-Cebu.jpeg'}
        alt={'Sidemount Course in Lapu-Lapu City'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Book your Sidemount Course'}
        buttontTitle={'Dive with more flexibility on Sidemount, book with us now on Mactan'}
      />
      <div id='ten'></div>
      <Card
        heading={'Night and Limited Visibility Diving Specialty'}
        title={'Learn more about the special underwater world here on Mactan at night'}
        text={"Night and limited visibility diving can be some of the most thrilling experiences a diver can have. But it requires special training and equipment to do it safely. That's where the Night and Limited Visibility Specialty comes in.\n\nThis specialty course teaches divers how to navigate and communicate underwater in low light conditions, as well as how to handle emergency situations. Divers will also learn about the different types of nocturnal marine life and how to observe them without disturbing their natural behavior.\n\nOne of the most important aspects of night diving is having the right gear. Divers need a reliable dive light to illuminate their path and to be able to communicate effectively with their dive buddy. It's also recommended to have a backup light in case of equipment failure.\n\nLimited visibility diving, such as in murky water or strong currents, can also be challenging but equally rewarding. This specialty course will teach divers how to handle the unique challenges presented by these conditions, such as how to maintain proper buoyancy and how to navigate safely.\n\nBy taking the Night and Limited Visibility Specialty course, divers can expand their diving capabilities and explore a whole new world underwater. So, don't be afraid of the dark or low visibility - embrace it and become a more confident and skilled diver!/n/nThe Price for Night and Limited Visibility Specialty is PHP15,000."}
        src={'/Cuttlefish-at-nicht-on-Mactan.jpeg'}
        alt={'Night Diving on Mactan'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Book your Night Diving Course'}
        buttontTitle={'Dive with more flexibility on Sidemount, book with us now on Mactan'}
      />
 </div>
  )
}
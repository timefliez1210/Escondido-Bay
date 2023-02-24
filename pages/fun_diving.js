
import Head from 'next/head'
import Banner from '../components/Banner'
import Card from '../components/Card'
import ServiceDisplay from '../components/ServiceDisplay'
import Cta from '../components/Cta'

export default function fun_diving() {
  const display = [
    {
      title: "Our Sunday Boat Diving Promo",
      image: "/Sunday-Dive-Promo-Mactan.JPG",
      alt: "Our Sunday Dive Promo on Mactan Island",
      text: "At our dive center in Cebu, we are dedicated to providing a consistently breathtaking diving experience for our local diving community and beyond. That's why we invite you to join us for our Sunday Dive Promo. For just PHP 4,500, you'll get to immerse yourself in three breathtaking dives from the comfort of our boat, complete with air fills and all the necessary gear.\n\nNot only that, but you'll also be treated to a delicious BBQ lunch made from scratch, accompanied by fresh coffee and a snack bar, as well as unlimited water to quench your thirst. And after a day of diving, you can continue the conversation over a cold drink from our well-stocked bar (additional charges apply). So what are you waiting for? Join us on a journey of discovery and be inspired by the diversity of our dive sites and the beauty of our abundant aquatic life.",
      href: "contact",
      button: "Get in touch for Sunday",
      key: "1",
    },
    {
      title: "Boat Dives",
      image: "/Boat-Diving-Cebu.JPG",
      alt: "Dive the beautiful Islands around Lapu-Lapu City",
      text: "Embark on a scuba diving adventure with us at Mactan Island any day of the week. Discover the beauty of Nalusuan Island, Gilutongan Island, and Olango Marine Sanctuaries and immerse yourself in their rich marine biodiversity. Please note that equipment rental is not included in the package.\n\nFor 2 dives, the cost is PHP 3,500, while 3 dives will cost PHP 5,000. This package includes lunch and snacks, coffee, and water. If you choose 2 dives, there will not be a BBQ provided, but after-dive snacks instead.\n\nAfter your dive, unwind with a drink from our bar, which is available for an additional charge based on consumption. Join us for a memorable diving experience in the stunning waters of Mactan Island.\n\n",
      href: "contact",
      button: "Boat dive with us",
      key: "2",
    },
    {
      title: "Shore Diving",
      image: "/Shore-Diving-Lapu-Lapu-City.JPG",
      alt: "Shore Diving off the coast from Lapu-Lapu City",
      text: "Embark on an underwater adventure as you discover the hidden gems of Lapu-Lapu City's shores. From the vibrant coral gardens at Kontiki Marine Sanctuary and Coral Nursery, to the mysterious Marigondon Cave, and the teeming sea life at Marigondon port's pier area, there's always something new to explore. With the occasional visit of magnificent Whale Sharks, there's no better time than now to uncover the underwater treasures that lie within reach. \n\nExperience all the beauty and diversity of our shore dive spots with our Shore Dive Packages, starting at just PHP2,500 for two dives. \n\nGet ready for a once-in-a-lifetime diving journey!\n\n\n",
      href: "contact",
      button: "Shore Dive with us",
      key: "3",
    },
  ]
  return (
    <div>
      <Head>
        <title>
        Safely Discover the Beauty of Mactan Island&apos;s Dive Sites with Escondido Bay - Fun Diving at its Best
        </title>
        <meta
          name="description"
          content="Discover the Beauty of Philippines' Marine Landscape with Safe Fun Dives at Escondido Bay Dive Center in Lapu-Lapu City, Cebu"
        />
      </Head>
      <Banner
        heading={'Fun Diving with us'}
        title={'Dive into adventure, immerse in beauty'}
        src={'/fun_diving_hero.jpg'}
        alt={'Fun Diving around Mactan Island, Lapu-Lapu City and Cordova'}
      />
      <Card
        heading={'Fun Diving with Escondido Bay'}
        title={'Reefs, Caves, Wrecks and an Abundance of Aquatic Life'}
        text={"At Escondido Bay, we offer a truly unique and diverse diving experience. Our dive sites are rich in a variety of environments, including beautiful coral reefs teeming with vibrant marine life, towering walls dropping into the deep blue, fascinating wrecks that have become artificial habitats for a multitude of species, and mysterious caves waiting to be explored.\n\nOur dive locations are handpicked for their stunning beauty and the abundance of aquatic life that call them home. From colorful schools of tropical fish, to playful dolphins and sea turtles, to the gentle giants of the ocean - whale sharks - our dive sites offer a truly unforgettable experience.\n\nWith our experienced and knowledgeable instructors, divemasters and guides, we ensure that your dive is safe, fun and memorable. Our commitment to safety and high standards, combined with the stunning beauty of our dive sites, makes Escondido Bay the perfect choice for anyone looking to experience the incredible underwater world of the Philippines. Whether you're a beginner or an experienced diver, we guarantee that you'll be amazed by the diversity and beauty of our dive sites."}
        src={'/reefscape-magnificent-anemone.JPG'}
        alt={'Fun Diving around Mactan Airport'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Ask us about Fun Diving'}
      />
      <ServiceDisplay
      title='Our Fun Diving Offers'
      display={display}
      />
      <h2>Our Fun Diving Pricing around Lapu-Lapu City in Overview</h2>
      <div className='divider'></div>
      <div className='overflow'>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Inclusions</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Our Sunday Fun Dive Promo</td>
              <td>3 Dives on air at one of our beautiful Sanctuaries<br/><br/>Homemade and Fresh BBQ-Lunch<br/><br/>Equipment, if needed<br/><br/>Snacks, Coffee and Fruits<br/><br/>Soothing tunes during our Surface time<br/><br/>Fixed Price Guarantee</td>
              <td>PHP 4,500</td>
            </tr>
            <tr>
              <td>3 Boat Dives any day of the Week</td>
              <td>3 Dives on air at one of our beautiful Sanctuaries<br/><br/>Homemade and Fresh BBQ-Lunch<br/><br/>Snacks, Coffee and Fruits<br/><br/>Soothing tunes during our Surface time<br/><br/>Fixed Price Guarantee</td>
              <td>PHP 5,000</td>
            </tr>
            <tr>
              <td>2 Boat Dives any day of the Week</td>
              <td>2 Dives on air at one of our beautiful Sanctuaries<br/><br/>Instead of BBQ-Lunch we offer on 2 Dives a big snack<br/><br/>Snacks, Coffee and Fruits<br/><br/>Soothing tunes during our Surface time<br/><br/>Fixed Price Guarantee</td>
              <td>PHP 3,500</td>
            </tr>
            <tr>
              <td>Shore Diving Packages</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1 Dive from shore</td>
              <td>Marine Entrance Fees<br/><br/>1 Tank or Air<br/><br/>Weights</td>
              <td>PHP 1,300</td>
            </tr>
            <tr>
              <td>Every following dive from shore on the same day and location</td>
              <td>1 Tank or Air<br/><br/>Weights</td>
              <td>PHP 600</td>
            </tr>
            <tr>
              <td>Long Distance Trips incl. 2 or 3 Dives</td>
              <td>2 or 3 Dives on air at one of our beautiful long hauls<br/><br/>Homemade and Fresh BBQ-Lunch<br/><br/>Equipment, if needed<br/><br/>Snacks, Coffee and Fruits<br/><br/>Soothing tunes during our Surface time<br/><br/>Fixed Price Guarantee</td>
              <td>Starting at PHP 6,000</td>
            </tr>
            <tr>
              <td>Additional we are happy to consult with you over <br/>other Diving Destinations in the Philippines</td>
              <td>In case you want to have recommendations about places beside the ones we offer, <br/>we can connect you with friends and people we know in various places all around the Philippines, <br/>so you can enjoy your holidays effortless.</td>
              <td>Free for Customers</td>
            </tr>
          </tbody>
      </table>
      </div>
      <Cta text='Book your adventure' />  
      <h2>Our Divesites around Mactan</h2>
      <div className='divider'></div>
      <Card
        heading={'Nalusuan Island'}
        title={'Shallow Reefs, a sandy slope and a steep wall'}
        text={"The Nalusuan Marine Sanctuary with its long sandbar has shallow reefs, a sandy slope reaching from 5m down to approximately 14-20m, followed by a steep falling wall with an estimated bottom between 40-50m. \n\nThe shallow reefs of Nalusuan Island are the home of an abundance of smaller fishes and colorful corals, a beautiful destination for snorkelers or divers who want to enjoy their safety stop./n/nThe sandy slope of this marine sanctuary is the habitat of all different sorts of stingrays, squids, octopuses and many more interesting sea creatures like frog fishes, from time to time we even may encounter larger ray species like the devil ray.\n\nLast but not least, one can explore the wall which hosts a lot of interesting sea creatures for those who may be fond of Macro photography. Various different species of nudibranchs, flatworms and juvenile fish hiding discreetly within the tentacles of an anemone reside here; the really patient divers might even be able to spot a pygmy seahorse within the fans along the wall.\n\nThe boat ride usually takes about 30 to 40 minutes from the Mactan Island coast or Cordova.\n\nThe island with its long sand bar is a sanctuary to all the sea creatures and to the nature lovers. You can literally reach at arm’s length the abundance of marine life"}
        src={'/Octopus-Nalusuan-Marine-Sanctuary.JPG'}
        alt={'Octopus in Nalusuan Marine Sanctuary Cebu'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Dive Nalusuan with us'}
      />
      <Card
        heading={'Gilutongan Island'}
        title={'Abundance of aquatic life and great reefs'}
        text={"Gilutongan Island has a similar shape to a shark. It is about 630 meters long and 820 meters wide. The island is home to numerous coral reefs and sea grass meadows, partially protected by the 15 hectare Gilutongan Marine Sanctuary. It is one of the most scenic diving and snorkelling destinations we have at arm's length from Mactan Island, Lapu-Lapu City or Cordova.\n\nWhether one is a freshly certified or very experienced diver, with its shallow and colorful reefs as well as steep falling wall, the vast array of sea creatures and aquatic life, makes this destination worthy of exploration. \n\nThe visibility reaches from 10m on bad days to literally crystal clear waters on good days.\n\nBig schools of jack fishes, barracudas, bat fishes can be seen frequently on this dive site and furthermore, Gilutongan is not shy of pelagic travellers every now and then, as well as the diversity the Philippines in general are famous for.\n\nThe boat ride usually takes about 40 minutes from the Mactan Island coast or Cordova."}
        src={'/Barracuda-Gilutongan-Marine-Sanctuary.JPG'}
        alt={'Gilutongan Island Baracudas near Lapu-Lapu City'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Dive Gilutongan with us'}
      />
      <Card
        heading={'Marigondon Cave'}
        title={'A steep decent into a wide daylight cave'}
        text={"Directly off the coast of Marigondon in Lapu-Lapu City, located at roughly 37m depth within an extensive reef wall, this cave is one of the most famous local dive sites.\n\nExperienced divers can access this cave or cavern either as a shore dive, which involves roughly a 200m swim or by boat.\n\nMost parts, including the entrance to the cavern, are very wide and you can see the exit during most of the duration within the cave. Even divers without a specific cave certification can join this exciting dive. \n\nWithin the cave we commonly see a multitude of stone and scorpion sishes, lionfishes and abundant species for the Macro photographer. Additionally, the rock and coral formations along with the composition of the inner structure with beautiful large sea fans make this destination particularly thrilling and fun to explore."}
        src={'/Marigondon-Cave-Critters.JPG'}
        alt={'Our Cave dive in Marigondon, Lapu-Lapu City, Cebu'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Cave Dive with us'}
      />
      <Card
        heading={'Talima Marine Sanctuary'}
        title={'Explore Talima\'s vibrant reefs, walls & swim-throughs, teeming with octopuses & pelagics.'}
        text={"The Talima Marine Sanctuary is a diver's paradise, offering a diverse range of underwater habitats for visitors to explore. With shallow reefs sloping down to 18 meters and steep walls falling down to 50 meters in some areas, the sanctuary provides a unique and challenging diving experience for both beginners and experienced divers alike.\n\nAt the shallow reefs, you'll be able to encounter a variety of colorful and vibrant marine life, including schools of tropical fish, diverse coral formations, and the occasional octopus. These curious creatures are known to entertain divers with their playful antics, making for an unforgettable experience.\n\nAs you move deeper into the sanctuary, the walls provide a stunning and dramatic backdrop to your dive. Here, you'll be able to witness the incredible diversity of marine life that inhabits these areas. Schools of larger pelagic fish, such as barracuda and trevally, are frequently spotted here, swimming alongside more elusive and reclusive species like the shy cuttlefish.\n\nFor those looking for a more immersive and exhilarating diving experience, Talima also boasts a swim-through rock structure, offering divers a unique perspective on the surrounding underwater landscape. Here, you'll be able to navigate through narrow passages and crevices, surrounded by a kaleidoscope of coral and marine life.\n\nAll in all, the Talima Marine Sanctuary provides a truly breathtaking and unforgettable diving experience, showcasing the incredible beauty and diversity of the underwater world. Whether you're a seasoned diver or just starting out, Talima is a must-visit for anyone seeking an adventure in the ocean depths."}
        src={'/Talima.jpg'}
        alt={'Candy Crab in Talima Marine Sanctuary'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Dive Talima with us'}
      />
      <Card
        heading={'Baring Marine Sanctuary'}
        title={'Baring Marine Sanctuary offers diverse marine life, rich coral reefs and abundant fish species for a unique diving experience.'}
        text={"The Baring Marine Sanctuary at Olango Island is a premier dive site in the Philippines that offers a unique and unforgettable diving experience for both beginner and experienced divers. Located near the bustling city of Cebu, the sanctuary provides a sanctuary for marine life, where visitors can witness an abundance of diverse and vibrant coral reef ecosystems.\nBaring Marine Sanctuary offers a range of dive sites that cater to different skill levels and interests. The shallow reef areas are ideal for snorkeling and beginner divers, while the deeper areas offer challenging and exhilarating experiences for advanced and technical divers. In the heart of the sanctuary is a beautiful and diverse coral reef, teeming with colorful marine life including angelfish, parrotfish, and sea turtles.\nThe reef is well protected and carefully managed, which has allowed it to flourish and become a haven for a variety of marine life. The abundant and thriving ecosystem is a testament to the positive impact that marine protected areas can have on the health of our oceans.\nOne of the highlights of diving in Baring Marine Sanctuary is the chance to witness the incredible and abundant macro life. The area is known for its healthy populations of frogfish, seahorses, and other tiny creatures that can be found hiding in the coral. Divers will also be amazed by the array of vibrant and intricate soft corals that make their homes in the reef.\nIn addition to its beautiful coral reef, Baring Marine Sanctuary is also home to a variety of wrecks and artificial reefs, making it a popular destination for wreck divers. These man-made structures have become a haven for marine life, providing a unique and fascinating dive experience.\nOverall, diving in Baring Marine Sanctuary at Olango Island provides a unique and unforgettable experience for both beginner and experienced divers. The rich and diverse ecosystem, combined with the carefully managed conservation efforts, make it a must-visit destination for any diver in the Philippines. So, gear up and explore the underwater wonder that awaits you at Baring Marine Sanctuary!"}
        src={'/AnemoneCrabinBaring.jpg'}
        alt={'Anemone Crab in the Baring Marine Sanctuary, Lapu-Lapu City'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Dive Baring with us'}
      />
      <h2>Our Medium and Long Haul Destinations from Lapu-Lapu City</h2>
      <div className='divider'></div>
      <Card
        heading={'Cabilao Island, Bohol'}
        title={'Explore Talima\'s vibrant reefs, walls & swim-throughs, teeming with octopuses & pelagics.'}
        text={"Cabilao Island is a small, yet mighty gem in the Visayan Sea, lying just west of Bohol and facing mainland Cebu. With its picturesque 8 square kilometer area and 5000 inhabitants, it’s a hidden treasure that’s definitely worth the 3-hour boat ride from Mactan. Dubbed as “The Coral Gem of the Philippines,” Cabilao Island’s stunning beauty below the surface is sure to captivate even the most seasoned of divers.\n\nFeaturing 3 main dive sites, Cabilao is renowned for its impressive tectonic walls that are home to a thriving abundance of macro critters, perfect for capturing breathtaking photos. The shallow reefs are dotted with a vibrant display of hard and soft corals, and a diverse range of fish species.\n\nBut, that’s not all. Cabilao Island is also a turtle paradise, with Hawksbill and Green Turtles making an appearance on almost every dive. These gentle giants can grow up to an impressive 170 cm in length, leaving you in awe of their sheer size.\n\nSo, what can you expect at Cabilao’s famous dive sites?\n\n\nLighthouse - With its sharp drop-off wall that plunges to a depth of 50 meters and sandy slope dotted with rocky coral patches, Lighthouse is a feast for the eyes. Home to crustaceans, octopuses, and squids, it’s an advanced dive site that’s not to be missed.\n\n\nTalisay - This straightforward dive site boasts a coral slope that leads to a wall teeming with fishes, turtles, and macro critters. If you’re lucky, you may even spot white tip reef sharks on the sandy slopes, and black tip reef sharks on the top of the wall.\n\n\nPolaris - Named after a resort facing the Cabilao reefs, Polaris features a stunning sharp wall that falls to a depth of 45-50 meters and a sandy slope that extends to 60-70 meters, making it ideal for trained technical divers. The wall is dotted with small cavern-like structures, and the shallow waters are overflowing with soft corals that provide a habitat for fish, snakes, and critters not commonly seen in the Philippines.\n\n\nDiscover a new world of adventure and beauty at Cabilao Island."}
        src={'/CabilaoIsland.jpg'}
        alt={'Green Sea Turtle on Drop off in Cabilao Island'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Dive Cabilao with us'}
      />
      <style jsx>{`
       h1, h2 {
        text-align: center;
        margin: 50px 0px 20px 0px;
       }
       p {
        max-width: 80vw;
        margin: 20px auto;
       }
       .divider {
        height: 3px;
        width: 15%;
        background: white;
        margin: auto auto;
      }
      .styled-table {
        border-collapse: collapse;
        margin: 25px auto;
        font-size: 0.9em;
        font-family: sans-serif;
        min-width: 400px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    }
    .styled-table thead tr {
      background-color: #009879;
      color: #ffffff;
      text-align: left;
  }
  .styled-table th,
.styled-table td {
    padding: 12px 15px;
}
.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
  color: black;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
.overflow {
  overflow-x: auto;
}
       `}</style>
  </div>
  )
}

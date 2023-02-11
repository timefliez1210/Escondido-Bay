
import Head from 'next/head'
import Banner from '../components/Banner'
import Card from '../components/Card'
import ServiceDisplay from '../components/ServiceDisplay'

export default function fun_diving() {
  const display = [
    {
      title: "Our Sunday Boat Diving Promo",
      image: "/Sunday-Dive-Promo-Mactan.JPG",
      alt: "Our Sunday Dive Promo on Mactan Island",
      text: "At our dive center in Cebu, we are dedicated to providing a consistently breathtaking diving experience for our local diving community and beyond. That's why we invite you to join us for our Sunday Dive Promo. For just PHP 4,500, you'll get to immerse yourself in three breathtaking dives from the comfort of our boat, complete with air fills and all the necessary gear.\n\nNot only that, but you'll also be treated to a delicious BBQ lunch made from scratch, accompanied by fresh coffee and a snack bar, as well as unlimited water to quench your thirst. And after a day of diving, you can continue the conversation over a cold drink from our well-stocked bar (additional charges apply). So what are you waiting for? Join us on a journey of discovery and be inspired by the diversity of our dive sites and the beauty of our abundant aquatic life.",
      href: "contact",
      button: "Contact us now",
      key: "1",
    },
    {
      title: "Boat Dives",
      image: "/Boat-Diving-Cebu.JPG",
      alt: "Dive the beautiful Islands around Lapu-Lapu City",
      text: "Embark on a scuba diving adventure with us at Mactan Island any day of the week. Discover the beauty of Nalusuan Island, Gilutongan Island, and Olango Marine Sanctuaries and immerse yourself in their rich marine biodiversity. Please note that equipment rental is not included in the package.\n\nFor 2 dives, the cost is PHP 3,500, while 3 dives will cost PHP 5,500. This package includes lunch and snacks, coffee, and water. If you choose 2 dives, there will not be a BBQ provided, but after-dive snacks instead.\n\nAfter your dive, unwind with a drink from our bar, which is available for an additional charge based on consumption. Join us for a memorable diving experience in the stunning waters of Mactan Island.\n\n",
      href: "contact",
      button: "Contact us now",
      key: "2",
    },
    {
      title: "Shore Diving",
      image: "/Shore-Diving-Lapu-Lapu-City.JPG",
      alt: "Shore Diving off the coast from Lapu-Lapu City",
      text: "Embark on an underwater adventure as you discover the hidden gems of Lapu-Lapu City's shores. From the vibrant coral gardens at Kontiki Marine Sanctuary and Coral Nursery, to the mysterious Marigondon Cave, and the teeming sea life at Marigondon port's pier area, there's always something new to explore. With the occasional visit of magnificent Whale Sharks, there's no better time than now to uncover the underwater treasures that lie within reach. \n\nExperience all the beauty and diversity of our shore dive spots with our Shore Dive Packages, starting at just PHP2,500 for two dives. \n\nGet ready for a once-in-a-lifetime diving journey!\n\n\n",
      href: "contact",
      button: "Contact us now",
      key: "3",
    },
  ]
  return (
    <div>
      <Head>
        <title>
        Safely Discover the Beauty of Mactan Island's Dive Sites with Escondido Bay - Fun Diving at its Best
        </title>
        <meta
          name="description"
          content="Discover the Beauty of Philippines' Marine Landscape with Safe Fun Dives at Escondido Bay Dive Center in Lapu-Lapu City, Cebu"
        />
      </Head>
      <Banner
        heading={'Fun Diving with us'}
        title={'Dive into adventure, immerse in beauty'}
        text={"But our boat is fully operational. Please dont be shy to contact us on Facebook, Whatapp, Viber or simply a call to book our boat or diving courses."}
        src={'/talima-reefscape.JPG'}
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
      />
      <ServiceDisplay
      title='Our Fun Diving Offers'
      display={display}
      />
      <h1>Our Divesites around Mactan</h1>
      <div className='divider'></div>
      <Card
        heading={'Nalusuan Island'}
        title={'Shallow Reefs, a sandy slope and a steep wall'}
        text={"The Nalusuan Marine Sanctuary with its long sandbar has shallow reefs, a sandy slope reaching from 5m down to approximately 14-20m, followed by a steep falling wall with an estimated bottom between 40-50m. \n\nThe shallow reefs of Nalusuan Island are the home of an abundance of smaller fishes and colorful corals, a beautiful destination for snorkelers or divers who want to enjoy their safety stop./n/nThe sandy slope of this marine sanctuary is the habitat of all different sorts of stingrays, squids, octopuses and many more interesting sea creatures like frog fishes, from time to time we even may encounter larger ray species like the devil ray.\n\nLast but not least, one can explore the wall which hosts a lot of interesting sea creatures for those who may be fond of Macro photography. Various different species of nudibranchs, flatworms and juvenile fish hiding discreetly within the tentacles of an anemone reside here; the really patient divers might even be able to spot a pygmy seahorse within the fans along the wall.\n\nThe boat ride usually takes about 30 to 40 minutes from the Mactan Island coast or Cordova.\n\nThe island with its long sand bar is a sanctuary to all the sea creatures and to the nature lovers. You can literally reach at arm’s length the abundance of marine life"}
        src={'/Octopus-Nalusuan-Marine-Sanctuary.JPG'}
        alt={'Octopus in Nalusuan Marine Sanctuary Cebu'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <Card
        heading={'Gilutongan Island'}
        title={'Abundance of aquatic life and great reefs'}
        text={"Gilutongan Island has a similar shape to a shark. It is about 630 meters long and 820 meters wide. The island is home to numerous coral reefs and sea grass meadows, partially protected by the 15 hectare Gilutongan Marine Sanctuary. It is one of the most scenic diving and snorkelling destinations we have at arm's length from Mactan Island, Lapu-Lapu City or Cordova.\n\nWhether one is a freshly certified or very experienced diver, with its shallow and colorful reefs as well as steep falling wall, the vast array of sea creatures and aquatic life, makes this destination worthy of exploration. \n\nThe visibility reaches from 10m on bad days to literally crystal clear waters on good days.\n\nBig schools of jack fishes, barracudas, bat fishes can be seen frequently on this dive site and furthermore, Gilutongan is not shy of pelagic travellers every now and then, as well as the diversity the Philippines in general are famous for.\n\nThe boat ride usually takes about 40 minutes from the Mactan Island coast or Cordova."}
        src={'/Barracuda-Gilutongan-Marine-Sanctuary.JPG'}
        alt={'Gilutongan Island Baracudas near Lapu-Lapu City'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <Card
        heading={'Marigondon Cave'}
        title={'A steep decent into a wide daylight cave'}
        text={"Directly off the coast of Marigondon in Lapu-Lapu City, located at roughly 37m depth within an extensive reef wall, this cave is one of the most famous local dive sites.\n\nExperienced divers can access this cave or cavern either as a shore dive, which involves roughly a 200m swim or by boat.\n\nMost parts, including the entrance to the cavern, are very wide and you can see the exit during most of the duration within the cave. Even divers without a specific cave certification can join this exciting dive. \n\nWithin the cave we commonly see a multitude of stone and scorpion sishes, lionfishes and abundant species for the Macro photographer. Additionally, the rock and coral formations along with the composition of the inner structure with beautiful large sea fans make this destination particularly thrilling and fun to explore."}
        src={'/Marigondon-Cave-Critters.JPG'}
        alt={'Our Cave dive in Marigondon, Lapu-Lapu City, Cebu'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <Card
        heading={'Talima Marine Sanctuary'}
        title={'Explore Talima\'s vibrant reefs, walls & swim-throughs, teeming with octopuses & pelagics.'}
        text={"The Talima Marine Sanctuary is a diver's paradise, offering a diverse range of underwater habitats for visitors to explore. With shallow reefs sloping down to 18 meters and steep walls falling down to 50 meters in some areas, the sanctuary provides a unique and challenging diving experience for both beginners and experienced divers alike.\n\nAt the shallow reefs, you'll be able to encounter a variety of colorful and vibrant marine life, including schools of tropical fish, diverse coral formations, and the occasional octopus. These curious creatures are known to entertain divers with their playful antics, making for an unforgettable experience.\n\nAs you move deeper into the sanctuary, the walls provide a stunning and dramatic backdrop to your dive. Here, you'll be able to witness the incredible diversity of marine life that inhabits these areas. Schools of larger pelagic fish, such as barracuda and trevally, are frequently spotted here, swimming alongside more elusive and reclusive species like the shy cuttlefish.\n\nFor those looking for a more immersive and exhilarating diving experience, Talima also boasts a swim-through rock structure, offering divers a unique perspective on the surrounding underwater landscape. Here, you'll be able to navigate through narrow passages and crevices, surrounded by a kaleidoscope of coral and marine life.\n\nAll in all, the Talima Marine Sanctuary provides a truly breathtaking and unforgettable diving experience, showcasing the incredible beauty and diversity of the underwater world. Whether you're a seasoned diver or just starting out, Talima is a must-visit for anyone seeking an adventure in the ocean depths."}
        src={'/Talima.jpg'}
        alt={'Candy Crab in Talima Marine Sanctuary'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <style jsx>{`
       h1 {
        text-align: center;
        margin: 20px 0px;
       }
       .divider {
        height: 3px;
        width: 15%;
        background: white;
        margin: auto auto;
      }
       `}</style>
  </div>
  )
}

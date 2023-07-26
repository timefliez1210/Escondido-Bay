
import Head from 'next/head'
import Banner from '../components/Banner'
import Card from '../components/Card'
import ServiceDisplay from '../components/ServiceDisplay'
import Cta from '../components/Cta'
import ReviewLinks from '../components/ReviewLinks'
import H2 from '../components/utils/H2'
import Divider from '../components/utils/Divider'

export default function fun_diving() {
  const display = [
    {
      title: "Our Sunday Boat Diving Promo",
      image: "/Sunday-Dive-Promo-Mactan.jpeg",
      alt: "Our Sunday Dive Promo on Mactan Island",
      text: "Join us at our dive center in Cebu for an exciting Sunday Dive Promo, where we offer an unforgettable fun diving experience for both the local diving community and visitors. Our dive center offers a range of diving courses and experiences in Mactan and Lapu-Lapu City, which are home to some of the most breathtaking dive sites in the Philippines.\n\nWith our Sunday Dive Promo, you'll get to enjoy three incredible dives on our boat, with air fills and gear provided. Dive into the crystal-clear waters and encounter a diverse range of marine life, from colorful tropical fish to majestic sea turtles and even the elusive whale sharks.\n\nIn between dives, you'll be treated to a mouth-watering BBQ lunch made from scratch, accompanied by fresh coffee and a snack bar. Quench your thirst with unlimited water and after your dives, relax with a cold drink from our bar (additional charges apply).\n\nDon't miss out on this opportunity to explore the wonders of the underwater world around Mactan and Lapu-Lapu City. Join us for an unforgettable day of diving and create memories that will last a lifetime.\n\n\n\n\n",
      href: "contact",
      button: "Get in touch for Sunday",
      buttontTitle: "Sunday Fun Dive Promo with our Dive Center in Cebu",
      key: "1",
    },
    {
      title: "Boat Dives",
      image: "/Boat-Diving-Cebu.jpeg",
      alt: "Dive the beautiful Islands around Lapu-Lapu City",
      text: "Join us for an exciting scuba diving adventure any day of the week in Mactan Island and discover the rich marine life of Nalusuan Island, Gilutongan Island, and Olango Marine Sanctuaries. Get ready for an adventure of a lifetime and be mesmerized by the stunning beauty of our dive sites.\n\nOur 2-dive package costs PHP 3,500, while our 3-dive package is priced at PHP 5,000. Please note that equipment rental is not included in the package. You can recharge your batteries with our delicious lunch and snacks, and keep yourself hydrated with unlimited water and coffee. If you opt for 2 dives, we will provide after-dive snacks instead of a BBQ.\n\nAfter a day of fun diving, you can sit back and relax with a refreshing drink from our bar, which is available for an additional charge based on consumption. Join us now for an unforgettable diving experience in the crystal-clear waters of Mactan and Lapu-Lapu City.\n\nAt our dive center, safety is paramount. Our experienced instructors and divemasters are trained in emergency response and first aid, and our equipment is regularly inspected and maintained to ensure top working condition. Each dive begins with a thorough briefing to familiarize everyone with the dive plan and any potential hazards. Group sizes are limited to ensure personalized attention and safety underwater.",
      href: "contact",
      button: "Boat dive with us",
      buttontTitle: "Boat Diving in Lapu-Lapu City",
      key: "2",
    },
    {
      title: "Shore Diving",
      image: "/Shore-Diving-Lapu-Lapu-City.jpeg",
      alt: "Shore Diving off the coast from Lapu-Lapu City",
      text: "Join us for a thrilling underwater experience as we explore the exciting dive spots of Mactan and Lapu-Lapu City, including the majestic marine life and stunning coral reefs. Don't miss out on the opportunity to witness the beauty of night diving in Lapu-Lapu City, where you can spot fascinating nocturnal creatures.\n\nOur dive center offers a range of packages to cater to your diving needs. Choose from our fun dive packages that start at PHP 2,500 for two dives, or our night dive packages starting at PHP 2,000 for one dive. Our experienced instructors and divemasters prioritize safety, with all equipment regularly inspected and maintained to ensure they are in top working condition. Before each dive, our staff conducts a thorough briefing, and we limit our group sizes to ensure personalized attention and safety for every diver.\n\nJoin us on this unforgettable adventure as we explore the enchanting underwater world of Mactan and Lapu-Lapu City.\n\n\n\n\n\n\n\n\n\n",
      href: "contact",
      button: "Shore Dive with us",
      buttontTitle: "Contact our Dive Center for Shore Diving on Mactan",
      key: "3",
    },
  ]
  return (
    <div>
      <Head>
        <title>
        Explore Mactan Island&apos;s Dive Sites Safely with Escondido Bay - Best Fun Diving
        </title>
        <meta
          name="description"
          content="Discover the Beauty of Philippines' Marine Landscape with Safe Fun Dives at Escondido Bay Dive Center in Lapu-Lapu City, Cebu"
        />
      </Head>
      <Banner
        heading={'Fun Diving around Mactan'}
        title={'Dive into adventure, immerse into the beauty of Cebu'}
        src={'/fun-diving-mactan-hero.jpeg'}
        alt={'Fun Diving around Mactan Island, Lapu-Lapu City and Cordova'}
      />
      <H2 
        heading={'Fun Diving in Mactan: Discover the Best Dive Sites in the Philippines'} 
      />
      <Divider />
      <Card
        heading={'Fun Diving from Lapu-Lapu City with Escondido Bay'}
        title={'Reefs, Caves, Wrecks and an Abundance of Aquatic Life'}
        text={"Escondido Bay is the perfect destination for those who want to explore the hidden treasures of the underwater world in Mactan. Our dive shop offers a range of diving experiences and courses that cater to divers of all skill levels.\n\nOur handpicked dive locations offer breathtaking views and an incredible range of marine life that are sure to leave a lasting impression. From vibrant coral reefs that host an abundance of tropical fish, to majestic whale sharks and turtles, you'll have the opportunity to see it all.\n\nAt Escondido Bay, we have experienced and knowledgeable instructors, divemasters and guides who ensure that your dive is both safe and enjoyable. We prioritize the safety of our guests and adhere to the highest industry standards.\n\nIn addition to the diverse marine life, our dive sites also offer a variety of environments to explore. The towering walls and mysterious caves offer an unforgettable experience for thrill-seekers, while the fascinating wrecks that have become artificial habitats for many species provide a unique opportunity for exploration.\n\nWe also offer night diving options for those who want to explore the underwater world in a different light. Our night dives allow you to see nocturnal marine life that you wouldn't normally see during the day.\n\nIf you're looking for an all-in-one diving experience, Escondido Bay has got you covered. Our packages include rental gear, boat rides, and guided dives that cater to your specific needs.\n\nOverall, Escondido Bay is a top-rated dive shop that provides a safe, fun, and unforgettable diving experience in the Philippines. Come and embark on an aquatic adventure with us and discover the beauty of the underwater world in Mactan."}
        src={'/reefscape-magnificent-anemone-diving-cebu.jpeg'}
        alt={'Fun Diving around Mactan Airport'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Ask us about Fun Diving'}
      />
      <ServiceDisplay
        title='Our Fun Diving Offers from Mactan'
        display={display}
      />
      <H2 
        heading='Our Fun Diving Pricing around Lapu-Lapu City in Overview' 
      />
      <Divider />
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
              <td>PHP 1,500</td>
            </tr>
            <tr>
              <td>Every following dive from shore on the same day and location</td>
              <td>1 Tank or Air<br/><br/>Weights</td>
              <td>PHP 900</td>
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
      <Cta 
        text='Book your adventure'
        buttontTitle="Fun Dive with Escondido Bay Dive Center in Lapu-Lapu City"
      />
      <br /> <br /><br /> <br />
      <ReviewLinks 
        title='Read what our Customers say about Fun Diving Mactan with us' 
      />  
      <br /> <br /><br /> <br />
      <H2 
        heading='Our Divesites around Mactan' 
      />
      <Divider />
      <Card
        heading={'Nalusuan Island'}
        title={'Shallow Reefs, a sandy slope and a steep wall'}
        text={"The Nalusuan Marine Sanctuary with its long sandbar has shallow reefs, a sandy slope reaching from 5m down to approximately 14-20m, followed by a steep falling wall with an estimated bottom between 40-50m. \n\nThe shallow reefs of Nalusuan Island are the home of an abundance of smaller fishes and colorful corals, a beautiful destination for snorkelers or divers who want to enjoy their safety stop./n/nThe sandy slope of this marine sanctuary is the habitat of all different sorts of stingrays, squids, octopuses and many more interesting sea creatures like frog fishes, from time to time we even may encounter larger ray species like the devil ray.\n\nLast but not least, one can explore the wall which hosts a lot of interesting sea creatures for those who may be fond of Macro photography. Various different species of nudibranchs, flatworms and juvenile fish hiding discreetly within the tentacles of an anemone reside here; the really patient divers might even be able to spot a pygmy seahorse within the fans along the wall.\n\nThe boat ride usually takes about 30 to 40 minutes from the Mactan Island coast or Cordova.\n\nThe island with its long sand bar is a sanctuary to all the sea creatures and to the nature lovers. You can literally reach at arm’s length the abundance of marine life"}
        src={'/Octopus-Nalusuan-Marine-Sanctuary-near-Lapu-Lapu-City.jpeg'}
        alt={'Octopus in Nalusuan Marine Sanctuary Cebu'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Dive Nalusuan with us'}
        buttontTitle={'Fun Diving in Nalusuan Marine Sanctuary, Cebu'}
      />
      <Card
        heading={'Gilutongan Island'}
        title={'Abundance of aquatic life and great reefs'}
        text={"Gilutongan Island has a similar shape to a shark. It is about 630 meters long and 820 meters wide. The island is home to numerous coral reefs and sea grass meadows, partially protected by the 15 hectare Gilutongan Marine Sanctuary. It is one of the most scenic diving and snorkelling destinations we have at arm's length from Mactan Island, Lapu-Lapu City or Cordova.\n\nWhether one is a freshly certified or very experienced diver, with its shallow and colorful reefs as well as steep falling wall, the vast array of sea creatures and aquatic life, makes this destination worthy of exploration. \n\nThe visibility reaches from 10m on bad days to literally crystal clear waters on good days.\n\nBig schools of jack fishes, barracudas, bat fishes can be seen frequently on this dive site and furthermore, Gilutongan is not shy of pelagic travellers every now and then, as well as the diversity the Philippines in general are famous for.\n\nThe boat ride usually takes about 40 minutes from the Mactan Island coast or Cordova."}
        src={'/Barracuda-Gilutongan-Marine-Sanctuary-Mactan.jpeg'}
        alt={'Gilutongan Island Baracudas near Lapu-Lapu City'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Dive Gilutongan with us'}
        buttontTitle={'Explore Diving in Gilutongan near Mactan'}
      />
      <Card
        heading={'Talima Marine Sanctuary'}
        title={'Explore Talima\'s vibrant reefs, walls & swim-throughs, teeming with octopuses & pelagics.'}
        text={"The Talima Marine Sanctuary is a diver's paradise, offering a diverse range of underwater habitats for visitors to explore. With shallow reefs sloping down to 18 meters and steep walls falling down to 50 meters in some areas, the sanctuary provides a unique and challenging diving experience for both beginners and experienced divers alike.\n\nAt the shallow reefs, you'll be able to encounter a variety of colorful and vibrant marine life, including schools of tropical fish, diverse coral formations, and the occasional octopus. These curious creatures are known to entertain divers with their playful antics, making for an unforgettable experience.\n\nAs you move deeper into the sanctuary, the walls provide a stunning and dramatic backdrop to your dive. Here, you'll be able to witness the incredible diversity of marine life that inhabits these areas. Schools of larger pelagic fish, such as barracuda and trevally, are frequently spotted here, swimming alongside more elusive and reclusive species like the shy cuttlefish.\n\nFor those looking for a more immersive and exhilarating diving experience, Talima also boasts a swim-through rock structure, offering divers a unique perspective on the surrounding underwater landscape. Here, you'll be able to navigate through narrow passages and crevices, surrounded by a kaleidoscope of coral and marine life.\n\nAll in all, the Talima Marine Sanctuary provides a truly breathtaking and unforgettable diving experience, showcasing the incredible beauty and diversity of the underwater world. Whether you're a seasoned diver or just starting out, Talima is a must-visit for anyone seeking an adventure in the ocean depths."}
        src={'/Talima-Marine-Sanctuary-Cebu.jpeg'}
        alt={'Candy Crab in Talima Marine Sanctuary'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Dive Talima with us'}
        buttontTitle={'Contact us to Dive Talima with Escondido Bay Dive Center'}
      />
      <Card
        heading={'Baring Marine Sanctuary'}
        title={'Baring Marine Sanctuary offers diverse marine life, rich coral reefs and abundant fish species for a unique diving experience.'}
        text={"The Baring Marine Sanctuary at Olango Island is a premier dive site in the Philippines that offers a unique and unforgettable diving experience for both beginner and experienced divers. Located near the bustling city of Cebu, the sanctuary provides a sanctuary for marine life, where visitors can witness an abundance of diverse and vibrant coral reef ecosystems.\nBaring Marine Sanctuary offers a range of dive sites that cater to different skill levels and interests. The shallow reef areas are ideal for snorkeling and beginner divers, while the deeper areas offer challenging and exhilarating experiences for advanced and technical divers. In the heart of the sanctuary is a beautiful and diverse coral reef, teeming with colorful marine life including angelfish, parrotfish, and sea turtles.\nThe reef is well protected and carefully managed, which has allowed it to flourish and become a haven for a variety of marine life. The abundant and thriving ecosystem is a testament to the positive impact that marine protected areas can have on the health of our oceans.\nOne of the highlights of diving in Baring Marine Sanctuary is the chance to witness the incredible and abundant macro life. The area is known for its healthy populations of frogfish, seahorses, and other tiny creatures that can be found hiding in the coral. Divers will also be amazed by the array of vibrant and intricate soft corals that make their homes in the reef.\nIn addition to its beautiful coral reef, Baring Marine Sanctuary is also home to a variety of wrecks and artificial reefs, making it a popular destination for wreck divers. These man-made structures have become a haven for marine life, providing a unique and fascinating dive experience.\nOverall, diving in Baring Marine Sanctuary at Olango Island provides a unique and unforgettable experience for both beginner and experienced divers. The rich and diverse ecosystem, combined with the carefully managed conservation efforts, make it a must-visit destination for any diver in the Philippines. So, gear up and explore the underwater wonder that awaits you at Baring Marine Sanctuary!"}
        src={'/Anemone-Crab-Diving-Baring-Cebu.jpeg'}
        alt={'Anemone Crab in the Baring Marine Sanctuary, Lapu-Lapu City'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Dive Baring with us'}
        buttontTitle={'Baring Marine Sanctuary at Olango Island, Lapu-Lapu City'}
      />
      <Card
        heading={'Kontiki Marina in Maribago'}
        title={'An Underwater Haven for day and night dives'}
        text={"Kontiki Marina, located just a short boat ride from Mactan Island, is a fantastic dive site with a wide range of marine life to explore. However, in December 2021, a devastating typhoon hit the region, causing significant damage to the coral reefs. Fortunately, Protect Maribago Bay, a local environmental group, stepped in and built a coral nursery to help restore the aquatic life in the area. At Escondido Bay, we were honored to have the opportunity to contribute to the restoration efforts by assisting with the coral nursery when needed.\n\nDespite the damage caused by the typhoon, the marine life in Kontiki Marina remains abundant. In particular, a large school of sardines has made the area their home, providing a stunning sight for divers. Additionally, the dive site is home to a wide variety of crustaceans and octopuses, making it an excellent location for a night dive.\n\nAt Escondido Bay, we offer diving trips to Kontiki Marina, allowing you to explore this incredible underwater world for yourself. Our experienced dive instructors will guide you through the site, pointing out the various marine species and ensuring your safety throughout the dive.\n\nWhether you're an experienced diver or just starting out, Kontiki Marina is a dive site not to be missed. And with the coral restoration efforts underway, it's a great opportunity to witness the regrowth of coral reefs and the return of marine life to the area. Book your dive trip with Escondido Bay today and experience the beauty of Kontiki Marina."}
        src={'/kontiki-marina-maribago-cebu.jpeg'}
        alt={'Octopus on the Reef at Kontiki'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Dive Kontiki with us'}
        buttontTitle={'Explore Diving in Kontiki near Mactan'}
      />
      <H2 
        heading='Our Medium and Long Haul Destinations from Lapu-Lapu City' 
      />
      <Divider />
      <Card
        heading={'Cabilao Island, Bohol'}
        title={'Explore Talima\'s vibrant reefs, walls & swim-throughs, teeming with octopuses & pelagics.'}
        text={"Cabilao Island is a small, yet mighty gem in the Visayan Sea, lying just west of Bohol and facing mainland Cebu. With its picturesque 8 square kilometer area and 5000 inhabitants, it’s a hidden treasure that’s definitely worth the 3-hour boat ride from Mactan. Dubbed as “The Coral Gem of the Philippines,” Cabilao Island’s stunning beauty below the surface is sure to captivate even the most seasoned of divers.\n\nFeaturing 3 main dive sites, Cabilao is renowned for its impressive tectonic walls that are home to a thriving abundance of macro critters, perfect for capturing breathtaking photos. The shallow reefs are dotted with a vibrant display of hard and soft corals, and a diverse range of fish species.\n\nBut, that’s not all. Cabilao Island is also a turtle paradise, with Hawksbill and Green Turtles making an appearance on almost every dive. These gentle giants can grow up to an impressive 170 cm in length, leaving you in awe of their sheer size.\n\nSo, what can you expect at Cabilao’s famous dive sites?\n\n\nLighthouse - With its sharp drop-off wall that plunges to a depth of 50 meters and sandy slope dotted with rocky coral patches, Lighthouse is a feast for the eyes. Home to crustaceans, octopuses, and squids, it’s an advanced dive site that’s not to be missed.\n\n\nTalisay - This straightforward dive site boasts a coral slope that leads to a wall teeming with fishes, turtles, and macro critters. If you’re lucky, you may even spot white tip reef sharks on the sandy slopes, and black tip reef sharks on the top of the wall.\n\n\nPolaris - Named after a resort facing the Cabilao reefs, Polaris features a stunning sharp wall that falls to a depth of 45-50 meters and a sandy slope that extends to 60-70 meters, making it ideal for trained technical divers. The wall is dotted with small cavern-like structures, and the shallow waters are overflowing with soft corals that provide a habitat for fish, snakes, and critters not commonly seen in the Philippines.\n\n\nDiscover a new world of adventure and beauty at Cabilao Island."}
        src={'/long-distance-trip-diving-cabilao-from-mactan.jpeg'}
        alt={'Green Sea Turtle on Drop off in Cabilao Island'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Dive Cabilao with us'}
        buttontTitle={'Dive Cabilao regularly with us from Lapu-Lapu City'}
      />
      <Card
        heading={'Capitancillio, Cebu'}
        title={'Looking for an exciting dive site near Cebu Island? Look no further than Capitancillo'}
        text={"A small island located off the eastern coast of Cebu. This dive site is known for its clear waters, healthy corals, and abundant marine life.\n\nCapitancillo is a popular destination for both recreational and technical divers, as it offers a variety of dive sites with varying depths and currents. The shallow reefs around the island are home to a wide range of fish species, including colorful clownfish, vibrant angelfish, and schools of snappers and fusiliers.\n\nOne of the highlights of diving at Capitancillo is the chance to encounter larger marine life, such as turtles, barracudas, and even reef sharks. If you're lucky, you may also spot a majestic manta ray or a whale shark, which are known to visit the area occasionally.\n\nBut it's not just the marine life that makes Capitancillo a must-visit dive site. The island itself is steeped in history and culture, with a lighthouse dating back to the Spanish colonial era standing tall on its highest point.\n\nCapitancillo is also a great spot for night diving, as the waters around the island come alive with crustaceans, octopuses, and other nocturnal creatures. Exploring the reef at night is a unique and unforgettable experience that every diver should try at least once.\n\nAs with any dive site, it's important to dive responsibly and follow safe diving practices. Be sure to dive with a reputable dive operator who prioritizes safety and environmental conservation, and always respect the marine life and their natural habitat.\n\nSo why not add Capitancillo to your diving itinerary when visiting Cebu Island? With its diverse marine life, clear waters, and rich cultural history, it's sure to be a memorable dive experience."}
        src={'/Capitancillio-Cebu-Escondido-Bay.jpeg'}
        alt={'School of Jacks and Capitancillio in Cebu, Philippines'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Dive Capitancillio with us'}
        buttontTitle={'Dive Capitancillio regularly with us from Lapu-Lapu City'}
      />
      <Card
        heading={'Camotes Islands, Cebu'}
        title={'Diving Paradise: Exploring the Wonders of Camotes Islands'}
        text={"The Camotes Islands, located off the east coast of Cebu Island in the Philippines, are a hidden gem for divers. With its crystal-clear waters, beautiful coral reefs, and diverse marine life, the Camotes Islands offer some of the best diving opportunities in the country.\n\nOne of the most popular dive sites in the Camotes Islands is Poro Wall, a stunning vertical wall that drops to over 30 meters deep. This wall is covered with colorful soft corals and sponges, providing a beautiful backdrop for divers. The wall is also home to a variety of marine life, including frogfish, pygmy seahorses, and schooling fish such as jacks and snappers.\n\nAnother popular dive site in the Camotes Islands is Tulang Diot, which features a beautiful coral garden and a sandy slope that drops to over 20 meters deep. This dive site is a great place to spot macro life such as nudibranchs, ghost pipefish, and seahorses. Schools of barracudas and jacks can also be seen here, as well as larger marine animals such as eagle rays and turtles.\n\nFor those looking for a unique diving experience, the sunken cemetery in the town of San Francisco is a must-visit site. This underwater cemetery was formed after an earthquake in the 1870s caused the cemetery to sink below sea level. Today, the site is home to a variety of marine life, including reef sharks, groupers, and schools of fish.\n\nThe Camotes Islands are also a great place for night diving, with sites such as Green Lagoon offering the opportunity to see a variety of crustaceans, octopuses, and other nocturnal creatures.\n\nWhether you are a beginner or an experienced diver, the Camotes Islands offer a truly unforgettable diving experience. With its stunning underwater landscapes and diverse marine life, this hidden gem is not to be missed."}
        src={'/Diving-Camotes-Island-from-mactan.jpeg'}
        alt={'Huge Green Sea Turtle of the Coast of Camotes Islands'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Dive Camotes with us'}
        buttontTitle={'Dive Camotes regularly with us from Lapu-Lapu City'}
      />
      <H2 
        heading='Cave Diving in the Philippines' 
      />
      <Divider />
      <Card
        heading={'The Twin Caverns, Danajon Double Barrier Reef'}
        title={'Discover the Mesmerizing Twin Caverns at Danajon Double Barrier Reef'}
        text={"Welcome to the enchanting world of Twin Caverns, a remarkable diving spot nestled within the breathtaking Danajon Double Barrier Reef, located off the pristine coast of Mactan, Lapu-Lapu City!\n\nDive into the depths of roughly 30 meters, and you'll encounter the awe-inspiring Twin Caverns, connected through a mesmerizing 80-meter long tunnel. This intricate labyrinth invites you to explore its wide and lively cavern structures, featuring captivating impasses, open areas, and intersections leading to intriguing dead ends.\n\nFor those seeking the thrill of cave diving, Twin Caverns offers a captivating challenge, where you can navigate through these natural wonders and witness the vibrant marine life of snappers, soldierfish, and a myriad of custacians and invertebrates.\n\nIf cave exploration isn't your preference, fear not! The cavern area, flooded with permanent daylight, presents an equally breathtaking experience, showcasing the beauty of nature's artistry.\n\nSurrounded by magnificent wall dive sites, the Twin Caverns at Danajon Double Barrier Reef offer a complete underwater adventure, where you'll be immersed in a stunning marine landscape teeming with diversity.\n\nAt Escondido Bay, we invite you to join us on an unforgettable journey as we explore the wonders of Twin Caverns and the majestic Danajon Double Barrier Reef. Whether you're a cave diving enthusiast, seeking to explore caverns, or simply looking for a fun diving experience, these underwater realms have something extraordinary to offer.\n\nEmbark on an extraordinary diving adventure with us and discover the mesmerizing beauty of Twin Caverns at Danajon Double Barrier Reef!"}
        src={'/Cave-diving-philippines-twin-caverns-danajon.jpeg'}
        alt={'The Twin Caverns of Danajon Double Barrier Reef'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Dive the Caverns with us'}
        buttontTitle={'The Twin Caverns exclusively with escondido bay'}
      />
      <Card
        heading={'Marigondon Cave'}
        title={'A steep decent into a wide daylight cave'}
        text={"Directly off the coast of Marigondon in Lapu-Lapu City, located at roughly 37m depth within an extensive reef wall, this cave is one of the most famous local dive sites.\n\nExperienced divers can access this cave or cavern either as a shore dive, which involves roughly a 200m swim or by boat.\n\nMost parts, including the entrance to the cavern, are very wide and you can see the exit during most of the duration within the cave. Even divers without a specific cave certification can join this exciting dive. \n\nWithin the cave we commonly see a multitude of stone and scorpion sishes, lionfishes and abundant species for the Macro photographer. Additionally, the rock and coral formations along with the composition of the inner structure with beautiful large sea fans make this destination particularly thrilling and fun to explore."}
        src={'/Marigondon-Cave-Critters-Cebu.jpeg'}
        alt={'Our Cave dive in Marigondon, Lapu-Lapu City, Cebu'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Cave Dive with us'}
        buttontTitle={'Dive the Marigondon Cave with us from Cebu'}
      />
  </div>
  )
}

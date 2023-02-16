import Head from 'next/head'
import Banner from '../components/Banner'
import Card from '../components/Card'
import ServiceDisplay from '../components/ServiceDisplay'

export default function island_hopping() {
  const display = [
    {
      title: "Basic BBQ Lunch",
      image: "/basic-Barbecue.JPG",
      alt: "Chicken Thighs, Skewers, Vegetables and Rice - Our basic BBQ Lunch",
      text: "Escondido Bay is proud to offer a basic BBQ menu that features an array of delicious Asian-inspired dishes that will tantalize your taste buds. Our menu includes a selection of marinated chicken, pork chops, buffalo wings, pork siomai, dynamite, cheese sticks, and nachos loaded with fresh vegetables and cheese. Our commitment to using only the freshest ingredients is reflected in every dish we prepare.\nOur marinated chicken is the perfect blend of sweet and savory flavors, with just the right amount of spice to make it the perfect dish for any occasion. Our manila style pork chops are juicy and tender, infused with the rich and bold flavors of traditional Filipino cuisine. The buffalo wings are crispy on the outside, and tender on the inside, with a homemade sauce that packs a punch. The pork siomai is a classic dim sum dish that is steamed to perfection and served with our secret sauce.\nFor those who prefer a bit of heat, our pork or tuna dynamite is the perfect choice. These flavorful rolls are filled with either pork or tuna, mixed with a variety of spices and herbs. Our cheese sticks are a crowd favorite, served hot and crispy with a generous serving of melted cheese. Finally, our nachos are loaded with fresh vegetables and cheese, creating a savory and satisfying snack.",
      href: "contact",
      button: "Book now",
      key: "1",
    },
    {
      title: "Seafood Upgrade",
      image: "/king-prawns.JPG",
      alt: "Our Famous Seafood BBQ Lunch",
      text: "At Escondido Bay, we pride ourselves on providing delicious and varied food options to complement your island hopping or diving experience. While our basic BBQ package is already a crowd-pleaser, we also offer an upgrade for those looking for an even more elevated dining experience.\nOur upgraded BBQ package includes a selection of fresh seafood, including giant prawn skewers, Filipino-style stuffed fish, shrimp, and crabs. Savor the taste of the ocean with perfectly grilled seafood that's both succulent and satisfying.\nThese new additions complement our classic menu of Asian-style marinated chicken, Manila-style pork chops, buffalo wings with homemade sauce, pork siomai with secret sauce, pork or tuna dynamite, cheese sticks, and nachos loaded with fresh vegetables and cheese.\nOur upgraded BBQ package is perfect for seafood lovers, and we're sure it will be a hit with your group. Let our team cater to your taste buds and create an unforgettable dining experience for you and your companions.\nWhether you're island hopping, diving, or just looking for a memorable dining experience, Escondido Bay has got you covered with our wide range of food options. Come join us and taste the flavors of the Philippines.\n\n",
      href: "contact",
      button: "Book now",
      key: "2",
    },
    {
      title: "The Deluxe Package",
      image: "/birthday-party.JPG",
      alt: "Steaks, Burgers, Hotdog or Lechon - we cater to all your needs",
      text: "If you're looking for the ultimate BBQ experience, look no further than our deluxe package. \nNot only do we offer all the amazing dishes included in our basic and upgrade options, but we take it to the next level with even more mouth-watering options.\n\nOne highlight of the deluxe package is the addition of a seafood stuffed or normal lechon. \nThis Filipino classic is always a crowd pleaser and is sure to impress your guests. But that's not all, we also offer a more European or American touch with the inclusion of delicious steaks. Cooked to perfection, our steaks are juicy, flavorful, and a perfect complement to the rest of our amazing dishes.\n\nNo matter which package you choose, our goal is to provide you with an unforgettable dining experience. From the freshest seafood to the tastiest meats and homemade sauces, we've got everything you need to make your event or gathering a success. So why wait? Book your BBQ with us today and get ready to indulge in some of the best food you've ever tasted.\n\n\n\n",
      href: "contact",
      button: "Book now",
      key: "3",
    },
  ]
  return (
    <div>
      <Head>
        <title>
        Explore the Beauty of Mactan: Island Hopping with Escondido Bay Dive Resort
        </title>
        <meta
          name="description"
          content="Explore the beautiful islands surrounding Mactan with Escondido Bay. Our island hopping tours offer access to stunning beaches and incredible marine life."
        />
      </Head>
      <Banner
        heading={'Our Island Hopping Deals'}
        title={'Discover Paradise Above and Below the Waves - Explore our Beaches and Reefs'}
        src={'/Island-hopping.JPG'}
        alt={'Island Hopping around Mactran'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <Card
        heading={'Island Hopping with Escondido Bay'}
        title={'Our Mission is to bring you the best possible experience'}
        text={"Escondido Bay is dedicated to providing a memorable and enjoyable island hopping experience that caters to all of your needs. Our spacious and comfortable Bangka Boat can accommodate up to 50 people and is designed to reinvent the native experience. Whether you're looking for a spare boat charter, delicious barbecue packages, or an open bar serving ice-cold beers and homemade cocktails, our staff will make it happen for you. So, you can focus on having a great time with your friends while enjoying the beautiful islands of the Philippines, snorkeling, or simply taking in the natural beauty, all while listening to soothing tunes. Join us on our mission to bring you the best possible island hopping adventure."}
        src={'/island-hopping-olango.JPG'}
        alt={'Island Hopping Olango Island'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Book your Island Hopping'}
      />

      <ServiceDisplay 
        title={'Our Food Packages'}
        display={display}
      />
      <h2>For those who aren't satisfied yet or can't eat certain food</h2>
      <div className='divider'></div>
      <p>At Escondido Bay, we pride ourselves on being able to cater to the needs of all of our guests, no matter their dietary restrictions or preferences. If none of our pre-set menus suit your tastes or requirements, don't worry! We offer a range of customizable options so that you can have a unique and personalized dining experience.
      <br/><br/>
      We understand that some guests may have food allergies or follow religious beliefs that restrict certain foods, while others may be vegetarians or vegans. Whatever the reason, we are happy to create a tailored menu that meets your needs.
      <br/><br/>
      We are also open to fulfilling any special requests you may have for your menu. Whether it's a favorite dish or cuisine you're craving, or a unique idea you have in mind, our team is dedicated to bringing your vision to life.
      <br/><br/>
      Our goal is to make your dining experience at Escondido Bay as memorable and enjoyable as possible. So, let us know what you need, and we will work together to create a delicious and personalized menu just for you. Contact us to discuss your specific needs and preferences.</p>
      <h2>Our Island Hopping Pricing in Overview</h2>
      <div className='divider'></div>
      <div className='overflow'>
            <table className="styled-table">
  <thead>
    <tr>
      <th>Inclusions</th>
      <th>10 - 14 pax</th>
      <th>15 - 19 pax</th>
      <th>20 - 29 pax</th>
      <th>30 - 39 pax</th>
      <th>40 - 50 pax</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Licensed Captain, Qualified Crew &amp; Guide, Boat,<br/> 3 nearby Island, safety Equipment and Sound System</td>
      <td>PHP1,000 per pax</td>
      <td>PHP900 per pax</td>
      <td>PHP650 per pax</td>
      <td>PHP500 per pax</td>
      <td>PHP450 per pax</td>
    </tr>
    <tr>
      <td>Additional Basic BBQ-Lunch, 100% fresh and homemade</td>
      <td>PHP600 per pax</td>
      <td>PHP500 per pax</td>
      <td>PHP450 per pax</td>
      <td>PHP400 per pax</td>
      <td>PHP350 per pax</td>
    </tr>
    <tr>
      <td>Add local Seafood like shrimps and fish to the Basic-BBQ</td>
      <td>PHP300 per pax</td>
      <td>PHP300 per pax</td>
      <td>PHP200 per pax</td>
      <td>PHP200 per pax</td>
      <td>PHP200 per pax</td>
    </tr>
    <tr>
      <td>Add the Deluxe Package including Lechon and other Upgrades</td>
      <td>PHP800 per pax</td>
      <td>PHP700 per pax</td>
      <td>PHP500 per pax</td>
      <td>PHP400 per pax</td>
      <td>PHP400 per pax</td>
    </tr>
    <tr>
      <td>Additional Drinking Packages; 4 Beer or 2 Cocktails</td>
      <td>PHP300 per pax</td>
      <td>PHP300 per pax</td>
      <td>PHP300 per pax</td>
      <td>PHP300 per pax</td>
      <td>PHP300 per pax</td>
    </tr>
    <tr>
      <td>In case you want an unforgettable Party add a DJ</td>
      <td>PHP900 per pax</td>
      <td>PHP800 per pax</td>
      <td>PHP700 per pax</td>
      <td>PHP600 per pax</td>
      <td>PHP500 per pax</td>
    </tr>
  </tbody>
</table>
</div>
      <h2>Island Hopping Destinations around Lapu-Lapu City</h2>
      <div className='divider'></div>
      <Card
        heading={'Caohagan Island'}
        title={'Caohagan Island: A Must-Visit Destination for Island Hopping near Mactan'}
        text={"If you're planning an island hopping adventure near Olango, Caohagan Island should be on your list of must-visit destinations. Located just a short boat ride away, Caohagan is a small island with a big personality.\nOne of the main draws of Caohagan Island is its stunning beaches. With crystal-clear water and powdery sand, it's the perfect place to relax and soak up the sun. But that's not all the island has to offer.\nCaohagan Island is also a great spot for snorkeling and diving. The waters surrounding the island are teeming with marine life, including colorful corals, schools of fish, and even sea turtles. If you're lucky, you might even spot some of the larger marine species that inhabit the area, like reef sharks and manta rays.\nBut what really sets Caohagan Island apart is its unique and diverse culture. The island is home to a small fishing community, and visitors can learn about their traditional way of life and even try their hand at fishing. You can also explore the island's many small shops and restaurants, where you can sample local delicacies and purchase handmade crafts.\nIf you're looking for a unique and unforgettable island hopping experience near Olango, Caohagan Island should be at the top of your list. With its stunning beaches, incredible marine life, and rich culture, it's a destination that's not to be missed."}
        src={'/caohaganisland.webp'}
        alt={'Island Hopping to Caohagan Island near Mactan and Olango'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Book Caohagan with us'}
      />
      <Card
        heading={'Sulpa Island'}
        title={'Sulpa Island: Discover Mactan\'s Hidden Gem'}
        text={"Sulpa Island is a small, uninhabited island located just off the coast of Mactan in the Cebu province of the Philippines. This hidden gem is known for its pristine waters, stunning coral reefs, and white sand beaches.\nAs one of the most beautiful islands in the region, Sulpa Island has become a popular destination for tourists and locals alike. Its crystal-clear waters make it an ideal location for snorkeling and diving, with an abundance of marine life including colorful fish, sea turtles, and even the occasional reef shark.\nBut Sulpa Island is not just a great spot for underwater adventures. The island\'s powdery white sand beaches are perfect for sunbathing and relaxation, while its lush greenery and rocky cliffs provide great opportunities for trekking and exploring.\nTo get to Sulpa Island, visitors can take a short boat ride from Mactan Island. Once there, they can enjoy a variety of activities such as snorkeling, swimming, beachcombing, and island hopping. The island is also perfect for those looking to escape the crowds and enjoy some peace and quiet.\nVisitors can also explore the island\'s rocky cliffs and hidden coves, which are perfect for photography and enjoying stunning views of the surrounding waters. And for those who love a bit of history, Sulpa Island is home to a small Spanish-era fort that was built to protect against pirates.\nOverall, Sulpa Island is a must-visit destination for anyone traveling to Mactan. With its natural beauty, clear waters, and endless activities, it is a perfect place to relax, explore, and create unforgettable memories."}
        src={'/sulpaisland.webp'}
        alt={'Sulpa Island the Gem near Mactan with Crystal clear waters'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Book Sulpa with us'}
      />
      <Card
        heading={'Gilutongan Island'}
        title={'Snorkeling at Gilutongan Marine Sanctuary: A Window to the Underwater World'}
        text={"Gilutongan Marine Sanctuary, located just off the coast of Cordova in Cebu, is a must-visit destination for any avid snorkeler. This beautiful marine sanctuary offers a unique and unforgettable experience of the underwater world, with an abundance of vibrant marine life, colorful corals, and crystal-clear waters.\nThe sanctuary, covering an area of about 15 hectares, is protected by the local government to preserve its rich marine biodiversity. Snorkelers can expect to encounter a variety of sea creatures such as colorful tropical fish, sea turtles, and other marine life. The water is so clear that you can easily see schools of fish swimming around you, darting in and out of the vibrant corals.\nThe sanctuary is ideal for both beginners and experienced snorkelers, as the water is shallow and the current is minimal. It’s an excellent place for families to spend a day exploring the underwater world, and a great opportunity to introduce kids to the wonders of marine life.\nGilutongan Marine Sanctuary is also an excellent destination for underwater photographers, with its abundance of colorful and fascinating marine life. With the help of a waterproof camera, you can capture your memories and the beauty of the underwater world forever.\nIf you’re planning a trip to Cebu, make sure to include Gilutongan Marine Sanctuary in your itinerary. With its rich marine biodiversity, crystal-clear waters, and vibrant corals, it’s an experience that you will never forget.\nAt Escondido Bay, we offer snorkeling tours to Gilutongan Marine Sanctuary as part of our island hopping packages. Our experienced guides will make sure that you have a safe and enjoyable snorkeling experience. Come and explore the wonders of the underwater world with us!"}
        src={'/gilutongan-snorkeling.jpg'}
        alt={'Gilutongan Island Snorkeling, an abundance of life'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Snorkel Gilutongan with us'}
      />
      <Card
        heading={'Nalusuan Island'}
        title={'Nalusuan Marine Sanctuary: A Snorkeling Paradise in Cebu, Philippines'}
        text={"Nalusuan Island Marine Sanctuary is a popular destination for snorkeling enthusiasts in the Philippines. Located just off the coast of Cebu, this stunning marine sanctuary offers some of the best snorkeling in the region.\nThe Nalusuan Island Marine Sanctuary is home to a vast array of marine life, including colorful fish, vibrant coral reefs, and other unique sea creatures. Snorkelers can expect to see a variety of fish species, such as clownfish, angelfish, and parrotfish, as well as sea turtles, octopuses, and other fascinating marine life.\nThe clear, warm waters surrounding Nalusuan Island are perfect for snorkeling, with excellent visibility and calm conditions. The island's marine sanctuary is carefully protected to ensure that visitors can enjoy the natural beauty of the area without damaging the delicate ecosystem.\nSnorkeling at Nalusuan Island is suitable for snorkelers of all skill levels, with experienced guides available to help visitors navigate the underwater world. Whether you are a beginner or an experienced snorkeler, you are sure to have an unforgettable experience at Nalusuan Island.\nIn addition to snorkeling, visitors to Nalusuan Island can also enjoy other activities such as swimming, sunbathing, and beachcombing. The island is home to a beautiful white sand beach that is perfect for relaxing and soaking up the sun.\nOverall, Nalusuan Island Marine Sanctuary is a must-visit destination for anyone who loves snorkeling or simply appreciates the natural beauty of the ocean. With its crystal-clear waters, diverse marine life, and breathtaking scenery, this marine sanctuary is truly a paradise for snorkelers and nature lovers alike."}
        src={'/turtle-at-nalusuan.jpg'}
        alt={'Green Sea Turtle at Nalusuan Marine Sanctuary'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Snorkel Nalusuan with us'}
      />
      <h2>Island Hopping Destinations further away but worth the Trip</h2>
      <div className='divider'></div>
      <Card
        heading={'Pandanon Island'}
        title={'Pandanon Island: A Tropical Paradise in the Heart of Cebu'}
        text={"If you\'re looking for a tropical island paradise, look no further than Pandanon Island. Located just off the coast of mainland Cebu, this small island is the perfect place to escape the hustle and bustle of city life and relax in a stunning natural environment.\nOne of the highlights of Pandanon Island is its pristine white sand beaches, which are perfect for swimming, sunbathing, or just lounging in the shade of a palm tree. The crystal-clear waters surrounding the island are also a great place for snorkeling or diving, as they are home to a variety of colorful marine life.\nIn addition to its natural beauty, Pandanon Island also has a rich cultural history. The island is said to have been used as a trading port by ancient Chinese merchants, and there are also several historic sites on the island, including an old lighthouse and a traditional fishing village.\nOne of the best ways to experience all that Pandanon Island has to offer is by taking a day trip or island hopping tour. We offer packages that include transportation to and from the island, as well as equipment for snorkeling or diving. You can also enjoy a delicious beachside barbecue or simply relax in a shaded cabana with a cold drink in hand.\/Whether you're looking for adventure, relaxation, or a bit of both, Pandanon Island has something for everyone. With its stunning natural beauty, rich cultural history, and variety of activities, it's no wonder why so many people consider it one of the best destinations in the Philippines. So why not plan your next tropical escape to Pandanon Island and experience the beauty of this tropical paradise for yourself?"}
        src={'/Pandanon-Island.jpg'}
        alt={'Pandanon Island off the coast from Cebu'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Book Pandanon with us'}
      />
      <Card
        heading={'North Sandbar'}
        title={'North Sandbar: White Sand, Clear Waters, Perfect for Island Hopping.'}
        text={"North Sandbar is a picturesque sandbar located just a short boat ride from the island of Bohol in the Philippines and only 2.5 hours from Mactan. This beautiful natural formation is a must-visit destination for anyone traveling to the area.\nNorth Sandbar is a long stretch of soft white sand and crystal-clear turquoise water. At low tide, the sandbar emerges from the water, revealing a long strip of pristine sand that is perfect for sunbathing, playing beach games, or taking a leisurely walk along the shore. The water around the sandbar is relatively shallow, making it an excellent spot for swimming, snorkeling, and exploring the nearby coral reefs.\nOne of the highlights of visiting North Sandbar is the opportunity to see the diverse marine life that calls the area home. Schools of colorful tropical fish, sea turtles, and other marine creatures can often be spotted in the water, making it a perfect destination for underwater photographers and snorkelers alike.\nNorth Sandbar is also a great place to relax and unwind. The serene beauty of the area makes it an ideal spot for meditation, yoga, or simply soaking up the sun and enjoying the warm tropical breeze.\nWhether you\'re a seasoned traveler or a first-time visitor to the Philippines, North Sandbar is a must-visit destination that offers something for everyone. Come and experience the natural beauty and tranquility of this stunning sandbar for yourself."}
        src={'/north-sandbar.JPG'}
        alt={'Prestine and Pulvery white sands at north sandbar'}
        layout={'fill'}
        objectFit={'contain'}
        button={'Book North Sandbar with us'}
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

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
      text: "Our entry level BBQ Lunch consists of deliciously marinated Chicken Thighs, Filipino Marinated Pork and Hungarian Sausages served with rice and a selection of vegetables all fresh made from our BBQ Grill. The entry level starts at PHP350 per person.",
      href: "contact",
      button: "Book now",
      key: "1",
    },
    {
      title: "Seafood Upgrade",
      image: "/king-prawns.JPG",
      alt: "Our Famous Seafood BBQ Lunch",
      text: "Upon Interest and availability we can extend the BBQ Lunch with fresh shrimps, prawns, shells and selections of local fishes. If you are interested in this option please contact us. The prices vary upon availability and season.",
      href: "contact",
      button: "Book now",
      key: "2",
    },
    {
      title: "The Deluxe Package",
      image: "/birthday-party.JPG",
      alt: "Steaks, Burgers, Hotdog or Lechon - we cater to all your needs",
      text: "If Seafood isn’t yet enough of an upgrade for you we are happy to serve you an American or European Style Barbecue Lunch with Steaks, Hotdogs, Burgers or anything you could wish for. Just reach out to us and let us know what your heart desires.",
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
      />

      <ServiceDisplay 
        title={'Our Food Packages'}
        display={display}
      />
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
      />
      <Card
        heading={'Sulpa Island'}
        title={'Sulpa Island: Discover Mactan\'s Hidden Gem'}
        text={"Sulpa Island is a small, uninhabited island located just off the coast of Mactan in the Cebu province of the Philippines. This hidden gem is known for its pristine waters, stunning coral reefs, and white sand beaches.\nAs one of the most beautiful islands in the region, Sulpa Island has become a popular destination for tourists and locals alike. Its crystal-clear waters make it an ideal location for snorkeling and diving, with an abundance of marine life including colorful fish, sea turtles, and even the occasional reef shark.\nBut Sulpa Island is not just a great spot for underwater adventures. The island\'s powdery white sand beaches are perfect for sunbathing and relaxation, while its lush greenery and rocky cliffs provide great opportunities for trekking and exploring.\nTo get to Sulpa Island, visitors can take a short boat ride from Mactan Island. Once there, they can enjoy a variety of activities such as snorkeling, swimming, beachcombing, and island hopping. The island is also perfect for those looking to escape the crowds and enjoy some peace and quiet.\nVisitors can also explore the island\'s rocky cliffs and hidden coves, which are perfect for photography and enjoying stunning views of the surrounding waters. And for those who love a bit of history, Sulpa Island is home to a small Spanish-era fort that was built to protect against pirates.\nOverall, Sulpa Island is a must-visit destination for anyone traveling to Mactan. With its natural beauty, clear waters, and endless activities, it is a perfect place to relax, explore, and create unforgettable memories."}
        src={'/sulpaisland.webp'}
        alt={'Sulpa Island the Gem near Mactan with Crystal clear waters'}
        layout={'fill'}
        objectFit={'contain'}
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
      />
      <Card
        heading={'North Sandbar'}
        title={'North Sandbar: White Sand, Clear Waters, Perfect for Island Hopping.'}
        text={"North Sandbar is a picturesque sandbar located just a short boat ride from the island of Bohol in the Philippines and only 2.5 hours from Mactan. This beautiful natural formation is a must-visit destination for anyone traveling to the area.\nNorth Sandbar is a long stretch of soft white sand and crystal-clear turquoise water. At low tide, the sandbar emerges from the water, revealing a long strip of pristine sand that is perfect for sunbathing, playing beach games, or taking a leisurely walk along the shore. The water around the sandbar is relatively shallow, making it an excellent spot for swimming, snorkeling, and exploring the nearby coral reefs.\nOne of the highlights of visiting North Sandbar is the opportunity to see the diverse marine life that calls the area home. Schools of colorful tropical fish, sea turtles, and other marine creatures can often be spotted in the water, making it a perfect destination for underwater photographers and snorkelers alike.\nNorth Sandbar is also a great place to relax and unwind. The serene beauty of the area makes it an ideal spot for meditation, yoga, or simply soaking up the sun and enjoying the warm tropical breeze.\nWhether you\'re a seasoned traveler or a first-time visitor to the Philippines, North Sandbar is a must-visit destination that offers something for everyone. Come and experience the natural beauty and tranquility of this stunning sandbar for yourself."}
        src={'/north-sandbar.JPG'}
        alt={'Prestine and Pulvery white sands at north sandbar'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <style jsx>{`
       h1, h2 {
        text-align: center;
        margin: 50px 0px 20px 0px;
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

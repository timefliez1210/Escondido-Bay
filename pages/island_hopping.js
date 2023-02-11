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
        Island Hopping around Mactan Island is as beautiful as it gets, many lonely Islands with beautiful beaches are in arms reach.
        </title>
        <meta
          name="description"
          content="We are operating nearly on a bi-weekly basis house hosted island hopping tours and are generally available for private bookings for groups starting at 10 people."
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
        text={"Escondido Bay committed itself to reinvent the Native Experience. Our classical Bangka Boat is not only spacious and comfortably designed to carry up to 50 people but we also dedicated ourselves to cater around all your needs. From a spare boat charter, over Barbecue packages, an open bar where our staff will serve you ice cold beers or delicious homemade cocktails and shooters we make it happen for you, so you can enjoy your day out at our beautiful islands without worrying about anything else than a good time and your friends, while listening soothing tunes, snorkeling or just simply enjoying the natural beauty of the Philippines."}
        src={'/island-hopping-olango.JPG'}
        alt={'Island Hopping Olango Island'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <ServiceDisplay 
        title={'Our Food Packages'}
        display={display}
      />
    </div>
  )
}

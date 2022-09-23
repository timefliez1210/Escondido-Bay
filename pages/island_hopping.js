import Head from 'next/head'
import Banner from '../components/Banner'
import Card from '../components/Card'

export default function island_hopping() {
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
        title={'Enjoy your day with cocktails, music and beaches'}
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
    </div>
  )
}

import Head from 'next/head'
import Banner from '../components/Banner'

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
        title={'Our page is under contruction'}
        text={"But our boat is fully operational. Please dont be shy to contact us on Facebook, Whatapp, Viber or simply a call to book our boat or diving courses."}
        src={'/Escondido-Bay.jpg'}
        alt={'Diving on mactan'}
        layout={'fill'}
        objectFit={'contain'}
      />
    </div>
  )
}

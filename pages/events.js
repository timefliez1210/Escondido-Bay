import Head from 'next/head'
import Banner from '../components/Banner'

export default function events() {
  return (
    <div>
      <Head>
      <title>
       Escondido Bay Events - Join us for our hosted events like DJ Cruises or book your very own private event with us.
      </title>
      <meta
        name="description"
        content="From regular hosted events like our DJ Cruise, Band Cruise and several contests we are hosting on our boat, we are always happy to cater private events like birthdays, weddings or anything you would like."
      />
    </Head>
      <Banner
        heading={'Our Event Offers'}
        title={'We are offering a wide array of possibilities - host your own private event or join one of ours'}
        src={'/events.jpg'}
        alt={'Diving on mactan'}
        layout={'fill'}
        objectFit={'contain'}
      />
 </div>
  )
}

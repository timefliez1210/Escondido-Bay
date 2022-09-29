import Head from 'next/head'
import Banner from '../components/Banner'
import Card from '../components/Card'

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
        src={'/events.JPG'}
        alt={'Escondido Bay Catering your Private event or join one of ours'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <Card
        heading={'Events and Parties with Escondido Bay'}
        title={'Join our hosted Events or enjoy your private party with us'}
        text={"Escondido Bay offers a wide range of Events. Our boat was built to make your time on it as enjoyable as possible, no matter if you join one of our countless events like the DJ Cruises, Band Cruises or special themed events, or if you want to celebrate your birthday or any other sort of social gathering, we made it our mission and dedication to let you have the best time possible."}
        src={'/birthday-party.JPG'}
        alt={'Join our events like DJ Cruises or host your own party'}
        layout={'fill'}
        objectFit={'contain'}
      />
 </div>
  )
}

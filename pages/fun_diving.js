
import Head from 'next/head'
import Banner from '../components/Banner'
import Card from '../components/Card'

export default function fun_diving() {
  return (
    <div>
      <Head>
      <title>
       Our Weekly Dive Days will show you a variety of Dive Sites Around Lapu-Lapu City, Mactan Island.
      </title>
      <meta
        name="description"
        content="Around Mactan we have several option, the local dives like Marigondon Cave, Tambuli House Reef, Shangri-La House Reef and Kontiki, but from our boat we are happy to bring you to Talima, Baring and San Vincente by Olango Island or Nalusuan Marine Sanctuary and Hilutongan Marine Sanctuary"
      />
    </Head>
      <Banner
        heading={'Our Fundiving Offers'}
        title={'Enjoy your Dive Trip with us'}
        text={"But our boat is fully operational. Please dont be shy to contact us on Facebook, Whatapp, Viber or simply a call to book our boat or diving courses."}
        src={'/talima-reefscape.JPG'}
        alt={'Fun Diving around Mactan Island, Lapu-Lapu City and Cordova'}
      />
      <Card
        heading={'Fun Diving with Escondido Bay'}
        title={'Reefs, Caves, Wrecks and an Abundance of Aquatic Life'}
        text={"As one of the pristine diving destinations in the world the Philippines will surprise you with beautiful colored reefs, great visibility and abundant aquatic life. Around Mactan Island and Cordova we are not shy of those desirable dive sites and on top of that we have access to Caves and Wrecks for accordingly trained divers. Being very experienced around Mactan, Cebu and the Philippines in general we are happy to help you find the best dive sites according to your preferences."}
        src={'/reefscape-magnificent-anemone.JPG'}
        alt={'Fun Diving around Mactan Airport'}
        layout={'fill'}
        objectFit={'contain'}
      />
  </div>
  )
}
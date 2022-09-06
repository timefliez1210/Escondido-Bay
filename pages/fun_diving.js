
import Head from 'next/head'
import Banner from '../components/Banner'

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
        src={'/fun-diving.jpeg'}
      />
  </div>
  )
}
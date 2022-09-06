import Head from 'next/head'
import Banner from '../components/Banner'


export default function contact() {
  return (
    <div>
      <Head>
      <title>
       Contact us to avail our services or to ask any question - We are happy to help you with everything around Diving and Boating.
      </title>
      <meta
        name="description"
        content="Available nearly around the clock we are very happy to answer all question you might have around our services - Diving, Island Hopping and Events."
      />
    </Head>
      <Banner
        heading={'Contact us for Inquiries and with Questions'}
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

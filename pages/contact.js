import Head from 'next/head'
import Banner from '../components/Banner'
import Cta from '../components/Cta'
import ContactForm from '../components/ContactForm'



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
        heading={'Contact'}
        title={'Contact us with inquiries and questions'}
        src={'/Escondido-Bay.png'}
        alt={'Contact us for Inquiries and Questions'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <ContactForm />
    </div>
  )
}


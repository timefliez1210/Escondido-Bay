
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
        heading={'Fun Diving with us'}
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
      <h1>Our Divesites around Mactan</h1>
      <div className='divider'></div>
      <Card
        heading={'Nalusuan Island'}
        title={'Shallow Reefs, a sandy slope and a steep wall'}
        text={"The Nalusuan Marine Sanctuary with its long sandbar has shallow reefs, a sandy slope reaching from 5m down to approximately 14-20m, followed by a steep falling wall with an estimated bottom between 40-50m. \n\nThe shallow reefs of Nalusuan Island are the home of an abundance of smaller fishes and colorful corals, a beautiful destination for snorkelers or divers who want to enjoy their safety stop./n/nThe sandy slope of this marine sanctuary is the habitat of all different sorts of stingrays, squids, octopuses and many more interesting sea creatures like frog fishes, from time to time we even may encounter larger ray species like the devil ray.\n\nLast but not least, one can explore the wall which hosts a lot of interesting sea creatures for those who may be fond of Macro photography. Various different species of nudibranchs, flatworms and juvenile fish hiding discreetly within the tentacles of an anemone reside here; the really patient divers might even be able to spot a pygmy seahorse within the fans along the wall.\n\nThe boat ride usually takes about 30 to 40 minutes from the Mactan Island coast or Cordova.\n\nThe island with its long sand bar is a sanctuary to all the sea creatures and to the nature lovers. You can literally reach at arm’s length the abundance of marine life"}
        src={'/Octopus-Nalusuan-Marine-Sanctuary.JPG'}
        alt={'Octopus in Nalusuan Marine Sanctuary Cebu'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <Card
        heading={'Gilutongan Island'}
        title={'Abundance of aquatic life and great reefs'}
        text={"Gilutongan Island has a similar shape to a shark. It is about 630 meters long and 820 meters wide. The island is home to numerous coral reefs and sea grass meadows, partially protected by the 15 hectare Gilutongan Marine Sanctuary. It is one of the most scenic diving and snorkelling destinations we have at arm's length from Mactan Island, Lapu-Lapu City or Cordova.\n\nWhether one is a freshly certified or very experienced diver, with its shallow and colorful reefs as well as steep falling wall, the vast array of sea creatures and aquatic life, makes this destination worthy of exploration. \n\nThe visibility reaches from 10m on bad days to literally crystal clear waters on good days.\n\nBig schools of jack fishes, barracudas, bat fishes can be seen frequently on this dive site and furthermore, Gilutongan is not shy of pelagic travellers every now and then, as well as the diversity the Philippines in general are famous for.\n\nThe boat ride usually takes about 40 minutes from the Mactan Island coast or Cordova."}
        src={'/Barracuda-Gilutongan-Marine-Sanctuary.JPG'}
        alt={'Gilutongan Island Baracudas near Lapu-Lapu City'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <Card
        heading={'Marigondon Cave'}
        title={'A steep decent into a wide daylight cave'}
        text={"Directly off the coast of Marigondon in Lapu-Lapu City, located at roughly 37m depth within an extensive reef wall, this cave is one of the most famous local dive sites.\n\nExperienced divers can access this cave or cavern either as a shore dive, which involves roughly a 200m swim or by boat.\n\nMost parts, including the entrance to the cavern, are very wide and you can see the exit during most of the duration within the cave. Even divers without a specific cave certification can join this exciting dive. \n\nWithin the cave we commonly see a multitude of stone and scorpion sishes, lionfishes and abundant species for the Macro photographer. Additionally, the rock and coral formations along with the composition of the inner structure with beautiful large sea fans make this destination particularly thrilling and fun to explore."}
        src={'/Marigondon-Cave-Critters.JPG'}
        alt={'Our Cave dive in Marigondon, Lapu-Lapu City, Cebu'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <style jsx>{`
       h1 {
        text-align: center;
        margin: 20px 0px;
       }
       .divider {
        height: 3px;
        width: 15%;
        background: white;
        margin: auto auto;
      }
       `}</style>
  </div>
  )
}
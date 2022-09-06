import Head from 'next/head'
import Banner from '../components/Banner'
import Card from '../components/Card'

export default function PADI_diving_courses() {
  return (
    <div>
      <Head>
      <title>
       As PADI Dive Instructors we teach a variety of courses - starting at the Open Water Certification up to Professional Ratings such as Divemaster.
      </title>
      <meta
        name="description"
        content="PADI courses are avilable from Open Water, Advanced Open Water, Rescue Diver, Divemaster as such as Emergency First Response and many specialties such as Nitrox, Deep and Wreck"
      />
    </Head>
      <Banner
        heading={'PADI Diving Courses'}
        title={'Explore the Beautiful World Underwater'}
        text={"No matter if you are a complete beginner or already an experienced diver, we have a wide variety of Diving Certification courses to either start your adventure or improve it. \n\nReach out to us if you have any questions or don't find what you are looking for, we are sure we can help you."}
        src={'/Diving-Courses.JPG'}
        alt={'Learn Scuba Diving on Mactan Lapu-Lapu City'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <Card
        heading={'PADI Open Water Diver'}
        title={'The Entry Level Scuba Diving Certification'}
        text={"PADI Open Water Diver is the entry level scuba diving certification.\nDuring this course you will learn all the basics necessary to become a fully certified diver and enjoy a completely new world full of adventures.\n\nPlan for 2 - 3 days depending on your comfort level in the water and weather conditions."}
        src={'/Open-Water-Diver.jpeg'}
        alt={'PADI Open Water Diver Certification Course'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <Card
        heading={'Discover Scuba Diving or PADI Scuba Diver'}
        title={''}
        text={"If you don't have 2 - 3 days for the full training, we are happy to offer you the PADI Discover Scuba Diving Experience, or the PADI Scuba Diver, both of which are a part of the Open Water Diver course and can credit to your further certification. A perfect option for those who just want to experience it, without further commitment.\n\nPlan on 3 hours for the Discover Scuba Diving Experience or 5 hours for the PADI Scuba Diver."}
        src={'/Discover-Scuba-Diving.jpeg'}
        alt={'PADI Discover Scuba Diving and Scuba Diver'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <Card
        heading={'PADI Advanced Open Water Diver'}
        title={'The first step of continuing your Scuba Diving education'}
        text={"For those who want to learn more about diving and improve their overall comfort and skills, we offer the PADI Advanced Open Water, which will increase your depth limit from 18m to 30m, teach you natural and compass navigation and challenge you on the other dives to become more comfortable as well as explore a wide range of diving possibilities!\n\nGet in contact with us to learn more about your specialty dives and offers!"}
        src={'/Advanced-Open-Water.jpeg'}
        alt={'PADI Advanced Open Water Diver Certification'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <Card
        heading={'PADI Enriched Air Diver (also known as Nitrox diving)'}
        title={'Extend your bottom time by increasing the Oxygen percentage'}
        text={"One of the greatest tools in diving, increasing the Oxygen Content in your breathing gas to extend your bottom time. Especially recommended for shark, wreck, and cavern dives in the Philippines. Many of the more interesting dives are at the 20-30 meters range, in which your No Decompression Limit is fairly short, take the Enriched Air course if you want to stay down longer."}
        src={'/Enriched-Air-Diver.jpeg'}
        alt={'PADI Enriched Air Diver or Nitrox Certification'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <Card
        heading={'PADI Deep Diving Specialist'}
        title={'Extend your depth range to 40m'}
        text={"30 meters not sufficiently deep enough for you? You want to explore even deeper sites and learn more about emergency procedures and precautions to take when you explore greater depths? The Deep Diving Specialist is for you then! We will teach you how to explore greater depths safely with well developed dive plans and contingencies.\n\nWe have special offers for connecting the PADI Deep Diving specialty with Enriched Air Diver. Get in touch with us to avail of this special offer!"}
        src={'/Deep-Specialty-Diver.jpeg'}
        alt={'PADI Depp Specialty Diver'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <Card
        heading={'PADI Wreck Diver'}
        title={'Learn how to safely explore wrecks'}
        text={"For those who want to discover a piece of history under water. A place not a lot of people have ever seen, an adventure on its own. The Wreck Diving Specialty trains you to explore sunken ships, airplanes, and a variety of vessels which sank to the bottom of the sea in a safe way. We will teach you how to safely penetrate those wrecks, create special dive plans and much more during your course, so you can witness places not a lot of people ever set an eye on."}
        src={'/Padi-Wreck-Diver-Specialty.jpeg'}
        alt={'PADI Wreck Diver Specialty'}
        layout={'fill'}
        objectFit={'contain'}
      />
      
 </div>
  )
}
/*
<Card
        heading={'PADI Sidemount Certification'}
        title={'Carrying 2 Cylinders side by side, increase you air supply and redundancy'}
        text={"But our boat is fully operational. Please dont be shy to contact us on Facebook, Whatapp, Viber or simply a call to book our boat or diving courses."}
        src={'/Escondido-Bay.jpg'}
        alt={'Diving on mactan'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <Card
        heading={'PADI Night Diving Specialty'}
        title={'Learn more about the special world at night'}
        text={"But our boat is fully operational. Please dont be shy to contact us on Facebook, Whatapp, Viber or simply a call to book our boat or diving courses."}
        src={'/Escondido-Bay.jpg'}
        alt={'Diving on mactan'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <Card
        heading={'Emergency First Responder'}
        title={'React right in emergencies - on land and in the water'}
        text={"But our boat is fully operational. Please dont be shy to contact us on Facebook, Whatapp, Viber or simply a call to book our boat or diving courses."}
        src={'/Escondido-Bay.jpg'}
        alt={'Diving on mactan'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <Card
        heading={'PADI Rescue Diver'}
        title={'Nobody hopes for accidents, but if they happen better be prepared'}
        text={"But our boat is fully operational. Please dont be shy to contact us on Facebook, Whatapp, Viber or simply a call to book our boat or diving courses."}
        src={'/Escondido-Bay.jpg'}
        alt={'Diving on mactan'}
        layout={'fill'}
        objectFit={'contain'}
      />
      <Card
        heading={'PADI Divemaster'}
        title={'The first PADI Professional rating and your ticket to travel the world'}
        text={"But our boat is fully operational. Please dont be shy to contact us on Facebook, Whatapp, Viber or simply a call to book our boat or diving courses."}
        src={'/Escondido-Bay.jpg'}
        alt={'Diving on mactan'}
        layout={'fill'}
        objectFit={'contain'}
      /> */
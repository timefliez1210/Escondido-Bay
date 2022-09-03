import Banner from '../components/Banner'


export default function contact() {
  return (
    <div>
      <Banner
      heading={'Escondido Bay'}
      title={'Our page is under contruction'}
      text={"But our boat is fully operational. Please dont be shy to contact us on Facebook, Whatapp, Viber or simply a call to book our boat or diving courses."}
      src={'/Escondido-Bay.jpg'}
      alt={'Diving on mactan'}
      layout={'fill'}
      objectFit={'contain'}
      />
    <style jsx>{`

.divider {
  height: 3px;
  width: 40%;
  background: #0F0D69;
  margin: auto auto;
}
h1,
h2,
h3 {
  text-align: center;
  color: black;
}
p {
  text-align: left;
}
.card {
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 40px;
  border-radius: 40px;
  width: 95vw;
  max-width: 1080px;
  margin: 5vh auto;
  min-height: 300px;
}
@media only screen and (max-width: 800px) {
  .content {
    padding: 10px 0;
    margin: 10vh auto;
  }
}
a {
  color: white;
  text-decoration: none;
}
.image-container {
  display: block;
  height: auto;
  width: auto;
  position: relative;
  padding: auto auto;
  }

  .wrapper {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (minmax(19rem, 1fr))[auto-fit];
        grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
    grid-gap: 20px;
    height: auto;
    width: auto;
    text-align: center;
    content: center center;
    padding: 20px;
    margin: 150px 0 0 0;
} 
@media screen and (max-width: 800px) {
  .wrapper {
    grid-gap: 40px;
    padding: 50px 10px;
    margin: 50px 0 0 0;
  }
}
.content {
  background: white;
  color: black;
}
.leistungen {
  text-align: justify;
  margin: -150px 0 -150pxF 0;
}

.leistungen .button {
  padding: 20px;
  background-color: #0F0D69;
  color: white;
  border-radius: 20px;
  margin: 0 auto;
  text-align: center;
  width: 200px;
}

.leistungen .item-holder {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(14rem, 1fr))[auto-fit];
      grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
  grid-gap: 20px;
  padding: 50px;
}

@media screen and (max-width: 650px) {
  .leistungen .item-holder {
    grid-gap: 40px;
    padding: 50px 10px;
  }
}
.service-images {
  width: 300px;
}
`}</style>
    </div>
  )
}


import Image from 'next/image'
import Link from 'next/link'


const Home = () => {
  return (
    <div>

       <div className="wrapper">
         
          <div className="content">
            <h1>Escondido Bay</h1>
            <div className='divider'></div>
            <h2>The Native Experience Reinvented</h2>
            <p>The ship&quot’s history is richly steeped in a very heroic and distinguished past having been
constructed so robustly that it was often used in rescue and salvage operations during
turbulent sea conditions and inclement weather. Being so sturdy, it was also often used as a
cargo vessel for inter-island transfers of goods, supplies and personnel, hence its past
namesake “The Warrior”, a true testament to its sea worthiness and brawn.<br/><br/>
While today, it has maintained the basic structure consisting of a heavily strengthened
frame and hull, the vessel has undergone a complete refurbishment focused on catering for
comfortable and very safe passages from island to island, diving or events for groups of up to 40 people.</p>
            </div>
            <div className='image-container'>
            <Image
              src='/Escondido-Bay.jpg'
              alt='Diving on Mactan Island'
              layout='fill'
              objectFit="contain"
              />
            </div>
        </div>

      <div className="wrapper">
      <div className="leistungen">
        <h2>Our Offers and Services</h2>
        <div className='divider'></div>
        <div className="item-holder">
          <div className="box">
          <h3>Island Hopping</h3>
            <img
              src="/static/img/startseite-umzugsberatung.jpg"
              alt="Kostenlose Beratung"
              className="service-images"
            />
            <br />
            <br />
            <br />
            <br />
            
            <br />
            <br />
            <Link
              href="/island_hopping"
              title="Island Hopping"
            >
              <div className="button">Island Hopping</div>
            </Link>
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="box">
          <h3>Events</h3>
            <img
              src="/Escondido-Bay.jpg"
              alt="Event Catering and Open Bars"
              className="service-images"
            />
<p>Abundant space for 40 people and more our boat &apos;Escondido Bay&apos; gives you enough space to host your next event on the ocean.
  And don&apos;t worry, we can take care of everything if you need. From catering the food, simple bottled drinks and even up to 
  fresh and home made cocktails, we have everything covered. 
</p>
            <Link
              href="/events"
              title="Events on our boat"
            >
             <div className="button">Events</div>
            </Link>
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="box">
          <h3>Fun Diving</h3>
            <img
              src="/Diving-Lapu-Lapu-City.jpeg"
              alt="Fundiving on Mactan, Olango, Nalusuan, Hilutongan and many more"
              className="service-images"
            />
            <br /><br /><br />

<p>With the Dive Sites on and around Mactan we are richly spoiled. Join us and discover abundant sea life around Mactan,
  Olango Island, Nalusuan or Hilutongan. From exceptional macro creatures up to all sorts of pelagic animals, you will not be disappointed.
</p>

            <Link
              href="/fun_diving"
              title="Fun Diving Around Mactan Island Lapu-Lapu"

            >
             <div className='button'>Fun Diving</div>
            </Link>
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="box">
          <h3>PADI Diving Courses</h3>
            <img
              src="/Diving-Nalusuan.jpeg"
              alt="Our Diving Courses around Mactan"
              className="service-images"
            />
            <br />

            <p>Dive into a complete new world of adventures or continue your education. We walk you through
              a broad array of possibilities below the surface. No matter if you are a beginner or already 
              certified, we have got the course for you!
            </p>

            <Link
              href="PADI_diving_courses.html"
              title="PADI Diving Education"
            >
              <div className='button'>PADI Diving Courses</div>
            </Link>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      </div>
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

export default Home;

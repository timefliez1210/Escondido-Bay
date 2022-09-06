import Link from 'next/link'
import Image from 'next/image'

export default function ServiceDisplay() {
  return (
    <div>      
<div className="wrapper">
    <div className="services">
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
    <style jsx> {`
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
                    margin: 0 0 0 0;
                } 
                @media screen and (max-width: 800px) {
                  .wrapper {
                    grid-gap: 40px;
                    padding: 50px 10px;
                    margin: 50px 0 0 0;
                  }
                }

                .divider {
                    height: 3px;
                    width: 15%;
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
                  .services {
                    text-align: justify;
                    margin: 0;
                    height: 100%;
                    align-content: center center;
                  }
                  .button {
                    display: inline-block;
                    text-decoration: none;
                    color: white;
                    background: #0F0D69;
                    padding: 0.4rem 0.9rem;
                    border: 3px solid #0F0D69;
                    cursor: pointer;
                    margin: auto auto;
                  }
                  .button:hover {
                    background: transparent;
                    color: #0F0D69;
                  }
                  
                  .services .item-holder {
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

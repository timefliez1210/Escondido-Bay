import Image from 'next/legacy/image'
import Link from 'next/link'

export default function ReviewLinks(props) {
  return (
    <div>
    <h2>{props.title}</h2>
      <div className='divider'></div>
      <br /><br /><br /><br />
      <div className="wrapper-white">
        <div className="services">
          <div className='item-holder'>
            <div className="box">
            <div className="service-images">
            <Link href='https://www.google.com/search?q=escondido+bay&rlz=1C5CHFA_enPH923PH923&oq=escondido+bay&aqs=chrome.0.69i59l2j0i512j0i22i30l2j69i65j69i60l2.3521j0j7&sourceid=chrome&ie=UTF-8' target='_blank'>
              <Image
                src='/Google-logo.png'
                alt='Find us on Google'
                layout='fill'
                objectFit='contain'
              />
              </Link>
            </div>
            </div>
          </div>
        </div>
        <div className="services">
          <div className='item-holder'>
            <div className="box">
            <div className="service-images">
            <Link href='https://www.facebook.com/EscondidoBay/reviews' target='_blank'>
              <Image
                src='/facebook-logo.jpeg'
                alt='Find us on Facebook'
                layout='fill'
                objectFit='contain'
              />
              </Link>
            </div>
            </div>
          </div>
        </div>
        <div className="services">
          <div className='item-holder'>
            <div className="box">
            <div className="service-images">
            <Link href='https://www.tripadvisor.in/Attraction_Review-g298461-d24981131-Reviews-Escondido_Bay_Dive_Center-Lapu_Lapu_Mactan_Island_Cebu_Island_Visayas.html' target='_blank'>
              <Image
                src='/Tripadvisor-Emblem.png'
                alt='Find us on Facebook'
                layout='fill'
                objectFit='contain'
              />
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
       h1, h2 {
        text-align: center;
        margin: 50px 0px 20px 0px;
       }
       h3 {
        text-align: left;
       }
       p {
        max-width: 80vw;
        margin: 20px auto;
       }
       .icons {
        text-align: center;
       }
       .divider {
        height: 3px;
        width: 15%;
        background: white;
        margin: auto auto;
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
        margin: 0 0 0 0;
        }
        .wrapper-white {
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
          background-color: white;
          }  
        .service-images {
          height: auto;
          width: 100%;
          min-height: 200px;
          position: relative;
          padding: auto auto;
        }
        img {
          margin: auto auto;
        }
        p {
          text-align: left;
          white-space: pre-line;
        }
        .services {
          text-align: justify;
          margin: 0;
          height: 100%;
          align-content: center center;
        }
        @media screen and (max-width: 800px) {
          .wrapper {
            grid-gap: 40px;
            padding: 50px 10px;
            
          }
        }
        @media screen and (max-width: 650px) {
          .services .item-holder {
            grid-gap: 40px;
            padding: 50px 10px;
          }
        }
       `}</style>
    </div>
  )
}

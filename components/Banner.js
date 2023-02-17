import Image from 'next/legacy/image'

function Banner(props) {
  return (
    <div>
    <div className="hero">
        <Image
            src={props.src}
            alt={props.alt}
            layout="fill"
            objectFit="cover"
            quality={100}
        />
    <div className="banner">
      <h1>{props.heading}</h1>
      <div className="divider"></div>
      <p>{props.title}</p>

    </div>
    </div>
       <style jsx>{`
       .hero {
         min-height: calc(100vh - 150px);
         display: flex;
         align-items: center;
         justify-content: center;
         margin: 20vh 0 0 0;
       }
      .banner {
        display: inline-block;
        background: RGBA(49,59,74,0.4);
        color: white;
        padding: 2rem 1rem;
        text-align: center;
        z-index: 100;
      }
      .banner h1 {
        font-size: 2.5rem;
      }
      .banner div {
        width: 10rem;
        height: 5px;
        background: #0F0D69;
        margin: 1.7rem auto;
      }
      .banner p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
      }
      @media screen and (max-width: 991px) {
        .hero {
          margin-bottom: 30vh;
          min-height: calc(70vh - 150px);
          margin-top: 150px;
        }
        .banner {
          padding: 2rem 3rem;

        }
        .banner h1 {
          font-size: 3rem;
        }
        .hero {
          min-height: calc(70vh - 100px);
          margin-top: 70px;
        }
      }
      @media screen and (min-width: 992px) {
        .banner {
          padding: 2rem 6rem;
        }
        .banner h1 {
          font-size: 4rem;
        }
        .hero {
          min-height: calc(100vh - 70px);
          margin-top: 70px;
        }
      }
       `}</style>
    </div>
  )
}

export default Banner
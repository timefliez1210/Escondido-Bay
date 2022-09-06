
function Banner(props) {
  return (
    <div>
    <div className="hero">
    <div className="banner">
      <h1>{props.heading}</h1>
      <div className="divider"></div>
      <p>{props.title}</p>

    </div>
    </div>
       <style jsx>{`
       .hero {
         min-height: calc(100vh - 150px);
         background: url(${props.src}) center/cover no-repeat;
         display: flex;
         align-items: center;
         justify-content: center;
         margin-top: 150px;
       }
      .banner {
        display: inline-block;
        background: rgba(255, 255, 255, 0.6);
        color: var(--mainWhite);
        padding: 2rem 1rem;
        text-align: center;
        text-transform: capitalize;
        letter-spacing: var(--mainSpacing);
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
      @media screen and (min-width: 576px) {
        .banner {
          padding: 2rem 3rem;
        }
        .banner h1 {
          font-size: 3rem;
        }
        .hero {
          min-height: calc(100vh - 70px);
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
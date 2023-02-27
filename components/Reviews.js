import ReviewLinks from './ReviewLinks'
import { BsFillStarFill } from 'react-icons/bs'

function Reviews(props) {
  return (
    <div>
      <h2>Why our customers love us</h2>
      <div className='divider'></div>
      <br />
      <div className="wrapper">
        <div className="services">
          <h2>王仁邑</h2>
          <div className='divider'></div>
          <div className='item-holder'>
            <div className="box">
              <p className='icons'><BsFillStarFill color='gold' />  <BsFillStarFill color='gold' />  <BsFillStarFill color='gold' />  <BsFillStarFill color='gold' />  <BsFillStarFill color='gold' /></p>
              <h3>100% recommend Escondido Bay for a wonderful diving experience in Cebu! Clemens and Akira are very professional divers and they got a trustworthy crew.👍</h3>

              <p>
                Really enjoyed my first diving experience at Nalusuan marine sanctuary. The ecosystem there was amazing, we saw various coral reef and colorful fish. The Discover Scuba Diving (DSD) experience was fantastic.😍
                <br /> 
                Clemens gave detailed explanation of everything I need to know under water, and he showed great patience & support while my father and I managed to control our balance. Thanks to Clemens' instruction, my diving time even improved from 20 mins (1st dive) to 40 mins (3rd dive)!
                <br /> 
                Next time when visiting Cebu, Escondido Bay will definitely be our first choice and I'd like to get a license then!💪
                <br /> 
                Great thanks again to Clemens, Akira, and everyone in Escondido Bay. See you next time!
              </p>
            </div>
          </div>
        </div>
        <div className="services">
          <h2>Paul Yi</h2>
          <div className='divider'></div>
          <div className='item-holder'>
            <div className="box">
            <p className='icons'><BsFillStarFill color='gold' />  <BsFillStarFill color='gold' />  <BsFillStarFill color='gold' />  <BsFillStarFill color='gold' />  <BsFillStarFill color='gold' /></p>
              <h3>
                Overall, I can't recommend him highly enough. Whether you are looking for top notch instruction, fun diving, or chilling on the boat, Clemens is your man.
              </h3>

              <p>
              I completed my PADI advanced open water certification with Clemens, who runs Escondido Bay. Clemens is an extremely knowledgeable and skilled instructor and I had an awesome time diving with him. I had a such a good experience I also had my girlfriend, who had never dived before, get her PADI open water certification with Clemens.
              <br /> <br />
              On top of being a great instructor, Clemens is also super friendly guy. We went out to grab food and drinks multiple times while I was in Mactan. He also lent me some of his diving gear when I went on a trip to Malapascua Island.
              </p>
            </div>
          </div>
        </div>
        <div className="services">
          <h2>Keith Fitzsimmons</h2>
          <div className='divider'></div>
          <div className='item-holder'>
          <p className='icons'><BsFillStarFill color='gold' />  <BsFillStarFill color='gold' />  <BsFillStarFill color='gold' />  <BsFillStarFill color='gold' />  <BsFillStarFill color='gold' /></p>
            <div className="box">
              <h3>An excellent and professional dive operation, with an emphasis on safety, while ensuring that you have fun. </h3>
              <p> 
              Clemens, Akira, Chrissie and the whole crew went above and beyond. They obtained larger tanks for me, and even gave me rides as I was on their way.<br /> <br />
              The food between dives, prepared by Chrissie ( probably spelled wrong if so sorry) was  terrific. The dive site at the Nilusuan Marine Sanctuary was excellent, with a steep and deep wall, with lots of varied marine life, as well as lots of life  while making safety stops , so that bottom time was used to the best advantage. 
              Also got lots of ltips for local restaurants, activities wetc. <br /> <br />A 5 star operation IMHO.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ReviewLinks title={props.title} />
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

export default Reviews
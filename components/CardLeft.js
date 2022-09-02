import React from 'react'
import Link from 'next/Link'

export default function CardLeft() {
  return (
    <div>
      <section className="content" id="content">
        <h1>Let's talk about now and the future</h1>
        <div className="divider"></div>
        <div className="card">
          <div>
            <img width="90%" src="./assets/img/covid-19-changes.jpg" />
          </div>
          <div>
            <h2>
              The year 2020, covid-19 and how they (should) change our view of
              the world.
            </h2>
            <div className="divider"></div>
            <p>
              Last year was a normal year, most people had a permanent job,
              worked “9-to-5”, came home, paid the bills and were happy if
              something was left over. Many dreamed of an independent life,
              independent of location and in a modern way, but never put it into
              practice.
            </p>
            <h2>But what is happening at the moment?</h2>
            <div className="divider"></div>
            <p>
              The current situation shows us that the system that we are taught
              from an early age has its limits, we are forced to either endure
              and persevere or finally to exhaust the possibilities that our
              time gives us, believe it or not, there are more than enough
              people who still make their money, the easiest way regardless of
              covid-19.
            </p>
          </div>
        </div>
        <div className="card2">
          <h2>“That’s all very nice, but how do I do this?”</h2>
          <div className="divider"></div>
          <p>
            Well, I won't lie here. It’s a long way ahead of you which will take
            a lot of dedication and discipline, sadly there is no
            “you-will-get-rich-overnight”-scheme, so plan in your time to build
            things up, but what I can tell you: It’s worth it. I am a 30 years
            old german, earning exclusively online, and were able to move to the
            philippines. So if you want to live independently, or simply just a
            little money from the side, drop your email here and I can show you
            step-by-step how you can achieve this too.
          </p>
        </div>
       
        

         
      </section>
      <section className="content">
        <div className="card2">
          <h1>And don't forget to subscribe to me Newsletter</h1>
          <h2>Too always stay up to date with new possibilities!</h2>
          <div className="divider"></div>
        </div>

      </section>
      <style jsx>{`
        .content {
          position: relative;
          padding: 50px 0;
          width: 95vw;
          max-width: 1080px;
          margin: 30vh auto;
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          border-radius: 10px;
        }
        @media only screen and (max-width: 800px) {
          .content {
            padding: 10px 0;
            margin: 10vh auto;
          }
        }
        .divider {
          height: 3px;
          width: 40%;
          background: #c90859;
          margin: auto auto;
        }
        h1,
        h2,
        h3 {
          text-align: center;
        }
        .card {
          margin: 5vh auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          padding: 40px;
          border-radius: 40px;
        }
        .card2 {
          margin: 5vh auto;
          padding: 40px;
          border-radius: 40px;
        }
        .display-imgage {
          height: 100%;
          align-self: center;
          width: auto;
          margin: auto auto;
          z-index: 0;
          border-radius: 40px;
          box-shadow: 5px 5px 10px #000910, -5px -5px 10px #002340;
        }
        .button {
          border: 1px solid #c90859;
          color: #c90859;
          text-decoration: none;
          padding: 20px 50px;
          background: black;
          transition: all 0.5s ease-in-out;
        }
        .button:hover {
          background: #c90859;
          color: black;
          font-size: 18px;
        }
        a {
          color: white;
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}

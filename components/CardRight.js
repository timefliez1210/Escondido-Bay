import React from 'react'
import Image from 'next/image'

export default function CardRight(props) {
  return (
    <div>
          <div className="card">
            <div>
              <h2>
                {props.title}
              </h2>
              <div className="divider"></div>
              <p>
                {props.text}
              </p>
              <div className='button'>Book now</div>
            </div>
            <div className='image-container'>
              <Image
              src='/public/Diving-Mactan.jpeg'
              alt='Diving on Mactan Island'
              layout='fill'
              />
            </div>
        </div>
        <style jsx>{`

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
          margin: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          padding: 40px;
          border-radius: 40px;
          width: 95vw;
          max-width: 1080px;
          margin: 30vh auto;
        }
        @media only screen and (max-width: 800px) {
          .content {
            padding: 10px 0;
            margin: 10vh auto;
          }
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
          padding: auto 20px;
          background: black;
          transition: all 0.5s ease-in-out;
          max-width: 200px;
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
        .image-container {
          display: block;
          width: 100%;
          position: relative;
          }
        
          .image {
          }
        }
      `}</style>
    </div>
  )
}

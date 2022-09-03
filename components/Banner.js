import React from 'react'
import Image from 'next/image'

function Banner(props) {
  return (
    <div>
        <div className="wrapper"> 
         <div className="content">
           <h1>{props.heading}</h1>
           <div className='divider'></div>
           <h2>{props.title}</h2>
            <p>{props.text}</p>
           </div>
           <div className='image-container'>
           <Image
             src={props.src}
             alt={props.alt}
             layout={props.layout}
             objectFit={props.objectFit}
             />
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
                white-space: pre-line;
              }
              .image-container {
                height: auto;
                width: auto;
                min-width: 300px;
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
       `}</style>
    </div>
  )
}

export default Banner
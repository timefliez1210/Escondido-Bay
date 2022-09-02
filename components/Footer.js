import React from 'react'

export default function Footer() {
  return (
  <div>
    <div className="wrapper">
      <div className="content">
        <h1>Escondido Bay</h1>
        <div className='divider'></div>
        <h2>Hi</h2>
        </div>
        <div className='pic'></div>
        <div></div>
    </div>
    <style jsx>{`
        .wrapper {
            display: -ms-grid;
            display: grid;
            -ms-grid-columns: (minmax(19rem, 1fr))[auto-fit];
                grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
            grid-gap: 20px;
            height: 30vh;
            width: auto;
            text-align: center;
            content: center center;
            background: black;
            padding: 20px;
            margin: 150px 0 0 0;
        } 
        @media screen and (max-width: 800px) {
          .wrapper {
            grid-gap: 40px;
            padding: 50px 10px;
          }
        }

        h1, h2 {
            color: white;
        }
        .divider {
            height: 5px;
            width: 30px;
            background: red;
            margin: auto;
        }
        .content {
          background: blue;
        }
        .pic {
          background: red;
          width: 100%;
        }
  `}</style></div>
  )
}

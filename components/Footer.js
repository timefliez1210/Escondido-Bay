import Image from 'next/image'
import { FaViber, FaWhatsapp, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
  <div>
    <div className="wrapper">
      <div className="content">
        <h2>Contact</h2>
        <p><FaViber color='violet' font-size='20px' /> +6391 989 789 45</p>
        <p><FaWhatsapp color='blue' font-size='20px' /> +6391 989 789 45</p>
        <p><FaFacebook color='blue' font-size='20px' /> @EscondidoBay </p>
        </div>
        <div className='pic'>
        <Image
          src='/logo.png'
          alt='Diving on Mactan Island'
          layout='fill'
          objectFit="contain"
          />

        </div>
        <div></div>
    </div>
    <style jsx>{`
        .wrapper {
            margin: -200px 0 0 0;
            display: -ms-grid;
            display: grid;
            -ms-grid-columns: (minmax(19rem, 1fr))[auto-fit];
                grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
            grid-gap: 20px;
            height: 30vh;
            width: auto;
            text-align: center;
            content: center center;
            background: white;
            color: black; 
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
            color: black;
        }
        .divider {
            height: 5px;
            width: 30px;
            background: red;
            margin: auto;
        }
        .content {
          background: white;
        }
        .pic {
          background: white;
          width: 100%;
          height: 100%;
          position: relative;
        }
  `}</style></div>
  )
}

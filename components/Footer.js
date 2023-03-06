import Image from 'next/legacy/image'
import { FaViber, FaWhatsapp, FaFacebook, FaInstagram, FaTripadvisor } from 'react-icons/fa'
import { AiOutlineMail } from "react-icons/ai"
import { BsFillTelephoneForwardFill } from "react-icons/bs"
import H2 from '../components/utils/H2'
import Divider from '../components/utils/Divider'
import Link from 'next/link'

export default function Footer() {
  return (
  <div>
    <div className="wrapper">
        <div className='pic'>
            <Image
              src='/logo.png'
              alt='Diving on Mactan Island'
              layout='fill'
              objectFit="contain"
            />
        </div>
        <div className="content">
        <H2 heading='Contact' />
        <Divider />
          <p>
            <Link 
              href='https://wa.me/+639198978945' 
              style={{textDecoration: 'none', color:'white'}}
              target='_blank'
            >
                <FaWhatsapp color='white' fontSize='20px' style={{verticalAlign: 'middle', marginRight: '3px'}}/> 
                  +63 91 989 789 45
            </Link>
          </p>
          <p>
            <Link 
              href='mailto:info@escondido-bay.com' 
              style={{textDecoration: 'none', color:'white'}}
              target='_blank'
            >
                <AiOutlineMail color='white' fontSize='20px' style={{verticalAlign: 'middle', marginRight: '3px'}}/> 
                  info@escondido-bay.com
            </Link>
          </p> 
          <p>
            <Link 
              href='tel:+639198978945' 
              style={{textDecoration: 'none', color:'white'}}
              target='_blank'
            >
                <BsFillTelephoneForwardFill color='white' fontSize='20px' style={{verticalAlign: 'middle', marginRight: '3px'}}/> 
                  +63 91 989 789 45
            </Link>
          </p>       
        </div>  
        <div className="content">
          <H2 heading='Socials' />
          <Divider />
          <p>
            <Link 
              href='https://www.facebook.com/EscondidoBay' 
              style={{textDecoration: 'none', color:'white'}}
              target='_blank'
              >
              <FaFacebook color='white' fontSize='20px' style={{verticalAlign: 'middle', marginRight: '10px'}} /> 
              @EscondidoBay
            </Link>
          </p>
          <p>
            <Link 
              href='https://www.instagram.com/escondidobay/' 
              style={{textDecoration: 'none', color:'white'}}
              target='_blank'
              >
              <FaInstagram color='white' fontSize='20px' style={{verticalAlign: 'middle', marginRight: '10px'}} /> 
              @EscondidoBay
            </Link>
          </p>
          <p>
            <Link 
              href='https://www.tripadvisor.in/Attraction_Review-g298461-d24981131-Reviews-Escondido_Bay_Dive_Center-Lapu_Lapu_Mactan_Island_Cebu_Island_Visayas.html' 
              style={{textDecoration: 'none', color:'white'}}
              target='_blank'
              >
              <FaTripadvisor color='white' fontSize='18px' style={{verticalAlign: 'middle', marginRight: '10px'}} /> 
              Escondido Bay
            </Link>
          </p>
        </div>
    </div>
    <style jsx>{`
        .wrapper {
            margin: 0;
            display: -ms-grid;
            display: grid;
            -ms-grid-columns: (minmax(19rem, 1fr))[auto-fit];
                grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
            grid-gap: 20px;
            height: 30vh;
            width: auto;
            text-align: center;
            content: center center;
            background: transparent;
            color: white; 
            padding: 20px;
        } 
        p {
          text-align: left;
          width: 60%;
          margin: 10px auto auto auto;
          font-size: 16px;
          padding: 6px 1px;
        }
        @media screen and (max-width: 1245px) {
          p {
            width: 80%;
          }
        }
        .content {
          background: transparent;
        }
        .pic {
          background: transparent;
          width: 100%;
          height: 100%;
          position: relative;
        }
        @media screen and (max-width: 800px) {
          .wrapper {
            grid-gap: 40px;
            padding: 50px 10px;
          }
          .pic {
            min-width: 100px;
            min-height: 100px;
          }
        }
  `}</style></div>
  )
}

import Link from 'next/link'
import Image from 'next/legacy/image'

export default function ServiceDisplay({display, title}) {
  return (
    <div>      
<div className="wrapper">
    <div className="services">
      <h2>{title}</h2>
      <div className='divider'></div>
      <div className='item-holder'>
      {display.map((Display) => (
            <div className="box" key={Display.key}>
            <h3>{Display.title}</h3>
            <div className="service-images">
              <Image
                src={Display.image}
                alt={Display.alt}
                layout='fill'
                objectFit='contain'
              />
            </div>
              <br />
              <p>{Display.text}
              </p>
              <Link
                href={Display.href}
                title={Display.title}
                style={{ textDecoration: 'none' }}
              >
                <button>{Display.button}</button>
              </Link>
              <br />
              <br />
              <br />
              <br />
            </div>
          ))}
      </div>
    </div>
    </div>
    <style jsx> {`
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
                @media screen and (max-width: 800px) {
                  .wrapper {
                    grid-gap: 40px;
                    padding: 50px 10px;
                    
                  }
                }

                .divider {
                    height: 3px;
                    width: 15%;
                    background: white;
                    margin: auto auto;
                  }
                  h1,
                  h2,
                  h3 {
                    text-align: center;
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
                  button {
                    color: #ffffff;
              background-color: #FF7F50;
              border: none;
              border-radius: 6px;
              padding: 12px 20px;
              font-size: 20px;
              font-weight: 500;
              line-height: 22px;
              display: flex;
              align-items: center;
              margin: auto auto;
              text-decoration: none;
              box-shadow: 2px 7px 40 px -2px rgba(154,171,237,1);
              -webkit-box-shadow: 2px 7px 40px -2px rgba(154,171,237,1);
              -moz-box-shadow: 2px 7px 40px -2px rgba(154,171,237,1);
                  }
                  button:hover
            {
              box-shadow: none;
              cursor: pointer;
            }
            
            button i
            {
              font-size: 30px;
              padding-right: 5px;
            }
                  
                  .services .item-holder {
                    display: -ms-grid;
                    display: grid;
                    -ms-grid-columns: (minmax(14rem, 1fr))[auto-fit];
                        grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
                    grid-gap: 20px;
                    padding: 50px;
                    align-content: center;
                  }
                  @media screen and (max-width: 650px) {
                    .services .item-holder {
                      grid-gap: 40px;
                      padding: 50px 10px;
                    }
                  }
                  .service-images {
                    height: auto;
                    width: 100%;
                    min-height: 200px;
                    position: relative;
                    padding: auto auto;
                  }
    `}</style>
    </div>
  )
}

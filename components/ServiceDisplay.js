import Link from 'next/link'
import Image from 'next/image'

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
                width="100%"
                height="100%"
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
              >
                <div className='button'>{Display.title}</div>
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
                    background: #0F0D69;
                    margin: auto auto;
                  }
                  h1,
                  h2,
                  h3 {
                    text-align: center;
                    color: black;
                  }
                  img {
                    margin: auto auto;
                  }
                  p {
                    text-align: left;
                  }
                  .services {
                    text-align: justify;
                    margin: 0;
                    height: 100%;
                    align-content: center center;
                  }
                  .button {
                    display: inline-block;
                    text-decoration: none;
                    color: white;
                    background: #0F0D69;
                    padding: 0.4rem 0.9rem;
                    border: 3px solid #0F0D69;
                    cursor: pointer;
                    margin: auto auto;
                  }
                  .button:hover {
                    background: transparent;
                    color: #0F0D69;
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

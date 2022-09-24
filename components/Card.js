import Image from 'next/image'

export default function Card(props) {
  return (
    <div>
        <div className="wrapper">
        <div className='image-container'>
           <Image
             src={props.src}
             alt={props.alt}
             layout={props.layout}
             objectFit={props.objectFit}
             />
          </div> 
         <div className="content">
           <h2>{props.heading}</h2>
           <div className='divider'></div>
           <h3>{props.title}</h3>
            <p>{props.text}</p>
          </div>
          
      </div>
       <style jsx>{`
             .divider {
                height: 3px;
                width: 40%;
                background: white;
                margin: auto auto;
              }
              h2,
              h3 {
                text-align: center;
              
              }
              p {
                text-align: left;
                white-space: pre-line;
              }
              .image-container {
                height: auto;
                width: 100%;
                min-height: 200px;

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
                .image-container {
                    
                }
              }
              .content {
                background: transparent;
              }
       `}</style>
    </div>
  )
}

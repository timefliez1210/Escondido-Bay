import Image from 'next/legacy/image'
import Cta from '../components/Cta'
import H2 from './utils/H2'
import H3 from './utils/H3'
import Paragraph from './utils/Paragraph'
import Divider from './utils/Divider'

export default function Card(props) {
  if (props.button) {
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
            <H2 heading={props.heading} />
            <Divider />
            <H3 title={props.title} />
            <Paragraph text={props.text} />
            <Cta text={props.button} link={props.link} /> 
          </div>
      </div>
       <style jsx>{`
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
                margin: 0;
              } 
              @media screen and (max-width: 800px) {
                .wrapper {
                  grid-gap: 40px;
                  padding: 50px 10px;
                  margin: 0 0 0 0;
                }
              }
              .content {
                background: transparent;
              }
       `}</style>
    </div>
    
  )
  } else {
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
              <H2 heading={props.heading} />
              <Divider />
              <H3 title={props.title} />
              <Paragraph text={props.text} />
            </div>
        </div>
         <style jsx>{`
                .image-container {
                  height: auto;
                  width: 100%;
                  min-height: 200px;
                  min-width: 400px;
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
                  background: transparent;
                }
         `}</style>
      </div>
      
    )
  }
}

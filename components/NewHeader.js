import Image from 'next/legacy/image'

function NewHeader(props) {
  return (
    <div>
        <div className="hero">
            <div className="image-holder">
                <Image
                    src={props.src}
                    alt={props.alt}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className="banner">
                <div className="container">
                    <h1>{props.heading}</h1>
                    <div className="divider"></div>
                    <p>{props.title}</p>
                </div>
            </div>
        </div>
        <style jsx>{`
            .hero {
                margin-top: 100px;
                display: grid;
                grid-template-columns: 0.5fr 2fr 2fr 2fr 0.5fr;
                grid-gap: -2px;
                height: 60vh;
                width: 100vw;
            }
            h1 {
                font-size: calc(15px + 5vw);
            }
            p {
                font-size: calc(15px + 1vw);
            }
            .image-holder {
                position: relative;
                grid-column: 1 / 6;
                grid-row: 1 / 7;
                height: 100%;
            }
            .banner {
                grid-column: 1 / 6;
                grid-row: 1 / 7;
                z-index: 10;
                background-color: rgba(49, 59, 74, 0.40);
                display: grid;
                align-content: center;
                justify-content: center;
                text-align: center;
            }
            .container {
                display: grid;
                border: 1px solid white;
                padding: 1rem;
            }
        `}</style>
    </div>
  )
}

export default NewHeader
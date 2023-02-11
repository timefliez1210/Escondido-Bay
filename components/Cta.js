import Link from 'next/link'
import { FiMessageCircle } from 'react-icons/fi'

export default function Cta() {
  return (
    <div>
        <div className="CTA">
            <FiMessageCircle style={{ height: "95px", width: "95px" }} />
        </div>

        <style jsx>{`
            .CTA {
                position: fixed;
                border-radius: 100%;
                background-color: white;
                z-index: 1000;
                color: black;
                bottom: 2vh;
                left: 92vw;
                height: 105px;
                width: 105px;
                text-align: center;
                align-items: center;
            }
            p {
                margin: auto auto;
            }
        `}</style>
    </div>
  )
}

import Link from 'next/link'
import { FiMessageCircle } from 'react-icons'

export default function Cta() {
  return (
    <div>
        <div className="CTA">
            <FiMessageCircle fontSize="40px" />
        </div>

        <style jsx>{`
            .CTA {
                position: fixed;
                border-radius: 100%;
                background-color: white;
            }
        `}</style>
    </div>
  )
}

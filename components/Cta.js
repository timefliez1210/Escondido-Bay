import Link from 'next/link'


export default function Cta(props) {
  return (
    <div>
        <Link
        href='/contact'
        title='Get in Touch with Escondido Bay Dive Center'
        style={{ textDecoration: 'none' }}
        >
            <button><i class='bx bxl-whatsapp'></i>{props.text}</button>
        </Link>
        <style jsx>{`
            .link {
                text-decoration: none;
            }
            button
            {
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
              box-shadow: 1px 4px 40 px -2px rgba(154,171,237,1);
              -webkit-box-shadow: 1px 4px 40px -2px rgba(154,171,237,1);
              -moz-box-shadow: 1px 4px 40px -2px rgba(154,171,237,1);
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
        `}</style>
    </div>
  )
}

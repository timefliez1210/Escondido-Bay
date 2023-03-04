import React from 'react'

export default function Paragraph(props) {
  return (
    <div>
        <p>{props.text}</p>
        <style jsx>{`
              p {
                text-align: left;
                white-space: pre-line;
                max-width: 80vw;
                margin: 20px auto;
              }
       `}</style>
    </div>
  )
}

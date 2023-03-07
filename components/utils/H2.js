import React from 'react'

export default function H2(props) {
  return (
    <div>
        <h2>{props.heading}</h2>
        <style jsx>{`
              h2 {
                font-size: 2.5rem;
                text-align: center;
                max-width: 90vw;
                margin: auto auto;
                margin-top: 50px;
              }
       `}</style>
    </div>
  )
}

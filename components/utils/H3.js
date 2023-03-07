import React from 'react'

export default function H3(props) {
  return (
    <div>
        <h3>{props.heading}</h3>
        <style jsx>{`
              h3 {
                font-size: 1.5rem;
                text-align: center;
                max-width: 90vw;
                margin: 10px auto 0 auto;
              }
       `}</style>
    </div>
  )
}

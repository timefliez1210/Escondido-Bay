import React from 'react'

export default function H4(props) {
  return (
    <div>
        <h4>{props.title}</h4>
        <style jsx>{`
              h4 {
                font-size: 1rem;
                font-weight: bold;
                text-align: center;
                max-width: 90vw;
                margin: 10px auto 0 auto;
              }
       `}</style>
    </div>
  )
}

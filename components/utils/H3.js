import React from 'react'

export default function H3(props) {
  return (
    <div>
        <h3>{props.title}</h3>
        <style jsx>{`
              h3 {
                text-align: center;
                max-width: 90vw;
                margin: auto auto;
              }
       `}</style>
    </div>
  )
}

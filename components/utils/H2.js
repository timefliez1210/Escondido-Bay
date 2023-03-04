import React from 'react'

export default function H2(props) {
  return (
    <div>
        <h2>{props.heading}</h2>
        <style jsx>{`
              h2 {
                text-align: center;
                margin-top: 50px;
              }
       `}</style>
    </div>
  )
}

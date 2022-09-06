import React from 'react'

export default function Wrapper({ children }) {
  return (
    <div>
    <div className="global">
        {children}
    </div>
    <style jsx>{`
        .global {
          padding: 0;
          margin: 0;
          max-width: 100vw;
        }
    `}</style>
</div>
  )
}

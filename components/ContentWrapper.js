import React from 'react'

export default function ContentWrapper() {
  return (
    <div className='content'>
              <style jsx>{`
        .content {
          position: relative;
          padding: 50px 0;
          width: 95vw;
          max-width: 1080px;
          margin: 30vh auto;
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          border-radius: 10px;
        }
        @media only screen and (max-width: 800px) {
          .content {
            padding: 10px 0;
            margin: 10vh auto;
          }
        }
        `}</style>
    </div>
  )
}

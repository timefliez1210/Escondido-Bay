import React from 'react'

export default function Divider() {
  return (
    <div>
        <div className='divider'></div>
        <style jsx>{`
            .divider {
                    height: 3px;
                    width: 40%;
                    background: white;
                    margin: 0 auto 20px auto;
                }
        `}</style>
    </div>
  )
}

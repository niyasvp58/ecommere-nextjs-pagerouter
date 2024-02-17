import Link from 'next/link'
import React from 'react'

const Success = () => {
  return (
    <div className='h-screen grid place-items-center'>

      <div className='text-center'>

        <h1 className='text-8xl font-bold'>Thank You</h1>
        <p className='text-center text-2xl'>Order Placed Successfully</p>

        <a href="/">
          <p className=''>Continue Shopping</p>
        </a>

      </div>

    </div>
  )
}

export default Success
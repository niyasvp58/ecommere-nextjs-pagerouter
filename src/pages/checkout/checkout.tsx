
import React from 'react'

export default function Checkout() {
  return (
    <div>
        <button className='btn btn-primary' onClick={()=>{
            window.location.href = '/success'
        }}>Checkout</button>
    </div>
  )
}


import React from 'react'

export default function Checkout() {
  return (
    <div>
        <button className='btn btn-primary' onClick={()=>{
            window.location.href = '/component/success'
        }}>Checkout</button>
    </div>
  )
}

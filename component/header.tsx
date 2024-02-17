'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Image from 'next/image';
import Logo from '../src/image/th.jpeg'

export default function Header() {
  const pathname = usePathname();
  return (
    <div style={{backgroundColor:'rgb(175, 190, 190)'}}>
    <div>
  <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ display: 'flex', flexDirection: 'row' }}>
    <li>    <Image style={{margin:'10px'}} className="navbar-brand" alt='Logo' src={Logo} width={90} height={90} /></li>
    <li className="nav-item">
      <Link style={{marginTop:'20px',marginLeft:'200px'}} className={`nav-link ${pathname === '/' ? 'active' : ''}`} href='/'><span style={{ fontSize: '25px', fontWeight: 'bolder', color: "#007bff" }}>Home</span></Link>
    </li>
    <li className="nav-item">
      <Link style={{marginTop:'20px',marginLeft:'30px'}} className={`nav-link ${pathname === '/productlist' ? 'active' : ''}`} href='/productlist'><span style={{ fontSize: '25px', fontWeight: 'bolder', color: "#007bff" }}>Product list</span></Link>
    </li>
    <li className="nav-item">
      <Link style={{marginTop:'20px',marginLeft:'30px'}} className={`nav-link ${pathname === '/aboutus' ? 'active' : ''}`} href='/aboutus'><span style={{ fontSize: '25px', fontWeight: 'bolder', color: "#007bff" }}>About us</span></Link>
    </li>
    <li className="nav-item">
      <Link style={{marginTop:'20px',marginLeft:'30px'}} className={`nav-link ${pathname === '/contactus' ? 'active' : ''}`} href='/contactus'><span style={{ fontSize: '25px', fontWeight: 'bolder', color: "#007bff" }}>Contact us</span></Link>
    </li>
    <li className="nav-item">
      <Link style={{marginTop:'25px',marginLeft:'30px'}} className={`nav-link ${pathname === '/cart' ? 'active' : ''}`} href='/cart'><FaCartShopping style={{ color: "#007bff", fontSize: '27px' }} /></Link>
    </li>
  </ul>
</div>

    </div>
  )
}

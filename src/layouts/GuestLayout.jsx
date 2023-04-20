import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbars from '../components/Navbars'
import Footer from '../components/Footer'

export default function GuestLayout() {
  return (
    <div>
      <Navbars />
      <Outlet />
      <Footer/>
    </div>
    
  )
}

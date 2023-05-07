import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbars from '../components/Navbars'
import Footer from '../components/Footer'

export default function DefaultLayout() {
  return (
    <>
      <Navbars />
      <Outlet />
      <Footer />
    </>
  )
}

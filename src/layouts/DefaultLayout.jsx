import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbars from '../components/Navbars'

export default function DefaultLayout() {
  return (
    <>
      <Navbars />
      <Outlet />
    </>
  )
}

import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../../components/NavBar'

function IPO() {
  return (
    <>
        <NavBar/>
        <div>IPO</div>
        <Outlet/>
    </>
    
  )
}

export default IPO
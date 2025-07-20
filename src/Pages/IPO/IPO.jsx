import React from 'react'
import { Outlet, useLocation } from 'react-router'
import NavBar from '../../components/NavBar'
import BreadCrumb from '../../components/BreadCrumb'

function IPO() {
    let currPath = useLocation();
    return (
    <div className='relative w-[100%] h-[fit] flex flex-col items-center'> 
        <NavBar/>
        <div className='relative px-45 w-full'>
          <BreadCrumb path={currPath.pathname}/>
          <Outlet/>
        </div>
    </div>
    
  )
}

export default IPO
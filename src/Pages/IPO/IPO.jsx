import React from 'react'
import { Outlet, useLocation } from 'react-router'
import NavBar from '../../components/NavBar'
import BreadCrumb from '../../components/BreadCrumb'

function IPO() {
    let currPath = useLocation();
    return (
    <div className='w-full h-[200vh] flex flex-col items-center'> 
        <NavBar/>
        <div className='px-20'>
          <BreadCrumb path={currPath.pathname}/>
          <Outlet/>
        </div>
    </div>
    
  )
}

export default IPO
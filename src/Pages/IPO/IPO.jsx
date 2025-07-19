import React from 'react'
import { Outlet, useLocation } from 'react-router'
import NavBar from '../../components/NavBar'
import BreadCrumb from '../../components/BreadCrumb'

function IPO() {
    let currPath = useLocation();
    return (
    <div className='w-fullh-[200vh]'> 
        <NavBar/>
        <div>IPO</div>
        <BreadCrumb path={currPath.pathname}/>
        <Outlet/>
    </div>
    
  )
}

export default IPO
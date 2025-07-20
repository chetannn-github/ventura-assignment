import React from 'react'
import { Outlet, useLocation } from 'react-router'
import NavBar from '../../components/NavBar'
import BreadCrumb from '../../components/BreadCrumb'
import Footer from '../../components/Footer';

function IPO() {
    let currPath = useLocation();
    return (
    <div className='relative w-[100%] h-[fit] flex flex-col items-center px-10'> 
        <NavBar/>
        <div className='relative px-45 w-full py-1 flex flex-col gap-5'>
          <BreadCrumb path={currPath.pathname}/>
          <Outlet/>
        </div>
        <Footer/>
    </div>
    
  )
}

export default IPO
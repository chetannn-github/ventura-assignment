import React from 'react'
import { Outlet, useLocation } from 'react-router'
import NavBar from '../../components/NavBar'
import BreadCrumb from '../../components/BreadCrumb'
import Footer from '../../components/Footer';

function IPO() {
    let currPath = useLocation();
    return (
    <div className='relative w-[100vw] h-[fit] flex flex-col items-center md:px-10 px-5'> 
        <NavBar/>
        <div className='relative  w-full py-1 flex flex-col gap-5 lg:px-40 md:px-10 px-0'>
          <BreadCrumb path={currPath.pathname}/>
          <Outlet/>
        </div>
        <Footer/>
    </div>
    
  )
}

export default IPO
import React from 'react'
import { Outlet, useLocation } from 'react-router'
import NavBar from '../../components/NavBar'
import BreadCrumb from '../../components/BreadCrumb';
import Hero from '../../components/IPO/Hero';
import OpenIPOs from '../../components/IPO/OpenIPOs';
import UpcomingIPO from '../../components//IPO/UpcomingIPO';
import Footer from '../../components/Footer';

function IPOList() {
  let currPath = useLocation();
  return (
    <div className='w-full relative flex flex-col gap-15  h-fit '>
      <Hero/>
      <OpenIPOs/>
      <UpcomingIPO/>
    </div>
  )
}

export default IPOList
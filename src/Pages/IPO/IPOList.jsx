import React from 'react'
import { Outlet, useLocation } from 'react-router'
import NavBar from '../../components/NavBar'
import BreadCrumb from '../../components/BreadCrumb';
import Hero from '../../components/Hero';
import OpenIPOs from '../../components/OpenIPOs';

function IPOList() {
  let currPath = useLocation();
  return (
    <div>
      <Hero/>
      <OpenIPOs/>

    </div>
  )
}

export default IPOList
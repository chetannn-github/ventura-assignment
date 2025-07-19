import React from 'react'
import { Outlet, useLocation } from 'react-router'
import NavBar from '../../components/NavBar'
import BreadCrumb from '../../components/BreadCrumb';
import Hero from '../../components/Hero';

function IPOList() {
  let currPath = useLocation();
  return (
    <div>
      <Hero/>
      <div>IPOList</div>

    </div>
  )
}

export default IPOList
import React from 'react'
import { Outlet, useLocation, useParams } from 'react-router'
import BreadCrumb from '../../components/BreadCrumb';
import GoBack from '../../components/GoBack';
import { ChevronLeft } from 'lucide-react';

function IPODetail() {
  const {companyID} = useParams();
  let currPath = useLocation();

  return (
    <div>
      {/* <BreadCrumb path = {currPath.pathname}/> */}
    
      <div>{companyID} IPO Details</div>
      <GoBack path={currPath.pathname}><ChevronLeft /></GoBack>
      
    </div>
  )
}

export default IPODetail
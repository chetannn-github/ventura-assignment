import React from 'react'
import { Outlet, useParams } from 'react-router'

function IPODetail() {
  const {companyID} = useParams();
  return (
    <>
      <div>{companyID} IPO Details</div>
      
    </>
  )
}

export default IPODetail
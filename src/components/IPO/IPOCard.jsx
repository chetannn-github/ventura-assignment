import React from 'react'
import { COMPANY_LOGO } from '../../utils/constant'
import { Link } from 'react-router'

function IPOCard() {
  return (<Link to={"/ipo/chetan"}>
    <div className=' w-[350px] h-[300px] flex flex-col justify-between  border-1 border-[#00000020] rounded-xl overflow-hidden pb-3 shadow-2xl'>
        
        
        <div className='p-4'>
            <img src={COMPANY_LOGO} className='h-10 '/>
            <h2 className='font-black text-xl truncate'>Swastika Castal Limited - SME</h2>
            <p>21 July - 22 June 2025</p>
        </div>

        <div className='flex flex-wrap justify-between bg-[#f8f8f8] h-1/2  p-4'>
            <div className='w-1/2'>
                <h4 className='text-[#6B6874]'>Issue Size</h4>
                <h4 className='font-black text-sm'>₹ 66 - 70 cr</h4>

            </div>
            <div className='w-1/2'>
                <h4 className='text-[#6B6874]'>Price Range</h4>
                <h4 className='font-black text-sm'>₹ 114 - 120</h4>

            </div>
            <div className='w-1/2'>
                <h4 className='text-[#6B6874]'>Min. Amount</h4>
                <h4 className='font-black text-sm'>₹ 2,88,000</h4>

            </div>
            <div className='w-1/2'>
                <h4 className='text-[#6B6874]'>Min. Qty.</h4>
                <h4 className='font-black text-sm'>2,400 shares</h4>

            </div>
        </div>

    </div></Link>
  )
}

export default IPOCard
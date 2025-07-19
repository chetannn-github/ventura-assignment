import React from 'react'
import { LOGO_URL } from '../utils/constant'
import { Link } from 'react-router'

function NavBar() {
  return (
    <div className='flex justify-center gap-20  w-full py-[18px] border-b-[0.5px] border-[#00000018]'>

      <div className='flex  gap-8 items-center cursor-pointer'>
        <Link to={'/'}><img src={LOGO_URL} className='h-[20px] '/></Link>
        
        <div className='hover:text-primary text-[14px]'>Invest</div> 
        <div className='hover:text-primary text-[14px]'>Trade</div>
        <div className='hover:text-primary text-[14px]'>Spotlight</div>
        <div className='hover:text-primary text-[14px]'>Ease API</div>
        <div className='hover:text-primary text-[14px]'>Pricing</div>
        <div className='hover:text-primary text-[14px]'>Learn</div>
      </div>

      <div className='flex gap-5' >
        <div className='rounded-xl border-2 text-secondary px-[24px] py-[10px] text-sm font-bold flex justify-center items-center'>Login</div>
        <div className='rounded-xl bg-secondary text-white px-[24px] py-[10px] text-sm flex justify-center items-center' >Create Account</div>

      </div>
    
    </div>
  )
}

export default NavBar
import React from 'react'
import { IPO_HERO } from '../../utils/constant'
import { ChevronRight } from 'lucide-react'

function Hero() {
  return (
    <div className='flex w-full h-[70vh] bg-amber-500'>
        <div className='bg-bermuda w-2/3'>
            <div>
                <h1>IPO - <span className='text-primary'>Intial Public Offerings</span></h1>
                <p>Identify the right IPOs to invest in with our research notes</p>
                
            </div>

            <div className=''>
                <h3>Open an account</h3>
                <div className='flex bg-[#f8f8f8]'>
                    <div>+91</div>
                    <input type="text" />
                    <div className='bg-primary'><ChevronRight color={"white"} /></div>

                </div>
            </div>
        </div>


        <div className='bg-black w-1/3 flex justify-center items-center'>

            <div className=' bg-amber-600 rounded-full overflow-hidden'>
                <img className='object-contain ' src={IPO_HERO.mainImg} alt="" />
            </div>
            
        </div>


    </div>
  )
}

export default Hero
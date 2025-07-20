import React, { useState } from 'react'
import { IPO_HERO } from '../../utils/constant'
import { ChevronRight } from 'lucide-react'

function Hero() {
    const [mobileNumber, setMobileNumber] = useState("");
    const handleChangeMobileNum = (e) => {
        const inpVal = e.target.value;
        if(isNaN(inpVal) || inpVal.length > 10 ) return;
        setMobileNumber(inpVal)
    }


  return (
    <div className='relative flex w-full h-[70vh] '>


        <div className=' w-2/3 flex flex-col justify-around  '>
            <div className='flex flex-col gap-5'>
                <h1 className='text-5xl font-black '>IPO - <span className='text-primary'>Intial Public <br /> Offerings</span></h1>
                <p className='text-xl'>Identify the right IPOs to invest in with our research notes</p>
            </div>

            <div className='relative w-full flex flex-col gap-2'>
                <h3 className='text-sm font-black'>Open an account</h3>
                <div className='flex bg-[#f8f8f8] h-19 items-center gap-4 w-3/5 p-2 rounded-xl justify-between '>

                    <div className='flex gap-4 '>
                        <h1>+91</h1>
                        <input 
                        type="text" 
                        className='placeholder:text-sm' 
                        placeholder='Enter your mobile number' 
                        value={mobileNumber} 
                        onChange={handleChangeMobileNum}/>
                   </div> 
                   <div className='bg-primary h-10/12 w-1/4 flex items-center justify-center rounded-xl p-3'><ChevronRight color={"white"} /></div>

                </div>
            </div>
        </div>


        <div className=' w-1/3 flex justify-center items-center'>

            <div className='relative  rounded-full h-[400px] w-[400px] flex items-center justify-center border-1 border-[#00000020]'>

                <div className='rounded-full overflow-hidden w-9/12 h-9/12'>
                    <img className='object-contain ' src={IPO_HERO.mainImg} alt="" />
                </div>
            </div>
            
        </div>


    </div>
  )
}

export default Hero
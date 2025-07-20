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
    <div className='relative flex w-full flex-col-reverse h-[100vh] md:flex-row md:justify-between md:h-[50vh]'>


        <div className='relative flex flex-col justify-around h-1/2 md:h-full md:w-2/3'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-5xl font-black '>IPO - <span className='text-primary'>Intial Public <br /> Offerings</span></h1>
                <p className='text-xl'>Identify the right IPOs to invest in with our research notes</p>
            </div>

            <div className='relative w-full flex flex-col gap-2 '>
                <h3 className='text-sm font-black'>Open an account</h3>

                <div className='flex bg-[#f8f8f8] h-19 items-center gap-4 p-2 rounded-xl justify-between w-4/5 md:w-md '>
                    <div className='flex gap-4 w-full'>
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


        <div className=' h-1/2 flex justify-center items-center md:h-full md:w-2/3'>

            <div className='relative  rounded-full  flex items-center justify-center border-1 border-[#00000020] h-[300px] w-[300px]'>

                <div className='rounded-full overflow-hidden w-9/12 h-9/12'>
                    <img className='object-contain ' src={IPO_HERO.mainImg} alt="" />
                </div>
            </div>
            
        </div>


    </div>
  )
}

export default Hero
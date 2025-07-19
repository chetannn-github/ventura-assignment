import React from 'react'
import IPOCard from './IPOCard'

function OpenIPOs() {
  return (
    <div className='h-[65vh] flex flex-col justify-center items-center gap-10'>
        <h1 className='text-4xl font-black'>Open <span className='text-primary'>IPOs</span></h1>
        <div className='flex justify-center gap-6'>
          {[1,3,3].map(()=><IPOCard/>)}
        </div>
    </div>
  )
}

export default OpenIPOs
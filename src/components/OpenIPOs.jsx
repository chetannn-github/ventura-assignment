import React from 'react'
import IPOCard from './IPOCard'

function OpenIPOs() {
  return (
    <div className='h-[65vh]'>
        <h1>Open <span className='text-primary'>IPOs</span></h1>
        <div className='flex justify-center gap-6'>
          {[1,3,3].map(()=><IPOCard/>)}
        </div>
    </div>
  )
}

export default OpenIPOs
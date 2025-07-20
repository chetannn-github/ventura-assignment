import React from 'react'
import { Link } from 'react-router'

function IPOCard({companyData}) {
    let {name, date,issueSize, priceBand,companyLogo,lotValue,lotSize} = companyData;
    const urlCompanyName = name.split(" ").join("-").toLowerCase();


    return (
    <Link to={`/ipo/${urlCompanyName}`}>
        <div className=' w-[full] md:w-[350px] h-[300px] flex flex-col justify-between  border-1 border-[#00000020] rounded-xl overflow-hidden pb-3 shadow-2xl'>
        
        
        <div className='p-4'>
            <img src={companyLogo} className='h-10 '/>
            <h2 className='font-black text-xl truncate'>{name}</h2>
            <p>{date}</p>
        </div>

        <div className='flex flex-wrap justify-between bg-[#f8f8f8] h-1/2  p-4'>
            <div className='w-1/2'>
                <h4 className='text-[#6B6874]'>Issue Size</h4>
                <h4 className='font-black text-sm'>{issueSize}</h4>

            </div>
            <div className='w-1/2'>
                <h4 className='text-[#6B6874]'>Price Range</h4>
                <h4 className='font-black text-sm'>{priceBand}</h4>

            </div>
            <div className='w-1/2'>
                <h4 className='text-[#6B6874]'>Min. Amount</h4>
                <h4 className='font-black text-sm'>{lotValue}</h4>

            </div>
            <div className='w-1/2'>
                <h4 className='text-[#6B6874]'>Min. Qty.</h4>
                <h4 className='font-black text-sm'>{lotSize}</h4>

            </div>
        </div>

    </div></Link>
  )
}

export default IPOCard
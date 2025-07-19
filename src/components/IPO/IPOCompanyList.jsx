import React from 'react'
import { IPO_DATA, NO_IPO_IMAGE_URL } from '../../utils/constant'

function IPOCompanyList({listingType}) {
    const companyData = IPO_DATA[listingType];


    if(companyData.length == 0) {
        return (
            <div className='flex items-center justify-center flex-col h-[60vh]'>
                <img src={NO_IPO_IMAGE_URL}></img>
                <h3>No Upcoming IPOs now.</h3>
            </div>
        )
    }

    // name: "Smartworks Coworking Spaces Limited",
    //   date: "10th Jul - 14th Jul 2025",
    //   issueSize: "₹ 576 - 606 Cr",
    //   priceBand: "₹ 387 - 407",
    //   lotValue

    return (
        
        <div className='relative flex flex-col w-full py-5'>
            <div className='flex bg-[#f8f8f8]' >
                {["Company","Issue size","Price range","Min. Amount"].map((val, idx)=>
                    <div className='relative w-1/4 flex justify-center text-sm' >
                        {val}
                    </div>
                )}
            </div>
            {companyData.map((val, idx)=>
            <>
            <div className='flex justify-between py-3' >

                <div className='flex gap-2 w-1/4  '>
                    <div >
                        <img className='h-5' src={val?.companyLogo}></img>
                    </div>
                        <div className='flex flex-col'>
                            <h4 className='font-black text-sm'>{val?.name}</h4>
                            <p className='text-xs text-[#0000008f]'>{val?.date}</p>
                        </div>
                   
                </div>



                <div className='w-1/4  justify-center flex font-black text-sm'>{val?.issueSize}</div>
                <div className='w-1/4  justify-center flex font-black text-sm'>{val?.priceBand}</div>

                <div className='flex-col w-1/4   flex items-center'>
                    <h4 className='font-black text-sm'>{val?.lotValue}</h4>
                    <p className='text-xs text-[#0000008f]'>{val?.lotSize}</p>
                </div>
               
            </div> 

            <div className='bg-[#ffeee5] w-full flex items-center justify-center h-10 font-bold rounded-xl'>
                {listingType === "Closed" ? val?.subscribed : `Listed at ${val?.listedAt} with  ${val?.gain} gains.`}
            </div>

        </>
        )}

        </div>
    )
}

export default IPOCompanyList
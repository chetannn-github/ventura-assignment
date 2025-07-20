import {Instagram, Linkedin, MapPin, TwitterIcon, Youtube } from 'lucide-react'
import React from 'react'
import { LOGO_URL, WHITE_LOGO_URL } from '../utils/constant'

function Footer() {
  return (
    <div className='bg-secondary relative w-full flex flex-col gap-4 rounded-3xl text-white p-10 pb-5' >

        <div className='flex flex-col  gap-4 xl:gap-20 md:flex-row lg:gap-20 border-b-1 border-b-[#ffffff11] pb-10'>

            <div className='flex flex-col gap-7 w-full md:w-1/3'>
                <div className='w-[120px] xl:w-[250px] '>
                    <img className='object-cover h-full w-full object-contains' src={WHITE_LOGO_URL}></img>
                </div>

                <div className='flex gap-2 items-center'>
                    <div><MapPin /></div>
                    <div className='flex flex-col gap-2.5'>
                        <h1 className='text-md 2xl:text-2xl xl:text-lg'>Corporate Address</h1>
                        <p className='text-sm lg:text-sm xl:text-lg lg:leading-9  leading-6'>
                            Ventura Securities Limited,
                            I-Think Techno Campus, 
                            “B” Wing,
                            8th Floor,Pokhran Road No. 2, Off.
                             Eastern Express Highway,Thane (West) - 400 607
                        </p>
</div>
                </div>


                <div className='flex gap-3 xl:gap-6'>
                    <div className='bg-[#ffffff1f] p-3 xl:p-6 rounded-xl hover:bg-primary'><TwitterIcon /></div>
                    
                    <div className='bg-[#ffffff1f] p-3 xl:p-6 rounded-xl hover:bg-primary'><Linkedin /></div>
                    <div className='bg-[#ffffff1f] p-3 xl:p-6 rounded-xl hover:bg-primary'><Youtube /></div>
                    <div className='bg-[#ffffff1f] p-3 xl:p-6 rounded-xl hover:bg-primary'><Instagram /></div>
                </div>

            </div>



            <div className='flex flex-col gap-5'>
                <h3 className='font-bold text-lg lg:text-lg xl:text-lg '>Company</h3>

                <div className='flex flex-col gap-3'>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary' href="about-us">About us</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary' href="contact-us">Contact us</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary' href="careers">Careers</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary' href="refer-earn">Refer and earn</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary' href="support">Support</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary' href="login">Associates & employee login</a>
                </div>
            </div>


            <div className='flex flex-col gap-5'>
                <h3 className='font-bold text-lg lg:text-lg xl:text-lg '>Products</h3>

                <div className='flex flex-col gap-3'>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary' href="">Stocks</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary' href="">Mutual Funds</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary' href="">Futures & Options</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary' href="">IPO</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary' href="">Upcoming IPOs</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary' href="">Closed IPOs</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary' href="">Listed IPOs</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary' href="">Fixed Deposit</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary' href="">EaseAPI</a>
                </div>
            </div>

            <div className='flex flex-col gap-5'>

                <h3 className='font-bold text-lg lg:text-lg xl:text-lg '>Quick Links</h3>

                <div className='flex flex-col gap-3'>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary'>Blog</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary'>News</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary'>Share Market Guide</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary'>Share Market Glossary</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary'>Spotlight</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary'>Bazaar Basics</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary'>Platform</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary'>T&C</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary'>Privacy Policy</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary'>Downloads</a>
                </div>

            </div>
            




        </div>



        <div className='flex flex-col gap-4'>
            <div className='flex w-full row gap-3'>
                <div className='min-w-[130px] lg:min-w-[250px] flex'><h1 className=' text-xs md:text-md lg:text-sm xl:text-lg  min-w-[100px] '>Tools & Calculators</h1></div>
                
                <ul className="list-disc list-inside flex flex-wrap gap-1  text-[#B0ADBE] text-sm lg:text-sm xl:text-lg">
                    <li><a className = "hover:text-primary"  href="">Retirement Calculator</a></li>
                    <li><a className = "hover:text-primary" href="">SWP Calculator</a></li>
                    <li><a className = "hover:text-primary" href="">Home Loan Calculator</a></li>
                    <li><a className = "hover:text-primary" href="">Personal Loan Calculator</a></li>
                    <li><a className = "hover:text-primary" href="">PPF Calculator</a></li>
                    <li><a className = "hover:text-primary" href="">FD Calculator</a></li>
                    <li><a className = "hover:text-primary" href="">EMI Calculator</a></li>
                    <li><a className = "hover:text-primary" href="">Brokerage Calculator</a></li>
                    <li><a className = "hover:text-primary" href="">SIP Calculator</a></li>
                    <li><a className = "hover:text-primary" href="">Lumpsum Calculator</a></li>
                </ul>

                
            </div>

            <div className='flex w-full row gap-4'> 
                <div className='min-w-[130px] lg:min-w-[250px] flex'><h1 className=' text-xs md:text-md lg:text-sm xl:text-lg  min-w-[100px]'>Top Indices</h1></div>
                <ul className="list-disc list-inside flex flex-wrap gap-1 text-[#B0ADBE] text-sm lg:text-sm xl:text-lg">
                    <li><a className="hover:text-primary" href="">All Indices</a></li>
                    <li><a className="hover:text-primary" href="">Nifty 50</a></li>
                    <li><a className="hover:text-primary" href="">Sensex</a></li>
                    <li><a className="hover:text-primary" href="">Nifty Bank</a></li>
                    <li><a className="hover:text-primary" href="">Nifty Finance</a></li>
                    <li><a className="hover:text-primary" href="">Nifty IT</a></li>
                    <li><a className="hover:text-primary" href="">Nifty Pharma</a></li>
                    <li><a className="hover:text-primary" href="">Nifty Next 50</a></li>
                    <li><a className="hover:text-primary" href="">Nifty 100</a></li>
                    <li><a className="hover:text-primary" href="">Nifty Midcap 50</a></li>
                    <li><a className="hover:text-primary" href="">NIFTY MIDCAP 100</a></li>
                    <li><a className="hover:text-primary" href="">NIFTY SMLCAP 50</a></li>
                    <li><a className="hover:text-primary" href="">NIFTY SMLCAP 100</a></li>
                </ul>
            </div>

           
            <div className='flex w-full row gap-4'>
                <div  className='min-w-[130px] lg:min-w-[250px] flex'><h1 className=' text-xs md:text-md lg:text-sm xl:text-lg  min-w-[100px]'>Share Market Guide</h1></div>

                <ul className="list-disc list-inside flex flex-wrap gap-1 text-[#B0ADBE] text-sm lg:text-sm xl:text-lg">
                    <li><a className="hover:text-primary" href="">Online Trading</a></li>
                    <li><a className="hover:text-primary" href="">IPO</a></li>
                    <li><a className="hover:text-primary" href="">Demat Account</a></li>
                    <li><a className="hover:text-primary" href="">Mutual Funds</a></li>
                    <li><a className="hover:text-primary" href="">Stock/Share Market</a></li>
                    <li><a className="hover:text-primary" href="">Taxes on Stock Market Income</a></li>
                    <li><a className="hover:text-primary" href="">What is MTF</a></li>
                </ul>       
            </div>



            <div className='flex w-full row gap-4'>
                <div className='min-w-[130px] lg:min-w-[250px] flex'><h1 className=' text-xs md:text-md lg:text-sm xl:text-lg  min-w-[100px]'>Stock Sectors</h1></div>

                <ul className="list-disc list-inside flex flex-wrap gap-1 text-[#B0ADBE] text-sm lg:text-sm xl:text-lg">
                    <li><a className="hover:text-primary" href="">All Sectors</a></li>
                    <li><a className="hover:text-primary" href="">IT Stocks</a></li>
                    <li><a className="hover:text-primary" href="">Alcohol Sector Stocks</a></li>
                    <li><a className="hover:text-primary" href="">Media Stocks</a></li>
                    <li><a className="hover:text-primary" href="">Agriculture Sector Stocks</a></li>
                    <li><a className="hover:text-primary" href="">Pharma Sector Stocks</a></li>
                    <li><a className="hover:text-primary" href="">Private Bank Stocks</a></li>
                    <li><a className="hover:text-primary" href="">Public Bank Stocks</a></li>
                    <li><a className="hover:text-primary" href="">Healthcare Stocks</a></li>
                    <li><a className="hover:text-primary" href="">Cement Sector Stocks</a></li>
                    <li><a className="hover:text-primary" href="">Real Estate Sector Stocks</a></li>
                </ul>
            </div>



            <div className='flex w-full row gap-4'>
                <div className='min-w-[130px] lg:min-w-[250px] flex'><h1 className=' text-sm lg:text-sm xl:text-lg'>Daily Market Updates</h1></div>

                <ul className="list-disc list-inside flex flex-wrap gap-1 text-[#B0ADBE] text-sm lg:text-sm xl:text-lg">
                    <li><a className="hover:text-primary" href="">Daily Market Outlook</a></li>
                    <li><a className="hover:text-primary" href="">Nifty Pre Open Today – June 27</a></li>
                    <li><a className="hover:text-primary" href="">Post-Market Outlook – June 26, 2025</a></li>
                </ul>
            </div>



            <div className='flex w-full row gap-4'>
                <div className='min-w-[130px] lg:min-w-[250px] flex'><h1 className=' text-xs md:text-md lg:text-sm xl:text-lg  min-w-[100px]'>Trending Blogs</h1></div>

                <ul className="list-disc list-inside flex flex-wrap gap-1 text-[#B0ADBE] text-sm lg:text-sm xl:text-lg">
                    <li><a className="hover:text-primary" href="">Upcoming IPOs in June 2025</a></li>
                    <li><a className="hover:text-primary" href="">Upcoming Corporate Actions – 23 Jun – 27 Jun</a></li>
                    <li><a className="hover:text-primary" href="">Top Performing Defence Stocks in 2025</a></li>
                    <li><a className="hover:text-primary" href="">Top 5 Stocks with Higher YTD Returns</a></li>
                    <li><a className="hover:text-primary" href="">EPFO Data Update: April 2025</a></li>
                    <li><a className="hover:text-primary" href="">SIP of Rs.10k: How many years to become a Crorepati?</a></li>
                </ul>
            </div>




        </div>



        <div className='flex flex-col gap-5 text-sm lg:text-sm xl:text-lg leading-6'>
            <h1>Disclaimer</h1>
            <h1>Investments in the securities market are subject to market risks, read all the related documents carefully before investing. Brokerage will not exceed SEBI prescribed limit. Please read the SEBI prescribed Combined Risk Disclosure Document prior to investing.</h1>
            <h1>The securities are quoted as an example and not as a recommendation.</h1>
            <h1>Ventura Securities Limited is a distributor for Non-Broking Products/Services such as Mutual Funds, Mutual Funds SIP, IPO, Baskets, ETF any other Third Party Products/Services etc. These are not Exchange traded products and we are just acting as distributor. All disputes with respect to the distribution activity, would not have access to Exchange investor redressal forum or Arbritation mechanism. Kindly also refer to the detailed disclaimer for Third Party Products.</h1>

            <h1>Account opening - The account would be opened after all the procedures relating to IPV and client due diligence is completed.</h1>
            <h1>Margin Trading Facility (MTF) - The terms and conditions prescribed hereunder form part of account opening form, shall be read in conjunction with the rights and obligations as prescribed under SEBI circular no. CIR/ MIRSD/ 16/ 2011 dated August 22, 2011 and the Rules, Regulations, Bye laws, Rights and Obligation, Guidelines, circulars issued by SEBI and Exchanges from time to time. Refer terms & conditions. All the offers related to MTF are subject to provisions under SEBI circular CIR/MRD/DP/54/2017 dated June 13, 2017.</h1>
            <h1>Compliance officer – Mr. D . P . Singh, Email:– compliance@venturasecurities.com, Support: 022–67547000</h1>
            <h1 className='italic'>Attention Investors “Prevent Unauthorised transactions in your account – Update your mobile number / email ID with your stock brokers.
Receive information of your transactions directly from Exchange on your mobile / email at the end of the day.
Issued in the interest of Investors</h1>
        </div>


        <div className='flex justify-center items-center w-full text-xs lg:text-sm xl:text-lg '>© 2025 Ventura. All rights reserved.</div>
<div className='flex justify-center items-center w-full text-xs lg:text-sm xl:text-lg '>Built with ❤️ in India.</div>
    </div>
  )
}

export default Footer
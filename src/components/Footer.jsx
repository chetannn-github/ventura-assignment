import {Instagram, Linkedin, MapPin, TwitterIcon, Youtube } from 'lucide-react'
import React from 'react'
import { LOGO_URL, WHITE_LOGO_URL } from '../utils/constant'

function Footer() {
  return (
    <div className='bg-secondary  relative flex flex-col gap-4 rounded-3xl text-white p-10' >

        <div className='flex flex-row gap-3'>

            <div className='flex flex-col gap-5 w-1/3'>
                <div>
                    <img src={WHITE_LOGO_URL}></img>
                </div>

                <div className='flex gap-2 items-center'>
                    <div><MapPin /></div>
                    <div>Corporate Address
Ventura Securities Limited,
I-Think Techno Campus, “B” Wing,8th Floor,Pokhran Road No. 2, Off. Eastern Express Highway,Thane (West) - 400 607</div>
                </div>


                <div className='flex gap-3'>
                    <div className='bg-[#ffffff1f] p-3 rounded-xl hover:bg-primary'><TwitterIcon /></div>
                    
                    <div className='bg-[#ffffff1f] p-3 rounded-xl hover:bg-primary'><Linkedin /></div>
                    <div className='bg-[#ffffff1f] p-3 rounded-xl hover:bg-primary'><Youtube /></div>
                    <div className='bg-[#ffffff1f] p-3 rounded-xl hover:bg-primary'><Instagram /></div>
                </div>

 
            </div>



            <div className='flex flex-col gap-3'>
                <h3>Company</h3>

                <a href="about-us">About us</a>
                <a href="contact-us">Contact us</a>
                <a href="careers">Careers</a>
                <a href="refer-earn">Refer and earn</a>
                <a href="support">Support</a>
                <a href="login">Associates & employee login</a>

            </div>


            <div className='flex flex-col gap-3'>
                <h3>Products</h3>
                <a href="">Stocks</a>
                <a href="">Mutual Funds</a>
                <a href="">Futures & Options</a>
                <a href="">IPO</a>
                <a href="">Upcoming IPOs</a>
                <a href="">Closed IPOs</a>
                <a href="">Listed IPOs</a>
                <a href="">Fixed Deposit</a>
                <a href="">EaseAPI</a>

            </div>

            <div className='flex flex-col gap-3'>
                <h3>Quick Links</h3>
                <a>Blog</a>
                <a>News</a>
                <a>Share Market Guide</a>
                <a>Share Market Glossary</a>
                <a>Spotlight</a>
                <a>Bazaar Basics</a>
                <a>Platform</a>
                <a>T&C</a>
                <a>Privacy Policy</a>
                <a>Downloads</a>


            </div>
            




        </div>



        <div className='flex flex-row gap-4'>
            <div></div>
            <div></div>
        </div>



        <div>
            Member of NSE, BSE, MCX & NCDEX, Depository Participant of NSDL & CDSL

SEBI Stock Broker Registration Number: INZ000194736 | Depository Participant Registration Number: IN-DP-565-2021

INP000004094 (Portfolio Manager), INH000001634 (Research Analyst).

AMFI- Registered Mutual Fund Distributor : ARN-20936 | Date of Registration :19 July 2004 | Valid Till 09th July 2026.

            In case of any grievances please write to complaints@venturasecurities.com
        </div>


        <div className=''>
            Disclaimer
            Investments in the securities market are subject to market risks, read all the related documents carefully before investing. Brokerage will not exceed SEBI prescribed limit. Please read the SEBI prescribed Combined Risk Disclosure Document prior to investing.
            The securities are quoted as an example and not as a recommendation.
            Ventura Securities Limited is a distributor for Non-Broking Products/Services such as Mutual Funds, Mutual Funds SIP, IPO, Baskets, ETF any other Third Party Products/Services etc. These are not Exchange traded products and we are just acting as distributor. All disputes with respect to the distribution activity, would not have access to Exchange investor redressal forum or Arbritation mechanism. Kindly also refer to the detailed disclaimer for Third Party Products.
            Account opening – The account would be opened after all the procedures relating to IPV and client due diligence is completed.
            Margin Trading Facility (MTF) – The terms and conditions prescribed hereunder form part of account opening form, shall be read in conjunction with the rights and obligations as prescribed under SEBI circular no. CIR/ MIRSD/ 16/ 2011 dated August 22, 2011 and the Rules, Regulations, Bye laws, Rights and Obligation, Guidelines, circulars issued by SEBI and Exchanges from time to time. Refer terms & conditions. All the offers related to MTF are subject to provisions under SEBI circular CIR/MRD/DP/54/2017 dated June 13, 2017.

            Compliance officer – Mr. D . P . Singh, Email:– compliance@venturasecurities.com, Support: 022–67547000
            Attention Investors “Prevent Unauthorised transactions in your account – Update your mobile number / email ID with your stock brokers.
            Receive information of your transactions directly from Exchange on your mobile / email at the end of the day.
            Issued in the interest of Investors
</div>
        <div className='flex text-center w-full'> 2025 Ventura. All rights reserved. Built with ❤️ in India.</div>

    </div>
  )
}

export default Footer
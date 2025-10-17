import Image from 'next/image'
import React from 'react'
import { CiSearch } from "react-icons/ci";
import SupportSection from './SupportSection';
import Title from './Title';


function Hero() {
  return (
    <div className='w-full h-full  bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)]   '>
     <div className='flex flex-col items-center justify-center'>
           <div className=' pt-32'>
         <Image src="/Hero Image.svg" alt='hero' width={355} height={238} />
        </div>
        <h1 className='text-white font-bold sm:text-[40px] text-[30px] text-center pt-5 tracking-wide'>Here to help you 24/7</h1>
           <div className='relative flex items-center '> 
             <CiSearch className='text-[#787E90] absolute mt-5 ml-3' />
          <input type='text' placeholder='Search' className='sm:w-[480px] w-[340px] h-[50px] bg-[#23262F] rounded-lg mt-5 shadow-2xl placeholder:text-[#787E90] placeholder:pl-8 focus:outline-none placeholder:text-[14px]'/>
           </div>
     </div>

            <Title/>
           <SupportSection/>
    </div>

   
  )
}

export default Hero

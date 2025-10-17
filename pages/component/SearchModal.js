import Image from 'next/image';
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosTrendingDown } from "react-icons/io";
import { IoIosTrendingUp } from "react-icons/io";

function SearchModal() {
  return (

       <div className='w-full h-full flex relative'>
         <div className='fixed w-[550px] flex flex-col  h-[600px] z-[9999] top-[90px] right-[150px] bg-[#18191D] rounded-[16px] shadow-2xl p-2'>
    
    <div className='relative w-full flex items-center  mt-4 ml-5 '>
     <CiSearch className='text-[#6D7384] text-[17px] absolute mt-5 ml-3' />
     <input type='text' placeholder='Search' className='w-[500px] h-[40px] mt-5 bg-gradient-to-br from-[#23262F] rounded-lg shadow-2xl
     placeholder:text-[#6D7384] focus:outline-none placeholder:text-[15px] placeholder:pl-8'/>
        </div>

        <div className='w-full flex items-center justify-between mt-7 px-10'>
            <ul className='text-white font-sans text-[15px] gap-10 flex'>
                <li>Search history</li>
            
                <li>Trending</li>
                <li>Top Volume</li>
                <li>New Listings</li>
            </ul>
              
        </div>
          <div className='w-[103px] border-2 border-[#1A80E6] ml-10'></div>

          <div className='w-full flex items-center justify-start mt-3'>
            <Image src="/ada.svg" alt='ada' width={32} height={32} className='ml-10 mt-5'/>
            <p className='text-[#FCFCFD] text-[15px] ml-1'>ADA/USDT</p>
             
          
          </div>
           <p className='text-white text-end mr-16 text-[15px] -mt-9'>$0.3497</p>
           <div className='w-full flex items-center justify-between '>
            <p className=' text-[13px] ml-20 text-[#B1B5C3]'>Cardano</p>
            <div className='flex items-center mr-14 gap-2'>
                   <p className='text-[#E2464A] text-[15px] '>-0.60%</p>
            <IoIosTrendingDown className='text-[#E2464A]' />
            </div>
           
        </div>

        {/* second item */}

         <div className='w-full flex items-center justify-start mt-3'>
            <Image src="/eth.svg" alt='ada' width={32} height={32} className='ml-10 mt-5'/>
            <p className='text-[#FCFCFD] text-[15px] ml-1'>ETH/USDT</p>
             
          
          </div>
           <p className='text-white text-end mr-13 text-[15px] -mt-9'>$2,420.59</p>
           <div className='w-full flex items-center justify-between '>
            <p className=' text-[13px] ml-20 text-[#B1B5C3]'>Ethereum</p>
            <div className='flex items-center mr-12 gap-2'>
                   <p className='text-[#2FA766] text-[15px] '>+1.83%</p>
            <IoIosTrendingUp className='text-[#2FA766]' />
            </div>
           
        </div>

            {/* third item */}

             <div className='w-full flex items-center justify-start mt-3'>
            <Image src="/link.svg" alt='ada' width={32} height={32} className='ml-10 mt-5'/>
            <p className='text-[#FCFCFD] text-[15px] ml-1'>LINK/USDT</p>
             
          
          </div>
           <p className='text-white text-end mr-13 text-[15px] -mt-9'>$0.59</p>
           <div className='w-full flex items-center justify-between '>
            <p className=' text-[13px] ml-20 text-[#B1B5C3]'>LINK</p>
            <div className='flex items-center mr-12 gap-2'>
                   <p className='text-[#2FA766] text-[15px] '>+1.83%</p>
            <IoIosTrendingUp className='text-[#2FA766]' />
            </div>
           
        </div>

        {/* fourth item */}

             <div className='w-full flex items-center justify-start mt-3'>
            <Image src="/trx.svg" alt='ada' width={32} height={32} className='ml-10 mt-5'/>
            <p className='text-[#FCFCFD] text-[15px] ml-1'>TRX/USDT</p>
             
          
          </div>
           <p className='text-white text-end mr-13 text-[15px] -mt-9'>$144.04</p>
           <div className='w-full flex items-center justify-between '>
            <p className=' text-[13px] ml-20 text-[#B1B5C3]'>Tron</p>
            <div className='flex items-center mr-12 gap-2'>
                   <p className='text-[#2FA766] text-[15px] '>+3.14%</p>
            <IoIosTrendingUp className='text-[#2FA766]' />
            </div>
           
        </div>

        {/* fifth item */}
          <div className='w-full flex items-center justify-start mt-3'>
            <Image src="/aave.svg" alt='ada' width={32} height={32} className='ml-10 mt-5'/>
            <p className='text-[#FCFCFD] text-[15px] ml-1'>AAVE/USDT</p>
             
          
          </div>
           <p className='text-white text-end mr-13 text-[15px] -mt-9'>$2,420.59</p>
           <div className='w-full flex items-center justify-between '>
            <p className=' text-[13px] ml-20 text-[#B1B5C3]'>AAVE</p>
            <div className='flex items-center mr-12 gap-2'>
                   <p className='text-[#2FA766] text-[15px] '>+1.83%</p>
            <IoIosTrendingUp className='text-[#2FA766]' />
            </div>
           
        </div>

        {/* sixth item */}
        <div className='w-full flex items-center justify-start mt-3'>
            <Image src="/ltc.svg" alt='ada' width={32} height={32} className='ml-10 mt-5'/>
            <p className='text-[#FCFCFD] text-[15px] ml-1'>LTC/USDT</p>
             
          
          </div>
           <p className='text-white text-end mr-13 text-[15px] -mt-9'>$68.45</p>
           <div className='w-full flex items-center justify-between '>
            <p className=' text-[13px] ml-20 text-[#B1B5C3]'>Litecoin</p>
            <div className='flex items-center mr-12 gap-2'>
                   <p className='text-[#2FA766] text-[15px] '>+0.01%</p>
            <IoIosTrendingUp className='text-[#2FA766]' />
            </div>
           
        </div>
     </div> 

     <div className='w-2.5 h-[415px] bg-[#23262F] rounded-full z-[9999] mt-55 relative'>
        <div className='absolute w-2 h-[116px] bg-[#353945] mt-1 rounded-full'></div>

     </div>

       </div>
  )
}

export default SearchModal

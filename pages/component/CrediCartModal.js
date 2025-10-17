import React from 'react'
import { FaRegEye } from "react-icons/fa";
import { TbFileVector } from "react-icons/tb";
import { TbCoins } from "react-icons/tb";
import { CiTimer } from "react-icons/ci";

function CrediCartModal() {
  return (
    <div className='w-[286px] h-[356px] bg-[#18191D] flex flex-col  rounded-[16px] border-1 border-[#23262F] shadow-lg top-[90px] right-10 absolute'> 
    <div className='w-[238px] h-[81px] flex flex-col justify-center ml-5  mt-5  bg-[#1C1E24] border-1  border-[#1C1E24] rounded-[8px]'>
      <div className='flex items-start  gap-3 '>
            <p className='text-[#D6D8E0] font-sans tracking-normal text-[18px] ml-5 '>Total asset</p>
            <FaRegEye className='mt-2 text-white' />
          
      </div>
            <div className='flex gap-2 items-center'>
                <p className='text-[#FCFCFD] ml-6 text-[18px] mt-1'>6,094.96</p>
                <p className='text-[#777E90] text-[18px] mt-1'>USDT</p>
                <p className='text-[#777E90] text-[14px]'>= 0.10 BTC</p>
            </div>
        
    </div>

    <div className='flex items-start justify-center gap-3 mt-7'>
    <button className='w-[111px] h-[35px] bg-[#1A80E6] rounded-[8px] text-[#FCFCFD] text-[13px] font-bold '>Deposit</button>
    <button className='w-[111px] h-[35px] bg-[#1C1E24] border-1 border-[#353945] rounded-[8px] text-[13px] text-white font-bold '>Withdraw</button>
    </div>

    <div className='w-[238px] h-[49px] bg-[#18191D] gap-3 flex items-center justify-center mt-5 '>
        <TbFileVector className='text-2xl text-[#B1B5C3]' />
        <p className='text-[#B1B5C3] text-[16px] tracking-tight'>Asset Overview</p>
    </div>

     <div className='w-[238px] h-[49px] bg-[#18191D] gap-3 flex items-start  mt-5 ml-13 '>
        <TbCoins className='text-2xl text-[#B1B5C3]' />
        <p className='text-[#B1B5C3] text-[16px] tracking-tight'>Trade</p>
    </div>

    <div className='w-[238px] h-[49px] bg-[#18191D] gap-3 flex items-start   ml-13 '>
        <CiTimer className='text-2xl text-[#B1B5C3]' />
        <p className='text-[#B1B5C3] text-[16px] tracking-tight'>History</p>
    </div>
        
    
    </div>
  )
}

export default CrediCartModal

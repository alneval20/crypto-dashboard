import Image from 'next/image';
import React from 'react'
import { IoMdClose } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { PiCaretUpDownFill } from "react-icons/pi";

function Plus({plus, onClose}) {
    if (!plus) return null;
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/30'>
    <div className='w-[566px] h-[659px] flex flex-col  px-8 rounded-[16px] bg-[#18191D] border-[1px] border-[#23262F] shadow-[#141416CF]'>
      <div className='flex w-full items-start justify-between  mt-7'>
        <span className='text-[#FCFCFD] text-[16px] font-bold tracking-wide'>Create an Alert</span>
        <button onClick={onClose}  className='w-[32px] h-[32px] bg-[#18191D] '><IoMdClose className='text-[#B1B5C3] text-[25px]' /></button>
      </div>

      <div className='mt-7'>
        <span className='text-[#777E90] text-[16px]'>Pair</span>
      </div>

      <div className='w-[502px] h-[40px] mt-2 bg-[#23262F] rounded-[8px] flex items-start justify-between'>
        <div className='flex items-center gap-3'>
            <Image src="/eth.svg" width={24} height={24} alt='eth' className='mt-2  ml-3'/>
            <span className='text-[#FCFCFD] text-[16px] mt-2'>ETH/USDT</span>
        </div>
        <FaChevronDown className='text-[#777E90] mt-2 mr-3'/>
      </div>
      <div className='flex gap-5'>
        <div className='flex flex-col items-start mt-8 justify-center'>
        <span className='text-[#777E90] text-[16px]'>Condition</span>
        <div className='w-[239px] h-[40px] mt-2 bg-[#18191D] border-[1px] px-3 flex items-center justify-between border-[#353945] rounded-[8px]'>
            <span className='text-[#FCFCFD] text-[12px] '>More than</span>
            <FaChevronDown className='text-[#FCFCFD] text-[11px]'/>
        </div>
        </div>

        <div className='flex flex-col items-start mt-8 justify-center'>
        <span className='text-[#777E90] text-[16px]'>Price</span>
        <div className='w-[239px] h-[40px] mt-2 bg-[#23262F] border-[1px] px-3 flex items-center justify-between border-[#353945] rounded-[8px]'>
            <span className='text-[#FCFCFD] text-[12px] '>2,643</span>
            <div className='flex gap-2'>
                <span className='text-[#B1B5C3] text-[12px]'>USDT</span>
             <PiCaretUpDownFill className='text-[#B1B5C3] text-[16px]'/>
            </div>
        </div>
        </div>
      </div>

      <div className='flex flex-col mt-7'>
        <span className='text-[#777E90] text-[16px] '>Alert frequency</span>
        <div className='w-[502px] h-[40px] bg-[#18191D] px-3 border-[1px] border-[#353945] rounded-[8px] mt-2 flex items-center justify-between'>
        <span className='text-[#FCFCFD] text-[13px]'>1 Time</span>
         <FaChevronDown className='text-[#FCFCFD] text-[11px]'/>
        </div>
      </div>

           <div className='flex flex-col mt-7'>
        <span className='text-[#777E90] text-[16px] '>Note</span>
        <input type='text' placeholder='eg. Best time to buy' className='w-[502px] h-[40px] bg-[#23262F] rounded-[8px] placeholder:text-[#777E90] placeholder:text-[12px] indent-3 mt-2'/>
      </div>    

    <div className='mt-5'>
        <span className='text-[#777E90] text-[14px] '>Notify me on</span>
    </div>

    <div className='flex  items-start justify-between mt-3'>
      <div className='flex gap-5'>
          <span className='text-[#FCFCFD] text-[14px]'>Application</span>
        <div className='w-[44px] h-[24px] rounded-[24px] bg-[#1A80E6] relative'>
            <div className='w-[18px] h-[18px] absolute right-1 mt-1 bg-[#FCFCFD] right rounded-[24px]'></div>
        </div>
      </div>

        <div className='flex gap-5'>
          <span className='text-[#FCFCFD] text-[14px]'>Email</span>
        <div className='w-[44px] h-[24px] rounded-[24px] bg-[#353945] relative'>
            <div className='w-[18px] h-[18px] absolute left-1 mt-1 bg-[#FCFCFD]  rounded-[24px]'></div>
        </div>
      </div>


        <div className='flex gap-5'>
          <span className='text-[#FCFCFD] text-[14px]'>SMS</span>
        <div className='w-[44px] h-[24px] rounded-[24px] bg-[#353945] relative'>
            <div className='w-[18px] h-[18px] absolute left-1 mt-1 bg-[#FCFCFD]  rounded-[24px]'></div>
        </div>
      </div>
    </div>

    <div className='mt-7'>
        <button className='w-[502px] h-[40px] bg-[#1A80E6] rounded-[8px] text-[#FCFCFD] text-[13px] font-medium'>Add Alert</button>
    </div>

    </div>
    </div>
  )
}

export default Plus

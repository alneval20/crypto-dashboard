import React from 'react'
import { MdOutlineUploadFile } from "react-icons/md";
import { FiUserCheck } from "react-icons/fi";
import { RiShieldCheckLine } from "react-icons/ri";
import { CiSquareChevDown } from "react-icons/ci";
import { RiCoupon2Line } from "react-icons/ri";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { LiaUserTagSolid } from "react-icons/lia";
function SupportSection() {
  return (
    <div className='grid sm:grid-cols-4 grid-cols-1  sm:mx-20 mx-10 sm:mt-6 mt-5 sm:gap-0 gap-5  '>
     
      <div className='bg-gradient-to-r from-[#18191D] via-[#1A1C2F80] to-[#18191D] gap-4  border-t-[#23262F]  shadow-lg shadow-[#141416CF] flex items-center justify-center  rounded-lg  hover:scale-105 ease-in duration-300 cursor-pointer w-[288px] h-[112px]  '>
        <MdOutlineUploadFile className='text-[#767E92] text-2xl' />
        <p className='text-white text-[18px] tracking-wide font-sans'>Upload and Appeal </p>

      </div>

         <div className='bg-gradient-to-r from-[#18191D] via-[#1A1C2F80] to-[#18191D] gap-4  border-t-[#23262F]  shadow-lg shadow-[#141416CF] flex items-center justify-center  rounded-lg  hover:scale-105 ease-in duration-300 cursor-pointer w-[288px] h-[112px]  '>
        <FiUserCheck  className='text-[#767E92] text-2xl' /> 
        <p className='text-white text-[18px] tracking-wide font-sans'>Reset ID Verification </p>

      </div>

         <div className='bg-gradient-to-r from-[#18191D] via-[#1A1C2F80] to-[#18191D] gap-4 border-t-[#23262F]  shadow-lg shadow-[#141416CF] flex items-center justify-center  rounded-lg  hover:scale-105 ease-in duration-300 cursor-pointer w-[288px] h-[112px]  '>
        <RiShieldCheckLine   className='text-[#767E92] text-2xl' />
        <p className='text-white text-[18px] tracking-wide font-sans'>Reset 2FA</p>

      </div>

        <div className='bg-gradient-to-r from-[#18191D] via-[#1A1C2F80] to-[#18191D] gap-4  border-t-[#23262F]  shadow-lg shadow-[#141416CF] flex items-center justify-center  rounded-lg  hover:scale-105 ease-in duration-300 cursor-pointer w-[288px] h-[112px]  '>
        <CiSquareChevDown   className='text-[#767E92] text-2xl' />
        <p className='text-white text-[18px] tracking-wide font-sans'>Deposit / Withdrawal </p>

      </div>

          <div className='bg-gradient-to-r from-[#18191D] via-[#1A1C2F80] to-[#18191D] gap-4  border-t-[#23262F]  shadow-lg shadow-[#141416CF] flex items-center justify-center  rounded-lg  hover:scale-105 ease-in duration-300 cursor-pointer w-[288px] h-[112px] mt-6  '>
        <RiCoupon2Line    className='text-[#767E92] text-2xl' />
        <p className='text-white text-[18px] tracking-wide font-sans'>Account Feature </p>

      </div>

         <div className='bg-gradient-to-r from-[#18191D] via-[#1A1C2F80] to-[#18191D] gap-4  border-t-[#23262F]  shadow-lg shadow-[#141416CF] flex items-center justify-center  rounded-lg  hover:scale-105 ease-in duration-300 cursor-pointer w-[288px] h-[112px] mt-6  '>
        <CiCreditCard1   className='text-[#767E92] text-2xl' />
        <p className='text-white text-[18px] tracking-wide font-sans'>KYC Submission </p>

      </div>

        <div className='bg-gradient-to-r from-[#18191D] via-[#1A1C2F80] to-[#18191D] gap-4  border-t-[#23262F]  shadow-lg shadow-[#141416CF] flex items-center justify-center  rounded-lg  hover:scale-105 ease-in duration-300 cursor-pointer w-[288px] h-[112px] mt-6  '>
    <MdOutlineMonitorHeart    className='text-[#767E92] text-2xl' />
        <p className='text-white text-[18px] tracking-wide font-sans'>Demo Version</p>

      </div>

        <div className='bg-gradient-to-r from-[#18191D] via-[#1A1C2F80] to-[#18191D] gap-4  border-t-[#23262F]  shadow-lg shadow-[#141416CF] flex items-center justify-center  rounded-lg  hover:scale-105 ease-in duration-300 cursor-pointer w-[288px] h-[112px] mt-6  '>
    <LiaUserTagSolid className='text-[#767E92] text-2xl' />
        <p className='text-white text-[18px] tracking-wide font-sans'>Elite trader</p>

      </div>

       
    </div>
  )
}

export default SupportSection

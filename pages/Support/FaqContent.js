import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegSquareCheck } from "react-icons/fa6";
import { BsCalendar2Check, BsPhoneFlip } from "react-icons/bs";
import { MdLock } from "react-icons/md";
import { CiCircleChevUp, CiCircleChevDown } from "react-icons/ci";

function FaqContent() {
  return (
    <div className='w-full flex flex-col sm:flex-row items-start sm:items-center justify-center mt-8 sm:mt-15 gap-6 px-4'>

      {/* LEFT SIDE */}
      <div className='flex flex-col items-start gap-3 w-full sm:-mt-80 -mt-0  sm:w-[288px]'>
        <div className='w-full bg-[#1A80E6] rounded-[8px] flex items-center px-4 py-3 gap-2'>
          <FaRegUserCircle className='text-white text-xl' />
          <p className='text-white font-medium'>Creating an Account</p>
        </div>

        <div className='w-full bg-[#23262F] rounded-[8px] flex items-center px-4 py-3 gap-2'>
          <FaRegSquareCheck className='text-white text-xl' />
          <p className='text-white'>Account Verification</p>
        </div>

        <div className='w-full bg-[#23262F] rounded-[8px] flex items-center px-4 py-3 gap-2'>
          <BsCalendar2Check className='text-white text-xl' />
          <p className='text-white'>Two-Factor</p>
        </div>

        <div className='w-full bg-[#23262F] rounded-[8px] flex items-center px-4 py-3 gap-2'>
          <BsPhoneFlip className='text-white text-xl' />
          <p className='text-white'>Account Deactivation</p>
        </div>

        <div className='w-full bg-[#23262F] rounded-[8px] flex items-center px-4 py-3 gap-2'>
          <MdLock className='text-white text-xl' />
          <p className='text-white'>Security Best Practices</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className='flex flex-col gap-3 w-full sm:w-[880px]'>

        {/* OPEN QUESTION */}
        <div className='w-full flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#23262F] rounded-[8px] px-4 py-3'>
          <p className='text-white font-bold text-[16px] sm:text-[18px]'>How do I create a new account on your platform?</p>
          <CiCircleChevUp className='text-white text-2xl mt-1 sm:mt-0' />
        </div>
        <p className='text-[#B1B5C3] text-sm sm:text-[14px] mt-2 sm:mt-1 ml-1 sm:ml-0'>
          To create a new account on our platform, first, go to the registration page. Then, enter the required information, including your email, username, and password. After that, a verification email will be sent to your email address to complete the registration process, which you must confirm. Additionally, depending on security requirements, KYC identity verification may also be necessary.
        </p>

        {/* COLLAPSIBLE QUESTIONS */}
        {[
          "What are the requirements to open an account?",
          "Can I open multiple accounts on your platform?",
          "Is there an age restriction for creating an account?",
          "Do I need to verify my identity to create an account?",
          "Why do I need to provide personal information during registration?",
          "What should I do if I don’t receive the verification email?",
          "Can I trade cryptocurrencies immediately after creating an account?"
        ].map((question, index) => (
          <div key={index} className='w-full flex items-center justify-between border-2 border-[#23262F] rounded-[8px] px-4 py-3 mt-2 cursor-pointer hover:border-[#1A80E6] transition'>
            <h4 className='text-[#B1B5C3] font-bold text-sm sm:text-[16px]'>{question}</h4>
            <CiCircleChevDown className='text-[#B1B5C3] text-2xl' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FaqContent;



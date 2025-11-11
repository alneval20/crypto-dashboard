import Image from 'next/image'
import React from 'react'
import { CiSearch } from "react-icons/ci";
import MainTabs from './Support/MainTabs';
import FaqContent from './Support/FaqContent';

function Support() {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden flex flex-col bg-[radial-gradient(circle_at_center,#2F3644_0%,#1A202E_60%,_#000000_100%)]">
      <div className="flex flex-col items-center justify-center relative sm:mt-10 mt-4 gap-6 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[900px] mx-auto">
        <Image src="/support.png" alt="logo" width={355} height={238} />
        <h1 className="text-[#FCFCFD] sm:text-[48px] text-[20px] font-bold">
          Frequently Asked Questions
        </h1>

        <div className="flex mt-6 relative w-full">
          <CiSearch className="text-[#777E90] text-2xl absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-[56px] border-none bg-[#23262F] rounded-[8px] text-[#777E90] text-[18px] outline-none placeholder:pl-10"
          />
        </div>
      </div>

      <MainTabs />
      <FaqContent />

    </div>
  )
}

export default Support;

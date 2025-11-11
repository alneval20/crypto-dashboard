import React from 'react'
import { FaBitcoinSign } from "react-icons/fa6";
import { TbCurrencyEthereum } from "react-icons/tb";
import { FaTradeFederation } from "react-icons/fa6";
import { BiSolidAnalyse } from "react-icons/bi";
import { LiaWalletSolid } from "react-icons/lia";
import { AiFillSecurityScan } from "react-icons/ai";
import { BiCoinStack } from "react-icons/bi";
import { SiWebpack } from "react-icons/si";
function TopicSection() {
  return (
    <div className='w-full flex flex-col item-center justify-start  sm:mt-10 mt-30 max-w-[1352px]'>
        <h2 className='text-[#FCFCFD] text-[30px] sm:text-start text-center font-bold'>Popular Topics</h2>
        {/* Grid Section */}
        <div className='w-full  grid sm:grid-cols-4 grid-cols-1 sm:ml-0 ml-14 gap-3 mt-6'>
            <div className='w-[268px] h-[112px] flex items-center justify-center  gap-3 bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)] border-1 border-[#23262F] rounded-[8px]'>
               <FaBitcoinSign className='text-[#1A80E6] text-[18px]' /> <p className='text-[#FCFCFD] text-[18px]'>Bitcoin</p>
            </div>

            {/* 2nd */}
               <div className='w-[268px] h-[112px] flex items-center justify-center gap-3 bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)] border-1 border-[#23262F] rounded-[8px]'>
               <TbCurrencyEthereum  className='text-[#1A80E6] text-[18px]' /> <p className='text-[#FCFCFD] text-[18px]'>Ethereum</p>
            </div>

               {/* 3nd */}
               <div className='w-[268px] h-[112px] flex items-center justify-center gap-3 bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)] border-1 border-[#23262F] rounded-[8px]'>
               <FaTradeFederation   className='text-[#1A80E6] text-[18px]' /> <p className='text-[#FCFCFD] text-[18px]'>Trade</p>
            </div>

             {/* 4nd */}
               <div className='w-[268px] h-[112px] flex items-center justify-center gap-3 bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)] border-1 border-[#23262F] rounded-[8px]'>
               <BiSolidAnalyse  className='text-[#1A80E6] text-[18px]' /> <p className='text-[#FCFCFD] text-[18px]'>Analysis</p>
            </div>

             {/* 5nd */}
               <div className='w-[268px] h-[112px] flex items-center justify-center gap-3 bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)] border-1 border-[#23262F] rounded-[8px]'>
               <LiaWalletSolid  className='text-[#1A80E6] text-[20px]' /> <p className='text-[#FCFCFD] text-[18px]'>Wallets</p>
            </div>

             {/* 6nd */}
               <div className='w-[268px] h-[112px] flex items-center justify-center gap-3 bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)] border-1 border-[#23262F] rounded-[8px]'>
               <AiFillSecurityScan   className='text-[#1A80E6] text-[20px]' /> <p className='text-[#FCFCFD] text-[18px]'>Security</p>
            </div>

            {/* 7nd */}
               <div className='w-[268px] h-[112px] flex items-center justify-center gap-3 bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)] border-1 border-[#23262F] rounded-[8px]'>
               <BiCoinStack className='text-[#1A80E6] text-[20px]' /> <p className='text-[#FCFCFD] text-[18px]'>Airdrops</p>
            </div>

            {/* 8nd */}
               <div className='w-[268px] h-[112px] flex items-center justify-center gap-3 bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)] border-1 border-[#23262F] rounded-[8px]'>
               <SiWebpack className='text-[#1A80E6] text-[20px]' /> <p className='text-[#FCFCFD] text-[18px]'>Web 3.0</p>
            </div>

        </div>
    </div>
  )
}

export default TopicSection

import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FaRegNewspaper } from "react-icons/fa";
import { BiSolidBellPlus } from "react-icons/bi";
import { RiLayout3Line } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import OrderBook from './MArket/OrderBook';
import { useState } from 'react';
import AsserPairModal from './AsserPairModal';


function Spot() {
 const [showModal, setShowModal] = useState(false);
  return (
    <div className='w-full h-screen flex flex-col overflow-auto bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)]'>
  {/*Left*/}
  <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between w-full px-3 sm:px-5 mt-5'>
    
    <div className='flex flex-wrap sm:flex-nowrap gap-2 mt-3 sm:mt-5'>
      <FaStar className='text-[#777E90] text-[16px] sm:text-[18px] mt-1 sm:mt-2 mr-2' />
      <Image src="/btc.svg" alt='btc' width={28} height={28} className='sm:w-[32px] sm:h-[32px]' />
      <span className='text-[#FCFCFD] font-bold text-[16px] sm:text-[18px] -mt-1 sm:-mt-2'>BTC/USDT</span>

      <div onClick={() => (setShowModal(true))}>
      <div className='w-[16px] h-[16px] bg-[#353945] rounded-[16px] flex items-center justify-center'>
        <IoMdArrowDropdown className='text-[#B1B5C3] text-[14px] sm:text-[16px]' />
      </div>
      </div>

      <AsserPairModal showmodal={showModal} onClose={() => setShowModal(false)}/>


      <div className='hidden sm:block w-[0px] h-[24px] border-1 border-[#353945] ml-4 sm:ml-8'></div>

      <span className='text-[#2FA766] ml-2 sm:ml-5 -mt-2 sm:-mt-3 text-[14px] sm:text-[16px] font-bold'>60,423.71</span>
      <CiClock2 className='text-[#B1B5C3] text-[12px] ml-2 sm:ml-9 -mt-1 sm:-mt-2' />
      <span className='text-[#B1B5C3] text-[12px] -mt-2 sm:-mt-3'>24h Change</span>
      <FaArrowUp className='text-[#B1B5C3] text-[12px] ml-2 sm:ml-9 -mt-1 sm:-mt-2' />
      <span className='text-[#B1B5C3] text-[12px] -mt-2 sm:-mt-3'>24h High</span>
      <FaArrowDown className='text-[#B1B5C3] text-[12px] ml-2 sm:ml-9 -mt-1 sm:-mt-2' />
      <span className='text-[#B1B5C3] text-[12px] -mt-2 sm:-mt-3'>24h Low</span>
      <FaChartBar className='text-[#B1B5C3] text-[12px] ml-2 sm:ml-9 -mt-1 sm:-mt-2' />
      <span className='text-[#B1B5C3] text-[12px] -mt-2 sm:-mt-3'>24h Volume (USDT)</span>
    </div>

    {/*Right*/}
    <div className='flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3 mt-3 sm:mt-2'>
      <HiOutlineBookOpen className='text-[#FCFCFD] text-[17px] sm:text-[19px]'/>
      <span className='text-[#FCFCFD] text-[13px] sm:text-[14px] tracking-normal'>Trading Guide</span>
      <FaRegNewspaper className='text-[#FCFCFD] text-[17px] sm:text-[19px] ml-2 sm:ml-3'/>
      <span className='text-[#FCFCFD] text-[13px] sm:text-[14px] tracking-normal'>News</span>
      <div className='hidden sm:block w-[0px] h-[24px] border-1 border-[#353945] ml-3 sm:ml-5'></div>
      <BiSolidBellPlus className='text-[#FCFCFD] text-[17px] sm:text-[19px] ml-3 sm:ml-5'/>
      <RiLayout3Line className='text-[#FCFCFD] text-[17px] sm:text-[19px] ml-2'/>
      <CiSettings className='text-[#FCFCFD] text-[17px] sm:text-[19px] ml-2'/>
    </div>
  </div>

  <div className="flex flex-wrap sm:flex-nowrap items-center justify-start gap-4 sm:gap-10 px-5 sm:px-24 mt-2 sm:-mt-5">
    <span className="text-[11px] sm:text-[12px] text-[#B1B5C3]">Bitcoin</span>
    <span className="text-[11px] sm:text-[12px] text-[#B1B5C3] sm:ml-25 ml-0">≈ €54,731.13</span>
    <span className="text-[#2FA766] text-[11px] sm:text-[12px] sm:ml-5 ml-0">+3.12%</span>
    <span className="text-[#FCFCFD] text-[11px] sm:text-[12px] sm:ml-12 ml-0">61,234.12</span>
    <span className="text-[#FCFCFD] text-[11px] sm:text-[12px] sm:ml-5 ml-0">59,344.32</span>
    <span className="text-[#FCFCFD] text-[11px] sm:text-[12px] sm:ml-3 ml-0">259.91M</span>
  </div>

  <OrderBook/>
</div>

    
    

  )
}

export default Spot

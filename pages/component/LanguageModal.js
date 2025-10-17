import Image from 'next/image'
import React from 'react'
import { FaDollarSign } from "react-icons/fa6";
import { MdEuro } from "react-icons/md";
import { MdCurrencyPound } from "react-icons/md";
import { MdCurrencyYen } from "react-icons/md";
function LanguageModal() {
  return (
    <div className='w-[480px] h-[310px] bg-[#18191D] flex  rounded-[16px] border border-[#23262F] shadow-2xl absolute top-[90px] right-[6px]'>
        {/* left side */}
        <div className='flex flex-col items-center w-[245px] mt-6 gap-6'>
            <h3 className='text-[#FCFCFD] text-center text-[15px] font-bold'>Languages</h3>
            <div className='w-[180px] h-[35px] flex items-center gap-5 bg-[#23262F] rounded-[6px] '>
                <Image src="/us United States of America usa.svg" alt='amerika' width={30} height={30} className='ml-10' />
                <p className='text-[#B1B5C3] text-[15px] font-sans tracking-normal'>English</p>

            </div>

             <div className='w-[180px] h-[35px] flex items-center gap-5 bg-[#18191D] rounded-[6px] '>
                <Image src="/de Germany.svg" alt='amerika' width={30} height={30} className='ml-10' />
                <p className='text-[#B1B5C3] text-[15px] font-sans tracking-normal'>Deutsch</p>

            </div>

              <div className='w-[180px] h-[35px] flex items-center gap-5 bg-[#18191D] rounded-[6px] '>
                <Image src="/fr France.svg" alt='amerika' width={30} height={30} className='ml-10' />
                <p className='text-[#B1B5C3] text-[15px] font-sans tracking-normal'>Française</p>

            </div>

             <div className='w-[180px] h-[35px] flex items-center gap-5 bg-[#18191D] rounded-[6px] '>
                <Image src="/es Spain.svg" alt='amerika' width={30} height={30} className='ml-10' />
                <p className='text-[#B1B5C3] text-[15px] font-sans tracking-normal'>Español</p>

            </div>
        </div>

        <div className='w-0 h-[260px] border-1 border-[#353945] rounded-full mt-5'></div>
      
        {/* right side */}

        <div className='flex flex-col items-center w-[245px] mt-6 gap-6'>
         <h3 className='text-[#FCFCFD] text-center text-[15px] font-bold'>Currencies</h3>
          <div className='w-[180px] h-[35px] flex items-center gap-5 bg-[#23262F] rounded-[6px] '>
               <FaDollarSign className='text-[#B1B5C3] ml-13'  />
                <p className='text-[#B1B5C3] text-[15px] font-sans tracking-normal'>USD</p>

            </div>

            <div className='w-[180px] h-[35px] flex items-center gap-5 bg-[#18191D] rounded-[6px] '>
               <MdEuro  className='text-[#B1B5C3] ml-13'  />
                <p className='text-[#B1B5C3] text-[15px] font-sans tracking-normal'>EURO</p>

            </div>

             <div className='w-[180px] h-[35px] flex items-center gap-5 bg-[#18191D] rounded-[6px] '>
               <MdCurrencyPound   className='text-[#B1B5C3] ml-13'  />
                <p className='text-[#B1B5C3] text-[15px] font-sans tracking-normal'>POUND</p>

            </div>

             <div className='w-[180px] h-[35px] flex items-center gap-5 bg-[#18191D] rounded-[6px] '>
               <MdCurrencyYen   className='text-[#B1B5C3] ml-13 '  />
                <p className='text-[#B1B5C3] text-[15px] font-sans tracking-normal'>YEN</p>

            </div>


        </div>
    </div>
  )
}

export default LanguageModal

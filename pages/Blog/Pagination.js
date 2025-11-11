import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
function Pagination() {
  return (
    <div className='w-full flex items-center justify-center gap-3 mt-10 mb-30'>
      <FaChevronLeft />
      <div className='w-[24px] h-[24px] bg-[#1A80E6] text-white flex items-center justify-center rounded-[6px] '>
        1
      </div>
      <div className='w-[24px] h-[24px] bg-[#23262F] text-white flex items-center justify-center  rounded-[6px]'>
        2
      </div>
      <div className='w-[24px] h-[24px] bg-[#23262F] text-white flex items-center justify-center  rounded-[6px]'>
        3
      </div>

      <div className='w-[24px] h-[24px] flex items-center justify-center text-white rounded-[6px]'>
        ...
      </div>

       <div className='w-[24px] h-[24px] bg-[#23262F] flex items-center justify-center text-white rounded-[6px]'>
        30
      </div>

        <FaChevronRight className='text-white' />

    </div>
  )
}

export default Pagination

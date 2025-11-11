import React from 'react'

function Hashtags() {
  return (
    <div className='w-full flex gap-4 mt-5 overflow-x-auto '>
        <div className='w-[137px] ml-40 h-[32px] bg-[#23262F] rounded-[6px] flex items-center justify-center '>
            <p className='text-[#FCFCFD] text-[14px]'>#Announcements</p>
        </div>

         <div className='w-[77px]  h-[32px] bg-[#23262F] rounded-[6px] flex items-center justify-center '>
            <p className='text-[#FCFCFD] text-[14px]'>#Events</p>
        </div>

         <div className='w-[114px]  h-[32px] bg-[#23262F] rounded-[6px] flex items-center justify-center '>
            <p className='text-[#FCFCFD] text-[14px]'>#Partnerships</p>
        </div>

         <div className='w-[70px]  h-[32px] bg-[#23262F] rounded-[6px] flex items-center justify-center '>
            <p className='text-[#FCFCFD] text-[14px]'>#News</p>
        </div>
    </div>
  )
}

export default Hashtags

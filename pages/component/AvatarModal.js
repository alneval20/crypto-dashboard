import Image from 'next/image'
import React from 'react'

function AvatarModal() {
  return (
    <div className='w-[333px] h-[358px] flex flex-col   bg-[#18191D] border-1 border-[#23262F] rounded-[8px] absolute right-5 top-16'>
      <div className='flex items-start'>
        <p className='text-[#F4F5F6] text-[12px] mt-5 ml-7'>0 New Notifications</p>
      </div>
     <div className='flex flex-col'>
         <Image src="/blue-magnifying-glass 1.svg" alt='avatar' width={50} height={50} className='mt-30 mx-auto'/>
         <p className='text-[#FCFCFD] text-[14px] ml-30 mt-5 tracking-tight'>No records found</p>
     </div>
          <button className='w-[285px] h-[32px] ml-6 mt-13 bg-[#1A80E6] rounded-[8px] font-bold text-[14px] flex items-center justify-center text-[#FCFCFD]'>View All</button>
    </div>
  )
}

export default AvatarModal

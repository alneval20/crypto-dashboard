import React from 'react'

function OutlineModal() {
  return (
    <div className='w-[333px] h-[360px] flex flex-col bg-[#18191D] absolute border-1 border-[#23262F] shadow-lg shadow-[#141416CF] rounded-[16px] right-0 top-[60px] '>
        <div className='flex items-start justify-between  gap-3 mt-6 ml-5'>
            <p className='text-[#F4F5F6] text-[15px] tracking-tight'>3 New Notifications</p>
            <p className='text-[#1A80E6] mr-5 text-[15px]'>Read All</p>
        </div>
      <div className='flex items-start gap-2 mt-6 ml-5'>
        <div className='w-[10px] h-[10px] rounded-full mt-2 bg-[#1A80E6]'></div>
        <p className='text-[#FCFCFD] text-[14px] tracking-tight'>Transaction Confirmed</p>
      </div>
      <div className='flex flex-col items-start gap-1 '>
        <p className='text-[#B1B5C3] text-[12px] ml-5 mt-1'>Your Bitcoin transaction of 0.5 BTC has been success</p>
        <p className='text-[#B1B5C3] text-[10px] ml-5'>08-31  20:19</p>
      </div>

      {/* second */}
      <div className='flex items-start gap-2 mt-5 ml-5'>
        <div className='w-[10px] h-[10px] rounded-full mt-2 bg-[#1A80E6]'></div>
        <p className='text-[#FCFCFD] text-[14px] tracking-tight'>Referral Bonus Earned</p>
      </div>
      <div className='flex flex-col items-start gap-1 '>
        <p className='text-[#B1B5C3] text-[12px] ml-5 mt-1'>Congratulations! You've earned a referral bonus. Th...</p>
        <p className='text-[#B1B5C3] text-[10px] ml-5'>08-31  20:17</p>
      </div>

        {/* third */}
         <div className='flex items-start gap-2 mt-5 ml-5'>
        <div className='w-[10px] h-[10px] rounded-full mt-2 bg-[#1A80E6]'></div>
        <p className='text-[#FCFCFD] text-[14px] tracking-tight'>New Login Request Detected</p>
      </div>
      <div className='flex flex-col items-start gap-1 '>
        <p className='text-[#B1B5C3] text-[12px] ml-5 mt-1'>We've detected a new login request from an unrecog...</p>
        <p className='text-[#B1B5C3] text-[10px] ml-5'>08-31  20:01</p>
      </div>

      <button className='w-[285px] h-[32px] ml-6 mt-5 bg-[#1A80E6] rounded-[8px] font-bold text-[14px] flex items-center justify-center text-[#FCFCFD]'>View All</button>



    </div>
  )
}

export default OutlineModal

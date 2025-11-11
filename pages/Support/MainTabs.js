import Image from 'next/image'
import React from 'react'

function MainTabs() {
  return (
    <div className='sm:w-[1224px] w-full sm:ml-60 ml-0 mt-10 grid sm:grid-cols-6 grid-cols-2 items-center justify-center  '>
        {/* Tab 1 */}
      <div className='w-[184px] h-[187px] gap-3  bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)] flex flex-col items-center border justify-center rounded-[16px] '>
        <Image src="/Support1.png" alt='support' width={115} height={89} />
        <p className='text-[#FCFCFD] text-[18px] font-bold '>Trading</p>
      </div>
        {/* Tab 2 */}
        <div className='w-[184px] h-[187px] gap-3 bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)]  flex flex-col items-center justify-center rounded-[16px]'>
        <Image src="/support2.png" alt='support' width={115} height={89} />
        <p className='text-[#FCFCFD] text-[18px] font-bold '>Information</p>
      </div>
      {/* Tab 3 */}
      <div className='w-[184px] h-[187px] gap-3 bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)]  flex flex-col items-center justify-center rounded-[16px]'>
        <Image src="/support3.png" alt='support' width={115} height={89} />
        <p className='text-[#FCFCFD] text-[18px] font-bold '>Fees & Limits</p>
      </div>
      {/* Tab 4 */}
       <div className='w-[184px] h-[187px] gap-3 bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)]  flex flex-col items-center justify-center rounded-[16px] '>
        <Image src="/support4.png" alt='support' width={115} height={89} />
        <p className='text-[#FCFCFD] text-[18px] font-bold '>Support</p>
      </div>
      {/* Tab 5 */}
      <div className='w-[184px] h-[187px] gap-3 bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)]  flex flex-col items-center justify-center rounded-[16px] '>
        <Image src="/support5.png" alt='support' width={115} height={89} />
        <p className='text-[#FCFCFD] text-[18px] font-bold '>Funds Transfer</p>
      </div>
        {/* Tab 6 */}
        <div className='w-[184px] h-[187px] gap-3 bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)] border-t-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)] flex flex-col items-center justify-center rounded-[16px]'>
        <Image src="/support6.png" alt='support' width={115} height={89} />
        <p className='text-[#FCFCFD] text-[18px] font-bold '>Account</p>
      </div>
    </div>
  )
}

export default MainTabs

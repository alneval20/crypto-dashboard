import React from 'react'
import { CiSearch } from "react-icons/ci";
import MarketTable from './MarketTable';

function MarketSection() {
  return (
    <div className='flex flex-col w-full items-start '>
    <div><h4 className='text-[#FCFCFD] text-[32px] font-bold mt-5 sm:ml-0 ml-28'>Markets</h4></div>
      <div className='flex  sm:ml-0 ml-10 gap-3'>
        <ul className='text-[#FCFCFD] mt-5 flex gap-5  text-[16px]'>
          <li>Favorites</li>
          <li>All</li>
          <li>Spot</li>
          <li>New Listings</li>
        </ul>
      </div>
      <div className='flex flex-wrap sm:flex-nowrap gap-3 mt-10 items-center justify-center sm:justify-start' >
        <div className='w-[32px] h-[32px] bg-[#23262F] rounded-[6px] border-1 flex items-center justify-center'><p className='text-[#FCFCFD] text-[13px]'>All</p></div>
        <div className='w-[146px] h-[36px] border-[#353945] rounded-[6px] border-1 flex items-center justify-center text-[13px]'><p className='text-[#FCFCFD]'>Solana ecosystem</p></div>
            <div className='w-[55px] h-[32px] border-[#353945] rounded-[6px] border-1 flex items-center justify-center'><p className='text-[#FCFCFD] text-[13px]'>Eco</p></div>
              <div className='w-[47px] h-[32px] border-[#353945] rounded-[6px] border-1 flex items-center justify-center'><p className='text-[#FCFCFD] text-[13px]'>AI</p></div>
          <div className='w-[71px] h-[32px] border-[#353945] rounded-[6px] border-1 flex items-center justify-center'><p className='text-[#FCFCFD] text-[13px]'>Meme</p></div>
           <div className='w-[81px] h-[32px] border-[#353945] rounded-[6px] border-1 flex items-center justify-center'><p className='text-[#FCFCFD] text-[13px]'>GameFi</p></div>
        <div class="w-[133px] h-[28px] border border-[#353945] rounded px-1 flex items-center text-white">
  <select
    id="currency"
    name="currency"
    class="w-full h-full bg-transparent text-sm outline-none"
  >
    <option value="USD" className='text-white'>USD</option>
    <option value="TRY">TRY</option>
    <option value="EUR">EUR</option>
  </select>
</div>
<div className='flex relative w-full sm:w-auto mt-2 sm:mt-0 sm:ml-120 ml-10'>
        <CiSearch className='absolute ml-2 text-[18px] text-[#777E90] mt-3' />
        <input type='text' placeholder='Search' className='w-[286px] h-[40px] bg-[#23262F] rounded-[8px] placeholder:pl-7 text-[#777E90]'/>
        </div>
      </div>
          <MarketTable/>
    </div>

  )
}

export default MarketSection

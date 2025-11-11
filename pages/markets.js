import Image from 'next/image';
import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { GridCard } from '../pages/MArket/GridCart'
import { IoIosTrendingUp } from "react-icons/io";
import MarketSection from './MArket/MarketSection';
import MarketTable from './MArket/MarketTable';



function markets() {

  return (
    <div className='w-full h-screen grid sm:grid-cols-3 grid-cols-1 overflow-x-hidden items-start justify-center sm:px-20 px-0 sm:gap-0 gap-10 py-10 bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)]'>
     
    {/* 1nd */}
    <GridCard title="Market Sentiments">
      <Image src="/markets.svg" alt='markets' width={344} height={208} className='mt-5 mx-auto' />
    </GridCard>
     
      {/* 2nd*/}
      <GridCard title="Market Data">
        <div className='flex flex-col gap-3'>
          <div className='flex justify-between'>
            <p className='text-[#777E90] text-[14px]'>Current ETH Gas Price</p>
       <svg viewBox="0 0 200 100" class="w-30 h-24">
    <path d="M0 70 L20 50 L40 55 L60 40 L80 60 L100 65 L120 50 L140 70 L160 60 L180 70 L200 65 L200 100 L0 100 Z"
      fill="url(#grayGradient)" opacity="0.2" />
    <path d="M0 70 L20 50 L40 55 L60 40 L80 60 L100 65 L120 50 L140 70 L160 60 L180 70 L200 65"
      stroke="#A3A3A3" stroke-width="3" fill="none" stroke-linecap="round" />
    <defs>
      <linearGradient id="grayGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#A3A3A3" />
        <stop offset="100%" stop-color="#A3A3A3" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
          </div>
          <div className='flex items-center gap-2 -mt-20'>
            <p className='text-[#E6E8EC] text-[12px] '>3.011588451</p>
            <p className='text-[#B1B5C3] text-[10px] -mt-2'>= 0.144 USD</p>
          </div>
          <p className='text-[#E6E8EC] text-[12px] font-medium -mt-2'>Gwei</p>
          <div className='flex justify-between '>
            <p className='text-[#777E90] text-[12px] mt-14'>Trading Volume</p>
           <svg viewBox="0 0 200 100" class="w-30 h-24">
    <path d="M0 80 L20 70 L40 75 L60 60 L80 30 L100 40 L120 45 L140 30 L160 50 L180 40 L200 60 L200 100 L0 100 Z"
      fill="url(#greenGradient)" opacity="0.2" />
    <path d="M0 80 L20 70 L40 75 L60 60 L80 30 L100 40 L120 45 L140 30 L160 50 L180 40 L200 60"
      stroke="#00FF9D" stroke-width="3" fill="none" stroke-linecap="round" />
    <defs>
      <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#00FF9D" />
        <stop offset="100%" stop-color="#00FF9D" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
          </div>
          <div className='flex items-center gap-2 -mt-7'>
            <p className='text-[#FCFCFD] text-[10px] font-bold '>165.12B USDT</p>
            <p className='text-[#E2464A] text-[10px] '>-24.71%</p>
          </div>
        </div>
      </GridCard>

      {/* 3.nd */}
      <GridCard title="Trending Sectors">
        <ul className='text-[#E6E8EC] gap-3 text-[12px] space-y-2 px-2'>
         <div className='flex w-[344px] h-[36px] items-center justify-between'> <li className='text-[#777E90]'>Names </li> <span className='text-[#777E90]'>Avg. Price Change</span></div>
          <div className='flex w-[344px]  h-[36px] bg-[#1C1E24] mt-2 items-center justify-between'><li className='text-[14px]'>Memes</li> <p className='text-[#2FA766] tetx-[14px]'>+8.88%</p> </div>
            <div className='flex w-[344px]  h-[36px] bg-[#18191D] mt-2 items-center justify-between'><li className='text-[14px]'>AI</li> <p className='text-[#2FA766] tetx-[14px]'>+8.88%</p> </div>
               <div className='flex w-[344px]  h-[36px] bg-[#1C1E24] mt-2 items-center justify-between'><li className='text-[14px]'>Gaming (GameFi)</li> <p className='text-[#2FA766] tetx-[14px]'>+8.88%</p> </div>
    <div className='flex w-[344px]  h-[36px] bg-[#1C1E24] mt-2 items-center justify-between'><li className='text-[14px]'>RWA</li> <p className='text-[#2FA766] tetx-[14px]'>+8.88%</p> </div>
      
        </ul>
      </GridCard>

      {/* 4nd */}

      <GridCard title="Top Gainers">
        <div className='w-[344px] h-[36px] flex items-center justify-between'>
          <p className='text-[#777E90] text-[12px]'>Pairs</p>
           <p className='text-[#777E90] text-[12px]'>Price</p>
           <p className='text-[#777E90] text-[12px]'>24h Change</p>
        </div>
        {/*2.satır*/}
        <div className='w-[344px] h-[36px] bg-[#1C1E24] mt-2 flex items-center justify-between'>
          <div className='flex items-center gap-2 '>  
            <Image src="/aave (1).svg" alt='ave' width={20} height={20} />
          <p className='text-[#FCFCFD] text-[16px] '>AAVE</p>
          </div>
          <p className='text-[#FCFCFD] text-[14px] mr-10'>$45.56</p>
          <p className='text-[#2FA766] text-[16px]'>+8.88%</p>
        </div>

          {/*3.satır*/}
        <div className='w-[344px] h-[36px] bg-[#1C1E24] mt-2 flex items-center justify-between'>
          <div className='flex items-center gap-2 '>  
            <Image src="/Group.svg" alt='ave' width={20} height={20} />
          <p className='text-[#FCFCFD] text-[16px] '>ANT</p>
          </div>
          <p className='text-[#FCFCFD] text-[14px] mr-10'>$302.74</p>
          <p className='text-[#2FA766] text-[16px]'>+7.23%</p>
        </div>


          {/*4.satır*/}
        <div className='w-[344px] h-[36px] bg-[#1C1E24] mt-2 flex items-center justify-between'>
          <div className='flex items-center gap-2 '>  
            <Image src="/eca.svg" alt='ave' width={20} height={20} />
          <p className='text-[#FCFCFD] text-[16px] '>ECA</p>
          </div>
          <p className='text-[#FCFCFD] text-[14px] mr-10'>$0.24</p>
          <p className='text-[#2FA766] text-[16px]'>+6.59%</p>
        </div>

       {/*5.satır*/}
        <div className='w-[344px] h-[36px] bg-[#1C1E24] mt-2 flex items-center justify-between'>
          <div className='flex items-center gap-2 '>  
            <Image src="/gas.svg" alt='ave' width={20} height={20} />
          <p className='text-[#FCFCFD] text-[16px] '>GAS</p>
          </div>
          <p className='text-[#FCFCFD] text-[14px] mr-10'>$1.81</p>
          <p className='text-[#2FA766] text-[16px]'>+4.63%</p>
        </div>

      </GridCard>

      {/*5 nd */}

      <GridCard title="Trending">
        <div className='w-[344px] h-[36px] flex items-center justify-between '>
          <p className='text-[#777E90] text-[12px]'>Pairs</p>
           <p className='text-[#777E90] text-[12px]'>Price</p>
           <p className='text-[#777E90] text-[12px]'>24h Change</p>
        </div>
        {/*2.satır*/}
        <div className='w-[344px] h-[36px] bg-[#1C1E24] mt-2 flex items-center justify-between px-2'>
          <div className='flex items-center gap-2 '>  
            <Image src="/neo.svg" alt='ave' width={20} height={20} />
          <p className='text-[#FCFCFD] text-[16px] '>NEO</p>
          </div>
          <p className='text-[#FCFCFD] text-[14px] mr-10'>$223.15</p>
          <p className='text-[#2FA766] text-[16px]'>+0.17%</p>
        </div>

          {/*3.satır*/}
        <div className='w-[344px] h-[36px] bg-[#1C1E24] mt-2 flex items-center justify-between px-2'>
          <div className='flex items-center gap-2 '>  
            <Image src="/btc.svg" alt='ave' width={20} height={20} />
          <p className='text-[#FCFCFD] text-[16px] '>BTC</p>
          </div>
          <p className='text-[#FCFCFD] text-[14px] mr-10'>$65,000</p>
          <p className='text-[#2FA766] text-[16px]'>+0.02%</p>
        </div>


          {/*4.satır*/}
        <div className='w-[344px] h-[36px] bg-[#1C1E24] mt-2 flex items-center justify-between px-2'>
          <div className='flex items-center gap-2 '>  
            <Image src="/Group.svg" alt='ave' width={20} height={20} />
          <p className='text-[#FCFCFD] text-[16px] '>RAP</p>
          </div>
          <p className='text-[#FCFCFD] text-[14px] mr-10'>$35.18</p>
          <p className='text-[#E2464A] text-[16px]'>-4.21%</p>
        </div>

       {/*5.satır*/}
        <div className='w-[344px] h-[36px] bg-[#1C1E24] mt-2 flex items-center justify-between px-2'>
          <div className='flex items-center gap-2 '>  
            <Image src="/leo.svg" alt='ave' width={20} height={20} />
          <p className='text-[#FCFCFD] text-[16px] '>LEO</p>
          </div>
          <p className='text-[#FCFCFD] text-[14px] mr-10'>$84.56</p>
          <p className='text-[#2FA766] text-[16px]'>+0.15%</p>
        </div>

      </GridCard>

      {/*6nd*/}

        <GridCard title="New Listings">
        <div className='w-[344px] h-[36px] flex items-center justify-between'>
          <p className='text-[#777E90] text-[12px]'>Pairs</p>
           <p className='text-[#777E90] text-[12px]'>Price</p>
           <p className='text-[#777E90] text-[12px]'>24h Change</p>
        </div>
        {/*2.satır*/}
        <div className='w-[344px] h-[36px] bg-[#1C1E24] mt-2 flex items-center justify-between'>
          <div className='flex items-center gap-2 '>  
            <Image src="/sngls.svg" alt='ave' width={20} height={20} />
          <p className='text-[#FCFCFD] text-[16px] '>SNGLS</p>
          </div>
          <p className='text-[#FCFCFD] text-[14px] mr-10'>$2.19</p>
          <p className='text-[#E2464A] text-[16px]'>-0.16%</p>
        </div>

          {/*3.satır*/}
        <div className='w-[344px] h-[36px] bg-[#1C1E24] mt-2 flex items-center justify-between'>
          <div className='flex items-center gap-2 '>  
            <Image src="/stak.svg" alt='ave' width={20} height={20} />
          <p className='text-[#FCFCFD] text-[16px] '>STAK</p>
          </div>
          <p className='text-[#FCFCFD] text-[14px] mr-6'>$0.015</p>
          <p className='text-[#2FA766] text-[16px]'>+2.12%</p>
        </div>


          {/*4.satır*/}
        <div className='w-[344px] h-[36px] bg-[#1C1E24] mt-2 flex items-center justify-between'>
          <div className='flex items-center gap-2 '>  
            <Image src="/rnm.svg" alt='ave' width={20} height={20} />
          <p className='text-[#FCFCFD] text-[16px] '>TNC</p>
          </div>
          <p className='text-[#FCFCFD] text-[14px] mr-5'>$0.34</p>
          <p className='text-[#2FA766] text-[16px]'>+3.15%</p>
        </div>

       {/*5.satır*/}
        <div className='w-[344px] h-[36px] bg-[#1C1E24] mt-2 flex items-center justify-between'>
          <div className='flex items-center gap-2 '>  
            <Image src="/prl.svg" alt='ave' width={20} height={20} />
          <p className='text-[#FCFCFD] text-[16px] '>PRL</p>
          </div>
          <p className='text-[#FCFCFD] text-[14px] mr-4'>$1.51</p>
          <p className='text-[#E2464A] text-[16px]'>-0.18%</p>
        </div>

      </GridCard>
      <MarketSection/>
   
    </div>
   
  )
}

export default markets

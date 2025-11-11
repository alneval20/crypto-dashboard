import Image from 'next/image'
import React from 'react'
import { FaCaretDown } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineScreenLockPortrait } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { TbVectorTriangle } from "react-icons/tb";
import TradingViewWidget from 'react-tradingview-widget';
import { FaAngleDown } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { PiCaretUpDownFill } from "react-icons/pi";
import { IoMdAddCircleOutline } from "react-icons/io";
function OrderBook() {
  const orders = [
    {price: '57,671.34', quantity: '0.0002123', total: '15.2213', width: 20 },
    {price: '57,671.34', quantity: '0.0002123', total: '15.2213'},
    {price: '57,671.12', quantity: '0.000345', total: '15.2213', width: 30},
    {price: '57,671.12', quantity: '0.00043', total: '15.234', width: 80 },
    {price: '57,671.22', quantity: '0.00062', total: '15.2545'},
    {price: '57,671.21', quantity: '0.000342', total: '15.546', width:20},
    {price: '57,671.21', quantity: '0.000265', total: '15.256', width: 90},
    {price: '57,671.21', quantity: '0.00245', total: '15.645'},
    {price: '57,671.21', quantity: '0.0005442', total: '15.267' , width: 45},
    {price: '57,671.12', quantity: '0.000232', total: '15.254', width: 75}
  ];

  const buyOrders = [
    {price: '57,671.23', quantity: '0.000268', total: '15.2860'},
    {price: '57,671.23', quantity: '0.000265', total: '15.2234', width: 20},
    {price: '57,671.44', quantity: '0.0002632', total: '15.323'},
    {price: '57,671.87', quantity: '0.000260', total: '15.3423', width: 60},
    {price: '57,671.89', quantity: '0.000258', total: '15.32424', width: 80},
    {price: '57,671.95', quantity: '0.000253', total: '15.3422'},
    {price: '57,672.10', quantity: '0.000250', total: '15.23423', width:50},
    {price: '57,672.23', quantity: '0.000245', total: '15.2342', width: 10 },
    {price: '57,672.26', quantity: '0.000244', total: '15.2234', width: 90}
  ];

  return (
    <div className='w-full sm:flex flex-row items-start   sm:px-5 px-2 box-border py-[50px]'>
      {/* Left Side */}
      <div className='flex flex-col w-[350px] h-[695px] rounded-[16px] px-[16px] bg-[#18191D]'>

        {/* Header */}
        <div className='flex mt-5 gap-2'>
          <span className='text-[#E6E8EC] text-[14px] w-[79px] h-[26px]'>Order book</span>
          <span className='text-[#B1B5C3] text-[14px] w-[98px] h-[26px]'>Recent Trades</span>
        </div>

        {/* Blue underline */}
        <div className='relative w-[318px] border-1 border-[#353945]'>
          <div className='absolute w-[79px] border-1 border-[#1A80E6]'></div>
        </div>

        {/* Toolbar */}
        <div className='flex justify-between'>
          <div className='flex items-center mt-6 gap-3'>
            <div className='w-[20px] h-[20px] bg-[#353945] relative rounded-[8px]'>
              <Image src="/SVG.svg" alt='svg1' width={12} height={12} className='absolute ml-1 m-1'/>
            </div>
            <Image src="/Container.svg" alt='container' width={20} height={20}/>
            <Image src="/SVG (1).svg" alt='svg(1)' width={20} height={20}/>
          </div>

          <div className='flex gap-2 mt-6'>
            <span className='text-[#FCFCFD] text-[12px]'>0.01</span>
            <FaCaretDown className='text-[#FCFCFD]'/>
          </div>
        </div>

        {/* Table Headers */}
        <div className='flex w-[318px] h-[17px] mt-10 items-center justify-between'>
          <span className='text-[#FCFCFD] text-[12px] font-bold'>Price (USDT)</span>
          <span className='text-[#FCFCFD] text-[12px] font-bold'>Quantity (BTC)</span>
          <span className='text-[#FCFCFD] text-[12px] font-bold'>Total</span>
        </div>

        {/* Sell Orders */}
        <div className="flex flex-col gap-3 mt-3">
          {orders.map((item, index) => (
            <div key={index} className="relative flex justify-between text-[10px] text-[#EF4D5A]">
              <div
                className="absolute right-0 top-0 h-full bg-[#EF4D5A]/20 rounded-sm"
                style={{ width: `${item.width || 0}%` }}
              ></div>
              <span className="z-10">{item.price}</span>
              <span className="z-10 text-[#FCFCFD]">{item.quantity}</span>
              <span className="z-10 text-[#FCFCFD]">{item.total}</span>
            </div>
          ))}

          {/* Mid price */}
          <div className="mid-price text-white font-semibold text-[10px] mt-2 flex justify-between">
            <span>57,671.88</span>
            <span>≈€ 52,256.49</span>
          </div>

          {/* Buy Orders */}
          {buyOrders.map((item, index) => (
            <div key={index} className='relative flex justify-between text-[10px] text-[#58C27D]'>
              <div
                className='absolute right-0 top-0 h-full bg-[#1F4B3F]/40 rounded-sm'
                style={{ width: `${item.width || 0}%` }}
              ></div>
              <span className='z-10'>{item.price}</span>
              <span className='z-10 text-[#FCFCFD]'>{item.quantity}</span>
              <span className='z-10 text-[#FCFCFD]'>{item.total}</span>
            </div>
          ))}
        </div>
      </div>

          {/*Middle*/}
      <div className=' w-full  flex flex-col  rounded-[16px] px-5 py-5'>
          <div className='flex flex-col h-full '>
         <TradingViewWidget symbol="BTCUSDT" />
          </div>
      </div>

      {/*Right*/}
      <div className='w-[350px] flex-shrink-0  flex flex-col  bg-[#18191D] rounded-[16px] '>
          <div className='flex px-2 mt-10 gap-3'>
          <span className='text-[#E6E8EC] text-[14px]'>Spot</span>
          <span className='text-[#B1B5C3] text-[14px]'>Margin 10X</span>
          </div>
          <div className='w-full border-1 border-[#353945] relative '>
          <div className='w-10 border-1 border-[#1A80E6]'></div>
          </div>
          <div className='flex mt-10  px-3 items-center'>
            <button className='w-[153px] h-[32px] bg-[#2FA766] rounded-[8px] text-white font-medium'>Buy</button>
            <button className='w-[153px] h-[32px]  bg-[#23262F] rounded-[8px] text-[#B1B5C3] font-medium'>Sell</button>
          </div>
          <div className='flex items-center justify-between text-[12px]  mt-10 px-3'>
            <div className='flex gap-3'>
                <span className='text-[#B1B5C3] '>Limit</span>
            <span className='text-[#B1B5C3]'>Market</span>
            <div className='flex'><span className='text-[#B1B5C3]'>Advanced Limit</span> 
<FaAngleDown className='text-[#B1B5C3] mt-1' /> </div>
            </div>
            <IoMdInformationCircleOutline className='text-[#FCFCFD] text-2xl'/>
          </div>
          <div className='flex mt-10 text-[12px] px-5 '>
           <div className='w-[310px]  h-[40px] flex items-center justify-between bg-[#23262F] rounded-2xl px-4' >
            <span className='text-[#B1B5C3] font-bold text-[14px]'>Price</span>
            <div className='w-0 h-[26px] border-1 border-[#353945]'></div>
            <span className='text-[#FCFCFD] -ml-7 font-medium'>60,423.71</span>
            <div className='flex gap-2'><span className='text-[#B1B5C3] ml-10 text-[14px] font-medium'>USDT</span> <PiCaretUpDownFill className='text-[#B1B5C3] mt-1 text-[16px]' /> </div>
           </div>
          </div>

          <div className='flex mt-8 text-[12px] px-5'>
           <div className='w-[310px]  h-[40px] flex items-center gap-10 bg-[#23262F] rounded-2xl px-4' >
            <span className='text-[#B1B5C3] font-bold text-[14px]'>Quantity</span>
            <div className='w-0 h-[26px] border-1 border-[#353945] -ml-7'></div>
            <span className='text-[#FCFCFD] -ml-7 font-medium'>0.5</span>
            <div className='flex gap-2 ml-10'><span className='text-[#B1B5C3] ml-10 text-[14px] font-medium'>BTC</span> <PiCaretUpDownFill className='text-[#B1B5C3] mt-1 text-[16px]' /> </div>
           </div>
          </div>

          <div className='flex w-[350px] h-[8px] bg-[#23262F] ml-3 mt-10 relative'>
            <div className='w-[76px] h-[4px] border-2 border-[#2FA766]'></div>
            <div className='w-[12px] h-[12px] border-2 border-[#2FA766] rounded-2xl -mt-1 '></div>
          </div>
          <div className='flex items-center justify-between px-2'>
          <span className='text-[#B1B5C3] text-[12px]'>0%</span>
          <span className='text-[#B1B5C3] text-[12px]'>25%</span>
          <span className='text-[#B1B5C3] text-[12px]'>50%</span>
          <span className='text-[#B1B5C3] text-[12px]'>75%</span>
          <span className='text-[#B1B5C3] text-[12px]'>100%</span>
          </div>

           <div className='flex mt-8 text-[12px] px-8'>
           <div className='w-[310px]  h-[40px] flex items-center gap-10 bg-[#23262F] rounded-2xl px-4' >
            <span className='text-[#B1B5C3] font-bold text-[14px]'>Total</span>
            <div className='w-0 h-[26px] border-1 border-[#353945] -ml-7'></div>
            <span className='text-[#FCFCFD] -ml-7 font-medium'>30,211.85</span>
            <div className='flex gap-2 ml-10'><span className='text-[#B1B5C3] ml-10 text-[14px] font-medium'>USD</span> <PiCaretUpDownFill className='text-[#B1B5C3] mt-1 text-[16px]' /> </div>
           </div>
          </div>
          
         <label className="inline-flex items-center space-x-2 px-10 mt-5">
        <input type="checkbox" className="appearance-none w-[20px] h-[20px] border-1 border-gray-500 rounded bg-[#353945] checked:bg-blue-500 "/>
        <span className="text-white text-[12px]">TP/SL</span>
        </label>

        <div className='flex  items-center justify-between px-8 mt-15'>
       <div className='flex gap-1'>  
         <span className='text-[#B1B5C3] text-[12px]'>Available</span>
         <span className='text-white text-[12px]'>0 USDT</span>
       </div>
       <div><IoMdAddCircleOutline className='text-[#FCFCFD] text-[20px]' /></div>
        </div>

        <button className='w-[318px] h-[40px] bg-[#2FA766] rounded-[8px] text-white text-[16px] sm:ml-8 ml-5 mt-5'>Buy</button>
      </div>
    </div>
  )
}

export default OrderBook


import React from 'react'
import { IoMdClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import { IoMdTrendingDown } from "react-icons/io";
import Image from 'next/image';
function AsserPairModal({showmodal, onClose }) {
    if (!showmodal) return null;

    const result = [
        {id: 1, name: "BTC/USDT", symbol: "Bitcoin", price: "$60,423.71", change: "-9.88%", favorite: false, icon: "/btc.svg" },
        {id: 2, name: "ETH/USDT", symbol: "Ethereum", price: "$2,531.76", change: "+5.88%", favorite: true, icon: "/eth.svg"},
        {id: 3, name: "BNB/USDT", symbol: "BNB", price: "$593.45", change:"+8.88%", favorite: false, icon: "/Bnb.svg"},
        {id: 4, name: "TRX/USDT", symbol: "Tron", price: "$0.1637", change: "+6.88%", favorite: true, icon:"/tron.svg"},
        {id: 5, name: "ETC/USDT", symbol: "Ethereum Classic", price: "$18.42", change: "-2.88%", favorite: false, icon: "/etc.svg"},
        {id: 6, name: "LTC/USDT", symbol: "Litecoin", price: "$70.90", change: "+9.88%", favorite: true, icon: "/ltc.svg"}
    ]
  return (
    <div className='fixed inset-0 flex  items-center justify-center z-50'>
        <div className='w-[566px] h-[787px] flex flex-col  bg-[#18191D] border-1 border-[#23262F] shadow-[#141416CF] rounded-[16px]'>
            <div className='flex items-center justify-between px-10 mt-10   '>
                <span className='text-[#FCFCFD] text-[16px] font-medium'>Select Crypto Pair</span>
                <button onClick={onClose} className='w-[32px] h-[32px] bg-[#18191D] '><IoMdClose className='text-[#777E90] text-2xl' />             </button>
            </div>
            <div className='w-[502px] border-[1px] border-[#353945] ml-6 mt-5'></div>
            <div className='w-[502px] h-[46px] border-[1px] bg-[#23262F] flex items-center justify-center ml-5 mt-5 rounded-[8px]'>
                <CiSearch className='text-[#777E90] text-[25px] ml-5'/>
                <input type='text' placeholder='Search crypto' className='w-[502px] h-[46px] text-[#777E90] text-[14px] indent-1 '/>
            </div>

            <div className='flex flex-col items-start px-6 mt-7'>
                <ul className='flex gap-3 text-[#F4F5F6] text-[14px]'>
                    <li>USDT</li>
                    <li>USDC</li>
                    <li>ETH</li>
                    <li>BTC</li>
                </ul>
                <div className='w-[40px] border-[2px] border-[#1A80E6]'></div>
            </div>

            <div className='flex w-[502px] gap-3 px-6 mt-8'>
                <div className='w-[41px] h-[32px] bg-[#23262F] rounded-[6px] flex items-center justify-center'><span className='text-[#FCFCFD] text-[14px]'>All</span></div>

         <div className='w-[82px] h-[32px] border-[1px] rounded-[6px] bg-[#18191D] border-[#313540] flex items-center justify-center'>
       <span className='text-[#FCFCFD] text-[14px]'>Favorites</span></div>

         <div className='w-[98px] h-[32px] border-[1px] rounded-[6px] bg-[#18191D] border-[#313540] flex items-center justify-center'>
       <span className='text-[#D6D8E0] text-[14px]'>Top Volume</span></div>


         <div className='w-[98px] h-[32px] border-[1px] rounded-[6px] bg-[#18191D] border-[#313540] flex items-center justify-center'>
       <span className='text-[#D6D8E0] text-[14px]'>New Listing</span></div>

        <div className='w-[98px] h-[32px] border-[1px] rounded-[6px] bg-[#18191D] border-[#313540] flex items-center justify-center'>
       <span className='text-[#FCFCFD] text-[14px]'>Memecoins</span></div>
            </div>

           <div className="flex flex-col gap-3 mt-10">
  {result.map((coin) => (
    <div
      key={coin.id}
      className="flex items-center justify-between bg-[#23262F] px-3 py-2 rounded-lg"
    >
  
      <div className="flex items-center gap-3">
        <span className="text-xl cursor-pointer">
          {coin.favorite ? "⭐" : "☆"}
        </span>
        <Image src={coin.icon} alt={coin.name} className="w-6 h-6" width={32} height={32}/>
        <div>
          <p className="text-white">{coin.name}</p>
          <p className="text-[#B1B5C3] text-sm">{coin.symbol}</p>
        </div>
      </div>

  
      <div className="text-right">
        <p className="text-white text-[16px]">{coin.price}</p>
        <p
          className={`text-sm ${
            coin.change.startsWith("-") ? "text-red-500" : "text-green-500"
          }`}
        >
      <div className='flex gap-2 ml-5 '>   
         <span className={`${coin.change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
    {coin.change}
  </span>
         {coin.change.startsWith("-") ? <IoMdTrendingDown className="text-red-500 mt-1" />   : <IoIosTrendingUp className="text-green-500 mt-1" />} 
          
        </div>
        </p>
      </div>
    </div>
  ))}
</div>
        
        </div>
    </div>
  )
}

export default AsserPairModal


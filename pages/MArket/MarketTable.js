import React from 'react'
import { FaSortAlphaDown } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Image from 'next/image';
import { CoinRow } from './CoinRow';


function MarketTable() {
    const coins = [
       {
        name: "btc",
        pair: "BTC/USDT",
        price: "$65,230.56",
        change: "+8.88%",
        marketCap: "$1,149,301,700,874",
        volume: "$37,169,951,326",
        btcAmount: "638,587 BTC",
        chartColor: "#00FF9D"
       },

       {
        name: "eth",
        pair: "ETH/USDT",
        price: "$2,540.74",
        change: "+1.32%",
        marketCap: "$283,122,954,710",
        volume: "$14,986,278,893",
        btcAmount: "6,351,195 ETH",
        chartColor: "#00FF9D"
       },
       {
        name: "tron",
        pair: "TRON/USDT",
        price: "$0.1637",
        change: "-2.08%",
        marketCap: "$14,154,817,051",
        volume: "$37,169,951,326",
        btcAmount: "638,587 TRX",
        chartColor: "#FF4D4D"
       },
       {
        name: "bnb",
        pair: "BNB/USDT",
        price: "$593.40",
        change: "-0.03%",
        marketCap: "$86,563,297,643",
        volume: "$37,169,951,326",
        btcAmount: "638,587 TRX",
        chartColor: "#FF4D4D"
       },
         {
        name: "xrp",
         pair: "XRP/USDT",
        price: "0.5256",
        change: "+1.06%",
        marketCap: "29,437,532,642",
        volume: "37,169,951,326",
        btcAmount: "638,587",
        chartColor: "#00FF9D",
        },
        {
    name: "doge",
    pair: "DOGE/USDT",
    price: "0.1453",
    change: "-1.64%",
    marketCap: "21,324,662,756",
    volume: "37,169,951,326",
    btcAmount: "638,587",
    chartColor: "#FF4D4D",
  },
  {
    name: "ltc",
    pair: "LTC/USDT",
    price: "70.92",
    change: "+0.20%",
    marketCap: "5,321,168,478",
    volume: "37,169,951,326",
    btcAmount: "638,587",
    chartColor: "#00FF9D",
  },
  {
    name: "ont",
    pair: "ONT/USDT",
    price: "56,878.27",
    change: "-0.23%",
    marketCap: "158,621,084",
    volume: "37,169,951,326",
    btcAmount: "638,587",
    chartColor: "#FF4D4D",
  },
  {
    name: "ada",
    pair: "ADA/USDT",
    price: "0.3391",
    change: "-3.11%",
    marketCap: "11,862,872,392",
    volume: "37,169,951,326",
    btcAmount: "638,587",
    chartColor: "#FF4D4D",
  },
  {
    name: "zil",
    pair: "ZIL/USDT",
    price: "0.01406",
    change: "+4.43%",
    marketCap: "268,485,123",
    volume: "37,169,951,326",
    btcAmount: "638,587",
    chartColor: "#00FF9D",
  },


    ]
  return (
     <div className='flex flex-col '>   
    {/*top*/}
    <div className='sm:w-[1400px] w-full h-[60px]  sm:mb-20 mb-0 bg-[#18191D] mt-10 flex  items-center justify-between sm:ml-5 ml-0 rounded-[8px]'>
        <ul className='text-[#777E90] flex justify-between w-full sm:px-20 px-4'>
            <li>Pair</li>
           <div className='flex gap-2'> <li>Price</li><FaSortAlphaDown className='text-[#777E90] mt-1'/> </div>
           <div className='flex gap-2 '> <li>24h Change</li><FaSortAlphaDown className='text-[#777E90] mt-1'/> </div>
           <div className='flex gap-2 '> <li>Market Cap</li><CiCircleInfo className='text-[#777E90] mt-1'/></div>
          <div className='flex gap-2 '> <li>24h Volume</li><CiCircleInfo className='text-[#777E90] mt-1'/></div>
            <li>Chart</li>
            <li>Action</li>
        </ul>
    </div>

   {/*Bottom*/}
    <div className='flex flex-col items-center -mt-20'>
    {coins.map((coin, index) => (
        <CoinRow key= {index} {...coin} />
    ))}
    </div>
    </div>
  )
}

export default MarketTable


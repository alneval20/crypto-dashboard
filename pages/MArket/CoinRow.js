import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";

export const CoinRow = ({
  name,
  pair,
  price,
  change,
  marketCap,
  volume,
  btcAmount,
  chartColor,
}) => {
  const isNegative = String(change).trim().startsWith("-");

  return (
    <div className="w-full max-w-[1400px] overflow-auto h-[88px]  flex items-center bg-[#141416] rounded-[8px]  ml-4 gap-4 px-4">
      
      <div className="w-[40px] flex justify-center -ml-3">
        <FaStar className="text-[#777E90] text-[18px]" />
      </div>

    
      <div className="flex items-center w-[220px] gap-3 -ml-5">
        <div className="w-10 h-10 rounded-full bg-[#0B0C0D] flex items-center justify-center overflow-hidden">
          <Image
            src={`/${name.toLowerCase()}.svg`}
            alt={name}
            width={24}
            height={24}
            className="w-8 h-8 object-contain"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-[#FCFCFD] text-[16px]">{pair}</span>
          <span className="text-[#777E90] text-[13px] capitalize">{name}</span>
        </div>
      </div>

    
      <div className="w-[140px] flex flex-col ">
        <span className="text-[#FCFCFD] text-[16px] font-medium -ml-10 -mt-6">{price}</span>
      </div>

      
      <div className="w-[140px] flex flex-col">
        <div className="flex items-center gap-2">
          <span className={`${isNegative ? "text-[#E74C3C]" : "text-[#2FA766]"} text-[16px]`}>
            {change}
          </span>
          {isNegative ? (
            <IoIosTrendingDown className="text-[#E74C3C]" />
          ) : (
            <IoIosTrendingUp className="text-[#2FA766]" />
          )}
        </div>
      </div>


      <div className="w-[220px] flex flex-col">
        <span className="text-[#FCFCFD] text-[16px] ml-15">{marketCap}</span>
      </div>

     
      <div className="sm:w-[220px] sm:flex-none flex-1 ">
        <div className="flex flex-col ml-15">
          <span className="text-[#FCFCFD] text-[16px]">{volume}</span>
          <span className="text-[#777E90] text-[13px]">{btcAmount}</span>
        </div>
      </div>

    
      <div className="sm:w-[160px] flex-1 sm:flex-none flex justify-center">
        <svg viewBox="0 0 200 80" className="w-[120px] h-[50px]">
          <defs>
            <linearGradient id={`g-${name}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={chartColor || (isNegative ? "#E74C3C" : "#2FA766")} stopOpacity="0.6" />
              <stop offset="100%" stopColor={chartColor || (isNegative ? "#E74C3C" : "#2FA766")} stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            d="M0 70 L20 60 L40 65 L60 50 L80 30 L100 40 L120 45 L140 30 L160 50 L180 40 L200 60 L200 80 L0 80 Z"
            fill={`url(#g-${name})`}
            opacity="0.12"
          />
          <path
            d="M0 70 L20 60 L40 65 L60 50 L80 30 L100 40 L120 45 L140 30 L160 50 L180 40 L200 60"
            stroke={chartColor || (isNegative ? "#E74C3C" : "#2FA766")}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Actions */}
      <div className="flex gap-2 sm:w-[160px] justify-end">
        <button className="bg-[#18191D] border border-[#353945] text-white w-[71px] h-[32px] text-[12px] rounded-[8px]">
          Details
        </button>
        <button className="bg-[#23262F] text-white w-[71px] h-[32px] text-[12px] rounded-[8px]">
          Trade
        </button>
      </div>
    </div>
  );
};
export default CoinRow;


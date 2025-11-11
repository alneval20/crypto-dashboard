import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import Image from 'next/image';

export const GridCard = ({ title, children }) => {
  return (
    <div className='w-[392px] h-[310px] flex flex-col bg-[#252B39] mt-5 rounded-[8px]'>
      {/* Üst başlık */}
      <div className='flex items-start py-5 px-5'>
        <p className='text-[#FCFCFD] text-[16px]'>{title}</p>
        <p className='text-[#B1B5C3] ml-auto text-[12px] flex items-center gap-1 cursor-pointer'>
          More <FaAngleRight className='text-[#B1B5C3]' />
        </p>
      </div>

      {/* Ayırıcı çizgi */}
      <div className='w-[344px] h-[1px] bg-[#1B212F] shadow-2xl mx-auto mb-4'></div>

      {/* İçerik */}
      <div className='flex-1 px-5'>
        {children}
      </div>
    </div>
  );
};
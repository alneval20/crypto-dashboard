import React from 'react'
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
function BlogHashtags() {
  return (
    <div className='flex items-start justify-between px-6 mt-10 mb-5'>
      <div className='flex items-center justify-center gap-3'>
        <div className='w-[142px] h-[32px] bg-[#23262F] rounded-[6px] flex items-center justify-center'> 
        <p className='text-[#FCFCFD] text-[12px]'>#Cryptocurrencies</p>
      </div>
      <div className='w-[91px] h-[32px] bg-[#23262F] rounded-[6px] flex items-center justify-center'>
        <p className='text-[#FCFCFD] text-[12px] '>#Business</p>
      </div>
      <div className='w-[81px] h-[32px] bg-[#23262F] rounded-[6px] flex items-center justify-center'>
        <p className='text-[#FCFCFD] text-[12px]'>#Trading</p>
      </div>
      <div className='w-[71px] h-[32px] bg-[#23262F] rounded-[6px] flex items-center justify-center'>
        <p className='text-[#FCFCFD] text-[12px]'>#Web3</p>
      </div>
      <div className='w-[84px] h-[32px] bg-[#23262F] rounded-[6px] flex items-center justify-center'>
        <p className='text-[#FCFCFD] text-[12px]'>#SocialFi</p>
      </div>
      </div>

        <div className='flex text-[#B1B5C3] gap-5'>
            <FaXTwitter />
            <FaTelegram />
            <FaInstagram />
            <FaFacebook />
            <FaWhatsapp />



        </div>

    </div>
  )
}

export default BlogHashtags

import Image from 'next/image'
import React from 'react'
import { HiOutlineBookOpen } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa"; 
import { FaEye } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { CiMicrophoneOn } from "react-icons/ci";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { CiPlay1 } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
function PostsSection() {
  return (
   <div>
     <div className='w-full grid sm:grid-cols-3 grid-cols-1 mt-5 items-center gap-5  justify-center  '>
        {/* 1st Post */}
      <div className='w-[392px] relative  h-[579px] flex flex-col  bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)] rounded-[16px]'>
        <Image src="/Picture.svg" alt='bloglogo' width={392} height={300} className='absolute object-cover'/>
        <div className='w-[450px]  flex items-center justify-between  absolute  mt-80 '>
            <div className='w-[181px] flex items-center gap-3 h-[42px] bg-[#23262F] rounded-[6px]'>
                <HiOutlineBookOpen className='text-[#FCFCFD] text-xl ml-3' />
                <p className='text-center text-[#FCFCFD] text-[15px] '>#Announcements</p> 
                </div> 
         <div className='flex items-center  gap-3  px-3 h-[42px] rounded-[6px]'>
       <FaCalendarAlt className='text-[#FCFCFD] text-[13px]' />
      <input   type='text'  value='09 Sep, 2024' readOnly className='bg-transparent text-[#777E90] text-[13px] focus:outline-none' />
       </div>
          
        </div>

        <div className='absolute mt-[380px]  px-5'>
             <h3 className='text-[#FCFCFD]'>Why is Bitcoin price up today?</h3>
             <p className='text-[#B1B5C3] mt-4 text-[14px]'>The Bitcoin price is trading near its highest levels in a month following back-to-back dovish updates from central banks in the United States and Japan.</p>
        </div>

        <div className='absolute mt-[520px] px-5 flex items-center gap-3'>
            <div className='w-[72px] h-[32px] flex items-center justify-center rounded-[6px] border-1 border-[#23262F] gap-2'>
              <FaEye className='text-[#B1B5C3]' />
              <p className='text-[#B1B5C3] text-[14px]'>21K</p>
            </div>

            <div className='w-[72px] h-[32px] flex items-center justify-center rounded-[6px] border-1 border-[#23262F] gap-2 '>
               <CiHeart className='text-[#B1B5C3]' />
              <p className='text-[#B1B5C3] text-[14px]'>550</p>
            </div>

            <div className='w-[72px] h-[32px] flex items-center justify-center rounded-[6px] border-1 border-[#23262F] gap-2 '>
               <FaRegComment className='text-[#B1B5C3]' />
              <p className='text-[#B1B5C3] text-[14px]'>45</p>
            </div>

            <div className='bg-[#23262F] w-[40px] h-[31px] flex items-center justify-center ml-15 rounded-[6px] '>
                <BsShare className='text-[#B1B5C3]' />
            </div>

        </div>
    

      </div>

        {/* 2nd Post */}

           <div className='w-[392px] relative  h-[579px] flex flex-col   bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)] rounded-[16px]'>
        <Image src="/picture3.jpg" alt='picture' width={392} height={300} className='absolute h-[300px] rounded-2xl object-cover'/>
        <div className='w-[450px]  flex items-center justify-between  absolute  mt-80 '>
            <div className='w-[181px] flex items-center gap-3 h-[42px] bg-[#23262F] rounded-[6px]'>
                <HiOutlineBookOpen className='text-[#FCFCFD] text-xl ml-3' />
                <p className='text-center text-[#FCFCFD] text-[15px] '>#Announcements</p> 
                </div> 
         <div className='flex items-center  gap-3  px-3 h-[42px] rounded-[6px]'>
       <FaCalendarAlt className='text-[#FCFCFD] text-[13px]' />
      <input   type='text'  value='09 Sep, 2024' readOnly className='bg-transparent text-[#777E90] text-[13px] focus:outline-none' />
       </div>
          
        </div>

        <div className='absolute mt-[380px]  px-5'>
             <h3 className='text-[#FCFCFD]'>Why is Bitcoin price up today?</h3>
             <p className='text-[#B1B5C3] mt-4 text-[14px]'>The Bitcoin price is trading near its highest levels in a month following back-to-back dovish updates from central banks in the United States and Japan.</p>
        </div>

        <div className='absolute mt-[520px] px-5 flex items-center gap-3'>
            <div className='w-[72px] h-[32px] flex items-center justify-center rounded-[6px] border-1 border-[#23262F] gap-2'>
              <FaEye className='text-[#B1B5C3]' />
              <p className='text-[#B1B5C3] text-[14px]'>21K</p>
            </div>

            <div className='w-[72px] h-[32px] flex items-center justify-center rounded-[6px] border-1 border-[#23262F] gap-2 '>
               <CiHeart className='text-[#B1B5C3]' />
              <p className='text-[#B1B5C3] text-[14px]'>550</p>
            </div>

            <div className='w-[72px] h-[32px] flex items-center justify-center rounded-[6px] border-1 border-[#23262F] gap-2 '>
               <FaRegComment className='text-[#B1B5C3]' />
              <p className='text-[#B1B5C3] text-[14px]'>45</p>
            </div>

            <div className='bg-[#23262F] w-[40px] h-[31px] flex items-center justify-center ml-15 rounded-[6px] '>
                <BsShare className='text-[#B1B5C3]' />
            </div>

        </div>
    

      </div>

      {/* 3rd Post */}


           <div className='w-[392px] relative  h-[579px] flex flex-col   bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)] rounded-[16px]'>
        <Image src="/1.jpg" alt='picture' width={392} height={300} className='absolute h-[300px] blur-[5px] rounded-2xl object-cover'/>
         <div className='absolute bg-[#23262F] w-[84px] h-[84px] rounded-full flex items-center justify-center top-32 left-1/2 transform -translate-x-1/2 '>
            <HiOutlineMicrophone className='text-3xl text-[#FCFCFD]' />
            <Image src="/Frame 1261155547.svg" alt='logo' width={1000} height={80} className='absolute text-2xl  mt-40'/>
        </div>
        <div className='w-[450px]  flex items-center justify-between  absolute  mt-80 '>
            <div className='w-[181px] flex items-center gap-3 h-[42px] bg-[#23262F] rounded-[6px]'>
                <CiMicrophoneOn  className='text-[#FCFCFD] text-[18px] ml-3' />
                <p className='text-center text-[#FCFCFD] text-[15px] '>#Partnerships</p> 
                </div> 
         <div className='flex items-center  gap-3  px-3 h-[42px] rounded-[6px]'>
       <FaCalendarAlt className='text-[#FCFCFD] text-[13px]' />
      <input   type='text'  value='09 Sep, 2024' readOnly className='bg-transparent text-[#777E90] text-[13px] focus:outline-none' />
       </div>
          
        </div>

        <div className='absolute mt-[380px]  px-5'>
             <h3 className='text-[#FCFCFD]'>Why is Bitcoin price up today?</h3>
             <p className='text-[#B1B5C3] mt-4 text-[14px]'>The Bitcoin price is trading near its highest levels in a month following back-to-back dovish updates from central banks in the United States and Japan.</p>
        </div>

        <div className='absolute mt-[520px] px-5 flex items-center gap-3'>
            <div className='w-[72px] h-[32px] flex items-center justify-center rounded-[6px] border-1 border-[#23262F] gap-2'>
              <FaEye className='text-[#B1B5C3]' />
              <p className='text-[#B1B5C3] text-[14px]'>21K</p>
            </div>

            <div className='w-[72px] h-[32px] flex items-center justify-center rounded-[6px] border-1 border-[#23262F] gap-2 '>
               <CiHeart className='text-[#B1B5C3]' />
              <p className='text-[#B1B5C3] text-[14px]'>550</p>
            </div>

            <div className='w-[72px] h-[32px] flex items-center justify-center rounded-[6px] border-1 border-[#23262F] gap-2 '>
               <FaRegComment className='text-[#B1B5C3]' />
              <p className='text-[#B1B5C3] text-[14px]'>45</p>
            </div>

            <div className='bg-[#23262F] w-[40px] h-[31px] flex items-center justify-center ml-15 rounded-[6px] '>
                <BsShare className='text-[#B1B5C3]' />
            </div>

        </div>
    

      </div>

      {/* 4th Post */}

               <div className='w-[392px] relative  h-[579px] flex flex-col   bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)] rounded-[16px]'>
        <Image src="/Picture (2).svg" alt='picture' width={392} height={300} className='absolute h-[300px]  rounded-2xl object-cover'/>
       
        <div className='w-[450px]  flex items-center justify-between  absolute  mt-80 '>
            <div className='w-[181px] flex items-center gap-3 h-[42px] bg-[#23262F] rounded-[6px]'>
                <HiOutlineBookOpen   className='text-[#FCFCFD] text-[18px] ml-3' />
                <p className='text-center text-[#FCFCFD] text-[15px] '>#Announcements</p> 
                </div> 
         <div className='flex items-center  gap-3  px-3 h-[42px] rounded-[6px]'>
       <FaCalendarAlt className='text-[#FCFCFD] text-[13px]' />
      <input   type='text'  value='09 Sep, 2024' readOnly className='bg-transparent text-[#777E90] text-[13px] focus:outline-none' />
       </div>
          
        </div>

        <div className='absolute mt-[380px]  px-5'>
             <h3 className='text-[#FCFCFD]'>Why is Bitcoin price up today?</h3>
             <p className='text-[#B1B5C3] mt-4 text-[14px]'>The Bitcoin price is trading near its highest levels in a month following back-to-back dovish updates from central banks in the United States and Japan.</p>
        </div>

        <div className='absolute mt-[520px] px-5 flex items-center gap-3'>
            <div className='w-[72px] h-[32px] flex items-center justify-center rounded-[6px] border-1 border-[#23262F] gap-2'>
              <FaEye className='text-[#B1B5C3]' />
              <p className='text-[#B1B5C3] text-[14px]'>21K</p>
            </div>

            <div className='w-[72px] h-[32px] flex items-center justify-center rounded-[6px] border-1 border-[#23262F] gap-2 '>
               <CiHeart className='text-[#B1B5C3]' />
              <p className='text-[#B1B5C3] text-[14px]'>550</p>
            </div>

            <div className='w-[72px] h-[32px] flex items-center justify-center rounded-[6px] border-1 border-[#23262F] gap-2 '>
               <FaRegComment className='text-[#B1B5C3]' />
              <p className='text-[#B1B5C3] text-[14px]'>45</p>
            </div>

            <div className='bg-[#23262F] w-[40px] h-[31px] flex items-center justify-center ml-15 rounded-[6px] '>
                <BsShare className='text-[#B1B5C3]' />
            </div>

        </div>
    

      </div>

      {/* 5th Post */}
            <div className='w-[392px] relative  h-[579px] flex flex-col   bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)] rounded-[16px]'>
        <Image src="/5.png" alt='picture' width={392} height={300} className='absolute h-[300px] blur-[2px]  rounded-2xl object-cover'/>
       <div className='w-[84px] h-[84px] rounded-full flex items-center justify-center absolute top-32 left-1/2 transform -translate-x-1/2
       bg-[#23262F]'>
            <CiPlay1 className='text-[#FCFCFD] text-5xl'/>
       </div>
        <div className='w-[450px]  flex items-center justify-between  absolute  mt-80 '>
            <div className='w-[94px] flex items-center gap-3 h-[42px] bg-[#23262F] rounded-[6px]'>
                <CiVideoOn    className='text-[#FCFCFD] text-[18px] ml-3' />
                <p className='text-center text-[#FCFCFD] text-[15px] '>#News</p> 
                </div> 
         <div className='flex items-center  gap-3  px-3 h-[42px] rounded-[6px]'>
       <FaCalendarAlt className='text-[#FCFCFD] text-[13px]' />
      <input   type='text'  value='09 Sep, 2024' readOnly className='bg-transparent text-[#777E90] text-[13px] focus:outline-none' />
       </div>
          
        </div>

        <div className='absolute mt-[380px]  px-5'>
             <h3 className='text-[#FCFCFD]'>Why is Bitcoin price up today?</h3>
             <p className='text-[#B1B5C3] mt-4 text-[14px]'>The Bitcoin price is trading near its highest levels in a month following back-to-back dovish updates from central banks in the United States and Japan.</p>
        </div>

        <div className='absolute mt-[520px] px-5 flex items-center gap-3'>
            <div className='w-[72px] h-[32px] flex items-center justify-center rounded-[6px] border-1 border-[#23262F] gap-2'>
              <FaEye className='text-[#B1B5C3]' />
              <p className='text-[#B1B5C3] text-[14px]'>21K</p>
            </div>

            <div className='w-[72px] h-[32px] flex items-center justify-center rounded-[6px] border-1 border-[#23262F] gap-2 '>
               <CiHeart className='text-[#B1B5C3]' />
              <p className='text-[#B1B5C3] text-[14px]'>550</p>
            </div>

            <div className='w-[72px] h-[32px] flex items-center justify-center rounded-[6px] border-1 border-[#23262F] gap-2 '>
               <FaRegComment className='text-[#B1B5C3]' />
              <p className='text-[#B1B5C3] text-[14px]'>45</p>
            </div>

            <div className='bg-[#23262F] w-[40px] h-[31px] flex items-center justify-center ml-15 rounded-[6px] '>
                <BsShare className='text-[#B1B5C3]' />
            </div>

        </div>
    

      </div>

        {/* Add more posts as needed */}
           <div className='w-[392px] relative  h-[579px] flex flex-col   bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)] rounded-[16px]'>
        <Image src="/7.jpg" alt='picture' width={392} height={300} className='absolute h-[300px]   rounded-2xl object-cover'/>
       
        <div className='w-[450px]  flex items-center justify-between  absolute  mt-80 '>
            <div className='w-[181px] flex items-center gap-3 h-[42px] bg-[#23262F] rounded-[6px]'>
                <HiOutlineBookOpen  className='text-[#FCFCFD] text-[18px] ml-3' />
                <p className='text-center text-[#FCFCFD] text-[15px] '>#Announcements</p> 
                </div> 
         <div className='flex items-center  gap-3  px-3 h-[42px] rounded-[6px]'>
       <FaCalendarAlt className='text-[#FCFCFD] text-[13px]' />
      <input   type='text'  value='09 Sep, 2024' readOnly className='bg-transparent text-[#777E90] text-[13px] focus:outline-none' />
       </div>
          
        </div>

        <div className='absolute mt-[380px]  px-5'>
             <h3 className='text-[#FCFCFD]'>Why is Bitcoin price up today?</h3>
             <p className='text-[#B1B5C3] mt-4 text-[14px]'>The Bitcoin price is trading near its highest levels in a month following back-to-back dovish updates from central banks in the United States and Japan.</p>
        </div>

        <div className='absolute mt-[520px] px-5 flex items-center gap-3'>
            <div className='w-[72px] h-[32px] flex items-center justify-center rounded-[6px] border-1 border-[#23262F] gap-2'>
              <FaEye className='text-[#B1B5C3]' />
              <p className='text-[#B1B5C3] text-[14px]'>21K</p>
            </div>

            <div className='w-[72px] h-[32px] flex items-center justify-center rounded-[6px] border-1 border-[#23262F] gap-2 '>
               <CiHeart className='text-[#B1B5C3]' />
              <p className='text-[#B1B5C3] text-[14px]'>550</p>
            </div>

            <div className='w-[72px] h-[32px] flex items-center justify-center rounded-[6px] border-1 border-[#23262F] gap-2 '>
               <FaRegComment className='text-[#B1B5C3]' />
              <p className='text-[#B1B5C3] text-[14px]'>45</p>
            </div>

            <div className='bg-[#23262F] w-[40px] h-[31px] flex items-center justify-center ml-15 rounded-[6px] '>
                <BsShare className='text-[#B1B5C3]' />
            </div>

        </div>
    

      </div>



       
    </div>
   </div>
  )
}

export default PostsSection

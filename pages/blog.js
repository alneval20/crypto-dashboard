import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiBookOpen } from "react-icons/fi";
import { CiVideoOn } from "react-icons/ci";
import { MdOutlinePodcasts } from "react-icons/md";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import TopicSection from "./Blog/TopicSection";
import Posts from "./Blog/Posts";
import Hashtags from "./Blog/Hashtags";
import PostsSection from "./Blog/PostsSection";
import Pagination from "./Blog/Pagination";


function Blog() {
  return (
    <div className="flex flex-col items-center bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)] min-h-screen w-full overflow-hidden">
      
      {/* Search and Buttons */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between sm:px-16 px-4 pt-10 gap-6 relative">
        {/* Search Bar */}
        <div className="relative sm:w-[370px] w-full">
          <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[18px] text-[#777E90]" />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-[45px] bg-[#23262F] rounded-[8px] pl-10 text-[#777E90] focus:outline-none text-[16px]"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-center sm:justify-end">
          <button className="w-[135px] h-[45px] bg-[#23262F] rounded-[8px] text-[#F4F5F6] font-bold flex items-center justify-center gap-2">
            <FiBookOpen className="text-[18px]" /> Articles
          </button>
          <button className="w-[135px] h-[45px] bg-[#23262F] rounded-[8px] text-[#F4F5F6] font-bold flex items-center justify-center gap-2">
            <CiVideoOn className="text-[18px]" /> Videos
          </button>
          <button className="w-[135px] h-[45px] bg-[#23262F] rounded-[8px] text-[#F4F5F6] font-bold flex items-center justify-center gap-2">
            <MdOutlinePodcasts className="text-[18px]" /> Podcasts
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full max-w-[1352px] mt-10 px-4">
        <Image
          src="/logo1.jpg"
          alt="logo"
          width={1352}
          height={520}
          className="w-full h-auto rounded-lg"
        />

        {/* Left/Right buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button className="w-[32px] h-[32px] bg-[#23262F] flex items-center justify-center ">
            <FaAngleLeft className="text-[#F4F5F6]" />
          </button>
          <button className="w-[32px] h-[32px] bg-[#23262F] flex items-center justify-center ">
            <FaAngleRight className="text-[#F4F5F6]" />
          </button>
        </div>

        {/* Text Overlay */}
        <div className="absolute sm:bottom-0 bottom-none  w-full bg-[#18191DB2] sm:p-4 p-0 rounded-b-lg">
          <h3 className="text-[12px] sm:text-[26px] text-[16px] font-bold text-[#FCFCFD]">
            Why is Bitcoin price up today?
          </h3>
          <p className="text-[#B1B5C3] text-[10px] sm:text-[18px] mt-2 tracking-wide">
            The Bitcoin price is trading near its highest levels in a month following back-to-back dovish updates from central banks in the
            United<br></br> States and Japan.
          </p>

          {/* Indicators */}
          <div className="flex justify-end items-center gap-2 mt-3 ">
              <div className="w-[32px] h-[8px] bg-[#1A80E6] rounded-[8px]" />
            <div className="w-[12px] h-[8px] bg-[#FCFCFD] rounded-[8px]" />
            <div className="w-[12px] h-[8px] bg-[#FCFCFD] rounded-[8px]" />
            <div className="w-[12px] h-[8px] bg-[#FCFCFD] rounded-[8px]" />
          
          </div>
        </div>
      </div>
      <TopicSection/>
      <Posts/>
      <Hashtags/>
      <PostsSection/>
      <Pagination/>
      
    </div>
  );
}

export default Blog;

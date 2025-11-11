import Image from 'next/image'
import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaTwitter, FaInstagram, FaLinkedin, FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full sm:flex flex-col hidden  items-center bg-[#18191D]">
      
      {/* Üst Kısım */}
      <div className="w-full flex flex-col justify-between sm:flex-row h-auto sm:h-[200px] gap-10 sm:gap-20 bg-[#18191D] border-t border-[#1C1E24] px-6 sm:px-20 py-10">
        
        {/* Logo ve Sosyal Medya */}
        <div className="flex sm:flex-col flex-wrap items-start gap-5 sm:ml-40 ">
          <Image src="/logo.svg" alt="logo" width={80} height={58} />
          <h2 className="text-[#1A80E6] text-[26px] font-bold sm:ml-0 ml-5">FalconX</h2>
          <p className="text-[#E6E8EC] text-[14px]">Trade smarter, Grow faster</p>
          <div className="flex gap-3 mt-5">
            <CiFacebook className="text-2xl text-[#777E90]" />
            <FaTwitter className="text-2xl text-[#777E90]" />
            <FaInstagram className="text-2xl text-[#777E90]" />
            <FaLinkedin className="text-2xl text-[#777E90]" />
          </div>
        </div>

        {/* Footer Link Grupları */}
        <div className="flex flex-wrap justify-start sm:justify-between w-full sm:w-auto gap-20 sm:ml-0 ml-5">
          
          {[
            {
              title: "Explore",
              links: ["Markets", "Spot", "Join FalconX"]
            },
            {
              title: "Blog",
              links: ["Articles", "Videos", "Podcasts"]
            },
            {
              title: "Support",
              links: ["Customer Support", "Tickets", "FAQs"]
            },
            {
              title: "About us",
              links: ["About FalconX", "Careers", "Contact Us"]
            },
            {
              title: "Legal",
              links: ["Privacy Policy", "User Agreement", "Cookie Policy"]
            }
          ].map((col, i) => (
            <div key={i} className="flex flex-col">
              <h4 className="text-[#E6E8EC] font-bold tracking-wide">{col.title}</h4>
              <div className="flex flex-col mt-5 gap-3 text-[#B1B5C3] text-sm">
                {col.links.map((link, j) => (
                  <p key={j}>{link}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alt Çizgi */}
      <div className="w-full border-t border-[#23262F]"></div>

      {/* Copyright */}
      <div className="w-full h-[60px] bg-[#18191D] flex items-center justify-center gap-2">
        <FaRegCopyright className="text-[#777E90]" />
        <p className="text-[#777E90] text-[12px]">2024 FalconX. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer



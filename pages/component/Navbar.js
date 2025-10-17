import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";
import { MdLanguage } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import SearchModal from './SearchModal';
import LanguageModal from './LanguageModal';
import CrediCartModal from './CrediCartModal';
import OutlineModal from './OutlineModal';
import AvatarModal from './AvatarModal';

function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLanguage, setIsLanguage] = useState(false);
  const [isCrediCardOpen, setIsCrediCardOpen] = useState(false);
  const [isOutline, setIsOutline] = useState(false);
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);

  return (
    <div className='w-full z-50 relative h-[128px] bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)] border-[#23262F] shadow-md shadow-[#141416]'>
      <div className='bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)] backdrop-blur-lg shadow-sm sm:h-[80px] h-[70px] sm:w-full w-[90%] flex items-center border border-[#2A2E37]/40 rounded-[16px] absolute mt-6 sm:justify-between justify-between px-4 sm:px-6'>

        <div className='flex sm:items-center items-start gap-3'>
          <Image src="/logo.svg" alt='logo' width={51} height={28} />
          <h1 className='text-[#1A80E6] font-bold tracking-normal sm:text-[24px] text-[14px]'>FalconX</h1>
          <ul className='text-white sm:flex hidden items-center gap-9 ml-3 text-[18px] font-sans'>
            <li><Link href="/markets">Markets</Link></li>
            <li><Link href="/spot">Spot</Link></li>
            <li><Link className='text-[#4899EB]' href="/support">Support</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>

        <div className='sm:flex hidden items-center gap-4 '>

          {/* Search */}
          <div className={`w-[30px] h-[30px] rounded-lg flex items-center justify-center relative ${isSearchOpen ? 'bg-[#1A80E6]' : 'bg-[#1D2331]'}`}>
            <CiSearch
              className='text-white text-[17px] cursor-pointer'
              onClick={() => {
                setIsSearchOpen(prev => {
                  const next = !prev;
                  if (next) {
                    setIsLanguage(false);
                    setIsOutline(false);
                    setIsCrediCardOpen(false);
                    setIsAvatarOpen(false);
                  }
                  return next;
                });
              }}
            />
            {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}
          </div>

          {/* Language */}
          <div className={`w-[30px] h-[30px] rounded-lg flex items-center justify-center relative ${isLanguage ? 'bg-[#1A80E6]' : 'bg-[#1D2331]'}`}>
            <MdLanguage
              className='text-white text-[18px] cursor-pointer'
              onClick={() => {
                setIsLanguage(prev => {
                  const next = !prev;
                  if (next) {
                    setIsSearchOpen(false);
                    setIsOutline(false);
                    setIsCrediCardOpen(false);
                    setIsAvatarOpen(false);
                  }
                  return next;
                });
              }}
            />
            {isLanguage && <LanguageModal onClose={() => setIsLanguage(false)} />}
          </div>

          {/* Credit Card */}
          <div className={`w-[30px] h-[30px] rounded-lg flex items-center justify-center relative ${isCrediCardOpen ? 'bg-[#1A80E6]' : 'bg-[#1D2331]'}`}>
            <CiCreditCard1
              className='text-white text-[18px] cursor-pointer'
              onClick={() => {
                setIsCrediCardOpen(prev => {
                  const next = !prev;
                  if (next) {
                    setIsSearchOpen(false);
                    setIsLanguage(false);
                    setIsOutline(false);
                    setIsAvatarOpen(false);
                  }
                  return next;
                });
              }}
            />
            {isCrediCardOpen && <CrediCartModal onClose={() => setIsCrediCardOpen(false)} />}
          </div>

          {/* Notifications */}
          <div className={`w-[30px] h-[30px] rounded-lg flex items-center justify-center relative ${isOutline ? 'bg-[#1A80E6]' : 'bg-[#1D2331]'}`}>
            <IoIosNotificationsOutline
              className="text-[18px] text-white cursor-pointer"
              onClick={() => {
                setIsOutline(prev => {
                  const next = !prev;
                  if (next) {
                    setIsSearchOpen(false);
                    setIsLanguage(false);
                    setIsCrediCardOpen(false);
                    setIsAvatarOpen(false);
                  }
                  return next;
                });
              }}
            />
            {isOutline && <OutlineModal onClose={() => setIsOutline(false)} />}
            <span className="absolute top-0 right-0 w-[5px] h-[5px] bg-red-600 rounded-full"></span>
          </div>

          {/* Avatar */}
          <div className={`w-[38px] h-[38px] rounded-full flex items-center justify-center relative`}>
            <Image
              src="/Avatar.svg"
              alt='avatar'
              width={38}
              height={38}
              className='cursor-pointer'
              onClick={() => {
                setIsAvatarOpen(prev => {
                  const next = !prev;
                  if (next) {
                    setIsSearchOpen(false);
                    setIsLanguage(false);
                    setIsOutline(false);
                    setIsCrediCardOpen(false);
                  }
                  return next;
                });
              }}
            />
            {isAvatarOpen && (
              <AvatarModal
                onClose={() => setIsAvatarOpen(false)}
              />
            )}
          </div>

        </div>

        <div className='sm:hidden absolute top-6 right-2'>
          <IoMdMenu className='text-white text-[24px] cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Navbar


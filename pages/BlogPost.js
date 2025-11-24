import React, { Children } from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FaRegEye } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { blogItem } from './BlogContent';
import { blogText } from './BlogText';
import BlogHashtags from './BlogHashtags';
import { blogContent } from './BlogTextContent';



function BlogPost() {

  const comment = [
      {
        avatar: "/Avatar (1).svg",
        name: "Merlyn Blossom",
        date: "10 Oct 2024",
        text: "This sounds interesting! How did the merger of SocialFi and trading play out at the Pulsewave event? Any particular insights or new trends mentioned?"
      },
      {
        avatar: "/Avatar (2).svg",
        name: "Lucas Siman",
        date: "10 Oct 2024",
        text: "The article covers how SocialFi and trading came together at the Pulsewave event, focusing on new community-driven investment trends. Worth checking out!"
      },
      {
        avatar: "/Avatar (3).svg",
        name: "Kizzie Malcolm",
        date: "09 Oct 2024",
        text: "Great post! I found your explanation to be really insightful and thorough. Thank you for sharing such valuable information. Looking forward to your next articles!"
      }
  ]


  const router = useRouter();


  const goBack = () => {
     if(window.history.length > 1){
      router.back()
    }else{
      router.push("/blog");
    }
  }


  return (
    <div className='flex flex-col gap-5 w-full min-h-screen items-center bg-[radial-gradient(circle_at_center,_#2F3644_0%,_#1A202E_60%,_#000000_100%)] justify-center '>
      <div className='flex flex-col w-[1000px]  bg-[#18191D] rounded-2xl px-10 py-10 '>
        <button onClick={goBack} className='w-[40px] h-[40px] bg-[#23262F] flex items-center  justify-center rounded-[8px]  absolute left-20 cursor-pointer '>
            <FaAngleLeft className='text-[#FCFCFD] '/>
        </button>

        <div className='w-[940px]  flex items-center justify-between '>
            <div className='flex items-center gap-3 '>
            <FaRegCalendarAlt className='text-[#B1B5C3] text-[15px]'/>
            <span className='text-[#B1B5C3] text-[14px] font-serif'>09 Sep, 2024</span>
            </div>
            <div className='w-[161px] h-[32px] bg-[#23262F] flex items-center justify-center gap-3 rounded-[6px]'>
                <IoBookOutline className='text-[#F4F5F6]'/>
                <span className='text-[#FCFCFD] text-[14px]'>#Announcements</span>
            </div>
        </div>

        <div className='w-[955px] mt-5 '>
            <h2 className='text-[#FCFCFD] font-bold text-[30px] leading-10 tracking-normal'>SocialFi and trading merge at Pulsewave private event: Key highlights from Token2049</h2>
        </div>

        <div className='w-[955ox] mt-5 '>
            <p className='text-[#B1B5C3] text-[16px]'>As Token2049 Singapore launched with a loaded schedule of side events, an exclusive yacht party became the hotspot for lively discussions on the future of Web3-powered SocialFi innovation.</p>
        </div>

        <div className='w-[955px] flex items-center justify-between mt-10'>
         <div className='flex items-center gap-5'>
           <Image src="/Ellipse 53.svg" alt='avatar' width={48} height={48} />
           <span className='text-[#FCFCFD] text-[17px]'>Justin Keskin</span>
         </div>

         <div className='w-[206px] flex items-center justify-center gap-4 h-[32px] border-[1px] border-[#23262F] rounded-[8px] px-5'> 
           <div className='flex gap-2'>
             <FaRegEye className='text-[#B1B5C3] items-center'/>
            <span className='text-[#B1B5C3] text-[12px]'>21K</span>
           </div>
           <div className='flex gap-2 items-center'>
             <CiHeart className='text-[#B1B2C3] '/>
            <span className='text-[#B1B5C3] text-[12px]'>550</span>
           </div>
            <div className='flex gap-2 items-center'>
              <FaRegComment className='text-[#B1B5C3] text-[12px]' />
            <span className='text-[#B1B5C3] text-[12px]'>1</span>
            </div>
         </div>
        </div>

        <div className='mt-10'>
          <Image src="/cryptocurrency-coins-close-up 1.svg" alt='ımage' width={952} height={460} className='rounded-[8px]'/>
        </div>

        <div className='flex flex-col gap-5 mx-auto px-6 text-[#FCFCFD] text-[18px] leading-7 mt-10'>
        {blogItem.map((item, i) => (
          <p key={i}  >
            {item}
          </p>
        ))}
        </div>

          <div>
            <Image src="/Photo.svg" alt='photo' width={900} height={48} className='mt-5 rounded-[8px]' />
          </div>

          <div className= 'flex  flex-col gap-5 mt-10 px-6 text-[#FCFCFD] text-[18px] leading-7 w-full'>
          {blogContent.map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{__html: item}} />
          ))}
          </div>

          <div className='mt-5 px-6'>
            <h3 className='text-[#FCFCFD] text-[32px] font-bold'>Merging trading with social interactions</h3>
          </div>

          <div className='flex flex-col gap-5 mx-auto px-6 text-[#FCFCFD] text-[18px] leading-7 mt-6'>
            {blogText.map((item, i) => (
               <p
      key={i}
      dangerouslySetInnerHTML={{ __html: item }}
    />
            ))}
          </div>

          <BlogHashtags/>
      </div>

      <div className='w-[1000px]  mb-5 flex flex-col rounded-[16px] bg-[#18191D]'>
        <div className='w-full px-10 py-10 flex items-start justify-between'>
            <div className='flex '>
              <h2 className='text-[#FCFCFD] text-[18px] font-bold'>Comments (3)</h2>
            </div>
            <div>
              <button className='text-[#FCFCFD] w-[156px] h-[40px] bg-[#1A80E6] rounded-[8px]'>Post Comment</button>
            </div>
        </div>

       <div className='flex flex-col'>
  {comment.map((item, index) => (
    <div key={index} className='flex gap-3  pb-6 px-10'>

      <Image
        src={item.avatar}
        alt={item.name}
        width={40}
        height={40}
       
      />

      <div className='flex flex-col w-full '>

        <div className='flex items-start justify-between w-full  '>

          <div className='flex flex-col'>
            <p className='text-[#FCFCFD] text-[16px]'>
              {item.name}
            </p>
            <span className='text-[#B1B5C3] text-[12px]'>
              {item.date}
            </span>
          </div>
    <button className="text-blue-400 text-sm mt-1">Reply</button>

        </div>

        <p className='text-[#E6E8EC] text-[16px] leading-6 mt-2 '>
          {item.text}
        </p>

      </div>

    </div>
  ))}
</div>

      

      </div>
    </div>
  )
}

export default BlogPost

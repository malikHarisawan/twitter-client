import React from 'react'
import Image from "next/image";
import { FiMessageCircle } from "react-icons/fi";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";

const FeedCard = () => {
    return (
        <div className='border-b-0 border-b-gray-600'>

            <div className='grid grid-cols-12 border-b-[1px] border-b-gray-700 '>
                <div className='col-span-2 px-2 '>
                    <img className='rounded-full'
                        src="https://pbs.twimg.com/profile_images/1679470193498820609/Xod9OTpE_400x400.jpg"
                        alt="Description of the image"
                        width={50}
                        height={50}
                    />            </div>
                <div className='col-span-10'>
                  <h1 className='text-xl'>Haris malik</h1>
                  <p>I am ready for any debate and scrutiny. Mian Nawaz Sharif can debate with me in  Gambat,  Khairpur. He can come and visit the Gambat Institute of Medical Sciences, a hospital that surpasses any hospital in Punjab, and where all treatment is absolutely free. Despite being Prime…</p>
                  <div className='flex justify-evenly items-center my-4 px-4 text-xl'>
                    <div className='hover:text-sky-500 cursor-pointer '>
                        <FiMessageCircle/>
                    </div>
                    <div  className='hover:text-green-400 cursor-pointer '>
                        <FaRetweet/>
                    </div>
                    <div  className='hover:text-red-600 cursor-pointer '>
                        <FaRegHeart/>
                    </div>
                    <div  className='hover:text-sky-600 cursor-pointer '>
                        <MdOutlineFileUpload/>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default FeedCard
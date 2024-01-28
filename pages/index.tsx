import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { MdHomeFilled } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import FeedCard from "@/components/FeedCard";

interface Xicons{
  title: string;
  icon:React.ReactNode
}

const sidebarmenu: Xicons[]=[{
  title:"Home",
  icon: <MdHomeFilled/>
},
{
  title:"Explore",
  icon: <CiSearch/>
},
{
  title:"Notifications",
  icon: <CiBellOn/>
},
{
  title:"Message",
  icon: <MdOutlineEmail/>
},
{
  title:"Profile",
  icon: <FaRegUser/>
}
]
export default function Home() {
  return (
   <>
   <div className="grid grid-cols-4 h-screen w-screen px-56">

    <div className=" col-span-1 py-8 pr-4 ">
      <div  className="text-3xl hover:bg-slate-900 rounded-full p-4 h-fit w-fit cursor-pointer transition-all ">
      <FaXTwitter/>
      </div>
      <div className="mt-2 text-2xl ">
        <ul className="">
          {sidebarmenu.map((item)=>(
            <li className="flex items-center  gap-3 mt-2 hover:bg-slate-900 rounded-full px-4 py-2 cursor-pointer transition-all " key={item.title}><span>{item.icon}</span> <span>{item.title}</span></li>
          ))}
        </ul>
        <button className="bg-sky-500	px-4 py-2 mt-6 w-full rounded-full hover:bg-sky-600">Post</button>
      </div>
    </div>
    <div className="col-span-2 border-r-[1px] border-r-gray-600 border-l-[1px] border-l-gray-600 h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden">
      
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>


    </div>
    <div className="col-span-1">Right</div>

   </div>
   </>
  );
}

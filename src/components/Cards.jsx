import React from 'react';
import { FiFileMinus } from "react-icons/fi";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Cards({data,reference}) {
  return (
    <motion.div 
    drag 
    dragConstraints={reference} 
    whileDrag={{scale: 1.1}} 
    dragElastic={0.2} 
    dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
    className='relative flex-shrink-0 w-48 h-64 bg-zinc-700 rounded-[50px] text-white px-8 py-10 overflow-hidden'
    >
        <FiFileMinus />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0 '>
          <div className='flex items-center justify-between px-8 py-3 mb-3'>
            <h5>{data.filesize}</h5>
            <span className='w-7 h-7 bg-zinc-500 rounded-full flex items-center justify-center'>
              {data.close ? <IoClose /> : <LuDownload size=".7em" color='#fff'/> }
            </span>
          </div>
          {
            data.tag.isOpen && (
              <div className={`tag w-full py-4 bg-${data.tag.tagColor}-600 flex items-center justify-center`}>
              <h3 className='text-sm font-semibold '>{data.tag.tagTitle}</h3>
              </div>
            )}
          
        </div>
    </motion.div>
  )
}

export default Cards

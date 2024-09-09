import React, { useRef } from 'react'
import Cards from './Cards'



function Foreground() {

  const ref = useRef(null);
  const data = [
    {
      desc: "Here is a new assignment for you. Please download it.",
      filesize: ".10mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "sky"}
    },
    {
      desc: "Here are those files which are working in progress .",
      filesize: ".20mb",
      close: true,
      tag: {isOpen: false, tagTitle: "Download Now", tagColor: "blue"}
    },
    {
      desc: "Here, you can share your files with your team members.",
      filesize: ".40mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Share", tagColor: "pink"}
    },
    {
      desc: "If an assignment is done. Kindly submit here.",
      filesize: ".50mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Submit", tagColor: "green"}
    },
    {
      desc: "If you are getting any problem then reach out here.",
      filesize: "",
      close: true,
      tag: {isOpen: true, tagTitle: "Help", tagColor: "red"}
    }
  ];
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5 '>
      {data.map((item, index)=>(
      <Cards data={item} reference={ref}/>  
    ))}
    </div>
  )
}

export default Foreground
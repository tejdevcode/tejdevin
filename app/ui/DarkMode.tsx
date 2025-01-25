"use client"

import { useState, useEffect } from 'react'
import { MdOutlineLightMode } from "react-icons/md";
import { RiMoonClearFill } from "react-icons/ri";

const DarkMode = () => {
   const [darkmode, setDarkmode] = useState(false);
   useEffect(() => {
      if (darkmode) {
         document.body.classList.add("dark");
      } else {
         document.body.classList.remove("dark");
      }
   }, [darkmode]);
   return (
      <button onClick={() => setDarkmode(!darkmode)} className='text-2xl ml-3 inline-block'>
         {darkmode ? <RiMoonClearFill /> : <MdOutlineLightMode />}
      </button>
   )
}

export default DarkMode
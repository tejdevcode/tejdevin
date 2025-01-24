
"use client"
import pic from "../../../public/WebsiteDevelopment.png";

import { FaLinkedin, FaGithub, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { FaSquareXTwitter, FaHtml5 } from "react-icons/fa6";

/* import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6"; */

/* import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6"; */
import { SiNextdotjs } from "react-icons/si"
import { BiLogoTypescript } from "react-icons/bi";



import { ReactTyped } from "react-typed";

import Image from "next/image";
/* console.log(pic.src) */
const Banner = () => {
   return (
      <div id="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20" >
         <div className="flex flex-col md:flex-row">
            <div className="md:w-[55%] mt-12 md:mt-18 space-y-2 order-2 md:order-1 ">
               <span className="text-xl">Welcome In My Feed</span>
               <div className="flex space-x-1 text-2xl md:text-4xl">
                  <h1>Hi👋, I'm a&nbsp;
                     {/* <span >Developer</span> */} <br className="sm:hidden" />
                     <ReactTyped
                        className="text-green-700 font-bold"
                        strings={["Web ", "FrontEnd ", "ReactJs ", "NextJs ", "HTML "]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop={true}
                     />
                     Developer
                  </h1>
               </div>
               <br />
               <ul className="text-base md:text-md text-justify space-y-2 ">
                  <li>⚡ Front-end dev with extensive experience working across a diverse tech stack.</li>
                  <li>⚡ I specialize in building dynamic and responsive web applications using HTML, CSS, JS, Jquery, TS, SASS.</li>
                  <li>⚡ I have a strong foundation in web design with expertise in popular frameworks like React, NextJS, Bootstrap, TailwindCSS, and FoundationCSS.</li>
                  <li>⚡ Additionally, I am proficient in content management through WordPress front-end development, version control system Git and Github and also have a keen eye for design using tools like Photoshop, XD, and Figma. </li>
                  <li>⚡ My focus is on creating user-friendly, Mobile Responsive, visually appealing, and high-performance websites.</li>


               </ul>
               <br />
               {/* social media icons */}
               <div className="lg:flex flex-col items-center md:flex-row justify-between space-y-6 lg:space-y-0">
                  <div className="space-y-2">
                     <h1 className="font-bold text-center ">Available on</h1>
                     <ul className="flex space-x-5 justify-center">
                        <li>
                           <a href="https://github.com/tejdevcode/" target="_blank">
                              <FaGithub className="text-2xl cursor-pointer" />
                           </a>
                        </li>
                        <li>
                           <a href="https://linkedin.com/in/tej-radadiya" target="_blank">
                              <FaLinkedin className="text-2xl cursor-pointer hover:text-cyan-600 transition-all" />
                           </a>
                        </li>
                        <li>
                           <a href="https://x.com/tejrdev" target="_blank">
                              <FaSquareXTwitter className="text-2xl cursor-pointer" />
                           </a>
                        </li>

                        {/* 
                        <li>
                           <a href="https://t.me/" target="_blank">
                              <FaTelegram className="text-2xl cursor-pointer" />
                           </a>
                        </li> */}
                     </ul>
                  </div>
                  <div className=" space-y-2">
                     <h1 className="font-bold text-center">Currently working on</h1>
                     <div className="flex space-x-5 justify-center">
                        <a href="https://react.dev/" target="_blank">
                           <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer hover:text-cyan-600 transition-all" title="ReactJs" />
                        </a>
                        <a href="https://nextjs.org/" target="_blank">
                           <SiNextdotjs className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer hover:text-black transition-all" title="NextJs" />
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                           <FaJsSquare className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer hover:text-yellow-400 transition-all" title="Javascript" />
                        </a>
                        <a href="https://www.typescriptlang.org/" target="_blank">
                           <BiLogoTypescript className="text-3xl md:text-4xl hover:scale-110 duration-200 cursor-pointer -mt-[1px] hover:text-sky-600 transition-all" title="Typescript" />
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
                           <FaHtml5 className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer hover:text-red-600 transition-all" title="HTML" />
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                           <FaCss3Alt className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer hover:text-sky-600 transition-all" title="CSS" />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="md:w-[45%] md:ml-10 md:mt-8 mt-8 order-1 mx-auto">
               <Image src={pic.src} className="" alt="" width={500} height={340} />
            </div>
         </div>
      </div >
   )
}

export default Banner
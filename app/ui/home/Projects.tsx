import Image from "next/image"
import teahouse from "@/public/projects/mini/teahousethumb.jpg";
import react_gardner from "@/public/projects/mini/reactgardner.jpg";
import tailwind from "@/public/projects/mini/tailwindburger.jpg";
import wpacfpro from "@/public/projects/mini/acfwpthumb.jpg";
import nextdeshboard from "@/public/projects/mini/deshboardnextjsthumb.jpg";
import sass from "@/public/projects/mini/sassbluetiqthumb.jpg";
import bootstrap from "@/public/projects/mini/bootstrapvibethumb.jpg";
import html from "@/public/projects/mini/carehtmlthumb.jpg";

import { FaGithub, FaCss3Alt, FaJsSquare, FaReact, FaGithubAlt, FaWordpress, FaSass, FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { SiNextdotjs, SiVercel, SiGraphql, SiTailwindcss, SiJquery, SiNetlify, SiPhp } from "react-icons/si"
import { BiLogoTypescript } from "react-icons/bi";


interface CardItem {
   id: number;
   logo: any;
   name?: string;
   url?: string;
   github?: string;
   codeurl?: string;
   tags?: string[];
   tachstack?: any[];

}
const Projects = () => {
   const cardItem: CardItem[] = [
      {
         id: 1,
         logo: teahouse,
         name: "Teahouse Next js Project",
         url: "https://nextjstea.vercel.app/",
         github: "https://github.com/tejdevcode/nextjstea",
         codeurl: "https://github1s.com/tejdevcode/nextjstea",
         tags: ['NextJS', 'ReactJS', 'AppRouter', 'HTML', 'CSS', 'Vercel', 'GitHub'],
         tachstack: [<SiNextdotjs />, <FaReact />, <FaHtml5 />, <FaCss3Alt />, <SiVercel />, <FaGithub />]
      },
      {
         id: 2,
         logo: react_gardner,
         name: "ReactGarden React js project",
         url: "https://reactwptype.netlify.app/",
         github: "https://github.com/tejdevcode/reactwptype",
         codeurl: "https://github1s.com/tejdevcode/reactwptype",
         tags: ['ReactJS', 'WordPress', 'WPGraphQL', 'WPACF', 'HTML', 'CSS', 'Netlify', 'GitHub'],
         tachstack: [<FaReact />, <BiLogoTypescript />, <FaWordpress />, <SiGraphql />, <FaHtml5 />, <FaCss3Alt />, <SiNetlify />]
      },
      {
         id: 3,
         logo: tailwind,
         name: "tailwindBurger tailwindcss project",
         url: "https://tejdevcode.github.io/tailwindspotlight/",
         github: "https://github.com/tejdevcode/tailwindspotlight",
         codeurl: "https://github1s.com/tejdevcode/tailwindspotlight",
         tags: ['TailwindCSS', 'HTML', 'CSS', 'Jquery', 'GitHub', 'GitHubPages'],
         tachstack: [<SiTailwindcss />, <FaHtml5 />, <FaCss3Alt />, <SiJquery />, <FaGithub />]
      },
      {
         id: 4,
         logo: wpacfpro,
         name: "wpacfpro wordpress acf project",
         url: "https://dev-wpacfpro.pantheonsite.io/",
         github: "https://github.com/tejdevcode/tezacfpwp",
         codeurl: "https://github1s.com/tejdevcode/tezacfpwp",
         tags: ['WordPress', 'WPACF', 'PHP', 'HTML', 'CSS', 'Jquery', 'pantheon'],
         tachstack: [<FaWordpress />, <SiPhp />, <FaHtml5 />, <FaCss3Alt />, <SiJquery />]
      },
      {
         id: 5,
         logo: nextdeshboard,
         name: "nextDeshboard nextjs15 project",
         url: "https://nextjsdashapp.vercel.app/",
         github: "https://github.com/tejdevcode/nextjsdashboard",
         codeurl: "https://github1s.com/tejdevcode/nextjsdashboard",
         tags: ['NextJS15', 'ReactJS', 'AppRouter', 'HTML', 'CSS', 'Vercel', ' NeonPostgres', 'GitHub'],
         tachstack: [<SiNextdotjs />, <FaReact />, <FaHtml5 />, <FaCss3Alt />, <SiVercel />, <FaGithub />]
      },
      {
         id: 6,
         logo: sass,
         name: "sass scss project",
         url: "https://tejdevcode.github.io/Blutiquegit/",
         github: "https://github.com/tejdevcode/Blutiquegit",
         codeurl: "https://github1s.com/tejdevcode/Blutiquegit",
         tags: ['SASS/SCSS', 'HTML', 'Jquery', 'GitHub', 'GitHubPages'],
         tachstack: [<FaSass />, <FaHtml5 />, <FaCss3Alt />, <SiJquery />, <FaGithub />]
      },
      {
         id: 7,
         logo: bootstrap,
         name: "bootstrap project",
         url: "https://tejdevcode.github.io/bootstrapvibe/",
         github: "https://github.com/tejdevcode/bootstrapvibe",
         codeurl: "https://github1s.com/tejdevcode/bootstrapvibe",
         tags: ['Bootstrap', 'SASS/SCSS', 'HTML', 'Jquery', 'GitHub', 'GitHubPages'],
         tachstack: [<FaBootstrap />, <FaSass />, <FaHtml5 />, <FaCss3Alt />, <SiJquery />, <FaGithub />]
      },
      {
         id: 8,
         logo: html,
         name: "html project",
         url: "https://tejdevcode.github.io/htmlproject/",
         github: "https://github.com/tejdevcode/htmlproject",
         codeurl: "https://github1s.com/tejdevcode/htmlproject",
         tags: ['HTML', 'CSS', 'Jquery', 'GitHub', 'GitHubPages'],
         tachstack: [<FaHtml5 />, <FaCss3Alt />, <SiJquery />, <FaGithub />]
      },
   ];
   return (
      <div
         id="Projects"
         className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10" >
         <div>
            <h2 className="text-3xl font-bold mb-5">Projects</h2>
            <div className="grid gap-1 my-5 auto-fill-[250px] ">
               {cardItem.map((item) => (
                  <div
                     className=" border bg-gray-100 dark:bg-slate-800 duration-300 p-1 relative group overflow-hidden dark:border-gray-500"
                     key={item?.id} >

                     <figure className="relative w-full pb-[87%] border border-gray-300 bg-white">
                        <Image src={item?.logo} className="w-full absolute object-cover" alt={item?.name ?? 'Projects'} />
                        <div className="techicon absolute bottom-1 sm:bottom-0 flex w-full justify-center">
                           {item?.tachstack?.map((tech, i) =>
                              <span key={i} className="text-lg bg-gray-100/80 text-black rounded-sm p-1 mr-[1px]">{tech}</span>
                           )}
                        </div>
                     </figure>

                     <div className="sm:absolute sm:-top-[100%] group-hover:top-1 z-10 transition-all duration-300 w-full sm:h-full sm:bg-black sm:bg-opacity-75 left-0">
                        {/* <div className="px-2 font-bold text-xl mb-2">{name}</div> 
                        <p className="px-2  text-white">
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>*/}
                        <ul className="text-center sm:mt-7 p-2 sm:p-4">
                           {item?.tags?.map((tag, i) =>
                              <li key={i} className="inline-block bg-slate-300 dark:bg-slate-700 sm:bg-white sm:dark:bg-slate-600 rounded-full px-2 m-1 text-sm">
                                 {tag === 'AppRouter' || tag === 'WPGraphQL' || tag === 'WPACF' || tag === 'GitHubPages'
                                    ? tag : <a href="#Experience">{tag} </a>}
                              </li>
                           )}
                        </ul>
                     </div>

                     <div className=" px-2 sm:py-4 flex justify-center sm:absolute sm:-bottom-36 sm:left-0 group-hover:bottom-0 transition-all duration-300 z-10 mx-auto w-full">
                        <a className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded m-1 leading-tight text-center"
                           href={item?.github}>
                           Source code
                        </a>
                        <a className="bg-green-500 hover:bg-green-700 text-white px-2 py-1 rounded m-1 "
                           href={item?.url} target="_blank">
                           SiteDemo
                        </a>
                        <a className=" text-black sm:text-white dark:text-slate-100 px-1 py-1 rounded mx-1 mt-2 text-xl"
                           href={item?.codeurl} target="_blank" title="Code">
                           <FaGithubAlt />
                        </a>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Projects
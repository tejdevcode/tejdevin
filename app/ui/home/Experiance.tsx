import Image from "next/image"
import html from "@/public/html5.svg";
import css from "@/public/css3_logo.svg";
import javascript from "@/public/javascript.svg";
import react from "@/public/react-icon.svg";
import nextjs from "@/public/nextjs.svg";
import typescript from "@/public/typescript_logo_2020.svg"
import jquery from "@/public/jquery_icon.svg";
import bootstrap from "@/public/bootstrap_logo.svg"
import tailwind from "@/public/tailwind_css_logo.svg"
import sass from "@/public/sass.svg"
import photoshop from "@/public/adobe_photoshop_cs6_icon.svg"
import git from "@/public/git_icon.svg"
import github from "@/public/github.svg"
import vercel from "@/public/vercellogo.svg"
import netlify from "@/public/netlify.svg"
import wordpress from "@/public/wordpress.svg"
import elementor from "@/public/elementor.svg"
import neon from "@/public/neon.svg"
import pantheon from "@/public/pantheon.svg"

function Experiance() {
   const frontendItem = [
      {
         id: 1,
         logo: html,
         name: "HTML",
         url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
      },
      {
         id: 2,
         logo: css,
         name: "CSS",
         url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
      },
      {
         id: 3,
         logo: javascript,
         name: "JavaScript",
         url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
      },
      {
         id: 4,
         logo: react,
         name: "ReactJs",
         url: 'https://react.dev/'
      },
      {
         id: 5,
         logo: nextjs,
         name: "NextJs",
         url: 'https://nextjs.org/'
      },
      {
         id: 6,
         logo: typescript,
         name: "Typescript",
         url: 'https://www.typescriptlang.org/'
      },
      {
         id: 7,
         logo: jquery,
         name: "jQuery",
         url: 'https://jquery.com/'
      },
      {
         id: 8,
         logo: bootstrap,
         name: "Bootstrap",
         url: 'https://getbootstrap.com/'
      },
      {
         id: 9,
         logo: tailwind,
         name: "Tailwind",
         url: 'https://tailwindcss.com/'
      },
      {
         id: 10,
         logo: sass,
         name: "sass",
         url: 'https://sass-lang.com/'
      },
      {
         id: 11,
         logo: photoshop,
         name: "photoshop",
      },

   ];
   const backendItem = [
      {
         id: 1,
         logo: vercel,
         name: "vercel nextjs",
         url: 'https://vercel.com/'
      },
      {
         id: 2,
         logo: github,
         name: "github",
         url: 'https://github.com/'
      },
      {
         id: 3,
         logo: git,
         name: "git",
         url: 'https://git-scm.com/'
      },
      {
         id: 4,
         logo: netlify,
         name: "netlify",
         url: 'https://www.netlify.com/'
      },
      {
         id: 5,
         logo: wordpress,
         name: "wordpress",
         url: 'https://wordpress.com/'
      },
      {
         id: 6,
         logo: elementor,
         name: "elementor (WP)",
         url: 'https://elementor.com/'
      },
      {
         id: 7,
         logo: neon,
         name: "Neon vercel postgres DB",
         url: 'https://neon.tech/'
      },
      {
         id: 8,
         logo: pantheon,
         name: "pantheon WP host server",
         url: 'https://pantheon.io/'
      },
   ];
   return (
      <div
         id="Experience"
         className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
         <div>
            <h2 className="text-3xl font-bold mb-5"> Skills & Technologies Experience</h2>
            <div className=" flex flex-wrap justify-between gap-6">
               <div className="techitem w-full md:w-[calc(50%-15px)]">
                  <h3 className="text-green-600 font-semibold text-xl mb-2">Frontend</h3>
                  <div className="grid auto-fill-[90px] gap-2 my-3">
                     {frontendItem?.map((item) => (
                        <div key={item?.id} >
                           <figure className={`flex flex-col items-center justify-center border-[2px] rounded-md size-24 shadow-md p-1  hover:scale-110 duration-300 mb-1 dark:bg-slate-700 dark:border-gray-400 w-full ${item?.url ? 'cursor-pointer' : ''}`}>
                              {item?.url ?
                                 <a href={item?.url} target="_blank">
                                    <Image src={item?.logo} className="w-[60px]" alt={`${item?.name} skill`} title={item?.name} />
                                 </a> :
                                 <Image src={item?.logo} className="w-[60px]" alt={`${item?.name} skill`} title={item?.name} />
                              }
                           </figure>
                           <div>
                              <h4 className="text-center capitaliz">{item?.name}</h4>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="techitem w-full md:w-[calc(50%-15px)]">
                  <h3 className="text-green-600 font-semibold text-xl mb-2">Backend</h3>
                  <div className="grid auto-fill-[90px] gap-2 my-3">
                     {backendItem?.map((item) => (
                        <div key={item?.id} >
                           <figure className={`flex flex-col items-center justify-center border-[2px] rounded-md size-24 shadow-md p-1 cursor-auto hover:scale-110 duration-300 mb-1 dark:bg-slate-700 dark:border-gray-400 w-full ${item?.url ? 'cursor-pointer' : ''}`}>
                              <a href={item?.url} target="_blank">
                                 <Image src={item?.logo} className="w-[60px]" alt={`${item?.name} skill`} title={item?.name} />
                              </a>
                           </figure>
                           <div>
                              <div className="text-center capitalize">{item?.name}</div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div >
   );
}

export default Experiance;

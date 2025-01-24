import Image from "next/image"
import teahouse from "@/public/projects/mini/teahousethumb.jpg";
import react_gardner from "@/public/projects/mini/reactGardner.jpg";
import tailwind from "@/public/projects/mini/tailwindBurger.jpg";
import wpacfpro from "@/public/projects/mini/acfwpthumb.jpg";
import nextdeshboard from "@/public/projects/mini/deshboardNextjsthumb.jpg";
import sass from "@/public/projects/mini/sassBluetiqthumb.jpg";
import bootstrap from "@/public/projects/mini/BootstrapVibethumb.jpg";
import html from "@/public/projects/mini/careHTMLthumb.jpg";

interface CardItem {
   id: number;
   logo: any;
   name?: string;
   url?: string;
   github?: string;
   tags?: string[];

}
const Projects = () => {
   const cardItem: CardItem[] = [
      {
         id: 1,
         logo: teahouse,
         name: "Teahouse",
         url: "https://nextjstea.vercel.app/",
         github: "https://github.com/tejdevcode/nextjstea",
         tags: ['NextJS', 'ReactJS', 'AppRouter', 'HTML', 'CSS', 'Vercel', 'GitHub']
      },
      {
         id: 2,
         logo: react_gardner,
         name: "ReactGarden",
         url: "https://reactwptype.netlify.app/",
         github: "https://github.com/tejdevcode/reactwptype",
         tags: ['ReactJS', 'WordPress', 'WPGraphQL', 'WPACF', 'HTML', 'CSS', 'Netlify', 'GitHub']
      },
      {
         id: 3,
         logo: tailwind,
         name: "tailwindBurger",
         url: "https://tejdevcode.github.io/tailwindspotlight/",
         github: "https://github.com/tejdevcode/tailwindspotlight",
         tags: ['TailwindCSS', 'HTML', 'CSS', 'Jquery', 'GitHub', 'GitHubPages']
      },
      {
         id: 4,
         logo: wpacfpro,
         name: "wpacfpro",
         url: "https://dev-wpacfpro.pantheonsite.io/",
         github: "https://github.com/tejdevcode/tezacfpwp",
         tags: ['WordPress', 'WPACF', 'PHP', 'HTML', 'CSS', 'Jquery', 'GitHub', 'pantheon']
      },
      {
         id: 5,
         logo: nextdeshboard,
         name: "nextDeshboard",
         url: "https://nextjsdashapp.vercel.app/",
         github: "https://github.com/tejdevcode/nextjsdashboard",
         tags: ['NextJS15', 'ReactJS', 'AppRouter', 'HTML', 'CSS', 'Vercel', 'GitHub']
      },
      {
         id: 6,
         logo: sass,
         name: "sass",
         url: "https://tejdevcode.github.io/Blutiquegit/",
         github: "https://github.com/tejdevcode/Blutiquegit",
         tags: ['SASS/SCSS', 'HTML', 'Jquery', 'GitHub', 'GitHubPages']
      },
      {
         id: 7,
         logo: bootstrap,
         name: "bootstrap",
         url: "https://tejdevcode.github.io/Blutiquegit/",
         github: "https://github.com/tejdevcode/Blutiquegit",
         tags: ['Bootstrap', 'SASS/SCSS', 'HTML', 'Jquery', 'GitHub', 'GitHubPages']
      },
      {
         id: 8,
         logo: html,
         name: "html",
         url: "https://tejdevcode.github.io/htmlproject/",
         github: "https://github.com/tejdevcode/htmlproject",
         tags: ['HTML', 'CSS', 'Jquery', 'GitHub', 'GitHubPages']
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
                     className=" border bg-gray-100 duration-300 p-1 relative group overflow-hidden"
                     key={item?.id} >
                     <div className="absolute -top-[100%] group-hover:top-1 z-10 transition-all duration-300 w-full h-full bg-black bg-opacity-75 left-0">
                        {/* <div className="px-2 font-bold text-xl mb-2">{name}</div> 
                        <p className="px-2  text-white">
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>*/}
                        <ul className="text-center mt-7 p-4">
                           {item?.tags?.map((tag, i) =>
                              <li key={i} className="inline-block bg-white rounded-full px-2 m-1 text-sm">{tag} </li>
                           )}
                        </ul>
                     </div>
                     <figure className="relative w-full pb-[87%] border border-gray-300 mb-2">
                        <Image src={item?.logo} className="w-full absolute object-cover" alt="" />
                     </figure>

                     <div className=" px-2 py-4 flex justify-center absolute -bottom-16 group-hover:bottom-0 transition-all duration-300 z-10">
                        <a className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-1 rounded mx-1 "
                           href={item?.github}>
                           Source code
                        </a>
                        <a className="bg-green-500 hover:bg-green-700 text-white px-4 py-1 rounded mx-1 "
                           href={item?.url}>
                           SiteLink
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
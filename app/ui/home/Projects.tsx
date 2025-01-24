import java from "@/public/java.png";
import python from "@/public/python.webp";
import teahouse from "@/public/projects/teahouse.jpg";
import react_gardner from "@/public/projects/react_gardner.jpg";
import express from "@/public/express.png";
import reactjs from "@/public/reactjs.png";
import nodejs from "@/public/node.png";
import Image from "next/image"

const Projects = () => {
   const cardItem = [
      {
         id: 1,
         logo: teahouse,
         name: "MongoDB",
      },
      {
         id: 2,
         logo: react_gardner,
         name: "Express",
      },
      {
         id: 3,
         logo: reactjs,
         name: "ReactJS",
      },
      {
         id: 4,
         logo: nodejs,
         name: "NodeJS",
      },
      {
         id: 5,
         logo: python,
         name: "Python",
      },
      {
         id: 6,
         logo: java,
         name: "Java",
      },
   ];
   return (
      <div
         id="Projects"
         className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10" >
         <div>
            <h2 className="text-3xl font-bold mb-5">Projects</h2>
            <div className="grid gap-1 my-5 auto-fill-[250px] ">
               {cardItem.map(({ id, logo, name }) => (
                  <div
                     className=" border bg-gray-100 duration-300 p-1"
                     key={id} >
                     <figure className="relative w-full pb-[93%]">
                        <Image src={logo} className="w-full absolute object-cover" alt="" />
                     </figure>
                     <div>
                        {/* <div className="px-2 font-bold text-xl mb-2">{name}</div> */}
                        <p className="px-2 text-gray-700">
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                     </div>
                     <div className=" px-6 py-4 space-x-3 justify-around">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                           Video
                        </button>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                           Source code
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Projects
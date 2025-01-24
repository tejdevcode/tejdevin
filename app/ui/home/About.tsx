import Image from "next/image"
import FocusOnGrowth from "../../../public/awards/FocusOnGroth-SEP24.jpg"
import FocusOnCustomer from "../../../public/awards/FocusOnCustomer-JUN23.jpg"
import CareToHelp from "../../../public/awards/CareToHelp-SEP-22.png"
import ProcessDataDriven from "../../../public/awards/Process&DataDriven-JUN22.png"
import ClientPartnership from "../../../public/awards/ClientPartnership-MAR22.png"
import React_certification from "../../../public/awards/React_certification.jpg"
import Typescript_certification from "../../../public/awards/Typescript_certification.jpg"
import JS_async_certification from "../../../public/awards/JS_async_certification.jpg"
import Nodejs_certification from "../../../public/awards/Nodejs_certification.jpg"
import Expressjs_certification from "../../../public/awards/Expressjs_certification.jpg"
import PHP_certification from "../../../public/awards/PHP_certification.jpg"
import SQL_certification from "../../../public/awards/SQL_certification.jpg"

/* import 'glightbox/dist/css/glightbox.min.css'; */
/* import AwardsGallery from "./AwardsGallery" */
const About = () => {

   const awards = [
      {
         "image": FocusOnGrowth,
         "description": " Focus on growth - 2024"
      },
      {
         "image": FocusOnCustomer,
         "description": " customer service - 2023"
      },
      {
         "image": CareToHelp,
         "description": " care to help - 2022"
      },
      {
         "image": ProcessDataDriven,
         "description": " process and data driven - 2022"
      },
      {
         "image": ClientPartnership,
         "description": " client partnership - 2022"
      }

   ]
   const Achievements = [
      {
         "image": React_certification,
         "description": "Reactjs Certification",
         "url": "https://www.codecademy.com/profiles/Tejdevcode/certificates/af00e5032d0a68cc84879983f5d8333b"
      },
      {
         "image": Typescript_certification,
         "description": "Typescript Certification",
         "url": "https://www.codecademy.com/profiles/Tejdevcode/certificates/56fb1e71303e37b643bb1905f31c8a09"
      },
      {
         "image": JS_async_certification,
         "description": "async js Certification",
         "url": "https://www.codecademy.com/profiles/Tejdevcode/certificates/257c50bca4561663476f2fa8f6ac410c"
      },
      {
         "image": Nodejs_certification,
         "description": "Nodejs Certification",
         "url": "https://www.codecademy.com/profiles/Tejdevcode/certificates/240305d50b925c17868f1ac7a21a3261"
      },
      {
         "image": Expressjs_certification,
         "description": "Expressjs Certification",
         "url": "https://www.codecademy.com/profiles/Tejdevcode/certificates/85396dd6e2e850ab34e904243aa464c6"
      },
      {
         "image": PHP_certification,
         "description": "PHP Certification",
         "url": "https://www.codecademy.com/profiles/Tejdevcode/certificates/9b7bcc38d0ed49f593228763cbfd51e3"
      },
      {
         "image": SQL_certification,
         "description": "SQL Certification",
         "url": "https://www.codecademy.com/profiles/Tejdevcode/certificates/042a4e5884e3eb6ea1f2a12be6abb851"
      }
   ]
   return (
      <div
         id="About"
         className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
         <div>
            <h2 className="text-3xl font-bold mb-5">About</h2>
            <p>
               Hello, I'm Tej, a passionate Web developer with a keen eye for Front-end Development . With a background in IT, I strive to create impactful and
               visually stunning Web solutions that leave a lasting impression.
            </p>
            <br />
            <h2 className="text-green-600 font-semibold text-xl">
               Education & Training
            </h2>
            <ul>
               <li>Web-design, Frontend Development from <br /> Institute of computer training(ICT) Ahmedabad(2014).</li>
               <li>D.M.E. (Mechanical-71.0%) Rajkot.(2011)</li>
               <li>H.S.C. 12thClass (49.80%) Jetpur, Rajkot.(2008)</li>
               <li>S.S.C 10th Class (80.14%) Jetpur, Rajkot.(2006)</li>
            </ul>
            <br />
            <h2 className="text-green-600 font-semibold text-xl">
               Skills & Expertise In
            </h2>
            <span>
               ReactJS and NextJS Development, Cutting-Edge Frontend Development, Innovative Web Design encompassing HTML5, CSS3, and Javascript, Proficiency in Jquery, ensuring Dynamic User Experiences, Version Control with Git and GitHub for Seamless Collaboration, Crafting Responsive UI/UX for Superior User Engagement

            </span>
            <br />
            <br />
            <h2 className="text-green-600 font-semibold text-xl mb-2">
               Professional Experience
            </h2>
            <ul className="space-y-4 list-disc">
               <li>
                  <h3 className="italic">SR.HTML Developer (currently working in reactjs and nextjs) :- Oct 2017 – Present </h3>
                  <p className="mb-1 ">⚡ <a href="https://www.uplers.com/" className="underline">Uplers Solutions Pvt. Ltd.(mavlers)</a></p>
                  <p>Since October 2017, I have gained extensive experience and expertise in a wide range of front-end technologies, including SASS, Foundation, WordPress Frontend, JavaScript, jQuery, TypeScript, React, Next.js, Git, GitHub, Figma, and TailwindCSS. Throughout my journey, I have developed a strong proficiency in building responsive, user-centric web applications while leveraging these tools to create clean, efficient, and scalable code.</p>
               </li>
               <li>
                  <h3 className="italic">Web Designer :- May 2015 – Sep 2017 </h3>
                  <p className="mb-1 ">⚡ <a href="https://lujayninfoways.com/" className="underline">Lujayn Infoways</a></p>
                  <p>I have developed expertise in HTML, CSS, JavaScript, jQuery, Bootstrap, WordPress with Visual Composer, SASS, and Photoshop. My experience includes creating visually appealing, responsive websites while leveraging these tools to deliver seamless user experiences and efficient front-end solutions.</p>
               </li>
               <li><h3 className="italic">App Designer/ Web Designer :- January 2015 – May 2015 </h3>
                  <p className="mb-1">⚡ <span className="underline">Little Play Studio (MSME)</span></p>
                  <p>I have gained expertise in HTML, CSS, Photoshop, and various aspects of web and app design, including logo creation. My experience includes crafting visually engaging websites and designing intuitive user interfaces, with a focus on delivering creative and functional design solutions.</p></li>
            </ul>
            <br />
            <br />
            <h2 className="text-green-600 font-semibold text-xl mb-2">
               Achievements & Awards
            </h2>
            <div className="awardsitem grid gap-3 auto-fill-[200px]">
               {awards?.map((item, i) =>
                  <figure className="" key={i}>
                     <a href={`${item.image.src}`} className="glightbox3 border border-gray-200 rounded shadow-sm inline-block " data-gallery="gallery1" target="_blank" title={item?.description}>
                        <Image src={item.image} alt="Focus On Growth Award" width={300} height={200} />
                     </a>
                     <a href={`${item.image.src}`} target="_blank">
                        <figcaption className="text-sm capitalize">Awarded for the best <br />{item?.description}</figcaption>
                     </a>
                  </figure>
               )}

               {/* {Achievements?.map((item, i) =>
                  <figure className="border border-gray-200 rounded" key={i}>
                     <a href={item?.url} target="_blank"><Image src={item.image} alt="Focus On Growth Award" width={300} height={200} /></a>
                  </figure>
               )} */}
            </div>
            <br />
            <br />
            <h2 className="text-green-600 font-semibold text-xl mb-2">
               Certifications
            </h2>
            <ul className="awardsitem grid gap-1 auto-fill-[160px]">
               {Achievements?.map((item, i) =>
                  <li className="border border-gray-400" key={i}>
                     <a href={item?.url} target="_blank" title={item?.description}><Image src={item?.image} alt={item?.description} /></a>
                  </li>
               )}
            </ul>
         </div>
      </div>
   )
}

export default About
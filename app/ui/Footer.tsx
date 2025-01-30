
import {
   FaFacebook,
   FaTwitter,
   FaInstagram,
   FaLinkedinIn,
   FaEnvelopeCircleCheck
} from "react-icons/fa6";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import ScrollToTop from "./ScrollToTop";

import Footeremail from "@/app/ui/home/FooterEmail"



function Footer() {
   const currentYear = new Date().getFullYear();

   return (
      <>
         <footer className="py-12">
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
               <div className=" flex flex-col items-center justify-center">
                  <ul className="flex space-x-5">
                     <li>
                        <a href="https://github.com/tejdevcode/" target="_blank" title="github">
                           <FaGithub className="text-2xl cursor-pointer" />
                        </a>
                     </li>
                     <li>
                        <a href="https://linkedin.com/in/tej-radadiya" target="_blank" title="linked in">
                           <FaLinkedin className="text-2xl cursor-pointer" />
                        </a>
                     </li>
                     <li>
                        <a href="https://x.com/tejrdev" target="_blank" title="twitter X">
                           <FaSquareXTwitter className="text-2xl cursor-pointer" />
                        </a>
                     </li>
                     <li>
                        {/* <a href="mailto:tejrdevcode@gmail.com" title="mail">

                        </a> */}
                        <Footeremail />

                     </li>
                  </ul>
                  <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
                     <p className="text-sm">
                        &copy; {currentYear} Made with ❤️ Tej R.
                     </p>
                  </div>
               </div>
               <ScrollToTop />
            </div>
         </footer>
      </>
   );
}

export default Footer;

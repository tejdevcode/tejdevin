"use client"
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { FaEnvelope } from "react-icons/fa";


type formData = {
   name: string;
   email: string;
   message: string;
}

function Contact() {
   /* console.log(process.env.NEXT_PUBLIC_FORM_SUBMIT_URL) */
   const {
      register,
      handleSubmit,
      watch,
      reset,
      formState: { errors },
   } = useForm({
      defaultValues: {
         name: "",
         email: "",
         message: ""
      }
   });

   const onSubmit: SubmitHandler<formData> = async (data) => {
      const userInfo = {
         name: data.name,
         email: data.email,
         message: data.message,
      };
      /* console.log(data) */

      try {
         const url = process.env.NEXT_PUBLIC_FORM_SUBMIT_URL;
         if (!url) {
            throw new Error("The form submit URL is not defined.");
         }

         await axios.post(url, userInfo);

         toast.success("Your message has been sent");
         reset({
            name: "",
            email: "",
            message: ""
         });
      } catch (error) {
         console.log(error);
         toast.error("Something went wrong");
      }
   };
   return (
      <>
         <div
            id="Contact"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
         >
            <h2 className="text-3xl font-bold mb-4">Contact me</h2>
            <div className="flex flex-wrap gap-4">
               <div className="contactitem w-full sm:w-[320px]">
                  <div className="border border-gray-300 rounded-lg p-2 sm:p-5">
                     <h3 className="text-green-600 font-semibold text-xl mb-2">"I'm here to help you"</h3>
                     <span>Feel free to reach out with any inquiries.</span>
                     <ul className="mt-4">
                        <li><FaEnvelope className="inline-block mr-2" />
                           <a href="mailto:tejrdevcode@gmail.com">tejrdevcode@gmail.com</a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="contactitem w-full sm:w-[calc(100%-400px)]">
                  <div className=" flex flex-col">
                     <form
                        onSubmit={handleSubmit(onSubmit)}
                        // action="https://getform.io/f/raeqjora"
                        // method="POST"
                        className="bg-slate-200 px-8 py-6 rounded-xl w-full"
                     >
                        <h1 className="text-xl font-semibold mb-4">Get in Touch</h1>
                        <div className="flex flex-col mb-4">
                           <label className="block text-gray-700">FullName</label>
                           <input
                              {...register("name", { required: true })}
                              className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Enter your fullname"
                           />
                           {errors.name && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="flex flex-col mb-4">
                           <label className="block text-gray-700">Email Address</label>
                           <input
                              {...register("email", { required: true })}
                              className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="email"
                              name="email"
                              type="text"
                              placeholder="Enter your email address"
                           />
                           {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="flex flex-col mb-4">
                           <label className="block text-gray-700">Message</label>
                           <textarea
                              {...register("message", { required: true })}
                              className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="message"
                              name="message"
                              placeholder="Enter your Query"
                           />
                           {errors.message && <span className="text-red-600">This field is required</span>}
                        </div>
                        <button
                           type="submit"
                           className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
                        >
                           Send
                        </button>
                     </form>
                     <div><Toaster position="top-right" /></div>

                  </div>
               </div>
            </div>


         </div>
      </>
   );
}

export default Contact;

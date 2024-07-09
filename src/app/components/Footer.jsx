'use client'
import Link from "next/link"
import { FaArrowRight, FaEnvelope, FaFacebook, FaHouseUser, FaInstagram, FaLinkedinIn, FaLocationArrow, FaTwitter } from "react-icons/fa"
import GoToTopButton from "./GotoTopButton"
import GotoWhatsapp from "./GotoWhatsapp"


const Footer = () => {
  return (
    <div className="bg-slate-700 py-20 ">
      <div className="w-10/12 mx-auto flex justify-between py-10">
         <div className="flex flex-col gap-3 text-white">
              <h2 className=" text-xl">Areas</h2>
              <div className="flex items-center gap-2">
                 <FaArrowRight />
                 <p>Lagos Mainland</p>
              </div>
              <div className="flex items-center gap-2">
                 <FaArrowRight />
                 <p>Lagos Island</p>
              </div>
              <div className="flex items-center gap-2">
                 <FaArrowRight />
                 <p>Lagos</p>
              </div>
         </div>
         <div className="flex flex-col gap-3 text-white">
          <h2 className=" text-xl">Contact Us</h2>
          <p className="flex items-center gap-4">
            <span><FaLocationArrow /></span>
            3, Olorunjare street, Akoka, Shomolu, Lagos State
          </p>
          <p className="flex items-center gap-4">
            <span><FaEnvelope /></span>
            Shuaibazeez14@gmail.com
          </p>
         </div>
         <div className="flex flex-col gap-3 text-white">
         <h2 className=" text-xl">Subscribe to our newsletter</h2>
         <input type="text" placeholder="enter your email" className="py-2 px-10 placeholder:text-xs rounded-md" />
         <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Submit</button>
         </div>
      </div>
     
       <div className="w-10/12 mx-auto flex justify-between items-center mt-16 py-10 px-6 shadow-lg text-white ">
         <p className="text-sm"> © Samlouis - All rights reserved</p>

         <Link href='/'>
         <div className="flex items-center gap-1">
            <FaHouseUser className="text-orange-600" />
            <h2 className="uppercase text-sm font-semibold">Samlouis</h2>
        </div>
        </Link>
        <div className='flex items-center gap-3 text-orange-600 cursor-pointer'>
             <FaFacebook />
             <FaTwitter />
             <FaInstagram />
             <FaLinkedinIn />
          </div>

        </div>
       <GoToTopButton />
        <GotoWhatsapp />
    </div>
  )
}


export default Footer
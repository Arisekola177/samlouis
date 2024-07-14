'use client'
import Link from "next/link"
import { FaArrowRight, FaEnvelope, FaFacebook, FaHouseUser, FaInstagram, FaLinkedinIn, FaLocationArrow, FaTwitter } from "react-icons/fa"
import GoToTopButton from "./GotoTopButton"
import GotoWhatsapp from "./GotoWhatsapp"


const Footer = () => {
  return (
    <div className="bg-slate-700 py-10 ">
      <div className="w-10/12 mx-auto gap-8 flex md:flex-row flex-col justify-between py-10">
         <div className="flex flex-col gap-3 text-white">
              <h2 className="xs:text-lg lg:text-xl">The Locations we serve</h2>
              <div className="flex items-center gap-2">
                 <FaArrowRight />
                 <p className="xs:text-xs md:text-base">Lagos Mainland</p>
              </div>
              <div className="flex items-center gap-2">
                 <FaArrowRight />
                 <p className="xs:text-xs md:text-base">Lagos Island</p>
              </div>
              <div className="flex items-center gap-2">
                 <FaArrowRight />
                 <p className="xs:text-xs md:text-base">Lagos</p>
              </div>
         </div>
         <div className="flex flex-col gap-3 text-white">
          <h2 className="xs:text-lg lg:text-xl">Contact Us</h2>
          <p className="flex items-center gap-4">
            <span><FaLocationArrow /></span>
            3, Olorunjare street, Akoka, Shomolu, Lagos State
          </p>
          <p className="flex items-center gap-4">
            <span><FaEnvelope /></span>
            samloisrealty@gmail.com
          </p>
         </div>
         <div className="flex flex-col gap-3 text-white">
         <h2 className="xs:text-lg lg:text-xl">Subscribe to our newsletter</h2>
         <input type="text" placeholder="enter your email" className="py-2 px-10 placeholder:text-xs rounded-md" />
         <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Submit</button>
         </div>
      </div>
     
       <div className="w-10/12 mx-auto flex flex-col md:flex-row  gap-4 justify-between items-center py-10 px-6 text-white ">
         <p className="text-sm"> © Samlois - All rights reserved</p>

         <Link href='/'>
         <div className="flex items-center gap-1">
            <FaHouseUser className="text-purple-600 text-lg" />
            <h2 className="uppercase text-lg font-semibold">Samlois</h2>
        </div>
        </Link>
        <div className='flex items-center gap-3 text-xl cursor-pointer'>
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
'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaEnvelope, FaFacebook, FaHourglass, FaHouseUser, FaInstagram, FaLinkedinIn, FaPhone, FaTimes, FaTwitter, FaUserMinus } from 'react-icons/fa'
const Navbar = () => {


  const [open, setOpen] = useState(false);


  const toggleNav = () => {
    setOpen(!open)
  }
  return (
    <div className="bg-slate-800 sticky top-0 z-50  ">
      <div className= 'hidden md:flex w-10/12 mx-auto  justify-between items-center py-4 text-white text-sm'>
          <div className='flex items-center gap-3'>
             <div className='flex items-center gap-1'>
                 <FaPhone />
                 <p>08023451937 & 08063335906</p>
             </div>
             <div className='flex items-center gap-1'>
                 <FaEnvelope />
                 <p>samloisrealty@gmail.com</p>
             </div>
             <div className='flex items-center gap-1'>
                 <FaHourglass />
                 <p>Mon - Sun <span> 24 hrs</span></p>
             </div>
          </div>
          <div className='flex items-center gap-3 cursor-pointer'>
             <FaFacebook className='text-xl' />
             <FaTwitter className='text-xl' />
             <FaInstagram className='text-xl' />
             <FaLinkedinIn  className='text-xl'/>
          </div>
          </div>
          <div className='w-11/12 mx-auto md:hidden flex justify-between items-center text-white py-4'>
          <Link href='/'>
         <div className="flex items-center gap-1 ">
            <FaHouseUser className="text-purple-600" />
            <h2 className="uppercase text-lg font-semibold">Samlois</h2>
        </div>
        </Link>
        <div onClick={toggleNav} className='block md:hidden cursor-pointer'>
          {
            open ? (null) : ( <FaBars className='text-white' />)
          }
            <div className={`absolute z-[50] top-5 left-0 w-[80%] bg-white transition-all shadow-md duration-500 ease-in-out px-3 py-4 ${open ? 'left-0 ':'left-[-490px]'}`}>
            
              <div className='flex justify-between '>
                 <div className='flex flex-col gap-4'>
                 <div className='p-4 '>
                 <Link href='/'>
                   <div className="flex items-center gap-1 ">
                 <FaHouseUser className="text-purple-600" />
                 <h2 className="uppercase text-lg font-semibold text-black">Samlois</h2>
               </div>
             </Link>
                 </div>
                 <div className='flex flex-col gap-4 px-4 text-black py-2'>
                 <Link className='text-[10px]' href='/'>Home</Link>
                 <Link className='text-[10px]' href='/about'>About</Link>
                 <Link className='text-xs' href='/properties'>Properties</Link>
                 <Link className='text-xs' href='/contact'>Contact</Link>
                 </div>
                 </div>
                 <div className='px-4 py-2'>
                  {
                     open ? (  <FaTimes className='text-black cursor-pointer' />) : ( null)
                  }
                 </div>
              </div>
            </div>
         </div>
          </div>
    </div>
  )
}

export default Navbar
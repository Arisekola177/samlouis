'use client'
import { FaEnvelope, FaFacebook, FaHourglass, FaInstagram, FaLinkedinIn, FaPhone, FaTwitter } from 'react-icons/fa'
const Navbar = () => {
  return (
    <div className="bg-slate-800 sticky top-0 z-50  ">
      <div className='w-10/12 mx-auto flex justify-between items-center py-4 text-white text-sm'>
          <div className='flex items-center gap-3'>
             <div className='flex items-center gap-1'>
                 <FaPhone />
                 <p>08064272889</p>
             </div>
             <div className='flex items-center gap-1'>
                 <FaEnvelope />
                 <p>Shuiabazeez14@gmail.com</p>
             </div>
             <div className='flex items-center gap-1'>
                 <FaHourglass />
                 <p>Mon - Sat <span>10am - 5pm</span></p>
             </div>
          </div>
          <div className='flex items-center gap-3 text-orange-600 cursor-pointer'>
             <FaFacebook />
             <FaTwitter />
             <FaInstagram />
             <FaLinkedinIn />
          </div>
          </div>
    </div>
  )
}

export default Navbar
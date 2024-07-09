import Image from "next/image"
import house from '../../../public/Images/home2.jpg'
import Link from "next/link"
const About = () => {
  return (
   <div className="w-full">
    <div className="w-10/12 mx-auto py-10 grid grid-cols-2 items-center gap-8 justify-between">
         <div>
         <h2 className="text-start font-semibold text-orange-600 text-3xl pt-5 ">About us</h2>
         <p className="border-b-[2px] border-orange-600 w-[150px]" />
         <div>
            <p className="text-xs text-justify leading-6 py-3">Welcome to SamLouis Real Estate, your trusted partner in the dynamic world of Lagos real estate. With a deep-rooted commitment to excellence and a passion for delivering exceptional service, we have been transforming the landscape of property transactions in Lagos.</p>
            <p className="text-xs text-justify leading-6 py-2"> 
               <span className="font-bold text-sm text-orange-600 uppercase block py-1">Our Mission</span>
               At SamLouis, our mission is to provide unparalleled real estate services that meet the diverse needs of our clients. We strive to exceed expectations by offering comprehensive solutions that cover every aspect of the real estate market, from property sales and acquisitions to management and consulting services.</p>
               <p className="text-xs text-justify leading-6 py-2"> 
               <span className="font-bold text-orange-600 text-sm uppercase block py-1">Our Team</span>
               Our team of seasoned professionals is dedicated to delivering personalized service and expert guidance. With a wealth of experience and a deep understanding of the Lagos real estate market, we are well-equipped to navigate the complexities of property transactions and development.</p>
            <button className="text-xs bg-orange-600 py-3 px-4 text-white rounded-md">Read More</button>
         </div>
         </div>
       
         <div className="flex gap-4">
          <p className="border-l-[4px] border-orange-600" />
            <Image src={house} width={200} height={200} alt="photo" className="w-full aspect-square object-contain" />
         </div>
     </div>
     
     </div> 
  )
}



export default About
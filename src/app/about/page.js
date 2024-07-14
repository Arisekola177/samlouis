import Link from "next/link"
import Count from '../components/Count'
import Image from "next/image"
import office from '../../../public/Images/office.webp'
import ceo from '../../../public/Images/ceo.jpeg'
import pool from '../../../public/Images/pool.webp'
import { MdCompare, MdHandshake, MdHouse } from "react-icons/md"
const page = () => {
  return (
    <div className="w-full relative">
       <div className="w-full xs:h-40 xl:h-80">
       <Image src={pool}  alt="pool" className="w-full h-full object-fit" />
      </div>
  
        <div className="absolute top-20 left-20 text-white text-center py-10">
           
             <h2 className="text-4xl font-mono font-semibold">About us</h2>
             <div className="hidden md:flex items-center justify-center gap-4 mt-4">
                <Link className="hover:font-semibold" href='/'>Home</Link>
                <p>-</p>
                <p>About</p>
             </div>
        </div>
        <div className="w-10/12 mx-auto py-10 grid items-center justify-center xs:grid-cols-1 gap-8 md:grid-cols-2">
         <div>
         <h2 className="font-semibold xs:text-xl xs:pt-2 xs:text-center text-purple-600 xl:text-3xl xl:pt-5 ">Who We Are</h2>
         
         <div className="lg:w-[600px] text-center xs:p-2 md:p-0 w-full mx-auto">
           
            <p className="xl:text-sm xs:text-xs text-justify leading-6 py-3">Welcome to Samlois Real Estate, your trusted partner in the dynamic world of Lagos real estate.
                 With a deep-rooted commitment to excellence and a passion for delivering exceptional service, 
                 we have been transforming the landscape of property transactions in Lagos. At Samlois Real Estate, 
                 we understand that buying or selling a property is more than just a transaction; it's a life-changing experience. 
                 That's why our team of dedicated professionals is here to provide you with unparalleled expertise and personalized service.
                  Whether you're a first-time homebuyer, an experienced investor, or looking to sell your property,
                  we offer a comprehensive suite of services tailored to meet your unique needs.</p>
            <p className="xl:text-sm xs:text-xs text-justify  leading-6 py-3"> 
               <span className="font-bold text-sm  text-purple-600 uppercase block py-1">Our Mission</span>
               At Samlois, our mission is to provide unparalleled real estate services that meet the diverse needs of our clients. We strive to exceed expectations by offering comprehensive solutions that cover every aspect of the real estate market, from property sales and acquisitions to management and consulting services.</p>
               <p className="xl:text-sm xs:text-xs text-justify  leading-6 py-3"> 
               <span className="font-bold text-purple-600 text-sm uppercase block py-1">Our Team</span>
               Our team of seasoned professionals is dedicated to delivering personalized service and expert guidance. 
               With a wealth of experience and a deep understanding of the Lagos real estate market, 
               we are well-equipped to navigate the complexities of property transactions and development.
               Our services extend beyond traditional real estate transactions. We offer comprehensive market analysis, 
               property management, investment advisory, and development consulting services. Whether you're looking to buy, sell,
                lease, or develop, our expertise spans all facets of the real estate industry, 
               allowing us to offer tailored solutions that align with your specific goals.
               </p>
            
         </div>
         </div>
        <div className="mt-5 grid grid-cols-1 items-center justify-center" >
        <div className="flex items-center justify-center">
        <Image src={office} width={500} height={400} alt="office" />
        </div>
         <Count />
         <div className="text-center w-full md:w-[500px] mx-auto">
           <h2 className="text-2xl font-bold text-purple-600 py-2">Trusted & Experienced</h2>
           <p className="text-sm mt-4 line-clamp-4">At Samlois of Lagos Realty, we take pride in being your go-to resource for all your real estate needs in Lagos. Our dedicated team of professionals combines 
            extensive market knowledge with a deep understanding of the local landscape to provide unparalleled service and results.</p>
       </div>
         </div>
       </div>
      
      <div className="py-16">
        <div className="flex items-center justify-center py-5 gap-3">
            <p className="border-[2px] border-purple-600 xs:w-5 md:w-10 lg:w-20 xl:w-40 " />
            <h2 className="xl:text-3xl xs:text-xl font-semibold text-purple-600">Why Work with us?</h2>
            <p className="border-[2px] border-purple-600 xs:w-5 md:w-10 lg:w-20 xl:w-40 " />
        </div>
        <div className="w-10/12 mx-auto grid xs:grid-cols-1 lg:grid-cols-3  gap-2">
            <div className="flex flex-col items-center justify-center gap-2">
              <MdHouse className="text-2xl" />
              <h3 className="xl:text-2xl xs:text-lg font-semibold text-purple-600">Expert</h3>
              <p className="text-sm text-center">Benefit from our extensive knowledge and experience in the real estate market.</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <MdCompare  className="text-2xl" />
              <h3 className="xl:text-2xl xs:text-lg font-semibold text-purple-600">Comprehensive</h3>
              <p className="text-sm text-center">Access a wide range of property listings, including buying, Airbnb, and renting opportunities.</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <MdHandshake className="text-2xl" />
              <h3 className="xl:text-2xl xs:text-lg font-semibold text-purple-600">Seamless</h3>
              <p className="text-sm text-center">Enjoy a hassle-free experience from initial consultation to closing the deal.</p>
            </div>
        </div>
      </div>
       <div className="py-16">
            <h2 className="text-3xl font-semibold text-center text-purple-600 py-4">The Team</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
               <div>
               <Image src={ceo} width={300} height={300} alt="ceo" className="object-contain" />
               <p className=" text-sm font-semibold py-2">Olusoji Oke - <span>MD/CEO</span></p>
               </div>
               <div>
               <Image src={ceo} width={300} height={300} alt="ceo" className="object-contain" />
               <p className=" text-sm font-semibold py-2">Dayo Shittu - <span>Sales Executive</span></p>
               </div>
               <div>
               <Image src={ceo} width={300} height={300} alt="ceo" className="object-contain" />
               <p className=" text-sm font-semibold py-2">Adedokun Samson - <span>Accountant</span></p>
               </div>
            </div>
            
       </div>

    </div>
  )
}

export default page
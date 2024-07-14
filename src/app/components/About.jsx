
const About = () => {
  return (
   <div className="w-full">
    <div className="w-10/12 mx-auto py-10 grid xs:grid-cols-1 md:grid-cols-2">
         <div>
         <h2 className="text-center font-semibold text-purple-600 text-3xl pt-5 ">About us</h2>
         <p className="border-b-[2px] mx-auto border-purple-600 w-[150px]" />
         <div className="lg:w-[600px] w-full mx-auto">
           
            <p className="text-sm text-justify md:text-center leading-6 py-3">Welcome to Samlois Real Estate, your trusted partner in the dynamic world of Lagos real estate. With a deep-rooted commitment to excellence and a passion for delivering exceptional service, we have been transforming the landscape of property transactions in Lagos.</p>
            <p className="text-sm text-justify md:text-center leading-6 py-2"> 
               <span className="font-bold text-sm text-center text-purple-600 uppercase block py-1">Our Mission</span>
               At Samlois, our mission is to provide unparalleled real estate services that meet the diverse needs of our clients. We strive to exceed expectations by offering comprehensive solutions that cover every aspect of the real estate market, from property sales and acquisitions to management and consulting services.</p>
               <p className="text-sm text-justify md:text-center leading-6 py-2"> 
               <span className="font-bold text-purple-600 text-center text-sm uppercase block py-1">Our Team</span>
               Our team of seasoned professionals is dedicated to delivering personalized service and expert guidance. With a wealth of experience and a deep understanding of the Lagos real estate market, we are well-equipped to navigate the complexities of property transactions and development.</p>
               <div className="text-xs w-40 mx-auto mt-5 bg-purple-600  text-white rounded-md">
              <button className="py-3 px-4 w-full text-center ">Read More</button>
              </div>
         </div>
         </div>
       
     </div>
     
     </div> 
  )
}



export default About
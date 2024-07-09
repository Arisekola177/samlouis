'use client'
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({id, imgUrl,title, index, active, handleClick}) => (
  <motion.div
   variants={fadeIn ('right', "spring", index * 0.5, 0.75)}
   className={`relative ${active === id ? 'lg:flex-[2.5] flex-[6]': 'lg:flex-[0.5] flex-[2]' } flex items-center justify-center 
   min-w-[200px] h-[400px] transition-[flex] duration-{0.7s} ease-out-flex cursor-pointer`}
   onClick={() => handleClick(id)}
  >
 <img 
  src={imgUrl}
  alt="title"
  className="absolute w-full h-full object-cover rounded-[24px]"
 />
 {active !== id ?(
  <h3 className="font-semibold text-lg text-white absolute z-0 lg:botton-20 lg:rotate-[-90deg] lg:origin-[0,0]">{title}</h3>
 )  : (
   <div className="absolute bottom-0 p-8 w-full justify-start flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
   
    <p className="font-normal text-xs text-white uppercase">A block of flats located in the heart of lagos</p>
    <h2 className="mt-[24px] font-semibold text-sm text-white">{title}</h2>
   </div>
 )}
  </motion.div>
);

export default ExploreCard;

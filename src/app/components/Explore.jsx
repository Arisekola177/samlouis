'use client'
import { motion } from "framer-motion"
import { staggerContainer } from "../utils/motion"
import { exploreWorlds } from "../constants"
import ExploreCard from "./ExploreCard"
import { useState } from "react"


const Explore = () => {
  const [active, setActive] = useState('world-2')
  return (
    <section className="w-10/12 mx-auto py-20" >
    <motion.div
     variants={staggerContainer}
     initial='hidden'
     whileInView='show'
     viewport={{once: false, amount: 0.25}}
     className= 'flex  items-center gap-10'
    >
<div>
<h2 className="text-center font-semibold text-orange-600 text-3xl pt-5 ">Properties</h2>
<p className="border-b-[2px] mx-auto border-orange-600 w-[150px]" />
<h2 className="text-xs font-semibold py-4 text-center">Some of the properties in our care</h2>
<div className="w-full border-orange-600 border-[2px] text-center  rounded-md hover:text-white duration-300 p-2 hover:bg-orange-600 hover:border-transparent">
<button className=" ">View more</button>
</div>
</div>    
    <div className="flex flex-1 lg:flex-row flex-col mt-50px min-h-[50vh] gap-5">
     {
      exploreWorlds.map((world, index) => (
        <ExploreCard 
         key={world.id}
         {...world}
         index={index}
         active={active}
         handleClick={setActive}
        />
      ))
     }
    </div>
    </motion.div>
  </section>
  )
}

export default Explore;

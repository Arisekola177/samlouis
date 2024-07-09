import Link from "next/link"
import { FaHouseUser } from "react-icons/fa"


const BottomNavbar = () => {
  return (
    <div className="w-10/12 mx-auto absolute top-10 flex flex-row items-center justify-between text-white">
       <Link href='/'>
         <div className="flex items-center gap-1">
            <FaHouseUser className="text-orange-600" />
            <h2 className="uppercase text-lg font-semibold">Samlouis</h2>
        </div>
        </Link>
         <div className="flex items-center gap-4 text-sm">
             <Link className="hover:text-orange-600 hover:font-semibold hover:underline underline-offset-4 duration-300" href='/'>Home</Link>
             <Link className="hover:text-orange-600 hover:font-semibold hover:underline underline-offset-4 duration-300" href='/'>About</Link>
             <Link className="hover:text-orange-600 hover:font-semibold hover:underline underline-offset-4 duration-300" href='/'>Properties</Link>
             <Link className="bg-white py-2 px-16 shadow-md rounded-md text-black hover:bg-orange-600 hover:text-white duration-300" href='/'>contact</Link>
        </div>
    </div>
  )
}

export default BottomNavbar
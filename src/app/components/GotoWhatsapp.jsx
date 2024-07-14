import Link from "next/link";
import whatsapp from '../../../public/Images/download.png'
import Image from "next/image";


const GotoWhatsapp = () => {
 

  return (
    <div className="fixed bottom-16 left-4  ">
      <div className="flex justify-between items-center gap-4 ">
     
      <Link href="/" >
          <Image src={whatsapp} width={40} height={40} alt="whatsapp" />
      </Link>
      <p className="bg-slate-800 text-white py-2 px-4 rounded-md animate-pulse">Got any question ?</p>
      </div>
    
    </div>
  );
};

export default GotoWhatsapp;




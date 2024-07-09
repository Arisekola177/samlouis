import Link from "next/link";
import whatsapp from '../../../public/Images/download.png'
import Image from "next/image";


const GotoWhatsapp = () => {
 

  return (
    <div className="fixed bottom-20 right-4  ">
      <div className="flex justify-between items-center gap-10 ">
      <p className="bg-slate-800 text-white py-2 px-4 rounded-md animate-pulse">Got any question ?</p>
      <Link href="/" >
          <Image src={whatsapp} width={40} height={40} alt="whatsapp" />
      </Link>
    
      </div>
    
    </div>
  );
};

export default GotoWhatsapp;




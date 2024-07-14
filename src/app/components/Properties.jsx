import { MdBed, MdCarRental, MdShower } from 'react-icons/md'
import ListingImageCarousel from './ListingImageCarousel'


const Properties = () => {
  return (
    <div className="w-10/12 mx-auto py-20">
        <h2 className='text-2xl text-center font-semibold text-purple-600'>Our Featured Exclusives</h2>
        <p className='text-sm text-center my-6'>Find exceptional properties listed by our trusted real estate agents</p>
        <div className="grid xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-4">
             <div className="w-[300px] relative shadow-md rounded-md p-2 h-auto flex flex-col gap-2">
                <ListingImageCarousel />
                   <span className='absolute text-xs bg-purple-600 text-white p-1 rounded-md top-5 left-4'>Featured</span>
                   <span className='absolute text-xs bg-black text-white p-1 rounded-md top-5 right-4'>For Rent</span>
                   <h2 className='text-lg font-semibold text-center'>Modern Apartment</h2>
                   <p className='text-xl font-bold text-center'>₦1,900,000.00/yr</p>
                   <span className='font-mono text-center text-xs'> Apartment</span>
                   <div className='w-[100px] mx-auto flex items-center gap-2'>
                       <p className='flex items-center gap-1 text-sm'> <MdBed /> 4</p>
                       <p className='flex items-center gap-1 text-sm'> <MdShower /> 3</p>
                       <p className='flex items-center gap-1 text-sm'> <MdCarRental /> 1</p>
                   </div>
             </div>
             <div className="w-[300px] relative shadow-md rounded-md p-2 h-auto flex flex-col gap-2">
                <ListingImageCarousel />
                   <span className='absolute text-xs bg-purple-600 text-white p-1 rounded-md top-5 left-4'>Featured</span>
                   <span className='absolute text-xs bg-black text-white p-1 rounded-md top-5 right-4'>For Rent</span>
                   <h2 className='text-lg font-semibold text-center'>Modern Apartment</h2>
                   <p className='text-xl font-bold text-center'>₦1,900,000.00/yr</p>
                   <span className='font-mono text-center text-xs'> Apartment</span>
                   <div className='w-[100px] mx-auto flex items-center gap-2'>
                       <p className='flex items-center gap-1 text-sm'> <MdBed /> 4</p>
                       <p className='flex items-center gap-1 text-sm'> <MdShower /> 3</p>
                       <p className='flex items-center gap-1 text-sm'> <MdCarRental /> 1</p>
                   </div>
             </div>
             <div className="w-[300px] relative shadow-md rounded-md p-2 h-auto flex flex-col gap-2">
                <ListingImageCarousel />
                   <span className='absolute text-xs bg-purple-600 text-white p-1 rounded-md top-5 left-4'>Featured</span>
                   <span className='absolute text-xs bg-black text-white p-1 rounded-md top-5 right-4'>For Sale</span>
                   <h2 className='text-lg font-semibold text-center'>Modern Apartment</h2>
                   <p className='text-xl font-bold text-center'>₦900,000,000.00/yr</p>
                   <span className='font-mono text-center text-xs'> Terrance</span>
                   <div className='w-[100px] mx-auto flex items-center gap-2'>
                       <p className='flex items-center gap-1 text-sm'> <MdBed /> 4</p>
                       <p className='flex items-center gap-1 text-sm'> <MdShower /> 3</p>
                       <p className='flex items-center gap-1 text-sm'> <MdCarRental /> 1</p>
                   </div>
             </div>
        </div>
    </div>
  )
}

export default Properties
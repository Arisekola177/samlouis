
const Find = () => {
  return (
    <div className="w-8/12 mx-auto absolute top-[30%] flex flex-col items-center justify-center gap-4 text-white">
        <h2 className="text-4xl font-semibold uppercase mb-4">Find your dream properties</h2>
         <p className="text-sm ">find new and featured properties located in your vicinity !</p>
         <div className="flex items-center gap-2">
            <button className="bg-orange-600 py-2 px-6 rounded-md text-xs">Rent</button>
            <button className="bg-white text-black py-2 px-6 rounded-md text-xs">Buy</button>
         </div>
    </div>
  )
}

export default Find
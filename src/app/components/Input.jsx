

const Search = () => {
  return (
    <div className="md:w-8/12 w-11/12 absolute xs:top-[30%] md:top-[40%] lg:top-[50%] mx-auto h-auto flex items-center bg-white rounded-md shadow-md">
             <form className="w-full flex flex-col p-3 gap-2">
                  <select className="p-3 rounded-md outline font-semibold">
                     <option>I am looking for..</option>
                     <option>For Rent</option>
                     <option>For Buy</option>
                     <option>Land</option>
                  </select>
                  <div className="grid xs:grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <select className="p-3 rounded-md outline font-semibold">
                     <option>Select Area</option>
                     <option>Akoka</option>
                     <option>Fadeyi</option>
                     <option>Bariga</option>
                  </select>
                  <select className="p-3 rounded-md outline  font-semibold">
                     <option>Bedrooms</option>
                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                     <option>4</option>
                     <option>Any</option>
                  </select>
                  <select className="p-3 rounded-md outline  font-semibold">
                     <option>Property Type</option>
                     <option>Apartment</option>
                     <option>Fully Detached Duplex </option>
                     <option>Land</option>
                     <option>Loft</option>
                     <option>Penthouse</option>
                     <option>Semi Detached</option>
                     <option>Single Family Home</option>
                     <option>Terrace Duplex</option>
                     <option>Villa</option>
                  </select>
                  <div className="bg-purple-600  py-3 px-8 text-white rounded-md shadow-md">
                    <button className="w-full text-center">Submit</button>
                  </div>
                  </div>
            </form>
    </div>
  )
}

export default Search
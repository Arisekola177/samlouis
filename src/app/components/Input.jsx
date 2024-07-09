import { Input } from "@/components/ui/input"

const Search = () => {
  return (
    <div className="w-10/12 mx-auto absolute top-[50%] flex items-center">
        <Input type="text" placeholder="Enter keyword" className="py-6 px-10 placeholder:text-xs w-full rounded-l-md" />
        <button className="bg-orange-600 py-3 px-4 text-white rounded-r-md">Submit</button>
    </div>
  )
}

export default Search
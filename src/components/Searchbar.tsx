import Image from 'next/image'
import React from 'react'

const Searchbar = () => {
  return (
    <form className="flex justify-between items-center gap-4 bg-gray-100 p-2 rounded-3xl flex-1">
         <span className=" text-[#0071DC] text-sm ml-4">Search everything at walmart online and shopping</span>
      <div className="flex items-center flex-1">
        <input type="text" name="name" className="flex-1 bg-transparent outline-none px-2"/>
       
      </div>
      <button className="cursor-pointer p-2">
        <Image src="/search.png" alt="searchimage" width={16} height={16}/>
      </button>
    </form>
  )
}

export default Searchbar

import Image from 'next/image'
import React from 'react'
import bed from '../../public/bed.svg'
import heart from '../../public/heart.svg'



const Imagecontainer = () => {
  return (
    <div className='h-80 w-60 flex flex-col justify-between p-4   '>
    <Image src={bed} alt='image' className='h-48 w-full object-cover rounded-lg mb-2'/>
    
    <div className='flex justify-between items-center mb-2'>
      <div className='text-sm text-[#32C000]'>
        Now $34.49
      </div>
      <Image src={heart} alt='heart' className='cursor-pointer' />
    </div>
  
    <div className='text-sm mb-2'>
      Full Size Mattress, Lecuneey 8”<br/>
      Full Size Memory Foam.....
    </div>
  
    <button className='border border-black rounded-2xl px-4 py-1 self-end'>
      Options
    </button>
  </div>
  
  )
}

export default Imagecontainer
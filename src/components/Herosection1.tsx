import Image from 'next/image'
import React from 'react'
import left1 from '../../public/left1.1.jpg'
import left3 from '../../public/left1.3.jpg'

import middle21 from '../../public/middle2.1.jpg'
import right31 from '../../public/right3.1.jpg'
import left12 from '../../public/left1.2.jpg'
import middle22 from '../../public/middle2.2.1.jpg'
import middle23 from '../../public/middle2.2.2.jpg'
import right32 from '../../public/right3.2.jpg'
import right33 from '../../public/right3.3.jpg'
import middle233 from '../../public/middle2.3.jpg'







const Herosection1 = () => {
  return (
    <div className='flex h-screen'>
      {/* left */}
      <div className='p-4'>
        <Image 
          src={left1} 
          alt='left1' 
          
          className='object-cover rounded-lg' 
         
        />
        <Image src={left12} alt='left1.2' className='rounded-lg mt-4' />
        <Image src={left3} alt='' className='rounded-lg mt-4'/>
        
      </div>

      {/* middle */}
      <div className='w-2/4 p-4'>
        <Image 
          src={middle21} 
          alt='middle21' 
          className='rounded-lg ' 
        />
        <div className='flex'>
          <div className='w-1/2 pr-2'>
            <Image 
              src={middle22} 
              alt='middle22' 
              className='rounded-lg mt-4' 
            />
          </div>
          <div className='w-1/2 pl-2'>
            <Image 
              src={middle23} 
              alt='middle23' 
              className='rounded-lg mt-4' 
            />
          </div>
        </div>
        <div className='mt-4'>
          <Image 
            src={middle233} 
            alt='middle233' 
            className='rounded-lg' 
          />
        </div>
      </div>

      {/* right */}
      <div className='w-1/4 p-4'>
      <Image src={right31} alt='' className='rounded-lg'/>
      <Image src={right32}  alt='' className='rounded-lg mt-4'/>
      <Image src={right33} alt='' className='rounded-lg mt-8'/>
   
      </div>
    </div>
  )
}

export default Herosection1

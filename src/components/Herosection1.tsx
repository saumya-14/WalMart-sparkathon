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
import Link from 'next/link'

const Herosection1 = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      {/* left */}
      <div className='p-4 flex flex-col'>
        <div className='relative'>
          <h1 className='absolute font-bold text-xl ml-5 mt-7'>
            Lunches they'll <br />
            Love
          </h1>
          <Link href='/'>
            <div className='absolute mt-24 ml-5'>Shop Food</div>
          </Link>
          <Image 
            src={left1} 
            alt='left1' 
            className='object-cover rounded-lg' 
          />
        </div>

        <div className='relative mt-4'>
          <h1 className='absolute font-semibold text-2xl ml-5 mt-7'>
            First-day fab from $4
          </h1>
          <Link href='/'>
            <div className='absolute mt-24 ml-5'>Shop Fashion</div>
          </Link>
          <Image 
            src={left12} 
            alt='left1.2' 
            className='rounded-lg' 
          />
        </div>

        <div className='relative mt-4 flex-grow'>
          <h1 className='absolute font-bold text-2xl ml-5 mt-7'>
            Study Smart,<br />
            Play Hard
          </h1>
          <Link href='/'>
            <div className='absolute mt-24 ml-5'>Shop Tech</div>
          </Link>
          <Image 
            src={left3} 
            alt='' 
            className='rounded-lg h-full' 
          />
        </div>
      </div>

      {/* middle */}
      <div className='w-full md:w-2/4 p-4 flex flex-col'>
        <div className='relative'>
          <div className='absolute ml-5'>
            <h1 className='font-medium text-lg mt-7'>
              As easy as 1-2-3
            </h1>
            <div className='mt-2 text-5xl'>
              Find your class <br />
              supply list
            </div>
            <div className='mt-4'>Shop Now</div>
          </div>
          <Image 
            src={middle21} 
            alt='middle21' 
            className='rounded-lg' 
          />
        </div>

        <div className='flex mt-4'>
          <div className='w-1/2 pr-2'>
            <div className='relative'>
              <div className='absolute ml-5 mt-7'>
                <div className='text-xl font-bold'>
                  Bedding that's so your vibe
                </div>
                <div className='mt-5'>Shop Now</div>
              </div>
              <Image 
                src={middle22} 
                alt='middle22' 
                className='rounded-lg h-full' 
              />
            </div>
          </div>

          <div className='w-1/2 pl-2'>
            <div className='relative'>
              <div className='absolute ml-5 mt-7'>
                <div className='text-xl font-bold'>Up to 30% off</div>
                <div className='mt-5'>Shop Now</div>
              </div>
              <Image 
                src={middle23} 
                alt='middle23' 
                className='rounded-lg h-full' 
              />
            </div>
          </div>
        </div>

        <div className='relative mt-4 flex-grow'>
          <div className='absolute ml-5 mt-7'>
            <div className='text-2xl'>
              Walmart+ member save big with free <br />
              delivery from stores
            </div>
            <div>Terms Apply.</div>
            <div className='mt-5'>Join Walmart+</div>
          </div>
          <Image 
            src={middle233} 
            alt='middle233' 
            className='rounded-lg h-full' 
          />
        </div>
      </div>

      {/* right */}
      <div className='w-full md:w-1/4 p-4 flex flex-col'>
        <div className='relative'>
          <div className='absolute ml-5 mt-7'>
            <div className='text-xl font-bold'>Trendy meets Tidy</div>
            <div className='mt-5'>Shop Now</div>
          </div>
          <Image 
            src={right31} 
            alt='' 
            className='rounded-lg h-full' 
          />
        </div>

        <div className='relative mt-4'>
          <div className='absolute ml-5 mt-7'>
            <div className='text-xl font-bold'>
              Dorm Kitchen:<br />
              Open all night
            </div>
            <div className='mt-5'>Shop Now</div>
          </div>
          <Image 
            src={right32} 
            alt='' 
            className='rounded-lg h-full' 
          />
        </div>

        <div className='relative mt-4 flex-grow'>
          <div className='absolute ml-5 mt-7'>
            <div className='text-2xl font-bold'>
              College 101 - all you <br />
              need
            </div>
            <div className='mt-5'>Shop Now</div>
          </div>
          <Image 
            src={right33} 
            alt='' 
            className='rounded-lg h-full' 
          />
        </div>
      </div>
    </div>
  )
}

export default Herosection1

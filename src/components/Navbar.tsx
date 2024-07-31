"use client"
import Image from 'next/image'
import logo from "../../public/logo.svg"
import select from "../../public/slect1.png"
import vr from "../../public/vr.svg"
import signin from "../../public/signin.svg"


import { useState } from 'react'
import Cart from './Cart'
import Searchbar from './Searchbar'
import Link from 'next/link'

const Navbar = () => {
 const [cartopen,setCartopen]=useState(false);

  return (
    <div className='bg-[#0071DC] w-full h-20 flex justify-center items-center'>
        {/* left */}
        <div className='flex flex-row w-1/4 justify-between items-center'>
            <Image src={logo} alt="logo" className='h-16'/>
            <div className='flex items-center ml-3 w-full relative'>
                  <div className='absolute left-2'>
                    
                </div>
                <div className="pl-2 pr-4 h-12 flex items-center rounded-3xl text-base font-bold text-white bg-[#004F9A] appearance-none"  onClick={()=>setCartopen(prev=>!prev)}>
    <Image src={select} alt='select' className='h-10' />
    <p className="ml-2">How do you want your item?</p>
   
</div>
{cartopen && <Cart/>}
            </div>
        </div>
        {/* middle */}
        <div className='flex flex-col w-1/2 mt-4 mb-4' >
            
            <Searchbar/>
        </div>
        {/* right */}
        <div className='flex flex-col w-1/4   '>
        
        <div className='flex items-center '>
          <Image src={vr} alt='vr' height={50} width={50} className='ml-2 cursor-pointer'/>
           <span className='text-white ml-2 cursor-pointer'>Virtual <br/> Reality</span>
           <Link href="/signin" className='flex items-center ml-4'>
      <Image src={signin} alt='Sign In' height={40} width={40} className='cursor-pointer' />
      <span className='text-white ml-2'>Signin</span>
    </Link>
           
           
        </div>
 

       
  

  

</div>
    </div>
  )
}

export default Navbar

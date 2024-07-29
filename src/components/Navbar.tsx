import Image from 'next/image'
import logo from "../../public/logo.svg"
import select from "../../public/slect1.png"

const Navbar = () => {
  return (
    <div className='bg-[#0071DC] w-full h-20 flex'>
        {/* left */}
        <div className='flex flex-row w-1/4 justify-between items-center'>
            <Image src={logo} alt="logo" className='h-16'/>
            <div className='flex items-center ml-3 w-full relative'>
                  <div className='absolute left-2'>
                    <Image src={select} alt='select' className='h-10 '/>
                </div>
                <select name="type" id="" className="py-2 pl-10 pr-4 h-12 flex-1 rounded-3xl  text-base font-bold text-white bg-[#004F9A] appearance-none">
                    <option  >How do you want your item?</option>
                </select>
                
            </div>
        </div>
        {/* middle */}
        <div className='flex flex-col w-1/2'>
            {/* Content for the middle section */}
        </div>
        {/* right */}
        <div className='flex flex-col w-1/4'>
            {/* Content for the right section */}
        </div>
    </div>
  )
}

export default Navbar

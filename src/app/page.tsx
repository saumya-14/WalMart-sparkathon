import Herosection1 from "@/components/Herosection1";
import Imagecontainer from "@/components/Imagecontainer";
import Navbar from "@/components/Navbar";
import furniture from '../../public/furniture.png'
import storage from '../../public/storage.png'

import textiles from '../../public/textiles.png'

import decoration from '../../public/decoration.png'


import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Herosection1 />
      <div className="p-4">
        <h2 className="text-2xl font-bold">Flash Deals
          <br />
          <span className="text-sm font-normal text-[#3A3A3A]">
            Upto 65% Off
          </span>
        </h2>
        <div className="flex flex-row flex-wrap ml-5 ">
 
    <Imagecontainer />
  
    <Imagecontainer />
 
    <Imagecontainer />
  
    <Imagecontainer />
 
    <Imagecontainer />
 
  
    <Imagecontainer />
  
</div>
<div className="p-4">
        <h2 className="text-3xl text-[#0071DC] font-bold">
          Shop Sale by category
        </h2>
        </div>
        <div className="flex flex-row space-x-4 items-center justify-center">
        <div className="rounded-3xl overflow-hidden">
    <Image src={furniture} alt="furniture" />
</div>
<div className="rounded-xl overflow-hidden">
    <Image src={storage} alt="furniture" />
</div>
<div className="rounded-xl overflow-hidden">
    <Image src={decoration} alt="furniture" />
</div>
<div className="rounded-xl overflow-hidden">
    <Image src={textiles} alt="furniture" />
</div>

</div>

       
      </div>
    </main>
  );
}

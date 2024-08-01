import Herosection1 from "@/components/Herosection1";
import Imagecontainer from "@/components/Imagecontainer";
import Navbar from "@/components/Navbar";

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
       
       
      </div>
    </main>
  );
}

import Herosection1 from "@/components/Herosection1";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white h-screen">
      <Navbar/>
      <Herosection1/>
    </div>
  );
}

import Image from "next/image"
import walmart from "../../../public/walmart.svg";
import logo from "../../../public/logo.svg";


const page = () => {
  return (
    <main className="flex h-screen">
      <div className="w-1/2 h-full flex flex-col justify-center items-center border border-[#0058A3]">
        <div className="mt-5 mb-5  h-full w-[85%] flex flex-col justify-center items-center border border-[#0058A3] border-8">
        <Image src={logo} alt="logo" />
        <div className="text-[#FFBD14] text-2xl mt-4">Create Your  Walmart Account</div>
        <div className="mt-4 text-[#000000] text-sm ">
      Email
    </div>
        <input
      type="email"
      className="w-[70%] p-2 mb-4 border border-black rounded bg-[#cce7ff]"
      style={{ borderRadius: '15px' }}
    />
     <div className="mt-4 text-[#000000] text-sm ">
      Username
    </div>
        <input
      type="Username"
      className="w-[70%] p-2 mb-4 border border-black rounded bg-[#cce7ff]"
      style={{ borderRadius: '15px' }}
    />
       <div className="mt-4 text-[#000000] text-sm ">
      Password
    </div>
        <input
      type="Password"
      className="w-[70%] p-2 mb-4 border border-black rounded bg-[#cce7ff]"
      style={{ borderRadius: '15px' }}
    />
    <label htmlFor="stay-signed-in" className="text-[#000000] text-xs">
    Send me emails about new arrivals, hot items, daily saving and more.
            </label>
    <div className="text-gray-400 text-xs p-2 ml-14">
    By clicking Create Account, you acknowledge you have read and agreed to our Terms of Use and Privacy Policy. Message and data rates may apply. View our Mobile Alerts Terms.

    </div>
   <button
      className="w-[60%] mt-4 p-2 bg-[#0058A3] text-white rounded-lg"
      style={{ borderRadius: '20px' }}
    >
      Continue
    </button>


        </div>

      </div>
      <div className="bg-[#0058A3] w-1/2 h-full  ">
      <div className="flex justify-end items-end mb-0"> 
      <Image src={walmart} alt="wallmart logo" className="mt-2" />
      </div>
      <div className="flex flex-col  justify-center items-center h-full ml-20 mr-40 mb-0">
       
        <div className="text-4xl text-white mb-16">
          <span className="text-[#FFBD14] font-lexend font-semibold ">
          Effortless SignUp
          </span>
          <br />
          to Your <span className="font-semibold"> Walmart</span> Account
        </div>
        <div className="font-inter text-white">
          <div className="mb-10 font-medium">
          Misplaced your password? No worries! You can now log in using an OTP sent to your email address or verified mobile number.
          </div>
          <div className="mb-16 font-medium">
          To take advantage of OTP login, make sure to add and verify your mobile number and email address by accessing your Walmart account settings.
          </div>

        </div>
        <div  className="text-[#FFBD14] text-2xl">
        Create your account now and start enjoying seamless shopping experiences!
        </div>

      </div>

      </div>

    </main>
  )
}

export default page

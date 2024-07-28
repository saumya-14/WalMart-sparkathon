import Image from "next/image";
import logo from "../../../public/logo.svg";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex h-screen">
      <div className="bg-[#0058A3] w-1/2 h-full flex flex-col justify-center items-center">
        <div className="ml-20 mr-40">
          <div className="mb-10">
            <span className="text-[#FFBD14] font-lexend font-semibold text-4xl">
              Effortless LogIn
            </span>
            <br />
            <div className="text-white text-4xl">
              to Your <span className="font-semibold">Walmart</span> Account
            </div>
          </div>
          <div className="text-white">
            <div>
              Forgot your password? No problem! You can now log in using an OTP sent to your email address or verified mobile number.
            </div>
            <br />
            <div>
              Ensure your mobile number is added and verified by accessing your Walmart account through your email address.
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-center border border-[#0058A3]">
  <Image src={logo} alt="logo" />
  <div className="text-[#FFBD14] text-2xl mt-4">LogIn to your Walmart account</div>
  <div className="mt-10 w-full max-w-xs">
    <div className="mt-4 text-[#000000] text-xs">
      Email or Verified Mobile Number
    </div>
    <input
      type="email"
      className="w-[110%] p-2 mb-4 border border-black rounded bg-[#FFFFFF]"
      style={{ borderRadius: '15px' }}
    />
    <div className="text-[#000000] text-xs">
      Password
    </div>
    <input
      type="password"
      className="w-[110%] p-2 mb-4 border border-black rounded bg-[#FFFFFF]"
      style={{ borderRadius: '15px' }}
    />
    <label htmlFor="stay-signed-in" className="text-[#000000] text-xs">
              Stay signed in until you sign out
            </label>
    <button
      className="w-full mt-4 p-2 bg-[#0058A3] text-white rounded-lg"
      style={{ borderRadius: '20px' }}
    >
      Continue
    </button>
    <div className="text-xs mt-2">
      Don't have a Walmart account yet?
      <Link href="/signup">
              <span className="text-[#0058A3] cursor-pointer">Sign up today!</span>
            </Link>
    </div>
  </div>
</div>
    </main>
  );
};

export default page;

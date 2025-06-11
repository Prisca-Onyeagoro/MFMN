import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../src/app/assets/logo.svg";

export const Hero = () => {
  return (
    <div className="bg-orange-50 min-h-screen overflow-hidden ">
      <div className="mr-5 ml-5">
        {/* navigation bar */}
        <div className="flex justify-between items-center mt-12">
          <div className="flex items-center gap-4 ">
            <Image src={Logo} alt="MFMN-LOGO" className="w-10 h-10" />
            <div>
              <h1 className="text-orange-500 font-extrabold text-2xl">MFMN</h1>
              <p className="text-gray-500">Mobile Fire Mentorship Network</p>
            </div>
          </div>

          <div className="flex gap-11 items-center xs:hidden sm:flex">
            <Link href="#" className="hover:text-orange-400">
              Registration
            </Link>
            <Link href="#" className="hover:text-orange-400">
              About
            </Link>
            <Link href="#" className="hover:text-orange-400">
              Contact
            </Link>
            <Link
              href="#"
              className="border-1 border-orange-500 p-2 text-orange-500 font-light bg-white rounded-2xl hover:bg-orange-500 hover:text-white"
            >
              Sign in
            </Link>
          </div>
        </div>
        {/* content section */}
        <div>
          <div>
            <div className="">
              <h1 className="text-5xl font-extrabold text-black mt-10 leading-tight mb-5">
                Ignite Your{" "}
                <span className="text-orange-500 block">Potential</span> Through
                <span className="block">Mentorship</span>
              </h1>
              <p className="text-gray-500 text-2xl font-serif font-light">
                Submit to counsels, teachings that will transform{" "}
                <span className="block">
                  your life, build and accelerate your growth in any
                </span>
                <span className="block">sphere of your influence.</span>
              </p>
            </div>
            {/* learning animation svg */}
            <div></div>
          </div>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

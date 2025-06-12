import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../src/app/assets/logo.svg";
import right from "../../src/app/assets/rightArrow.png";
import group from "../../src/app/assets/group.png";

export const Hero = () => {
  return (
    <div className="bg-orange-50 min-h-screen overflow-hidden mb-20 ">
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
          <div className="flex items-center mt-10 gap-7">
            <div className="flex items-center gap-5 bg-linear-to-br from-orange-700 to-orange-400 p-2 hover:bg-amber-600 text-white font-light rounded-2xl">
              <Link href={"#"}>Get Started Today</Link>
              <Image
                src={right}
                alt="right-arrow"
                className="w-4 h-4 text-white"
              />
            </div>
            <div className=" border-orange-500 border-1 bg-white  hover:bg-orange-500 hover:text-white text-orange-400 font-light rounded-2xl p-3 ">
              <Link href="#">Live Session</Link>
            </div>
          </div>
        </div>

        <div className="size-18 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% flex flex-col justify-center relative mt-10 mb-10">
          <h1 className="font-bold text-orange-500 mt-5 text-2xl">10K</h1>
          {/* <p>Active Members</p> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;

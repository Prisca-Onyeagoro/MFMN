import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../src/app/assets/logo.svg";

import SvgAnimation from "./SvgAnimation";
import ResponsiveHero from "./ResponsiveHero";

export const Hero = () => {
  return (
    <div className="bg-orange-50 min-h-screen overflow-hidden mb-20 ">
      <div className="mr-10 ml-10 ">
        {/* navigation bar */}
        <div>
          <div className="flex justify-between items-center mt-12">
            <div className="flex items-center gap-4 ">
              <Image src={Logo} alt="MFMN-LOGO" className="w-10 h-10" />
              <div>
                <h1 className="text-orange-500 font-extrabold text-2xl">
                  MFMN
                </h1>
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
            <ResponsiveHero />
          </div>
          {/* Three session */}
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../src/app/assets/logo.svg";
import right from "../../src/app/assets/rightArrow.png";
import group1 from "../../src/app/assets/group1.png";
import target from "../../src/app/assets/target.png";
import light from "../../src/app/assets/light.png";
import SvgAnimation from "./SvgAnimation";

const Goals = [
  {
    id: 1,
    number: "10K +",
    title: "Active Members",
    image: group1,
  },
  {
    id: 2,
    number: "50K +",
    title: "Testimonies",
    image: target,
  },
  {
    id: 3,
    number: "100K +",
    title: "Mentorship Sessions",
    image: light,
  },
];

export const Hero = () => {
  return (
    <div className="bg-orange-50 min-h-screen overflow-hidden mb-20 ">
      <div className="mr-5 ml-5 ">
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
          <div className="flex">
            <div>
              <div>
                <div className="">
                  <h1 className="text-5xl font-extrabold text-black mt-10 leading-tight mb-5">
                    Ignite Your{" "}
                    <span className="text-orange-500 block">Potential</span>{" "}
                    Through Mentorship
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
            <div>
              <SvgAnimation />
            </div>
          </div>

          {/* Three session */}
          <div className="flex gap-28 items-center mt-20 mb-10">
            {Goals.map((goal) => (
              <div key={goal.id} className="flex flex-col">
                <div className="flex items-center gap-1">
                  <Image
                    src={goal.image}
                    alt={goal.title}
                    className="w-10 h-10"
                  />
                  <h1 className="text-orange-500 text-2xl font-bold">
                    {goal.number}
                  </h1>
                </div>
                <p className="text-gray-500 text-xs font-serif font-light">
                  {goal.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

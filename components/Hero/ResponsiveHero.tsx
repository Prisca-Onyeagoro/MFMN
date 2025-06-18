import Link from "next/link";
import "./Hero.module.css";
import group from "../../src/app/assets/group1.png";
import target from "../../src/app/assets/target.png";
import thunder from "../../src/app/assets/light.png";

import Image from "next/image";

const Goals = [
  {
    id: 1,
    fig: "84",
    title: "Active Members",
    src: group,
  },
  {
    id: 2,
    fig: "300",
    title: " Members",
    src: target,
  },
  {
    id: 3,
    fig: "70",
    title: "Testimonies",
    src: thunder,
  },
];

export default function ResponsiveHero() {
  return (
    <>
      <div className="mt-20">
        <div className="space-y-5">
          <h1 className="text-5xl font-bold leading-tight">
            Ignite Your{" "}
            <span className="block text-orange-500 ">Potential</span>
            Through Mentorship
          </h1>
          <p className="text-gray-500 leading-relaxed">
            Connect with Apostle Sam Mobile fire, Submit to trainings that will
            transform your career and life.
          </p>

          <div className="flex flex-col space-y-4 md:grid md:grid-cols-2  ">
            <Link href="#">
              <button className="cursor: cursor-pointer bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold w-72 pt-3 pb-3 rounded-2xl">
                Get Started
              </button>
            </Link>
            <Link href="#">
              <button className="cursor: cursor-pointer bg-white text-orange-400 border-2 border-orange-400 font-bold w-72 pt-3 pb-3 rounded-2xl hover:bg-orange-400 hover:text-white">
                Join live session
              </button>
            </Link>
          </div>

          <div className="flex space-x-6 md:justify-between">
            {Goals.map((goal) => (
              <div key={goal.id} className="flex flex-col items-center">
                <div key={goal.id} className="flex items-center">
                  <Image src={goal.src} alt={goal.title} className="w-8 h-8" />
                  <h1 className="font-bold text-2xl text-orange-500">
                    {goal.fig}
                  </h1>
                </div>
                <p className="text-gray-400 whitespace-nowrap">{goal.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

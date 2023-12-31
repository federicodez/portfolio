"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiFillCloseSquare } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight, BsFire } from "react-icons/bs";

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <header>
      <nav className="fixed z-10 bg-[#495057] top-0 left-0 right-0  shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(255,255,255),0.3em_0.3em_1em_rgba(0,0,0,0.3)]">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="logo flex text-white md:text-4xl">
                <Link href="/" className="flex">
                  <BsChevronLeft className="logo-arrow" />
                  <BsFire className="logo-fire" />
                  <BsChevronRight className="logo-arrow" />
                </Link>
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setActive(!active)}
                  className="p-2 text-white rounded-md outline-none focus:border-white focus:border"
                >
                  {active ? <AiFillCloseSquare /> : <AiOutlineMenu />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center mt-8 md:block md:pb-0 md:mt-0 ${
                active
                  ? "border-t-2 pt-8 md:border-none md:h-fit md:p-0 block"
                  : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto justify-center md:flex">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-left">
                  <Link
                    className="md:hover:text-[#495057] md:hover:bg-[#fff] md:rounded-lg md:px-2 md:py-1"
                    href="/"
                    onClick={() => setActive(!active)}
                  >
                    About
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-left">
                  <Link
                    className="md:hover:text-[#495057] md:hover:bg-[#fff] md:rounded-lg md:px-2 md:py-1"
                    href="#resume"
                    onClick={() => setActive(!active)}
                  >
                    Resume
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-left">
                  <Link
                    className="md:hover:text-[#495057] md:hover:bg-[#fff] md:rounded-lg md:px-2 md:py-1"
                    href="#work"
                    onClick={() => setActive(!active)}
                  >
                    Experience
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-left">
                  <Link
                    className="md:hover:text-[#495057] md:hover:bg-[#fff] md:rounded-lg md:px-2 md:py-1"
                    href="#projects"
                    onClick={() => setActive(!active)}
                  >
                    Projects
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-left">
                  <Link
                    className="md:hover:text-[#495057] md:hover:bg-[#fff] md:rounded-lg md:px-2 md:py-1"
                    href="#contact"
                    onClick={() => setActive(!active)}
                  >
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleMobileMenu = () => {
    setNav(!nav);
  };
  return (
    <header className="flex px-3 justify-center sm:justify-start sm:flex-nowrap z-50 w-full  text-sm py-4 bg-[#4B2585]">
      <nav
        className="flex   md:items-center justify-evenly items-center sm:flex-row  max-w-[89rem] w-full mx-auto  px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="">
          <Image src="/convey.webp" alt="logo" width={150} height={150} />
        </div>

        {/* desktop view */}
        <div className={`hidden sm:flex flex-row  items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5`}>
          <div className="flex cursor-pointer align-middle justify-center rounded-xl h-12 p-1 w-[10rem]">
            <p className="flex text-base font-semibold font-poppins tracking-wide items-center text-white justify-center">
              Pricing
            </p>
          </div>

          <div className="flex cursor-pointer align-middle bg-[#FED374] justify-center rounded-xl h-12 p-1 w-[10rem]">
            <p className="flex text-base font-semibold font-poppins tracking-wide items-center text-black justify-center">
              Search
            </p>
          </div>
        </div>

        {/* mobile view */}

        <div className={`flex flex-row 
        ${
          nav ? 'block' : 'hidden'
        }
        items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5`}>
          <div className="flex cursor-pointer align-middle justify-center rounded-xl h-12 p-1 w-[10rem]">
            <p className="flex text-base font-semibold font-poppins tracking-wide items-center text-white justify-center">
              Pricing
            </p>
          </div>

          <div className="flex cursor-pointer align-middle bg-[#FED374] justify-center rounded-xl h-12 p-1 w-[10rem]">
            <p className="flex text-base font-semibold font-poppins tracking-wide items-center text-black justify-center">
              Search
            </p>
          </div>
        </div>
      </nav>

      <div className="md:hidden flex">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
    </header>
  );
}

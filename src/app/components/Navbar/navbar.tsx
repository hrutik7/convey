"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <header className="flex flex-wrap justify-center sm:justify-start sm:flex-nowrap z-50 w-full  text-sm py-4 bg-[#4B2585]">
      <nav
        className="flex   md:items-center justify-evenly items-center sm:flex-row  max-w-[89rem] w-full mx-auto  px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="font-4xl">
          <Image src="/convey.webp" alt="logo" width={150} height={150} />
        </div>
        <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
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
    </header>
  );
}

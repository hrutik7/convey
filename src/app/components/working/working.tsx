"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
const working = () => {
  const imageAnimate = {
    initial : {
      opacity: 0,
      x: -100
    },
    animate : {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const imageAnimate_2 = {
    initial : {
      opacity: 0,
      x: 100
    },
    animate : {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="flex flex-col bg-white">
      <div className="flex text-5xl bg-white justify-center w-[100%] pt-20 text-[#333333] font-avro">
        How convey operates?
      </div>
      <div className="flex flex-col md:flex-row justify-around mt-20 w-[95%]">
        <motion.div
          variants={imageAnimate}
          initial="initial"
          whileInView={"animate" }
          viewport={{once: true}}
          className="flex justify-center w-[100%] md:w-[50%]"
        >
          <div className="flex justify-center w-[100%] md:w-[50%]">
            <Image src="/nucleus.svg" alt="" width={500} height={500} />
          </div>
        </motion.div>

        <div className="flex flex-col w-[100%] md:w-[50%]">
          <p className="text-4xl font-bold font-avro">
            Centralized Knowledge Hub
          </p>

          <p className="text-[#888888] w-[100%] md:w-[50%] text-3xl pt-3 leading-[3rem]">
            Our platform serves as the nucleus of your organization&apos;s
            collective wisdom.
          </p>

          <div className="flex cursor-pointer shadow-xl mt-20 align-middle bg-[#FED374] justify-center rounded-xl h-12 p-1 w-[100%] md:w-[10rem]">
            <p className="flex text-xl font-semibold font-poppins tracking-wide items-center text-black justify-center">
              Search
            </p>
          </div>
        </div>
      </div>

      {/* 2nd */}

      <div className="flex flex-col-reverse md:flex-row justify-around mt-20 w-[95%]">
        <div className="flex flex-col items-center justify-center w-[100%] md:w-[50%]">
          <p className="text-4xl font-bold font-avro">
            Universal search for teams
          </p>

          <p className="text-[#888888] w-[100%] md:w-[60%] text-3xl pt-3 leading-[3rem]">
            Our platform serves as the nucleus of your organization&apos;s
            collective wisdom.
          </p>

          <div className="flex cursor-pointer shadow-xl mt-20 align-middle bg-[#FED374] justify-center rounded-xl h-12 p-1 w-[100%] md:w-[10rem]">
            <p className="flex text-xl font-semibold font-poppins tracking-wide items-center text-black justify-center">
              Search
            </p>
          </div>
        </div>

        <motion.div 
        variants={imageAnimate_2}
        initial="initial"
        whileInView={"animate" }
        viewport={{once: true}}
        className="flex flex-col w-[100%] md:w-[50%]">
          <Image
            src="https://framerusercontent.com/images/Fh2qItUTHpt6cia2UxfMWR0nIs.png"
            alt=""
            width={500}
            height={500}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default working;

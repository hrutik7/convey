import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div>
      <div className="bg-gradient-to-b h-auto p-10 from-[#4B2484] to-[#8353ca]">
        <div className="flex flex-col w-[100%] justify-center items-center">
          <div className="flex justify-center w-[50%]">
            <Image
              src="https://framerusercontent.com/images/wTseIYWOLP1b9MqAqiObo4lJwM.png"
              alt="logo"
              width={350}
              height={350}
            />
          </div>
          <div className="flex md:flex-row gap-3 flex-col justify-around mt-10 sm:w-[50%]">
            <div className="flex cursor-pointer align-middle bg-[#FED374] justify-center rounded-xl h-20 p-1 w-[100%] md:w-[16rem]">
              <p className="flex text-2xl font-semibold font-poppins tracking-wide items-center text-black justify-center">
                Start Searching
              </p>
            </div>

            <div className="flex cursor-pointer align-middle border-solid border-white border-2 bg-[#7749BB] justify-center rounded-xl h-20 p-1 w-[100%] md:w-[16rem]">
              <p className="flex text-2xl font-semibold font-poppins tracking-wide items-center text-white justify-center">
                pricing
              </p>
            </div>
          </div>

          <div className="mt-7">
            <Image
              src={
                "https://framerusercontent.com/images/gCW2aMEIPx1ZTpzD1IkopKDYuNc.png?scale-down-to=512"
              }
              alt="logo"
              width={150}
              height={150}
            />
          </div>

          <div className="flex flex-col items-center text-white mt-10">
            <p className="text-6xl text-center font-avro">Universal search for customer success</p>
            <p className="text-2xl mt-6 w-[74%] text-center opacity-[0.7] font-poppins">
            Empower Your Teams: Elevate Customer Interactions with Seamless Search and Intelligent Response Generation – Your Unified Hub for Unleashing Tribal Knowledge

            </p>
          </div>

          <div className="flex flex-col w-[70%]">
            <p className="flex text-4xl mt-20 text-white font-avro justify-center">
                Trusted By
            </p>
            <div className="flex gap-3 flex-col md:flex-row justify-center align-middle md:justify-around mt-20">
              <div className="flex align-center justify-center">
                <Image
                  src={
                    "https://framerusercontent.com/images/goUjk7Wb6ihJdjxGLKPFDs7kIUk.svg"
                  }
                  alt="logo"
                  width={150}
                  height={150}
                />
              </div>

              <div className=" flex mt-3 justify-center">
                <Image
                  src={
                    "https://framerusercontent.com/images/xxxrBDnrjk0B1bXrK52q5EgrE.svg"
                  }
                  alt="logo"
                  width={150}
                  height={150}
                />
              </div>

              <div className="flex mt-3 justify-center">
                <Image
                  src={
                    "https://framerusercontent.com/images/676z4qqUREPWwmRCu8HZ0n2c.svg"
                  }
                  alt="logo"
                  width={150}
                  height={150}
                />
              </div>


              <div className="flex mt-3 justify-center">
                <Image
                  src={
                    "https://framerusercontent.com/images/2AAjSYmUjZcw7m2qPiVqPlBxo.svg"
                  }
                  alt="logo"
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

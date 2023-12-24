import React from "react";

const waiting = () => {
  return (
    <div className="flex bg-white w-[100%] justify-center py-20 flex-col">
      <div className="flex flex-col justify-center items-center">
        <div>
          <p className="text-6xl">🚀</p>
        </div>
        <div>
          <p className="font-avro mt-2 text-[#4b2484] text-5xl">
            Join our waiting list
          </p>
        </div>

        <div className="flex justify-center items-center mt-5">
          <div className="flex justify-center items-center">
            <input
              className="border-2 border-[#4b2484] w-[300px] h-[50px] rounded-lg outline-none px-5"
              type="text"
              placeholder="Enter your email"
            />
            <button className="bg-[#4b2484] ml-2 w-[150px] h-[50px] rounded-lg text-white font-avro">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default waiting;

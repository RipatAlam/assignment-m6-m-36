import React from "react";

const RatingNumber = () => {
  return (
    <div className="bg-linear-to-r from-[#652DF7] to-[#9016f9] py-10">
      <div className="flex justify-center items-center text-center gap-5 w-[80%] mx-auto px-10 py-5">
        <div className="space-y-3 border-r border-purple-400 pr-4 w-[33.33%] text-white">
          <h1 className="text-6xl font-[800] mb-5">50K+</h1>
          <p className="text-2xl font-[500]">Active Users</p>
        </div>
        <div className="space-y-3 border-r border-purple-400 pr-4 w-[33.33%] text-white">
          <h1 className="text-6xl font-[800] mb-5">200+</h1>
          <p className="text-2xl font-[500]">Premium Tools</p>
        </div>
        <div className="space-y-3 w-[33.33%]  text-white">
          <h1 className="text-6xl font-[800] mb-5">4.9</h1>
          <p className="text-2xl font-[500]">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default RatingNumber;

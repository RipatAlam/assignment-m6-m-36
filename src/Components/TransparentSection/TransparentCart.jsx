import React from "react";
import TransParentFeature from "./TransParentFeature";

const TransparentCart = ({ data }) => {
  console.log(data);
  return (
    <div className="relative">
      <div className="border-2 border-zinc-100 p-5 rounded-2xl space-y-2 hover:bg-gradient-to-r hover:from-[#652DF7] hover:to-[#9016f9] hover:text-white transition duration-300">
        <h1 className="text-2xl font-[700] hover:text-white">{data.title}</h1>
        <p className="text-sm hover:text-white">{data.description}</p>
        <p className="text-2xl font-[700] hover:text-white">
          $ {data.price}{" "}
          <span className="text-sm text-zinc-500 hover:text-white du">
            /Month
          </span>
        </p>

        <div className="flex-1 space-y-2">
          {data.featured.map((feature, index) => (
            <TransParentFeature
              key={index}
              feature={feature}
            ></TransParentFeature>
          ))}
        </div>

        {data.status ? (
          <p className="absolute -top-3 right-40 px-3 py-1 rounded-full bg-yellow-100 text-yellow-600 w-max text-sm font-[500] hover:bg-yellow-600 hover:text-white transition duration-300">
            {data.status}
          </p>
        ) : null}
        <button className="mt-4 bg-linear-to-r from-[#652DF7] to-[#9016f9] text-white w-full py-2 rounded-full hover:bg-gradient-to-r hover:from-[#c6c0d4] hover:to-[#c69ee9] transition duration-300">
          {data.button}
        </button>
      </div>
    </div>
  );
};

export default TransparentCart;

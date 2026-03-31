import React from "react";
import FeaturedData from "./FeaturedData";

const DigitalCard = ({ data, index }) => {
  const colors = [
    "bg-red-100 text-red-600",
    "bg-blue-100 text-blue-600",
    "bg-green-100 text-green-600",
    "bg-yellow-100 text-yellow-600",
    "bg-purple-100 text-purple-600",
    "bg-pink-100 text-pink-600",
  ];

  console.log(data);
  return (
    <div className="relative bg-white border-2 border-zinc-100 p-5 rounded-2xl space-y-5">
      <div className="absolute top-2 right-2 flex justify-end text-sm font-[500]">
        <p className={`px-3 py-1 rounded-full ${colors[index % colors.length]}`}>
          {data.status}
        </p>
      </div>
      <img
        className="border border-zinc-200 p-3 rounded-full"
        src={data.image}
        alt=""
      />
      <h1 className="text-2xl font-[700]">{data.title}</h1>
      <p className="text-zinc-500">{data.description}</p>
      <h3 className="text-xl font-[700]">${data.price}</h3>
      <ul className=" text-zinc-500 space-y-1 font-[500]">
        {data.featured.map((feature, index) => (
          <FeaturedData key={index} feature={feature}></FeaturedData>
        ))}
      </ul>
      <button className="btn w-full">Buy Now</button>
    </div>
  );
};

export default DigitalCard;

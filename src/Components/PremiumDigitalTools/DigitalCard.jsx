import React, { useState } from "react";
import FeaturedData from "./FeaturedData";
import { toast } from "react-toastify";

const DigitalCard = ({ data, index, setSelectedCart, selectedCart }) => {
  const [idBuyNow, setIdBuyNow] = useState(false);

  const handleBuyNow = () => {
    setIdBuyNow(!idBuyNow);
    toast.success(`${data.title} added to cart!`);
    const newCart = [...selectedCart, data];
    setSelectedCart(newCart);
  };

  const colors = [
    "bg-red-100 text-red-600",
    "bg-blue-100 text-blue-600",
    "bg-green-100 text-green-600",
    "bg-yellow-100 text-yellow-600",
    "bg-purple-100 text-purple-600",
    "bg-pink-100 text-pink-600",
  ];

  return (
    <div className="relative bg-white border-2 border-zinc-100 p-5 rounded-2xl space-y-5">
      <div className="absolute top-2 right-2 flex justify-end text-sm font-[500]">
        <p
          className={`px-3 py-1 rounded-full ${colors[index % colors.length]}`}
        >
          {data.status}
        </p>
      </div>
      <div className="border-2 border-zinc-100 p-4 rounded-full w-max">
        <img
        className=""
        src={data.image}
        alt=""
      />
      </div>
      <h1 className="text-2xl font-[700]">{data.title}</h1>
      <p className="text-zinc-500">{data.description}</p>
      <h3 className="text-xl font-[700]">
        ${data.price}
        <span className="text-sm font-[400] text-zinc-500">
          /{data.duration}
        </span>{" "}
      </h3>
      <ul className=" text-zinc-500 space-y-1 font-[500]">
        {data.featured.map((feature, index) => (
          <FeaturedData key={index} feature={feature}></FeaturedData>
        ))}
      </ul>
      <button
        onClick={handleBuyNow}
        disabled={idBuyNow ? true : false}
        className={`${!idBuyNow ? "bg-linear-to-r from-[#652DF7] to-[#9016f9] text-white w-full py-2 rounded-full" : "bg-linear-to-r from-[#7654ca] to-[#58505f] text-white w-full py-2 rounded-full"}`}
      >
        {!idBuyNow ? "Buy Now" : "Added to Cart"}
      </button>
    </div>
  );
};

export default DigitalCard;

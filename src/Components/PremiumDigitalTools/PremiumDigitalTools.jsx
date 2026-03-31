import React, { use } from "react";
import DigitalCard from "./DigitalCard";

const PremiumDigitalTools = ({ toolsPromise }) => {
  const DigitalData = use(toolsPromise);
  console.log(DigitalData);

  return (
    <>
      <div className="justify-center items-center text-center gap-5 w-[80%] mx-auto px-10 mt-25">
        <h1 className="text-5xl font-[800] mb-5">PremiumDigitalTools</h1>
        <p className="text-[16px] font-[400] text-zinc-500">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>

        <div className="flex justify-center items-center mt-8">
            <button className="btn">Products</button>
            <button className="btn">Cart(0)</button>
        </div>

        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 text-start">
            {DigitalData.map((data) => (
              <DigitalCard key={data.id} index={data.id} data={data}></DigitalCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumDigitalTools;

import React, { use, useState } from "react";
import DigitalCard from "./DigitalCard";
import SelectedCart from "./SelectedCart/SelectedCart";

const PremiumDigitalTools = ({ toolsPromise }) => {
  const DigitalData = use(toolsPromise);

  const [selectedType, setSelectedType] = useState("Products");
  console.log(selectedType, "selectedType");

  const [selectedCart, setSelectedCart] = useState([]);

  return (
    <>
      <div className="justify-center items-center text-center gap-5 w-[80%] mx-auto px-10 mt-25">
        <h1 className="text-5xl font-[800] mb-5">Premium Digital Tools</h1>
        <p className="text-[16px] font-[400] text-zinc-500 mb-5">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>

        <div>
          <button
            onClick={() => setSelectedType("Products")}
            className={`${selectedType === "Products" ? "bg-linear-to-r from-[#652DF7] to-[#9016f9] text-white p-3 px-5" : "bg-zinc-100 text-black p-3 px-5"} rounded-r-none rounded-l-2xl`}
          >
            Products
          </button>
          <button
            onClick={() => setSelectedType("Cart")}
            className={`${selectedType === "Cart" ? "bg-linear-to-r from-[#652DF7] to-[#9016f9] text-white p-3 px-5" : "bg-zinc-100 text-black p-3 px-5"} rounded-l-none rounded-r-2xl`}
          >
            Cart({selectedCart.length})
          </button>
        </div>

        {selectedType === "Products" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-20 text-start">
            {DigitalData.map((data, index) => (
              <DigitalCard
                key={data.id}
                index={index}
                data={data}
                selectedCart={selectedCart}
                setSelectedCart={setSelectedCart}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10">
            <SelectedCart
              toolsPromise={toolsPromise}
              selectedCart={selectedCart}
              setSelectedCart={setSelectedCart}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default PremiumDigitalTools;

import React from "react";

const SelectedCart = ({ selectedCart, setSelectedCart }) => {
  console.log(selectedCart, "selectedCart");
  return (
    <div>
      <h1 className="text-3xl font-[700] mb-5 text-start">Your Cart</h1>

      {selectedCart.map((document, index) => {
        return (
          <div key={index} className="flex justify-between items-center bg-zinc-100 p-8 rounded-lg mb-5">
            <div className="flex items-center text-start gap-5">
              <img src={document.image} alt="" />
              <div>
                <h3 className="text-xl font-[700]">{document.title}</h3>
                <p className="text-[16px] font-[600]">${document.price}<span className="text-sm font-[400] text-zinc-500">/{document.duration}</span></p>
              </div>
            </div>
            <div>
              <button className="text-red-500 text-sm">Remove</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedCart;

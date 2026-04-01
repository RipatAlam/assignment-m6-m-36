import React from "react";
import { toast } from "react-toastify";

const SelectedCart = ({ selectedCart, setSelectedCart }) => {
  const handleRemoveFromCart = (document) => {
    toast.success(`Removing ${document.title} from cart!`);
    const filteredCart = selectedCart.filter((item) => item.id !== document.id);
    setSelectedCart(filteredCart);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    selectedCart.forEach((document) => {
      totalPrice += document.price;
    });
    return totalPrice;
  };

  const handleCheckout = () => {
    toast.success("Proceeding to checkout!");
    setSelectedCart([]);
  };

  return (
    <div className="border border-zinc-200 p-10 rounded-lg">
      <h1 className="text-3xl font-[700] mb-5 text-start">Your Cart</h1>

      {selectedCart.length === 0 ? (
        <div>
          <p className="text-zinc-500 text-center py-10">
            Your cart is empty. Please add some products to proceed.
          </p>
        </div>
      ) : null}

      {selectedCart.map((document, index) => {
        return (
          <div
            key={index}
            className="flex justify-between items-center bg-zinc-100 p-8 rounded-lg mb-5"
          >
            <div className="flex items-center text-start gap-5">
              <div className="border border-zinc-200 p-3 rounded-full bg-zinc-50">
                <img className="" src={document.image} alt="" />
              </div>

              <div>
                <h3 className="text-xl font-[700]">{document.title}</h3>
                <p className="text-[16px] opacity-50">${document.price}</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleRemoveFromCart(document)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
      <div className="flex justify-between items-center mx-2 my-8">
        <h3 className="text-xl font-[500]">Total:</h3>
        <h3 className="text-xl font-[500]">${calculateTotalPrice()}</h3>
      </div>
      <button
        onClick={handleCheckout}
        className="bg-linear-to-r from-[#652DF7] to-[#9016f9] text-white py-2 rounded-full w-full"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default SelectedCart;

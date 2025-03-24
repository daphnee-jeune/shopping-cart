import React from "react";
import { MdDelete } from "react-icons/md";

const Cart = ({ cart, removeFromCart }) => {
  const cost = (cart.quantity * cart.price).toFixed(2);
  return (
    <div className="my-5 border border-b-primary/30 border-transparent grid grid-cols-6 p-3 items-center">
      <div className="col-span-2">
        <div className="flex items-center gap-5">
          <img src={cart.thumbnail} alt="" className="h-20" />
          <p className="text 2xl font-bold">{cart.title}</p>
        </div>
      </div>
      <div className="col-span-1">
        <p className="text-2xl font-bold">${cart.price}</p>
      </div>
      <div className="col-span-2">
        <div className="flex items-center justify-center gap-1">
          <button className="bg-red-500 text-white px-5 py-3 font-bold rounded-lg">
            -
          </button>
          <span className="px-5 py-3">{cart.quantity}</span>
          <button className="bg-green-500 text-white px-5 py-3 font-bold rounded-lg">
            +
          </button>
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-between">
        <p className="text-2xl font-bold">${cost}</p>
        <button className="bg-red-500 p-3 rounded-lg">
          <MdDelete className="text-2xl text-red-700 hover:text-red-900" />
        </button>
      </div>
    </div>
  );
};

export default Cart;

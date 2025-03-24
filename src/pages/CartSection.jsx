import React from "react";
import useCartStore from "../store/useCartStore";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Cart from "../components/Cart";

const CartSection = () => {
  const { carts, removeFromCart, clearCart, getTotalCost } = useCartStore();
  const totalCost = getTotalCost().toFixed(2);
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col gap-5 min-h-[30rem] my-5 mt-28">
        <h1 className="text-xl ">My cart - </h1>
        {carts.length === 0 ? (
          <p className="text-lg text-center mt-20">Your cart is empty!</p>
        ) : (
          <>
            <div className="">
              {carts.map((cart) => (
                <Cart
                  key={cart.id}
                  cart={cart}
                  removeFromCart={removeFromCart}
                />
              ))}
            </div>
            <div className="mt-auto flex isolate justify-between">
              <button
                onClick={() => clearCart()}
                className="mt-5 border border-red-500 px-5 py-2 rounded-lg text-red-500"
              >
                Empty cart
              </button>
              <div className="flex flex-col">
                <p className="text-2xl font-bold">Sub total: {totalCost}</p>
                <button className="bg-primary px-5 py-2 rounded-lg text-white mt-5">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </MaxWidthWrapper>
  );
};

export default CartSection;

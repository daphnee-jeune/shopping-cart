import React from "react";
import useCartStore from "../store/useCartStore";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Cart from "../components/Cart";

const CartSection = () => {
  const { carts, removeFromCart, clearCart } = useCartStore();
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col gap-5 min-h-[30rem] my-5 mt-28">
        <h1 className="text-xl ">My cart</h1>
        {carts.length === 0 ? (
          <p className="text-lg text-center mt-20">Your cart is empty!</p>
        ) : (
          <>
           <div className="">
            {carts.map(cart => <Cart key={cart.id} cart={cart} removeFromCart={removeFromCart} />)}
           </div>
          </>
        )}
      </div>
    </MaxWidthWrapper>
  );
};

export default CartSection;

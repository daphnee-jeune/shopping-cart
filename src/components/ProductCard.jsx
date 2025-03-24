import React from "react";
import ReviewStar from "./ReviewStar";

const ProductCard = () => {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-lg border border-primary/30 shadow-primary shadow-sm">
      <div className="flex flex-col justify-center items-center overflow-hidden rounded-xl">
        <img
          src="Logo.png"
          alt="Logo"
          className="object-cover object-center hover:scale-125 transition-all duration-300"
        />
        <h3 className="text-xl mt-5 font-bold text-primary">Product title</h3>
      </div>
      <div className="mt-4 px-5 pb-5 flex flex-col items-center">
        <div className="my-5 flex items-center justify-between gap-20">
          <p className="text-2xl font-bold">Price</p>
          <ReviewStar rating={4.5} />
        </div>
        <button className="rounded-full bg-primary hover:bg-primary/90 px-5 py-3 text-centr text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

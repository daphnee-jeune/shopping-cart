import React from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import ReviewStar from "../components/ReviewStar";

const ProductDetail = () => {
  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols2 my-10">
        <div className="justify-center items-center flex">
          <img src="Logo.png" alt="" className="h-96" />
        </div>
        <div className="flex flex-col gap-5 items-start">
          <h1 className="text-2xl font-bold">Product title</h1>
          <h1 className="text-xl font-bold">Product price</h1>
          <p className="w-96">Description</p>
          <ReviewStar rating={4.5} />
          <button className="rounded-full bg-primary hover:bg-primary/90 px-5 py-3 text-centr text-white">
          Add to Cart
        </button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ProductDetail;

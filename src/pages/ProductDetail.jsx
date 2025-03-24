import React, { useEffect } from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import ReviewStar from "../components/ReviewStar";
import { useParams } from "react-router-dom";
import useProductStore from "../store/useProductStore";
import Loading from "../components/Loading";

const ProductDetail = () => {
  const { productId } = useParams();
  const { product, loading, error, fetchProduct } = useProductStore();

  useEffect(() => {
   fetchProduct(productId)
  }, [fetchProduct, productId])
 
  if(loading){
   return <Loading />
  }

  if(error){
   return (
    <div className="text-center text-xl pt-20 text-red-500">{error}</div>
  );
  }
  return (
    <MaxWidthWrapper>
      {product && <div className="grid grid-cols2 my-10">
        <div className="justify-center items-center flex">
          <img src={product.thumbnail} alt={product.description} className="h-96" />
        </div>
        <div className="flex flex-col gap-5 items-start">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <h1 className="text-xl font-bold">{product.price}</h1>
          <p className="w-96">{product.description}</p>
          <ReviewStar rating={product.rating} />
          <button className="rounded-full bg-primary hover:bg-primary/90 px-5 py-3 text-center text-white">
            Add to Cart
          </button>
        </div>
      </div>}
    </MaxWidthWrapper>
  );
};

export default ProductDetail;

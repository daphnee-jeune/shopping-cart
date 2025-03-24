import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import ProductCard from './ProductCard'

const ProductSection = () => {
  return (
    <div>
      <MaxWidthWrapper>
       <section className='grid grid-cols-3 gap-10 my-10 py-10'>
        <ProductCard />
       </section>
      </MaxWidthWrapper>
    </div>
  )
}

export default ProductSection

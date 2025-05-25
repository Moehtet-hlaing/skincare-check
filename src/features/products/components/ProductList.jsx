import React from 'react'
import useSWR from 'swr';
import ProductCard from './ProductCard';
import useCategoryStore from "../../../stores/useCategoryStore";

const ProductList = () => {

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {data, error, isLoading} = useSWR(import.meta.env.VITE_API_URL +'/products', fetcher);
  const {categories} = useCategoryStore();
  const activeCategory = categories.find((category) => category.isActive === true);
  const filteredData = activeCategory
    ? data.filter((product) => product.category === activeCategory.name)
    : data;
  return (
    <section>
      <h1 className='text-2xl font-bold mb-4 font-gray-800'>Product List</h1>
      <div className='grid grid-cols-3 gap-4'>
      {filteredData.map((product) => 
        <ProductCard key={product.id} product={product} />
      )}
    </div>
    </section>
  )
}

export default ProductList
import React from 'react'
import useSWR from 'swr';
import ProductCard from './ProductCard';
import useCategoryStore from "../../../stores/useCategoryStore";
import ProductListLoader from './ProductListLoader';

const ProductList = () => {

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {data, error, isLoading} = useSWR(import.meta.env.VITE_API_URL +'/products', fetcher);
  const {categories} = useCategoryStore();
  const activeCategory = categories.find((category) => category.isActive === true);
  isLoading && <div>Loading...</div>;
  const filteredData =
    activeCategory && activeCategory.name !== "All"
      ? data?.filter((product) => product.category === activeCategory.name)
      : data;
  return (
    <section className="p-4 bg-neutral-50">
  {isLoading ? (
    <ProductListLoader />
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
      {filteredData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )}
</section>

  )
}

export default ProductList
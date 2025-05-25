import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

const ProductDetail = () => {
  const { productId } = useParams();
  console.log(productId);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, isLoading } = useSWR(
    import.meta.env.VITE_API_URL + "/products",
    fetcher
  );

  if (isLoading) {
    return <div>Loading product details...</div>;
  }

  const currentProduct = data.find((product) => product.id === parseInt(productId));

  return (
       <div className="container mx-auto p-4 md:p-8 lg:p-12 bg-white shadow-lg rounded-xl max-w-4xl my-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image Section */}
        <div className="md:w-1/2 flex justify-center items-center p-4 bg-gray-50 rounded-lg">
          <img
            src={currentProduct.image_url}
            alt={currentProduct.product_name}
            className="max-w-full h-auto object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Product Info Section */}
        <div className="md:w-1/2">
          <p className="text-sm text-gray-500 mb-1">{currentProduct.brand_name}</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            {currentProduct.product_name}
          </h1>
          <p className="text-xl font-semibold text-gray-700 mb-4">{currentProduct.category}</p>

          <hr className="my-6 border-gray-200" />

          {/* Key Features */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Key Features:</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {currentProduct.skin_type && currentProduct.skin_type.length > 0 && (
                <li>
                  <strong className="font-medium">Skin Type:</strong> {currentProduct.skin_type.join(', ')}
                </li>
              )}
              {currentProduct.usage_time && currentProduct.usage_time.length > 0 && (
                <li>
                  <strong className="font-medium">Usage Time:</strong> {currentProduct.usage_time.join(' & ')}
                </li>
              )}
            </ul>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-2">About this product:</h2>
            <p className="text-gray-700 leading-relaxed">
              {currentProduct.description}
            </p>
          </div>

          {/* Ingredients (Collapsible for long lists) */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <details>
              <summary className="text-lg font-bold text-gray-800 cursor-pointer flex items-center justify-between">
                <span>Ingredients</span>
                {/* Optional: Add an arrow icon that rotates */}
                <svg className="ml-2 w-4 h-4 transition-transform duration-200 transform details-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <p className="text-gray-600 text-sm mt-3 leading-loose">
                {currentProduct.ingredients.join(', ')}.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

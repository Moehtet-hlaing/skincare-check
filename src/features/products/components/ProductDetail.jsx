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

   <div className="container mx-auto px-4 py-8 max-w-5xl">
    <div className="bg-white rounded-2xl shadow-md overflow-hidden p-6 md:p-10">
      <div className="flex flex-col md:flex-row md:items-center gap-10">
        
        {/* Image Section */}
        <div className="w-1/2 md:w-1/4 md:h-1/4  bg-neutral-100 rounded-xl flex items-center justify-center p-4 shadow-sm">
          <img
            src={currentProduct.image_url}
            alt={currentProduct.product_name}
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>

        {/* Info Section */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <div>
            <h1 className=" relative text-3xl font-extrabold text-neutral-900 leading-tight">{currentProduct.product_name}</h1>
            <div className="relative">
                          <p className="  bg-green-100 text-green-800 text-xs font-medium my-2 px-2.5 py-1 rounded-sm dark:bg-green-900 dark:text-green-300 inline-block ">{currentProduct.brand_name}</p>

            </div>
            <p className="text-lg text-neutral-600 mt-1"><i>{currentProduct.category}</i></p>
          </div>

          {/* Features */}
          <div className=" bg-neutral-100 p-2 inline-block">
            <h2 className="text-lg font-semibold text-neutral-800 mb-2">Key Features</h2>
            <ul className="space-y-1 text-neutral-700 text-sm list-disc list-inside">
              {currentProduct.skin_type?.length > 0 && (
                <li>
                  <span className="font-medium">Skin Type:</span> {currentProduct.skin_type.join(', ')}
                </li>
              )}
              {currentProduct.usage_time?.length > 0 && (
                <li>
                  <span className="font-medium">Usage Time:</span> {currentProduct.usage_time.join(' & ')}
                </li>
              )}
            </ul>
          </div>
                    {/* Ingredients */}
          {currentProduct.ingredients?.length > 0 && (
            <div>
              <details className="group bg-neutral-50 rounded-lg p-4 transition-all">
                <summary className="flex items-center justify-between cursor-pointer text-sm font-semibold text-neutral-800">
                  <span>Ingredients</span>
                  <svg className="w-5 h-5 transform transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-neutral-600 text-sm leading-loose">
                  {currentProduct.ingredients.join(', ')}.
                </p>
              </details>
            </div>
          )}

          {/* Description */}
          {currentProduct.description && (
            <div>
              <p className="text-neutral-700 leading-relaxed text-sm">{currentProduct.description}</p>
            </div>
          )}


        </div>
      </div>
    </div>
  </div>
);

};

export default ProductDetail;

import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import ProductDetailLoader from "./ProductDetailLoader";
import { FaAngleRight } from "react-icons/fa";
import Button from "../../../components/Button";
import NotFound from "../../../components/NotFound";

const ProductDetail = () => {
  const { productId } = useParams();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, isLoading } = useSWR(
    import.meta.env.VITE_API_URL + "/products/"+productId,
    fetcher
  );
  return (
<>
{isLoading? <ProductDetailLoader /> : !data || !data.product_name ? <NotFound /> : ( 
      <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center gap-10">
          {/* Image Section */}
          <div className="w-1/2 md:w-1/4 md:h-1/4  bg-neutral-100 rounded-xl flex items-center justify-center p-4 shadow-sm">
            <img
              src={data?.image_url}
              alt={data?.product_name}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>

          {/* Info Section */}
          <div className="md:w-1/2 flex flex-col gap-4 relative">
            <div>
              <h1 className=" relative text-3xl font-extrabold text-neutral-900 leading-tight">
                {data?.product_name}
              </h1>
              <div className="relative">
                <p className="  bg-green-100 text-green-800 text-xs font-medium my-2 px-2.5 py-1 rounded-sm dark:bg-green-900 dark:text-green-300 inline-block ">
                  {data?.brand_name}
                </p>
              </div>
              <p className="text-lg text-neutral-600 mt-1">
                <i>{data?.category}</i>
              </p>
            </div>

            {/* Features */}
            <div className=" bg-neutral-100 p-2 inline-block">
              <h2 className="text-lg font-semibold text-neutral-800 mb-2">
                Key Features
              </h2>
              <ul className="space-y-1 text-neutral-700 text-sm list-disc list-inside">
                {data?.skin_type?.length > 0 && (
                  <li>
                    <span className="font-medium">Skin Type:</span>{" "}
                    {data?.skin_type.join(", ")}
                  </li>
                )}
                {data?.usage_time?.length > 0 && (
                  <li>
                    <span className="font-medium">Usage Time:</span>{" "}
                    {data?.usage_time.join(" & ")}
                  </li>
                )}
              </ul>
            </div>
            {/* Ingredients */}
            {data?.ingredients?.length > 0 && (
              <div>
                <details className="group bg-neutral-50 rounded-lg p-4 transition-all">
                  <summary className="flex items-center justify-between cursor-pointer text-sm font-semibold text-neutral-800">
                    <span>Ingredients</span>
                    <svg
                      className="w-5 h-5 transform transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <p className="mt-3 text-neutral-600 text-sm leading-loose">
                    {data?.ingredients.join(", ")}.
                  </p>
                </details>
              </div>
            )}

            {/* Description */}
            {data?.description && (
              <div>
                <p className="text-neutral-700 leading-relaxed text-sm">
                  {data?.description}
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    
            <a href={"/products"+`/${parseInt(productId)+ 1}`} className="hidden sm:flex w-12 h-12 bg-neutral-400 rounded-full absolute top-1/2 right-1/6 ">
            <FaAngleRight className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </a>

<div className="flex justify-end mt-4 sm:hidden">
            <Button slot="View Next Product" path={`/products/${parseInt(productId) + 1}`} />

</div>

    </div>
)}
</>
  );
};

export default ProductDetail;

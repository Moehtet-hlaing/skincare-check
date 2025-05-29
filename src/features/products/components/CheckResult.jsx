import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import PageLoading from "../../../components/PageLoading";
import { TiWarningOutline } from "react-icons/ti";
import { FaCircleExclamation } from "react-icons/fa6";
import { RiChatSmileAiLine } from "react-icons/ri";
import Button from "../../../components/Button";

const CheckResult = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { checkId } = useParams();

  const { data, isLoading } = useSWR(
    `${import.meta.env.VITE_API_URL}/check-result/${checkId}`,
    fetcher
  );

  return (
    <section className="p-6 max-w-4xl">
      {isLoading ? <PageLoading /> : data && <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[data?.product1, data?.product2].map((product, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-5 flex gap-4 items-center"
          >
            {product?.image_url ? (
              <img
                src={product.image_url}
                alt={`Product ${idx + 1}`}
                className="w-24 h-24 object-cover rounded-xl"
              />
            ) : (
              <div className="w-24 h-24 bg-neutral-200 animate-pulse rounded-xl" />
            )}

            <div>
              <h4 className="text-lg font-semibold text-neutral-800 mb-1">
                {product?.product_name || (
                  <div className="h-5 bg-neutral-200 w-32 animate-pulse rounded" />
                )}
              </h4>
              <button className="text-sm px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full mb-2">
                {product?.category || "..."}
              </button>
              <div className="mb-2">
                {(product?.usage_time || ["..."]).map((el, index) => (
                  <span key={index} className="text-sm text-neutral-600 p-0.5">
                    <i> {el} </i>
                  </span>
                ))}
              </div>
              <ul className="flex flex-wrap gap-2">
                {(product?.skin_type || ["..."]).map((el, index) => (
                  <li
                    key={index}
                    className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-xs"
                  >
                    {el}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`mt-8  border rounded-xl p-6 text-sm leading-relaxed ${
          data.risk
            ? "border-red-300 bg-red-100 text-red-800"
            : "border-green-300 bg-green-100 text-green-800"
        }`}
      >
        <p>
          {data.risk ? (
            <TiWarningOutline className="inline-block mr-2 w-6 h-6" />
          ) : (
            <RiChatSmileAiLine className="inline-block mr-2 w-6 h-6" />
          )}
          {data?.message || "Checking compatibility..."}
        </p>
      </div>

      <div className="">
        <p className=" mt-4 text-sm font-bold  p-6">
          <FaCircleExclamation className="inline-block mr-2 w-6 h-6" />
          Always patch test new products, especially if you have sensitive skin
          or known allergies. Pay attention to your skin type and whether a
          product is for day or night use. If you experience any irritation,
          redness, or discomfort, stop using the product immediately.
        </p>
      </div>
      <div className="flex justify-end mt-4">
        <Button slot="View Record History" path="/products/records" />
      </div>
      </>}
    </section>
  );
};

export default CheckResult;

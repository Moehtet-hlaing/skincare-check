import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import PageLoading from '../../../components/PageLoading';

const CheckResult = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { checkId } = useParams();

  const { data, isLoading } = useSWR(
    `${import.meta.env.VITE_API_URL}/check-result/${checkId}`,
    fetcher
  );

  if (isLoading) return <PageLoading />;

  return (
    <section className="p-6 max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[data?.product1, data?.product2].map((product, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md p-5 flex gap-4 items-center">
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
                {product?.product_name || <div className="h-5 bg-neutral-200 w-32 animate-pulse rounded" />}
              </h4>
              <button className="text-sm px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full mb-2">
                {product?.category || '...'}
              </button>
              <div className="mb-2">
                {(product?.usage_time || ['...']).map((el, index) => (
                  <span key={index} className="text-sm text-neutral-600 p-0.5">
                   <i> {el}{' '}</i>
                  </span>
                ))}
              </div>
              <ul className="flex flex-wrap gap-2">
                {(product?.skin_type || ['...']).map((el, index) => (
                  <li key={index} className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-xs">
                    {el}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-green-100 border border-green-300 text-green-800 rounded-xl p-6 text-sm leading-relaxed">
        <p>{data?.message || 'Checking compatibility...'}</p>
      </div>
    </section>
  );
};

export default CheckResult;

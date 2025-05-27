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
    <section className="p-6 max-w-5xl mx-auto">
      <h1 className="text-xl font-bold text-gray-800 mb-8">Analysis Result</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[data?.product1, data?.product2].map((product, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md p-5 flex gap-4 items-start">
            {product?.image_url ? (
              <img
                src={product.image_url}
                alt={`Product ${idx + 1}`}
                className="w-24 h-24 object-cover rounded-xl"
              />
            ) : (
              <div className="w-24 h-24 bg-gray-200 animate-pulse rounded-xl" />
            )}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                {product?.product_name || <div className="h-5 bg-gray-200 w-32 animate-pulse rounded" />}
              </h4>
              <button className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full mb-2">
                {product?.category || '...'}
              </button>
              <div>
                {(product?.usage_time || ['...']).map((el, index) => (
                  <span key={index} className="text-sm text-gray-600 mb-2">
                    {el}{' '}
                  </span>
                ))}
              </div>
              <ul className="flex flex-wrap gap-2">
                {(product?.skin_type || ['...']).map((el, index) => (
                  <li key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
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

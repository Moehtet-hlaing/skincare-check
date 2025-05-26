import React from 'react'
import { useParams } from 'react-router-dom';
import useSWR from 'swr';

const CheckResultPage = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { checkId } = useParams();
  const { data, isLoading } = useSWR(
    import.meta.env.VITE_API_URL + "/check-result" + `/${checkId}`,
    fetcher
  );
  isLoading && <div>Loading...</div>;
  console.log(data);
  return (
    <section>
      <h1 className='text-2xl font-bold mb-4 font-gray-800'>Check Result</h1>

      <div className="">
        <p>{data?.message}</p>
      </div>
    </section>
  )
}

export default CheckResultPage
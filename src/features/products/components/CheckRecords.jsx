import React from "react";
import useSWR from "swr";
import { Link } from "react-router-dom";
import PageLoading from "../../../components/PageLoading";

const CheckRecords = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, isLoading } = useSWR(
    import.meta.env.VITE_API_URL + "/check-result?_sort=id&_order=desc",
    fetcher
  );
  return (
    <section>
      {isLoading ? <PageLoading /> : ( data &&
        <div className="">
           {data.map((record) => 
           <div to={`/products/check-ingredients/${record.id}`} key={record.id} className={` sm:flex sm:justify-between flex-col gap-3 p-3 border mb-2 rounded-lg ${record.risk ? "bg-red-50 border-red-500" : "bg-green-50 border-green-500"}`}>
               <Link to={`/products/check-ingredients/${record.id}`} className=" sm:flex gap-2">
                 <div className="flex items-center gap-3 sm:w-1/2 p-2">
                    <img src={record.product1.image_url} alt="" className="w-10 h-10 object-cover rounded-full"/>
                    <span className={`${record.risk ? "text-red-500" : "text-green-500"} font-semibold text-sm`}>{record.product1.product_name}</span>
                </div>
                <div className="flex items-center gap-3 flex-wrap  p-2">
                    <img src={record.product2.image_url} alt="" className="w-10 h-10 object-cover rounded-full"/>
                    <span className={`${record.risk ? "text-red-500" : "text-green-500"} font-semibold text-sm`}>{record.product2.product_name}</span>
                </div>
               </Link>
           </div>
        )}
        </div>
      )}
    </section>
  );
};

export default CheckRecords;

import React from 'react'
import { Link } from 'react-router-dom'

const recordCard = ({id,img_url1,img_url2,product1_name,product2_name,risk}) => {
  return (
    <div to={`/products/check-ingredients/${id}`} key={id} className={` sm:flex sm:justify-between flex-col gap-3 p-3 border mb-2 rounded-lg ${risk ? "bg-red-50 border-red-500" : "bg-green-50 border-green-500"}`}>
                   <Link to={`/products/check-ingredients/${id}`} className=" sm:flex gap-2">
                     <div className="flex items-center gap-3 sm:w-1/2 p-2">
                        <img src={img_url1} alt="" className="w-10 h-10 object-cover rounded-full"/>
                        <span className={`${risk ? "text-red-500" : "text-green-500"} font-semibold text-sm`}>{product1_name}</span>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap  p-2">
                        <img src={img_url2} alt="" className="w-10 h-10 object-cover rounded-full"/>
                        <span className={`${risk ? "text-red-500" : "text-green-500"} font-semibold text-sm`}>{product2_name}</span>
                    </div>
                   </Link>
               </div>
  )
}

export default recordCard
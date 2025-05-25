import React from 'react'
import useCategoryStore from '../../../stores/useCategoryStore';

const CategoryButton = ({category:{id,name,isActive}}) => {
  const {setisActive} = useCategoryStore();
  return (
<button type="button" onClick={()=>setisActive(id)} className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none  rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ${isActive ? 'bg-gray-100 text-blue-700' : 'bg-white text-gray-900 '} `}>
  {name}
</button>

  )
}

export default CategoryButton
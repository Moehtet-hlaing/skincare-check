import React from 'react'
import useCategoryStore from '../../../stores/useCategoryStore';

const CategoryButton = ({category:{id,name,isActive}}) => {
  const {setIsActive} = useCategoryStore();
  return (
<button type="button" onClick={()=>setIsActive(id)} className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none  rounded-full border border-neutral-200 hover:bg-neutral-100 hover:text-neutral-700 focus:z-10 focus:ring-4 focus:ring-neutral-100 ${isActive ? 'bg-neutral-100 text-neutral-700' : 'bg-white text-neutral-900 '} `}>
  {name}
</button>

  )
}

export default CategoryButton
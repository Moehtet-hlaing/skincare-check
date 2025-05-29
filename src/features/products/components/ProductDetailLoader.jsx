import React from 'react'

const ProductDetailLoader = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl animate-pulse">
  <div className="bg-white rounded-2xl shadow-md overflow-hidden p-6 md:p-10">
    <div className="flex flex-col md:flex-row md:items-center gap-10">
      
      {/* Image Skeleton */}
      <div className="w-1/2 md:w-1/4 md:h-1/4 bg-neutral-100 rounded-xl flex items-center justify-center p-4 shadow-sm">
        <div className="w-full h-32 bg-neutral-300 rounded-lg" />
      </div>

      {/* Info Skeleton */}
      <div className="md:w-1/2 flex flex-col gap-4">
        <div>
          <div className="h-6 bg-neutral-300 rounded w-3/4 mb-2" />
          <div className="h-4 bg-neutral-200 rounded w-[30px] mb-2" />
          <div className="h-4 bg-neutral-300 rounded w-1/4" />
        </div>

        {/* Features Skeleton */}
        <div className="bg-neutral-300 p-2 inline-block w-full">
          <div className="h-4 bg-neutral-300 rounded w-1/3 mb-3" />
          <ul className="space-y-2">
            <li className="h-3 bg-neutral-300 rounded w-2/3" />
            <li className="h-3 bg-neutral-300 rounded w-1/2" />
          </ul>
        </div>

        {/* Ingredients Skeleton */}
        <div className="bg-neutral-100 rounded-lg p-4">
          <div className="flex justify-between items-center mb-3">
            <div className="h-4 bg-neutral-300 rounded w-24" />
            <div className="h-4 bg-neutral-300 rounded w-4" />
          </div>
        </div>

        {/* Description Skeleton */}
        <div className='bg-neutral-300 rounded-lg p-4'>
          <div className="h-3 bg-neutral-300 rounded w-full mb-1" />
          <div className="h-3 bg-neutral-300 rounded w-5/6 mb-1" />
          <div className="h-3 bg-neutral-300 rounded w-2/3" />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ProductDetailLoader
import React from "react";

const ProductListLoader = () => {
  const number = Array.from({ length: 6 }, (_, index) => index + 1);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
      {number.map((index) => (
        <div
          key={index}
          className="relative w-80 max-w-sm rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-200 ease-in-out cursor-pointer overflow-hidden animate-pulse"
        >
          {/* Image Skeleton */}
          <div className="h-48 w-full bg-neutral-100 flex items-center justify-center">
            <div className="h-48 w-48 bg-neutral-50 rounded-lg" />
          </div>

          {/* Product Content Skeleton */}
          <div className="p-4 space-y-3 text-center">
            <div className="h-4 bg-neutral-300 rounded w-3/4 mx-auto" />
            <div className="flex gap-2 items-center justify-center mt-2">
              <div className="h-5 bg-neutral-300 rounded-lg w-20" />
              <div className="h-4 bg-neutral-300 rounded w-16" />
            </div>
          </div>

          {/* Button Skeleton */}
          <div className="flex justify-center items-start">
            <div className="p-2 pt-0 flex justify-center w-full">
              <div className="h-9 bg-neutral-300 rounded-full w-3/4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListLoader;

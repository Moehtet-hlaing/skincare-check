import { Link } from "react-router-dom";

const ProductCard = ({
  product: { id, product_name, brand_name, image_url, category },
}) => {
  return (
    <div className="relative w-80 max-w-sm rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-200 ease-in-out cursor-pointer overflow-hidden">
      {/* Image */}
      <div className="h-48 w-full bg-neutral-100 flex items-center justify-center overflow-hidden">
        <img
          src={image_url}
          alt={product_name}
          className="h-full w-full object-contain transition-transform duration-300 ease-in-out hover:scale-105 relative"
        />
      </div>

      {/* Product Content */}
      <div className="p-4 space-y-2 text-center">
        <h3 className="text-md font-semibold text-neutral-800 line-clamp-1">
          {product_name}
        </h3>
        <div className="flex gap-2 items-center justify-center mt-auto">
          <span className="inline-block bg-neutral-300 text-neutral-700 text-xs font-semibold px-3 py-1 rounded-lg">
            {brand_name}
          </span>
          <span className="text-sm text-neutral-800">{category}</span>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center items-start">
              <div className="p-2 pt-0 flex justify-center">
        <Link
          to={`/products/${id}`}
          className="inline-block w-full rounded-full border-neutral-500 border hover:border-neutral-600 text-neutral-800 text-sm font-medium px-6 py-2 text-center transition-colors"
        >
          View Details
        </Link>
      </div>

      </div>

    </div>
  );
};

export default ProductCard;

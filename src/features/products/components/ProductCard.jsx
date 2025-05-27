import { Link } from 'react-router-dom';

const ProductCard = ({ product:{id,product_name,brand_name,image_url,category} }) => {

  return (
<div className="relative w-80 max-w-sm rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-200 ease-in-out cursor-pointer overflow-hidden">
  {/* Image */}
  <div className="h-48 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
    <img
      src={image_url}
      alt={product_name}
      className="h-full w-full object-contain transition-transform duration-300 ease-in-out hover:scale-105"
    />
  </div>

  {/* Product Content */}
  <div className="p-4 space-y-2 text-center">
    <h3 className="text-lg font-semibold text-gray-800 truncate">{product_name}</h3>
    <p className="text-sm text-gray-500">{category}</p>
    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
      {brand_name}
    </span>
  </div>

  {/* Button */}
  <div className="p-4 pt-0 flex justify-center">
    <Link
      to={`/products/${id}`}
      className="inline-block w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 text-center transition-colors"
    >
      View Details
    </Link>
  </div>
</div>

  );
};

export default ProductCard;
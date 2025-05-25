import { Link } from 'react-router-dom';

const ProductCard = ({ product:{id,product_name,brand_name,image_url} }) => {

  return (
    <div
      className="relative h-96 w-80  border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform duration-200 ease-in-out cursor-pointer font-sans bg-white
      hover:scale-105 hover:shadow-xl"
    >
      {/* Image Container */}
      <div className="relative w-full h-48 overflow-hidden flex justify-center items-center bg-gray-100">
        <img
          src={image_url}
          alt={product_name}
          className=" h-full object-cover block mb-2 mx-auto"
          loading='lazy'
        />

      </div>

      {/* Product Info */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
          {product_name}
        </h3>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">{brand_name}</span>
      </div>

      <div className=" flex items-center justify-center">
        <Link to={'/products/'+ id} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          View Detail
        </Link>


      </div>
    </div>
  );
};

export default ProductCard;
import Container from "../../../components/Container";
import { Link } from "react-router-dom";



const ProductHeader = () => {


  return (
    <Container>
      <div className="flex items-center gap-4 px-4 py-2 sticky max-w-[1200px] bg-neutral-50 mb-5">
        <div className="flex justify-between items-center mb-4 flex-grow">
          {/* left side */}
          <div>
            <a href="/" className="text-2xl font-semibold mb-2 text-green-700">
              SkinSync
            </a>
            <p className="text-neutral-700 text-sm">Smart checks for healthy skin.</p>
          </div>
         
        </div>
         {/* right side */}
        <div className="flex items-center">
        <div className="sm:w-1/4 mb-4 block">
          <Link
            to={"/products/check-ingredients"}
            className=" sm:inline-block focus:outline-none text-neutral-700 border border-neutral-700 hover:border-neutral-800 hover:scale-105 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-nowrap"
          >
            Check Products
          </Link>
        </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductHeader;

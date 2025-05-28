import { HiChevronRight, HiHome } from "react-icons/hi";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const BreadCrumb = ({ currentPageTitle, links }) => {
  const navigate =useNavigate();
  return (
    <div className="flex justify-between items-center w-full gap-3 mb-5 py-1.5 px-4">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-1 text-sm font-medium text-neutral-800 hover:text-neutral-900 "
            >
              <HiHome />
              Home
            </Link>
          </li>
          {links &&
            links.map((link, index) => (
              <li key={index} className="inline-flex items-center">
                <Link
                  to={link.path}
                  className="inline-flex items-center gap-1 text-sm font-medium text-neutral-800 hover:text-neutral-900 "
                >
                  <HiChevronRight />
                  {link.title}
                </Link>
              </li>
            ))}
          <li aria-current="page">
            <div className="flex items-center">
              <HiChevronRight />
              <span className="ms-1 text-sm font-medium text-neutral-500 md:ms-2 dark:text-neutral-500">
                {currentPageTitle}
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="flex ">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center size-8 font-medium text-slate-600 bg-transparent border 
                    border-slate-600 first:rounded-s-lg last:rounded-e-lg   disabled:opacity-50 disabled:pointer-events-none"
        >
          <LuChevronLeft />
        </button>
        <button
        onClick={() => navigate(1)}
          className="flex items-center justify-center size-8 font-medium text-slate-600 bg-transparent border 
                    border-slate-600 first:rounded-s-lg last:rounded-e-lg   disabled:opacity-50 disabled:pointer-events-none"
        >
          <LuChevronRight />
        </button>
      </div>
    </div>
  );
};

export default BreadCrumb;

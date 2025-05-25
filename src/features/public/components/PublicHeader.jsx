import React from "react";
import Container from "../../../components/Container";
import { Link } from "react-router-dom";


const PublicHeader = () => {
  const menuLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ]
  return (
    <Container>
      <div className="flex items-center gap-4">
        <div className="flex justify-between items-center mb-4 flex-grow">
        {/* left side */}
      <div>
        <h1 className="text-3xl font-semibold mb-2 text-gray-800">SkinSync</h1>
        <p className="text-gray-700">Smart checks for healthy skin.</p>
      </div>
      {/* right side */}
      <div>
        <ul className="hidden md:flex gap-3 text-nowrap">
          {menuLinks.map((link) => (
            <li key={link.name} className="text-gray-800 border-r border-gray-400 hover:border-gray-900 hover:underline focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-b-full text-sm px-5 py-1.5 me-2 mb-2 ">
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      </div>
        <div className="md:w-1/4 mb-4">
<Link to={'/products'} className="focus:outline-none text-green-700 border border-green-700 hover:border-green-80 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">View Products</Link>

        </div>
      </div>

    </Container>
  );
};

export default PublicHeader;

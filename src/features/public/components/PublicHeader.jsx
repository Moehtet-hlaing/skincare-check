import React, { useState } from "react";
import Container from "../../../components/Container";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";


const PublicHeader = () => {
  const menuLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "about",
    },
    {
      name: "Contact",
      path: "contact",
    },
  ];
  const [isNavOpen, setIsNevOpen] = useState(false);
  const handleToggle = () => {
    setIsNevOpen(!isNavOpen);
  }
  return (
    <Container>
      <div className="flex items-center gap-4 px-4 sticky max-w-[1200px]">
        <div className="flex justify-between items-center mb-4 flex-grow">
          {/* left side */}
          <div>
            <h1 className="text-2xl font-semibold mb-2 text-gray-800">
              SkinSync
            </h1>
            <p className="text-gray-700 text-sm">Smart checks for healthy skin.</p>
          </div>
         
        </div>
         {/* right side */}
        <div className="flex justify-between">
                 <div>
            <ul className="hidden sm:flex gap-3 text-nowrap">
              {menuLinks.map((link) => (
                <li
                  key={link.name}
                  className="text-gray-800 border-r border-gray-400 hover:border-gray-900 hover:underline focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-b-full text-sm px-5 py-1.5 me-2 mb-2 "
                >
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        <div className="sm:w-1/4 mb-4 hidden sm:block">
          <Link
            to={"/products"}
            className=" sm:inline-block focus:outline-none text-green-700 border border-green-700 hover:border-green-80 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-nowrap"
          >
            View Products
          </Link>
        </div>
        </div>

        {/* mobile menu */}
        <div onClick={handleToggle} className="sm:hidden mb-4 ">
          {isNavOpen ? (
            <IoMdClose className="w-6 h-6 cursor-pointer" />
          ) : (
            <RxHamburgerMenu className="w-6 h-6 cursor-pointer" />
          )}
        </div>
        <div className={`flex flex-col bg-white px-2 py-1  w-full absolute translate-y-full ${isNavOpen ? 'block' : 'hidden'}`}>
          <ul className=" gap-3 text-nowrap">
              {menuLinks.map((link) => (
                <li
                  key={link.name}
                  className="text-gray-800 border-gray-400 hover:border-gray-900 hover:underline focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-b-full text-sm px-5 py-1.5 me-2 mb-3 text-center"
                >
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </Container>
  );
};

export default PublicHeader;

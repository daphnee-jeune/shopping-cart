import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const navItems = [
    {
      id: 0,
      title: "Home",
      link: "/",
    },
    {
      id: 1,
      title: "Shop",
      link: "/",
    },
    {
      id: 2,
      title: "About",
      link: "/",
    },
    {
      id: 3,
      title: "Contact",
      link: "/",
    },
  ];
  return (
    <div className="border-b border-primary/30 fixed top-0 z-10 w-full bg-secondary">
      <MaxWidthWrapper>
        <nav className="flex items-center justify-between">
          <div className="">
            <img src="Logo.png" alt="logo" className="h-16" />
          </div>
          <div className="space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="text-gray-300 hover:text-primary"
              >
                {item.title}
              </a>
            ))}
          </div>
          <div className="space-x-4">
            <button className="relative">
             <FaShoppingCart className="text-2xl" />
             <span className="absolute -top-3 -right-3 bg-primary text-white text-xs rounded-full w-5 h-5 flex justify-center items-center">0</span>
            </button>
          </div>
        </nav>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;

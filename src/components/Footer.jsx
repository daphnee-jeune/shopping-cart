import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="bg-primary/10 text-white pt-10 mt-auto">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h2 className="font-bold text-xl mb-4">
              <img src="Logo.png" alt="" className=" h-14" />
            </h2>
          </div>

          <div className=" grid grid-cols-2 gap-2">
            <div>
              <h2 className="font-bold text-xl mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-xl mb-4">Get In Touch</h2>
              <p className="">daphneejeune.dev@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-4" />
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
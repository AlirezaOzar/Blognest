import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="gradinet">
      <div className="container mx-auto flex flex-col mt-20 py-10 px-4">
        <div className="flex justify-between items-center">
          <div className="max-w-[600px] flex flex-col justify-start gap-10">
            <h1 className="text-6xl font-bold">Think beyond the wave</h1>
            <div className="w-full flex items-start gap-10">
              <span className="w-[50%] h-[2px] bg-black"></span>
              <p className="text-xl font-bold">
                We're a place where coders share, stay up-to-date and grow their
                careers.
              </p>
            </div>
          </div>
          <button className="bg-black py-4 px-10 text-white rounded-full text-sm">
            Try for free
          </button>
        </div>
        <div className="flex justify-between mt-20">
          <div className="flex flex-col gap-6">
            <h1 className="uppercase font-bold text-4xl tracking-wider">
              blognest
            </h1>
            <p className="text-neutral-800 max-w-[400px]">
              We're a place where coders share, stay up-to-date and grow their
              careers.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-20">
            <ul className="flex flex-col gap-4">
              <li className="text-lg font-bold">Componey</li>
              <Link to="/">
                <li className="text-neutral-800 text-sm">About</li>
              </Link>
              <Link to="/">
                <li className="text-neutral-800 text-sm">Pricing</li>
              </Link>
              <Link to="/">
                <li className="text-neutral-800 text-sm">jobs</li>
              </Link>
              <Link to="/">
                <li className="text-neutral-800 text-sm">Blog</li>
              </Link>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="text-lg font-bold">Products</li>
              <Link to="/">
                <li className="text-neutral-800 text-sm">Sales Software</li>
              </Link>
              <Link to="/">
                <li className="text-neutral-800 text-sm">Marketplace</li>
              </Link>
              <Link to="/">
                <li className="text-neutral-800 text-sm">Terms & Conditions</li>
              </Link>
              <Link to="/">
                <li className="text-neutral-800 text-sm">Terms & Conditions</li>
              </Link>
              <Link to="/">
                <li className="text-neutral-800 text-sm">Rrivacy Policy</li>
              </Link>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="text-lg font-bold">Discover</li>
              <Link to="/">
                <li className="text-neutral-800 text-sm">CRM Comparision</li>
              </Link>
              <Link to="/">
                <li className="text-neutral-800 text-sm">Partner Program</li>
              </Link>
              <Link to="/">
                <li className="text-neutral-800 text-sm">What is CRM</li>
              </Link>
              <Link to="/">
                <li className="text-neutral-800 text-sm">Resources</li>
              </Link>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="text-lg font-bold">Help Center</li>
              <Link to="/">
                <li className="text-neutral-800 text-sm">knowlage base</li>
              </Link>
              <Link to="/">
                <li className="text-neutral-800 text-sm">Community</li>
              </Link>
              <Link to="/">
                <li className="text-neutral-800 text-sm">Acadamy</li>
              </Link>
              <Link to="/">
                <li className="text-neutral-800 text-sm">Suppurt</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

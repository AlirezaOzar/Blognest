import React, { useContext, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="container mx-auto flex justify-between items-center p-4 mt-10">
      <ul className="flex items-center gap-10">
        <Link to="/">
          <li className="text-xl font-bold tracking-widest">BLOGNEST</li>
        </Link>
        <div className="hidden lg:flex gap-10">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about-us">
            <li>About</li>
          </Link>
          <Link to='/blogs'>
            <li>Blog</li>
          </Link>
          <Link>
            <li>Pricing</li>
          </Link>
          <Link className="flex items-center gap-2">
            <li className="font-bold cool-link">Contact-us</li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </ul>
      {user ? (
        <div className="flex gap-10 items-center">
          <span className="border w-14 h-14 rounded-full">
            <img
              src={PF + user.profilePic}
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
          </span>
          <div className="w-20 text-right hidden md:block">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center items-center gap-10 rounded-md border text-black px-4 py-2 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  {user.username}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 fill-slate-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-slate-500 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-4 text-sm`}
                          onClick={handleLogout}
                        >
                          Log out
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link to="/settings">
                          <button
                            className={`${
                              active
                                ? "bg-slate-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-4 text-sm`}
                          >
                            Settings
                          </button>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link to="/write">
                          <button
                            className={`${
                              active
                                ? "bg-slate-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-4 text-sm`}
                          >
                            Create Post
                          </button>
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      ) : (
        <div className="flex gap-5 items-center">
          <Link to="/login">
            <button className="bg-black text-white text-lg font-bold py-2 px-5 rounded-lg">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button>Sign in</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

import React from "react";
import DropDown from "./DropDown";

const Categories = () => {
  return (
    <div className="container mx-auto flex items-center gap-10 my-20 flex-col lg:flex-row justify-center p-4">
      <div class="w-full relative">
        <div>
          <div class="w-ful">
            <div class="w-full relative">
              <input
                class="w-full border-neutral-400 dark:caret-gray-300 outline-none border-2   transition-all focus:border-gray-300 dark:focus:border-gray-700 placeholder:text-gray-400 placeholder:select-none text-sm md:text-base py-3 md:py-3.5 rounded-xl placeholder:text-right pr-12 md:pr-16 pl-3 md:pl-3.5 bg-white dark:bg-cnDarkBlue-27"
                placeholder="Search on Blogs...."
                type="text"
              />
              <span class="flex justify-center items-center absolute top-1/2 -translate-y-1/2 border-solid transition-all border-cnBlack-10 dark:border-gray-300 pl-2 md:pl-2.5 right-3 md:right-3.5 border-l-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="transition-all w-5 h-5 md:w-6 md:h-6 text-cnBlack-10 dark:text-gray-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="absolute left-0 w-full pt-2 z-1 transition-all opacity-0 invisible">
          <div class="bg-white dark:bg-cnDarkBlue-27 transition-all rounded-xl shadow-cnGray-10 dark:shadow-cnDarkBlue-30 shadow-cnShadow500 p-3 md:p-3.5 flex justify-center items-center">
            <div class="w-full flex flex-col justify-center items-center">
              <ul class="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-3.5 w-full"></ul>
            </div>
          </div>
        </div>
      </div>
      <DropDown />
    </div>
  );
};

export default Categories;

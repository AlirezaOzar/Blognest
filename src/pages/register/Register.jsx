import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });
      console.log(res.data);
      res.data && window.location.replace('/login')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div class="flex justify-center items-center w-full">
        <div class="bg-white dark:bg-white/10 px-7 pt-3 sm:px-14 sm:pt-10 rounded-2xl shadow-cnShadow500 dark:shadow-none transition-all w-41rem">
          <form class="w-full" onSubmit={handleSubmit}>
            <ul class="w-full flex justify-around items-end select-none">
              <li class="cursor-pointer w-full p-3 sm:p-4 text-base lg:text-2xl text-center relative transition-all after:h-0.5 after:w-full after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:bg-cnBlue-20 dark:after:bg-cnDarkBlue-10 font-bold text-cnBlue-20 dark:text-cnDarkBlue-10">
                Login
              </li>
              <li class="cursor-pointer w-full p-3 sm:p-4 text-base lg:text-2xl text-center relative transition-all after:h-0.5 after:w-full after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:bg-gray-300 hover:after:bg-cnBlue-10 dark:after:bg-gray-700 dark:hover:after:bg-cnDarkBlue-10/50">
                Sign up
              </li>
            </ul>
            <div class="relative">
              <div class="w-full">
                <div class="w-full pb-11 sm:pb-20">
                  <h2 class="font-bold text-base lg:text-2xl text-center mt-6 sm:mt-8 lg:mt-10 select-none">
                    Log in to your account
                  </h2>
                  <div class="w-full dir-ltr mt-6 sm:mt-8 lg:mt-10">
                    <div class="w-full relative">
                      <input
                        class="w-full caret-cnBlue-20 dark:caret-gray-300 outline-none border-2 border-solid border-transparent transition-all focus:border-gray-300 dark:focus:border-gray-500 placeholder:text-gray-400 placeholder:select-none text-base lg:text-xl rounded-xl py-3 lg:py-5 placeholder:text-right pr-14 lg:pr-18 pl-4 lg:pl-6 bg-gray-100 dark:bg-cnDarkBlue-25"
                        placeholder="username"
                        inputmode="numeric"
                        type="text"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                      <input
                        class="w-full mt-10 caret-cnBlue-20 dark:caret-gray-300 outline-none border-2 border-solid border-transparent transition-all focus:border-gray-300 dark:focus:border-gray-500 placeholder:text-gray-400 placeholder:select-none text-base lg:text-xl rounded-xl py-3 lg:py-5 placeholder:text-right pr-14 lg:pr-18 pl-4 lg:pl-6 bg-gray-100 dark:bg-cnDarkBlue-25"
                        placeholder="email"
                        inputmode="numeric"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        class="w-full mt-10 caret-cnBlue-20 dark:caret-gray-300 outline-none border-2 border-solid border-transparent transition-all focus:border-gray-300 dark:focus:border-gray-500 placeholder:text-gray-400 placeholder:select-none text-base lg:text-xl rounded-xl py-3 lg:py-5 placeholder:text-right pr-14 lg:pr-18 pl-4 lg:pl-6 bg-gray-100 dark:bg-cnDarkBlue-25"
                        placeholder="password"
                        inputmode="numeric"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <button class="relative bg-black select-none flex justify-center items-center transition-all rounded-lg px-5 md:px-7 py-3 md:py-4 gap-4 text-base lg:text-xl hover:ring-8 ring-cnBlue-15/30 opacity-100 cursor-pointer mt-8 sm:mt-10 lg:mt-12 w-full from-cnBlue-20 to-cnBlue-15 bg-gradient-to-r text-white">
                    <span class="transition-allvisible opacity-100">
                      Log in
                    </span>
                    <span class="h-6 lg:h-7 flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all invisible opacity-0">
                      <span class="styles_bulletLoading__gxMJz">
                        <span class="bg-white"></span>
                        <span class="bg-white"></span>
                        <span class="bg-white"></span>
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

// 21

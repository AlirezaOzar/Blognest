import React, { useContext, useState, Fragment } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const [file, setFile] = useState(null);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, dispatch } = useContext(Context);
  const navigate = useNavigate();

  const PF = "http://localhost:5000/images/";
  const handleSubmit = async (e) => {
    dispatch({ type: "UPDATE_START" });
    e.preventDefault();
    const UpdatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      UpdatedUser.profilePic = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (error) {}
    }
    try {
      const res = await axios.put(
        `http://localhost:5000/api/users/${user._id}`,
        UpdatedUser
      );
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      navigate("/");
      toast.success("Updated Successfully");
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE" });
      console.log(error);
    }
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="w-full flex gap-20">
      <div className="w-[20%] h-[100vh] bg-[#FAFAFB] flex flex-col p-10">
        <div className="flex items-center gap-5">
          <Link to='/'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </Link>
          <h1 className="text-xl font-bold">Public Services</h1>
        </div>
        <div className="mt-20">
          <h2 className="text-3xl font-bold">Settings</h2>
          <ul className="flex flex-col mt-10 gap-10">
            <li className="flex items-center gap-4 ms-8 hover:font-bold cursor-pointer transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-neutral-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <p className="text-neutral-600 text-[16px]">User account</p>
            </li>
            <li className="flex items-center gap-4 ms-8 hover:font-bold cursor-pointer transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z"
                />
              </svg>
              <p className="text-neutral-600 text-[16px]">Security Settings</p>
            </li>
            <li className="flex items-center gap-4 ms-8 hover:font-bold cursor-pointer transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <p className="text-neutral-600 text-[16px]">Document Archive</p>
            </li>
            <li className="flex items-center gap-4 ms-8 hover:font-bold cursor-pointer transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                />
              </svg>
              <p className="text-neutral-600 text-[16px]">Bank Cards</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto flex flex-col mt-10 p-10">
        <div className="flex justify-between items-center gap-10">
          <div className=" flex items-center gap-5">
            <input
              type="text"
              placeholder="Search for..."
              className="border-2 px-5 py-2 rounded-xl min-w-[500px]"
            />
            <button className="bg-black w-14 h-11 flex justify-center items-center rounded-xl placeholder:text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 stroke-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-6">
            <span className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8 stroke-neutral-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
              <span className="w-3 h-3 rounded-full bg-rose-400 absolute -top-1 right-[2px]"></span>
            </span>
            <span className="w-12 h-12">
              <img
                src={PF + user.profilePic}
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            </span>
            <div className="w-32 text-right hidden md:block">
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
                              active
                                ? "bg-slate-500 text-white"
                                : "text-gray-900"
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
        </div>
        <div className="mt-20 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-3xl">User account</h2>
            <p className="text-neutral-500 text-lg">
              Update photo and personal details here.
            </p>
          </div>
          <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
            <div className="w-[100px] h-[100px] relative">
              <img
                src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                alt=""
                className="w-full h-full rounded-full"
              />
              <label
                htmlFor="fileInput"
                className="bg-black absolute right-1 -bottom-1 cursor-pointer w-8 h-8 rounded-full flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 stroke-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              </label>
              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                className="settingsPPInput"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="max-w-[800px] grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder={user.username}
                name="name"
                className="border border-neutral-300 py-3 px-4 w-full rounded-lg placeholder:font-thin"
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="email"
                placeholder={user.email}
                name="email"
                className="border border-neutral-300 py-3 px-4 w-full rounded-lg "
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="border border-neutral-300 py-3 px-4 w-full rounded-lg "
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="w-full flex justify-start ">
              <button
                className="bg-black text-white px-10 py-3 rounded-full"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;

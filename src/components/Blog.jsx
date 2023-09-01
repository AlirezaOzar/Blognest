import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Context } from "../context/Context";

const Blog = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [blog, setBlog] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`http://localhost:5000/api/posts/${path}`);
      setBlog(res.data);
      setDesc(res.data.desc);
      setTitle(res.data.title);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${path}`, {
        data: {
          username: user.username,
        },
      });
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/posts/${path}`, {
        username: user.username,
        title,
        desc,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto flex flex-col mt-20">
      <div className="flex flex-col">
        {blog.photo && (
          <div className="w-full">
            <img src={PF + blog.photo} alt="" className="rounded-lg w-full" />
          </div>
        )}
        {updateMode ? (
          <div>
            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              value={title}
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              value={desc}
              autoFocus={true}
              onChange={(e) => setDesc(e.target.value)}
            />
            <button
              onClick={handleUpdate}
              className="bg-black text-white text-lg font-bold py-2 px-5 rounded-lg"
            >
              Update
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-between p-4">
            <div className="flex justify-between">
              <p className="font-bold">{blog.title}</p>
              <p className="text-neutral-500">
                {new Date(blog.createdAt).toDateString()}
              </p>
            </div>
            <div className="flex justify-between items-center p-4">
              <p className="text-xl font-bold">{blog.username}</p>
            </div>
            <p className="p-4 text-neutral-500">{blog.desc}</p>
            <div className="flex items-center p-4 gap-10"></div>
          </div>
        )}
      </div>

      {blog.username === user?.username && (
        <div className="flex gap-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 stroke-red-500 cursor-pointer"
            onClick={handleDelete}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
            onClick={() => setUpdateMode(true)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Blog;

// 19: 10

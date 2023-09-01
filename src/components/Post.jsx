import React from "react";
import { Link } from "react-router-dom";

const Post = ({ data }) => {
  const PF = "http://localhost:5000/images/";
  return (
    <Link to={`/post/${data._id}`} className="flex flex-col">
      <div className="flex flex-col" key={data._id}>
        {data.photo && (
          <div className="w-full">
            <img src={PF + data.photo} alt="" className="rounded-lg" />
          </div>
        )}
        <div className="flex justify-between items-center p-4">
          <p className="text-sm font-bold">{data.title}</p>
          <p className="text-neutral-500 text-sm">
            {new Date(data.createdAt).toDateString()}
          </p>
        </div>
        <div className="flex justify-between items-center p-4">
          <p className="text-xl font-bold">{data.username}</p>
          <span>
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
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </span>
        </div>
        <p className="p-4 text-neutral-500">{data.desc}</p>
        <div className="flex items-center p-4 gap-10">
          {data.categories.map((category) => {
            return (
              <span className="border py-3 px-5 rounded-full">
                {category.name}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default Post;

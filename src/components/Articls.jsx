import React, { useState } from "react";
import js from '../assets/js.jpg';
import js2 from '../assets/js2.jpg';
import js3 from '../assets/js3.jpg';
const Articls = () => {
  const [data, setData] = useState([
    {
      title: "Important Nodejs packages in 2023",
      desc: "Node.js is a popular open-source platform that is widely used for building scalable and high-performance applications. With the help of Node.js, developers can build server-side applications using JavaScript,",
      image: js,
    },
    {
      title: "Design Patterns in Node.js",
      desc: "Node.js is a popular JavaScript runtime that allows developers to build scalable network applications using an event-driven, non-blocking I/O model. Like any sophisticated framework, Node.js applications can",
      image: js2,
    },
    {
      title: "💻 15 JavaScript Techniques to Enhance Your Code",
      desc: "As a popular programming language for web development, JavaScript offers a lot of features and functionalities. Whether you’re a seasoned developer or just getting started, there are always new tips and tricks to",
      image: js3,
    },
  ]);
  return (
    <div className="container mx-auto mt-20 p-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-10">
          <h2 className="text-4xl font-bold">Articles</h2>
          <p className="text-neutral-500 text-sm">
            Complex teack decoded by engineers, busineses, trends, and
            developers
          </p>
        </div>
        <div className="flex gap-2">
          <span className="w-11 h-11 border rounded-full flex justify-center items-center">
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
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </span>
          <span className="w-11 h-11 bg-[#1D1E25] border rounded-full flex justify-center items-center">
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
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-20 gap-10">
        {data.map((item) => {
          return (
            <div className="flex flex-col">
              <span className="w-full h-[300px]">
                <img src={item.image} alt="" className="w-full h-full object-cover"/>
              </span>
              <div className="flex flex-col justify-start items-start gap-4 mt-10">
                <h1 className="text-xl font-bold">{item.title}</h1>
                <p className="text-sm text-neutral-500">{item.desc}</p>
                <button className="border border-neutral-300 py-2 px-5 rounded-full text-sm font-bold tracking-wider">
                  Read More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Articls;

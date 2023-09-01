import React, { useState } from "react";
import manager2 from "../assets/manger2.jpg";
import team1 from "../assets/meet.jpg";
import team2 from "../assets/work.jpg";
import team4 from "../assets/meet2.jpg";

const BlogsInfo = () => {
  const [data, setData] = useState([
    {
      title: "Why Node.js Is The Ultimate Game-Changer For Backend Development",
      desc: "“When I reached the ripe age of 20, I made a bold decision to become a millionaire, despite being born into humble beginnings. But let me tell you, making such a decision was only the first step on a long and winding road to wealth.I knew that if I truly wanted to achieve financial success, I would have to make some serious sacrifices along the way. And let me tell you, it was no easy feat. But in the end, it was all worth it. In this story, I’m going to share with you the 10 things I had to sacrifice in order to achieve my dream of becoming a millionaire.",
      image: team1,
      date: "5 min read",
    },
    {
      title:
        "Top 10 tricky JavaScript questions that I used to ask in interviews",
      desc: "If you do interviews as a JavaScript developer from time to time, then you know that the questions in such interviews are always similar (more or less, okay!). Under different phrases, interviewers test you for knowledge of the same topics. And despite this, as you will see, the statistics of correct answers to such questions is quite low.How to change the situation? Piece of cake — to do as many exercises as possible across these topics — and most importantly, to understand the result. Start with the ones we have selected for this article.Below we give typical interview questions broken down by topic and the percentage of correct answers from our telegram channel. To give you more insight regarding these numbers, we should note that stats for other quizzes from our channel show a high level of JavaScript proficiency in our audience.",
      image: manager2,
      date: "4 min read",
    },
    {
      title: "TikTok is Doing Everything and Anything to Prevent a US Ban",
      desc: "The clock is TikTok’ing as the Biden administration moves to ban TikTok — TikTok, the popular short-video ",
      image: team2,
      date: "6 min read",
    },
    {
      title: "Nodejs: Callbacks vs Promises",
      desc: "Node.js callbacks and Promises are both used to handle asynchronous operations, but they differ in their",
      image: team4,
      date: "22 min read ",
    },
  ]);
  return (
    <div className="bg-[#1D1E25] py-10">
      <div className="container mx-auto p-4 grid grid-cols-2 text-white gap-x-7 gap-y-10">
        {data.map((data) => {
          return (
            <div
              className="flex flex-col col-span-4 md:col-span-2 lg:col-span-1"
              key=""
            >
              <div className="w-full max-h-[700px]">
                <img
                  src={data.image}
                  alt=""
                  className=" w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex justify-between items-center p-4">
                <p className="text-2xl font-bold">{data.title}</p>
              </div>

              <p className="px-4 text-sm text-neutral-300 overflow-hidden">
                {data.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsInfo;

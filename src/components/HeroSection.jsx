import React, { useCallback, useRef, useState } from "react";
import manager from "../assets/manager.jpg";
import team1 from "../assets/team.jpg";
import team2 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const HeroSection = () => {
  const [data, setData] = useState([
    {
      title: "Why Node.js Is The Ultimate Game-Changer For Backend Development",
      desc: "“Node.js is in danger!” This open-source environment’s days are numbered.",
      image: team1,
      date: "5 min read",
    },
    {
      title:
        "Top 10 tricky JavaScript questions that I used to ask in interviews",
      desc: "Some tricky interview scheduling questions you will face. These questions seem easy,",
      image: manager,
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
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="container mx-auto flex flex-col mt-20 p-4">
      <div className="max-w-[600px] flex flex-col justify-start gap-10">
        <h1 className="text-6xl font-bold">Activity & Updates</h1>
        <div className="w-full flex items-start gap-10">
          <span className="w-[50%] h-[2px] bg-black"></span>
          <p className="text-xl font-bold">
            NESTBLOG is an open platform where readers find dynamic thinking,
            and where expert and undiscovered voices can share their writing on
            any topic.
          </p>
        </div>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Pagination]}
        className="my-20"
        ref={sliderRef}
      >
        <div className="w-full  grid grid-cols-3 gap-10 p-4 my-20 h-full">
          {data.map((data) => {
            return (
              <SwiperSlide className="flex flex-col col-span-3 md:col-span-3 lg:col-span-1 cursor-pointer">
                <div
                  className="flex flex-col col-span-3 md:col-span-3 lg:col-span-1"
                  key=""
                >
                  <div className="w-full h-[300px]">
                    <img
                      src={data.image}
                      alt=""
                      className="rounded-lg w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-center p-4">
                    <p className="text-neutral-500 text-xs">
                      {/* {new Date(data.createdAt).toDateString()} */}
                      {data.date}
                    </p>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4">
                    <p className="text-lg font-bold">{data.title}</p>
                  </div>

                  <p className="px-4 text-sm text-neutral-500 overflow-hidden">
                    {data.desc}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
        <div class="flex justify-center items-center gap-3 sm:gap-5 pt-10 lg:pt-16">
          <div className="flex gap-2">
            <span
              className="cursor-pointer w-11 h-11 border rounded-full flex justify-center items-center prev-arrow"
              onClick={handlePrev}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 swiper-button-next"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </span>
            <span
              onClick={handleNext}
              className="cursor-pointer next-arrow w-11 h-11 bg-[#1D1E25] border rounded-full flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 stroke-white swiper-button-prev"
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
      </Swiper>
    </div>
  );
};

export default HeroSection;

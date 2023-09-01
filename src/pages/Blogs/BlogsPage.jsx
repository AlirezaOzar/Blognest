import React from "react";
import Posts from "../../components/Posts";
import { useLocation } from "react-router-dom";
import womanOffice from "../../assets/woman-office.jpg";
import Layout from "../../Layout/Layout";

const BlogsPage = () => {
  const { search } = useLocation();
  return (
    <Layout>
      <div className="container mx-auto flex flex-col mt-20">
        <div className="flex flex-col p-4 my-20">
          <h1 className="text-7xl font-medium">Last Updates</h1>
          <div className="grid grid-cols-2 items-center gap-32 mt-20">
            <span className="">
              <img
                src={womanOffice}
                alt=""
                className="h-full w-full object-cover"
              />
            </span>
            <div className="flex flex-col gap-5">
              <h2 className="text-4xl font-semibold">
                BLOGNEST A constructive and inclusive social network for
                software
              </h2>
              <p className="text-neutral-500 text-sm">
                The most common method is through phishing emails containing
                malicious attachments or links. The emails are carefully crafted
                to appear legitimate, often impersonating trusted sources or
                containing information personalized to the recipient.
              </p>
            </div>
          </div>
        </div>
        <Posts search={search} />
      </div>
    </Layout>
  );
};

export default BlogsPage;

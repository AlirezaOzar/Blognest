import React from "react";
import HeroSection from "../components/HeroSection";
import Categories from "../components/Categories";
import Posts from "../components/Posts";
import { useLocation } from "react-router-dom";
import BlogsInfo from "../components/BlogsInfo";
import Articls from "../components/Articls";
import Layout from "../Layout/Layout";

const HomePage = () => {
  const { search } = useLocation();
  console.log(location);
  return (
    <Layout>
      <HeroSection />
      <BlogsInfo />
      <Articls/>
    </Layout>
  );
};

export default HomePage;

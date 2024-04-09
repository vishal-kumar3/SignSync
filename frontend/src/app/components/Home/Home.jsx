"use client";
import React, { useEffect, useState } from "react";
import FetchBlogs from "./FetchBlogs";
import BlogCard from "./BlogCard";

const Home = () => {
  return (
      <div className="relative flex justify-center gap-8 py-5 md:py-10">
        <div className="w-[90%] md:w-[50%] flex flex-col bg-white bg-opacity-20 p-1 rounded-md">
          {/* <BlogCard data={blogs} /> */}
          <FetchBlogs />
          {/* {loading ? <BlogCard data={blogs} /> : <div>Loading...</div>} */}
        </div>
      </div>
  );
};

export default Home;

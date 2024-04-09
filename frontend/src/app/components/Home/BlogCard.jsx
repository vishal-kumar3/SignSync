import React, { useState, useEffect, Suspense } from "react";
import { userById } from "@/app/server/signup";
import Blogs from "./Blogs";

const BlogCard = ({ data }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userDataArray = await Promise.all(
        data.map(async (blog) => {
          const { _id, username, avatarImage, followers } = await userById(blog.owner);
          return { _id, username, avatarImage, followers };
        }),
      );
      setUserData(userDataArray);
    };

    fetchData();
  }, [data]);

  // if(data.length === 0){
  //   return (<div>Empty</div>);
  // }

  return (
    <>
      {data.map((blog, i) => (
        <Blogs blog={blog} userData={userData} i={i} />
      ))}
    </>
  );
};

export default BlogCard;

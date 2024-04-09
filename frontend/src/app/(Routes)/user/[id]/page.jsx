"use client";
import Profile from "@/app/components/Profile/Profile.jsx";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = ({ params }) => {
  const tabParams = useSearchParams();

  let tab = tabParams.get("tab");

  if (!["Blogs", "History", "LikedBlogs", "Bookmarks"].includes(tab)) {
    tab = "Blogs";
  }

  return (
      <Profile id={params.id} tab={tab} />
  );
};

export default page;

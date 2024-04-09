import ShowBlog from "@/app/components/Blog/ShowBlog";
import React from "react";

const page = ({ params }) => {
  return <ShowBlog id={params.id} />;
};

export default page;

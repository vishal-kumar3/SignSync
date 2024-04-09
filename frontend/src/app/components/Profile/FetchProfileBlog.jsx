import { getBlogById } from "@/app/server/blogs";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { userById } from "@/app/server/signup";
import { formatRelativeTime } from "@/app/server/dateTime";
import Image from "next/image";

const FetchProfileBlog = ({ id }) => {
  const [blog, setBlog] = useState("");
  const [loading, setLoading] = useState(true);
  const [blogOwner, setBlogOwner] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const blog = await getBlogById(id);
        const blogOwner = await userById(blog.owner);
        setBlog(blog);
        setBlogOwner(blogOwner);
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (

    <div className="bg-[#e2e2e2c2] w-[258px] h-fit text-xs rounded-md">
      <Link href={`/blog/${blog._id}`}>
        <div className="p-1">
          {/* 600 * 400 */}
          <Image className="w-[250px] h-[150px] object-cover object-fit rounded"
            src={blog.thumbnail}
            alt="card__image"
            width={550}
            height={250}
          />
        </div>
        <div className="px-2 py-1 h-[85.5px]">
          <span className="bg-red-400 mr-1 py-[2px] px-2 rounded-full">tag</span>
          <span className="bg-red-400 mr-1 py-[2px] px-2 rounded-full">tag</span>
          <span className="bg-red-400 mr-1 py-[2px] px-2 rounded-full">tag</span>
          <h4 className="text-sm font-semibold line-clamp-1">{blog.title}</h4>
          <p className="line-clamp-2">{blog.description}</p>
        </div>
      </Link>
      <Link href={`/user/${blog.owner}`}>
        <div className="p-2">
          <div className="flex gap-2 items-center">
            <Image className="w-[35px] h-[35px] rounded-full object-cover object-fit"
              src={blogOwner.avatarImage}
              width={35}
              height={35}
              alt="user__image"
            />
            <div>
              <p>@{blogOwner.username}</p>
              <small className="text-slate-500">{formatRelativeTime(blog.createdAt)}</small>
            </div>
          </div>
        </div>
      </Link>
    </div>


    // <div className={`${cardStyles.container}`}>
    //   <div className={cardStyles.card}>
    //     <Link href={`/blog/${blog._id}`}>
    //       <div className={cardStyles.card__header}>
    //         {/* 600 * 400 */}
    //         <img
    //           src={blog.thumbnail}
    //           alt="card__image"
    //           className={`${cardStyles.card__image} ${cardStyles.img}`}
    //           width="600"
    //         />
    //       </div>
    //       <div className={cardStyles.card__body}>
    //         <span className={`${cardStyles.tag} ${cardStyles.tagred}`}>
    //           tag
    //         </span>
    //         <h4>{blog.title}</h4>
    //         <p>{blog.description}</p>
    //       </div>
    //     </Link>
    //     <Link href={`/user/${blog.owner}`}>
    //       <div className={cardStyles.card__footer}>
    //         <div className={cardStyles.user}>
    //           <img
    //             src={blogOwner.avatarImage}
    //             alt="user__image"
    //             className={`${cardStyles.user__image} ${cardStyles.img}`}
    //           />
    //           <div className={cardStyles.user__info}>
    //             <p>@{blogOwner.username}</p>
    //             <small>{formatRelativeTime(blog.createdAt)}</small>
    //           </div>
    //         </div>
    //       </div>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default FetchProfileBlog;

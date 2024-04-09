"use client";
import React, { useEffect, useState } from "react";
import { deleteBlog, getBlogById, likeBlog } from "@/app/server/blogs";
import { userById } from "@/app/server/signup";
import WriteComment from "./WriteComment";
import { useRouter } from "next/navigation";
import { formatRelativeTime } from "@/app/server/dateTime";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import ButtonBar from "./ButtonBar";

const ShowBlog = ({ id }) => {
  const [blog, setBlog] = useState({});
  const [owner, setOwner] = useState({});
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [like, setLike] = useState();

  const router = useRouter();

  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    async function fetchData() {
      try {
        const blogData = await getBlogById(id);
        setBlog(blogData);

        const writer = await userById(blogData.owner);
        setOwner(writer);

        // Set initial comments
        setComments(blogData.comment);
        setLike(blogData.noOfLikes);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function updateLikes() {
      try {
        const blogData = await getBlogById(id);
        setLike(blogData.noOfLikes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    updateLikes();
  }, [loggedInUser])

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (

    !loading &&
    <div className="flex flex-col justify-center items-center w-[80%] text-xs px-10 py-6 bg-white mx-auto rounded-xl">
      {/* title plus profile */}
      <div>
        <h1 className="text-2xl font-bold w-[100%]">{blog.title}</h1>
        {/* profile section */}
        <div className="flex items-center gap-2 py-2">
          <Image className="w-[50px] h-[50px] object-cover object-fit rounded-full" width={60} height={60} src={owner.avatarImage} />
          <div>
            <p>@{owner.username} | {loggedInUser?.followings?.includes(owner._id) ? "Unfollow" : "Follow"}</p>
            <small>{formatRelativeTime(blog.createdAt)}</small>
          </div>
        </div>
        {/* like comment section */}
        <div>
          <ButtonBar blog={blog} like={like} noOfComments={comments.length} />
        </div>
      </div>

      <div className="w-[70%] text-center pt-5">
        {/* description */}
        <div className=" text-wrap">
          `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae harum voluptatibus obcaecati aut provident saepe, aperiam consequatur tempora doloribus adipisci.`
          <hr className="w-[30%] mx-auto mt-2" />
        </div>
        {/* content section */}
        <div className="revert-tailwind">
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, quasi.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sed dolorum enim eum sapiente veritatis earum assumenda hic iste iusto sint eaque minima vel, quia asperiores laboriosam vero odio, odit eos provident autem omnis laborum minus a. Magnam, ducimus asperiores ullam saepe eum dolor fugit, tenetur commodi reiciendis ipsum enim doloribus aliquam, itaque ex praesentium officia est atque esse molestias dolorem a repellat eaque. Delectus nobis excepturi at aliquid architecto tempore mollitia vitae, ullam sint quos nam adipisci incidunt tenetur facilis amet est, repellat necessitatibus porro, optio enim libero minima fuga modi perspiciatis. Ab et necessitatibus quas illum tenetur consequuntur veniam nobis fugiat blanditiis! Facere saepe quia neque ipsam autem quis delectus fugiat, veritatis maxime in quo temporibus sint eius nam voluptatibus. Reiciendis vero unde dolor provident voluptas officia omnis totam maiores perspiciatis dolores, rem soluta cum rerum necessitatibus illum itaque tempora, quas saepe sequi. Sint nam eius corporis commodi nostrum, maxime perspiciatis numquam ex? Aspernatur ducimus minima pariatur quae provident architecto, iure a ratione reprehenderit maiores blanditiis qui quidem delectus natus necessitatibus veniam voluptatibus nulla explicabo veritatis iusto nemo? Officia voluptate natus quas, enim nihil tempora et eum, quos, necessitatibus aliquid ratione dignissimos in harum. Blanditiis molestias odio omnis? </p>
        </div>
      </div>
        
      {/* same like comment bar */}
      <div className="mx-auto md:w-[70%] w-[100%]">
        <ButtonBar blog={blog} like={like} noOfComments={comments.length} />
      </div>

      {/* comment section */}
      <div className="w-[100%]">
        {
          !loading &&
          <WriteComment id={id} blogComments={comments} commentIdReply={false} />
        }      
        </div>

      {/* related posts */}
      <div>
      </div>
    </div>

// {/* <div>
//   <div>
//     <div>
//       <img src={owner.avatarImage} alt="avatar" />
//       <div>
//         <Link href={`/user/${owner._id}`}>@{owner.username}</Link>
//         <p>
//           {formatRelativeTime(blog.createdAt)} · {blog.noOfViews} views
//         </p>
//       </div>
//     </div>
//     <div>
//       {loggedInUser && loggedInUser._id === owner._id ? (
//         <button
//           onClick={async (e) => {
//             dispatch(updateStart());
//             try {
//               const response = await deleteBlog(blog._id);
//               router.replace("/");
//               dispatch(updateSuccess(response));
//             } catch (error) {
//               dispatch(updateFailure(error));
//               console.error("Error deleting blog:", error);
//             }
//           }}
//         >
//           <FontAwesomeIcon icon={faTrash} />
//         </button>
//       ) : (
//         ""
//       )}
//     </div>
//   </div>
//   <div>
//     <h1>{blog.title}</h1>
//     <p>{blog.description}</p>
//     {/* Render the first image */}
//     {blog.images?.length > 0 && <img src={blog.images[0]} alt="holla" />}
//   </div>
//   {/* comment sectoin */}
//   <hr />
//   <div>
//     <div>{blog.noOfViews} Views</div>
//     <div>
//       <span>{like} </span>
//       <FontAwesomeIcon
//         onClick={async (e) => {
//           try {
//             dispatch(likeStart());
//             const response = await likeBlog(blog._id);
//             setLike(response.blog.noOfLikes);
//             dispatch(likeSuceess(response.user));
//           } catch (error) {
//             dispatch(likeFailure(error));
//             console.error(error);
//           }
//         }}
//         style={{
//           color: loggedInUser?.likedBlogs.includes(blog._id) ? "red" : "white",
//         }}
//         icon={faHeart}
//       />
//     </div>
//     <div>
//       <span>{blog.noOfComments} </span>
//       <FontAwesomeIcon style={{ color: "white" }} icon={faComment} />
//     </div>
//   </div>
//   <hr />
//   <div>
//     <WriteComment id={id} blogComments={comments} commentIdReply={null} />
//   </div>
// </div> */}



    // <div className={styles.container}>
    //   <div className={styles.profileCard}>
    //     <div className={styles.profile}>
    //       <img src={owner.avatarImage} alt="avatar" />
    //       <div className={styles.profileInfo}>
    //         <Link href={`/user/${owner._id}`}>@{owner.username}</Link>
    //         <p>
    //           {formatRelativeTime(blog.createdAt)} · {blog.noOfViews} views
    //         </p>
    //       </div>
    //     </div>
    //     <div>
    //       {loggedInUser && loggedInUser._id === owner._id ? (
    //         <button
    //           onClick={async (e) => {
    //             dispatch(updateStart());
    //             try {
    //               const response = await deleteBlog(blog._id);
    //               router.replace("/");
    //               dispatch(updateSuccess(response));
    //             } catch (error) {
    //               dispatch(updateFailure(error));
    //               console.error("Error deleting blog:", error);
    //             }
    //           }}
    //         >
    //           <FontAwesomeIcon icon={faTrash} />
    //         </button>
    //       ) : (
    //         ""
    //       )}
    //     </div>
    //   </div>
    //   <div className={styles.blogPart}>
    //     <h1>{blog.title}</h1>
    //     <p>{blog.description}</p>
    //     {/* Render the first image */}
    //     {blog.images?.length > 0 && <img src={blog.images[0]} alt="holla" />}
    //   </div>
    //   {/* comment sectoin */}

    //   <hr className={commentStyles.hr} />

    //   <div className={styles.actionButtons}>
    //     <div>{blog.noOfViews} Views</div>

    //     <div>
    //       <span>{like} </span>
    //       <FontAwesomeIcon
    //         onClick={async (e) => {
    //           try {
    //             dispatch(likeStart());
    //             const response = await likeBlog(blog._id);
    //             setLike(response.blog.noOfLikes);
    //             dispatch(likeSuceess(response.user));
    //           } catch (error) {
    //             dispatch(likeFailure(error));
    //             console.error(error);
    //           }
    //         }}
    //         style={{
    //           color: loggedInUser?.likedBlogs.includes(blog._id)
    //             ? "red"
    //             : "white",
    //         }}
    //         icon={faHeart}
    //       />
    //     </div>

    //     <div>
    //       <span>{blog.noOfComments} </span>
    //       <FontAwesomeIcon style={{ color: "white" }} icon={faComment} />
    //     </div>
    //   </div>

    //   <hr className={commentStyles.hr} />

    //   <div className={commentStyles.comment}>
    //     <WriteComment id={id} blogComments={comments} commentIdReply={null} />
    //   </div>
    // </div>
  );
};

export default ShowBlog;

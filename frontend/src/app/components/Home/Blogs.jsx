import React, { useState } from "react";
import Link from "next/link";
import { deleteBlog, likeBlog } from "@/app/server/blogs";
import { copyToClipboard } from "@/app/server/copyToClipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareFromSquare,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { formatRelativeTime } from "@/app/server/dateTime";
import { faBars, faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { bookmark } from "@/app/server/signup";
import {
  bookmarkUpdateFailure,
  bookmarkUpdateStart,
  bookmarkUpdateSuccess,
  signInSuccess,
} from "@/app/redux/user/userSlice";
import Image from 'next/image'
import AuthUser from "@/app/utils/AuthUser";
import AuthLoggedInUser from "@/app/utils/AuthLoggedInUser";

const Blogs = ({ blog, userData, i }) => {

  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.currentUser);

  const formattedTime = formatRelativeTime(blog.createdAt);
  const [actionButtons, setActionButtons] = useState(false);
  const [copyLoading, setCopyLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);

  return (
    <div style={{display : deleted ? "hidden" : "initial"}} className="text-xs bg-white rounded-sm mb-3 dark:text-white w-[100%] py-2 px-2" key={`/blog/${blog._id}`}>
      {/* Render blog details using userData state */}
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div>
              <Link href={`/user/${userData[i]?._id}`}>
                <img
                  className="w-[48px] h-[48px] rounded-full object-cover object-center"
                  src={userData[i]?.avatarImage}
                  alt="DP"
                />
              </Link>
            </div>
            <div>
              <div>
                <Link className="" href={`/user/${userData[i]?._id}`}>
                  @{userData[i]?.username}
                </Link>{" "}
                {/* · <span className="text-xs">{formattedTime}</span> */}
              </div>
              <div>{userData[i]?.followers.length} Followers</div>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={async (e) => {
                setCopyLoading(false);
                await copyToClipboard(`http://localhost:3000/blog/${blog._id}`);
                setCopyLoading(true);
              }}
            >
              <FontAwesomeIcon icon={faShareFromSquare} />
            </button>
            {loggedInUser ? (
              <button
                onClick={(e) => {
                  setActionButtons(!actionButtons);
                  setCopyLoading(false);
                }}
              >
                <div>
                  <FontAwesomeIcon icon={faBars} />
                  <div
                    className={`flex flex-col gap-1 md:w-[110px] 
                    ${actionButtons ? "h-[160px] md:h-fit" : "h-[0px]"} 
                        overflow-hidden text-sm md:text-xs absolute -translate-x-[85%] md:-translate-x-[45%] bg-white md:bg-opacity-90 rounded-md transition-all duration-300 ease-in-out`}
                    style={{
                      padding: actionButtons ? "10px" : "0px",
                      // width: actionButtons ? "110px" : "0px",
                      // height: actionButtons ? "110px" : "0px",
                    }}
                  >
                    <AuthUser>
                      <AuthLoggedInUser userId={userData[i]?._id}>
                        <button className=""
                        onClick={async(e) => {
                          try{
                            const response = await deleteBlog(blog._id)
                            dispatch(signInSuccess(response))
                            console.log(deleted)
                            setDeleted(true);
                            console.log(deleted)
                          }catch(err){
                            console.error("Error while deleting the blog:- ",err)
                          }
                        }}>
                          Delete
                        </button>
                      </AuthLoggedInUser>
                      <button className=""
                        onClick={async (e) => {
                          try {
                            dispatch(bookmarkUpdateStart());
                            const response = await bookmark(
                              loggedInUser._id,
                              blog._id
                            );
                            dispatch(
                              bookmarkUpdateSuccess({
                                msg: response.msg,
                                user: response.user,
                              })
                            );
                          } catch (error) {
                            dispatch(bookmarkUpdateFailure(error));
                            console.error("Error bookmarking blog:", error);
                          }
                        }}
                      >
                        {loggedInUser?.bookmark?.includes(blog._id)
                          ? "Bookmarked"
                          : "Bookmark"}
                      </button>
                      <button className="">
                        Report
                      </button>
                    </AuthUser>
                    <button className="">
                      Share
                    </button>
                    <button className="">
                      Related_Posts
                    </button>
                  </div>
                </div>
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div>
        {/* Title */}
        <Link className=" text-base font-semibold" href={`/blog/${blog._id}`}>
          <h2 className=" line-clamp-2">{blog.title}</h2>
        </Link>
        {/* Description */}
        <p className=" line-clamp-3">{blog.description}</p>
        <Image className="w-[100%] h-[300px] object-cover object-center" width={1024} height={1024} src={blog.thumbnail} alt="Blog Image" />
      </div>

      <hr className="w-[100%] border-b-1 mt-2" />

      <div className="flex justify-around py-1">
        <div>{blog.noOfViews} Views</div>

        <div>
          <span>{blog.noOfLikes} </span>
          <FontAwesomeIcon
            className={loggedInUser?.likedBlogs?.includes(blog._id) ? "text-red-500" : "text-slate-400"}
            icon={faHeart}
          />
        </div>

        <div>
          <span>{blog.noOfComments} </span>
          <FontAwesomeIcon className="text-black" icon={faComment} />
        </div>
      </div>

      <hr className="w-[100%] border-b-1 mb-2" />
    </div>

    // <div key={blog._id} className={styles.blogCard}>
    //   {/* Render blog details using userData state */}
    //   <div className={styles.profileContainer}>
    //     <div className={styles.profilePostCard}>
    //       <div className={styles.pic}>
    //         <img src={userData[i]?.avatarImage} alt="DP" />
    //       </div>
    //       <div className={styles.details}>
    //         <div>
    //           <Link href={`/user/${userData[i]?._id}`}>
    //             @{userData[i]?.username}
    //           </Link>{" "}
    //           · <span>{formattedTime}</span>
    //         </div>
    //         <div>{userData[i]?.followers.length} Followers</div>
    //       </div>
    //     </div>

    //     <div className={styles.actionButtons}>
    //       <button
    //         className={styles.actionButtons}
    //         onClick={async (e) => {
    //           setCopyLoading(false);
    //           await copyToClipboard(`http://localhost:3000/blog/${blog._id}`);
    //           setCopyLoading(true);
    //         }}
    //       >
    //         <FontAwesomeIcon icon={faShareFromSquare} />
    //       </button>
    //       {loggedInUser ? (
    //         <button
    //           className={`${styles.actionButtons} ${styles.popup}`}
    //           onClick={(e) => {
    //             setActionButtons(!actionButtons);
    //             setCopyLoading(false);
    //           }}
    //         >
    //           <div className={styles.threeDot}>
    //             <FontAwesomeIcon icon={faBars} />
    //             <div
    //               style={{
    //                 width: actionButtons ? "200px" : "0px",
    //                 height: actionButtons ? "200px" : "0px",
    //               }}
    //               className={styles.popUpButtons}
    //             >
    //               <button>Delete</button>
    //               <button
    //                 onClick={async (e) => {
    //                   try {
    //                     dispatch(bookmarkUpdateStart());
    //                     const response = await bookmark(
    //                       loggedInUser._id,
    //                       blog._id,
    //                     );
    //                     dispatch(
    //                       bookmarkUpdateSuccess({
    //                         msg: response.msg,
    //                         user: response.user,
    //                       }),
    //                     );
    //                   } catch (error) {
    //                     dispatch(bookmarkUpdateFailure(error));
    //                     console.error("Error bookmarking blog:", error);
    //                   }
    //                 }}
    //               >
    //                 {loggedInUser?.bookmark?.includes(blog._id)
    //                   ? "Bookmarked"
    //                   : "Bookmark"}
    //               </button>
    //               <button>Report</button>
    //               <button>Share</button>
    //               <button>Related_Posts</button>
    //             </div>
    //           </div>
    //         </button>
    //       ) : (
    //         ""
    //       )}
    //     </div>
    //   </div>
    //   <div className={styles.blogPart}>
    //     {/* Title */}
    //     <Link href={`/blog/${blog._id}`}>
    //       <h2>{blog.title}</h2>
    //     </Link>
    //     {/* Description */}
    //     <p>{blog.description}</p>
    //     <img src={blog.thumbnail} alt="Blog Image" />
    //   </div>

    //   <div className={actionButtonStyles.actionButtons}>
    //     <div>{blog.noOfViews} Views</div>

    //     <div>
    //       <span>{blog.noOfLikes} </span>
    //       <FontAwesomeIcon
    //         style={{
    //           color: loggedInUser?.likedBlogs?.includes(blog._id)
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
    // </div>
  );
};

export default Blogs;

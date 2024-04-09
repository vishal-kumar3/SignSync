import React from "react";

import { useSelector } from "react-redux";
import Link from "next/link";

const SideProfile = () => {
  const userData = useSelector((state) => state.user.currentUser);

  if (!userData) {
    return <div>Yaha SignIn krne ka button</div>;
  }

  const { _id, username, email, avatarImage, blogs, followers } = userData;

  return (
    <div className="sticky top-14 flex-col hidden gap-1 p-1 rounded-md bg-white rou bg-opacity-5 md:flex md:w-[220px] h-fit">
      <div className="flex gap-2 bg-white py-2 px-1 rounded-md bg-opacity-5 items-center">
        <div>
          <img
            className="w-[40px] h-[40px] rounded-full object-cover object-center"
            src={avatarImage}
            alt="DP"
          />
        </div>
        <div className="text-xs">
          <Link href={`/user/${_id}`}>@{username}</Link>
          <div>{followers?.length} Followers</div>
        </div>
      </div>
      <div className="text-sm bg-white py-2 px-1 rounded-md bg-opacity-5">
        {email}
      </div>
      <div className="text-sm flex flex-col gap-2 bg-white py-2 px-1 rounded-md bg-opacity-5">
        <div className="flex gap-2 justify-between">
          <p>Total blogs posted</p>
          <p>{blogs.length}</p>
        </div>
        <div className="flex gap-2 justify-between">
          <p>Total views</p>
          <p>2186</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SideProfile;

// <div className={styles.profile}>
//   <div className={styles.profileCard}>
//     <div className={styles.pic}>
//       <img src={avatarImage} alt="DP" />
//     </div>
//     <div className={styles.details}>
//       <Link href={`/user/${_id}`}>@{username}</Link>
//       <div>{followers?.length} Followers</div>
//     </div>
//   </div>
//   <div className={styles.contact}>{email}</div>
//   <div className={styles.blogInfo}>
//     <div className={styles.totalBlogs}>
//       <p>Total blogs posted</p>
//       <p>{blogs.length}</p>
//     </div>
//     <div className={styles.blogViews}>
//       <p>Total views on all blogs</p>
//       <p>2186</p>
//     </div>
//   </div>
//   <div></div>
// </div>

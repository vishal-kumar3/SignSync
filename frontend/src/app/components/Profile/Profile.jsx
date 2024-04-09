"use client";
import React, { useEffect, useState } from "react";
import "../../page.css";
import { useDispatch, useSelector } from "react-redux";
import FetchProfileBlog from "./FetchProfileBlog";
import {
  follow,
  updateProfilePic,
  updateUserProfile,
  updateUserSkills,
  userById,
} from "@/app/server/signup";
import Image from "next/image";
import ProfileButton from "./ProfileButton";
import AuthUser from "@/app/utils/AuthUser";
import AuthLoggedInUser from "@/app/utils/AuthLoggedInUser";
import AuthSameUser from "@/app/utils/AuthSameUser";
import { signInSuccess } from "@/app/redux/user/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faMagnifyingGlass,
  faMinus,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFloppyDisk,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import ProfileImage from "./ProfileImage";
import CoverImage from "./CoverImage";

const Profile = ({ id, tab }) => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.currentUser);
  const updateLoading = useSelector((state) => state.user.loading);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [avatarImage, setAvatarImage] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [career, setCareer] = useState("");
  const [location, setLocation] = useState("");
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState([]);
  const [editedSkills, setEditedSkills] = useState([]);

  const [isEdit, setIsEdit] = useState(false);
  const [editSkills, setEditSkills] = useState(false);

  const [isUserFollowed, setIsUserFollowed] = useState(null);
  const [noOfFolloers, setNoOfFolloers] = useState(0);
  const [noOfFollowings, setNoOfFollowings] = useState(0);

  const [currentTab, setCurrentTab] = useState(tab);
  const [currentTabData, setCurrentTabData] = useState([]);

  const allSkills = [
    "Python",
    "Java",
    "JavaScript",
    "C",
    "C++",
    "Ruby",
    "Swift",
    "Kotlin",
    "PHP",
    "Go",
    "Rust",
    "TypeScript",
    "SQL",
    "HTML",
    "CSS",
    "React Js",
    "Next Js",
    "Node Js",
    "MongoDB",
    "MySQL",
    "Django",
    "Flask",
    "Express Js",
  ];
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await userById(id);
        setUser(user);
        setUsername(`@${user?.username}`);
        setFullName(user?.fullName);
        setEmail(user?.email);
        setAvatarImage(user.avatarImage);
        setCoverImage(user.coverImage);
        setNoOfFolloers(user?.followers?.length);
        setNoOfFollowings(user?.following?.length);
        setCareer(user.career);
        setLocation(user.location);
        setAbout(user.about);
        setSkills(user.skills);
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [loggedInUser, id]);

  useEffect(() => {
    function ifFollower() {
      if (loggedInUser && loggedInUser?.following?.includes(id)) {
        return true;
      } else {
        return false;
      }
    }

    setIsUserFollowed(ifFollower());
  }, [isUserFollowed, setIsUserFollowed, loggedInUser]);

  useEffect(() => {
    function returnCurrentTabData() {
      if (currentTab === "Blogs") {
        return user?.blogs;
      } else if (currentTab === "History") {
        return user?.blogHistory;
      } else if (currentTab === "LikedBlogs") {
        return user?.likedBlogs;
      } else {
        return user?.bookmark;
      }
    }

    setCurrentTabData(returnCurrentTabData());
  }, [currentTab, setCurrentTabData, user]);

  if (loading) {
    return <div>Loading Data...</div>;
  }

  return (
    <div className="w-[90%] mx-auto rounded-lg overflow-hidden bg-[#f1f1f1] text-sm">
      <div className="w-[100%] h-fit mb-8">
        <div className="relative">
          <CoverImage coverImage={coverImage} id={id} />
          <div className="relative flex ">
            <div className="absolute rounded-full left-[5%] -bottom-[18%] text-sm">
              <ProfileImage avatarImage={avatarImage} id={user?._id} />
            </div>
            <div className="relative md:left-[calc(5%+190px)] top-1 flex gap-3 items-center">
              <p>{noOfFolloers} Followers</p>
              <p>{noOfFollowings} Followings</p>
              <AuthUser>
                <AuthSameUser userId={user?._id}>
                  <ProfileButton
                    onClick={async (e) => {
                      try {
                        const response = await follow(
                          loggedInUser._id,
                          user._id
                        );
                        dispatch(signInSuccess(response.user));
                        setIsUserFollowed(response.isFollowed);
                      } catch (err) {
                        console.error(
                          "Error while following/unfollowing user:- ",
                          err
                        );
                      }
                    }}
                    type={isUserFollowed ? "Unfollow" : "Follow"}
                    bg="#26D1FF"
                    color="black"
                  />
                  <ProfileButton type="Chat" bg="#ADADAD" color="black" />
                </AuthSameUser>
              </AuthUser>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 flex justify-between">
        <div className="w-[70%]">
          {isEdit ? (
            <>
              <input
                className="bg-white block rounded-sm outline-none"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                value={fullName}
                type="text"
                name="fullName"
                id=""
                placeholder="Full Name... "
              />
              <input
                className="bg-white block rounded-sm outline-none text-sm ml-2 text-slate-500"
                onChange={(e) => {
                  setCareer(e.target.value);
                }}
                value={career}
                type="text"
                name="careerRole"
                id=""
                placeholder="Career Role... "
              />
              <input
                className="bg-white block rounded-sm outline-none text-sm ml-2 text-slate-500"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                value={location}
                type="text"
                name="location"
                id=""
                placeholder="Location... "
              />
              <textarea
                className="bg-white w-full block rounded-sm outline-none my-2 leading-5"
                onChange={(e) => {
                  setAbout(e.target.value);
                }}
                value={about}
                type="text"
                name="description"
                id=""
                placeholder="Description... "
              />
            </>
          ) : (
            <>
              <div>{fullName}</div>
              <div className="text-sm ml-2 text-slate-500">{career}</div>
              <div className="text-sm ml-2 text-slate-500">{location}</div>
              <div className="my-2 leading-5">{about}</div>
            </>
          )}
          <div>
            <AuthUser>
              <AuthLoggedInUser userId={user?._id}>
                <div>
                  <ProfileButton
                    onClick={async (e) => {
                      if (isEdit) {
                        try {
                          const response = await updateUserProfile(
                            id,
                            fullName,
                            career,
                            location,
                            about
                          );
                          dispatch(signInSuccess(response));
                          setFullName(response.fullName);
                          setCareer(response.career);
                          setLoading(response.location);
                          setAbout(response.about);
                        } catch (err) {
                          console.error("Error while updating user profile");
                        }
                      }
                      setIsEdit(!isEdit);
                    }}
                    type={isEdit ? "Update Profile" : "Edit Profile"}
                    bg={"black"}
                    border="2px solid black"
                    color={"white"}
                  />
                  <ProfileButton
                    onClick={(e) => {
                      setIsEdit(false);
                    }}
                    display={isEdit ? "initial" : "none"}
                    type={"Cancel"}
                    border="2px solid black"
                    color="white"
                  />
                  <ProfileButton
                    type={"Settings"}
                    bg={"white"}
                    color={"black"}
                    border="2px solid black"
                  ></ProfileButton>
                </div>
              </AuthLoggedInUser>
            </AuthUser>
          </div>
        </div>
        <div className="w-[30%] self-start text-right h-fit">
          <div className="text-slate-500 pb-2">
            <span>Skills </span>
            {editSkills ? (
              <>
                <FontAwesomeIcon
                  onClick={async (e) => {
                    try {
                      const response = await updateUserSkills(id, [
                        ...skills,
                        ...editedSkills,
                      ]);
                      dispatch(signInSuccess(response));
                    } catch (err) {
                      console.error(err);
                    } finally {
                      setEditedSkills([]);
                      setEditSkills(!editSkills);
                    }
                  }}
                  className="cursor-pointer"
                  icon={faFloppyDisk}
                />
                <FontAwesomeIcon
                  className="cursor-pointer ml-1"
                  onClick={(e) => {
                    setEditSkills(false);
                  }}
                  icon={faXmark}
                />
              </>
            ) : (
              <AuthUser>
                <AuthLoggedInUser userId={user?._id}>
                  <FontAwesomeIcon
                    onClick={(e) => {
                      setEditSkills(!editSkills);
                    }}
                    className="cursor-pointer"
                    icon={faPenToSquare}
                  />
                </AuthLoggedInUser>
              </AuthUser>
            )}
          </div>
          <div className="flex flex-wrap justify-end gap-2 text-sm text-right">
            {[...skills, ...editedSkills].map((skill, i) => {
              return (
                <div
                  onClick={(e) => {
                    setSkills(skills.filter((s) => s !== skill));
                  }}
                  key={i}
                  className={`bg-[#F8CB6A] ${
                    !editSkills ? "" : "cursor-pointer"
                  } px-3 py-1 rounded-2xl`}
                >
                  {skill}{" "}
                  <FontAwesomeIcon
                    className={`text-xs ${!editSkills ? "hidden" : "relative"}`}
                    icon={faMinus}
                  />
                </div>
              );
            })}
          </div>
          <div className="p-2 relative text-right">
            {editSkills && (
              <div>
                <input
                  type="text"
                  onChange={(e) => {
                    setFilter(e.target.value);
                  }}
                  value={filter}
                  className="rounded-full text-md text-slate-600 pl-7 py-1 outline-none"
                  id=""
                />
                <FontAwesomeIcon
                  className="absolute left-[8%] text-slate-400 translate-y-[48%]"
                  icon={faMagnifyingGlass}
                />
                <div className="w-[85%] h-[160px] overflow-y-auto absolute left-[8%] bg-slate-50 divide-y-2">
                  {allSkills.map((skill, i) => {
                    if (skill.toLowerCase().includes(filter.toLowerCase())) {
                      return (
                        <p
                          key={i}
                          onClick={(e) => {
                            if (
                              ![...skills, ...editedSkills].includes(skill) &&
                              skills.length + editedSkills.length < 5
                            ) {
                              setEditedSkills([...editedSkills, skill]);
                            }
                          }}
                          className="w-full text-left p-1 px-2 cursor-pointer hover:bg-slate-100"
                        >
                          {skill}
                        </p>
                      );
                    }
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="px-10 py-3 text-md flex justify-center">
        <div className="flex gap-1 justify-center p-1 rounded-md bg-[#e2e2e2c2]">
          <button
            onClick={(e) => {
              setCurrentTab("Blogs");
            }}
            className={`px-2 py-1 w-[150px] ${
              currentTab === "Blogs" ? "bg-white" : "hover:bg-slate-100"
            } rounded-md`}
          >
            Blogs
          </button>
          <AuthUser>
            <AuthLoggedInUser userId={user?._id}>
              <button
                onClick={(e) => {
                  setCurrentTab("History");
                }}
                className={`px-2 py-1 w-[150px] ${
                  currentTab === "History" ? "bg-white" : "hover:bg-slate-100"
                } rounded-md`}
              >
                History
              </button>
              <button
                onClick={(e) => {
                  setCurrentTab("LikedBlogs");
                }}
                className={`px-2 py-1 w-[150px] ${
                  currentTab === "LikedBlogs"
                    ? "bg-white"
                    : "hover:bg-slate-100"
                } rounded-md`}
              >
                Liked Blogs
              </button>
              <button
                onClick={(e) => {
                  setCurrentTab("Bookmark");
                }}
                className={`px-2 py-1 w-[150px] ${
                  currentTab === "Bookmark" ? "bg-white" : "hover:bg-slate-100"
                } rounded-md`}
              >
                Bookmark
              </button>
            </AuthLoggedInUser>
          </AuthUser>
        </div>
      </div>
      <div className="px-10 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3 content-center">
        {currentTab.length != 0 ? (
          currentTabData?.map((blogId, i) => <FetchProfileBlog id={blogId} />)
        ) : (
          <div>No Posts Yet...</div>
        )}
      </div>
    </div>

    // <div className={styles.container}>
    //   <div className={styles.profile}>
    //     {/* Main profile section */}
    //     <div className={styles.pic}>
    //       <label
    //         htmlFor={
    //           loggedInUser && loggedInUser?._id === user?._id ? "avatarImage" : ""
    //         }
    //       >
    //         {updateLoading && <Spinner width={200} height={200} />}
    //         {!updateLoading && <img src={avatarImage} alt="Profile Image" />}
    //       </label>
    //       <input
    //         style={{ display: "none" }}
    //         type="file"
    //         name="avatarImage"
    //         id="avatarImage"
    //         onChange={async (e) => {
    //           dispatch(updateStart());
    //           try {
    //             const response = await updateProfilePic(
    //               user._id,
    //               e.target.files[0],
    //             );
    //             setAvatarImage(response.avatarImage);
    //             dispatch(updateSuccess(response));
    //           } catch (error) {
    //             dispatch(updateFailure());
    //             console.log("Error while updating avatarImage:- ", error);
    //           }
    //         }}
    //       />
    //       <p>@{user?.username}</p>
    //     </div>
    //     <div className={styles.description}>
    //       <div className={styles.details}>
    //         <input
    //           onChange={(e) => {
    //             setFullName(e.target.value);
    //           }}
    //           value={fullName}
    //           disabled={!isEdit}
    //         />
    //         <input
    //           onChange={(e) => {
    //             setEmail(e.target.value);
    //           }}
    //           value={email}
    //           disabled={!isEdit}
    //         />
    //       </div>

    //       {loggedInUser && loggedInUser?._id === user?._id ? (
    //         <div className={styles.actionButtons}>
    //           {!isEdit && (
    //             <button
    //               onClick={(e) => {
    //                 setIsEdit(true);
    //               }}
    //               className={styles.editBtn}
    //             >
    //               Edit
    //             </button>
    //           )}
    //           {isEdit && (
    //             <button
    //               onClick={async (e) => {
    //                 dispatch(updateStart());
    //                 try {
    //                   const response = await updateUserProfile(
    //                     user._id,
    //                     fullName,
    //                     email,
    //                   );
    //                   setFullName(response.fullName);
    //                   setEmail(response.email);
    //                   setIsEdit(false);
    //                   dispatch(updateSuccess(response));
    //                 } catch (error) {
    //                   dispatch(updateFailure());
    //                   console.log("Error while updating user details", error);
    //                 }
    //               }}
    //               className={styles.updateBtn}
    //             >
    //               Update
    //             </button>
    //           )}
    //           <button>
    //             <Link href={"/blog/create"}>Create Blog</Link>
    //           </button>
    //         </div>
    //       ) : (
    //         ""
    //       )}
    //       {loggedInUser && loggedInUser?._id !== user?._id ? (
    //         <div>
    //           <button
    //             onClick={async (e) => {
    //               dispatch(updateStart());
    //               try {
    //                 const response = await follow(loggedInUser._id, user._id);
    //                 dispatch(updateSuccess(response.user));
    //                 setIsUserFollowed(
    //                   (prevIsUserFollowed) => !prevIsUserFollowed,
    //                 );
    //               } catch (error) {
    //                 dispatch(updateFailure(error));
    //                 console.error("Error while following user:- ", error);
    //               }
    //             }}
    //           >
    //             {isUserFollowed ? "Unfollow" : "Follow"}
    //           </button>
    //         </div>
    //       ) : (
    //         ""
    //       )}
    //     </div>

    //     <div className={styles.stats}>
    //       <div>
    //         <p>
    //           <span>{noOfFolloers}</span> Followers
    //         </p>
    //         <p>
    //           <span>{noOfFollowings}</span> Following
    //         </p>
    //         <p>
    //           <span>{user?.blogs?.length}</span> Blogs
    //         </p>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Section 2 */}
    //   <div className={styles.section2}>
    //     <div className={styles.slideBar}>
    //       <div>
    //         <button
    //           style={
    //             currentTab === "Blogs"
    //               ? { background: "rgb(235, 235, 235, 10%)" }
    //               : {}
    //           }
    //           onClick={(e) => {
    //             setCurrentTab("Blogs");
    //           }}
    //         >
    //           Blogs
    //         </button>
    //       </div>
    //       <div>
    //         <button
    //           style={
    //             currentTab === "History"
    //               ? { background: "rgb(235, 235, 235, 10%)" }
    //               : {}
    //           }
    //           onClick={(e) => {
    //             setCurrentTab("History");
    //           }}
    //         >
    //           History
    //         </button>
    //       </div>
    //       <div>
    //         <button
    //           style={
    //             currentTab === "LikedBlogs"
    //               ? { background: "rgb(235, 235, 235, 10%)" }
    //               : {}
    //           }
    //           onClick={(e) => {
    //             setCurrentTab("LikedBlogs");
    //           }}
    //         >
    //           Liked Blogs
    //         </button>
    //       </div>
    //       <div>
    //         <button
    //           style={
    //             currentTab === "Bookmark"
    //               ? { background: "rgb(235, 235, 235, 10%)" }
    //               : {}
    //           }
    //           onClick={(e) => {
    //             setCurrentTab("Bookmarks");
    //           }}
    //         >
    //           Bookmarks
    //         </button>
    //       </div>
    //     </div>
    //     <div className={styles.data}>
    //       {currentTab.length != 0 ? (
    //         currentTabData?.map((blogId, i) => <FetchProfileBlog id={blogId} />)
    //       ) : (
    //         <div>No Posts Yet...</div>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Profile;

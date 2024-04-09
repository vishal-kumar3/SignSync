import { updateCoverImage } from "@/app/server/signup";
import AuthLoggedInUser from "@/app/utils/AuthLoggedInUser";
import AuthUser from "@/app/utils/AuthUser";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CoverImage = ({ coverImage, id }) => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.currentUser);
  const [editImage, setEditImage] = useState(false);
  const [uploadDone, setUploadDone] = useState(false);
  const [editCoverImage, setEditCoverImage] = useState(
    "https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );

  return (
    <div className="relative">
      <Image
        onClick={(e) => {
          currentUser?._id === id && setEditImage(!editImage);
        }}
        className={`${
          editImage && "blur-sm"
        } w-[100%] h-[200px] object-cover object-center`}
        width={800}
        height={50}
        src="https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Cover Image"
      />

      <AuthUser>
        <AuthLoggedInUser userId={id}>
          <div
            className={`${
              !editImage && "hidden"
            } flex gap-3 items-center text-xl absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]`}
          >
            <input
              onChange={(e) => {
                setEditCoverImage(e.target.files[0]);
                setUploadDone(true);
              }}
              className="hidden"
              type="file"
              name="coverImage"
              id="coverImage"
            />
            <label htmlFor="coverImage">
              <FontAwesomeIcon
                className={uploadDone ? "hidden" : "cursor-pointer"}
                icon={faPenToSquare}
              />
            </label>
            <FontAwesomeIcon
              onClick={async (e) => {
                try {
                  const response = await updateCoverImage(id, editCoverImage);
                  dispatch(signInSuccess(response));
                  setEditImage(false);
                  setUploadDone(false);
                } catch (err) {
                  console.error("Error while uploading Profile image:- ", err);
                }
              }}
              className={uploadDone ? "cursor-pointer" : "hidden"}
              icon={faCheck}
            />
            <FontAwesomeIcon
              onClick={(e) => {
                setEditImage(false);
                setEditCoverImage("");
                setUploadDone(false);
              }}
              className=" cursor-pointer "
              icon={faXmark}
            />
          </div>
        </AuthLoggedInUser>
      </AuthUser>
    </div>
  );
};

export default CoverImage;

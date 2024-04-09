import { signInSuccess } from '@/app/redux/user/userSlice'
import { updateProfilePic } from '@/app/server/signup'
import AuthLoggedInUser from '@/app/utils/AuthLoggedInUser'
import AuthUser from '@/app/utils/AuthUser'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ProfileImage = ({avatarImage, id}) => {

  const dispatch = useDispatch();

  const currentUser = useSelector(state => state.user.currentUser)
  const [editImage, setEditImage] = useState(false)
  const [uploadDone, setUploadDone] = useState(false)
  const [editAvatarImage, setEditAvatarImage] = useState("")

  return (
    <div className="relative rounded-full">
      <Image onClick={(e) => {currentUser?._id === id && setEditImage(!editImage)}}
        className={`${editImage && "blur-sm"} md:size-[170px] rounded-full object-cover object-center`}
        width={200}
        height={200}
        alt="dp"
        src={avatarImage || "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"}
      />

      <AuthUser>
        <AuthLoggedInUser userId={id}>
          <div className={`${!editImage && "hidden"} flex gap-3 items-center text-xl absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]`}>
            <input onChange={(e) => {
              setEditAvatarImage(e.target.files[0])
              setUploadDone(true)
            }} className='hidden' type="file" name="avatarImage" id="avatarImage" />
            <label htmlFor="avatarImage">
              <FontAwesomeIcon className={uploadDone ? "hidden" : "cursor-pointer"} icon={faPenToSquare} />
            </label>
            <FontAwesomeIcon onClick={async(e) => {
              try{
                const response = await updateProfilePic(id, editAvatarImage)
                dispatch(signInSuccess(response));
                setEditImage(false)
                setUploadDone(false)
              }catch(err){
                console.error("Error while uploading Profile image:- ", err)
              }
            }} className={uploadDone ? "cursor-pointer" : "hidden"} icon={faCheck} />
            <FontAwesomeIcon onClick={(e) => {
              setEditImage(false)
              setEditAvatarImage("")
              setUploadDone(false)
            }} className=' cursor-pointer ' icon={faXmark} />
          </div>
        </AuthLoggedInUser>
      </AuthUser>
    </div>
  )
}

export default ProfileImage

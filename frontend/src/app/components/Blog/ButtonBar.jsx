import { likeFailure, likeSuceess, signInSuccess } from '@/app/redux/user/userSlice';
import { likeBlog } from '@/app/server/blogs';
import { copyToClipboard } from '@/app/server/copyToClipboard';
import { bookmark } from '@/app/server/signup';
import { faBookmark, faComment, faHeart, faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment as solidComment } from '@fortawesome/free-solid-svg-icons'
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const ButtonBar = ({blog, like, noOfComments}) => {
  
  const dispatch = useDispatch()
  
  const [currentBlog, setCurrentBlog] = useState(blog)
  const loggedInUser = useSelector(state => state.user.currentUser)

  const [readComments, setReadComments] = useState(false)

  return (
    <div>
      <hr />
      <div className='flex justify-between py-1 w-[100%]'>
        <div className='flex gap-2'>
          <div>
            <span>{like} </span>
            <FontAwesomeIcon
              onClick={async() => {
                try{
                  const response = await likeBlog(blog._id)
                  setCurrentBlog(response.blog)
                  dispatch(signInSuccess(response.user))
                }
                catch(error){
                  console.error('Error while like :- ', error)
                }
              }}
              className={loggedInUser?.likedBlogs?.includes(blog._id) ? 'text-red-500 cursor-pointer' : " cursor-pointer"}
              icon={loggedInUser?.likedBlogs?.includes(blog._id) ? solidHeart : faHeart }
            />
          </div>
          <div>
            <span>{noOfComments || blog.noOfComments} </span>
            <FontAwesomeIcon
              onClick={(e) => {
                setReadComments(!readComments)
              }}
              className=' cursor-pointer'
              icon={readComments ? solidComment : faComment}
            />
          </div>
        </div>
        <div className='space-x-3'>  
          {/* solidBookmark */}
          <FontAwesomeIcon
            onClick={async(e) => {
              try{
                const response = await bookmark(loggedInUser._id, blog._id)
                dispatch(signInSuccess(response.user))
              }
              catch(error){
                console.error("Error while bookmark :- ", error)
              }
            }}
            className=' cursor-pointer'
            icon={loggedInUser?.bookmark?.includes(blog._id) ? solidBookmark : faBookmark } />
          <FontAwesomeIcon 
            className=' cursor-pointer'
            onClick={(e) => {
              copyToClipboard(`http://localhost:3000/blog/${blog._id}`)
            }}
            icon={faShareFromSquare} />
        </div>
      </div>
      <hr />
    </div>
  )
}

export default ButtonBar

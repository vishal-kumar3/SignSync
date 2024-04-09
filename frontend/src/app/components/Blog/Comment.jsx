import { deleteComment, getCommentById } from "@/app/server/comment.js";
import { userById } from "@/app/server/signup";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import WriteComment from "./WriteComment";
import { useSelector } from "react-redux";
import AuthLoggedInUser from "@/app/utils/AuthLoggedInUser";
import AuthUser from "@/app/utils/AuthUser";

const Comment = ({ commentId }) => {
  const loggedInUser = useSelector((state) => state.user.currentUser);

  const [comment, setComment] = useState({});
  const [commentOwner, setCommentOwner] = useState({});
  const [showReply, setShowReply] = useState(false);
  const [replyId, setReplyId] = useState([]);
  const [deletedComment, setDeletedComment] = useState(false);

  useEffect(() => {
    async function fetchComment() {
      const comment = await getCommentById(commentId);
      setComment(comment);
      setReplyId(comment.comment);
      // console.log(replyId)
      const commentOwner = await userById(comment.owner);
      setCommentOwner(commentOwner);
    }

    fetchComment();
  }, []);

  return (

<div className={deleteComment ? "none" : " inline"}>
  <div className="flex gap-2">
    <Image
      className="w-[40px] h-[40px] object-cover object-center rounded-full" 
      src={commentOwner.avatarImage} width={50} height={50} 
    />
    <div>
        <p className="">{commentOwner.fullName} | <span>Time</span></p>
      <div>{comment.content}</div>
    </div>
  </div>
  <div className="mb-2 ml-[48px] space-x-2">
    <span>{comment.noOfLikes}</span>
    <button>Like</button>

    <AuthUser>
    <AuthLoggedInUser userId={commentOwner._id}>
        <button>Edit</button>
        <button
          onClick={async (e) => {
            try {
              const deletedComment = await deleteComment(comment._id);
              setDeletedComment(true);
            } catch (error) {
              console.error("Error while deleting comment ", error);
            }
          }}
        >
          Delete
        </button>
    </AuthLoggedInUser> 
    </AuthUser>

    <AuthUser>
      <span>
        {replyId.length}{" "}
        <button
          onClick={(e) => {
            setShowReply(!showReply);
          }}
        >
          Reply
        </button>
      </span>
    </AuthUser>

    {showReply ? (
      <WriteComment
        commentIdReply={comment._id}
        replyCommentId={comment.comment}
      />
    ) : (
      ""
    )}
  </div>
</div>



    // <div
    //   style={{ display: deletedComment ? "none" : "initial" }}
    //   className={styles.commentCard}
    // >
    //   <div className={styles.commentProfile}>
    //     <Image 
    //       className="w-[35px] h-[35px]"
    //       src={commentOwner.avatarImage} width={50} height={50} 
    //     />
    //     <div>
    //       <p>
    //         {commentOwner.fullName} .
    //         <span className={styles.commentTime}>Time</span>
    //       </p>
    //       <div className={styles.commentContent}>{comment.content}</div>
    //     </div>
    //   </div>
    //   <div className={styles.commentButton}>
    //     <span>{comment.noOfLikes} </span>
    //     <button>Like</button>

    //     {loggedInUser && loggedInUser?._id === commentOwner._id ? (
    //       <>
    //         <button>Edit</button>
    //         <button
    //           onClick={async (e) => {
    //             try {
    //               const deletedComment = await deleteComment(comment._id);

    //               setDeletedComment(true);
    //             } catch (error) {
    //               console.error("Error while deleting comment ", error);
    //             }
    //           }}
    //         >
    //           Delete
    //         </button>
    //       </>
    //     ) : (
    //       ""
    //     )}

    //     <span>
    //       {replyId.length}{" "}
    //       <button
    //         onClick={(e) => {
    //           setShowReply(!showReply);
    //         }}
    //       >
    //         Reply
    //       </button>
    //     </span>

    //     {showReply ? (
    //       <WriteComment
    //         commentIdReply={comment._id}
    //         replyCommentId={comment.comment}
    //       />
    //     ) : (
    //       ""
    //     )}
    //   </div>
    // </div>
  );
};

export default Comment;

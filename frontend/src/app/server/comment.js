import axios from "axios";

const url = "http://localhost:8000/api/v1/comment";
// const url = "https://blogapp-4fjb.onrender.com/api/v1/comment";

export const getCommentById = async (commentId) => {
  try {
    const comment = await axios.get(`${url}/${commentId}`);

    return comment.data.data["comment"];
  } catch (error) {
    throw error;
  }
};

export const updateComment = async (commentId, content) => {
  try {
    const comment = await axios.patch(
      `${url}/${commentId}/update`,
      { content: content },
      { withCredentials: true }
    );

    return comment.data.data["comment"];
  } catch (error) {
    throw error;
  }
};

export const deleteComment = async (commentId) => {
  try {
    const comment = await axios.delete(`${url}/${commentId}/delete`, {
      withCredentials: true,
    });

    return comment.data.data["deletedComment"];
  } catch (error) {
    throw error;
  }
};

export const replyComment = async (commentId, content) => {
  try {
    const reply = await axios.post(
      `${url}/${commentId}/reply`,
      { content: content },
      { withCredentials: true }
    );

    return reply.data.data["reply"];
  } catch (error) {
    throw error;
  }
};

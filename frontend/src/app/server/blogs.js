import axios from "axios";

const url = "http://localhost:8000/api/v1/blog";
// const url = "https://blogapp-4fjb.onrender.com/api/v1/blog"

export const getAllBlogs = async () => {
  const response = await axios.get(url);
  const blogs = response.data.data["blogs"];

  return blogs;
};

export const createBlog = async (title, description) => {
  try {
    const response = await axios.post(`${url}/create`, {title, description}, {
      withCredentials: true,
    });

    const res = {
      _id: response.data.data["blog"]._id,
      user: response.data.data["user"],
    };
    return res;
  } catch (error) {
    throw error;
  }
};

export const uploadThumbnail = async (id, thumbnail) => {
  try {
    const formData = new FormData();
    formData.append("thumbnail", thumbnail);

    const response = await axios.patch(`${url}/${id}/thumbnail`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });

    return response.data.data["thumbnail"];
  } catch (error) {
    throw error;
  }

}

export const uploadBlogImage = async (id, image) => {
  try {
    const formData = new FormData();
    formData.append("image", image);

    const response = await axios.patch(`${url}/${id}/image`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });

    return response.data.data["image"];
  } catch (error) {
    throw error;
  }

}

export const deleteBlog = async (id) => {
  try {
    const response = await axios.delete(`${url}/${id}/delete`, {
      withCredentials: true,
    });

    return response.data.data["user"];
  } catch (error) {
    throw error;
  }
};

export const updateBlog = async (id, title, description) => {
  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);

    const response = await axios.patch(`${url}/${id}/update`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
  } catch (error) {
    throw error;
  }
};

export const likeBlog = async (id) => {
  try {
    const response = await axios.post(
      `${url}/${id}/like`,
      {},
      { withCredentials: true }
    );

    const res = {
      blog: response.data.data["blog"],
      liked: response.data.data["likedDocument"],
      user: response.data.data["userLikedBlogs"],
    };

    return res;
  } catch (error) {
    throw error;
  }
};

export const getBlogById = async (id) => {
  try {
    const response = await axios.get(`${url}/${id}`);

    return response.data.data["blog"];
  } catch (error) {
    throw error;
  }
};

export const viewBlogById = async (id) => {
  try {
    const response = await axios.post(
      `${url}/${id}/view`,
      {},
      { withCredentials: true }
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const comment = async (id, content) => {
  try {
    const response = await axios.post(
      `${url}/${id}/comment`,
      { content: content },
      { withCredentials: true }
    );

    return response.data.data["comment"];
  } catch (error) {
    throw error;
  }
};

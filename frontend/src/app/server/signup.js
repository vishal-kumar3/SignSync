import axios from "axios";

const url = "http://localhost:8000/api/v1/users";
// const url = "https://blogapp-4fjb.onrender.com/api/v1/users";

const domain = "dev-vishal03.us.auth0.com";
const audience = "https://www.testApi.com"
const client_id = "ewvuqzSt5z4xMjhl8MotyHs5aaiBSgUS"
const responseType = "code";


export const userById = async (id) => {
  try {
    const res = await axios.get(`${url}/${id}`);
    return res.data.data["user"];
  } catch (error) {
    throw error;
  }
};

export const SignupSubmit = async (username, fullName, email, password) => {
  try {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("password", password);

    const response = await axios.post(`${url}/register`, {
      username,
      fullName,
      email,
      password,
    });

    return response.data.data["createdUser"];
  } catch (error) {
    throw error; // Re-throw the error to handle it in the component
  }
};

export const SigninSubmit = async (email, password) => {
  try {
    const response = await axios.post(
      `${url}/login`,
      { email: email, password: password },
      { withCredentials: true }
    );

    return response.data.data["loggedInUser"];
  } catch (error) {
    throw error;
  }
};

export const authSigninSubmit = async () => {};

export const LogoutSubmit = async () => {
  try {
    const response = await axios.post(
      `${url}/logout`,
      {},
      {
        withCredentials: true,
      }
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const updateProfilePic = async (id, avatarImage) => {
  try {
    const formData = new FormData();
    formData.append("avatarImage", avatarImage); // Append the file here
    const response = await axios.patch(
      `${url}/${id}/updateProfilePic`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
        onUploadProgress: (progressEvent) => {
          console.log(
            "Upload Progress: " +
              Math.round((progressEvent.loaded / progressEvent.total) * 100) +
              "%"
          );
        },
      }
    );

    return response.data.data["user"];
  } catch (error) {
    throw error;
  }
};

export const updateCoverImage = async (id, coverImage) => {
  try {
    const formData = new FormData();
    formData.append("coverImage", coverImage); // Append the file here
    const response = await axios.patch(
      `${url}/${id}/updateCoverImage`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );

    return response.data.data["user"];
  } catch (error) {
    throw error;
  }
};

export const updateUserProfile = async (
  id,
  fullName,
  career,
  location,
  about
) => {
  try {
    const response = await axios.patch(
      `${url}/${id}/updateUserProfile`,
      {
        fullName,
        career,
        location,
        about,
      },
      { withCredentials: true }
    );

    return response.data.data["user"];
  } catch (error) {
    throw error;
  }
};

export const updateUserSkills = async (id, skills) => {
  try {
    const response = await axios.patch(
      `${url}/${id}/updateUserSkills`,
      {
        skills,
      },
      { withCredentials: true }
    );

    return response.data.data["user"];
  } catch (error) {
    throw error;
  }
};

export const bookmark = async (id, blogId) => {
  try {
    const response = await axios.patch(
      `${url}/${id}/bookmark`,
      {
        blogId: blogId,
      },
      { withCredentials: true }
    );

    const res = {
      user: response.data.data["user"],
      msg: response.data["message"],
    };

    return res;
  } catch (error) {
    throw error;
  }
};

export const follow = async (loggedUserId, userId) => {
  try {
    const response = await axios.patch(
      `${url}/${loggedUserId}/follow`,
      {
        userId: userId,
      },
      { withCredentials: true }
    );

    const res = {
      user: response.data.data["user"],
      msg: response.data.data["message"],
      isFollowed: response.data.data["isFollowed"],
    };

    return res;
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await axios.post(
      `${url}/getCurrentUser`,
      {},
      {
        withCredentials: true,
      }
    );

    return response.data.data["user"];
  } catch (error) {
    throw error;
  }
};

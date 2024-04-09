import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloud } from "../utils/cloudinary.js";
import { Blog } from "../models/blog.models.js";
import jwt from "jsonwebtoken";

export const generateAccessAndRefreshToken = async (id) => {
  const user = await User.findById(id);

  if (!user) {
    throw new ApiError(401, "Unauthorized access");
  }

  const accessToken = await user.generateAccessToken();
  const refreshToken = await user.generateRefreshToken();

  user.refreshToken = refreshToken;

  await user.save({ validateBeforeSave: false });

  return { accessToken, refreshToken };
};

export const getCurrentUser = asyncHandler(async (req, res) => {
  const user = req.user;

  if (!user) {
    const token =
      req.cookies?.refreshToken ||
      req.header("Authorizaton")?.replace("Bearer ", "");

    if (!token) {
      return res.status(200).json(
        new ApiResponse(
          200,
          {
            user: null,
          },
          "No user found"
        )
      );
    }

    const decodedToken = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

    const currentUser = await User.findById(decodedToken?._id)?.select(
      "-password -refreshToken -role"
    );

    if (!currentUser) {
      throw new ApiError(401, "Unauthorized access!!");
    }

    const { refreshToken, accessToken } = await generateAccessAndRefreshToken(
      currentUser._id
    );

    return res
      .status(200)
      .cookie("accessToken", accessToken, {
        maxAge: 24 * 60 * 60 * 1000,
      })
      .cookie("refreshToken", refreshToken, {
        maxAge: 24 * 60 * 60 * 10000,
      })
      .json(
        new ApiResponse(
          200,
          {
            user: currentUser,
          },
          "User fetched successfully"
        )
      );
  }

  const currentUser = await User.findById(user._id)?.select(
    "-password -refreshToken -role"
  );

  if (!currentUser) {
    throw new ApiError(401, "Unauthorized access!!");
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        user: currentUser,
      },
      "User fetched successfully"
    )
  );
});

export const register = asyncHandler(async (req, res) => {
  const { username, fullName, email, password } = req.body;

  if (
    [username, fullName, email, password].some(
      (field) => !field || field.trim() === ""
    )
  ) {
    throw new ApiError(401, "All the fields are required!!!");
  }

  const userExists = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (userExists) {
    throw new ApiError(400, "User with same username or email already exists");
  }

  const user = await User.create({
    username,
    fullName,
    email,
    password,
  });

  if (!user) {
    throw new ApiError(500, "Error while register user");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "User registerd successfully"));
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    throw new ApiError(400, "Email and Password both are required");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(404, "User not found, please register first");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(403, "Unauthorized access, password is incorrect");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken -role"
  );

  const options = {
    // httpOnly: true,
    sameSite: false,
    maxAge: 24 * 60 * 60 * 1000,
    // secure: true
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, {
      sameSite: false,
      maxAge: 24 * 60 * 60 * 1000,
    })
    .cookie("refreshToken", refreshToken, {
      sameSite: false,
      maxAge: 24 * 60 * 60 * 10000,
    })
    .json(
      new ApiResponse(
        200,
        {
          loggedInUser,
        },
        "User logged in successfully"
      )
    );
});

export const logout = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(req.user._id, {
    $set: {
      refreshToken: undefined,
    },
  });

  const options = {
    // httpOnly: true,
    // sameSite: none,
    // secure: true,
  };

  return res
    .status(200)
    .clearCookie("refreshToken")
    .clearCookie("accessToken")
    .json(new ApiResponse(200, {}, "User logged off successfully"));
});

export const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw new ApiError(400, "Id is required, bad request");
  }

  let user;

  try {
    user = await User.findById(id)?.select("-password -refreshToken -role");
  } catch (error) {
    throw new ApiError(400, "Invalid id, bad request");
  }

  if (!user) {
    throw new ApiError(400, "Invalid id, Bad request");
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        user,
      },
      "User fetched successfully"
    )
  );
});

export const getAllUsers = asyncHandler(async (req, res) => {
  const user = await User.find()?.select("-password -refreshToken -role");

  if (!user) {
    throw new ApiError(500, "Error on server");
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        user,
      },
      "All users fetched successfully"
    )
  );
});

export const updateProfilePic = asyncHandler(async (req, res) => {
  const loggedInUser = req.user;
  const { id } = req.params;
  const avatarImageLocalPath = req.file?.path;

  if (!id) {
    throw new ApiError(400, "Invalid Id");
  }

  if (!loggedInUser) {
    throw new ApiError(401, "User must be logged in");
  }

  const user = await User.findById(id)?.select("-password -refreshToken -role");

  if (!user) {
    throw new ApiError(404, "User not found!!");
  }

  if (!(String(loggedInUser._id) == String(user._id))) {
    throw new ApiError(
      401,
      "You are unauthorised to delete blogs of other users"
    );
  }

  if (!avatarImageLocalPath) {
    throw new ApiError(400, "Please upload avatar image");
  }

  const avatarImage = await uploadOnCloud(avatarImageLocalPath);

  if (!avatarImage) {
    throw new ApiError(501, "Error while uploading avatarImage to cloud");
  }

  user.avatarImage = avatarImage.url;
  await user.save({ validateBeforeSave: false });

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        user,
      },
      "User profile updated successfully!"
    )
  );
});

export const updateCoverPic = asyncHandler(async (req, res) => {
  const loggedInUser = req.user;
  const { id } = req.params;
  const coverImageLocalPath = req.file?.path;

  if (!id) {
    throw new ApiError(400, "Invalid Id");
  }

  if (!loggedInUser) {
    throw new ApiError(401, "User must be logged in");
  }

  const user = await User.findById(id)?.select("-password -refreshToken -role");

  if (!user) {
    throw new ApiError(404, "User not found!!");
  }

  if (!(String(loggedInUser._id) == String(user._id))) {
    throw new ApiError(
      401,
      "You are unauthorised to delete blogs of other users"
    );
  }

  if (!coverImageLocalPath) {
    throw new ApiError(401, "Please upload cover image");
  }

  const coverImage = await uploadOnCloud(coverImageLocalPath);

  if (!coverImage) {
    throw new ApiError(501, "Error while uploading coverImage to cloud");
  }

  user.coverImage = coverImage.url;
  await user.save({ validateBeforeSave: false });

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        user,
      },
      "User profile updated successfully!"
    )
  );
});

export const updateUserProfile = asyncHandler(async (req, res) => {
  const loggedInUser = req.user;
  const { id } = req.params;

  const { fullName, career, location, about } = req.body;

  if (!loggedInUser) {
    throw new ApiError(401, "User must be logged in to user these features");
  }

  if (!id) {
    throw new ApiError(400, "Invalid user id");
  }

  if (
    [fullName, career, location, about].some(
      (field) => !field || field.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required!!");
  }

  const user = await User.findById(id)?.select("-password -refreshToken -role");

  if (!user) {
    throw new ApiError(404, "User not found!!");
  }

  if (String(loggedInUser._id) !== String(user._id)) {
    throw new ApiError(401, "You cannot tamper other users profile");
  }

  user.fullName = fullName;
  user.career = career;
  user.location = location;
  user.about = about;
  await user.save({ validateBeforeSave: false });

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        user,
      },
      "User updated successfully"
    )
  );
});

export const updateUserSkills = asyncHandler(async (req, res) => {
  const loggedInUser = req.user;
  const id = req.params.id;
  const skills = req.body.skills;

  if (!loggedInUser) {
    throw new ApiError(401, "Unauthorized user!");
  }

  if (!id) {
    throw new ApiError(400, "User id is required!");
  }

  if (!skills || skills?.length == 0) {
    throw new ApiError(400, "Skills array is required!");
  }

  if (String(loggedInUser._id) !== String(id)) {
    throw new ApiError(401, "Unauthorized user!");
  }

  const user = await User.findById(loggedInUser._id)?.select(
    "-password -refreshToken -role"
  );

  user.skills = skills;
  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new ApiResponse(200, { user }, "Skills updated successfully!"));
});

export const deleteUser = asyncHandler(async (req, res) => {
  const loggedInUser = req.user;
  const id = req.params.id;

  if (!loggedInUser) {
    throw new ApiError(401, "Unauthorized user!");
  }

  if (!id) {
    throw new ApiError(400, "Invalid user id!");
  }

  if (String(loggedInUser._id) !== String(id)) {
    throw new ApiError(401, "User is unauthorized to deleted user");
  }

  const user = User.findByIdAndDelete(loggedInUser._id);

  if (!user) {
    throw new ApiError(404, "User not found!");
  }

  return res
    .status(200)
    .clearCookie("accessToken")
    .clearCookie("refreshToken")
    .json(new ApiResponse(200, {}, "User account deleted successfully"));
});

// export const searchUser = asyncHandler(async(req, res) => {
//   const {username, fullName, skills} = req.query

//   const query = {}

//   if(username) query.username = username
//   if(fullName) query.fullName = fullName
//   if (skills && skills.length > 0) query.skills = { $in: skills }

//   const user = await User.find(query)?.select("-password -refreshToken -role")

//   return res.status(200).json(new ApiResponse(200, {user}, "User fetched successfully"))

// })

export const searchUser = asyncHandler(async (req, res) => {
  const name = req.query.name;
  const skills = req.query.skills;

  const searchQuery = [];

  if (name) {
    searchQuery.push(
      { username: { $regex: new RegExp(name, "gi") } },
      { fullName: { $regex: new RegExp(name, "gi") } }
    );
  }

  if (skills || skills?.length > 0) {
    searchQuery.push({ skills: { $in: skills } });
  }

  console.log(searchQuery);

  const users = await User.find({
    $or: searchQuery,
  })?.select("-password -refreshToken -role");

  return res.status(200).json(users);
});

export const bookmark = asyncHandler(async (req, res) => {
  const loggedInUser = req.user;
  const { id } = req.params;
  const { blogId } = req.body;

  if (!id) {
    throw new ApiError(400, "Invalid user id");
  }

  if (!loggedInUser) {
    throw new ApiError(401, "User must be logged in to use these features");
  }

  if (!blogId) {
    throw new ApiError(400, "Blog id is required");
  }

  const blog = await Blog.findById(blogId);

  if (!blog) {
    throw new ApiError(404, "Blog not found");
  }

  const user = await User.findById(id)?.select("-password -refreshToken -role");

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const isBookmarked = user.bookmark.includes(blogId);

  if (isBookmarked) {
    user.bookmark = user.bookmark.filter(
      (item) => String(item) !== String(blogId)
    );
    await user.save({ validateBeforeSave: false });
    return res.status(200).json(
      new ApiResponse(
        200,
        {
          user,
        },
        "Bookmark removed successfully"
      )
    );
  }

  user.bookmark.push(blogId);
  await user.save({ validateBeforeSave: false });

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        user,
      },
      "Bookmark added successfully"
    )
  );
});

export const follow = asyncHandler(async (req, res) => {
  const loggedInUser = req.user;
  const { id } = req.params;
  const { userId } = req.body;

  if (!loggedInUser) {
    throw new ApiError(401, "User must be logged in to use these features");
  }

  if (!id) {
    throw new ApiError(400, "Invalid user id");
  }

  if (!userId) {
    throw new ApiError(400, "Followed user id is required");
  }

  const user = await User.findById(id)?.select("-password -refreshToken -role");

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const followedUser = await User.findById(userId);

  if (!followedUser) {
    throw new ApiError(404, "Followed user not found");
  }

  if (String(user._id) === String(followedUser._id)) {
    throw new ApiError(400, "You cannot follow yourself");
  }

  const isFollowed = user.following.includes(userId);

  if (isFollowed) {
    followedUser.followers = followedUser.followers.filter(
      (item) => String(item) !== String(user._id)
    );
    await followedUser.save({ validateBeforeSave: false });

    user.following = user.following.filter(
      (item) => String(item) !== String(userId)
    );
    await user.save({ validateBeforeSave: false });
    return res.status(200).json(
      new ApiResponse(
        200,
        {
          user,
          isFollowed: false,
        },
        "Follow removed successfully"
      )
    );
  }

  followedUser.followers.push(user._id);
  await followedUser.save({ validateBeforeSave: false });

  // add follow to user

  user.following.push(userId);
  await user.save({ validateBeforeSave: false });

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        user,
        isFollowed: true,
      },
      "Follow added successfully"
    )
  );
});

// for admins only
export const createUser = asyncHandler(async (req, res) => {
  const currentUser = req.user;

  if (!currentUser) {
    throw new ApiError(401, "Unauthorized access");
  }

  if (currentUser.role !== "admin") {
    throw new ApiError(403, "You are not authorized to create user");
  }

  const { username, fullName, email, password, role } = req.body;

  if (
    [username, fullName, email, password, role].some(
      (field) => !field || field.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const userExists = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (userExists) {
    throw new ApiError(400, "User with same username or email already exists");
  }

  const user = await User.create({
    username,
    fullName,
    email,
    password,
    role,
  });

  if (!user) {
    throw new ApiError(500, "Error while creating user");
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        user,
      },
      "User created successfully"
    )
  );
});

export const changeRole = asyncHandler(async (req, res) => {
  const currentUser = req.user;
  const id = req.params.id;
  const role = req.body.role;

  if (!currentUser) {
    throw new ApiError(401, "Unauthorized access");
  }

  if (currentUser.role !== "admin") {
    throw new ApiError(403, "You are not authorized to change role");
  }

  if (!id) {
    throw new ApiError(400, "Invalid user id");
  }

  if (!role) {
    throw new ApiError(400, "Role is required");
  }

  const user = await User.findByIdAndUpdate(
    id,
    {
      $set: {
        role,
      },
    },
    { new: true }
  );

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        user,
      },
      `Role updated successfully to ${role}`
    )
  );
});

export const deleteUserByAdmin = asyncHandler(async (req, res) => {
  const currentUser = req.user;
  const id = req.params.id;

  if (!currentUser) {
    throw new ApiError(401, "Unauthorized access");
  }

  if (currentUser.role !== "admin") {
    throw new ApiError(403, "You are not authorized to delete user");
  }

  if (!id) {
    throw new ApiError(400, "Invalid user id");
  }

  const user = await User.findByIdAndDelete(id);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {},
      "User deleted successfully by admin"
    )
  );
})

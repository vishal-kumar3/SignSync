
import jwt from "jsonwebtoken"
import { User } from "../models/user.models.js"
import { ApiError } from "../utils/ApiError.js"
import { asyncHandler } from "../utils/asyncHandler.js"


export const verifyJWT = asyncHandler(async(req, res, next) => {

  try {
    const token = req.cookies?.accessToken || req.header("Authorizaton")?.replace("Bearer ", "")
    
    if(!token){
        req.user = null
        return next()
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
    const user = await User.findById(decodedToken?._id).select("-password -refreshToken -role")

    if(!user){
        throw new ApiError(401, "Unauthorized request")
    }

    req.user = user
    next()
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid AccessToken")
  }
})

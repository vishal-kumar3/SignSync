import mongoose from "mongoose";
import { Comment } from "../models/comment.models.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Blog } from "../models/blog.models.js";

// create Comment function is in blog controller.

export const getCommentById = asyncHandler(async(req, res) => {
    const commentId = req.params.id

    if(!commentId){
        throw new ApiError(400, "Comment id is required!!!")
    }

    const commentIdObject = new mongoose.Types.ObjectId(`${commentId}`)

    if(!commentIdObject){
        throw new ApiError(400, "Comment id is invalid")
    }

    const comment = await Comment.findById(commentId)

    if(!comment){
        throw new ApiError(404, `No comment exists with this ${commentId} id!!!`)
    }

    return res
        .status(200)
        .json(new ApiResponse(
            200,
            {
                comment
            },
            "Comment fetched successfully"
        ))
})

export const getAllComment = asyncHandler(async(req, res) => {
    const comment = await Comment.find()

    if(!comment){
        throw new ApiError(500, "server error not able to fetch all comments")
    }

    return res
        .status(200)
        .json(new ApiResponse(
            200,
            {
                comment
            },
            "All comments fetched successfully"
        ))

})

export const updateComment = asyncHandler(async(req, res) => {
    const commentId = req.params.id
    const {content} = req.body
    const loggedInUser = req.user

    if(!loggedInUser){
        throw ApiError(401, "you are unauthorized to update or create comment")
    }

    if(!content || content.trim() === "")

    if(!commentId){
        throw new ApiError(400, "Comment id is required!!!")
    }

    const commentIdObject = new mongoose.Types.ObjectId(`${commentId}`)

    if(!commentIdObject){
        throw new ApiError(400, "Comment id is invalid")
    }

    const comment = await Comment.findById(commentId)

    if(!comment){
        throw new ApiError(404, `No comment exists with this ${commentId} id!!!`)
    }

    if(String(comment.owner) !== String(loggedInUser._id)){
        throw new ApiError(401, "You are unauthenticated to update this comment")
    }

    comment.content = content
    await comment.save({validateBeforeSave: false})

    return res
        .status(200)
        .json(new ApiResponse(
            200,
            {
                comment
            },
            "Comment fetched successfully"
        ))
})

export const deleteComment = asyncHandler(async(req, res) => {
    const commentId = req.params.id
    const loggedInUser = req.user

    if(!loggedInUser){
        throw new ApiError(401, "You need to log in first to use these features")
    }

    if(!commentId){
        throw new ApiError("Invalid comment id")
    }

    const commentIdObject = new mongoose.Types.ObjectId(`${commentId}`)

    if(!commentIdObject){
        throw new ApiError(400, "Comment id is invalid")
    }

    const comment = await Comment.findById(commentId)

    if(!comment){
        throw new ApiError(404, `No comment exists with this ${commentId} id!!!`)
    }

    if(String(comment.owner) !== String(loggedInUser._id)){
        throw new ApiError(401, "You are unauthenticated to delete this comment")
    }

    // nested comment
    console.log("Initial ",commentId)
    const deleteReply = async function(commentId){
        const comment = await Comment.findById(commentId)

        if(!comment){
            return ;
        }

        comment.comment.map(async(replyId, i) =>{
            try {
                await deleteReply(replyId)
            } catch (error) {
                throw new ApiError(500, "Error while recursive call")
            }
        })

        const blog = await Blog.findById(comment.blog)
    
        // if reply hua
        if(!blog){
            const deletedComment = await Comment.findByIdAndDelete(commentId)
    
            if(!deletedComment){
                throw new ApiError(500, "Server error while deleting the comment")
            }
    
            return res
            .status(200)
        }
        
        blog.comment = blog.comment.filter((id) => {
            return String(id) !== String(commentId)
        })
        await blog.save({validateBeforeSave:false})
        
        const deletedComment = await Comment.findByIdAndDelete(commentId)
    
        if(!deletedComment){
            throw new ApiError(500, "Server error while deleting the comment")
        }

        return res
        .status(200)
        .json(new ApiResponse(
            200,
            {
                deletedComment,
                blog
            },
            "Comment deleted successfully"
        ))
    }

    comment.comment.map(async(replyId, i) => {
        await deleteReply(replyId)
    })

    const blog = await Blog.findById(comment.blog)
    
        // if reply hua
    if(!blog){
        const deletedComment = await Comment.findByIdAndDelete(commentId)
    
        if(!deletedComment){
            throw new ApiError(500, "Server error while deleting the comment")
        }

        return res
        .status(200)
    }
        
    blog.comment = blog.comment.filter((id) => {
        return String(id) !== String(commentId)
    })
    await blog.save({validateBeforeSave:false})
    
    const deletedComment = await Comment.findByIdAndDelete(commentId)
    if(!deletedComment){
        throw new ApiError(500, "Server error while deleting the comment")
    }

    return res
        .status(200)
        .json(new ApiResponse(
            200,
            {
                deleteComment,
                blog
            },
            "Comments deleted successfully"
        ))
})

export const replyComment = asyncHandler(async(req, res) => {
    const commentId = req.params.id
    const {content} = req.body
    const user = req.user

    if(!user){
        throw new ApiError(401, "Please log in to use this feature!!!")
    }

    if(!commentId){
        throw new ApiError(400, "Comment id is required!!!")
    }

    const commentIdObject = new mongoose.Types.ObjectId(`${commentId}`)

    if(!commentIdObject){
        throw new ApiError(400, "Comment id is invalid")
    }

    const comment = await Comment.findById(commentId)

    if(!comment){
        throw new ApiError(404, `No comment exists with this ${commentId} id!!!`)
    }

    const reply = await Comment.create({
        content,
        owner: user._id,
    })

    if(!reply){
        throw new ApiError(500, "server error while creating reply")
    }

    comment.comment.push(reply._id)
    await comment.save({validateBeforeSave:false})

    return res
        .status(200)
        .json(new ApiResponse(
            200,
            {
                reply
            },
            "Reply commented successfully"
        ))
})